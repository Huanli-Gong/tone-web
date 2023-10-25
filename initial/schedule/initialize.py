from django_q.models import Schedule


def init_schedule():
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
        minutes=5
    )
    Schedule.objects.create(
        name='auto_plan_report',
        func='tone.core.schedule.schedule_job.auto_plan_report',
        schedule_type=Schedule.MINUTES,
        minutes=10
    )
