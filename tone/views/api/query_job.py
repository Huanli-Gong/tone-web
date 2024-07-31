# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import json
import math
import urllib.parse as urlparse
from datetime import datetime
from urllib.parse import urlparse
from tone.core.common.enums.job_enums import JobState
from tone.core.utils.common_utils import query_all_dict
from tone import settings
from tone.core.common.constant import FUNC_CASE_RESULT_TYPE_MAP, PERFORMANCE
from tone.models import TestJob, TestJobCase, TestSuite, TestCase, PerfResult, FuncResult, JobType, Project, \
    Workspace, ResultFile, TestCluster, TestClusterServer, CloudServer, TestStep, Product, BatchJobRelation, \
    WorkspaceMember, User
from tone.core.utils.helper import CommResp
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.expection_handler.error_catch import api_catch_error
from tone.core.common.verify_token import token_required
from tone.core.common.job_result_helper import calc_job, get_job_case_server, get_job_case_run_server, \
    splice_job_link
from tone.services.sys.testcase_services import TestCaseInfoService
from tone.services.job.test_services import package_server_list
from tone.core.utils.permission_manage import check_job_operator_permission, check_ws_operator_permission, \
    check_admin_operator_permission
from tone.core.common.toneagent import server_check
from tone.core.utils.tone_thread import ToneThread


@api_catch_error
@token_required
def job_query(request):
    """ api to query task
        example:
        curl -H 'Content-Type: application/json' -X POST -d '{"task_id": 215}' http://localhost:8000/api/task_query/
    """
    if request.method == 'GET':
        assert None, ValueError(ErrorCode.SUPPORT_POST)
    resp = CommResp()
    req_info = json.loads(request.body)
    tmp_job_id = req_info.get('tmp_job_id', None)
    hide_case = req_info.get('hide_case', 0)
    job_id = None
    if tmp_job_id:
        tmp_relation = BatchJobRelation.objects.filter(tmp_job_id=tmp_job_id).first()
        if tmp_relation:
            job_id = tmp_relation.job_id
        else:
            assert None, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not job_id:
        job_id = req_info.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    if isinstance(job_id, str):
        assert job_id.isdigit(), ValueError(ErrorCode.ILLEGALITY_PARAM_ERROR)
    else:
        assert isinstance(job_id, int), ValueError(ErrorCode.ILLEGALITY_PARAM_ERROR)
    job = TestJob.objects.get(id=job_id) if TestJob.objects.filter(id=job_id) else None
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(req_info.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    machine_file = ''
    machine_result = ResultFile.objects.filter(test_job_id=job_id, result_file='1/machine_info.json').first()
    if machine_result:
        machine_file = machine_result.result_path + machine_result.result_file
    has_server_info = req_info.get('has_server_info', 0)
    resp_data = {
        'job_id': job_id,
        'job_link': splice_job_link(job),
        'job_state': 'pending' if job.state == 'pending_q' else job.state,
        'test_type': job.test_type,
        'machine_file': machine_file
    }
    if has_server_info:
        resp_data['server_info'] = package_server_list(job)
    statics = calc_job(job_id)
    statics['total'] = statics.pop('count')
    result_data = list()
    if job.test_type == PERFORMANCE:
        suite_result = PerfResult.objects.filter(test_job_id=job_id)
    else:
        suite_result = FuncResult.objects.filter(test_job_id=job_id)
    job_cases = TestJobCase.objects.filter(job_id=job_id)
    test_suite_dict = dict()
    test_case_dict = dict()
    test_suite_list = TestSuite.objects.all().values_list('id', 'name')
    for test_suite in test_suite_list:
        test_suite_dict[test_suite[0]] = test_suite[1]
    test_case_list = TestCase.objects.all().values_list('id', 'name')
    for test_case in test_case_list:
        test_case_dict[test_case[0]] = test_case[1]
    job_count_data = get_job_count(job_id, job.baseline_id, job.test_type)
    for job_case in job_cases:
        test_suite = test_suite_dict.get(job_case.test_suite_id)
        test_case = test_case_dict.get(job_case.test_case_id)
        assert test_suite, ValueError(ErrorCode.SUITE_NOT_EXISTS)
        assert test_case, ValueError(ErrorCode.CASE_NOT_EXISTS)
        ip, is_instance, _, _ = get_job_case_server(job_case.id)
        suite_result = suite_result.filter(test_suite_id=job_case.test_suite_id)
        case_statics = job_count_data.get(str(job_case.test_suite_id) + '_' + str(job_case.test_case_id))
        case_state = case_statics.pop('result') if case_statics and 'result' in case_statics else '-'
        start_time, end_time = '', ''
        if job_case.start_time:
            start_time = datetime.strftime(job_case.start_time, "%Y-%m-%d %H:%M:%S")
        if job_case.end_time:
            end_time = datetime.strftime(job_case.end_time, "%Y-%m-%d %H:%M:%S")
        result_item = {
            'test_suite_id': job_case.test_suite_id if test_suite else None,
            'test_suite': test_suite if test_suite else None,
            'test_case_id': job_case.test_case_id if test_case else None,
            'test_case': test_case if test_case else None,
            'start_time': start_time,
            'end_time': end_time,
            'result_statistics': case_statics,
            'case_server': {
                'config_server': ip,
                'server_provider': job_case.server_provider,
                'is_instance': bool(is_instance),
                'run_server': get_job_case_run_server(job_case.id),
            },
            'log': get_log_file(job_case)
        }
        if not hide_case:
            if job.test_type == 'performance':
                metric_results = PerfResult.objects.filter(test_job_id=job.id, test_case_id=job_case.test_case_id)
                result_list = list()
                for metric_result in metric_results:
                    result_list.append(
                        {
                            'metric': metric_result.metric,
                            'test_value': metric_result.test_value,
                            'cv_value': metric_result.cv_value,
                            'max_value': metric_result.max_value,
                            'min_value': metric_result.min_value,
                            'value_list': metric_result.value_list,
                            'baseline_value': metric_result.baseline_value,
                            'compare_result': metric_result.compare_result,
                            'track_result': metric_result.track_result,
                            'unit': metric_result.unit
                        }
                    )
                result_item['case_result'] = result_list
            elif job.test_type == 'functional':
                sub_case_results = FuncResult.objects.filter(test_job_id=job.id, test_case_id=job_case.test_case_id)
                statistic_file = ''
                statistic_result = ResultFile.objects.filter(test_job_id=job_id, test_suite_id=job_case.test_suite_id,
                                                             test_case_id=job_case.test_case_id,
                                                             result_file='statistic.json').first()
                if statistic_result:
                    statistic_file = statistic_result.result_path + statistic_result.result_file
                result_item['statistic_file'] = statistic_file
                result_list = list()
                for sub_case_result in sub_case_results:
                    result_list.append(
                        {
                            'sub_case_name': sub_case_result.sub_case_name,
                            'sub_case_result': sub_case_result.sub_case_result
                        }
                    )
                result_item['case_result'] = result_list
        result_data.append(result_item)
        # case_state
        if job_case.state in ['pending', 'running']:
            result_item['case_state'] = job_case.state
        elif job.test_type == 'performance':
            result_item['case_state'] = 'complete'
        else:
            result_item['case_state'] = case_state

    resp_data['result_statistics'] = statics
    resp_data['job_result'] = result_data
    resp.data = resp_data
    resp.result = True
    return resp.json_resp()


def get_job_count(job_id, baseline_id, test_type):
    if test_type == 'performance':
        raw_sql = 'SELECT test_suite_id,test_case_id,COUNT(track_result)  as total,' \
                  'COUNT(CASE WHEN track_result="increase" THEN 1 END) as increase, ' \
                  'COUNT(CASE WHEN track_result="decline" THEN 1 END) as decline,' \
                  'COUNT(CASE WHEN track_result="normal" THEN 1 END) as normal,' \
                  'COUNT(CASE WHEN track_result="invalid" THEN 1 END) as invalid FROM perf_result ' \
                  'WHERE test_job_id = %s GROUP BY test_suite_id,test_case_id'
        job_case_list = query_all_dict(raw_sql, [job_id])
        job_case_dict = dict()
        for job_case_count in job_case_list:
            key = str(job_case_count['test_suite_id']) + '_' + str(job_case_count['test_case_id'])
            na = (job_case_count['total'] - job_case_count['increase'] - job_case_count['decline']) - \
                 (job_case_count['normal'] - job_case_count['invalid'])
            job_case_dict[key] = dict(
                {
                    'count': job_case_count['total'],
                    'increase': job_case_count['increase'],
                    'decline': job_case_count['decline'],
                    'normal': job_case_count['normal'],
                    'invalid': job_case_count['invalid'],
                    'na': na,
                }
            )
    else:
        raw_sql = 'SELECT test_suite_id,test_case_id,COUNT(sub_case_result) as total, ' \
                  'COUNT(CASE WHEN sub_case_result=1 THEN 1 END) as case_success, ' \
                  'COUNT(CASE WHEN sub_case_result=2 THEN 1 END) as case_fail, ' \
                  'COUNT(CASE WHEN sub_case_result=5 THEN 1 END) as case_skip,' \
                  'COUNT(CASE WHEN sub_case_result=6 THEN 1 END) as case_warn,' \
                  'COUNT(CASE WHEN sub_case_result=2 and match_baseline=False THEN 1 END) as match_baseline,' \
                  'COUNT(CASE WHEN sub_case_result=2 and match_baseline=True THEN 1 END) as no_match_baseline ' \
                  'FROM func_result WHERE test_job_id = %s GROUP BY test_suite_id,test_case_id'
        job_case_list = query_all_dict(raw_sql, [job_id])
        job_case_dict = dict()
        for job_case_count in job_case_list:
            key = str(job_case_count['test_suite_id']) + '_' + str(job_case_count['test_case_id'])
            job_case_dict[key] = dict(
                {
                    'total': job_case_count['total'],
                    'success': job_case_count['case_success'],
                    'fail': job_case_count['case_fail'],
                    'skip': job_case_count['case_skip'],
                    'case_warn': job_case_count['case_warn'],
                }
            )
            if job_case_count['match_baseline'] > 0:
                job_case_dict[key]['result'] = 'fail'
            else:
                impact_result = 0
                if job_case_count['no_match_baseline'] > 0:
                    impact_sql = 'SELECT count(*) as t from `func_result` a LEFT JOIN `func_baseline_detail` b ' \
                                 'on a.`test_suite_id` = b.test_suite_id and a.`test_case_id` = b.test_case_id ' \
                                 'and a.`sub_case_name` = b.sub_case_name where a.test_job_id = %s and ' \
                                 '`test_suite_id` = %s and `test_case_id` = %s and b.`source_job_id` = %s and ' \
                                 'b.impact_result=1 and a.is_deleted=0 and b.is_deleted=0'
                    params = list()
                    params.append(job_id)
                    params.append(job_case_count['test_suite_id'])
                    params.append(job_case_count['test_case_id'])
                    params.append(job_id)
                    impact_list = query_all_dict(impact_sql, params)
                    if impact_list and impact_list[0]['t'] > 0:
                        impact_result = 1
                    elif baseline_id:
                        impact_sql_1 = 'SELECT count(*) as t from `func_result` a LEFT JOIN `func_baseline_detail` b ' \
                                 'on a.`test_suite_id` = b.test_suite_id and a.`test_case_id` = b.test_case_id ' \
                                 'and a.`sub_case_name` = b.sub_case_name where a.test_job_id = %s and ' \
                                 '`test_suite_id` = %s and `test_case_id` = %s and b.`baseline_id` = %s and ' \
                                 'b.impact_result=1 and a.is_deleted=0 and b.is_deleted=0'
                        params = list()
                        params.append(job_id)
                        params.append(job_case_count['test_suite_id'])
                        params.append(job_case_count['test_case_id'])
                        params.append(baseline_id)
                        impact_list = query_all_dict(impact_sql_1, params)
                        if impact_list and impact_list[0]['t'] > 0:
                            impact_result = 1
                if impact_result == 1:
                    job_case_dict[key]['result'] = 'fail'
                elif job_case_count['total'] > 0:
                    job_case_dict[key]['result'] = 'success'
                else:
                    job_case_dict[key]['result'] = 'fail'
    return job_case_dict


def get_log_file(job_case):
    test_step = TestStep.objects.filter(job_case_id=job_case.id, stage='run_case')
    if test_step.exists():
        path = urlparse.urlparse(test_step.first().log_file).path
        return f"http://{settings.TONE_STORAGE_DOMAIN}:{settings.TONE_STORAGE_PROXY_PORT}{path}"


@api_catch_error
@token_required
def get_job_case(request):
    TestCaseInfoService.check_parm(request.GET)
    resp = CommResp()
    case_data_list = []
    test_job = TestJob.objects.filter(id=request.GET.get('job_id')).first()
    if not check_job_operator_permission(request.GET.get('username', None), test_job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    if test_job and test_job.test_type == 'functional':
        queryset = TestCaseInfoService.filter(FuncResult.objects.all(), request.GET)
        test_case_list = TestCase.objects.filter(id__in=[case_info.test_case_id for case_info in queryset]).values_list(
            'id', 'name')
        case_data_list = [
            {
                'test_job_id': case_info.test_job_id,
                'test_suite': request.GET.get('test_suite'),
                'test_conf': TestCaseInfoService.get_test_conf(test_case_list, case_info.test_case_id),
                'test_case': case_info.sub_case_name,
                'test_result': FUNC_CASE_RESULT_TYPE_MAP.get(case_info.sub_case_result)
            } for case_info in queryset]
    elif test_job and test_job.test_type == 'performance':
        queryset = TestCaseInfoService.filter(PerfResult.objects.all(), request.GET)
        test_case_list = TestCase.objects.filter(id__in=[case_info.test_case_id for case_info in queryset]).values_list(
            'id', 'name')
        case_data_list = [
            {
                'test_job_id': case_info.test_job_id,
                'test_suite': request.GET.get('test_suite'),
                'test_conf': TestCaseInfoService.get_test_conf(test_case_list, case_info.test_case_id),
                'test_metric': case_info.metric,
                'test_value': round(float(case_info.test_value), 2)
            } for case_info in queryset]

    if request.GET.get('test_conf'):
        case_data_list = list(filter(lambda x: x.get('test_conf') == request.GET.get('test_conf'), case_data_list))
    resp.data = case_data_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_job_type(request):
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    test_type = request.GET.get('test_type', None)
    assert test_type, ValueError(ErrorCode.TEST_TYPE_LACK)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    queryset = JobType.objects.filter(ws_id=request.GET.get('ws_id'), test_type=request.GET.get('test_type'),
                                      enable=True)
    job_type_list = [{'id': job_type.id, 'name': job_type.name} for job_type in queryset]
    resp.data = job_type_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_project(request):
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    queryset = Project.objects.filter(ws_id=request.GET.get('ws_id'))
    project_list = [{'id': project.id, 'name': project.name, 'is_default': project.is_default} for project in queryset]
    resp.data = project_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_workspace(request):
    ws_list = list()
    resp = CommResp()
    if check_admin_operator_permission(request.GET.get('username', None)):
        queryset = Workspace.objects.filter(is_approved=True)
        ws_list = [{'id': ws.id, 'name': ws.name} for ws in queryset]
    else:
        user = User.objects.filter(username=request.GET.get('username', None)).first()
        if user:
            ws_id_list = WorkspaceMember.objects.filter(user_id=user.id).values_list('ws_id', flat=True).distinct()
            queryset = Workspace.objects.filter(is_approved=True, id__in=ws_id_list)
            ws_list = [{'id': ws.id, 'name': ws.name} for ws in queryset]
    resp.data = ws_list
    return resp.json_resp()


@api_catch_error
@token_required
def update_cluster_is_instance(request):
    resp = CommResp()
    update_dict = {}
    cluster_list = TestCluster.objects.filter(cluster_type='aliyun')
    for cluster in cluster_list:
        cluster_server = TestClusterServer.objects.filter(cluster_id=cluster.id).first()
        if cluster_server and cluster_server.server_id:
            server = CloudServer.objects.filter(id=cluster_server.server_id).first()
            if server:
                cluster.is_instance = server.is_instance
                update_dict[cluster.id] = server.is_instance
                update_dict[f'{cluster.id}'] = server.is_instance
    TestCluster.objects.bulk_update(cluster_list, fields=['is_instance'])
    resp.data = {'update_dict': update_dict}
    return resp.json_resp()


@api_catch_error
@token_required
def get_product_job_list(request):
    resp = CommResp()
    product = request.GET.get('product', None)
    assert product, ValueError(ErrorCode.PRODUCT_NAME_NEED)
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    product = Product.objects.filter(name=product, ws_id=ws_id).first()
    if not product or not check_ws_operator_permission(request.GET['username'], product.ws_id):
        assert None, ValueError(ErrorCode.PRODUCT_PERMISSION_ERROR)
    job_id_list = list(TestJob.objects.filter(product_id=product.id).values_list('id', flat=True))
    resp.data = job_id_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_job_info_list(request):
    resp = CommResp()
    data = json.loads(request.body)
    product_name = data.get('product', None)
    project_name = data.get('project', None)
    tag_name = data.get('tag', None)
    ws_id = data.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(data.get('username'), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    params = [ws_id]
    raw_sql = "SELECT DISTINCT A.id, A.name AS job_name,A.state,A.start_time,A.end_time,A.test_type," \
              "A.test_result, B.name AS product_name,C.name AS project_name,A.project_id," \
              "F.username AS creator FROM " \
              "test_job A, product B, project C, user F " \
              "WHERE A.is_deleted=0 AND B.is_deleted=0 AND C.is_deleted=0 AND " \
              "A.product_id=B.id  AND A.project_id=C.id AND " \
              " A.creator=F.id AND A.ws_id=%s"
    if tag_name:
        raw_sql = "SELECT DISTINCT A.id, A.name AS job_name,A.state,A.start_time,A.end_time,A.test_type," \
                  "A.test_result, B.name AS product_name,C.name AS project_name,A.project_id," \
                  "F.username AS creator FROM " \
                  "test_job A, product B, project C, user F, job_tag E, job_tag_relation G " \
                  "WHERE A.is_deleted=0 AND B.is_deleted=0 AND C.is_deleted=0 AND " \
                  "E.is_deleted=0 AND G.is_deleted=0 AND " \
                  "A.product_id=B.id  AND A.project_id=C.id AND " \
                  "A.creator=F.id AND A.ws_id=%s AND " \
                  "E.id=G.tag_id AND G.job_id=A.id AND E.name=%s"
        params.append(tag_name)
    if product_name:
        raw_sql += " AND B.name=%s "
        params.append(product_name)
    if project_name:
        raw_sql += " AND C.name=%s "
        params.append(project_name)
    job_result_list = query_all_dict(raw_sql, params=params)
    res_list = list()
    job_id_list = list()
    for job_info in job_result_list:
        job_id_list.append(job_info['id'])
        job_dict = dict(
            job_id=job_info['id'],
            job_name=job_info['job_name'],
            state=JobState.PENDING if job_info['state'] == JobState.PENDING_Q else job_info['state'],
            start_time=job_info['start_time'],
            end_time=job_info['end_time'],
            test_type=job_info['test_type'],
            test_result=job_info['test_result'],
            product_name=job_info['product_name'],
            project_name=job_info['project_name'],
            project_id=job_info['project_id'],
            creator=job_info['creator']
        )
        res_list.append(job_dict)
    job_filter_tag_list = list()
    if job_id_list:
        tag_sql = "SELECT a.id,a.name,c.id AS tag_id,c.name AS tag_name FROM test_job a LEFT JOIN job_tag_relation b " \
                  "ON a.id=b.job_id LEFT JOIN job_tag c ON b.tag_id=c.id where a.is_deleted=0 AND b.is_deleted=0 " \
                  "AND c.is_deleted=0 AND a.id IN %s"
        tags_result = query_all_dict(tag_sql, params=[tuple(job_id_list)])
        for res_job_info in res_list:
            tags = [tag for tag in tags_result if tag['id'] == res_job_info['job_id']]
            tag_info = dict()
            tag_name_list = list()
            for job_tag in tags:
                tag_info[job_tag['tag_id']] = job_tag['tag_name']
                tag_name_list.append(job_tag['tag_name'])
            if tag_name and set(tag_name.split(',')).issubset(set(tag_name_list)):
                job_filter_tag_list.append(res_job_info)
            res_job_info['tags'] = tag_info
    resp.data = job_filter_tag_list if tag_name else res_list
    return resp.json_resp()


@api_catch_error
@token_required
def query_toneagent_info(request):
    resp = CommResp()
    ip = request.GET.get('ip', None)
    assert ip, ValueError(ErrorCode.SERVER_IP_NEED)
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    code, _, agent_info = server_check(ip)
    result_dict = dict()
    if code == 200 and 'RESULT' in agent_info:
        result_dict = dict(
            ip=agent_info['RESULT']['IP'],
            tsn=agent_info['RESULT']['TSN'],
            status=agent_info['RESULT']['STATUS'],
            heartbeat=agent_info['RESULT']['HEARTBEAT'],
            mode=agent_info['RESULT']['MODE'],
            version=agent_info['RESULT']['VERSION'],
            kernel=agent_info['RESULT']['KERNEL'],
            os=agent_info['RESULT']['OS'],
            arch=agent_info['RESULT']['ARCH'],
            description=agent_info['RESULT']['DESCRIPTION']
        )
    resp.data = result_dict
    return resp.json_resp()


@api_catch_error
@token_required
def job_log_query(request):
    if request.method == 'GET':
        assert None, ValueError(ErrorCode.SUPPORT_POST)
    resp = CommResp()
    req_info = json.loads(request.body)
    job_id = req_info.get('job_id', None)
    page_size = req_info.get('page_size', 50)
    assert isinstance(page_size, int), ValueError(ErrorCode.INT_NEED_ERROR)
    page_num = req_info.get('page_num', 1)
    assert isinstance(page_num, int), ValueError(ErrorCode.INT_NEED_ERROR)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    if isinstance(job_id, str):
        assert job_id.isdigit(), ValueError(ErrorCode.ILLEGALITY_PARAM_ERROR)
    else:
        assert isinstance(job_id, int), ValueError(ErrorCode.ILLEGALITY_PARAM_ERROR)
    job = TestJob.objects.filter(id=job_id).first()
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(req_info.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    result_data = list()
    job_cases = TestJobCase.objects.filter(job_id=job_id)
    test_suite_dict = dict()
    test_case_dict = dict()
    test_suite_list = TestSuite.objects.all().values_list('id', 'name')
    for test_suite in test_suite_list:
        test_suite_dict[test_suite[0]] = test_suite[1]
    test_case_list = TestCase.objects.all().values_list('id', 'name')
    for test_case in test_case_list:
        test_case_dict[test_case[0]] = test_case[1]
    provider = job.server_provider
    job_log_files = ResultFile.objects.filter(test_job_id=job_id, result_file__iendswith='.log').\
        values_list('test_suite_id', 'test_case_id', 'result_path', 'result_file')
    result_dict = dict()
    start_num = page_size * (page_num - 1)
    end_num = start_num + page_size
    total = math.ceil(job_cases.count() / page_size)
    job_cases_pages = job_cases[start_num:end_num]
    thread_tasks = []
    for job_case in job_cases_pages:
        thread_tasks.append(
            ToneThread(get_job_case_logs, (result_dict, job_case, job_log_files))
        )
        thread_tasks[-1].start()
    for thread_task in thread_tasks:
        thread_task.join()
        thread_task.get_result()
    for job_case in job_cases_pages:
        test_suite = test_suite_dict.get(job_case.test_suite_id)
        test_case = test_case_dict.get(job_case.test_case_id)
        result_item = {
            'test_suite': test_suite if test_suite else None,
            'test_case': test_case if test_case else None,
            'logs': result_dict.get(str(job_case.test_suite_id) + '_' + str(job_case.test_case_id))
        }
        result_data.append(result_item)
    resp.data = result_data
    resp.result = True
    resp.total = total
    return resp.json_resp()


def get_job_case_logs(result_dict, job_case, job_log_files):
    result_files = [log for log in job_log_files
                    if log[0] == job_case.test_suite_id and log[1] == job_case.test_case_id]
    key = str(job_case.test_suite_id) + '_' + str(job_case.test_case_id)
    result_dict[key] = list()
    for result_file in result_files:
        log_file = result_file[2] + '/' + result_file[3]
        result_dict[key].append(log_file)
