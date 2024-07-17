# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author:
"""

from datetime import datetime
from tone.core.handle.report_handle import get_template_conf, get_template_func_item, get_template_perf_item, \
    get_perf_data, get_func_data, get_report_template, get_old_report
from rest_framework import serializers
from tone.core.common.serializers import CommonSerializer
from tone.models import User, Project, CompareForm, ReportDetail, BaseConfig, ReportItem
from tone.models.report.test_report import ReportTemplate, Report


class ReportTemplateSerializer(CommonSerializer):
    creator_name = serializers.SerializerMethodField()
    update_user_name = serializers.SerializerMethodField()

    class Meta:
        model = ReportTemplate
        fields = ['id', 'name', 'creator', 'creator_name', 'update_user', 'update_user_name', 'description',
                  'gmt_created', 'gmt_modified', 'is_default']

    @staticmethod
    def get_creator_name(obj):
        creator_name = '系统预设'
        creator = User.objects.filter(id=obj.creator).first()
        if creator:
            creator_name = creator.first_name if creator.first_name else creator.last_name
        return creator_name

    @staticmethod
    def get_update_user_name(obj):
        update_user_name = None
        update_user = User.objects.filter(id=obj.update_user).first()
        if update_user:
            update_user_name = update_user.first_name if update_user.first_name else update_user.last_name
        return update_user_name


class ReportTemplateDetailSerializer(CommonSerializer):
    func_item = serializers.SerializerMethodField()
    perf_item = serializers.SerializerMethodField()
    perf_conf = serializers.SerializerMethodField()
    func_conf = serializers.SerializerMethodField()

    class Meta:
        model = ReportTemplate
        exclude = ['is_deleted']

    @staticmethod
    def get_func_conf(obj):
        return get_template_conf(obj.id, test_type='functional')

    @staticmethod
    def get_perf_conf(obj):
        return get_template_conf(obj.id, test_type='performance')

    @staticmethod
    def get_func_item(obj):
        return get_template_func_item(obj.is_default, obj.id)

    @staticmethod
    def get_perf_item(obj):
        return get_template_perf_item(obj.is_default, obj.id)


class ReportSerializer(CommonSerializer):
    creator = serializers.SerializerMethodField()
    project = serializers.SerializerMethodField()
    creator_id = serializers.SerializerMethodField()

    class Meta:
        model = Report
        fields = ['id', 'name', 'description', 'creator', 'product_version', 'project', 'gmt_modified', 'creator_id']

    @staticmethod
    def get_creator_id(obj):
        return obj.creator

    @staticmethod
    def get_creator(obj):
        user = User.objects.get(id=obj.creator)
        creator = user.first_name if user.first_name else user.last_name
        return creator

    @staticmethod
    def get_project(obj):
        if Project.objects.filter(id=obj.project_id).exists():
            project = Project.objects.get_value(id=obj.project_id)
            return project.name
        return ''


class ReportDetailSerializer(CommonSerializer):
    test_item = serializers.SerializerMethodField()
    creator_name = serializers.SerializerMethodField()
    group_count = serializers.SerializerMethodField()
    old_report = serializers.SerializerMethodField()
    test_env = serializers.SerializerMethodField()
    can_export = serializers.SerializerMethodField()
    perf_desc = serializers.SerializerMethodField()
    func_desc = serializers.SerializerMethodField()
    template_detail = serializers.SerializerMethodField()

    class Meta:
        model = Report
        fields = ['id', 'name', 'test_background', 'test_conclusion', 'test_method', 'test_env', 'report_source',
                  'description', 'test_item', 'tmpl_id', 'gmt_created', 'creator', 'creator_name',
                  'env_description', 'group_count', 'ws_id', 'old_report', 'can_export', 'perf_desc',
                  'func_desc', 'template_detail']

    @staticmethod
    def get_creator_name(obj):
        creator_name = None
        creator = User.objects.filter(id=obj.creator).first()
        if creator:
            creator_name = creator.first_name if creator.first_name else creator.last_name
        return creator_name

    @staticmethod
    def get_old_report(obj):
        return 1 if obj.gmt_created < datetime.strptime('2022-09-13', '%Y-%m-%d') else 0

    @staticmethod
    def get_test_item(obj):
        report_detail = ReportDetail.objects.filter(report_id=obj.id).first()
        if report_detail:
            perf_data = report_detail.perf_data
            func_data = report_detail.func_data
        else:
            base_index = obj.test_env.get('base_index', 0) if obj.test_env else 0
            is_old_report = get_old_report(obj)
            perf_data = get_perf_data(obj.id, base_index, is_old_report, obj.is_automatic)
            func_data = get_func_data(obj.id, base_index, is_old_report, obj.is_automatic)
            template_detail = get_report_template(obj.id)
            ReportDetail.objects.create(report_id=obj.id, perf_data=perf_data, func_data=func_data,
                                        template_detail=template_detail)
        return {'perf_data': perf_data, 'func_data': func_data}

    @staticmethod
    def get_template_detail(obj):
        report_detail = ReportDetail.objects.filter(report_id=obj.id).first()
        if report_detail and report_detail.template_detail:
            template_detail = report_detail.template_detail
            if 'server_info_config' not in template_detail or not template_detail['server_info_config']:
                template_detail['server_info_config'] = ["ip/sn", "distro", "cpu_info", "memory_info", "disk",
                                                         "ether", "os", "kernel", "gcc", "glibc"]
        else:
            template_detail = get_report_template(obj.id)
        return template_detail

    @staticmethod
    def get_test_env(obj):
        if obj.test_env:
            count_li = [len(_info.get('server_info')) for _info in obj.test_env.get('compare_groups')]
            count_li.append(
                0 if not obj.test_env.get('base_group') else len(obj.test_env.get('base_group').get('server_info')))
            count = max(count_li)
            obj.test_env['count'] = count
            return str(obj.test_env)

    @staticmethod
    def get_group_count(obj):
        group_count = 1
        if 'summary' in obj.test_conclusion and 'compare_groups' in obj.test_conclusion['summary']:
            group_count = len(obj.test_conclusion['summary']['compare_groups']) + 1
        return group_count

    @staticmethod
    def get_can_export(obj):
        can_export = 0
        report_export_config = BaseConfig.objects.filter(config_type='ws', ws_id=obj.ws_id,
                                                         config_key='REPORT_EXPORT').first()
        if report_export_config:
            can_export = 1 if report_export_config.config_value == "1" else 0
        return can_export

    @staticmethod
    def get_perf_desc(obj):
        item_objs = ReportItem.objects.filter(report_id=obj.id, test_type='performance')
        desc_list = list()
        for item in item_objs:
            perf_desc = dict()
            perf_desc['item_id'] = item.id
            perf_desc['name'] = item.name.split(':')[0]
            perf_desc['desc'] = item.desc
            if len(item.name.split(':')) > 1:
                desc_list.append(perf_desc)
        return desc_list

    @staticmethod
    def get_func_desc(obj):
        item_objs = ReportItem.objects.filter(report_id=obj.id, test_type='functional')
        desc_list = list()
        for item in item_objs:
            perf_desc = dict()
            perf_desc['item_id'] = item.id
            perf_desc['name'] = item.name.split(':')[0]
            perf_desc['desc'] = item.desc
            if len(item.name.split(':')) > 1:
                desc_list.append(perf_desc)
        return desc_list


class CompareFormSerializer(CommonSerializer):
    class Meta:
        model = CompareForm
        fields = ['req_form']
