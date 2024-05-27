# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
from rest_framework.response import Response
from django.utils.decorators import method_decorator

from tone.core.common.views import CommonAPIView
from tone.models import BaseConfig
from tone.models.sys.chats_models import ChatsProblem, ChatsAnswer, ChatsCollection
from tone.serializers.sys.chats_serializers import ChatsAnswerSerializer, ChatsProblemSerializer, \
    ChatsCollectSerializer
from tone.services.sys.chats_services import ChatsProblemInfoService, ChatsAnswerInfoService, \
    ChatsCheckInfoService, ChatsCollectInfoService, ChatsConfigInfoService
from tone.core.common.expection_handler.error_catch import views_catch_error


class ChatsProblemView(CommonAPIView):
    serializer_class = ChatsProblemSerializer
    queryset = ChatsProblem.objects.all()
    service_class = ChatsProblemInfoService
    permission_classes = []
    order_by = ['-level']

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        查询ProblemInfo
        """
        queryset = self.service.filter(self.get_queryset(), request.GET)
        response_data = self.get_response_data(queryset, page=True)
        return Response(response_data)

    @method_decorator(views_catch_error)
    def post(self, request):
        """
        创建ProblemInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.create(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)

    @method_decorator(views_catch_error)
    def put(self, request):
        """
        修改ProblemInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.update(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)

    @method_decorator(views_catch_error)
    def delete(self, request):
        """
        删除ProblemInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.delete(request.data)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)


class ChatsAnswerView(CommonAPIView):
    serializer_class = ChatsAnswerSerializer
    queryset = ChatsAnswer.objects.all()
    service_class = ChatsAnswerInfoService
    permission_classes = []
    order_by = ['-right_number']

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        查询AnswerInfo
        """
        queryset = self.service.filter(self.get_queryset(), request.GET)
        response_data = self.get_response_data(queryset)
        return Response(response_data)

    @method_decorator(views_catch_error)
    def post(self, request):
        """
        创建AnswerInfo
        """
        self.service.create(request.data, operator=request.user.id)
        return Response(self.get_response_code())

    @method_decorator(views_catch_error)
    def put(self, request):
        """
        修改AnswerInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.update(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)

    @method_decorator(views_catch_error)
    def delete(self, request):
        """
        删除AnswerInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.delete(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)


class ChatsCollectView(CommonAPIView):
    serializer_class = ChatsCollectSerializer
    queryset = ChatsCollection.objects.all()
    service_class = ChatsCollectInfoService
    permission_classes = []
    order_by = ['-gmt_created']

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        查询CollectInfo
        """
        queryset = self.service.filter(self.get_queryset(), request.GET)
        response_data = self.get_response_data(queryset, page=True)
        return Response(response_data)

    @method_decorator(views_catch_error)
    def post(self, request):
        """
        创建CollectInfo
        """
        self.service.create(request.data, operator=request.user.id)
        return Response(self.get_response_code())

    @method_decorator(views_catch_error)
    def put(self, request):
        """
        修改CollectInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.update(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)

    @method_decorator(views_catch_error)
    def delete(self, request):
        """
        删除CollectInfo
        """
        response_data = self.get_response_code()
        success, instance = self.service.delete(request.data)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)


class ChatsConfigView(CommonAPIView):
    service_class = ChatsConfigInfoService

    @method_decorator(views_catch_error)
    def get(self, request):
        response_data = self.get_response_code()
        response_data['data'] = self.service.get_chats_config(request.GET)
        return Response(response_data)

    @method_decorator(views_catch_error)
    def put(self, request):
        response_data = self.get_response_code()
        success, instance = self.service.update_chats_config(request.data, operator=request.user.id)
        if not success:
            response_data = self.get_response_code(code=201, msg=instance)
            response_data['data'] = None
        return Response(response_data)


class ChatsQueryView(CommonAPIView):
    service_class = ChatsCheckInfoService

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        常见问题查询
        """
        response_data = self.get_response_code()
        if request.GET.get('page_num') and request.GET.get('page_size'):
            query_res, total = self.service.chats_query_faq(request.GET.get('page_num'), request.GET.get('page_size'))
            response_data['data'] = query_res
            response_data['total'] = total
        else:
            success, query_res = self.service.chats_query(request.GET, operator=request.user.id)
            if success:
                response_data['data'] = query_res
            else:
                response_data = self.get_response_code(code=201, msg=query_res)
                response_data['data'] = None
        return Response(response_data)


class ChatsCheakView(CommonAPIView):
    service_class = ChatsCheckInfoService

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        自主排查
        """
        success, query_res = self.service.self_check(request.GET, operator=request.user.id)
        if success:
            response_data = self.get_response_code()
            response_data['data'] = query_res
        else:
            response_data = self.get_response_code(code=201, msg=query_res)
            response_data['data'] = None
        return Response(response_data)
