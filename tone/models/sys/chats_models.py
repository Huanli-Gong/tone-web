from django.db import models
from django_extensions.db.fields import json

from tone.core.common.enums.content_enums import ContentEnums
from tone.models.base.base_models import BaseModel


class ChatsAnswer(BaseModel):
    reason = models.CharField(max_length=1024, help_text='原因')
    answer = models.TextField(help_text='答案')
    right_number = models.IntegerField(default=0, help_text="满意次数")
    wrong_number = models.IntegerField(default=0, help_text="不满意次数")
    problem_type = models.CharField(max_length=64, default='其它', help_text='问题类型', db_index=True)
    problem_attribution = models.CharField(max_length=64, default='Other', help_text='问题归属', db_index=True)
    enable = models.BooleanField(default=True, help_text='启用状态', db_index=True)

    class Meta:
        db_table = 'chats_answer'


class ChatsProblem(BaseModel):
    problem = models.CharField(max_length=1024, help_text='问题描述')
    creator = models.IntegerField(help_text='创建者', null=True)
    level = models.IntegerField(default=1, help_text="推荐优先级", db_index=True)

    class Meta:
        db_table = 'chats_problem'


class ChatsKeyword(BaseModel):
    keyword = models.CharField(max_length=512, help_text='问题关键字', db_index=True)

    class Meta:
        db_table = 'chats_keyword'


class ChatsProblemAnswerRelation(BaseModel):
    problem_id = models.IntegerField(help_text='关联问题ID', db_index=True)
    answer_id = models.IntegerField(help_text='关联答案ID', db_index=True)

    class Meta:
        db_table = 'chats_problem_answer_relation'


class ChatsProblemKeywordRelation(BaseModel):
    problem_id = models.IntegerField(help_text='关联问题ID', db_index=True)
    keyword_id = models.IntegerField(help_text='关联问题关键字ID', db_index=True)

    class Meta:
        db_table = 'chats_problem_keyword_relation'


class ChatsCollection(BaseModel):
    contents = models.CharField(max_length=1024, help_text='问题描述')
    status = models.CharField(max_length=64, choices=ContentEnums.PROBLEM_STATUS_CHOICES, default='Init',
                             help_text='状态', db_index=True)
    creator = models.IntegerField(help_text='创建者', null=True, db_index=True)
    contents_sources = models.CharField(max_length=64, choices=ContentEnums.PROBLEM_SOURCES_CHOICES,
                             default='Collect', help_text='问题来源', db_index=True)
    is_answered = models.BooleanField(default=False, help_text='是否有答案', db_index=True)
    response = models.CharField(max_length=1024, help_text='回答', null=True)

    class Meta:
        db_table = 'chats_collection'
