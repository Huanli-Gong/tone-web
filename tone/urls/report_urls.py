# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author:
"""
from django.urls import path

from tone.views.job import report_views
from tone.views.api import get_domain_group

urlpatterns = [
    path('template/list/', report_views.ReportTemplateListView.as_view(), name='report_template_list'),
    path('template/detail/', report_views.ReportTemplateDetailView.as_view(), name='report_template_detail'),
    path('template/copy/', report_views.ReportTemplateCopyView.as_view(), name='report_template__copy'),

    path('test/report/', report_views.ReportView.as_view(), name='report'),
    path('domain/group/', get_domain_group.get_domain_info, name='domain_group'),
    path('test/report/detail/', report_views.ReportDetailView.as_view(), name='report_detail'),
    path('get_by_plan/<str:plan_name>/', report_views.ReportDailyView.as_view(), name='get_by_plan'),
    path('test/report/item_suite/', report_views.ReportItemSuiteView.as_view(), name='report_item_suite'),
    path('test/report/update_desc/', report_views.ReportDescView.as_view(), name='report_update_desc'),
    path('test/report/item/update_desc/', report_views.ReportItemDescView.as_view(), name='report_item_desc'),
    path('test/report/product/version/', report_views.ReportProductVersionView.as_view(), name='get_product_version'),
]
