# _*_ coding:utf-8 _*_
import json

import jieba
from django.db.models import Q
from django.db import transaction
from django.utils import timezone


from tone.core.common.enums.content_enums import ContentEnums

from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.msg_notice import get_skip_url, SimpleMsgHandle
from tone.core.common.enums.job_enums import JobState
# from tone.core.common.constant import PREPARE_STEP_STAGE_MAP, STEP_TIMEOUT_DICT
# from tone.core.common.oss_client import alg_oss, aly_oss
# from tone.core.common.redis_cache import runner_v2_redis_cache
# from tone.core.utils.common_utils import get_ip_by_server_key, get_server
# from tone.models import TestSubJob, TestSubJobStep
# from tone.core.utils.tone_thread import ToneThread
from tone.core.common.redis_cache import redis_cache
from tone.core.utils.common_utils import query_all_dict
from tone.core.common.services import CommonService
from tone.core.utils.config_parser import stopwords
from tone.models import TestJob, WorkspaceMember, RoleMember, Role, TestSuite, CloudServer, TestJobCase, TestCase, \
    BaseConfig, User
from tone.models.sys.chats_models import ChatsProblemAnswerRelation, ChatsAnswer, ChatsProblem, ChatsKeyword, \
    ChatsProblemKeywordRelation, ChatsCollection

from tone.core.utils.config_parser import cp
import dashscope
from dashscope import TextEmbedding
from datasets import load_from_disk
import numpy as np
from rank_bm25 import BM25Okapi
import markdown

dashscope.api_key=cp.get('dashscope_api_key')

class ChatsProblemInfoService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        q &= Q(problem__icontains=data.get('problem')) if data.get('problem') else q
        q &= Q(creator=data.get('creator')) if data.get('creator') else q
        return queryset.filter(q)

    @staticmethod
    def create(data, operator):
        # 添加问题
        problem = data.get("problem")
        level = data.get("level") if data.get("level") else 1
        user_keywords = data.get("keyword")
        creator = operator

        if not str(level).isdigit():
            return False, ErrorCode.ILLEGALITY_PARAM_ERROR.to_api
        # 分词
        if not user_keywords:
            user_keywords = ChatsProblemInfoService.question_cut(problem)

        with transaction.atomic():
            # 创建问题
            problem_obj = ChatsProblem.objects.create(problem=problem, level=level, creator=creator)
            keyword_id_list = []
            for key in user_keywords:
                # 创建关键字
                keyword_object, created = ChatsKeyword.objects.get_or_create(keyword=key)
                keyword_id_list.append(keyword_object.id)

            # 创建问题与关键字关联关系
            [ChatsProblemKeywordRelation.objects.create(problem_id=problem_obj.id, keyword_id=keyword_id) for keyword_id
             in keyword_id_list]
        ChatsProblemInfoService.update_problem_keyword_list_redis()
        return True, ""

    @staticmethod
    def update(data, operator):
        problem_id = data.get("problem_id")
        if not problem_id:
            return False, ErrorCode.PROBLEM_ID_MISSING.to_api
        problem = data.get("problem")
        level = data.get("level") if data.get("level") else 1
        if not str(level).isdigit():
            return False, ErrorCode.ILLEGALITY_PARAM_ERROR.to_api
        user_keyword = data.get("keyword")

        if not user_keyword:
            user_keyword = ChatsProblemInfoService.question_cut(problem)
        keyword_id_list = []
        with transaction.atomic():
            for key in user_keyword:
                # 创建关键字
                keyword_object, created = ChatsKeyword.objects.get_or_create(keyword=key)
                keyword_id_list.append(keyword_object.id)
            # 删除旧关键字
            ChatsProblemKeywordRelation.objects.filter(problem_id=problem_id).delete()
            # 创建新的关键字
            [ChatsProblemKeywordRelation.objects.create(problem_id=problem_id, keyword_id=keyword_id) for keyword_id
             in keyword_id_list]

            # 更新关键字时，删除旧的且未被其它问题关联的关键字
            # old_keyword_ids = ChatsProblemKeywordRelation.objects.filter(problem_id=problem_id).values_list(
            #     'keyword_id', flat=True)
            # delete_keyword_ids = []
            # for old_key_id in old_keyword_ids:
            #     if old_key_id not in keyword_id_list:
            #         delete_keyword_ids.append(old_key_id)
            # for id in delete_keyword_ids:
            #     if not ChatsKeyword.objects.filter(id=id).exists():
            #         ChatsKeyword.objects.filter(id=id).delete()

            # 更新问题
            ChatsProblem.objects.filter(id=problem_id).update(problem=problem, level=level, creator=operator)
        ChatsProblemInfoService.update_problem_keyword_list_redis()
        return True, None

    @staticmethod
    def delete(data):
        problem_id_list = data.get('problem_id_list')
        if not problem_id_list:
            return False, ErrorCode.PROBLEM_ID_MISSING.to_api

        keyword_ids = ChatsProblemKeywordRelation.objects.filter(problem_id__in=problem_id_list).values_list(
            "keyword_id", flat=True)
        with transaction.atomic():
            # 删除问题与关键字的关联关系
            ChatsProblemKeywordRelation.objects.filter(problem_id__in=problem_id_list).delete()

            # 删除问题答案
            answer_ids = ChatsProblemAnswerRelation.objects.filter(problem_id__in=problem_id_list).values_list(
                "answer_id", flat=True)
            if answer_ids:
                ChatsAnswer.objects.filter(id__in=answer_ids).delete()
            # 删除问题与答案关联关系
            ChatsProblemAnswerRelation.objects.filter(problem_id__in=problem_id_list).delete()

            # 删除问题
            ChatsProblem.objects.filter(id__in=problem_id_list).delete()

        # 被删问题的关键字无其它问题关联时，关键字也需要删除
        delete_keyword_ids = []
        for keyword_id in keyword_ids:
            if not ChatsProblemKeywordRelation.objects.filter(keyword_id=keyword_id).exists():
                delete_keyword_ids.append(keyword_id)
        if delete_keyword_ids:
            ChatsKeyword.objects.filter(id__in=delete_keyword_ids).delete()
        ChatsProblemInfoService.update_problem_keyword_list_redis()
        return True, None

    @staticmethod
    def question_cut(problem):
        user_question_cut = jieba.cut(problem)
        user_keywords = set(keyword.lower() if keyword.isalpha() else keyword for keyword in list(user_question_cut) if
                            keyword and keyword != " " and keyword not in stopwords)
        user_keywords = list(set(user_keywords))
        return user_keywords

    @staticmethod
    def update_problem_keyword_list_redis():
        sql = """
                    SELECT k.keyword, pk.problem_id
                    FROM chats_keyword k
                    JOIN chats_problem_keyword_relation pk ON k.id = pk.keyword_id
                    JOIN chats_problem p ON p.id = pk.problem_id
                    WHERE p.is_deleted is False AND k.is_deleted is False AND pk.is_deleted is False
                """
        problem_list = query_all_dict(sql)
        redis_cache.set('chats_problem_keyword', problem_list, nx=False)


class ChatsAnswerInfoService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        if data.get('problem_id'):
            answer_id_list = ChatsProblemAnswerRelation.objects.filter(problem_id=data.get('problem_id')).values_list(
                "answer_id", flat=True)
            q &= Q(id__in=answer_id_list)
        if data.get('answer'):
            q &= Q(answer__icontains=data.get('answer'))
        if data.get('reason'):
            q &= Q(reason__icontains=data.get('reason'))
        if data.get('enable'):
            q &= Q(enable=data.get('enable'))
        if data.get('problem_type'):
            q &= Q(problem_type=data.get('problem_type'))
        if data.get('problem_attribution'):
            q &= Q(problem_attribution=data.get('problem_attribution'))
        return queryset.filter(q)

    @staticmethod
    def create(data, operator):
        # 添加答案
        problem_id = data.get("problem_id")
        reason = data.get("reason")
        answer = data.get("answer")
        problem_type = data.get("problem_type")
        problem_attribution = data.get("problem_attribution")
        enable = data.get("enable")

        with transaction.atomic():
            # 创建问题与关键字关联关系
            # 创建答案
            answer_obj = ChatsAnswer.objects.create(reason=reason, answer=answer, problem_type=problem_type,
                                                    problem_attribution=problem_attribution, enable=enable)
            # 创建问题与答案关联关系
            ChatsProblemAnswerRelation.objects.create(problem_id=problem_id, answer_id=answer_obj.id)

    @staticmethod
    def update(data, operator):
        # 更新答案
        answer_id = data.get("answer_id")
        if not answer_id:
            return False, ErrorCode.ANSWER_ID_MISSING.to_api
        reason = data.get("reason")
        answer = data.get("answer")
        problem_type = data.get("problem_type")
        problem_attribution = data.get("problem_attribution")
        enable = data.get("enable")
        right_number = data.get("right_number")
        ChatsAnswer.objects.filter(id=answer_id).update(reason=reason, answer=answer, problem_type=problem_type,
                                                        problem_attribution=problem_attribution, enable=enable, right_number=right_number)
        return True, None

    @staticmethod
    def delete(data, operator):
        # 删除答案
        problem_id = data.get("problem_id")
        answer_id_list = data.get('answer_id_list')
        if not problem_id:
            return False, ErrorCode.PROBLEM_ID_MISSING.to_api
        if not answer_id_list:
            return False, ErrorCode.ANSWER_ID_MISSING.to_api
        with transaction.atomic():
            ChatsProblemAnswerRelation.objects.filter(problem_id=problem_id, answer_id__in=answer_id_list).delete()
            ChatsAnswer.objects.filter(id__in=answer_id_list).delete()
        return True, None

    @staticmethod
    def get_question_aswers(question_id):
        answers = []
        answer_relations = ChatsProblemAnswerRelation.objects.filter(problem_id=question_id)
        answer_ids = [relation.answer_id for relation in answer_relations]
        answer_quests = ChatsAnswer.objects.filter(id__in=answer_ids, enable=True).order_by('-right_number')
        for answer in answer_quests:
            answers.append({
                "answer_id": answer.id,
                "reason": answer.reason,
                "answer": answer.answer,
                "right_number": answer.right_number,
                "wrong_number": answer.wrong_number}
            )
        return answers


class ChatsCollectInfoService(CommonService):
    @staticmethod
    def filter(queryset, data):
        q = Q()
        q &= Q(status=data.get('status')) if data.get('status') else q
        q &= Q(contents_sources=data.get('contents_sources')) if data.get('contents_sources') else q
        q &= Q(contents__icontains=data.get('contents')) if data.get('contents') else q
        return queryset.filter(q)

    @staticmethod
    def create(data, operator, all_question_res=None):
        # 添加反馈意见
        contents = data.get("contents")
        contents_sources = data.get("contents_sources", ContentEnums.PROBLEM_SOURCES_CHOICES[1][0])
        response = data.get("response")
        is_answered = True if all_question_res else False
        collect_obj = ChatsCollection.objects.create(contents=contents, status="Init",
                                    contents_sources=contents_sources, is_answered=is_answered, creator=operator,
                                                     response = response)
        if contents_sources == ContentEnums.PROBLEM_SOURCES_CHOICES[1][0]:
            # 意见反馈发送钉钉消息
            ChatsCollectInfoService.get_chats_msg_content(collect_obj.id, contents, operator)

    @staticmethod
    def update(data, operator):
        # 更新收集的问题
        contents_id = data.get('contents_id')
        if not contents_id:
            return False, ErrorCode.CONTENTS_ID_MISSING.to_api
        contents = data.get("contents")
        status = data.get("status")
        creator = operator
        ChatsCollection.objects.filter(id=contents_id).update(contents=contents, status=status, creator=creator)
        return True, None

    @staticmethod
    def delete(data):
        # 删除收集的问题
        contents_ids = data.get("contents_id")
        if not contents_ids:
            return False, ErrorCode.CONTENTS_ID_MISSING.to_api
        ChatsCollection.objects.filter(id__in=contents_ids).delete()
        return True, None

    @staticmethod
    def get_chats_msg_content(collect_id, suggestion, operator):
        """获取job信息"""
        ding_token_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_DING_TOKEN').first()

        if not ding_token_config:
            # 未配置钉钉token，不需要发送消息
            return None
        ding_token = ding_token_config.config_value
        title = "开源"
        creator_name = "用户"
        creator = User.objects.filter(id=operator).first()
        if creator:
            creator_name = creator.first_name if creator.first_name else creator.last_name
        subject = f'【{title}】【{creator_name}】【{collect_id}】意见反馈提醒'
        msg_link = '{}/system/question?tab=question'.format(get_skip_url())
        contents = f'''【{title}】【{creator_name}】意见反馈提醒<br>{suggestion}'''
        SimpleMsgHandle.chats_suggest_warning(subject, contents, msg_link, ding_token)


class ChatsConfigInfoService(CommonService):
    @staticmethod
    def get_chats_config(data):
        chats_config = dict()
        group_link = ""
        problem_type = "操作流程,环境配置,用户数据,代码bug,其它"
        problem_attribution = "SystemScript,Toneagent,Staragent,Proxy,Runner,User,Other"
        ding_token = ""
        group_link_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_GROUP_LINK')
        if group_link_config:
            group_link = group_link_config.first().config_value
        problem_type_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_PROBLEM_TYPE')
        if problem_type_config:
            problem_type = problem_type_config.first().config_value
        problem_attribution_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_PROBLEM_ATTRIBUTION')
        if problem_attribution_config:
            problem_attribution = problem_attribution_config.first().config_value
        ding_token_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_DING_TOKEN')
        if ding_token_config:
            ding_token = ding_token_config.first().config_value
        chats_config.update({
            'group_link': group_link,
            'problem_type': problem_type,
            'problem_attribution': problem_attribution,
            'ding_token': ding_token
        })
        return chats_config

    @staticmethod
    def update_chats_config(data, operator):
        group_link = data.get('group_link')
        problem_type = data.get('problem_type')
        problem_attribution = data.get('problem_attribution')
        ding_token = data.get('ding_token')
        if not isinstance(group_link, str) or not isinstance(problem_type, str) or not isinstance(problem_attribution,
                                                                                                  str):
            return False, ErrorCode.ILLEGALITY_PARAM_ERROR.to_api

        group_link_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_GROUP_LINK').first()
        if group_link_config:
            if group_link_config.config_value != group_link:
                BaseConfig.objects.filter(config_type='chats', config_key='CHATS_GROUP_LINK').update(
                    config_value=group_link, update_user=operator)
        else:
            BaseConfig.objects.create(config_type='chats', config_key='CHATS_GROUP_LINK', config_value=group_link,
                                      creator=operator)
        problem_type_config = BaseConfig.objects.filter(config_type='chats', config_key='CHATS_PROBLEM_TYPE').first()
        if problem_type_config:
            if problem_type_config.config_value != problem_type:
                BaseConfig.objects.filter(config_type='chats', config_key='CHATS_PROBLEM_TYPE').update(
                    config_value=problem_type, update_user=operator)
        else:
            BaseConfig.objects.create(config_type='chats', config_key='CHATS_PROBLEM_TYPE', config_value=problem_type,
                                      creator=operator)

        problem_attribution_config = BaseConfig.objects.filter(config_type='chats',
                                                               config_key='CHATS_PROBLEM_ATTRIBUTION').first()
        if problem_attribution_config:
            if problem_attribution_config.config_value != problem_attribution:
                BaseConfig.objects.filter(config_type='chats', config_key='CHATS_PROBLEM_ATTRIBUTION').update(
                    config_value=problem_attribution, update_user=operator)
        else:
            BaseConfig.objects.create(config_type='chats', config_key='CHATS_PROBLEM_ATTRIBUTION',
                                      config_value=problem_attribution, creator=operator)

        ding_token_config = BaseConfig.objects.filter(config_type='chats',
                                                      config_key='CHATS_DING_TOKEN').first()
        if ding_token_config:
            if ding_token_config.config_value != ding_token:
                BaseConfig.objects.filter(config_type='chats', config_key='CHATS_DING_TOKEN').update(
                    config_value=ding_token, update_user=operator)
        else:
            BaseConfig.objects.create(config_type='chats', config_key='CHATS_DING_TOKEN',
                                      config_value=ding_token, creator=operator)
        return True, 'success'


class ChatsCheckInfoService(CommonService):
    embeddings_dataset = load_from_disk('embeddings_dataset')
    embeddings_dataset.add_faiss_index(column="embeddings")

    @staticmethod
    def chats_query_faq(page_num, page_size):
        all_question_res = []
        page_num = int(page_num)
        page_size = int(page_size)
        begin = (page_num - 1) * page_size
        end = page_num * page_size
        problems = ChatsProblem.objects.filter(level__gt=1).order_by('-level', 'id')
        total = problems.count()
        for problem in problems[begin:end]:
            cur_question_res = {
                "problem_id": problem.id,
                "problem": problem.problem
            }
            all_question_res.append(cur_question_res)
        return all_question_res, total

    @staticmethod
    def chats_query(data, operator=None):
        all_question_res = []
        problem_desc = data.get("problem")
        if not problem_desc:
            return False, ErrorCode.PROBLEM_MISSING.to_api

        problem_obj = ChatsProblem.objects.filter(problem=problem_desc)
        if problem_obj:
            problem = problem_obj.first()
            all_question_res.append({
                "problem_id": problem.id,
                "problem": problem_desc,
                "answers": ChatsAnswerInfoService.get_question_aswers(problem.id)
            })
            return True, all_question_res

        limit = data.get("limit", 3)
        limit = int(limit) if str(limit).isdigit() else 1
        # 使用jieba进行智能分词
        user_keywords = ChatsProblemInfoService.question_cut(problem_desc)
        user_keywords_length = len(user_keywords)

        # sql = """
        #     SELECT k.keyword, pk.problem_id
        #     FROM chats_keyword k
        #     JOIN chats_problem_keyword_relation pk ON k.id = pk.keyword_id
        #     JOIN chats_problem p ON p.id = pk.problem_id
        #     WHERE p.is_deleted is False AND k.is_deleted is False AND pk.is_deleted is False AND keyword != ''
        # """
        # problem_list = query_all_dict(sql)
        # redis缓存替代直接访问数据库
        problem_list = redis_cache.get('chats_problem_keyword')[1]
        # 统计每个问题匹配到的关键字数量
        question_match_count = {}
        for problem in problem_list:
            if problem["keyword"] in user_keywords:
                question_match_count[problem["problem_id"]] = question_match_count.get(problem["problem_id"], 0) + 1

        # 查询所有问题答案
        if question_match_count:
            # 对问题进行排序，匹配关键字最多的问题优先级最高
            sorted_questions = sorted(question_match_count.items(), key=lambda item: item[1], reverse=True)

            if limit == 1:
                sorted_questions = sorted_questions[:limit]
            else:
                match_questions_ids = []
                # 如果匹配到的关键词数量等于用户输入问题的关键词数量，则优先级最高
                for question_id, match_count in sorted_questions:
                    if match_count == user_keywords_length:
                        match_questions_ids.append(question_id)
                match_questions_ids_length = len(match_questions_ids)
                if match_questions_ids_length == 1:
                    sorted_questions = sorted_questions[:1]
                elif match_questions_ids_length > 1:
                    sorted_questions = sorted_questions[:min(match_questions_ids_length, limit)]
                else:
                    sorted_questions = sorted_questions[:limit]

            if len(sorted_questions) == 1:
                problems = ChatsProblem.objects.filter(id=sorted_questions[0][0])
                if problems:
                    problem = problems.first()
                    cur_question_res = {
                        "problem_id": problem.id,
                        "problem": problem_desc,
                        "answers": ChatsAnswerInfoService.get_question_aswers(problem.id)
                    }
                    all_question_res.append(cur_question_res)
            else:
                for question_id, match_count in sorted_questions:
                    problems = ChatsProblem.objects.filter(id=question_id)
                    if problems:
                        problem = problems.first()
                        cur_question_res = {
                            "problem_id": question_id,
                            "problem": problem.problem
                        }
                        all_question_res.append(cur_question_res)
        if operator:
            ChatsCollectInfoService.create({"contents": problem_desc, "contents_sources": ContentEnums.PROBLEM_SOURCES_CHOICES[0][0]}, operator, all_question_res)
        return True, all_question_res

    @staticmethod
    def query_match(problem_desc):
        question_res = []
        problem_obj = ChatsProblem.objects.filter(problem=problem_desc)
        if problem_obj:
            problem = problem_obj.first()
            question_res.append({
                "problem_id": problem.id,
                "problem": problem_desc,
                "answers": ChatsAnswerInfoService.get_question_aswers(problem.id)
            })
        return question_res

    @staticmethod
    def query_guess(problem_desc, limit=1, keyword_cutoff=0, question_cutoff=0):
        all_question_res = []
        # 使用jieba进行智能分词
        user_keywords = ChatsProblemInfoService.question_cut(problem_desc)
        user_keywords_length = len(user_keywords)
        sql = """
            SELECT k.keyword, pk.problem_id, problem
            FROM chats_keyword k
            JOIN chats_problem_keyword_relation pk ON k.id = pk.keyword_id
            JOIN chats_problem p ON p.id = pk.problem_id
            WHERE p.is_deleted is False AND k.is_deleted is False AND pk.is_deleted is False AND keyword != ''
        """
        problem_list = query_all_dict(sql)
        # redis缓存替代直接访问数据库
        # problem_list = redis_cache.get('chats_problem_keyword')[1]
        # 统计每个问题匹配到的关键字数量

        sql = """
                    SELECT keyword
                    FROM chats_keyword
                    WHERE is_deleted is False AND keyword != ''
                """
        keyword_list = query_all_dict(sql)
        keyword_list = [_["keyword"] for _ in keyword_list]

        tokenized_keywords = [ChatsProblemInfoService.question_cut(keyword) for keyword in keyword_list]
        bm25 = BM25Okapi(tokenized_keywords)
        scores = bm25.get_scores(user_keywords)
        top_indices = np.argsort(-scores)[:user_keywords_length]
        keyword_score = {keyword_list[i]: scores[i] for i in top_indices}

        question_match_score = {}
        for problem in problem_list:
            if problem["keyword"] in keyword_score:
                keyword = problem["keyword"]
                problem_id = problem["problem_id"]
                if keyword_score[keyword] > keyword_cutoff:
                    question_match_score[problem_id] = question_match_score.get(problem_id, 0) + keyword_score[keyword]
        question_match_score = {k: v for k, v in question_match_score.items() if v > question_cutoff}

        # 查询所有问题答案
        if question_match_score:
            # 对问题进行排序，匹配关键字最多的问题优先级最高
            sorted_questions = sorted(question_match_score.items(), key=lambda item: item[1], reverse=False)

            if limit == 1:
                sorted_questions = sorted_questions[:limit]
            else:
                match_questions_ids = []
                # 如果匹配到的关键词数量等于用户输入问题的关键词数量，则优先级最高
                for question_id, match_count in sorted_questions:
                    if match_count == user_keywords_length:
                        match_questions_ids.append(question_id)
                match_questions_ids_length = len(match_questions_ids)
                if match_questions_ids_length == 1:
                    sorted_questions = sorted_questions[:1]
                elif match_questions_ids_length > 1:
                    sorted_questions = sorted_questions[:min(match_questions_ids_length, limit)]
                else:
                    sorted_questions = sorted_questions[:limit]

            # if len(sorted_questions) == 1:
            #     problems = ChatsProblem.objects.filter(id=sorted_questions[0][0])
            #     if problems:
            #         problem = problems.first()
            #         cur_question_res = {
            #             "problem_id": problem.id,
            #             "problem": problem.problem,
            #             "answers": ChatsAnswerInfoService.get_question_aswers(problem.id)
            #         }
            #         all_question_res.append(cur_question_res)
            # else:
            for question_id, match_count in sorted_questions:
                problems = ChatsProblem.objects.filter(id=question_id)
                if problems:
                    problem = problems.first()
                    cur_question_res = {
                        "problem_id": question_id,
                        "problem": problem.problem,
                        "answers": ChatsAnswerInfoService.get_question_aswers(problem.id)
                    }
                    all_question_res.append(cur_question_res)
        return all_question_res

    @staticmethod
    def generate_embeddings(docs):
        rsp = TextEmbedding.call(
            model=TextEmbedding.Models.text_embedding_v2,
            input=docs
        )
        if rsp.output and 'embeddings' in rsp.output and rsp.output['embeddings']:
            embeddings = [record['embedding'] for record in rsp.output['embeddings']]

            # 转换成 NumPy 数组
            embeddings_array = np.array(embeddings)

            # 规范化每个嵌入向量到单位长度
            norms = np.linalg.norm(embeddings_array, axis=1, keepdims=True)
            norms[norms == 0] = 1
            normalized_embeddings = embeddings_array / norms

            return normalized_embeddings if isinstance(docs, list) else normalized_embeddings[0]
        else:
            print("Error: embeddings not found in response: ", rsp)
            return None

    @staticmethod
    def search_relevant_docs(question, threshold=1, limit=1):
        question_embedding = ChatsCheckInfoService.generate_embeddings(question)
        scores, samples = ChatsCheckInfoService.embeddings_dataset.get_nearest_examples(
            "embeddings", question_embedding, k=limit
        )
        result=[]
        references=set()
        for i in range(len(scores)):
            if scores[i] < threshold:
                references.add((samples['doc_id'][i],samples['title'][i]))
                result.append(samples['chunk'][i])
        return result,references

    @staticmethod
    def generate_response(problem_desc,query_res,operator=None):
        reference = None
        messages = [{'role': 'system', 'content': '你是一个T-one（一站式自动化测试平台）社区的智能助手。用户在使用T-one社区时可能碰到一些情况并来咨询你，请帮用户解决问题。答案请使用中文。'}]
        if operator:
            sql = f"""
                        SELECT contents, response
                        FROM chats_collection
                        WHERE creator = {operator}
                        ORDER BY `gmt_created` DESC
                        LIMIT 5;
                    """
            chat_history = query_all_dict(sql)
            for record in reversed(chat_history):
                if record['response']:
                    messages.append({'role': 'user', 'content': record['contents']})
                    messages.append({'role': 'assistant', 'content': record['response']})
        context = ""
        problems=set()
        for query in query_res:
            problems.add(query['problem'])
            context += f"问题: {query['problem']}\n"
            if 'answers' in query:
                for idx, answer in enumerate(query['answers'], start=1):
                    context += f"原因{idx}: {answer['reason']}\n {answer['answer']}\n"
                context += "\n"

        if context:
            if len(query_res)>1:
                prompt = f'''用户对你说：{problem_desc}。
                它可能遇到的问题和对应的原因在<context></context>中：
                <context>
                {context}
                </context>
                请根据以上信息用简洁和专业的话语引导用户说出它遇到的是context中的哪个问题。
                当你输出{problems}中的内容时，请把它放在<problem></problem>中。
                '''
            else:
                prompt = f'''用户对你说：{problem_desc}。
                它可能遇到的问题和对应的原因在<context></context>中：
                <context>
                {context}
                </context>
                先对用户说明他可能遇到什么问题，再根据上述已知信息，简洁和专业的话语来回答用户的问题。
                当你输出{problems}中的内容时，请把它放在<problem></problem>中。
                '''
            response = dashscope.Generation.call(model="qwen-max",
                                         messages=messages,
                                         prompt=prompt,
                                         )
        else:
            docs, ref = ChatsCheckInfoService.search_relevant_docs(problem_desc)

            if docs:
                prompt = f'''请基于```内的内容回答问题。"
                	```
                	{" ".join(docs)}
                	```
                	我的问题是：{problem_desc}。
                    '''
                response = dashscope.Generation.call(model="qwen-max",
                                                     messages=messages,
                                                     prompt=prompt,
                                                     )
                reference = ref
            else:
                messages.append({'role': 'user', 'content': problem_desc})
                response = dashscope.Generation.call(model="qwen-max",
                                                     messages=messages,
                                                     )

        assistant_output = response.output.text
        if operator:
            ChatsCollectInfoService.create({"contents": problem_desc, "contents_sources": ContentEnums.PROBLEM_SOURCES_CHOICES[0][0],'response':assistant_output}, operator)
        output = markdown.markdown(assistant_output)
        # for problem in sorted(problems, key=len, reverse=True):
        #     output = output.replace(problem, f"<problem>{problem}</problem>")
        return {'response':output, 'reference':reference}
'''
    @staticmethod
    def self_check(data, operator):
        job_id = data.get("job_id")
        if not job_id:
            return False, ErrorCode.JOB_NEED.to_api
        if not str(job_id).isdigit():
            return False, ErrorCode.ILLEGALITY_PARAM_ERROR.to_api
        # 权限效验
        job_obj = TestJob.objects.filter(id=job_id, runner_version=2)
        precheck_res = ChatsCheckInfoService.precheck(job_obj, operator)
        if precheck_res:
            return False, precheck_res

        job = job_obj.first()
        all_problem = {
            "system": [],
            "test_prepare": [],
            "run_case": [],
            "test_result": []
        }
        sub_jobs = TestSubJob.objects.filter(job_id=job.id)
        ChatsCheckInfoService.check_system(all_problem, job, sub_jobs)
        ChatsCheckInfoService.check_prepare(all_problem, job, sub_jobs)
        ChatsCheckInfoService.check_runcase(all_problem, job)
        ChatsCheckInfoService.check_result(all_problem, job)
        return True, all_problem

    @staticmethod
    def get_sign_logfile_path(source_path, job_case_id, provider):
        if not source_path:
            return ''
        file_path = source_path.split('.com/')[-1]
        oss_client = alg_oss if provider == 'aligroup' else aly_oss
        try:
            oss_client.update_file_content_type(file_path)
            file_exit = alg_oss.get_sign_url(file_path) \
                if provider == 'aligroup' else aly_oss.get_sign_url(file_path)
            if not file_exit:
                return job_case_id
        except Exception as e:
            return job_case_id

    @staticmethod
    def check_result(all_problem, job):
        sql = """
                    SELECT t1.log_file, t1.job_case_id
                    FROM test_sub_job_step AS t1
                    WHERE t1.name = 'run_case'
                    AND t1.status in ('fail', 'success')
                    AND t1.job_id = %s
                    AND NOT EXISTS (
                        SELECT 1
                        FROM test_sub_job_step AS t2
                        WHERE t2.sub_job_id = t1.sub_job_id
                          AND t2.name IN %s
                          AND t2.status = 'fail'
                      )
                """
        no_log_case_id_list = []
        provider = job.server_provider
        res_list = query_all_dict(sql, [job.id, tuple(PREPARE_STEP_STAGE_MAP.keys())])
        thread_tasks = []
        for res in res_list:
            thread_tasks.append(
                ToneThread(ChatsCheckInfoService.get_sign_logfile_path, (res["log_file"], res["job_case_id"], provider))
            )
            thread_tasks[-1].start()
        for thread_task in thread_tasks:
            thread_task.join()
            job_case_id = thread_task.get_result()
            if job_case_id:
                no_log_case_id_list.append(job_case_id)

        if no_log_case_id_list:
            test_case_name_list = ChatsCheckInfoService.get_test_case_by_job_case_id(no_log_case_id_list)
            influence = f"相同问题的Conf: {test_case_name_list}"
            problem = "日志未上传"
            _, question_res = ChatsCheckInfoService.chats_query({"problem": problem, "limit": 1})
            if question_res:
                answers = [{"reason": i["reason"], "answer": i["answer"]} for i in question_res[0]["answers"]]
                all_problem["test_result"].append(
                    StepContent("error", problem, answers, influence).__dict__)
            else:
                all_problem["test_result"].append(
                    StepContent("error", problem, [], influence).__dict__)

    @staticmethod
    def check_runcase(all_problem, job):
        sql = """
            SELECT t1.result, t1.job_case_id
            FROM test_sub_job_step AS t1
            WHERE t1.name = 'run_case'
            AND t1.status = 'fail'
            AND t1.job_id = %s
            AND t1.result != ''
            AND NOT EXISTS (
                SELECT 1
                FROM test_sub_job_step AS t2
                WHERE t2.sub_job_id = t1.sub_job_id
                  AND t2.name IN %s
                  AND t2.status = 'fail'
              )
        """
        res_list = query_all_dict(sql, [job.id, tuple(PREPARE_STEP_STAGE_MAP.keys())])
        # 统计每个问题影响到的job_case_id
        result_case_id_count = {}
        for res in res_list:
            if res["result"] not in result_case_id_count.keys():
                result_case_id_count[res["result"]] = [res["job_case_id"]]
            else:
                result_case_id_count[res["result"]].append(res["job_case_id"])
        for result, case_id_list in result_case_id_count.items():
            _, question_res = ChatsCheckInfoService.chats_query({"problem": result, "limit": 1})
            test_case_name_list = ChatsCheckInfoService.get_test_case_by_job_case_id(case_id_list)
            influence = f"相同问题的Conf: {test_case_name_list}"
            if question_res:
                answers = [{"reason": i["reason"], "answer": i["answer"]} for i in question_res[0]["answers"]]
                all_problem["run_case"].append(StepContent("error", result, answers, influence).__dict__)
            else:
                all_problem["run_case"].append(StepContent("error", result, [], influence).__dict__)

    @staticmethod
    def check_prepare(all_problem, job, sub_jobs):
        end_sub_jobs = sub_jobs.filter(status__in=["fail", "success", "stop"])
        for end_sub_job in end_sub_jobs:
            running_steps = TestSubJobStep.objects.filter(sub_job_id=end_sub_job.id, status="running")
            ips = get_ip_by_server_key(end_sub_job.server_key)
            if running_steps:
                running_step = running_steps.first()
                suite_name = TestSuite.objects.get_value(id=end_sub_job.suite_id) and TestSuite.objects.get_value(
                    id=end_sub_job.suite_id).name
                cast_name = ""
                if running_step.name == "run_case":
                    test_case_name_list = ChatsCheckInfoService.get_test_case_by_job_case_id([running_step.job_case_id])
                    if test_case_name_list:
                        cast_name = test_case_name_list[0]
                step = cast_name if cast_name else running_step.name
                # sub_job已停止，step未停止，查询step使用的机器ip，提示机器可能未释放
                problem = f"Suite({suite_name})使用机器({ips})的子任务已停止，但{step}仍在执行中，占用的机器可能未释放。"
                answers = [{"reason": f"runner查询数据库或redis状态失败未获取到任务停止的状态，或{step}查询进程被异常终止",
                            "answer": f"请联系开发排查"}]
                influence = f"影响的suite_name: {suite_name}"
                all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)
                continue
            level = "error"
            ip_list = ips.split(",")
            influence = f"ip: {ip_list}"
            preapre_fail_steps = TestSubJobStep.objects.filter(sub_job_id=end_sub_job.id, status="fail",
                                                               name__in=PREPARE_STEP_STAGE_MAP.keys())
            if preapre_fail_steps:
                preapre_fail_step = preapre_fail_steps.first()
                if preapre_fail_step.result:
                    # 通过preapre_fail_step.result报错查询知识库答案
                    _, prepare_question_res = ChatsCheckInfoService.chats_query({"problem": preapre_fail_step.result, "limit": 1})
                    if prepare_question_res:
                        answers = [{"reason": i["reason"], "answer": i["answer"]} for i in
                                   prepare_question_res[0]["answers"]]
                        all_problem["test_prepare"].append(
                            StepContent(level, preapre_fail_step.result, answers, influence).__dict__)
                    else:
                        all_problem["test_prepare"].append(
                            StepContent(level, preapre_fail_step.result, [], influence).__dict__)

    @staticmethod
    def check_system(all_problem, job, sub_jobs):
        ChatsCheckInfoService.check_sub_job(all_problem, job, sub_jobs)

        init_sub_jobs = sub_jobs.filter(status="init")
        ChatsCheckInfoService.check_init_sub_job(all_problem, job, init_sub_jobs)

        pending_sub_jobs = sub_jobs.filter(status="pending")
        ChatsCheckInfoService.check_pending_sub_job(all_problem, job, pending_sub_jobs)

        running_sub_jobs = sub_jobs.filter(status="running")
        ChatsCheckInfoService.check_running_sub_job(all_problem, job, running_sub_jobs)

    @staticmethod
    def check_running_sub_job(all_problem, job, running_sub_jobs):
        STEP_WAIT_RUN_TIMEOUT = 60
        for running_sub_job in running_sub_jobs:
            ips = get_ip_by_server_key(running_sub_job.server_key)
            running_steps = TestSubJobStep.objects.filter(sub_job_id=running_sub_job.id, status="running")
            if running_steps:
                running_step = running_steps.first()
                is_timeout = ChatsCheckInfoService.check_step_run_timeout(running_step, all_problem, ips)
                if is_timeout:
                    continue
            else:
                steps = TestSubJobStep.objects.filter(sub_job_id=running_sub_job.id).order_by("-gmt_modified")
                if steps:
                    last_run_step = steps.first()
                    current_time = timezone.now()
                    time_diff = (current_time - last_run_step.gmt_modified).total_seconds()
                    if time_diff > STEP_WAIT_RUN_TIMEOUT:
                        suite_name = TestSuite.objects.get_value(
                            id=running_sub_job.suite_id) and TestSuite.objects.get_value(
                            id=running_sub_job.suite_id).name
                        # step卡住未调度
                        message = "检查job是否被物理删除；检查v2日志是否数据库异常；检查v2机器监控是否内存耗尽"
                        problem = f"Suite({suite_name})中的机器({ips})执行挂死，未执行后续步骤"
                        answers = [{"reason": f"Suite({suite_name})使用机器({ips})过程中发生异常，未执行后续步骤",
                                    "answer": f"ws_id：{job.ws_id}中job_id: {job.id}使用机器({ips})调度阻塞，请联系开发排查"}]
                        influence = f"影响的suite_name: {suite_name}"
                        all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)

    @staticmethod
    def check_pending_sub_job(all_problem, job, pending_sub_jobs):
        SPEC_RULE = "specific"
        SNAP_RULE = "snapshot"
        TAG_RULE = "tag"
        RAND_RULE = "random"
        for sub_job in pending_sub_jobs:
            suite_name = TestSuite.objects.get_value(
                id=sub_job.suite_id) and TestSuite.objects.get_value(id=sub_job.suite_id).name
            if sub_job.server_key:
                ips = get_ip_by_server_key(sub_job.server_key)
                if sub_job.allocate_rule == SPEC_RULE:
                    is_broken = ChatsCheckInfoService.check_server_key_broken(all_problem, sub_job)
                    if is_broken:
                        continue
                    occupied_obj = ChatsCheckInfoService.check_server_key_is_occupied(sub_job)
                    if occupied_obj:
                        running_steps = TestSubJobStep.objects.filter(sub_job_id=occupied_obj.run_sub_job_id,
                                                                      status="running")
                        if running_steps:
                            running_step = running_steps.first()
                            is_timeout = ChatsCheckInfoService.check_step_run_timeout(running_step, all_problem, ips)
                            if is_timeout:
                                continue
                            problem = f"机器被占用"
                            answers = [{
                               "reason": f"当前Job中Suite({suite_name})指定的机器({ips})正在被Job({running_step.job_id})中的Suite({occupied_obj.suite_name})占用执行中",
                               "answer": f"如果机器异常占用，请联系开发排查"}]
                            influence = f"影响的ip: {ips}"
                            all_problem["system"].append(StepContent("info", problem, answers, influence).__dict__)
                        continue

                    # 检查机器是否被其它排队pending中的sub_job占用
                    server_keys = sub_job.server_key.split(",")
                    occupied_obj = ChatsCheckInfoService.get_redis_occupied_sub_job_id(server_keys)
                    if occupied_obj:
                        problem = f"当前Job中Suite({suite_name})指定的机器({ips})被Job({occupied_obj.run_sub_job.job_id})中的Suite({occupied_obj.suite_name})占用"
                        answers = [
                            {"reason": f"由于机器按照job创建时间顺序分配，Job({occupied_obj.run_sub_job.job_id})使用完成之后当前Job才能使用",
                             "answer": f"如果机器异常占用，请联系开发排查"}]
                        influence = f"影响的ip: {ips}"
                        all_problem["system"].append(StepContent("info", problem, answers, influence).__dict__)
                elif sub_job.allocate_rule == SNAP_RULE:
                    sn = sub_job.server_key.split("_")[3]
                    sn_wait_list = runner_v2_redis_cache.lrange(f'{sn}_waiting_list', 0, -1)
                    sn_wait_sub_job_id_list = [int(sub_job_id) for sub_job_id in sn_wait_list if sub_job_id]
                    if sn_wait_sub_job_id_list and sub_job.id in sn_wait_sub_job_id_list:
                        # 自持有排队中
                        broken_sub_jobs = TestSubJob.objects.filter(machine_broken=1, server_key__icontains=f"_{sn}")
                        if broken_sub_jobs:
                            broken_sub_job = broken_sub_jobs.last()
                            if sub_job.gmt_created < broken_sub_job.gmt_modified:
                                # broken_sub_job.job_id使用自持有机器过程中broken，停止调度，影响sub_job.id执行
                                problem = f"自持有机器({ips})状态Broken，机器停止调度"
                                answers = [
                                    {
                                        "reason": f"当前Job中Suite({suite_name})指定的自持有机器({ips})执行Job({broken_sub_job.job_id})时机器状态Broken，机器({ips})停止调度。",
                                        "answer": f"（1）排查机器Broken详细步骤可在常见问题中搜索'machine disconnected'获取<br/>"
                                                  f"（2）确认机器({ips})状态正常后，使用自持有方式创建任意Job，新Job第一个Suite执行完成后，之前pending中的任务会自动按顺序恢复调度<br/>"
                                                  f"（3）自持有机器由于未添加到机器池，用户将机器状态修复后，T-one无法感知，不能主动恢复调度，建议将机器添加到机器池中使用，详情可联系开发"}]
                                influence = f"影响的ip: {ips}"
                                all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)
            else:
                if sub_job.allocate_rule == TAG_RULE:
                    server_key_list = ChatsCheckInfoService.get_redis_occupied_server(job.ws_id, sub_job.id)
                    if server_key_list:
                        ips = get_ip_by_server_key(",".join(server_key_list))
                        problem = f"机器被占用，正在排队中"
                        answers = [
                            {
                                "reason": f"由于机器按照job创建时间顺序分配，当前Job中Suite({suite_name})指定标签的机器中，机器({ips})正在排队占用中。",
                                "answer": f"可以通过测试结果界面的测试机筛选功能进一步查询机器({ips})正在被那个Job使用中，如果机器运行正常请耐心等待，或执行stop终止占用的Job。"}]
                        influence = f"影响的ip: {ips}"
                        all_problem["system"].append(StepContent("info", problem, answers, influence).__dict__)
                elif sub_job.allocate_rule == RAND_RULE:
                    problem = f"机器被占用，正在排队中"
                    answers = [
                        {
                            "reason": f"当前Job中Suite({suite_name})使用的随机机器无可用机器",
                            "answer": f"以下几种场景机器不会被随机到："
                                      f"（1）机器状态不是Available"
                                      f"（2）随机机器不能使用已添加到集群中的机器"
                                      f"（3）随机机器不能使用云上配置"}]
                    influence = f"影响的suite_name: {suite_name}"
                    all_problem["system"].append(StepContent("info", problem, answers, influence).__dict__)

    @staticmethod
    def check_init_sub_job(all_problem, job, init_sub_jobs):
        # 获取当前时间
        current_time = timezone.now()
        JOB_WAIT_TIMEOUT = 60
        check_job_list = [job.id]
        # 计算时间差（以秒为单位）
        time_diff = (current_time - job.gmt_created).total_seconds()
        if init_sub_jobs and time_diff > JOB_WAIT_TIMEOUT:
            ws_redis_wait_job_list = runner_v2_redis_cache.lrange(f'{job.ws_id}_job_waiting_pool', 0, -1)
            if ws_redis_wait_job_list:
                ws_redis_wait_job_list = [job_id for job_id in ws_redis_wait_job_list]
                job_pool_min_job_id = min([int(value) for value in ws_redis_wait_job_list])
                check_job_list.append(job_pool_min_job_id)

            ws_sub_job_waiting_list = runner_v2_redis_cache.lrange(f'{job.ws_id}_sub_job_waiting_pool', 0, -1)
            if ws_sub_job_waiting_list:
                wait_min_sub_job_id = min([float(value) for value in ws_sub_job_waiting_list])
                min_sub_job_ids = str(wait_min_sub_job_id).split(".")
                if len(min_sub_job_ids) == 2:
                    sub_job_pool_min_job_id = min_sub_job_ids[0]
                    min_sub_job_id = min_sub_job_ids[1]
                    check_job_list.append(int(sub_job_pool_min_job_id))
            wait_min_job_id = min(check_job_list)
            message = "检查job是否被物理删除；检查v2日志是否数据库异常；检查v2机器监控是否内存耗尽"
            problem = f"子任务超过{JOB_WAIT_TIMEOUT}秒未调度"
            answers = [
                {"reason": f"job调度队列在job_id: {wait_min_job_id}处异常阻塞，导致当前job_id：{job.id}未调度", "answer": "请联系开发排查"}]
            influence = f"影响的job_id: {ws_redis_wait_job_list}"
            all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)

    @staticmethod
    def check_sub_job(all_problem, job, sub_jobs):
        if job.state == JobState.PENDING and not sub_jobs:
            problem = "子任务未创建"
            answers = [{"reason": "job数据配置问题或tone和runner通信异常", "answer":"请联系开发排查"}]
            influence = f"job_id: {job}"
            all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)

    @staticmethod
    def precheck(job_obj, operator):
        if not job_obj:
            return ErrorCode.JOB_NOT_RUN_MISSING.to_api
        job = job_obj.first()
        if operator:
            success = ChatsCheckInfoService.check_operator_permission(job.ws_id, operator)
            if not success:
                return ErrorCode.PERMISSION_ERROR.to_api

    @staticmethod
    def check_step_run_timeout(running_step, all_problem, ips):
        cast_name = ""
        step_name = running_step.name
        timeout = 3600
        current_time = timezone.now()
        run_time = (current_time - running_step.start_time).total_seconds()
        if running_step.name == "run_case":
            job_case = TestJobCase.objects.filter(id=running_step.job_case_id)
            if job_case:
                timeout = job_case.first().timeout
                test_case = TestCase.objects.filter(id=job_case.first().test_case_id).first()
                cast_name = test_case.name
                if not timeout:
                    timeout = test_case.timeout
        else:
            step_timeout = STEP_TIMEOUT_DICT.get(running_step.name)
            timeout = step_timeout if step_timeout else timeout
        step = cast_name if cast_name else step_name
        if run_time > timeout:
            problem = f"占用当前job机器({ips})的任务执行超时未结束"
            answers = [
                {"reason": f"job_id: {running_step.job_id}执行{step}已超时仍未结束，占用机器({ips})，影响其它任务调度。", "answer": f"检查机器磁盘空间、系统时间、硬件时间、agent服务状态，或联系开发排查"}]
            influence = f"影响的ip: {ips}"
            all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)
            return True

    @staticmethod
    def get_test_case_by_job_case_id(job_case_ids):
        test_case_ids = TestJobCase.objects.filter(id__in=job_case_ids).values_list("test_case_id", flat=True)
        test_case_name_list = TestCase.objects.filter(id__in=test_case_ids).values_list("name", flat=True)
        return list(test_case_name_list)

    @staticmethod
    def check_server_key_broken(all_problem, sub_job):
        is_broken = False
        server_keys = sub_job.server_key.split(",")
        for key in server_keys:
            servers = get_server(key)
            if servers:
                server = servers.first()
                ip = server.private_ip if isinstance(server, CloudServer) else server.ip
                state = server.state
                if state == "Broken":
                    problem = f"机器状态不可用"
                    answers = [{"reason": f"机器({ip})状态({state})",
                                "answer": f"排查机器Broken详细步骤可在常见问题中搜索'machine disconnected'获取"}]
                    influence = f"影响的ip: {ip}"
                    all_problem["system"].append(StepContent("error", problem, answers, influence).__dict__)
                    is_broken = True
        return is_broken

    @staticmethod
    def check_server_key_is_occupied(sub_job):
        # 检查server_key是否在使用中
        occupied_info = ChatsCheckInfoService.query_server_key_occupied_info(
            sub_job.server_key)
        if occupied_info:
            return occupied_info

        # 检查集群server_key是否被单机使用中
        server_keys = sub_job.server_key.split(",")
        if len(server_keys) >= 2:
            for key in server_keys:
                occupied_info = ChatsCheckInfoService.query_server_key_occupied_info(key)
                if occupied_info:
                    return occupied_info

        # 检查running中的sub_job是否有使用server_key（如：当前pending的sub_job的server_key被集群占用）
        running_sub_jobs = TestSubJob.objects.filter(status="running")
        for running_sub_job in running_sub_jobs:
            if sub_job.server_key in running_sub_job.server_key:
                suite_name = TestSuite.objects.get_value(
                    id=running_sub_job.suite_id) and TestSuite.objects.get_value(
                    id=running_sub_job.suite_id).name
                occupied_info = ServerOccupiedInfo(running_sub_job, suite_name, running_sub_job.id)
                return occupied_info

    @staticmethod
    def query_server_key_occupied_info(server_key):
        run_sub_job = TestSubJob.objects.filter(server_key=server_key, status="running")
        if run_sub_job:
            suite_name = TestSuite.objects.get_value(
                id=run_sub_job.first().suite_id) and TestSuite.objects.get_value(
                id=run_sub_job.first().suite_id).name
            return ServerOccupiedInfo(run_sub_job.first(), suite_name, run_sub_job.first().id)

    @staticmethod
    def get_redis_occupied_sub_job_id(server_keys):
        occupied_sub_job_id = None
        ws_waiting_pool = f'{server_keys[0].split("_")[0]}_waiting_pool'
        ws_waiting_list = runner_v2_redis_cache.lrange(ws_waiting_pool, 0, -1)
        for i in range(len(ws_waiting_list)):
            data = ws_waiting_list[i]
            value = json.loads(data)
            if value["machine_list"]:
                for machines in value["machine_list"]:
                    for machine in machines:
                        if machine["server_key"] in server_keys:
                            occupied_sub_job_id = value["sub_job_id"]
                            break
                    if occupied_sub_job_id:
                        break
                if occupied_sub_job_id:
                    break
        if not occupied_sub_job_id:
            server_key_wait_sub_job_id_list = []
            for server_key in server_keys:
                server_key_wait_list = runner_v2_redis_cache.lrange(f'{server_key}_waiting_list', 0, -1)
                if server_key_wait_list:
                    server_key_wait_sub_job_id_list.extend([int(sub_job_id) for sub_job_id in server_key_wait_list if sub_job_id])
            if server_key_wait_sub_job_id_list:
                occupied_sub_job_id = min(server_key_wait_sub_job_id_list)
        if occupied_sub_job_id:
            occupied_sub_job = TestSubJob.objects.filter(id=occupied_sub_job_id).first()
            suite_name = TestSuite.objects.get_value(
                id=occupied_sub_job.suite_id) and TestSuite.objects.get_value(
                id=occupied_sub_job.suite_id).name
            occupied_info = ServerOccupiedInfo(occupied_sub_job, suite_name, occupied_sub_job.id)
            return occupied_info
        return None

    @staticmethod
    def get_redis_occupied_server(ws_id, sub_job_id):
        server_key_list = []
        ws_waiting_pool = f'{ws_id}_waiting_pool'
        ws_waiting_list = runner_v2_redis_cache.lrange(ws_waiting_pool, 0, -1)
        for i in range(len(ws_waiting_list)):
            data = ws_waiting_list[i]
            value = json.loads(data)
            if sub_job_id == value["sub_job_id"]:
                if value["machine_list"]:
                    for machines in value["machine_list"]:
                        for machine in machines:
                            if machine["is_available"] == False:
                                server_key_list.append(machine["server_key"])
                break
        return server_key_list

    @staticmethod
    def check_operator_permission(ws_id, operator):
        if WorkspaceMember.objects.filter(ws_id=ws_id, user_id=operator):
            return True
        sys_role_id = RoleMember.objects.get(user_id=operator).role_id
        sys_role = Role.objects.get(id=sys_role_id).title
        if sys_role in ['super_admin', 'sys_admin']:
            return True
        return False


class ServerOccupiedInfo:
    def __init__(self, run_sub_job, suite_name=None, run_sub_job_id=None):
        self.run_sub_job = run_sub_job
        self.suite_name = suite_name
        self.run_sub_job_id = run_sub_job_id


class StepContent:
    def __init__(self, level, problem, answers, influence):
        self.level = level
        self.problem = problem
        self.answers = answers
        self.influence = influence
'''