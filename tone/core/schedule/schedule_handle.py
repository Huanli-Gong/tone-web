import logging

import arrow
from croniter import croniter
from django_q.models import Schedule

from tone.core.schedule.schedule_job import ScheduleJob
from tone.core.utils.date_util import localtime
from tone.models import TestPlan
from tone.models.plan.schedule_models import ScheduleMap

logger = logging.getLogger('test_plan')


class ScheduleHandle(ScheduleJob):
    PLAN_SCHEDULE_FUNC = 'tone.core.schedule.schedule_job.TestPlanScheduleJob.run'

    @classmethod
    def add_crontab_job(cls, job_function, expression, args=None, name=None):
        schedule_job = Schedule.objects.create(
            func=job_function,
            schedule_type=Schedule.CRON,
            cron=expression,
            args=args,
            name=name,
            next_run=cls.get_next_run_time(expression)
        )
        ScheduleMap.objects.create(schedule_job_id=schedule_job.id, object_id=int(args))
        return schedule_job

    @classmethod
    def pause_job(cls, schedule_job_id=None, obj_id=None, obj_type='plan'):
        if not schedule_job_id and obj_id:
            schedule_job_id = ScheduleMap.objects.get(object_type=obj_type, object_id=obj_id).schedule_job_id
        Schedule.objects.filter(id=schedule_job_id).update(cron=None, next_run=None)

    @classmethod
    def resume_job(cls, schedule_job_id=None, obj_id=None, obj_type='plan'):
        plan = TestPlan.objects.get(id=obj_id)
        if not schedule_job_id and obj_id:
            # 如果Schedule不存在则创建
            schedule = Schedule.objects.filter(args=str(plan.id)) .first()
            if not schedule:
                cls.add_crontab_job(
                    cls.PLAN_SCHEDULE_FUNC,
                    plan.cron_info,
                    args=str(plan.id),
                    name=plan.name
                )
            else:
                schedule.cron = plan.cron_info
                if not schedule.next_run:
                    schedule.next_run = cls.get_next_run_time(plan.cron_info)
                schedule.save()
                ScheduleMap.objects.get_or_create(
                    schedule_job_id=schedule.id,
                    object_type='plan',
                    object_id=plan.id
                )

    @classmethod
    def remove_job(cls, schedule_job_id=None, obj_id=None, obj_type='plan'):
        if not schedule_job_id and obj_id:
            schedule_job_id = ScheduleMap.objects.get(object_type=obj_type, object_id=obj_id).schedule_job_id
        if str(schedule_job_id).isdigit():
            Schedule.objects.filter(id=schedule_job_id).delete()
        ScheduleMap.objects.filter(schedule_job_id=schedule_job_id, object_id=obj_id).delete(really_delete=True)

    @classmethod
    def get_next_run_time(cls, cron_exp):
        next_run = arrow.get(
            croniter(cron_exp, localtime()).get_next()
        )
        return next_run.strftime('%Y-%m-%d %X')
