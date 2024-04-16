# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import json
from datetime import datetime

from django.db.models import Q
from tone.core.utils.common_utils import query_all_dict
from tone.models import FuncResult, TestJob, JobTagRelation, User, PerfResult, JobTag, \
    Project, TestJobCase, TestCase, TestSuite
from tone.core.common.constant import FUNC_CASE_RESULT_TYPE_MAP
from tone.core.common.job_result_helper import get_job_case_run_server, date_add, get_run_server
from tone.core.common.services import CommonService
from tone.core.common.constant import ANALYSIS_SUITE_LIST_SQL_MAP, ANALYSIS_METRIC_LIST_SQL_MAP
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.expection_handler.custom_error import AnalysisException


class PerfAnalysisService(CommonService):

    @staticmethod
    def get_metric(data):
        test_suite = data.get('test_suite_id', None)
        test_case = data.get('test_case_id', None)
        project_id = data.get('project_id')
        if not project_id:
            assert project_id, AnalysisException(ErrorCode.PROJECT_ID_NEED)
        raw_sql = 'SELECT distinct metric FROM perf_result WHERE test_suite_id=%s AND test_case_id=%s AND ' \
                  'test_job_id IN (SELECT id FROM test_job WHERE project_id=%s AND is_deleted=0) ORDER BY metric '
        metric_result = query_all_dict(raw_sql.replace('\'', ''), [test_suite, test_case, project_id])
        metric_list = [m['metric'] for m in metric_result]
        return metric_list

    def filter(self, data):
        metric_map = dict()
        project = data.get('project_id', None)
        test_suite = data.get('test_suite_id', None)
        test_case = data.get('test_case_id', None)
        metrics = data.get('metric')
        start_time = data.get('start_time', None)
        end_time = data.get('end_time', None)
        provider_env = data.get('provider_env', 'aligroup')
        tag = data.get('tag', None)
        ws_id = data.get('ws_id')
        assert project, AnalysisException(ErrorCode.PROJECT_ID_NEED)
        assert test_suite, AnalysisException(ErrorCode.TEST_SUITE_NEED)
        assert test_case, AnalysisException(ErrorCode.TEST_CASE_NEED)
        assert metrics, AnalysisException(ErrorCode.METRIC_NEED)
        assert start_time, AnalysisException(ErrorCode.START_TIME_NEED)
        assert end_time, AnalysisException(ErrorCode.END_TIME_NEED)
        assert ws_id, AnalysisException(ErrorCode.WS_NEED)
        end_time = date_add(end_time, 1)
        job_list = []
        sql = self.get_sql()
        metrics_str = tuple(metrics)
        start_dt = datetime.strptime(start_time, '%Y-%m-%d')
        end_dt = datetime.strptime(end_time, '%Y-%m-%d')
        params = [start_dt, end_dt, provider_env, project, metrics_str, test_case, test_suite]
        analysis_tag = JobTag.objects.filter(name='analytics', ws_id=ws_id).first()
        assert analysis_tag, AnalysisException(ErrorCode.ANALYSIS_TAG_NEED)
        job_id_list = set(JobTagRelation.objects.filter(tag_id=analysis_tag.id).values_list('job_id', flat=True))
        if tag:
            tag_input = set(JobTagRelation.objects.filter(tag_id=tag).values_list('job_id', flat=True))
            job_id_list = tag_input & job_id_list
        if len(job_id_list) > 0:
            params.append(tuple(job_id_list))
            metrics_result = query_all_dict(sql, params=params)
            job_case_dict = self._get_job_case_dict(test_suite, test_case)
            for metric in metrics:
                metric_result = [result for result in metrics_result if result['metric'] == metric]
                if metric_result:
                    metric_data = self.get_metric_data(metric_result, job_case_dict)
                    result_data = self.get_result_data(metric_data, provider_env, start_time, end_time)
                    job_list = self.get_job_list(result_data, provider_env)
                    baseline_data = self.get_baseline_data(test_suite, test_case, metric, job_list)
                    metric_map[metric] = {
                        'result_data': result_data,
                        'baseline_data': baseline_data
                    }
                else:
                    metric_map[metric] = {
                        'result_data': {},
                        'baseline_data': {'value': 'null', 'cv_value': 'null'}
                    }
        res_data = {
            'job_list': job_list,
            'metric_map': metric_map
        }
        return res_data

    def _get_job_case_dict(self, test_suite_id, test_case_id):
        job_case_dict = dict()
        test_job_case_list = TestJobCase.objects.filter(test_suite_id=test_suite_id, test_case_id=test_case_id,
                                                        state__in=('success', 'fail'))
        for job_case in test_job_case_list:
            if job_case.job_id not in job_case_dict:
                job_case_dict[job_case.job_id] = job_case
        return job_case_dict

    @staticmethod
    def get_baseline_data(test_suite, test_case, metric, job_list):
        baseline_data = {
            'value': None,
            'cv_value': None,
        }
        if job_list:
            job = job_list[0]
            perf_results = PerfResult.objects.filter(test_job_id=job.get('job_id'), test_suite_id=test_suite,
                                                     test_case_id=test_case, metric=metric). \
                values_list('baseline_value', 'baseline_cv_value')
            if perf_results:
                perf_result = perf_results[0]
                baseline_data['value'] = '%.2f' % float(perf_result[0]) if perf_result[0] else None
                baseline_data['cv_value'] = perf_result[1]
        return baseline_data

    @staticmethod
    def get_result_data(metric_data, provider_env, start_time, end_time):
        pack_data = dict()
        result_data = dict()
        if provider_env == 'aligroup':
            for data in metric_data:
                if data['server']:
                    if data['server'] in pack_data:
                        pack_data[data['server']].append(data)
                    else:
                        pack_data[data['server']] = [data]
            for key, value in pack_data.items():
                data_map = get_data_map(start_time, end_time)
                for _value in value:
                    if not data_map[_value['start_time'].split(' ')[0]] or \
                            data_map[_value['start_time'].split(' ')[0]].get('start_time') <= _value['start_time']:
                        data_map[_value['start_time'].split(' ')[0]] = _value
                result_data[key] = data_map
        else:
            data_map = get_data_map(start_time, end_time)
            for data in metric_data:
                if not data_map[data['start_time'].split(' ')[0]] or \
                        data_map[data['start_time'].split(' ')[0]].get('start_time') <= data['start_time']:
                    data_map[data['start_time'].split(' ')[0]] = data
            result_data = data_map
        return result_data

    @staticmethod
    def get_metric_data(rows, job_case_dict):
        metric_data = list()
        for row in rows:
            metric_obj = _package_metric(row, job_case_dict)
            metric_data.append(metric_obj)
        return metric_data

    @staticmethod
    def get_sql():
        sql = """
                SELECT
                    A.id,
                    A.name,
                    A.start_time,
                    A.end_time,
                    A.build_pkg_info,
                    B.test_value,
                    B.cv_value,
                    B.note,
                    B.id as result_obj_id,
                    B.metric,
                    B.compare_result,
                    A.creator
                FROM
                    test_job AS A,
                    perf_result AS B
                WHERE
                    A.id = B.test_job_id 
                    AND A.start_time >= %s
                    AND A.end_time <= %s
                    AND A.server_provider = %s
                    AND A.test_type = 'performance' 
                    AND A.project_id = %s 
                    AND B.metric IN %s  
                    AND B.test_case_id = %s 
                    AND B.test_suite_id = %s 
                    AND A.state IN ( 'success', 'fail' )
                    AND A.id IN %s 
                    AND A.is_deleted = 0
                    AND B.is_deleted = 0
                """
        return sql

    @staticmethod
    def get_suite_list_sql(test_type):
        if test_type == 'performance':
            sql = ANALYSIS_SUITE_LIST_SQL_MAP.get('group_perf')
        else:
            sql = ANALYSIS_SUITE_LIST_SQL_MAP.get('group_func')
        return sql

    @staticmethod
    def get_job_list(result_data, provider_env):
        job_id_list = list()
        job_list = list()
        for value in result_data.values():
            if provider_env == 'aligroup':
                for _value in value.values():
                    package_job_info(_value, job_id_list, job_list, provider_env)
            else:
                package_job_info(value, job_id_list, job_list, provider_env)
        return list(sorted(job_list, key=lambda x: x.get('job_id'), reverse=True))

    def get_suite_case_list(self, data):
        ws_id = data.get('ws_id')
        test_type = data.get('test_type')
        provider_env = data.get('provider_env', 'aligroup')
        project_id = data.get('project_id')
        assert test_type, AnalysisException(ErrorCode.TEST_TYPE_LACK)
        assert ws_id, AnalysisException(ErrorCode.WS_NEED)
        assert project_id, AnalysisException(ErrorCode.PROJECT_ID_NEED)
        analysis_tag = JobTag.objects.filter(name='analytics', ws_id=ws_id).first()
        assert analysis_tag, AnalysisException(ErrorCode.ANALYSIS_TAG_NEED)
        job_id_list = JobTagRelation.objects.filter(tag_id=analysis_tag.id).values_list('job_id', flat=True)
        raw_sql = self.get_suite_list_sql(test_type)
        params = [provider_env, project_id, ws_id]
        if test_type == 'functional':
            params = [project_id, ws_id]
        params.append(tuple(job_id_list))
        suite_res_list = query_all_dict(raw_sql, params=params)
        suite_case_list = sorted(suite_res_list, key=lambda x: x['test_suite_id'], reverse=True)
        suite_list = list()
        tmp_suite_id = 0
        suite_dict = dict()
        test_suite_dict = dict()
        test_case_dict = dict()
        test_suite_list = TestSuite.objects.all().values_list('id', 'name')
        for test_suite in test_suite_list:
            test_suite_dict[test_suite[0]] = test_suite[1]
        test_case_list = TestCase.objects.all().values_list('id', 'name')
        for test_case in test_case_list:
            test_case_dict[test_case[0]] = test_case[1]
        for suite_info in suite_case_list:
            case_dict = dict()
            test_case = test_case_dict.get(suite_info['test_case_id'])
            test_suite = test_suite_dict.get(suite_info['test_suite_id'])
            if not test_case or not test_suite:
                continue
            case_dict['test_case_id'] = suite_info['test_case_id']
            case_dict['test_case_name'] = test_case
            if suite_info['test_suite_id'] != tmp_suite_id:
                tmp_suite_id = suite_info['test_suite_id']
                suite_dict = dict()
                suite_dict['test_suite_id'] = suite_info['test_suite_id']
                suite_dict['test_suite_name'] = test_suite
                suite_dict['test_case_list'] = list()
                suite_list.append(suite_dict)
            suite_dict['test_case_list'].append(case_dict)
        return suite_list

    def get_metric_list(self, data):
        start_time = data.get('start_time', None)
        end_time = data.get('end_time', None)
        ws_id = data.get('ws_id')
        project_id = data.get('project_id')
        test_type = data.get('test_type')
        provider_env = data.get('provider_env', 'aligroup')
        tag = data.get('tag', None)
        test_suite_id = data.get('test_suite_id')
        test_case_id = data.get('test_case_id')
        assert project_id, AnalysisException(ErrorCode.PROJECT_ID_NEED)
        assert test_type, AnalysisException(ErrorCode.TEST_TYPE_LACK)
        assert ws_id, AnalysisException(ErrorCode.WS_NEED)
        assert start_time, AnalysisException(ErrorCode.START_TIME_NEED)
        assert end_time, AnalysisException(ErrorCode.END_TIME_NEED)
        assert test_suite_id, AnalysisException(ErrorCode.TEST_CASE_NEED)
        assert test_case_id, AnalysisException(ErrorCode.TEST_SUITE_NEED)
        end_time = date_add(end_time, 1)
        start_time = datetime.strptime(start_time, '%Y-%m-%d')
        end_time = datetime.strptime(end_time, '%Y-%m-%d')
        params = [start_time, end_time, provider_env, project_id, test_suite_id, test_case_id, ws_id]
        if test_type == 'functional':
            params = [start_time, end_time, project_id, test_suite_id, test_case_id, ws_id]
        if tag:
            params.append(tag)
        raw_sql = self.get_metric_list_sql(test_type, tag)
        metric_res_list = query_all_dict(raw_sql, params=params)
        metric_list = list()
        for metric in metric_res_list:
            metric_list.append(metric['metric'])
        return metric_list

    @staticmethod
    def get_metric_list_sql(test_type, tag):
        if test_type == 'performance' and tag:
            sql = ANALYSIS_METRIC_LIST_SQL_MAP.get('group_perf_tag')
        elif test_type == 'functional' and tag:
            sql = ANALYSIS_METRIC_LIST_SQL_MAP.get('group_func_tag')
        elif test_type == 'performance':
            sql = ANALYSIS_METRIC_LIST_SQL_MAP.get('group_perf')
        else:
            sql = ANALYSIS_METRIC_LIST_SQL_MAP.get('group_func')
        return sql


def package_job_info(job_value, job_id_list, job_list, provider_env):
    if job_value and job_value.get('job_id') not in job_id_list:
        job_list.append({
                    'job_id': job_value.get('job_id'),
                    'job_name': job_value.get('job_name'),
                    'start_time': job_value.get('start_time'),
                    'end_time': job_value.get('end_time'),
                    'commit_id': job_value.get('commit_id'),
                    'creator': job_value.get('creator'),
                    'server': job_value.get('server'),
                    'server_id': job_value.get('server_id'),
                    'exists': job_value.get('exists'),
                    'value': job_value.get('value'),
                    'cv_value': job_value.get('cv_value'),
                    'note': job_value.get('note'),
                    'result_obj_id': job_value.get('result_obj_id'),
                    'creator_id': job_value.get('creator_id'),
                    'server_provider': provider_env
                })
        job_id_list.append(job_value.get('job_id'))


def _package_metric(row, job_case_dict):
    test_job_case = job_case_dict.get(row['id'])
    server, exists = get_run_server(test_job_case)
    user = User.objects.filter(id=row['creator']).first()
    metric_info = dict(
        {
            'job_id': row['id'],
            'job_name': row['name'],
            'start_time': datetime.strftime(row['start_time'], "%Y-%m-%d %H:%M:%S")
            if row['start_time'] else None,
            'end_time': datetime.strftime(row['end_time'], "%Y-%m-%d %H:%M:%S")
            if row['end_time'] else None,
            'commit_id': json.loads(row['build_pkg_info']).get('commit_id', None),
            'creator': user.first_name or user.last_name,
            'value': row['test_value'],
            'cv_value': row['cv_value'],
            'compare_result': '{0:.2f}%'.format(float(row['compare_result']) * 100) if row['compare_result'] else '',
            'note': row['note'],
            'result_obj_id': row['result_obj_id'],
            'creator_id': user.id,
            'exists': exists
        }
    )
    if server:
        if test_job_case.server_provider == 'aligroup':
            metric_info['server'] = server.ip
        else:
            metric_info.update({
                'server_id': server.id,
                'server': server.private_ip,
                'instance_type': server.instance_type,
                'image': server.image,
                'bandwidth': server.bandwidth,
                'run_mode': test_job_case.run_mode
            })
    return metric_info


class FuncAnalysisService(CommonService):

    @staticmethod
    def get_sub_case(data):
        test_suite = data.get('test_suite_id', None)
        test_case = data.get('test_case_id', None)
        fun_res = FuncResult.objects.filter(test_suite_id=test_suite, test_case_id=test_case).last()
        if not fun_res:
            return None
        sub_cases = FuncResult.objects.filter(test_job_id=fun_res.test_job_id, test_suite_id=test_suite,
                                              test_case_id=test_case).values('sub_case_name')
        sub_case_list = sorted(list(set([sub_case['sub_case_name'] for sub_case in sub_cases])))
        return sub_case_list

    def filter(self, data):
        project = data.get('project_id', None)
        test_suite = data.get('test_suite_id', None)
        test_case = data.get('test_case_id', None)
        sub_case_name = data.get('sub_case_name', None)
        start_time = data.get('start_time', None)
        end_time = data.get('end_time', None)
        show_type = data.get('show_type', 'pass_rate')
        tag = data.get('tag', None)
        ws_id = data.get('ws_id', None)
        assert project, AnalysisException(ErrorCode.PROJECT_ID_NEED)
        assert test_suite, AnalysisException(ErrorCode.TEST_SUITE_NEED)
        assert test_case, AnalysisException(ErrorCode.TEST_CASE_NEED)
        assert start_time, AnalysisException(ErrorCode.START_TIME_NEED)
        assert end_time, AnalysisException(ErrorCode.END_TIME_NEED)
        assert ws_id, AnalysisException(ErrorCode.WS_NEED)
        end_time = date_add(end_time, 1)
        func_results_q = Q(
            test_suite_id=test_suite,
            test_case_id=test_case,
            gmt_created__range=(start_time, end_time)
        )
        if show_type != 'pass_rate':
            func_results_q &= Q(sub_case_name=sub_case_name)
        func_job_ids = FuncResult.objects.filter(func_results_q).values_list('test_job_id', flat=True).distinct()
        job_queryset = TestJob.objects.filter(
            id__in=func_job_ids, project_id=project,
            state__in=['success', 'fail']).order_by('-gmt_created')
        job_li = list()
        analytics_tag_id_set = {JobTag.objects.get(ws_id=ws_id, name='analytics').id}
        if tag:
            analytics_tag_id_set.add(tag)
        job_tag_list = JobTagRelation.objects.filter(job_id__in=func_job_ids)
        for job in job_queryset:
            job_tag_relation_ids = set()
            for job_tag in job_tag_list:
                if job_tag.job_id == job.id:
                    job_tag_relation_ids.add(job_tag.tag_id)
            if analytics_tag_id_set.issubset(job_tag_relation_ids):
                job_li.append(job)
        sub_case_map, job_id_li = self.get_sub_case_map(job_li, start_time, end_time)
        res_data = dict()
        if job_id_li:
            res_data = self.get_res_data(sub_case_map, test_suite, test_case, sub_case_name, show_type, job_id_li)
        return res_data

    @staticmethod
    def get_sub_case_map(queryset, start_time, end_time):
        sub_case_map = get_data_map(start_time, end_time)
        job_id_li = list()
        for job in queryset:
            if job.start_time and not sub_case_map.get(datetime.strftime(job.start_time, "%Y-%m-%d"), None):
                get_case_map(sub_case_map, job, job_id_li)
        return sub_case_map, job_id_li

    @staticmethod
    def get_res_data(sub_case_map, test_suite, test_case, sub_case_name, show_type, job_id_li):
        job_list = list()
        case_map = dict()
        job_li = tuple(job_id_li)
        if show_type == 'pass_rate':
            raw_sql = 'SELECT COUNT(*) AS all_case,SUM(case when sub_case_result=1 then 1 ELSE 0 END ) AS ' \
                      'pass_case,test_job_id FROM func_result WHERE test_job_id IN %s AND ' \
                      'test_suite_id=%s AND test_case_id=%s GROUP BY test_job_id '
            func_queryset = query_all_dict(raw_sql.replace('\'', ''), [job_li, test_suite, test_case])
        else:
            assert sub_case_name, AnalysisException(ErrorCode.SUB_CASE_NEED)
            raw_sql = 'SELECT id,note,sub_case_result,test_job_id FROM func_result WHERE test_job_id ' \
                      'IN %s AND test_suite_id=%s AND test_case_id=%s AND sub_case_name=%s'
            func_queryset = query_all_dict(raw_sql.replace('\'', ''), [job_li, test_suite, test_case, sub_case_name])
        job_case_dict = dict()
        job_cases = TestJobCase.objects.filter(job_id__in=job_id_li, test_suite_id=test_suite, test_case_id=test_case)
        for job_case in job_cases:
            if job_case.job_id not in job_case_dict:
                job_case_dict[job_case.job_id] = job_case
        for key, value in sub_case_map.items():
            if value:
                job_case = job_case_dict.get(value.get('job_id'))
                analysis_note = None
                server, exists = get_run_server(job_case)
                if job_case.server_provider == 'aligroup':
                    ip = server.ip
                else:
                    ip = server.private_ip
                if job_case:
                    analysis_note = job_case.analysis_note
                if show_type == 'pass_rate':
                    all_case = 0
                    pass_case = 0
                    func_count = [count for count in func_queryset if count['test_job_id'] == value.get('job_id')]
                    if len(func_count) > 0:
                        all_case = func_count[0]['all_case']
                        pass_case = func_count[0]['pass_case']
                    case_map[key] = {**value,
                                     **{'all_case': all_case, 'pass_case': pass_case,
                                        'pass_rate': pass_case / all_case, 'note': analysis_note}}
                    job_list.append(
                        {**value, **{'server': ip,
                                     'server_id': server.id,
                                     'exists': exists,
                                     'note': analysis_note,
                                     'result_obj_id': job_case.id,
                                     'server_provider': job_case.server_provider}})
                else:
                    note = 0
                    func_result_id = 0
                    sub_case_result = None
                    func_result = [result for result in func_queryset if
                                   result['test_job_id'] == value.get('job_id')]
                    if len(func_result) > 0:
                        note = func_result[0]['note']
                        func_result_id = func_result[0]['id']
                        sub_case_result = func_result[0]['sub_case_result']
                    job_list.append(
                        {**value, **{'server': ip, 'server_id': server.id, 'note': note, 'exists': exists},
                         'result_obj_id': func_result_id, 'server_provider': job_case.server_provider})
                    case_map[key] = {**value,
                                     **{'result': FUNC_CASE_RESULT_TYPE_MAP.get(sub_case_result),
                                        'note': note}}
            else:
                case_map[key] = value
        res_data = {
            'job_list': job_list,
            'case_map': case_map,
        }
        return res_data


def get_data_map(start_time, end_time):
    end_time = date_add(end_time, -1)
    data_map = dict()
    while start_time < end_time:
        data_map[start_time] = None
        start_time = date_add(start_time, 1)
    data_map[end_time] = None
    return data_map


def get_case_map(sub_case_map, job, job_id_li):
    _sub_case_map = {
        'job_id': job.id,
        'job_name': job.name,
        'commit_id': job.build_pkg_info.get('commit_id'),
        'start_time': datetime.strftime(job.start_time, "%Y-%m-%d %H:%M:%S") if job.start_time else None,
        'end_time': datetime.strftime(job.end_time, "%Y-%m-%d %H:%M:%S") if job.end_time else None,
        'creator': User.objects.get(id=job.creator).first_name or User.objects.get(
            id=job.creator).last_name,
    }
    job_id_li.append(job.id)
    sub_case_map[datetime.strftime(job.gmt_created, "%Y-%m-%d")] = _sub_case_map


def get_share_request(share_req):
    req_data = share_req.copy()
    project = Project.objects.filter(id=share_req.get('project_id')).first()
    if project:
        req_data['project'] = project.name
    suite = TestSuite.objects.filter(id=share_req.get('test_suite_id')).first()
    if suite:
        req_data['suite_name'] = suite.name
    case = TestCase.objects.filter(id=share_req.get('test_case_id')).first()
    if case:
        req_data['case_name'] = case.name
    if 'ws_id' in req_data:
        req_data.pop('ws_id')
    if 'project_id' in req_data:
        req_data.pop('project_id')
    if 'test_suite_id' in req_data:
        req_data.pop('test_suite_id')
    if 'test_case_id' in req_data:
        req_data.pop('test_case_id')
    return req_data
