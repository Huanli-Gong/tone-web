# _*_ coding:utf-8 _*_
"""
Module Description: 用户认证类
Date:
Author: Yfh
"""
import time
import json
import base64

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

from tone.models import User
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.settings.auth_settings import PUB_API_TOKEN


def token_required(func):
    @csrf_exempt
    def wrapper(request, *args, **kwargs):
        signature = None
        username = None
        if request.method == 'GET':
            signature = request.GET.get('signature', None)
            username = request.GET.get('username', None)
        elif request.method == 'POST':
            signature = request.POST.get('signature', None)
            username = request.POST.get('username', None)
        if not signature and request.body:
            try:
                data = json.loads(request.body)
                signature = data.get('signature', None)
                username = data.get('username', None)
            except Exception:
                assert None, ValueError(ErrorCode.JSON_FORMAT_ERROR)
        assert signature, ValueError(ErrorCode.TOKEN_NEED)
        assert username, ValueError(ErrorCode.USERNAME_NEED)
        return func(request, *args, **kwargs) if check_token(signature, username, request) else HttpResponse(
            json.dumps({'success': False, 'msg': 'Token invalid', 'code': 500}))

    return wrapper


def check_token(signature, user, request, expired_time=300):
    token = base64.b64decode(signature).decode('utf-8').split('|')
    if len(token) != 3:
        raise ValueError(ErrorCode.TOKEN_FORMAT_ERROR)
    username = token[0]
    _token = token[1]
    timestamp = float(token[2])
    if _token == PUB_API_TOKEN:
        if not User.objects.filter(username=user).exists():
            raise ValueError(ErrorCode.USERNAME_NOT_REGISTER)
    else:
        if not User.objects.filter(username=username, token=_token).exists() or username != user:
            raise ValueError(ErrorCode.USERNAME_NOT_REGISTER)
    if time.time() - timestamp > expired_time:
        raise ValueError(ErrorCode.TOKEN_OVERDUE)
    request.user = User.objects.get(username=user)
    return True
