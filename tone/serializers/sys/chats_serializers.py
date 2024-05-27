# _*_ coding:utf-8 _*_
"""
Module Description:
Date:
Author: Yfh
"""
import json

from rest_framework import serializers

from tone.core.common.serializers import CommonSerializer
from tone.models.sys.auth_models import User
from tone.models.sys.chats_models import ChatsProblem, ChatsProblemKeywordRelation, ChatsKeyword, \
    ChatsAnswer, ChatsCollection


class ChatsProblemSerializer(CommonSerializer):
    creator_name = serializers.SerializerMethodField()
    keyword = serializers.SerializerMethodField()

    class Meta:
        model = ChatsProblem
        exclude = ['is_deleted']

    @staticmethod
    def get_creator_name(obj):
        creator_name = None
        creator = User.objects.filter(id=obj.creator).first()
        if creator:
            creator_name = creator.first_name if creator.first_name else creator.last_name
        return creator_name

    @staticmethod
    def get_keyword(obj):
        keyword_list = []
        keyword_ids = ChatsProblemKeywordRelation.objects.filter(problem_id=obj.id).values_list("keyword_id", flat=True)
        if keyword_ids:
            keyword_list = ChatsKeyword.objects.filter(id__in=keyword_ids).values_list("keyword", flat=True)
        return keyword_list


class ChatsAnswerSerializer(CommonSerializer):

    class Meta:
        model = ChatsAnswer
        exclude = ['is_deleted']


class ChatsCollectSerializer(CommonSerializer):
    creator_name = serializers.SerializerMethodField()

    class Meta:
        model = ChatsCollection
        exclude = ['is_deleted']

    @staticmethod
    def get_creator_name(obj):
        creator_name = None
        creator = User.objects.filter(id=obj.creator).first()
        if creator:
            creator_name = creator.first_name if creator.first_name else creator.last_name
        return creator_name
