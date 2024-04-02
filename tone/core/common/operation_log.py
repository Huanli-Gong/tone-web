# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import uuid
from django.conf import settings
from tone.models.sys.log_model import OperationLogs
from tone.models.sys.config_models import JobTag, JobTagRelation, TemplateTagRelation
from django.db import transaction
from tone.core.common.expection_handler.error_code import ErrorCode


class LogRecordOperation(object):

    def __init__(self, creator, operation_type, operation_object, table=None):
        self.creator = creator
        self.table = table
        self.operation_type = self.check_operation_type(operation_type)
        self.operation_object = self.check_operation_object(operation_object)

    @staticmethod
    def check_operation_type(operation_type):
        if operation_type not in settings.OPERATION_TYPE_LIST:
            raise ValueError('操作类型不符合')
        else:
            return operation_type

    @staticmethod
    def check_operation_object(operation_object):
        if operation_object not in settings.OPERATION_OBJECT_LIST:
            raise ValueError('操作模块不符合')
        else:
            return operation_object

    def update(self, pid, operation_sn, values_li):
        old_values = dict()
        new_values = dict()
        for value in values_li:
            if value[1] != value[2]:
                old_values[value[0]] = value[1]
                new_values[value[0]] = value[2]
        # 数据发生修改时保存日志记录
        if old_values != new_values:
            OperationLogs.objects.create(
                operation_type=self.operation_type,
                operation_object=self.operation_object,
                creator=self.creator,
                db_table=self.table,
                db_pid=pid,
                operation_sn=operation_sn,
                old_values=old_values,
                new_values=new_values,
            )

    def create_delete(self, pid, operation_sn):
        OperationLogs.objects.create(
            operation_type=self.operation_type,
            operation_object=self.operation_object,
            creator=self.creator,
            db_table=self.table,
            db_pid=pid,
            operation_sn=operation_sn,
        )


def operation(operation_li):
    if not isinstance(operation_li, list):
        raise ValueError('操作对象必须是列表')
    operation_sn = str(uuid.uuid4())
    with transaction.atomic():
        for op in operation_li:
            if not isinstance(op, dict):
                raise ValueError('操作对象中元素必须是字典')
            creator = op.get('creator')
            table = op.get('table')
            operation_type = op.get('operation_type')
            operation_object = op.get('operation_object')
            pid = op.get('pid')
            assert pid, ValueError('pid is needed')
            assert operation_type, ValueError('operation_type is needed')
            assert operation_object, ValueError('operation_object is needed')
            obj = LogRecordOperation(creator=creator, table=table, operation_type=operation_type,
                                     operation_object=operation_object)
            if operation_type == 'update':
                values_li = op.get('values_li')
                if not isinstance(values_li, list):
                    raise ValueError('values_li must be list')
                obj.update(pid, operation_sn, values_li)
            else:
                obj.create_delete(pid, operation_sn)


def operation_one(operator, operation_object, pid, operation_type, db_table, value_li=list()):
    operation_li = list()
    log_data = {
        'creator': operator,
        'operation_object': operation_object,
        'pid': pid,
        'operation_type': operation_type,
        'table': db_table,
        'values_li': value_li
    }
    operation_li.append(log_data)
    operation(operation_li)


def job_keep_logs(job_id, ws_id, tag_id_list, operator):
    keep_tags = JobTag.objects.filter(id__in=tag_id_list, ws_id=ws_id, name__istartswith='keep_',
                                      source_tag='system_tag')
    if not keep_tags:
        return
    assert len(keep_tags) == 1, ValueError(ErrorCode.KEEP_TAG_ERROR)
    keep_tag_id = JobTag.objects.filter(ws_id=ws_id, name__istartswith='keep_', source_tag='system_tag').\
        values_list('id', flat=True)
    if not keep_tag_id:
        return
    new_keep_tag = list(set(keep_tag_id) & set(tag_id_list))
    if not new_keep_tag:
        return
    if keep_tag_id:
        old_tag_id_list = JobTagRelation.objects.filter(job_id=job_id).values_list('tag_id', flat=True)
        old_keep_tag = list(set(keep_tag_id) & set(old_tag_id_list))
        if old_keep_tag and old_keep_tag[0] == new_keep_tag[0]:
            return
        job_tag = JobTag.objects.filter(id=new_keep_tag[0]).first()
        if not old_keep_tag:
            operation_one(operator.id, job_tag.name, job_id, 'create', 'test_job')
        else:
            value_list = list()
            old_job_tag = JobTag.objects.filter(id=old_keep_tag[0]).first()
            value_list.append(('job_tag', old_job_tag.name, job_tag.name))
            operation_one(operator.id, job_tag.name, job_id, 'update', 'test_job', value_list)


def template_keep_logs(template_id, ws_id, tag_id_list, operator):
    keep_tags = JobTag.objects.filter(id__in=tag_id_list, ws_id=ws_id, name__istartswith='keep_',
                                      source_tag='system_tag')
    if not keep_tags:
        return
    assert len(keep_tags) == 1, ValueError(ErrorCode.KEEP_TAG_ERROR)
    keep_tag_id = JobTag.objects.filter(ws_id=ws_id, name__istartswith='keep_', source_tag='system_tag'). \
        values_list('id', flat=True)
    if not keep_tag_id:
        return
    new_keep_tag = list(set(keep_tag_id) & set(tag_id_list))
    if not new_keep_tag:
        return
    if keep_tag_id:
        old_tag_id_list = TemplateTagRelation.objects.filter(template_id=template_id).values_list('tag_id', flat=True)
        old_keep_tag = list(set(keep_tag_id) & set(old_tag_id_list))
        if old_keep_tag and old_keep_tag[0] == new_keep_tag[0]:
            return
        job_tag = JobTag.objects.filter(id=new_keep_tag[0]).first()
        if not old_keep_tag:
            operation_one(operator.id, job_tag.name, template_id, 'create', 'test_template')
        else:
            value_list = list()
            old_job_tag = JobTag.objects.filter(id=old_keep_tag[0]).first()
            value_list.append(('job_tag', old_job_tag.name, job_tag.name))
            operation_one(operator.id, job_tag.name, template_id, 'update', 'test_template', value_list)

