# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""

OPERATION_OBJECT = {
    'machine_test_server': '机器管理-集团单机',
    'machine_cloud_server': '机器管理-云上单机',
    'machine_cluster_aligroup': '机器管理-集团集群',
    'machine_cluster_aliyun': '机器管理-云上集群',
    'machine_cluster_aligroup_server': '机器管理-集团集群-机器',
    'machine_cluster_aliyun_server': '机器管理-云上集群-机器',
    'machine_server_tag': '机器管理-调度标签',
    'keep_three_months': 'job标签-保留三个月',
    'keep_six_months': 'job标签-保留六个月',
    'keep_one_year': 'job标签-保留一年'
}

OPERATION_OBJECT_LIST = list(OPERATION_OBJECT.keys())

OPERATION_TYPE_LIST = ['update', 'create', 'delete']
