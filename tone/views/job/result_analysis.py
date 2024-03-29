# _*_ coding:utf-8 _*_
import json
from rest_framework.response import Response
from django.utils.decorators import method_decorator

from tone.core.common.views import CommonAPIView
from tone.services.job.result_analysis_services import PerfAnalysisService, FuncAnalysisService, get_share_request
from tone.core.common.expection_handler.error_catch import views_catch_error
from tone.core.common.redis_cache import redis_cache


class PerfAnalysisView(CommonAPIView):
    permission_classes = []
    service_class = PerfAnalysisService

    @method_decorator(views_catch_error)
    def post(self, request):
        """
        性能分析
        """
        data = self.service.filter(self.get_share_request(request.data))
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        获取metric列表
        """
        data = self.service.get_metric(request.GET)
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)


class PerfSuiteCaseListView(CommonAPIView):
    service_class = PerfAnalysisService

    @method_decorator(views_catch_error)
    def post(self, request):
        data = self.service.get_suite_case_list(request.data)
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)


class PerfMetricListView(CommonAPIView):
    service_class = PerfAnalysisService

    @method_decorator(views_catch_error)
    def post(self, request):
        data = self.service.get_metric_list(request.data)
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)


class FuncAnalysisView(CommonAPIView):
    permission_classes = []
    service_class = FuncAnalysisService

    @method_decorator(views_catch_error)
    def post(self, request):
        """
         功能分析
        """
        data = self.service.filter(self.get_share_request(request.data))
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)

    @method_decorator(views_catch_error)
    def get(self, request):
        """
        获取sub_case列表
        """
        data = self.service.get_sub_case(request.GET)
        response_data = self.get_response_code()
        response_data['data'] = data
        return Response(response_data)


class AnalysisShareView(CommonAPIView):
    service_class = PerfAnalysisService

    @method_decorator(views_catch_error)
    def post(self, request):
        share_id = request.data.get('share_id')
        redis_params = redis_cache.get_info(share_id)
        params = json.loads(redis_params) if redis_params else dict()
        if params:
            response_data = self.get_response_code()
            response_data['data'] = get_share_request(params)
            return Response(response_data)
