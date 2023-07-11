# flake8: noqa
from datetime import timedelta

from django.db import connection

from tone.core.common.redis_cache import redis_cache
from tone.core.common.services import CommonService
from tone.core.utils.tone_thread import ToneThread
from tone.models import TestJob, TestJobCase, FuncResult, PerfResult, \
    Workspace, Product, Project, TestSuite, TestCase, Baseline, FuncBaselineDetail, PerfBaselineDetail, TestMetric, \
    User, datetime, WorkspaceCaseRelation, TestJobSuite, TestServer, CloudServer
from tone.core.common.expection_handler.error_code import ErrorCode


class DashboardService(CommonService):
    @staticmethod
    def get_live_data(_):
        """dashboard实时数据 5s刷新一次"""
        job_total_num, job_running_num, test_run_total_num, test_run_running_num, server_alloc_num, server_running_num \
            , total_duration, result_total_num, func_result_num, perf_result_num = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        with connection.cursor() as cursor:
            search_sql = """
            SELECT COUNT(*) FROM test_job where ws_id in (
                SELECT id FROM workspace WHERE is_approved=1 AND is_deleted is False) AND is_deleted is False
            UNION ALL
            SELECT COUNT(*) FROM test_job where state='running' AND is_deleted is False
            UNION ALL
            SELECT COUNT(*) FROM test_job_case WHERE is_deleted is False
            UNION ALL
            SELECT COUNT(*) FROM test_job_case WHERE state='running' AND is_deleted is False
            UNION ALL
            SELECT SUM(T) FROM (
                SELECT COUNT(*) AS T FROM test_server_snapshot WHERE is_deleted is False
                UNION ALL
                SELECT COUNT(*) AS T FROM cloud_server_snapshot WHERE is_deleted is False
            ) AS snapshot_server_total
            UNION ALL
            SELECT SUM(T) FROM (
                SELECT COUNT(*) AS T FROM test_server WHERE state='Occupied' AND is_deleted is False
                UNION ALL
                SELECT COUNT(*) AS T FROM cloud_server WHERE state='Occupied' AND is_deleted is False
            ) AS server_total
            UNION ALL
            (SELECT id FROM func_result ORDER BY id DESC LIMIT 0,1)
            UNION ALL
            (SELECT id FROM perf_result ORDER BY id DESC LIMIT 0,1)
            """
            cursor.execute(search_sql)
            rows = cursor.fetchall()
            if rows:
                job_total_num = rows[0]
                job_running_num = rows[1]
                test_run_total_num = rows[2]
                test_run_running_num = rows[3]
                server_alloc_num = rows[4]
                server_running_num = rows[5]
                func_result_num = rows[6][0] if len(rows) > 6 and len(rows[6]) > 0 else 0
                perf_result_num = rows[7][0] if len(rows) > 7 and len(rows[7]) > 0 else 0
                result_total_num = int(func_result_num) + int(perf_result_num)
        # test duration
        redis_test_duration = 'test_duration'
        if redis_cache.get(redis_test_duration)[0]:
            total_duration, end_time = redis_cache.get(redis_test_duration)[1]
            end_job_list = TestJob.objects.filter(start_time__isnull=False, end_time__isnull=False,
                                                  end_time__gt=end_time).order_by(
                '-end_time')
            for each_job in end_job_list:
                if each_job:
                    total_duration += (each_job.end_time - each_job.start_time).seconds
            if end_job_list.first() and end_job_list.first().end_time:
                redis_cache.set(redis_test_duration, [total_duration, str(end_job_list.first().end_time)], nx=False)
        else:
            end_job_list = TestJob.objects.filter(start_time__isnull=False, end_time__isnull=False).order_by(
                '-end_time')
            total_duration = 0
            for each_job in end_job_list:
                if each_job:
                    total_duration += (each_job.end_time - each_job.start_time).seconds
            if end_job_list.first() and end_job_list.first().end_time:
                redis_cache.set(redis_test_duration, [total_duration, str(end_job_list.first().end_time)], nx=False)

        return {
            'job_total_num': job_total_num,
            'job_running_num': job_running_num,
            'test_run_total_num': test_run_total_num,
            'test_run_running_num': test_run_running_num,
            'server_alloc_num': server_alloc_num,
            'server_running_num': server_running_num,
            'total_duration': round(total_duration / 3600 / 24, 2),
            'result_total_num': result_total_num,
            'func_result_num': func_result_num,
            'perf_result_num': perf_result_num
        }

    def get_sys_data_v2(self, params):
        data_type = params.get('data_type')
        if not data_type:
            return self.get_sys_data(params)
        if data_type == 'workspace':
            workspace_num = Workspace.objects.filter(is_approved=1).count()
            product_num = Product.objects.all().count()
            project_num = Project.objects.all().count()
            return {
                'workspace_num': workspace_num,
                'product_num': product_num,
                'project_num': project_num
            }
        elif data_type == 'group':
            user_total_num = User.objects.all().count()
            team_list = User.objects.all().values_list('dep_desc', flat=True).distinct()
            team_num = len(set([self.get_dep_desc(team) for team in team_list]))
            return {
                'team_num': team_num,
                'user_total_num': user_total_num
            }
        elif data_type == 'benchmark':
            benchmark_data = redis_cache.get('dashboard_benchmark')
            if benchmark_data[0]:
                return benchmark_data[1]
            return {}
        elif data_type == 'baseline':
            baseline_total_num = Baseline.objects.all().count()
            func_baseline_res_num = FuncBaselineDetail.objects.all().count()
            perf_baseline_res_num = PerfBaselineDetail.objects.all().count()
            return {
                'baseline_total_num': baseline_total_num,
                'func_baseline_res_num': func_baseline_res_num,
                'perf_baseline_res_num': perf_baseline_res_num
            }

    def get_sys_data(self, _):
        """dashboard 系统数据"""
        workspace_num = Workspace.objects.filter(is_approved=1).count()
        product_num = Product.objects.all().count()
        project_num = Project.objects.all().count()
        user_total_num = User.objects.all().exclude(username='system', is_superuser=True).count()
        team_list = User.objects.all().values_list('dep_desc', flat=True).distinct()
        team_num = len(set([self.get_dep_desc(team) for team in team_list]))
        benchmark_num = TestSuite.objects.all().count()
        test_conf_num = TestCase.objects.all().count()
        test_case_num = FuncResult.objects.all().values_list('sub_case_name').distinct().count()
        test_metric_num = TestMetric.objects.all().count()
        baseline_total_num = Baseline.objects.all().count()
        func_baseline_res_num = FuncBaselineDetail.objects.all().count()
        perf_baseline_res_num = PerfBaselineDetail.objects.all().count()
        return {
            'workspace_num': workspace_num,
            'product_num': product_num,
            'project_num': project_num,
            'team_num': team_num,
            'user_total_num': user_total_num,
            'benchmark_num': benchmark_num,
            'test_conf_num': test_conf_num,
            'test_case_num': test_case_num,
            'test_metric_num': test_metric_num,
            'baseline_total_num': baseline_total_num,
            'func_baseline_res_num': func_baseline_res_num,
            'perf_baseline_res_num': perf_baseline_res_num,
        }

    def chart_function(self, chart_type):
        chart_function_map = {
            'task_execute_trend': self.task_execute_trend,
            'ws_create_job': self.ws_create_job,
            'department_user': self.department_user,
            'personal_create_job': self.personal_create_job,
        }
        return chart_function_map.get(chart_type)

    def get_chart_data(self, data):
        chart_type = data.get('chart_type')
        return self.chart_function(chart_type)(data)

    @staticmethod
    def get_month_group():
        current_datetime = datetime.now()
        current_year = current_datetime.year
        current_month = current_datetime.month
        datetime_group = list()
        year_from = 2020
        month_from = 12
        for tmp_year in range(year_from, current_year + 1):
            for tmp_month in range(month_from, 13):
                if current_year == tmp_year and tmp_month > current_month:
                    return datetime_group
                date_from = datetime(tmp_year, tmp_month, 1, 0, 0)
                if tmp_month == 12:
                    tmp_year += 1
                    tmp_month = 1
                    month_from = 1
                else:
                    tmp_month += 1
                date_to = datetime(tmp_year, tmp_month, 1, 0, 0)
                datetime_group.append((date_from, date_to))

    @staticmethod
    def get_day_group(latest=180):
        current_date = datetime.now()
        current_date = datetime(current_date.year, current_date.month, current_date.day + 1, 0, 0)
        date_list = [current_date - timedelta(days=day_offset) for day_offset in range(latest, -1, -1)]
        return date_list

    def task_execute_trend_v2(self, data):
        res_data = list()
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        if start_time and end_time:
            for tmp_time in [start_time, end_time]:
                try:
                    datetime.strptime('{}'.format(tmp_time), '%Y-%m-%d')
                except ValueError:
                    return False, ErrorCode.TIME_FORMAT_ERROR.to_api
        else:
            latest = 30
            current_date = datetime.now()
            end_time = datetime(current_date.year, current_date.month, current_date.day + 1, 0, 0)
            start_time = end_time - timedelta(days=latest)
        delta_time = datetime.strptime(end_time, '%Y-%m-%d') - datetime.strptime(start_time, '%Y-%m-%d')
        thread_tasks = []
        for day in range(delta_time.days + 1):
            thread_tasks.append(
                ToneThread(self._get_task_execute_trend_data_v2, (start_time, day))
            )
            thread_tasks[-1].start()
        for thread_task in thread_tasks:
            thread_task.join()
            res_data.append(thread_task.get_result())

        return True, res_data

    @staticmethod
    def _get_task_execute_trend_data_v2(start_time, day):
        day_start_time = datetime.strptime(start_time, '%Y-%m-%d') + timedelta(days=day)
        day_end_time = day_start_time + timedelta(days=1)
        search_sql = DashboardService.get_chart_data_sql(day_end_time, day_start_time)
        data = {
            'job': 0,
            'sub_case': 0,
            'metric': 0,
            'test_conf': 0,
            'date': datetime.strftime(day_start_time, "%Y-%m-%d"),
        }
        with connection.cursor() as cursor:
            cursor.execute(search_sql)
            rows = cursor.fetchall()
            if rows:
                data = {
                    'job': rows[0][0],
                    'metric': rows[2][0],
                    'sub_case': rows[1][0],
                    'test_conf': rows[3][0],
                    'date': datetime.strftime(day_start_time, "%Y-%m-%d"),
                }
        return data

    @staticmethod
    def get_chart_data_sql(day_end_time, day_start_time):
        job_count_sql = """
            SELECT
              COUNT(*)
            FROM
              test_job
            WHERE
              (start_time > '{}')
              AND (start_time < '{}')
              AND is_deleted IS FALSE
        """.format(day_start_time, day_end_time)
        job_id_sql = """
            SELECT
              id
            FROM
              test_job
            WHERE
              (start_time > '{}')
              AND (start_time < '{}')
              AND is_deleted IS FALSE
        """.format(day_start_time, day_end_time)
        func_sql = """
            SELECT
              COUNT(*)
            FROM
              func_result
            WHERE
              test_job_id in (
                {}
              )
        """.format(job_id_sql)
        perf_sql = """
            SELECT
              COUNT(*)
            FROM
              perf_result
            WHERE
              test_job_id in (
                {}
              )
        """.format(job_id_sql)
        case_sql = """
            SELECT
              COUNT(*)
            FROM
              test_job_case
            WHERE
              job_id in (
                {}
              )
        """.format(job_id_sql)
        search_sql = """
            {}
            UNION ALL
            {}
            UNION ALL
            {}
            UNION ALL
            {}
        """.format(job_count_sql, func_sql, perf_sql, case_sql)
        return search_sql

    @staticmethod
    def _get_result_count(job_id_list, day):
        metric_count = PerfResult.objects.filter(test_job_id__in=job_id_list).count()
        sub_case_count = FuncResult.objects.filter(test_job_id__in=job_id_list).count()
        test_conf_count = TestJobCase.objects.filter(job_id__in=job_id_list).count()
        return {"metric_count": metric_count,
                "sub_case_count": sub_case_count,
                "test_conf_count": test_conf_count}

    @staticmethod
    def _get_task_execute_trend_data(start_time, day):
        day_start_time = datetime.strptime(start_time, '%Y-%m-%d') + timedelta(days=day)
        day_end_time = day_start_time + timedelta(days=1)
        job_queryset = TestJob.objects.filter(start_time__gt=day_start_time, start_time__lt=day_end_time)
        job_ids = job_queryset.values_list('id', flat=True)
        job_count = job_queryset.count()
        metric_count = PerfResult.objects.filter(test_job_id__in=job_ids).count()
        sub_case_count = FuncResult.objects.filter(test_job_id__in=job_ids).count()
        test_conf_count = TestJobCase.objects.filter(job_id__in=job_ids).count()
        return {
            'job': job_count,
            'metric': metric_count,
            'sub_case': sub_case_count,
            'test_conf': test_conf_count,
            'date': datetime.strftime(day_start_time, "%Y-%m-%d"),
        }

    @staticmethod
    def task_execute_trend(data):
        res_data = list()
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        tmp_time = '1970-1-1'
        if start_time and end_time:
            try:
                for tmp_time in [start_time, end_time]:
                    datetime.strptime('{}'.format(tmp_time), '%Y-%m-%d')
            except ValueError:
                return False, ErrorCode.TIME_FORMAT_ERROR.to_api
            end_time = str(datetime.strptime('{}'.format(end_time), '%Y-%m-%d') + timedelta(days=1))
        else:
            latest = 180
            current_date = datetime.now()
            end_time = datetime(current_date.year, current_date.month, current_date.day + 1, 0, 0)
            start_time = end_time - timedelta(days=latest)
        query_cmd = 'SELECT A.gmt_created, A.job_count, B.case_count, C.func_result_count, D.perf_result_count FROM ' \
                    '(SELECT DATE_FORMAT(gmt_created,"%Y-%m-%d") AS gmt_created, COUNT(id) AS job_count from test_job' \
                    ' where is_deleted=0 and gmt_created BETWEEN "{}" AND ' \
                    '"{}" GROUP BY DATE_FORMAT(gmt_created,"%Y-%m-%d")) AS A LEFT JOIN ' \
                    '(select DATE_FORMAT(gmt_created,"%Y-%m-%d") AS gmt_created, COUNT(id) AS case_count ' \
                    'from test_job_case where is_deleted=0 GROUP BY DATE_FORMAT(gmt_created,"%Y-%m-%d")) AS B ' \
                    'ON A.gmt_created=B.gmt_created LEFT JOIN (SELECT DATE_FORMAT(gmt_created,"%Y-%m-%d") ' \
                    'AS gmt_created, COUNT(id) AS func_result_count from func_result where is_deleted=0 GROUP BY ' \
                    'DATE_FORMAT(gmt_created,"%Y-%m-%d")) AS C ON ' \
                    'A.gmt_created=C.gmt_created LEFT JOIN (SELECT DATE_FORMAT(gmt_created,"%Y-%m-%d") ' \
                    'AS gmt_created, COUNT(id) AS perf_result_count from perf_result where is_deleted=0 GROUP BY ' \
                    'DATE_FORMAT(gmt_created,"%Y-%m-%d")) AS D ON A.gmt_created=D.gmt_created' \
                    ''.format(str(start_time).split(' ')[0], str(end_time).split(' ')[0])

        cursor = connection.cursor()
        cursor.execute(query_cmd)
        for tmp_data in cursor.fetchall():
            res_data.append({
                'sub_case': tmp_data[3] if tmp_data[3] else 0,
                'metric': tmp_data[4] if tmp_data[4] else 0,
                'test_conf': tmp_data[2] if tmp_data[2] else 0,
                'job': tmp_data[1],
                'date': str(tmp_data[0]),
            })
        return True, res_data

    @staticmethod
    def ws_create_job(_):
        cursor = connection.cursor()
        cursor.execute('SELECT A.ws_id, B.show_name, COUNT(*) FROM test_job AS A LEFT JOIN workspace AS B '
                       'ON A.ws_id=B.id WHERE B.is_deleted=0 and A.is_deleted=0 GROUP BY A.ws_id;')
        return True, sorted([{'ws_id': tmp_data[0],
                              'show_name': tmp_data[1],
                              'count': tmp_data[2]}
                             for tmp_data in cursor.fetchall()], key=lambda x: x['count'], reverse=True)

    def department_user(self, _):
        cursor = connection.cursor()
        cursor.execute('SELECT dep_desc, COUNT(*) FROM user GROUP BY dep_desc;')
        origin_merge_dep = [{'department': self.get_dep_desc(team_data[0]),
                             'count': team_data[1]}
                            for team_data in cursor.fetchall()]
        merge_data = dict()
        for tmp_dep in origin_merge_dep:
            if tmp_dep['department'] in merge_data:
                merge_data[tmp_dep['department']] += tmp_dep['count']
            else:
                merge_data[tmp_dep['department']] = tmp_dep['count']
        merge_dep = [{'department': dep_, 'count': count_} for dep_, count_ in merge_data.items()]
        return True, sorted(merge_dep, key=lambda x: x['count'], reverse=True)

    def personal_create_job(self, data):
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        create_type = data.get('create_type')
        tmp_time = '1970-1-1'
        try:
            for tmp_time in [start_time, end_time]:
                datetime.strptime('{} 00:00:00'.format(tmp_time), '%Y-%m-%d %H:%M:%S')
        except ValueError:
            return False, ErrorCode.TIME_FORMAT_ERROR.to_api
        end_time = str(datetime.strptime('{}'.format(end_time), '%Y-%m-%d') + timedelta(days=1))
        cursor = connection.cursor()
        if create_type == 'personal':
            cursor.execute('SELECT B.first_name, B.last_name, B.dep_desc, COUNT(*)FROM test_job AS A JOIN user AS B ON'
                           ' A.creator=B.id WHERE A.is_deleted=0 AND A.gmt_created BETWEEN "{}" AND "{}" GROUP BY '
                           'creator ORDER BY COUNT(*) DESC LIMIT 10;'.format(start_time, end_time))
            return True, sorted([{'name': tmp_data[0] if tmp_data[0] else tmp_data[1],
                                  'dep_desc': self.get_dep_desc(tmp_data[2]),
                                  'count': tmp_data[3]}
                                 for tmp_data in cursor.fetchall()], key=lambda x: x['count'], reverse=True)
        else:
            cursor.execute('SELECT B.id, B.show_name, COUNT(*)FROM test_job AS A join workspace AS B ON'
                           ' A.ws_id=B.id WHERE A.is_deleted=0 AND B.is_deleted=0 AND '
                           'A.gmt_created BETWEEN "{}" AND "{}" GROUP BY '
                           'ws_id ORDER BY COUNT(*) DESC LIMIT 10;'.format(start_time, end_time))
            return True, sorted([{'ws_id': tmp_data[0],
                                  'show_name': tmp_data[1],
                                  'count': tmp_data[2]}
                                 for tmp_data in cursor.fetchall()], key=lambda x: x['count'], reverse=True)

    @staticmethod
    def get_dep_desc(origin_dep_desc):
        dep_list = origin_dep_desc.split('-')
        if '阿里云' in dep_list:
            dep_list = dep_list[dep_list.index('阿里云'):]
        dep_desc = '-'.join(dep_list[:4])
        return dep_desc

    @staticmethod
    def get_ws_data(data):
        ws_id = data.get('ws_id')
        ws_data = dict()
        product_queryset = Product.objects.filter(ws_id=ws_id).order_by('gmt_created')
        total_product = product_queryset.count()
        total_project = Project.objects.filter(ws_id=ws_id).count()
        total_job = TestJob.objects.filter(ws_id=ws_id).count()
        total_conf = WorkspaceCaseRelation.objects.filter(ws_id=ws_id).count()
        group_server = TestServer.objects.filter(ws_id=ws_id)
        group_use_num = group_server.filter(state='Occupied').count()
        cloud_server = CloudServer.objects.filter(ws_id=ws_id)
        cloud_use_num = cloud_server.filter(state='Occupied').count()
        server_use_num = group_use_num + cloud_use_num
        server_total_num = group_server.count() + cloud_server.count()
        ws_data.update({
            'total_product': total_product,
            'total_project': total_project,
            'total_job': total_job,
            'total_conf': total_conf,
            'server_use_num': server_use_num,
            'server_total_num': server_total_num,
        })
        product_list = list()
        for tmp_product in product_queryset:
            tmp_product_data = dict()
            product_id = tmp_product.id
            product_name = tmp_product.name
            product_description = tmp_product.description
            product_is_default = tmp_product.is_default
            project_list = list()
            for tmp_project in Project.objects.filter(product_id=product_id):
                project_id = tmp_project.id
                project_name = tmp_project.name
                project_description = tmp_project.description
                product_version = tmp_project.product_version
                project_is_default = tmp_project.is_default
                job_queryset = TestJob.objects.filter(product_id=product_id, project_id=project_id)
                complete_num = job_queryset.filter(state='success').count()
                fail_num = job_queryset.filter(state='fail').count()
                project_list.append({
                    'project_id': project_id,
                    'project_name': project_name,
                    'product_version': product_version,
                    'project_description': project_description,
                    'project_is_default': project_is_default,
                    'complete_num': complete_num,
                    'fail_num': fail_num,
                })
            tmp_product_data.update({
                'product_id': product_id,
                'product_name': product_name,
                'product_description': product_description,
                'product_create': str(tmp_product.gmt_created).split('.')[0],
                'product_is_default': product_is_default,
                'project_list': project_list,
            })
            product_list.append(tmp_product_data)
        ws_data.update({'product_list': product_list})
        return ws_data

    @staticmethod
    def get_project_job(job_queryset, data):
        project_id = data.get('project_id')
        project_obj = Project.objects.filter(id=project_id).first()
        if project_obj is None:
            return False, ErrorCode.PROJECT_NOT_EXISTS.to_api
        job_queryset = job_queryset.filter(project_id=project_id)
        return True, job_queryset

    @staticmethod
    def get_project_data(data):
        project_id = data.get('project_id')
        project_obj = Project.objects.filter(id=project_id).first()
        if project_obj is None:
            return dict()
        project_name = project_obj.name
        project_description = project_obj.description
        job_queryset = TestJob.objects.filter(project_id=project_id)
        complete_num = job_queryset.filter(state='success').count()
        fail_num = job_queryset.filter(state='fail').count()
        running_num = job_queryset.filter(state='running').count()
        pending_num = job_queryset.filter(state__in=['pending', 'pending_q']).count()
        return {
            'project_name': project_name,
            'project_description': project_description,
            'complete_num': complete_num,
            'fail_num': fail_num,
            'running_num': running_num,
            'pending_num': pending_num,

        }

    @staticmethod
    def get_date_list(start_time, end_time):
        start_date = datetime.strptime(start_time, '%Y-%m-%d')
        end_date = datetime.strptime(end_time, '%Y-%m-%d')
        date_list = [start_date]
        tmp_date = start_date
        while end_date >= tmp_date:
            tmp_date = tmp_date + timedelta(days=1)
            date_list.append(tmp_date)
        return date_list

    def get_ws_chart_data(self, data):
        project_id = data.get('project_id')
        ws_id = data.get('ws_id')
        tmp_time = '1970-1-1'
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        chart_type = data.get('chart_type', 'job')
        ws_chart_data = list()
        if start_time and end_time:
            try:
                for tmp_time in [start_time, end_time]:
                    datetime.strptime('{} 00:00:00'.format(tmp_time), '%Y-%m-%d %H:%M:%S')
            except ValueError:
                return False, ErrorCode.TIME_FORMAT_ERROR.to_api
            date_list = self.get_date_list(start_time, end_time)
        else:
            # 最近30天数据
            latest = 31
            current_date = datetime.now()
            current_date = datetime(current_date.year, current_date.month, current_date.day, 0, 0) + timedelta(days=1)
            date_list = [current_date - timedelta(days=day_offset) for day_offset in range(latest, -1, -1)]

        date_job = {datetime.strftime(date, '%Y-%m-%d'): [[], 0, 0] for date in date_list[:-1]}
        start_time = date_list[0]
        end_time = date_list[-1]
        with connection.cursor() as cursor:
            query_project_job = """
            SELECT
            DATE_FORMAT(gmt_created, "%Y-%m-%d"), id, state
            FROM test_job
            WHERE is_deleted=0 AND project_id={} AND ws_id="{}" and gmt_created BETWEEN "{}" AND "{}"
            """.format(project_id, ws_id, start_time, end_time)
            cursor.execute(query_project_job)
            rows = cursor.fetchall()
            for row_data in rows:
                tmp_date = row_data[0]
                tmp_job_id = row_data[1]
                tmp_state = row_data[2]
                if tmp_date in date_job:
                    date_job[tmp_date][0].append(tmp_job_id)
                    if tmp_state == 'success':
                        date_job[tmp_date][1] += 1
                    if tmp_state == 'fail':
                        date_job[tmp_date][2] += 1
        for temp_date, tmp_data in date_job.items():
            job_id_list = tmp_data[0]
            complete_num = tmp_data[1]
            fail_num = tmp_data[2]
            if chart_type == 'job':
                ws_chart_data.append({
                    'date': temp_date,
                    'CompleteJob': complete_num,
                    'FailJob': fail_num,
                })
            else:
                suite_fail = TestJobSuite.objects.filter(job_id__in=job_id_list, state='fail').count()
                case_fail = TestJobCase.objects.filter(job_id__in=job_id_list, state='fail').count()
                func_res_sub_case_fail = FuncResult.objects.filter(test_job_id__in=job_id_list, sub_case_result=2)
                func_res_sub_case_fail_count = func_res_sub_case_fail.count()
                fail_sub_case_suite = len(set(func_res_sub_case_fail.values_list('test_suite_id', 'test_job_id')))
                perf_decline = PerfResult.objects.filter(test_job_id__in=job_id_list, track_result='decline').count()
                ws_chart_data.append({
                    'date': temp_date,
                    'FailSuite': suite_fail + fail_sub_case_suite,
                    'FailCase': case_fail + func_res_sub_case_fail_count + perf_decline,
                })
        return True, ws_chart_data

    @staticmethod
    def get_ws_chart_data_v2(data):
        project_id = data.get('project_id')
        ws_id = data.get('ws_id')
        start_time = data.get('start_time')
        end_time = data.get('end_time')
        chart_type = data.get('chart_type', 'job')
        ws_chart_data = list()
        if not start_time:
            start_time = (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
        if not end_time:
            end_time = datetime.now().strftime('%Y-%m-%d')
        if start_time > end_time:
            return False, ErrorCode.TIME_BETWEEN_ERROR.to_api
        delta_time = datetime.strptime(end_time, '%Y-%m-%d') - datetime.strptime(start_time, '%Y-%m-%d')
        project_jobs = TestJob.objects.filter(ws_id=ws_id, project_id=project_id)
        for d in range(delta_time.days + 1):
            day_start_time = datetime.strptime(start_time, '%Y-%m-%d') + timedelta(days=d)
            day_end_time = day_start_time + timedelta(days=1)
            day_jobs = project_jobs.filter(gmt_created__gte=day_start_time, gmt_created__lt=day_end_time)
            day_jobs_ids = day_jobs.values_list('id', flat=True)
            if chart_type == 'job':
                ws_chart_data.append({
                    'date': day_start_time.strftime('%Y-%m-%d'),
                    'CompleteJob': day_jobs.filter(state='success').count(),
                    'FailJob': day_jobs.filter(state='fail').count(),
                })
            else:
                day_test_suites = TestJobSuite.objects.filter(job_id__in=day_jobs_ids)
                day_test_cases = TestJobCase.objects.filter(job_id__in=day_jobs_ids)
                func_res_sub_case_fail = FuncResult.objects.filter(test_job_id__in=day_jobs_ids, sub_case_result=2)
                func_res_sub_case_fail_count = func_res_sub_case_fail.count()
                fail_sub_case_suite = len(set(func_res_sub_case_fail.values_list('test_suite_id', 'test_job_id')))
                perf_decline = PerfResult.objects.filter(test_job_id__in=day_jobs_ids, track_result='decline').count()
                file_suite_count = day_test_suites.filter(state='fail').count() + fail_sub_case_suite
                day_fail_cases_count = day_test_cases.filter(state='fail').count()
                file_case_count = day_fail_cases_count + func_res_sub_case_fail_count + perf_decline
                ws_chart_data.append({
                    'date': day_start_time.strftime('%Y-%m-%d'),
                    'FailSuite': file_suite_count,
                    'FailCase': file_case_count
                })
        return True, ws_chart_data


def calculate_benchmark_data():
    benchmark_num = TestSuite.objects.all().count()
    test_conf_num = TestCase.objects.all().count()
    test_case_num = len(set(list(FuncResult.objects.all().values_list('sub_case_name', flat=True))))
    test_metric_num = TestMetric.objects.all().count()
    benchmark_data = {
        'benchmark_num': benchmark_num,
        'test_conf_num': test_conf_num,
        'test_case_num': test_case_num,
        'test_metric_num': test_metric_num
    }
    redis_cache.set('dashboard_benchmark', benchmark_data)
