# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import json
from datetime import datetime, timedelta
from itertools import chain
from tone import settings
from tone.core.common.enums.job_enums import JobState
from tone.core.utils.common_utils import query_all_dict
from tone.core.common.constant import FUNC_CASE_RESULT_TYPE_MAP, PERFORMANCE
from tone.models import TestJob, TestJobCase, TestSuite, TestCase, PerfResult, FuncResult, JobType, Project, \
    Workspace, TestServer, CloudServer, TestStep, ReportObjectRelation, Product, \
    PlanInstanceTestRelation, Report, ResultFile
from tone.core.utils.helper import CommResp
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.expection_handler.error_catch import api_catch_error
from tone.core.common.verify_token import token_required
from tone.core.common.job_result_helper import calc_job, get_job_case_server, get_job_case_run_server, calc_job_case, \
    splice_job_link
from tone.services.sys.testcase_services import TestCaseInfoService
from tone.services.job.test_services import package_server_list
from tone.core.utils.permission_manage import check_job_operator_permission, check_ws_operator_permission, \
    check_admin_operator_permission


def _replace_statics_key(case_statics):
    if 'count' in case_statics:
        case_statics['total'] = case_statics.pop('count')
    if 'case_count' in case_statics:
        case_statics['total'] = case_statics.pop('case_count')
    if 'case_success' in case_statics:
        case_statics['success'] = case_statics.pop('case_success')
    if 'case_fail' in case_statics:
        case_statics['fail'] = case_statics.pop('case_fail')
    if 'case_skip' in case_statics:
        case_statics['skip'] = case_statics.pop('case_skip')
    return case_statics


@api_catch_error
@token_required
def job_query(request):
    """ api to query task
        example:
        curl -H 'Content-Type: application/json' -X POST -d '{"task_id": 215}' http://localhost:8000/api/task_query/
    """
    resp = CommResp()
    req_info = json.loads(request.body)
    job_id = req_info.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    job = TestJob.objects.filter(id=job_id).first()
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(req_info.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    machine_file = ''
    machine_result = ResultFile.objects.filter(test_job_id=job_id, result_file='1/machine_info.json').first()
    if machine_result:
        machine_file = machine_result.result_path + machine_result.result_file
    resp_data = {
        'job_id': job_id,
        'job_link': splice_job_link(job),
        'job_state': 'pending' if job.state == 'pending_q' else job.state,
        'test_type': job.test_type,
        'server_info': package_server_list(job),
        'machine_file': machine_file,
        'report': get_report_li(job_id)
    }
    statics = calc_job(job_id)
    statics['total'] = statics.pop('count')
    result_data = list()
    if job.test_type == PERFORMANCE:
        suite_result = PerfResult.objects.filter(test_job_id=job_id)
    else:
        suite_result = FuncResult.objects.filter(test_job_id=job_id)
    job_cases = TestJobCase.objects.filter(job_id=job_id)
    for job_case in job_cases:
        test_suite = TestSuite.objects.filter(id=job_case.test_suite_id, query_scope='all')
        test_case = TestCase.objects.filter(id=job_case.test_case_id, query_scope='all')
        if not test_suite.exists():
            raise f'test_suite_id: {job_case.test_suite_id}不存在'
        if not test_case.exists():
            raise f'test_case_id: {job_case.test_case_id}不存在'
        ip, is_instance, _, _ = get_job_case_server(job_case.id)
        suite_result = suite_result.filter(test_suite_id=job_case.test_suite_id)
        case_state, case_statics = calc_job_case(job_case, suite_result, job.test_type, is_api=True)
        start_time, end_time = '', ''
        if job_case.start_time:
            start_time = datetime.strftime(job_case.start_time, "%Y-%m-%d %H:%M:%S")
        if job_case.end_time:
            end_time = datetime.strftime(job_case.end_time, "%Y-%m-%d %H:%M:%S")
        case_statics = _replace_statics_key(case_statics)
        result_item = {
            'test_suite_id': test_suite.first().id,
            'test_suite': test_suite.first().name,
            'test_case_id': test_case.first().id,
            'test_case': test_case.first().name,
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


def get_report_li(job_id):
    report_id_list = ReportObjectRelation.objects.filter(object_type='job', object_id=job_id).values_list(
        'report_id', flat=True)
    plan_relation = PlanInstanceTestRelation.objects.filter(job_id=job_id)
    if plan_relation.exists():
        plan_report_id_li = ReportObjectRelation.objects.filter(object_type='plan_instance',
                                                                object_id=plan_relation[0].plan_instance_id). \
            values_list('report_id', flat=True)
        if len(plan_report_id_li) > 0:
            report_id_list = chain(report_id_list, plan_report_id_li)
    report_queryset = Report.objects.filter(id__in=report_id_list)
    report_li = [
        f'{settings.APP_DOMAIN}/ws/{report.ws_id}/test_report/{report.id}/' for report in report_queryset]
    return report_li


def get_log_file(job_case):
    if TestStep.objects.filter(job_case_id=job_case.id, stage='run_case').exists():
        log_file = TestStep.objects.filter(job_case_id=job_case.id, stage='run_case').last().log_file
        return log_file


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
        case_data_list = [
            {
                'test_job_id': case_info.test_job_id,
                'test_suite': request.GET.get('test_suite'),
                'test_conf': TestCase.objects.filter(id=case_info.test_case_id).first().name,
                'test_case': case_info.sub_case_name,
                'test_result': FUNC_CASE_RESULT_TYPE_MAP.get(case_info.sub_case_result)
            } for case_info in queryset]
    elif test_job and test_job.test_type == 'performance':
        queryset = TestCaseInfoService.filter(PerfResult.objects.all(), request.GET)
        case_data_list = [
            {
                'test_job_id': case_info.test_job_id,
                'test_suite': request.GET.get('test_suite'),
                'test_conf': TestCase.objects.filter(id=case_info.test_case_id).first().name,
                'test_metric': case_info.metric,
                'test_value': round(float(case_info.test_value), 2)
            } for case_info in queryset]
    if request.GET.get('test_conf'):
        case_data_list = list(filter(lambda x: x.get('test_conf') == request.GET.get('test_conf'), case_data_list))
    resp.data = case_data_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_job_suite(request):
    job_id = request.GET.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    job = TestJob.objects.filter(id=job_id).first()
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(request.GET.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    suite_data_list = list()
    raw_sql = "SELECT a.test_suite_id,a.state,b.name AS test_suite_name FROM test_job_suite a, test_suite b " \
              "WHERE a.test_suite_id=b.id AND a.is_deleted=0 AND b.is_deleted=0 AND a.job_id=%s"
    job_suite_list = query_all_dict(raw_sql, params=[job_id])
    for job_suite in job_suite_list:
        suite_data_list.append(dict(test_suite_id=job_suite['test_suite_id'],
                                    test_suite_name=job_suite['test_suite_name'],
                                    state=job_suite['state']))
    resp.data = suite_data_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_job_metric(request):
    job_id = request.GET.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    test_suite = request.GET.get('test_suite', None)
    assert test_suite, ValueError(ErrorCode.TEST_SUITE_NAME_NEED)
    job = TestJob.objects.filter(id=job_id).first()
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(request.GET.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    metric_data_list = list()
    raw_sql = "SELECT a.metric,a.test_value,a.cv_value,a.max_value,a.min_value,a.value_list,a.baseline_value," \
              "a.compare_result,a.track_result FROM perf_result a, test_suite b WHERE " \
              "a.is_deleted=0 AND b.is_deleted=0 AND a.test_job_id=%s AND b.name=%s"
    job_metric_list = query_all_dict(raw_sql, params=[job_id, test_suite])
    for job_metric in job_metric_list:
        metric_data_list.append(dict(
            metric=job_metric['metric'],
            test_value=job_metric['test_value'],
            cv_value=job_metric['cv_value'],
            max_value=job_metric['max_value'],
            min_value=job_metric['min_value'],
            value_list=job_metric['value_list'],
            baseline_value=job_metric['baseline_value'],
            compare_result=job_metric['compare_result'],
            track_result=job_metric['track_result'],))
    resp.data = metric_data_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_job_sub_case(request):
    job_id = request.GET.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    test_suite = request.GET.get('test_suite', None)
    assert test_suite, ValueError(ErrorCode.TEST_SUITE_NAME_NEED)
    job = TestJob.objects.filter(id=job_id).first()
    assert job, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(request.GET.get('username', None), job):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    metric_data_list = list()
    raw_sql = "SELECT a.sub_case_name,a.sub_case_result FROM func_result a, test_suite b WHERE " \
              "a.is_deleted=0 AND b.is_deleted=0 AND a.test_job_id=%s AND b.name=%s"
    job_metric_list = query_all_dict(raw_sql, params=[job_id, test_suite])
    for job_metric in job_metric_list:
        metric_data_list.append(dict(
            sub_case_name=job_metric['sub_case_name'],
            sub_case_result=FUNC_CASE_RESULT_TYPE_MAP.get(job_metric['sub_case_result'])))
    resp.data = metric_data_list
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
    queryset = JobType.objects.filter(ws_id=ws_id, test_type=test_type, enable=True)
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
    queryset = Project.objects.filter(ws_id=ws_id)
    project_list = [{'id': project.id, 'name': project.name, 'is_default': project.is_default} for project in queryset]
    resp.data = project_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_workspace(request):
    if not check_admin_operator_permission(request.GET.get('username', None)):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    queryset = Workspace.objects.filter(is_approved=True)
    ws_list = [{'id': ws.id, 'name': ws.name} for ws in queryset]
    resp.data = ws_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_server_info(request):
    resp = CommResp()
    ip = request.GET.get('ip', None)
    assert ip, ValueError(ErrorCode.SERVER_IP_NEED)
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    provider = request.GET.get('provider', None)
    assert provider, ValueError(ErrorCode.PROVIDER_NEED)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    if provider == 'aligroup':
        server = TestServer.objects.filter(ip=request.GET.get('ip')).first()
        if server:
            resp.data = {'sn': server.sn,
                         'hostname': server.hostname,
                         'ip': server.ip,
                         'device_type': server.device_type,
                         'idc': server.idc,
                         'manufacturer': server.manufacturer,
                         'device_mode': server.device_mode,
                         'sm_name': server.sm_name,
                         'security_domain': server.security_domain,
                         'cpu': server.cpu,
                         'cpu_device': server.cpu_device,
                         'memory': server.memory,
                         'memory_device': server.memory_device,
                         'storage': server.storage,
                         'network': server.network,
                         'net_device': server.net_device,
                         'platform': server.platform,
                         'kernel': server.kernel}
    if provider == 'aliyun':
        server = CloudServer.objects.filter(pub_ip=request.GET.get('ip')).first()
        if server:
            resp.data = {'instance_id': server.instance_id,
                         'pub_ip': server.pub_ip,
                         'region': server.region,
                         'zone': server.zone,
                         'instance_type': server.instance_type,
                         'bandwidth': server.bandwidth,
                         'system_disk_category': server.system_disk_category,
                         'system_disk_size': server.system_disk_size,
                         'storage_size': server.storage_size,
                         'storage_number': server.storage_number,
                         'image': server.image,
                         'real_state': server.real_state,
                         'channel_type': server.channel_type}
    return resp.json_resp()


@api_catch_error
@token_required
def get_product_job_list(request):
    resp = CommResp()
    product = request.GET.get('product', None)
    ws_id = request.GET.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(request.GET['username'], ws_id):
        assert None, ValueError(ErrorCode.PRODUCT_PERMISSION_ERROR)
    product = Product.objects.filter(name=product, ws_id=ws_id).first()
    job_id_list = list(TestJob.objects.filter(product_id=product.id).values_list('id', flat=True))
    resp.data = job_id_list
    return resp.json_resp()


@api_catch_error
@token_required
def get_project_job_list(request):
    resp = CommResp()
    req_info = request.GET
    if request.method == 'GET':
        req_info = request.GET
    if request.method == 'POST':
        req_info = json.loads(request.body)
    project = req_info.get('project', None)
    assert project, ValueError(ErrorCode.PROJECT_NAME_NEED)
    ws_id = req_info.get('ws_id', None)
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(req_info.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    tags = req_info.get('tags', None)
    start_time = req_info.get('start_time', None)
    end_time = req_info.get('end_time', None)
    job_count = req_info.get('job_count', None)
    raw_sql = "SELECT DISTINCT a.id FROM test_job a, project b where a.project_id=b.id " \
              "AND a.is_deleted=0 AND b.is_deleted=0 AND b.name=%s AND a.ws_id=%s "
    params = [project, ws_id]
    if tags:
        raw_sql = "SELECT DISTINCT a.id FROM test_job a, project b, job_tag c, job_tag_relation d " \
                  "where a.project_id=b.id AND a.is_deleted=0 AND b.is_deleted=0 AND d.job_id=a.id AND d.tag_id=c.id " \
                  "AND b.name=%s AND a.ws_id=%s "
        tag_list = tuple(tags.split(','))
        raw_sql += " AND c.name IN %s"
        params = [project, ws_id, tag_list]
    if start_time and end_time:
        end_time = (datetime.strptime(end_time, "%Y-%m-%d") +
                    timedelta(days=1)).strftime("%Y-%m-%d")
        raw_sql += " AND a.start_time BETWEEN %s AND %s "
        params.append(start_time)
        params.append(end_time)
    if job_count:
        raw_sql += " LIMIT %s "
        params.append(job_count)
    job_result_list = query_all_dict(raw_sql, params=params)
    job_id_list = list()
    for job_id in job_result_list:
        job_id_list.append(job_id['id'])
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
    tag_sql = "SELECT a.id,a.name,c.id AS tag_id,C.name AS tag_name FROM test_job a LEFT JOIN job_tag_relation b " \
              "ON a.id=b.job_id LEFT JOIN job_tag c ON b.tag_id=c.id where A.is_deleted=0 AND B.is_deleted=0 " \
              "AND C.is_deleted=0 AND a.id IN %s"
    tags_result = query_all_dict(tag_sql, params=[tuple(job_id_list)])
    job_filter_tag_list = list()
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
