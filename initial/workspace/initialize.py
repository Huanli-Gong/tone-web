from django.db import transaction

import uuid
from tone.core.utils.short_uuid import short_uuid
from django_q.models import Schedule
from tone.models import Workspace, User, RoleMember, Role, JobTag
from tone.services.sys.workspace_services import WorkspaceService


class WorkspaceDataInitialize(object):

    def initialize_common_ws(self):
        with transaction.atomic():
            system_user = User.objects.filter(username='system', is_superuser=True).first()
            if not system_user:
                system_user = User.objects.create_user(
                    'system',
                    **{'emp_id': '000000', 'first_name': 'admin', 'last_name': 'tone', 'is_superuser': True,
                       'token': str(uuid.uuid4()).replace('-', '')}
                )
                RoleMember.objects.create(
                    user_id=system_user.id,
                    role_id=Role.objects.get(title='sys_admin').id
                )
            ws_id = short_uuid()
            Workspace.objects.create(
                id=ws_id,
                name='common_workspace',
                show_name='公共workspace',
                is_common=True,
                is_public=True,
                is_approved=True,
                theme_color='#5B8FF9',
                owner=system_user.id,
                creator=system_user.id
            )

            WorkspaceService().add_workspace_relation_data(ws_id, system_user.id, first_init=True)

    def initialize_keep_job_tags(self):
        Schedule.objects.create(
            name='clear_timeout_job',
            func='tone.core.schedule.schedule_job.clear_timeout_job',
            schedule_type=Schedule.MINUTES,
            minutes=60
        )
        for ws in Workspace.objects.all():
            JobTag.objects.create(
                name='keep_three_months',
                source_tag='system_tag',
                ws_id=ws.id,
                description='保留三个月'
            )
            JobTag.objects.create(
                name='keep_six_months',
                source_tag='system_tag',
                ws_id=ws.id,
                description='保留六个月'
            )
            JobTag.objects.create(
                name='keep_one_year',
                source_tag='system_tag',
                ws_id=ws.id,
                description='保留一年'
            )
