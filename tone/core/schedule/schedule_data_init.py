from django_q.models import Schedule


def init_comm_schedule():
    Schedule.objects.create(
        name='send_message',
        func='tone.services.notice.core.notice_service.send_message',
        schedule_type=Schedule.MINUTES,
        minutes=2
    )
    Schedule.objects.create(
        name='auto_release_server',
        func='tone.services.sys.server_services.auto_release_server',
        schedule_type=Schedule.MINUTES,
        minutes=30
    )
    Schedule.objects.create(
        name='calculate_benchmark_data',
        func='tone.services.sys.dashboard_services.calculate_benchmark_data',
        schedule_type=Schedule.MINUTES,
        minutes=5
    )
    Schedule.objects.create(
        name='auto_job_report',
        func='tone.core.schedule.schedule_job.auto_job_report',
        schedule_type=Schedule.MINUTES,
        minutes=10
    )
    Schedule.objects.create(
        name='auto_plan_report',
        func='tone.core.schedule.schedule_job.auto_plan_report',
        schedule_type=Schedule.MINUTES,
        minutes=15
    )


def init_plan_schedule(ws_id=None):
    from tone.models import TestPlan
    from tone.models import ScheduleMap
    from tone.services.plan.plan_services import PlanScheduleService
    if ws_id:
        plans = TestPlan.objects.filter(ws_id=ws_id, cron_schedule=True, enable=True, cron_info__isnull=False)
    else:
        plans = TestPlan.objects.filter(cron_schedule=True, enable=True, cron_info__isnull=False)
    for plan in plans:
        ScheduleMap.objects.filter(object_id=plan.id).delete()
        PlanScheduleService().add_plan_to_schedule(plan.id)
