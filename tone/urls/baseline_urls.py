# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author:
"""
from django.urls import path

from tone.views.sys import baseline_views

urlpatterns = [
    # 基线列表
    path('list/', baseline_views.AllBaselineView.as_view(), name='baseline_list'),
    # 集团/云上 功能详情
    path('funcs/detail/', baseline_views.FuncBaselineView.as_view(), name='func_detail_baseline'),
    # 集团/云上 功能详情
    path('perfs/detail/', baseline_views.PerfBaselineView.as_view(), name='perf_baseline'),
    # 搜索suite
    path('suite_search/', baseline_views.SearchSuiteView.as_view(), name='suite_search'),
    # 性能--加入基线
    path('perf/add_one/', baseline_views.PerfBaselineAddOneView.as_view(), name='baseline_batch_add'),
    path('perf/batch_add/', baseline_views.PerfBaselineBatchAddView.as_view(), name='baseline_batch_add'),
    # 性能对比基线
    path('perf/contrast/', baseline_views.ContrastBaselineView.as_view(), name='contrast_baseline'),
    path('download/', baseline_views.BaselineDownloadView.as_view(), name='baseline_download'),
    path('download/query/', baseline_views.BaselineDownloadRecordView.as_view(), name='download_query'),
    path('upload/', baseline_views.UploadDataView.as_view(), name='offline_upload'),
    path('list_by_name/', baseline_views.BaselineByNameView.as_view(), name='baseline_filter'),
    path('copy/', baseline_views.BaselineCopyView.as_view(), name='baseline_copy'),
]
