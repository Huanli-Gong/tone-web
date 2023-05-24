import re
import shlex

from django.db import connection
from tone.core.common.expection_handler.custom_error import JobTestException
from tone.core.common.expection_handler.error_code import ErrorCode


def list_shlex_data(shlex_data, list_equal_sign, list_equal_sign_index, list_connect_equal_sign_tuple,
                    list_comma_index, list_shlex_data, env_data_list):
    if shlex_data.count('=') == 1:
        env_data_list.append(shlex_data)
    else:
        for equal in re.finditer('=', shlex_data):
            tuple_equal_sign = equal.span()
            list_equal_sign.append(tuple_equal_sign)
        for equal_sign in list_equal_sign:
            list_equal_sign_index.append(equal_sign[0])
        for equal_sign_index in range(len(list_equal_sign_index)):
            if equal_sign_index + 1 >= len(list_equal_sign_index):
                break
            list_connect_equal_sign_tuple.append((list_equal_sign_index[equal_sign_index],
                                                  list_equal_sign_index[equal_sign_index + 1]))
        for connect_equal_sign_tuple in list_connect_equal_sign_tuple:
            comma_index = shlex_data.rfind(',', connect_equal_sign_tuple[0], connect_equal_sign_tuple[1])
            list_comma_index.append(comma_index)
        list_comma_index.append(len(shlex_data))
        count = 0
        for k in range(len(list_comma_index)):
            if k + 1 >= len(list_comma_index):
                break
            if count != 0:
                list_shlex_data.append(shlex_data[(list_comma_index[k] + 1):list_comma_index[k + 1]])
            else:
                list_shlex_data.append(shlex_data[list_comma_index[k]:list_comma_index[k + 1]])
            count += 1
    return list_shlex_data


def pack_env_infos(data, delimiter=None):
    """
    组装env_info
    """
    if not data:
        return dict()
    if delimiter:
        return parse_env_info_by_delimiter(data, delimiter=delimiter)
    list_equal_sign = []
    list_equal_sign_index = []
    list_connect_equal_sign_tuple = []
    list_comma_index = [0]
    list_shlex_data_list = []
    env_data = dict()
    env_data_list = []
    try:
        shlex_data_list = shlex.split(data)
        for shlex_data in shlex_data_list:
            list_shlex_data_list = list_shlex_data(shlex_data, list_equal_sign, list_equal_sign_index,
                                                   list_connect_equal_sign_tuple, list_comma_index,
                                                   list_shlex_data_list, env_data_list)
        for shlex_data_l in list_shlex_data_list:
            env_data_list.append(shlex_data_l)
        for env_data_l in env_data_list:
            item = env_data_l.split('=', 1)
            if ' ' in item[1] and "'" not in item[1]:
                env_data[item[0]] = "'" + item[1] + "'"
            elif ' ' in item[1] and '"' not in item[1]:
                env_data[item[0]] = '"' + item[1] + '"'
            else:
                env_data[item[0]] = item[1]
    except Exception:
        raise JobTestException(ErrorCode.GLOBAL_VARIABLES_ERROR)
    return env_data


def format_env_info(env_info):
    if not env_info:
        return
    for k, v in env_info.items():
        if v == "":
            env_info[k] = '""'
        if v == '':
            env_info[k] = "''"
    return env_info


def query_all_dict(sql, params=None):
    '''
    查询所有结果返回字典类型数据
    :param sql:
    :param params:
    :return:
    '''
    with connection.cursor() as cursor:
        if params:
            cursor.execute(sql, params=params)
        else:
            cursor.execute(sql)
        col_names = [desc[0] for desc in cursor.description]
        row = cursor.fetchall()
        rowList = []
        for list in row:
            tMap = dict(zip(col_names, list))
            rowList.append(tMap)
        return rowList


def kernel_info_format(kernel_info):
    # 内核管理需求优化，内核包可扩展多个，故将原test_job.kernel_info转换为新数据结构
    # 原数据结构：{"kernel": "a.rpm", "devel": "b.rpm", "headers": "c.rpm", "hotfix_install": true}
    # 新数据结构：{"kernel_packages": ["a.rpm", "b.rpm", "c.rpm"], "hotfix_install": true}
    if not kernel_info or kernel_info.get('kernel_packages'):
        return kernel_info
    new_kernel_info = {'kernel_packages': []}
    if kernel_info.get('kernel'):
        new_kernel_info['kernel_packages'].append(kernel_info.get('kernel'))
    if kernel_info.get('devel'):
        new_kernel_info['kernel_packages'].append(kernel_info.get('devel'))
    if kernel_info.get('headers'):
        new_kernel_info['kernel_packages'].append(kernel_info.get('headers'))
    for name,value in kernel_info.items():
        if name not in ['kernel', 'devel', 'headers']:
            new_kernel_info[name] = value
    return new_kernel_info


def parse_env_info_by_delimiter(original_env_data, delimiter='\n'):
    """
    将字符串形式的 env_info 转换成字典。支持自定义分隔符，默认换行分割
    例："a=1,b=2" -> {'a':1, 'b': 2}
    """
    if isinstance(original_env_data, dict):
        return original_env_data
    if original_env_data.count('=') == 1:
        return {original_env_data.split('=')[0]: original_env_data.split('=')[1]}
    if not delimiter:
        if '\n' in original_env_data:
            delimiter = '\n'
        elif ',' in original_env_data:
            delimiter = ','
        else:
            delimiter = ' '
    env_data, new_li = dict(), list()
    for item in original_env_data.split(delimiter):
        if '=' in item and item.replace('=', ''):
            # 判断['=' in item]：说明为一对正常的键值对
            # 判断[item.replace('=', '')]不为空：避免出现 item 为 '=' 或者 '==' 的时候被当做一个键值对处理
            new_li.append(item)
        else:
            # 说明非正常键值对，为上一对键值对的 value 值（因包含分隔符，所以被误分割）
            new_li[-1] += f'{delimiter}{item}'
    for item in new_li:
        item_list = item.split('=', 1)
        env_data[item_list[0]] = item_list[1]
    return env_data
