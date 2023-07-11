import django
from django.db import connection
from django.db.models import Q, F
from django_q.tasks import async_task

from tone.core.common.constant import PROD_SITE_URL
from tone.core.common.services import CommonService
from tone.models import HelpDoc, datetime, SiteConfig, SitePushConfig, TestJob, Comment, BaseConfig
from tone.services.portal.sync_portal_services import SyncPortalService
from tone.services.portal.sync_portal_task_servers import sync_job_data
from tone.core.common.expection_handler.error_code import ErrorCode


class HelpDocService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        if data.get('id'):
            q &= Q(id=data.get('id'))
        else:
            if data.get('doc_type'):
                q &= Q(doc_type=data.get('doc_type'))
        if data.get('title'):
            q &= Q(title__icontains=data.get('title'))
        return queryset.filter(q)

    @staticmethod
    def create(data, operator):
        creator = operator.id
        title = data.get('title')
        doc_type = data.get('doc_type', 'help_doc')
        if not title.strip():
            return False, ErrorCode.DOC_TITLE_NEED.to_api
        doc_obj = HelpDoc.objects.filter(title=title).first()
        if doc_obj:
            return False, ErrorCode.DOC_EXISTS.to_api
        form_fields = ['title', 'content', 'doc_type', 'active', 'tags']
        create_data = {'creator': creator}
        for field in form_fields:
            if data.get(field) is not None:
                create_data.update({field: data.get(field)})
        if 'doc_type' not in create_data:
            create_data['doc_type'] = 'help_doc'
        doc_obj = HelpDoc.objects.create(**create_data)
        # 回填顺序id
        if data.get('is_top'):
            doc_obj.order_id = 1
            HelpDoc.objects.filter(doc_type=doc_type, order_id__gte=1).update(order_id=F("order_id") + 1)
        else:
            doc_obj.order_id = doc_obj.id
        doc_obj.save()
        return True, doc_obj

    @staticmethod
    def handle_top(data, doc_obj):
        is_top = data.get('is_top')
        order_id = data.get('order_id')
        origin_order_id = doc_obj.order_id
        if is_top is not None:
            if is_top:
                order_id = 1
            else:
                if origin_order_id == 1:
                    order_id = 2
        return order_id

    def update(self, data, operator):
        update_user = operator.id
        doc_id = data.get('id')
        title = data.get('title')
        if title is not None and not title.strip():
            return False, ErrorCode.DOC_TITLE_NEED.to_api
        doc_obj = HelpDoc.objects.filter(title=title).first()
        if doc_obj is not None and str(doc_obj.id) != str(doc_id):
            return False, ErrorCode.DOC_EXISTS.to_api
        allow_modify_fields = ['title', 'content', 'order_id', 'update_user', 'active', 'tags']
        doc_obj = HelpDoc.objects.filter(id=doc_id)
        if doc_obj.first() is None:
            return False, ErrorCode.DOC_NOT_EXISTS.to_api
        origin_order_id = doc_obj.first().order_id
        doc_type = doc_obj.first().doc_type
        update_data = dict()
        order_id = self.handle_top(data, doc_obj.first())
        if order_id is not None:
            data.update({'order_id': order_id})
        data.update({'update_user': update_user})
        for field in allow_modify_fields:
            if data.get(field) is not None:
                update_data.update({field: data.get(field)})
        update_data.update({'gmt_modified': datetime.now()})
        # 更新排序顺序后
        if order_id is not None:
            if origin_order_id != order_id:
                # 前移, 大于等于新位置的 +1
                if origin_order_id > order_id:
                    HelpDoc.objects.filter(doc_type=doc_type, order_id__gte=order_id).update(order_id=F("order_id") + 1)
                # 后移，大于旧位置小于新位置的 -1，
                else:
                    HelpDoc.objects.filter(doc_type=doc_type, order_id__gt=origin_order_id,
                                           order_id__lte=order_id).update(order_id=F("order_id") - 1)
        doc_obj.update(**update_data)
        return True, doc_obj.first()

    @staticmethod
    def delete(data):
        origin_help_doc_queryset = HelpDoc.objects.filter(id=data.get("id"))
        origin_help_doc = origin_help_doc_queryset.first()
        if origin_help_doc is not None:
            doc_type = origin_help_doc.doc_type
            origin_order_id = origin_help_doc.order_id
            origin_help_doc_queryset.delete()
            # 删除文档后, 大于order_id的排序id全部 -1
            HelpDoc.objects.filter(doc_type=doc_type, order_id__gt=origin_order_id).update(order_id=F("order_id") - 1)


class TestFarmService(CommonService):
    @staticmethod
    def filter():
        site_url = PROD_SITE_URL
        site_config = SiteConfig.objects.all().first()
        if site_config is None:
            site_config = SiteConfig.objects.create(site_url=site_url, is_major=False, site_token="",
                                                    business_system_name="")
        return site_config

    @staticmethod
    def update(data):
        site_id = data.get('site_id')
        tmp_site = SiteConfig.objects.filter(id=site_id)

        if tmp_site.first() is None:
            return False, ErrorCode.TO_TESTFARM_SITE_NEED.to_api
        allow_modify_fields = ['is_major', 'site_url', 'site_token', 'business_system_name']
        update_data = dict()
        for field in allow_modify_fields:
            if data.get(field) is not None:
                update_data.update({field: data.get(field)})
        tmp_site.update(**update_data)
        # [{ws_id: , project_id: , job_name_rule: }, ]
        if data.get('push_config_data') is not None:
            # 先删除，后重新创建
            SitePushConfig.objects.filter(site_id=site_id).delete()
            push_config_data = data.get('push_config_data')
            create_push_config_list = list()
            for push_config in push_config_data:
                create_push_config_list.append(
                    SitePushConfig(
                        site_id=site_id,
                        ws_id=push_config.get('ws_id'),
                        project_id=push_config.get('project_id'),
                        job_name_rule=push_config.get('job_name_rule'),
                        sync_start_time=push_config.get('sync_start_time'),
                    )
                )
            SitePushConfig.objects.bulk_create(create_push_config_list)
        return True, tmp_site.first()

    @staticmethod
    def create_push_config(data):
        site_id = data.get('site_id')
        tmp_site = SiteConfig.objects.filter(id=site_id).first()
        if tmp_site is None:
            return False, 'site not exist'
        create_data = {'site_id': site_id}
        allow_fields = ['ws_id', 'project_id', 'job_name_rule', 'sync_start_time']
        for field in allow_fields:
            if data.get(field) is not None:
                create_data.update({field: data.get(field)})
        push_config = SitePushConfig.objects.create(**create_data)
        return True, push_config

    @staticmethod
    def update_push_config(data):
        push_config_id = data.get('push_config_id')
        tmp_push_config = SitePushConfig.objects.filter(id=push_config_id)
        if tmp_push_config.first() is None:
            return False, ErrorCode.TO_TESTFARM_CONFIG_ERROR.to_api
        create_data = dict()
        allow_fields = ['ws_id', 'project_id', 'job_name_rule', 'sync_start_time']
        for field in allow_fields:
            if data.get(field) is not None:
                create_data.update({field: data.get(field)})
        tmp_push_config.update(**create_data)
        return True, tmp_push_config.first()

    @staticmethod
    def delete_push_config(data):
        push_config_id = data.get('push_config_id')
        tmp_push_config = SitePushConfig.objects.filter(id=push_config_id)
        if tmp_push_config.first() is None:
            return 201, ErrorCode.TO_TESTFARM_CONFIG_ERROR.to_api
        tmp_push_config.delete()
        return 200, 'success'

    @staticmethod
    def manual_sync_job():
        # 查询站点信息, 获取Job列表
        site_config = SiteConfig.objects.all().first()
        site_push_config_list = SitePushConfig.objects.filter(site_id=site_config.id)
        job_id_list = list()
        try:
            for site_push_obj in site_push_config_list:
                tmp_ws_id = site_push_obj.ws_id
                tmp_project_id = site_push_obj.project_id
                if not tmp_ws_id or not tmp_project_id:
                    return False, ErrorCode.TO_TESTFARM_PARAM_ERROR.to_api
                tmp_job_name_rule = site_push_obj.job_name_rule
                job_id_list.extend(list(TestJob.objects.filter(ws_id=tmp_ws_id, project_id=tmp_project_id,
                                                               name__iregex=tmp_job_name_rule, start_time__isnull=False,
                                                               ).values_list('id', flat=True))[-1:])

        except (django.db.utils.InternalError, Exception):
            return False, ErrorCode.TO_TESTFARM_REG_ERROR.to_api
        if not job_id_list:
            return False, ErrorCode.TO_TESTFARM_JOBS_EMPTY.to_api
        msg = ''
        for job_id in sorted(set(job_id_list), reverse=True)[:3]:
            code, msg = SyncPortalService().sync_job(job_id)
            if code != 201:
                return True, msg
        return False, ErrorCode.TO_TESTFARM_CONFIG_ERROR.to_params_api(msg)

    @staticmethod
    def filter_job_list(data):
        page_size = int(data.get('page_size', 20))
        page_num = int(data.get('page_num', 1))
        push_config_id = data.get('push_config_id')
        if push_config_id:
            config_obj = SitePushConfig.objects.filter(id=push_config_id).first()
            if config_obj is None:
                return False, ErrorCode.TO_TESTFARM_ID_ERROR.to_api
            ws_id = config_obj.ws_id
            project_id = config_obj.project_id
            job_name_rule = config_obj.job_name_rule
        else:
            ws_id = data.get('ws_id')
            project_id = data.get('project_id')
            job_name_rule = data.get('job_name_rule')
        q = Q()
        filter_job = data.get('filter_job')
        try:
            if filter_job:
                if filter_job.isdigit():
                    job_queryset = TestJob.objects.filter(id=filter_job)
                    return True, job_queryset, 0
                else:
                    q &= Q(ws_id=ws_id,
                           project_id=project_id,
                           start_time__isnull=False,
                           name__iregex=job_name_rule)
                    job_queryset = TestJob.objects.filter(q)
                    if not job_queryset:
                        return False, ErrorCode.TO_TESTFARM_JOBS_EMPTY.to_api
                    job_queryset = job_queryset.filter(name__icontains=filter_job)
                return True, job_queryset.order_by('sync_time', 'id'), 0
            else:
                cursor = connection.cursor()
                query_cmd = '''SELECT id, name, sync_time FROM test_job 
                WHERE ws_id='{}' AND project_id='{}' AND 
                name REGEXP '{}' AND `start_time` IS NOT NULL  and is_deleted=0 
                ORDER BY if (`sync_time` IS NULL, 0, 1) ASC, id ASC LIMIT {}, {}'''.format(
                    ws_id, project_id, job_name_rule, (page_num - 1) * page_size, page_size)
                cursor.execute(query_cmd)
                job_data = cursor.fetchall()
                return True, [{'id': tmp_data[0],
                               'name': tmp_data[1],
                               'sync_time': tmp_data[2]} for tmp_data in job_data], page_num
        except (django.db.utils.InternalError, Exception):
            return False, ErrorCode.TO_TESTFARM_REG_ERROR.to_api, 0

    @staticmethod
    def push_spe_job(data):
        job_id = data.get('job_id')
        is_sync = data.get('is_sync', False)
        test_job = TestJob.objects.filter(id=job_id).first()
        if not test_job:
            return 201, ErrorCode.TEST_JOB_NONEXISTENT.to_api
        if is_sync:
            sync_job_code, sync_job_msg = SyncPortalService().sync_job(job_id)
            state_map = {'pending': 0, 'running': 1, 'success': 2, 'fail': 3, 'stop': 4, 'skip': 5}
            job_state = TestJob.objects.get(id=job_id).state
            state = state_map.get(job_state)
            sync_status_code, sync_status_msg = SyncPortalService().sync_job_status(job_id, state)
            res_msg = f'手动推送job状态结束:{job_state}'
            if job_state in ['success', 'fail', 'stop', 'skip']:
                if test_job.test_type == 'functional':
                    sync_res_code, sync_res_msg = SyncPortalService().sync_func_result(job_id)
                else:
                    sync_res_code, sync_res_msg = SyncPortalService().sync_perf_result(job_id)
                res_msg = f'手动推送执行结束: \n sync_job: {sync_job_code} {sync_job_msg}' \
                          f'\n sync job status: {sync_status_code} {sync_status_msg}' \
                          f'\n sync_result: {sync_res_code} {sync_res_msg}'
        else:
            async_task(sync_job_data, job_id)
            res_msg = '手动推送任务开始执行成功'
        return 200, res_msg


class CommentService(CommonService):
    @staticmethod
    def filter_comment(queryset, data):
        q = Q()
        q &= Q(object_type=data.get('object_type'), object_id=data.get('object_id'))
        if data.get('creator'):
            q &= Q(creator=data.get('creator'))
        return queryset.filter(q)

    @staticmethod
    def create_comment(data, operator):
        object_type = data.get('object_type')
        object_id = data.get('object_id')
        if not object_type or not object_id:
            return False, ErrorCode.COMMENT_PARAMS_MISSING.to_api
        create_data = {'creator': operator,
                       'object_type': object_type,
                       'object_id': object_id,
                       'content': data.get('content')}
        comment = Comment.objects.create(**create_data)
        return True, comment

    @staticmethod
    def update_comment(data, operator):
        comment = Comment.objects.filter(id=data.get('id'))
        if comment.first() is not None and operator == comment.first().creator:
            comment.update(content=data.get('content'))
            return True, comment
        else:
            return False, ErrorCode.COMMENT_UPDATE_ERROR.to_api

    @staticmethod
    def delete_comment(data, operator):
        comment = Comment.objects.filter(id=data.get('id'))
        if comment.first() is not None and operator == comment.first().creator:
            comment.delete()
            return True, '删除成功'
        else:
            return False, ErrorCode.COMMENT_UPDATE_ERROR.to_api


class WorkspaceConfigService(CommonService):
    @staticmethod
    def get_ws_config(data):
        ws_config = dict()
        ws_id = data.get('ws_id')
        if ws_id:
            auto_recover = BaseConfig.objects.filter(
                config_type='ws', ws_id=ws_id, config_key='AUTO_RECOVER_SERVER').first()
            if auto_recover is not None:
                recover_duration = BaseConfig.objects.filter(
                    config_type='ws', ws_id=ws_id, config_key='RECOVER_SERVER_PROTECT_DURATION').first()
            else:
                auto_recover = BaseConfig.objects.create(
                    config_type='ws', ws_id=ws_id, config_key='AUTO_RECOVER_SERVER', config_value='1')
                recover_duration = BaseConfig.objects.create(
                    config_type='ws', ws_id=ws_id, config_key='RECOVER_SERVER_PROTECT_DURATION', config_value='5')
            func_view_config = BaseConfig.objects.filter(config_type='ws', ws_id=ws_id,
                                                         config_key='FUNC_RESULT_VIEW_TYPE').first()
            if not func_view_config:
                func_view_config = BaseConfig.objects.create(config_type='ws',
                                                             ws_id=ws_id,
                                                             config_key='FUNC_RESULT_VIEW_TYPE',
                                                             config_value='1')
            report_export = BaseConfig.objects.filter(config_type='ws', ws_id=ws_id, config_key='REPORT_EXPORT').first()
            if not report_export:
                report_export = BaseConfig.objects.create(config_type='ws', ws_id=ws_id, config_key='REPORT_EXPORT',
                                                          config_value='0')
            ws_config.update({
                'auto_recover_server': auto_recover.config_value,
                'recover_server_protect_duration': recover_duration.config_value,
                'func_result_view_type': func_view_config.config_value,
                'report_export': report_export.config_value
            })
        return ws_config

    @staticmethod
    def update_ws_config(data):
        ws_id = data.get('ws_id')
        auto_recover_server = data.get('auto_recover_server')
        recover_server_protect_duration = data.get('recover_server_protect_duration', '')
        func_result_view_type = data.get('func_result_view_type', '')
        report_export = data.get('report_export', '')
        auto_recover = BaseConfig.objects.filter(
            config_type='ws', ws_id=ws_id, config_key='AUTO_RECOVER_SERVER').first()
        if auto_recover is not None and auto_recover.config_value != auto_recover_server:
            if auto_recover_server not in ['0', '1']:
                return 201, ErrorCode.BASE_CONFIG_PARAMS_ERROR.to_api
            auto_recover.config_value = auto_recover_server
            auto_recover.save()
        if recover_server_protect_duration:
            if not recover_server_protect_duration.isdigit():
                return 201, ErrorCode.BASE_CONFIG_PARAMS_ERROR_1.to_api
            BaseConfig.objects.filter(
                config_type='ws', ws_id=ws_id, config_key='RECOVER_SERVER_PROTECT_DURATION').update(
                config_value=recover_server_protect_duration)
        if func_result_view_type:
            if func_result_view_type not in ['1', '2']:
                return 201, ErrorCode.BASE_CONFIG_PARAMS_ERROR_2.to_api
            func_view_config = BaseConfig.objects.filter(config_type='ws', ws_id=ws_id,
                                                         config_key='FUNC_RESULT_VIEW_TYPE').first()
            if func_view_config:
                BaseConfig.objects.filter(
                    config_type='ws', ws_id=ws_id, config_key='FUNC_RESULT_VIEW_TYPE').update(
                    config_value=func_result_view_type)
        if report_export:
            if report_export not in ['0', '1']:
                return 201, ErrorCode.BASE_CONFIG_PARAMS_ERROR_3.to_api
            report_export_config = BaseConfig.objects.filter(config_type='ws', ws_id=ws_id,
                                                             config_key='REPORT_EXPORT').first()
            if report_export_config and report_export_config.config_value != report_export:
                report_export_config.config_value = report_export
                report_export_config.save()
        return 200, 'success'
