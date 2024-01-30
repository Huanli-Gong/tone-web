# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author:
"""
from django.db.models import Q
import tarfile
import yaml
import requests
import os
import shutil
import stat
import uuid
from django.db import transaction
from django_q.tasks import async_task
from tone import settings

from tone.core.common.constant import OFFLINE_DATA_DIR
from tone.settings import MEDIA_ROOT
from tone.core.utils.sftp_client import sftp_client
from tone.core.common.services import CommonService
from tone.core.utils.tone_thread import ToneThread
from tone.core.utils.common_utils import query_all_dict
from tone.models import Baseline, FuncBaselineDetail, PerfBaselineDetail, TestJob, PerfResult, TestJobCase, \
    TestSuite, TestCase, Project, TestStep, FuncResult, TestMetric, TestServerSnapshot, \
    CloudServerSnapshot, BaselineServerSnapshot, BaselineDownloadRecord, TestClusterSnapshot, TestClusterServerSnapshot
from tone.services.portal.sync_portal_task_servers import sync_baseline, sync_baseline_del
from tone.serializers.sys.baseline_serializers import FuncBaselineDetailSerializer, PerfBaselineDetialSerializer
from tone.core.common.expection_handler.error_code import ErrorCode


def back_fill_version(func):
    """加入基线详情，基线产品版本为空，进行回填"""
    def init(_, data, user_id):
        res = func(_, data, user_id)
        baseline_id = PerfBaselineService().get_baseline_id(data)
        baseline = Baseline.objects.filter(id=baseline_id).first()
        if baseline is not None and not baseline.version:
            test_job_id = data.get('job_id')
            test_job = TestJob.objects.filter(id=test_job_id).first()
            if test_job is not None:
                project_id = test_job.project_id
                project = Project.objects.filter(id=project_id).first()
                if project is not None:
                    baseline.version = project.product_version
                    baseline.save()
        return res
    return init


class BaselineService(CommonService):

    def filter(self, queryset, data):
        q = Q()
        if data.get('id'):
            q &= Q(id=data.get('id'))
        if data.get('name'):
            q &= Q(name__icontains=data.get('name'))
        if data.get('version'):
            q &= Q(version=data.get('version')) | Q(version='')
        if data.get('test_type'):
            q &= Q(test_type=data.get('test_type'))
        if data.get('server_provider'):
            q &= Q(server_provider=data.get('server_provider'))
        if data.get('ws_id'):
            q &= Q(ws_id=data.get('ws_id'))
        if data.get('creator'):
            q &= Q(creator__in=data.getlist('creator'))
        if data.get('update_user'):
            q &= Q(update_user__in=data.getlist('update_user'))
        q = self.expand_filter(data, q)
        return queryset.filter(q)

    def filter_by_name(self, queryset, data):
        return queryset.filter(name=data.get('name'), ws_id=data.get('ws_id'))

    @staticmethod
    def expand_filter(data, q):
        if data.get('filter_id'):
            q &= ~Q(id__in=data.get('filter_id').split(','))
        if data.get('filter_version'):
            q &= Q(version=data.get('filter_version'))
        return q

    @staticmethod
    def create(data, operator):
        creator = operator.id
        name = data.get('name')
        ws_id = data.get('ws_id')
        baseline = Baseline.objects.filter(name=name, ws_id=ws_id).first()
        if baseline:
            return False, ErrorCode.BASELINE_EXISTS.to_api
        data.update({'creator': creator})
        form_fields = ['name', 'version', 'description', 'test_type', 'creator', 'ws_id']
        create_data = dict()
        for field in form_fields:
            create_data.update({field: data.get(field)})
        baseline = Baseline.objects.create(**create_data)
        return True, baseline

    @staticmethod
    def update(data, operator):
        update_user = operator.id
        name = data.get('name')
        test_type = data.get('test_type')
        ws_id = data.get('ws_id')
        baseline_id = data.get("baseline_id")
        baseline = Baseline.objects.filter(name=name, test_type=test_type, ws_id=ws_id).first()
        if baseline is not None and str(baseline.id) != str(baseline_id):
            return False, ErrorCode.BASELINE_EXISTS.to_api
        allow_modify_fields = ['name', 'description']
        baseline = Baseline.objects.filter(id=baseline_id)
        if baseline.first() is None:
            return False, ErrorCode.BASELINE_NOT_EXISTS.to_api
        async_task(sync_baseline, baseline_id)
        update_data = dict()
        data.update({'update_user': update_user})
        for field in allow_modify_fields:
            if data.get(field) is not None:
                update_data.update({field: data.get(field)})
        baseline.update(**update_data)
        return True, baseline.first()

    @staticmethod
    def delete(data):
        baseline_id = data.get("baseline_id")
        async_task(sync_baseline_del, baseline_id)
        # 删除基线分类
        Baseline.objects.filter(id=baseline_id).delete()
        # 删除基线相关的其他信息
        for func_baseline_detail in FuncBaselineDetail.objects.filter(baseline_id=baseline_id):
            FuncResult.objects.filter(test_job_id=func_baseline_detail.source_job_id,
                                      test_suite_id=func_baseline_detail.test_suite_id,
                                      test_case_id=func_baseline_detail.test_case_id,
                                      sub_case_name=func_baseline_detail.sub_case_name,
                                      ).update(bug=None, description=None, match_baseline=False)
        FuncBaselineDetail.objects.filter(baseline_id=baseline_id).delete()
        PerfBaselineDetail.objects.filter(baseline_id=baseline_id).delete()
        BaselineServerSnapshot.objects.filter(baseline_id=baseline_id).delete()

    def download(self, baseline_id):
        if BaselineDownloadRecord.objects.filter(baseline_id=baseline_id).exists():
            BaselineDownloadRecord.objects.filter(baseline_id=baseline_id).update(state='running')
        else:
            BaselineDownloadRecord.objects.create(**dict({'baseline_id': baseline_id, 'state': 'running'}))
        upload_thread = ToneThread(self._post_background, args=(baseline_id,))
        upload_thread.start()

    def _post_background(self, baseline_id):
        try:
            offline_path = MEDIA_ROOT + OFFLINE_DATA_DIR
            if not os.path.exists(offline_path):
                os.makedirs(offline_path)
            file_path = offline_path + '/' + str(baseline_id)
            self.del_dir(file_path)
            os.makedirs(file_path)
            baseline_yaml = file_path + '/baseline.yaml'
            baseline = Baseline.objects.filter(id=baseline_id).first()
            if baseline:
                tar_file_name = '/%s.tar.gz' % baseline.name
                target_file = file_path + tar_file_name
                baseline_detail_list = list()
                raw_sql = 'SELECT a.*,b.name AS test_suite_name, c.name AS test_case_name FROM ' \
                          '%s a LEFT JOIN test_suite b ON a.test_suite_id=b.id LEFT JOIN test_case c ON ' \
                          'a.test_case_id=c.id WHERE a.is_deleted=0 and b.is_deleted=0 and c.is_deleted=0 and ' \
                          'baseline_id=' + baseline_id
                if baseline.test_type == 'functional':
                    func_raw_sql = raw_sql % 'func_baseline_detail'
                    baseline_detail = query_all_dict(func_raw_sql, params=None)
                    if baseline_detail:
                        for detail in baseline_detail:
                            detail_dict = dict(
                                test_suite_name=detail.get('test_suite_name'),
                                test_case_name=detail.get('test_case_name'),
                                sub_case_name=detail.get('sub_case_name'),
                                impact_result=detail.get('impact_result'),
                                bug=detail.get('bug'),
                                description=detail.get('description'),
                                note=detail.get('note'),
                            )
                            baseline_detail_list.append(detail_dict)
                else:
                    perf_raw_sql = raw_sql % 'perf_baseline_detail'
                    baseline_detail = query_all_dict(perf_raw_sql, params=None)
                    if baseline_detail:
                        for detail in baseline_detail:
                            detail_dict = dict(
                                test_suite_name=detail.get('test_suite_name'),
                                test_case_name=detail.get('test_case_name'),
                                server_ip=detail.get('server_ip'),
                                server_sn=detail.get('server_sn'),
                                server_sm_name=detail.get('server_sm_name'),
                                server_instance_type=detail.get('server_instance_type'),
                                server_image=detail.get('server_image'),
                                server_bandwidth=detail.get('server_bandwidth'),
                                run_mode=detail.get('run_mode'),
                                metric=detail.get('metric'),
                                test_value=detail.get('test_value'),
                                unit=detail.get('unit'),
                                cv_value=detail.get('cv_value'),
                                max_value=detail.get('max_value'),
                                min_value=detail.get('min_value'),
                                value_list=detail.get('value_list'),
                                note=detail.get('note'),
                            )
                            baseline_detail_list.append(detail_dict)
                baseline_server_list = list()
                server_raw_sql = raw_sql % 'baseline_server_snapshot'
                server_detail = query_all_dict(server_raw_sql, params=None)
                for server_info in server_detail:
                    server_dict = dict(
                        test_suite_name=server_info.get('test_suite_name'),
                        test_case_name=server_info.get('test_case_name'),
                        ip=server_info.get('ip'),
                        sn=server_info.get('sn'),
                        image=server_info.get('image'),
                        bandwidth=server_info.get('bandwidth'),
                        sm_name=server_info.get('sm_name'),
                        kernel_version=server_info.get('kernel_version'),
                        distro=server_info.get('distro'),
                        gcc=server_info.get('gcc'),
                        rpm_list=server_info.get('rpm_list'),
                        glibc=server_info.get('glibc'),
                        memory_info=server_info.get('memory_info'),
                        disk=server_info.get('disk'),
                        cpu_info=server_info.get('cpu_info'),
                        ether=server_info.get('ether'),
                    )
                    baseline_server_list.append(server_dict)
                baseline_dict = dict(
                    name=baseline.name,
                    version=baseline.version,
                    description=baseline.description,
                    test_type=baseline.test_type,
                    server_provider=baseline.server_provider,
                    baseline_detail_list=baseline_detail_list,
                    baseline_server_list=baseline_server_list
                )
                with open(baseline_yaml, 'w', encoding='utf-8') as f:
                    yaml.dump(baseline_dict, f)
                tf = tarfile.open(name=target_file, mode='w:gz')
                tf.add(baseline_yaml, arcname='baseline.yaml')
                tf.close()
                oss_file = OFFLINE_DATA_DIR + tar_file_name
                ftp_path = oss_file.replace(MEDIA_ROOT.strip('/'), '')
                res = sftp_client.upload_file(target_file, ftp_path)
                if res:
                    oss_link = f'http://{settings.TONE_STORAGE_DOMAIN}:' + str(sftp_client.proxy_port) + ftp_path
                    self.del_dir(file_path)
                    BaselineDownloadRecord.objects.filter(baseline_id=baseline_id).\
                        update(state='success', target_url=oss_link)
                else:
                    BaselineDownloadRecord.objects.filter(baseline_id=baseline_id).\
                        update(state='success', target_url='ftp upload fail.')
            else:
                BaselineDownloadRecord.objects.filter(baseline_id=baseline_id). \
                    update(state='fail', target_url='baseline not exists')
        except Exception as e:
            BaselineDownloadRecord.objects.filter(baseline_id=baseline_id).update(state='fail', target_url=str(e))

    def download_file(self, url, target_file):
        req = requests.get(url)
        with open(target_file, 'wb') as f:
            f.write(req.content)

    def del_dir(self, path):
        while 1:
            if not os.path.exists(path):
                break
            try:
                shutil.rmtree(path)
            except PermissionError as e:
                err_file_path = str(e).split("\'", 2)[1]
                if os.path.exists(err_file_path):
                    os.chmod(err_file_path, stat.S_IWUSR)


class BaselineUploadService(CommonService):
    def post(self, data, file, operator):
        if not operator or not operator.id:
            return ErrorCode.LOGIN_ERROR.code, ErrorCode.LOGIN_ERROR.to_api, None
        file_path = MEDIA_ROOT + OFFLINE_DATA_DIR
        if not os.path.exists(file_path):
            os.makedirs(file_path)
        file_name = file_path + '/' + str(uuid.uuid4()) + '.' + 'tar'
        error_list = dict()
        try:
            file_bytes = file.read()
            with open(file_name, 'wb') as f:
                f.write(file_bytes)
            tar_file = tarfile.open(file_name, 'r')
            baseline_info = yaml.load(tar_file.extractfile('baseline.yaml').read(), Loader=yaml.FullLoader)
            if baseline_info.get('test_type') != data.get('test_type'):
                return ErrorCode.TEST_TYPE_NOT_MATCH.code, ErrorCode.TEST_TYPE_NOT_MATCH.to_api, None
            baseline_dict = dict(
                name=data.get('name', baseline_info.get('name')),
                version=baseline_info.get('version'),
                description=baseline_info.get('description'),
                test_type=baseline_info.get('test_type'),
                server_provider=baseline_info.get('server_provider'),
                ws_id=data.get('ws_id'),
                creator=operator.id,
                update_user=operator.id
            )
            with transaction.atomic():
                baseline = Baseline.objects.create(**baseline_dict)
                baseline_detail_list = baseline_info.get('baseline_detail_list', list())
                baseline_server_list = baseline_info.get('baseline_server_list', list())
                code, msg, func_obj_list, perf_obj_list, server_obj_list, error_list = \
                    self.build_baseline_data(baseline, baseline_detail_list, baseline_server_list, operator)
                if code == 201:
                    return code, ErrorCode.PARAMS_ERROR.to_params_api(msg), error_list
                if func_obj_list:
                    FuncBaselineDetail.objects.bulk_create(func_obj_list)
                if perf_obj_list:
                    PerfBaselineDetail.objects.bulk_create(perf_obj_list)
                if server_obj_list:
                    BaselineServerSnapshot.objects.bulk_create(server_obj_list)
            tar_file.close()
            os.remove(file_name)
        except KeyError:
            code = ErrorCode.UPLOAD_FILE_EMPTY.code
            msg = ErrorCode.UPLOAD_FILE_EMPTY.to_api
        except tarfile.ReadError:
            code = ErrorCode.UPLOAD_FILE_FORMAT.code
            msg = ErrorCode.UPLOAD_FILE_FORMAT.to_api
        except Exception as ex:
            code = 201
            msg = ''
        return code, msg, error_list

    def build_baseline_data(self, baseline, baseline_detail_list, baseline_server_list, operator):
        code = 200
        msg = '上传成功。'
        server_obj_list = list()
        func_obj_list = list()
        perf_obj_list = list()
        test_suite_list = dict()
        test_case_list = dict()
        error_list = dict()
        for detail in baseline_detail_list:
            test_suite_name = detail.get('test_suite_name')
            test_case_name = detail.get('test_case_name')
            test_suite_id = test_suite_list.get(test_suite_name, None)
            if not test_suite_id:
                test_suite = TestSuite.objects.filter(name=test_suite_name).first()
                if not test_suite:
                    if test_suite_name not in error_list:
                        error_list[test_suite_name] = list()
                    if test_case_name not in error_list[test_suite_name]:
                        error_list[test_suite_name].append(test_case_name)
                    continue
                test_suite_list[test_suite_name] = test_suite_id = test_suite.id
            test_case_id = test_case_list.get(test_suite_name + test_case_name, None)
            if not test_case_id:
                test_case = TestCase.objects.filter(name=test_case_name, test_suite_id=test_suite_id).first()
                if not test_case:
                    if test_suite_name not in error_list:
                        error_list[test_suite_name] = list()
                    if test_case_name not in error_list[test_suite_name]:
                        error_list[test_suite_name].append(test_case_name)
                    continue
                test_case_list[test_suite_name + test_case_name] = test_case_id = test_case.id
            if baseline.test_type == 'functional':
                func_obj = FuncBaselineDetail(
                    baseline_id=baseline.id,
                    test_job_id=0,
                    test_suite_id=test_suite_id,
                    test_case_id=test_case_id,
                    sub_case_name=detail.get('sub_case_name'),
                    impact_result=detail.get('impact_result'),
                    bug=detail.get('bug'),
                    description=detail.get('description'),
                    note=detail.get('note'),
                    creator=operator.id,
                    update_user=operator.id
                )
                func_obj_list.append(func_obj)
            else:
                perf_obj = PerfBaselineDetail(
                    baseline_id=baseline.id,
                    test_job_id=0,
                    test_suite_id=test_suite_id,
                    test_case_id=test_case_id,
                    server_ip=detail.get('server_ip'),
                    server_sn=detail.get('server_sn'),
                    server_sm_name=detail.get('server_sm_name'),
                    server_instance_type=detail.get('server_instance_type'),
                    server_image=detail.get('server_image'),
                    server_bandwidth=detail.get('server_bandwidth'),
                    run_mode=detail.get('run_mode'),
                    source_job_id=0,
                    metric=detail.get('metric'),
                    test_value=detail.get('test_value'),
                    cv_value=detail.get('cv_value'),
                    max_value=detail.get('max_value'),
                    min_value=detail.get('min_value'),
                    value_list=detail.get('value_list'),
                    note=detail.get('note'),
                    creator=operator.id,
                    update_user=operator.id
                )
                perf_obj_list.append(perf_obj)
        for server_info in baseline_server_list:
            test_suite_name = server_info.get('test_suite_name')
            test_suite_id = test_suite_list.get(test_suite_name, None)
            if not test_suite_id:
                test_suite = TestSuite.objects.filter(name=test_suite_name).first()
                if not test_suite:
                    code = 201
                    msg = 'suite %s 不存在，请先添加suite再上传。' % test_suite_name
                    break
                test_suite_list[test_suite_name] = test_suite_id = test_suite.id
            test_case_name = server_info.get('test_case_name')
            test_case_id = test_case_list.get(test_suite_name + test_case_name, None)
            if not test_case_id:
                test_case = TestCase.objects.filter(name=test_case_name, test_suite_id=test_suite_id).first()
                if not test_case:
                    code = 201
                    msg = 'case %s 不存在，请先添加case再上传。' % test_case_name
                    break
                test_case_list[test_suite_name + test_case_name] = test_case_id = test_case.id
            server_obj = BaselineServerSnapshot(
                baseline_id=baseline.id,
                test_job_id=0,
                test_suite_id=test_suite_id,
                test_case_id=test_case_id,
                ip=server_info.get('ip'),
                sn=server_info.get('sn'),
                image=server_info.get('image'),
                bandwidth=server_info.get('bandwidth'),
                sm_name=server_info.get('sm_name'),
                kernel_version=server_info.get('kernel_version'),
                distro=server_info.get('distro'),
                gcc=server_info.get('gcc'),
                rpm_list=server_info.get('rpm_list'),
                glibc=server_info.get('glibc'),
                memory_info=server_info.get('memory_info'),
                disk=server_info.get('disk'),
                cpu_info=server_info.get('cpu_info'),
                ether=server_info.get('ether'),
            )
            server_obj_list.append(server_obj)
        return code, msg, func_obj_list, perf_obj_list, server_obj_list, error_list


class FuncBaselineService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        if data.get('baseline_id'):
            q &= Q(baseline_id=data.get('baseline_id'))
        if data.get('test_suite_id'):
            q &= Q(test_suite_id=data.get('test_suite_id'))
        if data.get('test_case_id'):
            q &= Q(test_case_id=data.get('test_case_id'))
        return queryset.filter(q)

    @staticmethod
    def get(queryset, data):
        """根据请求参数判断请求返回信息"""
        response_data = []
        baseline_id = data.get("baseline_id")
        queryset = queryset.filter(baseline_id=baseline_id)
        test_suite_id = data.get("test_suite_id")

        # 参数为空，返回Test Suite列表
        if not test_suite_id:
            suite_id_list = queryset.values_list("test_suite_id", flat=True)
            for suite_id in set(suite_id_list):
                # 被删除suite的基线不再展示
                if not TestSuite.objects.filter(id=suite_id).exists():
                    continue
                # 被删除case的基线suite不再展示
                case_id_list = queryset.filter(test_suite_id=suite_id).values_list("test_case_id", flat=True)
                if not TestCase.objects.filter(id__in=case_id_list).exists():
                    continue
                suite_data = {}
                q = Q(id=suite_id)
                if data.get('name'):
                    q &= Q(name__icontains=data.get('name'))
                if TestSuite.objects.filter(q).exists():
                    suite_name = TestSuite.objects.filter(q).first().name
                    suite_data["test_suite_name"] = suite_name
                    suite_data["test_suite_id"] = suite_id
                    response_data.append(suite_data)
        else:
            suite_id = data.get("test_suite_id", "")
            case_id = data.get("test_case_id", "")

            if suite_id:
                queryset = queryset.filter(test_suite_id=suite_id)
                # failcase展开, 展示信息
                # sub_case_name, bug, source_job_id, impact_result, note
                if case_id:
                    queryset = queryset.filter(test_case_id=case_id)
                    return True, queryset
                # conf展开
                else:
                    case_id_list = queryset.values_list("test_case_id", flat=True)
                    for case_id in set(case_id_list):
                        # 被删除case的基线不再展示
                        if not TestCase.objects.filter(id=case_id).exists():
                            continue
                        case_data = {}
                        case_name = TestCase.objects.get(id=case_id).name
                        case_data["test_case_name"] = case_name
                        case_data["test_case_id"] = case_id
                        response_data.append(case_data)

        return False, response_data

    @staticmethod
    def back_fill_version(baseline_id_list, data):
        """回填Job版本号"""
        # 详情加入成功后，会填基线版本
        tmp_baselines = Baseline.objects.filter(id__in=baseline_id_list)
        for tmp_baseline in tmp_baselines:
            if tmp_baseline is not None and not tmp_baseline.version:
                test_job_id = data.get('test_job_id')
                test_job = TestJob.objects.filter(id=test_job_id).first()
                if test_job is not None:
                    project_id = test_job.project_id
                    project = Project.objects.filter(id=project_id).first()
                    if project is not None:
                        tmp_baseline.version = project.product_version
                        tmp_baseline.save()

    def create(self, data, user_id):
        baseline_id_list = data.get('baseline_id', [])
        test_type = data.get('test_type', 'functional')
        ws_id = data.get('ws_id', 'xwgpiwkk')
        test_job_id = data.get('test_job_id')
        test_suite_id = data.get('test_suite_id')
        test_case_id = data.get('test_case_id')
        sub_case_name = data.get('sub_case_name')
        result_id = data.get('result_id')
        func_result = None
        if result_id is not None:
            func_result = FuncResult.objects.filter(id=result_id).first()
            if func_result is not None:
                sub_case_name = func_result.sub_case_name
        func_baseline_detail_list = list()
        msg = 'Required request parameters'
        if not all([baseline_id_list, test_type, ws_id, test_job_id, test_suite_id, test_case_id, sub_case_name]):
            return False, msg
        server_provider, machine = self.get_job_server(test_job_id, test_suite_id, test_case_id)
        for baseline_id in baseline_id_list:
            save_baseline_server(baseline_id, server_provider, machine, test_job_id, test_suite_id, test_case_id)
            func_baseline_detail = FuncBaselineDetail.objects.filter(
                baseline_id=baseline_id, test_suite_id=test_suite_id,
                test_case_id=test_case_id, sub_case_name=sub_case_name).first()
            if data.get('impact_result'):
                func_result.match_baseline = True
            func_result.bug = data.get('bug')
            func_result.description = data.get('description')
            func_result.save()
            # 功能基线详情已经存在，更新 impact_result bug note description
            if func_baseline_detail is not None:
                for tmp_field in ['impact_result', 'bug', 'note', 'description']:
                    setattr(func_baseline_detail, tmp_field, data.get(tmp_field, ''))
                func_baseline_detail.source_job_id = test_job_id
                func_baseline_detail.update_user = user_id
                func_baseline_detail.save()
                continue
            data.update({
                'source_job_id': test_job_id,
                'baseline_id': baseline_id,
                'sub_case_name': sub_case_name,
                'update_user': user_id,
                'creator': user_id
            })
            form_fields = ['baseline_id', 'test_job_id', 'test_suite_id', 'test_case_id', 'source_job_id',
                           'impact_result', 'bug', 'note', 'description', 'sub_case_name', 'creator', 'update_user']
            create_data = dict()
            for field in form_fields:
                create_data.update({field: data.get(field)})
            func_baseline_detail_list.append(FuncBaselineDetail(**create_data))
        self.back_fill_version(baseline_id_list, data)
        # 加入基线和测试基线相同时，匹配基线
        # self.func_match_baseline(func_result, compare_baseline, baseline_id)
        return True, FuncBaselineDetail.objects.bulk_create(func_baseline_detail_list)

    def get_job_server(self, job_id, suite_id, case_id):
        server_provider = 'aliyun'
        machine = None
        test_job_case = TestJobCase.objects.filter(job_id=job_id, test_suite_id=suite_id,
                                                   test_case_id=case_id).first()
        job_case_id = test_job_case.id
        test_step_case = TestStep.objects.filter(job_id=job_id, job_case_id=job_case_id).first()
        if test_step_case and test_step_case.server:
            server_object_id = test_step_case.server
            machine = TestServerSnapshot.objects.filter(id=server_object_id, job_id=job_id, query_scope='all').first()
            if machine is not None:
                server_provider = 'aligroup'
            else:
                machine = CloudServerSnapshot.objects.filter(id=server_object_id, job_id=job_id, query_scope='all'). \
                    first()
                if machine is not None:
                    server_provider = 'aliyun'
        return server_provider, machine

    @staticmethod
    def func_match_baseline(func_result, compare_baseline, baseline_id):
        """功能匹配基线"""
        if func_result is not None and compare_baseline == baseline_id:
            func_result.match_baseline = True
            func_result.save()

    @staticmethod
    def update(data, user_id):
        """编辑FailCase信息"""
        detail_id = data.get("id")
        allow_modify_fields = ['bug', 'impact_result', 'note', 'description']
        baseline_detail = FuncBaselineDetail.objects.filter(id=detail_id)
        if baseline_detail.first() is None:
            return False, '功能基线详情不存在'
        update_data = dict()
        for field in allow_modify_fields:
            if data.get(field) is not None:
                update_data.update({field: data.get(field)})
        update_data['update_user'] = user_id
        baseline_detail.update(**update_data)
        async_task(sync_baseline, baseline_detail.first().baseline_id)
        return True, baseline_detail.first()

    @staticmethod
    def delete(data):
        detail_id = data.get("id")
        # 基线删除，匹配基线更新为 False
        func_detail = FuncBaselineDetail.objects.filter(id=detail_id).first()
        if func_detail is not None:
            FuncResult.objects.filter(test_suite_id=func_detail.test_suite_id,
                                      test_job_id=func_detail.source_job_id,
                                      test_case_id=func_detail.test_case_id,
                                      sub_case_name=func_detail.sub_case_name).update(bug=None,
                                                                                      description=None,
                                                                                      match_baseline=False)

        baseline_id = func_detail.baseline_id
        func_detail.delete()
        async_task(sync_baseline, baseline_id)


def get_job_baseline_server(job_id, case_id):
    snap_server_id = None
    test_job_case = TestJobCase.objects.filter(job_id=job_id, test_case_id=case_id).first()
    test_step_case = TestStep.objects.filter(job_id=job_id, job_case_id=test_job_case.id).first()
    server_provider = test_job_case.server_provider
    if test_job_case.run_mode == 'cluster':
        test_cluster_snap = TestClusterSnapshot.objects.filter(id=test_job_case.server_snapshot_id).first()
        baseline_server_snap = TestClusterServerSnapshot.objects.filter(
            cluster_id=test_cluster_snap.id, baseline_server=True).first()
        snap_server_id = baseline_server_snap.server_id
    else:
        if test_step_case and test_step_case.server:
            snap_server_id = test_step_case.server
    if server_provider == 'aliyun':
        machine = CloudServerSnapshot.objects.filter(id=snap_server_id, query_scope='all').first()
    else:
        machine = TestServerSnapshot.objects.filter(id=snap_server_id, query_scope='all').first()
    return server_provider, machine


def save_baseline_server(baseline_id, server_provider, machine, job_id, suite_id, case_id):
    if not machine:
        return
    if not BaselineServerSnapshot.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                                 test_case_id=case_id).exists():
        baseline_server = dict(
            baseline_id=baseline_id,
            test_job_id=job_id,
            test_suite_id=suite_id,
            test_case_id=case_id,
            ip=machine.ip if server_provider == 'aligroup' else machine.private_ip,
            sn=machine.sn,
            sm_name=machine.sm_name if server_provider == 'aligroup' else machine.instance_type,
            image=machine.image if server_provider == 'aliyun' else '',
            bandwidth=machine.bandwidth if server_provider == 'aliyun' else None,
            kernel_version=machine.kernel_version,
            distro=machine.distro,
            gcc=machine.gcc,
            rpm_list=machine.rpm_list,
            glibc=machine.glibc,
            memory_info=machine.memory_info,
            disk=machine.disk,
            cpu_info=machine.cpu_info,
            ether=machine.ether,
        )
        BaselineServerSnapshot.objects.create(**baseline_server)
    else:
        BaselineServerSnapshot.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                              test_case_id=case_id).update(
            test_job_id=job_id,
            ip=machine.ip if server_provider == 'aligroup' else machine.private_ip,
            sn=machine.sn,
            sm_name=machine.sm_name if server_provider == 'aligroup' else machine.instance_type,
            image=machine.image if server_provider == 'aliyun' else '',
            bandwidth=machine.bandwidth if server_provider == 'aliyun' else None,
            kernel_version=machine.kernel_version,
            distro=machine.distro,
            gcc=machine.gcc,
            rpm_list=machine.rpm_list,
            glibc=machine.glibc,
            memory_info=machine.memory_info,
            disk=machine.disk,
            cpu_info=machine.cpu_info,
            ether=machine.ether)


class PerfBaselineService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        if data.get('baseline_id'):
            q &= Q(baseline_id=data.get('baseline_id'))
        if data.get('test_suite_id'):
            q &= Q(test_suite_id=data.get('test_suite_id'))
        # 集团 机型
        if data.get('server_sm_name'):
            q &= Q(server_sm_name=data.get('server_sm_name'))
        # 云上 规格
        if data.get('server_instance_type'):
            q &= Q(server_instance_type=data.get('server_instance_type'))
        if data.get('test_case_id'):
            q &= Q(test_case_id=data.get('test_case_id'))
        if data.get('metric'):
            q &= Q(metric=data.get('metric'))
        return queryset.filter(q)

    def get(self, queryset, data):
        """获取性能基线详情"""
        baseline_id = data.get("baseline_id")
        # 查询集团/云上
        queryset = queryset.filter(baseline_id=baseline_id)
        response_data = []
        test_suite_id = data.get("test_suite_id")
        test_case_id = data.get("test_case_id")
        machine = data.get("server_sn")
        # 展开suite
        if not any([test_suite_id, machine, test_case_id]):
            response_data = self.get_test_suite_name(queryset, data.get('name'))
        elif test_suite_id:
            queryset = queryset.filter(test_suite_id=test_suite_id)
            if machine is not None:
                queryset = queryset.filter(server_sn=machine)
                # 展开conf
                if not test_case_id:
                    response_data = self.get_conf_info(queryset)
                # 展开metric
                else:
                    queryset = queryset.filter(test_case_id=test_case_id)
                    return True, queryset
            # 展开机器
            else:
                if test_case_id:
                    queryset = queryset.filter(test_case_id=test_case_id)
                    return True, queryset
                else:
                    response_data = self.get_conf_info(queryset)
        return False, response_data

    def create(self, data):
        """新增性能详情"""
        perf_baseline_detail = self.filter(PerfBaselineDetail.objects.all(), data).first()
        if perf_baseline_detail:
            return False, '性能基线详情不存在'
        form_fields = ['baseline_id', 'test_job_id', 'test_suite_id', 'test_case_id', 'server_ip',
                       'server_sn', 'server_sm_name', 'server_instance_type', 'server_image',
                       'server_bandwidth', 'run_mode', 'source_job_id', 'metric', 'test_value',
                       'cv_value', 'max_value', 'min_value', 'value_list', 'note']
        create_data = dict()
        for field in form_fields:
            create_data.update({field: data.get(field)})
        perf_baseline_detail = PerfBaselineDetail.objects.create(**create_data)
        return True, perf_baseline_detail

    @staticmethod
    def delete(data):
        """删除Metric信息"""
        detail_id = data.get("id")
        if PerfBaselineDetail.objects.filter(id=detail_id).exists():
            baseline_id = PerfBaselineDetail.objects.filter(id=detail_id).first().baseline_id
            PerfBaselineDetail.objects.filter(id=detail_id).delete()
            async_task(sync_baseline, baseline_id)

    @staticmethod
    def get_test_suite_name(queryset, name):
        """获取suite_name展开信息"""
        suite_id_list = queryset.values_list("test_suite_id", flat=True)
        suite_list = []
        for suite_id in set(suite_id_list):
            # 被删除suite的基线不再展示
            if not TestSuite.objects.filter(id=suite_id).exists():
                continue
            q = Q(id=suite_id)
            suite_data = {}
            if name:
                q &= Q(name__icontains=name)
            if TestSuite.objects.filter(q).exists():
                suite_name = TestSuite.objects.filter(q).first().name
                suite_data["test_suite_name"] = suite_name
                suite_data["test_suite_id"] = suite_id
                suite_list.append(suite_data)
        return suite_list

    @staticmethod
    def get_conf_info(queryset):
        """展开conf"""
        conf_list = []
        case_id_list = queryset.values_list("test_case_id", "description")
        # 根据case_id返回 case_name
        for case_id in set(case_id_list):
            # 被删除case的基线不再展示
            if not TestCase.objects.filter(id=case_id[0]).exists():
                continue
            case_name_data = {}
            case_name = TestCase.objects.get(id=case_id[0]).name
            case_name_data["test_case_name"] = case_name
            case_name_data["test_case_id"] = case_id[0]
            case_name_data["desc"] = case_id[1]
            conf_list.append(case_name_data)
        return conf_list

    @staticmethod
    def get_baseline_id(data):
        """baseline_id不存在, 则创建基线"""
        baseline_id = data.get('baseline_id')
        baseline_name = data.get('baseline_name')
        test_type = data.get('test_type', 'performance')
        ws_id = data.get('ws_id')
        if baseline_id is None:
            tmp_baseline = Baseline.objects.filter(name=baseline_name, test_type=test_type, ws_id=ws_id).first()
            # 基线名称不存在则创建基线
            if tmp_baseline is None:
                tmp_data = {
                    'name': baseline_name,
                    'test_type': test_type,
                    'ws_id': ws_id,
                }
                tmp_baseline = Baseline.objects.create(**tmp_data)
            baseline_id = tmp_baseline.id
        return baseline_id

    @back_fill_version
    def add_one_perf(self, data, user_id):
        """通过conf加入基线"""
        baseline_id = data.get('baseline_id')
        job_id = data.get('job_id')
        suite_id = data.get('suite_id')
        case_id = data.get('case_id')
        if not TestSuite.objects.filter(id=suite_id).exists() or not TestCase.objects.filter(id=case_id).exists():
            return False, ErrorCode.ADD_BASELINE_ERROR.to_api
        if not all([baseline_id, case_id, job_id, suite_id]):
            return False, ErrorCode.ADD_BASELINE_NEED_PARAMS.to_api
        test_job = TestJob.objects.filter(id=job_id).first()
        if not test_job:
            return False, ErrorCode.ADD_BASELINE_JOB_MISSING.to_api
        add_baseline_thread = ToneThread(self.add_one_perf_back, (data, test_job, user_id))
        add_baseline_thread.start()
        return True, None

    def add_one_perf_back(self, data, test_job, user_id):
        baseline_id = data.get('baseline_id')
        job_id = data.get('job_id')
        suite_id = data.get('suite_id')
        case_id = data.get('case_id')
        desc = data.get('desc')
        metrics = data.get('metric_list')
        sm_name = ''
        instance_type = ''
        image = ''
        bandwidth = 10
        machine_ip = ''
        test_job_case = TestJobCase.objects.filter(job_id=job_id, test_suite_id=suite_id, test_case_id=case_id).first()
        server_provider, machine = get_job_baseline_server(job_id, case_id)
        if machine:
            if server_provider == 'aliyun':
                if machine is not None:
                    instance_type = machine.instance_type
                    image = machine.image
                    bandwidth = machine.bandwidth
                    machine_ip = machine.pub_ip
            else:
                if machine is not None:
                    sm_name = machine.sm_name
                    machine_ip = machine.ip
            save_baseline_server(baseline_id, server_provider, machine, job_id, suite_id, case_id)
        q = Q(test_job_id=job_id, test_suite_id=suite_id, test_case_id=case_id)
        if metrics:
            q &= Q(metric__in=metrics.split(','))
        perf_res_list = PerfResult.objects.filter(q)
        create_list = []
        update_dict = dict()
        for perf_res in perf_res_list:
            perf_detail = PerfBaselineDetail.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                                            test_case_id=case_id, metric=perf_res.metric)
            create_data = PerfBaselineDetail(
                baseline_id=baseline_id,
                test_job_id=job_id,
                test_suite_id=suite_id,
                test_case_id=case_id,
                server_ip=machine_ip,
                server_sn='' if machine is None else machine.sn,
                server_sm_name=sm_name,
                server_instance_type=instance_type,
                server_image=image,
                server_bandwidth=bandwidth,
                run_mode=test_job_case.run_mode,
                source_job_id=job_id,
                metric=perf_res.metric,
                test_value=perf_res.test_value,
                cv_value=perf_res.cv_value,
                max_value=perf_res.max_value,
                min_value=perf_res.min_value,
                value_list=perf_res.value_list,
                note=test_job_case.note,
                update_user=user_id,
                description=desc
            )
            if not perf_detail.exists():
                create_data.creator = user_id
                create_list.append(create_data)
            else:
                update_dict.setdefault(str(perf_detail[0].id), create_data)
            self._add_perf_baseline_detail(job_id, suite_id, case_id, create_list, update_dict, test_job, baseline_id,
                                           desc)

    def _add_perf_baseline_detail(self, job_id, suite_id, case_id, create_list, update_dict, test_job, baseline_id,
                                  desc):
        if create_list:
            PerfBaselineDetail.objects.bulk_create(create_list)
            if test_job.baseline_id == baseline_id:
                metric_list = [metric.metric for metric in create_list]
                PerfResult.objects.filter(test_job_id=job_id, test_suite_id=suite_id, test_case_id=case_id,
                                          metric__in=metric_list).update(match_baseline=True)
        if update_dict:
            id_list = list(update_dict.keys())
            perf_detail = PerfBaselineDetail.objects.filter(id__in=id_list)
            for perf_obj in perf_detail:
                update_data = update_dict.get(str(perf_obj.id))
                if update_data:
                    perf_obj.baseline_id = update_data.baseline_id
                    perf_obj.test_job_id = update_data.test_job_id
                    perf_obj.test_suite_id = update_data.test_suite_id
                    perf_obj.test_case_id = update_data.test_case_id
                    perf_obj.server_ip = update_data.server_ip
                    perf_obj.server_sn = update_data.server_sn
                    perf_obj.server_sm_name = update_data.server_sm_name
                    perf_obj.server_instance_type = update_data.server_instance_type
                    perf_obj.server_image = update_data.server_image
                    perf_obj.server_bandwidth = update_data.server_bandwidth
                    perf_obj.run_mode = update_data.run_mode
                    perf_obj.source_job_id = update_data.source_job_id
                    perf_obj.metric = update_data.metric
                    perf_obj.test_value = update_data.test_value
                    perf_obj.cv_value = update_data.cv_value
                    perf_obj.max_value = update_data.max_value
                    perf_obj.min_value = update_data.min_value
                    perf_obj.value_list = update_data.value_list
                    perf_obj.note = update_data.note
                    perf_obj.description = desc

            update_fields = ['baseline_id', 'test_job_id', 'test_suite_id', 'test_case_id', 'server_ip', 'server_sn',
                             'server_sm_name', 'server_instance_type', 'server_image', 'server_bandwidth', 'run_mode',
                             'source_job_id', 'metric', 'test_value', 'cv_value', 'max_value', 'min_value',
                             'value_list', 'note', 'description']
            PerfBaselineDetail.objects.bulk_update(perf_detail, update_fields)

    @staticmethod
    def get_perf_res_id_list(job_id, suite_id_list, suite_data_list):
        """批量加入性能基线获取 结果id列表"""
        # 批量修改的性能测试结果id列表
        perf_res_id_list = list()
        # 根据job id过滤测试结果
        query_set = PerfResult.objects.filter(test_job_id=job_id)
        # suite 直接批量加入结果基线
        if suite_id_list:
            perf_res_id_list.extend(query_set.filter(test_suite_id__in=suite_id_list).values_list('id', flat=True))

        # suite下的多项 case加入基线
        for suite_data in suite_data_list:
            tmp_suite_id = suite_data.get('suite_id')
            tmp_case_id_list = suite_data.get('case_list', [])
            for tmp_case_id in tmp_case_id_list:
                perf_res_id_list.extend(query_set.filter(test_suite_id=tmp_suite_id,
                                                         test_case_id=tmp_case_id).values_list('id', flat=True))
        return perf_res_id_list

    @back_fill_version
    def add_perf(self, data, user_id):
        """
        批量加入基线
        请求数据：
        {
            "baseline_id": 1,
            "job_id": "13",
            "suite_list": [5, 6],
            "suite_data": [
                           {
                            suite_id: 1,
                            case_list: [1, 2, 3]
                           },
                           {
                            suite_id: 2,
                            case_list: [4, 5]
                           },
                           {
                            suite_id: 4,
                            case_list: [7]
                           },
                       ]
        }
        """
        job_id = data.get('job_id')
        desc = data.get('desc', None)
        baseline_id = self.get_baseline_id(data)
        if not all([baseline_id, job_id]):
            return False, "Required request parameters: 1.baseline_id, 2.job_id, 3.suite_list, 4.suite_data"
        suite_data_list = data.get('suite_data', [])
        suite_id_list = data.get('suite_list')
        perf_baseline_detail_list = list()
        baseline_server_list = list()
        test_job = TestJob.objects.filter(id=job_id).first()
        if not test_job:
            return False, "关联job不存在!"
        pre_aligroup = 'SELECT a.test_job_id,a.test_suite_id,a.test_case_id,a.metric, a.test_value, ' \
                       'a.cv_value, a.max_value, a.min_value, a.value_list,a.match_baseline,' \
                       'b.note,b.run_mode,c.ip,c.sn,c.sm_name,"" as image,0 as bandwidth,c.kernel_version,' \
                       'c.distro,c.gcc,c.rpm_list,c.glibc,c.memory_info,c.distro,c.cpu_info,c.disk,c.ether FROM ' \
                       'perf_result a LEFT JOIN test_job_case b ON a.test_job_id=b.job_id AND ' \
                       'a.test_suite_id=b.test_suite_id AND a.test_case_id=b.test_case_id LEFT JOIN ' \
                       'test_server_snapshot c ON b.server_snapshot_id=c.id WHERE a.test_job_id=%s AND '
        pre_aliyun = 'SELECT a.test_job_id,a.test_suite_id,a.test_case_id,a.metric, a.test_value, ' \
                     'a.cv_value, a.max_value, a.min_value, a.value_list,a.match_baseline,' \
                     'b.note,b.run_mode,c.private_ip AS ip,c.sn,c.instance_type AS sm_name,c.image,' \
                     'c.bandwidth,c.kernel_version,c.distro,c.gcc,' \
                     'c.rpm_list,c.glibc,c.memory_info,c.distro,c.cpu_info,c.disk,c.ether FROM perf_result a ' \
                     'LEFT JOIN test_job_case b ON a.test_job_id=b.job_id AND ' \
                     'a.test_suite_id=b.test_suite_id AND a.test_case_id=b.test_case_id LEFT JOIN ' \
                     'cloud_server_snapshot c ON b.server_snapshot_id=c.id WHERE a.test_job_id=%s AND '
        end_sql = 'AND a.is_deleted is FALSE AND b.is_deleted is FALSE AND c.is_deleted is FALSE'
        pre_sql = pre_aligroup if test_job.server_provider == 'aligroup' else pre_aliyun
        q = Q(test_job_id=job_id)
        if suite_data_list:
            case_list = list()
            for suite_data in suite_data_list:
                if suite_data.get('suite_id') in suite_id_list:
                    suite_id_list.remove(suite_data.get('suite_id'))
                if suite_data.get('case_list'):
                    case_list.extend(suite_data.get('case_list'))
            suite_id_list_str = ','.join(str(e) for e in suite_id_list)
            case_id_list_str = ','.join(str(e) for e in case_list)
            if case_list and suite_id_list:
                q &= (Q(test_suite_id__in=suite_id_list) | Q(test_case_id__in=case_list))
                raw_sql = pre_sql + '(a.test_suite_id IN (' + suite_id_list_str + ') OR ' \
                                    'a.test_case_id IN (' + case_id_list_str + ') ) ' + end_sql
            elif case_list:
                q &= Q(test_suite_id__in=suite_id_list)
                raw_sql = pre_sql + '(a.test_case_id IN (' + case_id_list_str + ') ) ' + end_sql
            elif suite_id_list:
                q &= Q(test_suite_id__in=suite_id_list)
                raw_sql = pre_sql + '(a.test_suite_id IN (' + suite_id_list_str + ')) ' + end_sql
            else:
                return False, ErrorCode.BATCH_ADD_BASELINE_ERROR.to_api
        elif suite_id_list:
            suite_id_list_str = ','.join(str(e) for e in suite_id_list)
            raw_sql = pre_sql + 'a.test_suite_id IN (' + suite_id_list_str + ') ' + end_sql
            q &= Q(test_suite_id__in=suite_id_list)
        else:
            return False, ErrorCode.BATCH_ADD_BASELINE_ERROR.to_api
        # 加入基线和测试基线相同时，匹配基线
        add_perf_baseline_thread = ToneThread(self._add_perf_baseline_backend, (baseline_id, baseline_server_list,
                                                                                job_id, perf_baseline_detail_list, q,
                                                                                raw_sql, test_job, user_id, desc))
        add_perf_baseline_thread.start()
        return True, None

    def _add_perf_baseline_backend(self, baseline_id, baseline_server_list, job_id, perf_baseline_detail_list, q,
                                   raw_sql, test_job, user_id, desc):
        if test_job.baseline_id == baseline_id:
            PerfResult.objects.filter(q).update(match_baseline=True)
        all_perf_results = query_all_dict(raw_sql.replace('\'', ''), params=[job_id])
        for perf_result in all_perf_results:
            perf_baseline_detail_obj = self._add_perf_baseline(perf_result, job_id, baseline_id,
                                                               test_job.server_provider, user_id, desc)
            if perf_baseline_detail_obj:
                perf_baseline_detail_list.append(perf_baseline_detail_obj)
            server_provider, machine = get_job_baseline_server(job_id, perf_result['test_case_id'])
            save_baseline_server(baseline_id, server_provider, machine, job_id,
                                 perf_result['test_suite_id'], perf_result['test_case_id'])
        if len(baseline_server_list) > 0:
            BaselineServerSnapshot.objects.bulk_create(baseline_server_list)
        PerfBaselineDetail.objects.bulk_create(perf_baseline_detail_list)

    def _add_perf_baseline(self, perf_result, job_id, baseline_id, server_provider, user_id, desc):
        suite_id = perf_result['test_suite_id']
        case_id = perf_result['test_case_id']
        perf_detail = PerfBaselineDetail.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                                        test_case_id=case_id, metric=perf_result['metric'])
        # 重复详情不再加入
        if not perf_detail.exists():
            perf_baseline_detail_obj = PerfBaselineDetail(
                baseline_id=baseline_id,
                test_job_id=job_id,
                test_suite_id=suite_id,
                test_case_id=case_id,
                server_ip=perf_result['ip'],
                server_sn=perf_result['sn'],
                server_sm_name=perf_result['sm_name'] if server_provider == 'aligroup' else '',
                server_instance_type=perf_result['sm_name'] if server_provider == 'aliyun' else '',
                server_image=perf_result['image'],
                server_bandwidth=perf_result['bandwidth'],
                run_mode=perf_result['run_mode'],
                source_job_id=job_id,
                metric=perf_result['metric'],
                test_value=perf_result['test_value'],
                cv_value=perf_result['cv_value'],
                max_value=perf_result['max_value'],
                min_value=perf_result['min_value'],
                value_list=perf_result['value_list'],
                note=perf_result['note'],
                creator=user_id,
                update_user=user_id,
                description=desc
            )
            return perf_baseline_detail_obj
        else:
            PerfBaselineDetail.objects.filter(id=perf_detail[0].id).update(
                baseline_id=baseline_id,
                test_job_id=job_id,
                test_suite_id=suite_id,
                test_case_id=case_id,
                server_ip=perf_result['ip'],
                server_sn=perf_result['sn'],
                server_sm_name=perf_result['sm_name'] if server_provider == 'aligroup' else '',
                server_instance_type=perf_result['sm_name'] if server_provider == 'aliyun' else '',
                server_image=perf_result['image'],
                server_bandwidth=perf_result['bandwidth'],
                run_mode=perf_result['run_mode'],
                source_job_id=job_id,
                metric=perf_result['metric'],
                test_value=perf_result['test_value'],
                cv_value=perf_result['cv_value'],
                max_value=perf_result['max_value'],
                min_value=perf_result['min_value'],
                value_list=perf_result['value_list'],
                note=perf_result['note'],
                update_user=user_id,
                description=desc
            )
            return None

    def _add_baseline_server(self, perf_result, job_id, baseline_id):
        suite_id = perf_result['test_suite_id']
        case_id = perf_result['test_case_id']
        if not BaselineServerSnapshot.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                                     test_case_id=case_id).exists():
            baseline_server = BaselineServerSnapshot(
                baseline_id=baseline_id,
                test_job_id=job_id,
                test_suite_id=suite_id,
                test_case_id=case_id,
                ip=perf_result['ip'],
                sn=perf_result['sn'],
                sm_name=perf_result['sm_name'],
                image=perf_result['image'],
                bandwidth=perf_result['bandwidth'],
                kernel_version=perf_result['kernel_version'],
                distro=perf_result['distro'],
                gcc=perf_result['gcc'],
                rpm_list=perf_result['rpm_list'],
                glibc=perf_result['glibc'],
                memory_info=perf_result['memory_info'],
                disk=perf_result['disk'],
                cpu_info=perf_result['cpu_info'],
                ether=perf_result['ether']
            )
            return baseline_server
        else:
            BaselineServerSnapshot.objects.filter(baseline_id=baseline_id, test_suite_id=suite_id,
                                                  test_case_id=case_id).update(
                test_job_id=job_id,
                ip=perf_result['ip'],
                sn=perf_result['sn'],
                sm_name=perf_result['sm_name'],
                image=perf_result['image'],
                bandwidth=perf_result['bandwidth'],
                kernel_version=perf_result['kernel_version'],
                distro=perf_result['distro'],
                gcc=perf_result['gcc'],
                rpm_list=perf_result['rpm_list'],
                glibc=perf_result['glibc'],
                memory_info=perf_result['memory_info'],
                disk=perf_result['disk'],
                cpu_info=perf_result['cpu_info'],
                ether=perf_result['ether'])
        return None


class SuiteSearchServer(CommonService):
    @staticmethod
    def search_suite(data):
        # 查询集团/云上
        baseline_id = data.get("baseline_id")
        baseline = Baseline.objects.all().filter(id=baseline_id).first()
        test_type = baseline.test_type
        if test_type == "functional":
            base_model = FuncBaselineDetail
            base_serializer = FuncBaselineDetailSerializer
        else:
            base_model = PerfBaselineDetail
            base_serializer = PerfBaselineDetialSerializer
        queryset = base_model.objects.all()
        serializer_class = base_serializer
        queryset = queryset.filter(baseline_id=baseline_id)
        search_suite = data.get("search_suite")
        if not search_suite:
            return serializer_class, queryset

        suite_name_data = []
        suite_id_list = queryset.values_list("test_suite_id", flat=True)
        for suite_id in set(suite_id_list):
            suite_data = {}
            suite_name = TestSuite.objects.get(id=suite_id).name
            # 模糊查询suite名称
            if search_suite in suite_name:
                suite_data['test_suite_name'] = suite_name
                suite_data['test_suite_id'] = suite_id
                suite_name_data.append(suite_data)
        return None, suite_name_data


class ContrastBaselineService(CommonService):
    @staticmethod
    def get_res_list(job_id, suite_id_list, suite_data_list):
        """获取性能结果列表"""
        perf_res_list = PerfResult.objects.filter(test_job_id=job_id, test_suite_id__in=suite_id_list)
        for suite_data in suite_data_list:
            tmp_suite_id = suite_data.get('suite_id')
            tmp_case_id_list = suite_data.get('case_list', [])
            for tmp_case_id in tmp_case_id_list:
                perf_res_list = perf_res_list | PerfResult.objects.filter(test_job_id=job_id,
                                                                          test_suite_id=tmp_suite_id,
                                                                          test_case_id=tmp_case_id)
        return perf_res_list

    @staticmethod
    def modify_perf_res(perf_res, baseline_id, perf_detail):
        """对比性能基线，更新性能测试结果信息"""
        # 对比基线的id , compare_baseline
        perf_res.compare_baseline = baseline_id
        # 回填结果基线值baseline_value、 baseline_cv_value （AVG ± CV）,
        if perf_detail.test_value:
            perf_res.baseline_value = round(float(perf_detail.test_value), 2)
        perf_res.baseline_cv_value = perf_detail.cv_value
        # 获取对比结果: （测试结果值-基线值）/基线值
        if perf_detail.test_value and float(perf_detail.test_value) != 0.0:
            perf_res.compare_result = round((float(perf_res.test_value) - float(perf_detail.test_value)
                                             ) / float(perf_detail.test_value), 2)
        else:
            perf_res.compare_result = 0.00
        # 获取跟踪结果 increase, decline, normal, na, invalid
        # 获取阈值 test_track_metric中 cmp_threshold
        tmp_metric = TestMetric.objects.filter(name=perf_res.metric, object_type='case',
                                               object_id=perf_res.test_case_id).first()
        # 优先找case级别的对比，没有对比suite级
        if tmp_metric is None:
            tmp_metric = TestMetric.objects.filter(name=perf_res.metric, object_type='suite',
                                                   object_id=perf_res.test_suite_id).first()
        # 如果大于cmp_threshold上界则track_result结果记为increase ，小于区间下界，则记为decline，
        # 在区间范围内则normal， 其它无法对比的异常情况记为na （test_track_metric 中找不到记录或没有指定对比基线)
        if tmp_metric is None:
            perf_res.track_result = 'na'
        else:
            # cv在cv阈值范围内
            cv_value = perf_res.cv_value.split('±')[-1] if perf_res.cv_value else None
            if cv_value is None:
                perf_res.track_result = 'na'
            else:
                cv_value = float(cv_value.split('%')[0])
                if cv_value > tmp_metric.cv_threshold * 100:
                    perf_res.track_result = 'invalid'
                else:
                    strand_value = perf_res.compare_result
                    # 方向为下降时， 与上升是相反的比较方式
                    if tmp_metric.direction == 'decline':
                        strand_value = -strand_value
                    threshold_range = tmp_metric.cmp_threshold
                    if -threshold_range <= strand_value <= threshold_range:
                        perf_res.track_result = 'normal'
                    elif strand_value < -threshold_range:
                        perf_res.track_result = 'decline'
                    else:
                        perf_res.track_result = 'increase'
        return perf_res

    def contrast_perf(self, data):
        baseline_id = data.get('baseline_id')
        job_id = data.get('job_id')
        suite_id_list = data.get('suite_list', [])
        suite_data_list = data.get('suite_data', [])

        perf_res_list = self.get_res_list(job_id, suite_id_list, suite_data_list)
        thread_tasks = []
        for perf_res in perf_res_list:
            thread_tasks.append(
                ToneThread(self.save_compare_baseline, (baseline_id, perf_res))
            )
            thread_tasks[-1].start()
        for thread_task in thread_tasks:
            thread_task.join()
            perf_res = thread_task.get_result()
            if perf_res:
                perf_res.save()
        return True, '对比基线完成'

    def save_compare_baseline(self, baseline_id, perf_res):
        # 获取性能基线详情信息
        perf_detail = PerfBaselineDetail.objects.filter(baseline_id=baseline_id,
                                                        test_suite_id=perf_res.test_suite_id,
                                                        test_case_id=perf_res.test_case_id, metric=perf_res.metric
                                                        ).first()
        if perf_detail:
            return self.modify_perf_res(perf_res, baseline_id, perf_detail)
