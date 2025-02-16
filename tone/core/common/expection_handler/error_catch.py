# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
from functools import wraps
import traceback

from django.conf import settings
from rest_framework.response import Response

from tone.core.utils.helper import CommResp
from tone.core.common.log_manager import get_logger


def views_catch_error(func):
    """
    视图类异常捕获
    """

    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except ValueError as err:
            return Response({'code': err.args[0].code, 'msg': err.args[0].to_api})
        except AssertionError as err:
            return Response({'code': err.args[0].args[0].code, 'msg': err.args[0].args[0].to_api})
        except Exception as err:
            logger = get_logger()
            try:
                if len(err.args) > 0:
                    code = err.args[0].code
                    msg = err.args[0].to_api
                else:
                    msg = str(err)
                    code = 500
            except SyntaxError:
                msg = traceback.format_exc()
                code = 500
            logger.info("error: {}".format(msg))
            return Response({'code': code, 'msg': msg})

    return wrapper


def api_catch_error(func):
    """
    视图类异常捕获
    """

    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except AssertionError as err:
            resp = CommResp()
            resp.code = err.args[0].args[0].code
            resp.msg = err.args[0].args[0].to_api
            return resp.json_resp()
        except ValueError as err:
            resp = CommResp()
            resp.code = err.args[0].code
            resp.msg = err.args[0].to_api
            return resp.json_resp()
        except Exception as err:
            resp = CommResp()
            logger = get_logger()
            try:
                if str(err).startswith('ErrorCode'):
                    code = err.args[0].code
                    msg = err.args[0].to_api
                else:
                    msg = str(err)
                    code = 500
            except SyntaxError:
                msg = str(err)
                code = 500
            resp.result = False
            if settings.ENV_TYPE == 'prod' and code == 500:
                resp.msg = '系统错误，请联系开发'
            else:
                resp.msg = msg
            resp.code = code
            logger.info("error: {}".format(traceback.print_exc()))
            return resp.json_resp()

    return wrapper
