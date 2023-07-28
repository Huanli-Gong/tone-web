from django.urls import path

from tone.views.api.views import TestAPIView
from tone.views.api import create_job, query_job, rerun_config, create_build, get_oss_url, get_product_version, \
    get_analytics_tags, append_item, get_suite_info, add_server

urlpatterns = [
    path('job', TestAPIView.as_view()),
    path('job/create/', create_job.job_create, name='job_create'),
    path('job/query/', query_job.job_query, name='job_query'),
    path('job/get_job_case/', query_job.get_job_case, name='get_job_case'),
    path('rerun/config/', rerun_config.config_query, name='config_query'),
    path('create/build/info/', create_build.create_build_info, name='create_build'),
    path('get/oss/url/', get_oss_url.get_path, name='get_oss_url'),
    path('get/product/version/', get_product_version.get_product_version, name='get_product_version'),
    path('get/analytics/tags/', get_analytics_tags.get_analytics_tags, name='get_analytics_tags'),
    path('append/item/', append_item.add_item, name='append_item'),
    path('case/get_suite_list/', get_suite_info.get_suite_list, name='suite_list'),
    path('case/get_case_list/', get_suite_info.get_case_list, name='case_list'),
    path('case/get_metric_list/', get_suite_info.get_metric_list, name='metric_list'),
    path('case/get_suite_all/', get_suite_info.get_suite_increase, name='suite_all'),
    path('workspace_list/', query_job.get_workspace, name='ws_query'),
    path('workspace/project/', query_job.get_project, name='project_query'),
    path('workspace/job_type/', query_job.get_job_type, name='job_type_query'),

    path('server/add/', add_server.add_server, name='add_server'),
    path('job/server_list/', create_job.get_server_list, name='server_list'),
    path('job/server_tag/', create_job.get_server_tag_list, name='server_tag'),
    path('case/re_auto_report/', get_suite_info.reset_report, name='reset_report'),
    path('workspace/update_cluster_is_instance/', query_job.update_cluster_is_instance,
         name='update_cluster_is_instance'),
    path('job/product/list/', query_job.get_product_job_list, name='job_product_list'),
    path('job/list/', query_job.get_job_info_list, name='job_list'),
]
