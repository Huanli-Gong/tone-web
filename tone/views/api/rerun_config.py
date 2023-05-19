# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
from tone.core.utils.common_utils import kernel_info_format, format_env_info
from django.db.models import Q
from tone.core.utils.tone_thread import ToneThread
from tone.models import TestJob, TestJobSuite, TestJobCase, JobTagRelation, JobTag, FuncResult, ServerTag
from tone.core.utils.helper import CommResp
from tone.core.common.expection_handler.error_catch import api_catch_error
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.job_result_helper import get_rerun_case_server, get_custom_server, get_server_object_id


@api_catch_error
def config_query(request):
    resp = CommResp()
    data = request.GET
    job_id = data.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    jobs = TestJob.objects.filter(id=job_id)
    if not jobs.exists():
        raise ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    else:
        job = jobs.first()
    job_config = job.to_dict()
    job_config['env_info'] = format_env_info(job_config.get('env_info'))
    job_config['baseline'] = job_config.get('baseline_id')
    job_config['baseline_job_id'] = job_config.get('baseline_job_id')
    job_config['kernel_info'] = kernel_info_format(job_config['kernel_info'])
    suite_config = list()
    tag_config = [tag.tag_id for tag in JobTagRelation.objects.filter(job_id=job_id) if
                  JobTag.objects.filter(id=tag.tag_id, source_tag='custom_tag').exists()]
    if not data.get('notice', None):
        job_config['notice_info'] = list()
    is_all_case = True if not data.get('suite') or data.get('suite') == '1' else False
    job_suites = TestJobSuite.objects.filter(job_id=job_id)
    server_deleted = dict()
    server_no_allocated = dict()
    for job_suite in job_suites:
        case_config = list()
        if is_all_case:
            job_cases = TestJobCase.objects.filter(job_id=job_id, test_suite_id=job_suite.test_suite_id)
        else:
            fail_case_id_list = FuncResult.objects.filter(test_job_id=job_id, sub_case_result=2,
                                                          match_baseline=0).values_list('test_case_id',
                                                                                        flat=True).distinct()
            all_case_id_list = FuncResult.objects.filter(test_job_id=job_id).values_list('test_case_id',
                                                                                         flat=True).distinct()
            q = Q()
            q &= Q(job_id=job_id)
            q &= Q(test_suite_id=job_suite.test_suite_id)
            q &= (Q(test_case_id__in=fail_case_id_list) | ~Q(test_case_id__in=all_case_id_list))
            job_cases = TestJobCase.objects.filter(q)
        thread_tasks = []
        for job_case in job_cases:
            thread_tasks.append(
                ToneThread(_package_case, (case_config, data, job_case, server_deleted, server_no_allocated))
            )
            thread_tasks[-1].start()
        for thread_task in thread_tasks:
            thread_task.join()
            thread_task.get_result()
        suite_config.append({
            'id': job_suite.id,
            'test_suite_id': job_suite.test_suite_id,
            'need_reboot': job_suite.need_reboot,
            'setup_info': job_suite.setup_info,
            'cleanup_info': job_suite.cleanup_info,
            'monitor_info': job_suite.monitor_info,
            'priority': job_suite.priority,
            'cases': case_config,
        })
    job_config['tags'] = tag_config
    job_config['test_config'] = suite_config
    job_config['server_deleted'] = server_deleted
    job_config['server_no_allocated'] = server_no_allocated
    resp.data = job_config
    return resp.json_resp()


def _package_case(case_config, data, job_case, server_deleted_list, server_no_allocated_list):
    server_obj = get_rerun_case_server(job_case, data=data) \
        if data.get('inheriting_machine') else get_rerun_case_server(job_case, is_config=True)
    if server_obj.server_is_deleted:
        if job_case.server_tag_id and not data.get('inheriting_machine'):
            if 'dispatch_tags' not in server_deleted_list:
                server_deleted_list['dispatch_tags'] = list()
            server_exist = [delete_obj for delete_obj in server_deleted_list['dispatch_tags'] if
                            delete_obj['id'] == server_obj.server_deleted_dict[0]['id']]
            if not server_exist:
                server_deleted_list['dispatch_tags'].extend(server_obj.server_deleted_dict)
        else:
            if not server_obj.is_instance and job_case.server_provider == 'aliyun':
                if 'instance_setting' not in server_deleted_list:
                    server_deleted_list['instance_setting'] = list()
                server_exist = [delete_obj for delete_obj in server_deleted_list['instance_setting'] if
                                delete_obj['id'] == server_obj.server_deleted_dict[0]['id']]
                if not server_exist:
                    server_deleted_list['instance_setting'].extend(server_obj.server_deleted_dict)
            else:
                if 'ips' not in server_deleted_list:
                    server_deleted_list['ips'] = list()
                server_exist = [delete_obj for delete_obj in server_deleted_list['ips'] if
                                delete_obj['ip'] == server_obj.server_deleted_dict[0]['ip'] and
                                delete_obj['sn'] == server_obj.server_deleted_dict[0]['sn']]
                if not server_exist:
                    server_deleted_list['ips'].extend(server_obj.server_deleted_dict)
    if server_obj.server_no_allocated:
        if job_case.server_tag_id:
            if 'dispatch_tags' not in server_no_allocated_list:
                server_no_allocated_list['dispatch_tags'] = list()
            server_exist = [delete_obj for delete_obj in server_no_allocated_list['dispatch_tags'] if
                            delete_obj['id'] == server_obj.server_no_allocated[0]['id']]
            if not server_exist:
                server_no_allocated_list['dispatch_tags'].extend(server_obj.server_no_allocated)
        else:
            if not server_obj.is_instance and job_case.server_provider == 'aliyun':
                if 'instance_setting' not in server_no_allocated_list:
                    server_no_allocated_list['instance_setting'] = list()
                server_exist = [delete_obj for delete_obj in server_no_allocated_list['instance_setting'] if
                                delete_obj['id'] == server_obj.server_no_allocated[0]['id']]
                if not server_exist:
                    server_no_allocated_list['instance_setting'].extend(server_obj.server_no_allocated)
            else:
                if 'ips' not in server_no_allocated_list:
                    server_no_allocated_list['ips'] = list()
                server_exist = [delete_obj for delete_obj in server_no_allocated_list['ips'] if
                                delete_obj['ip'] == server_obj.server_no_allocated[0]['ip'] and
                                delete_obj['sn'] == server_obj.server_no_allocated[0]['sn']]
                if not server_exist:
                    server_no_allocated_list['ips'].extend(server_obj.server_no_allocated)
    server_tag_id = list() if not job_case.server_tag_id or data.get('inheriting_machine') else \
        [tag for tag in ServerTag.objects.filter(id__in=str(job_case.server_tag_id).split(',')).
            values_list('id', flat=True)]
    server_obj_id = server_obj.server_object_id
    if server_tag_id or server_obj.ip == '随机' or not server_obj.ip:
        server_obj_id = None
    elif not server_obj.server_object_id:
        server_obj_id = get_server_object_id(job_case)
    case_config.append({
        'id': job_case.id,
        'test_case_id': job_case.test_case_id,
        'repeat': job_case.repeat,
        'customer_server': get_custom_server(job_case.id),
        'server_object_id': server_obj_id,
        'server_tag_id': server_tag_id,
        'env_info': job_case.env_info,
        'need_reboot': job_case.need_reboot,
        'setup_info': job_case.setup_info,
        'cleanup_info': job_case.cleanup_info,
        'console': job_case.console,
        'monitor_info': job_case.monitor_info,
        'priority': job_case.priority,
        'ip': server_obj.ip,
        'is_instance': server_obj.is_instance
    })
