# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import json

from django.db import transaction


from tone.core.utils.short_uuid import short_uuid
from tone.core.common.redis_cache import redis_cache
from tone.core.utils.common_utils import kernel_info_format
from tone.models import TestJob, TestJobCase, TestJobSuite, JobTagRelation, Project, JobTag, Baseline, TestTemplate, \
    JobType, TestSuite, TestCase, TestServer, CloudServer, TestCluster, ServerTag, Workspace, KernelInfo
from tone.core.utils.helper import CommResp
from tone.core.handle.job_handle import JobDataHandle
from tone.core.common.verify_token import token_required
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.expection_handler.error_catch import api_catch_error
from tone.core.utils.permission_manage import check_ws_operator_permission
from tone.serializers.job.test_serializers import JobSerializerForAPI
from tone.core.common.job_result_helper import splice_job_link


@api_catch_error
@token_required
def job_create(request):
    """
    api to create job
    example:
    """
    resp = CommResp()
    if request.method != 'POST':
        raise ValueError(ErrorCode.SUPPORT_POST)
    data = json.loads(request.body)
    operator = request.user
    conversion_data(data)
    handler = JobDataHandle(data, operator, is_api=True)
    data_dic, case_list, suite_list, tag_list = handler.return_result()
    if not case_list or not suite_list:
        raise ValueError(ErrorCode.SUITE_NOT_EXISTS)
    with transaction.atomic():
        test_job = TestJob.objects.create(**data_dic)
        for suite in suite_list:
            suite['job_id'] = test_job.id
            TestJobSuite.objects.create(**suite)
        for case in case_list:
            case['job_id'] = test_job.id
            TestJobCase.objects.create(**case)
        for tag in tag_list:
            JobTagRelation.objects.create(tag_id=tag, job_id=test_job.id)
        job_data = JobSerializerForAPI(test_job, many=False).data
        job_data['job_id'] = test_job.id
        job_data['job_name'] = test_job.name
        job_data['test_type'] = test_job.test_type
        job_data['job_link'] = splice_job_link(test_job)
    resp.data = job_data
    return resp.json_resp()


@api_catch_error
@token_required
def job_batch_create(request):
    resp = CommResp()
    if request.method != 'POST':
        raise ValueError(ErrorCode.SUPPORT_POST)
    data = json.loads(request.body)
    operator = request.user
    conversion_data(data)
    handler = JobDataHandle(data, operator, is_api=True)
    data_dic, case_list, suite_list, tag_list = handler.return_result()
    tmp_job_id = short_uuid()
    job_data = dict(tmp_job_id=tmp_job_id, data_dic=data_dic, case_list=case_list, suite_list=suite_list,
                    tag_list=tag_list)
    redis_cache.lpush('batch_create_job', json.dumps(job_data))
    resp.data = {'tmp_job_id': tmp_job_id}
    return resp.json_resp()


def conversion_data(data):  # noqa: C901
    data['api'] = True
    if data.get('ws_id'):
        ws_id = data.get('ws_id')
    else:
        ws_name = data.get('workspace')
        assert ws_name, ValueError(ErrorCode.WS_NAME_NEED)
        ws_id = get_ws(ws_name)
    if not check_ws_operator_permission(data.get('username'), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    if data.get('template') or data.get('template_id'):
        data['data_from'] = 'template'
        template = TestTemplate.objects.get(id=data.get('template_id')) if data.get('template_id') else get_template(
            data.get('template'), ws_id)
        job_type = get_job_type(template.job_type_id)
        data['template_id'] = template.id
    else:
        job_type = data.get('job_type')
        assert job_type, ValueError(ErrorCode.TYPE_ID_LACK)
        job_type = get_job_type_for_name(job_type, ws_id)
        data['job_type'] = job_type.id
    provider = job_type.server_type
    if data.get('project'):
        if not Project.objects.filter(name=data.get('project'), ws_id=ws_id).exists():
            raise ValueError(ErrorCode.PROJECT_NOT_EXISTS)
        data['project'] = Project.objects.get(name=data.get('project'), ws_id=ws_id).id
    if data.get('baseline'):
        if not Baseline.objects.filter(name=data.get('baseline'), ws_id=ws_id).exists():
            raise ValueError(ErrorCode.BASELINE_NOT_EXISTS)
        data['baseline'] = Baseline.objects.get(name=data.get('baseline'), ws_id=ws_id).id
    if data.get('tags'):
        tags = list()
        tag_li = data.get('tags').split(',')
        for tag in tag_li:
            if not JobTag.objects.filter(name__iexact=tag, ws_id=ws_id).exists():
                raise ValueError(ErrorCode.TAG_NONEXISTENT)
            tags.append(JobTag.objects.get(name__iexact=tag, ws_id=ws_id).id)
        data['tags'] = tags

    if data.get('test_config') and isinstance(data.get('test_config'), list):
        for suite in data.get('test_config'):
            if not TestSuite.objects.filter(name=suite.get('test_suite')).exists():
                raise ValueError(ErrorCode.SUITE_NOT_EXISTS)
            test_suite = TestSuite.objects.get(name=suite.get('test_suite'))
            if test_suite.test_type != job_type.test_type:
                raise ValueError(ErrorCode.TEST_TYPE_INCONSISTENT)
            suite['test_suite'] = test_suite.id
            run_mode = test_suite.run_mode
            for case in suite['cases']:
                test_case = TestCase.objects.filter(
                    name=case.get('test_case'),
                    test_suite_id=test_suite.id
                )
                if not test_case.exists():
                    raise ValueError(ErrorCode.CASE_NOT_EXISTS)
                case['test_case'] = test_case.first().id
                server_config = case.get('server', {})
                if server_config.get('ip'):
                    case['server_object_id'] = get_server(server_config.get('ip'), provider, run_mode, ws_id)
                elif server_config.get('tags'):
                    case['server_tag_id'] = get_server_tag(server_config.get('tags'), ws_id)
                    server_config.pop('tags')
                elif server_config.get('instance'):
                    server_obj = CloudServer.objects.filter(
                        is_instance=True,
                        instance_id=server_config.get('instance'),
                        ws_id=ws_id
                    )
                    if not server_obj.exists():
                        raise ValueError(ErrorCode.SERVER_NOT_EXISTS)
                    case['server_object_id'] = server_obj.first().id
                    server_config.pop('instance')
                elif server_config.get('config'):
                    server_obj = CloudServer.objects.filter(
                        is_instance=False,
                        template_name=server_config.get('config'),
                        ws_id=ws_id
                    )
                    if not server_obj.exists():
                        raise ValueError(ErrorCode.SERVER_NOT_EXISTS)
                    case['server_object_id'] = server_obj.first().id
                    server_config.pop('config')
                elif server_config.get('tsn'):
                    server_model = TestServer if provider == 'aligroup' else CloudServer
                    server_obj = server_model.objects.filter(
                        tsn=server_config.get('tsn'),
                        ws_id=ws_id
                    )
                    if not server_obj.exists():
                        raise ValueError(ErrorCode.SERVER_NOT_EXISTS)
                    case['server_object_id'] = server_obj.first().id
                    server_config.pop('tsn')
                else:
                    pass
    if data.get('kernel_id'):
        if not KernelInfo.objects.filter(id=data.get('kernel_id')).exists():
            raise ValueError(ErrorCode.KERNELID_NOT_EXISTS)
        kernel_info_obj = KernelInfo.objects.get(id=data.get('kernel_id'))
        data['kernel_version'] = kernel_info_obj.version
        kernel_info = data.get('kernel_info', dict())
        if kernel_info_obj.kernel_packages:
            kernel_info['kernel_packages'] = kernel_info_obj.kernel_packages
            data['kernel_info'] = kernel_info
        else:
            kernel_info['kernel_packages'] = []
            if kernel_info_obj.kernel_link:
                kernel_info['kernel_packages'].append(kernel_info_obj.kernel_link.strip())
            if kernel_info_obj.devel_link:
                kernel_info['kernel_packages'].append(kernel_info_obj.devel_link.strip())
            if kernel_info_obj.headers_link:
                kernel_info['kernel_packages'].append(kernel_info_obj.headers_link.strip())
            data['kernel_info'] = kernel_info
    else:
        data['kernel_info'] = kernel_info_format(data.get('kernel_info', dict()))
        if data['kernel_info']:
            data['kernel_version'] = None


def get_template(template, ws_id):
    if not TestTemplate.objects.filter(name=template, ws_id=ws_id).exists():
        raise ValueError(ErrorCode.TEST_TEMPLATE_NONEXISTENT)
    return TestTemplate.objects.get(name=template, ws_id=ws_id)


def get_job_type_for_name(job_type, ws_id):
    if not JobType.objects.filter(name=job_type, ws_id=ws_id).exists():
        raise ValueError(ErrorCode.TYPE_NONEXISTENT)
    return JobType.objects.get(name=job_type, ws_id=ws_id)


def get_job_type(job_type_id):
    if not JobType.objects.filter(id=job_type_id).exists():
        raise ValueError(ErrorCode.TYPE_NONEXISTENT)
    return JobType.objects.get(id=job_type_id)


def get_server(server_ip, provider, run_mode, ws):
    if provider == 'aligroup' and run_mode == 'standalone':
        if not TestServer.objects.filter(ip=server_ip, ws_id=ws).exists():
            raise ValueError(ErrorCode.SERVER_NOT_EXISTS)
        return TestServer.objects.get(ip=server_ip, ws_id=ws).id
    elif provider == 'aliyun' and run_mode == 'standalone':
        if not CloudServer.objects.filter(private_ip=server_ip, ws_id=ws).exists():
            raise ValueError(ErrorCode.SERVER_NOT_EXISTS)
        return CloudServer.objects.filter(private_ip=server_ip, ws_id=ws).last().id
    elif run_mode == 'cluster':
        if not TestCluster.objects.filter(name=server_ip, ws_id=ws).exists():
            raise ValueError(ErrorCode.CLUSTER_NOT_EXISTS)
        return TestCluster.objects.get(name=server_ip, ws_id=ws).id
    else:
        raise ValueError(ErrorCode.PROGRAM_ERROR)


def get_server_tag(server_tag, ws):
    server_tag_list = server_tag.split(',')
    if not ServerTag.objects.filter(name__in=server_tag_list, ws_id=ws).exists():
        raise ValueError(ErrorCode.SERVER_TAG_NOT_EXISTS)
    return ServerTag.objects.filter(name__in=server_tag_list, ws_id=ws).values_list('id', flat=True)


def get_ws(ws_name):
    if not Workspace.objects.filter(name=ws_name).exists():
        raise ValueError(ErrorCode.WS_NOT_EXISTS)
    return Workspace.objects.get(name=ws_name).id


@token_required
@api_catch_error
def get_server_list(request):
    data = request.GET
    ws_id = data.get('ws_id')
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    provider = data.get('provider')
    assert provider, ValueError(ErrorCode.PROVIDER_NEED)
    run_mode = data.get('run_mode')
    assert run_mode, ValueError(ErrorCode.PARAMS_ERROR)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    if provider == 'aligroup' and run_mode == 'standalone':
        queryset = TestServer.objects.exclude(ip='').\
            filter(ws_id=ws_id, state='Available', spec_use=0, occupied_job_id__isnull=True).\
            values_list('ip', flat=True).distinct()
        resp.data = list(queryset)
    elif provider == 'aliyun' and run_mode == 'standalone':
        queryset = CloudServer.objects.exclude(instance_id='').\
            filter(ws_id=ws_id, state='Available', spec_use=0, occupied_job_id__isnull=True).\
            values_list('instance_id', flat=True).distinct()
        resp.data = list(queryset)
    return resp.json_resp()


@token_required
@api_catch_error
def get_server_tag_list(request):
    data = request.GET
    ws_id = data.get('ws_id')
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    queryset = ServerTag.objects.filter(ws_id=ws_id).values_list('name', flat=True)
    resp.data = list(queryset)
    return resp.json_resp()


@api_catch_error
@token_required
def get_cluster_list(request):
    data = request.GET
    ws_id = data.get('ws_id')
    assert ws_id, ValueError(ErrorCode.WS_NEED)
    provider = data.get('provider')
    assert provider, ValueError(ErrorCode.PROVIDER_NEED)
    if not check_ws_operator_permission(request.GET.get('username', None), ws_id):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    queryset = TestCluster.objects.filter(ws_id=ws_id, cluster_type=provider, is_occpuied=0,
                                          occupied_job_id__isnull=True).values_list('name', flat=True).distinct()
    resp.data = list(queryset)
    return resp.json_resp()
