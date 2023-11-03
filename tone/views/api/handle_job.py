from datetime import datetime
from tone.core.common.enums.job_enums import JobState
from tone.models import TestJob
from django.db import transaction
from tone.core.utils.helper import CommResp
from tone.core.common.expection_handler.error_code import ErrorCode
from tone.core.common.expection_handler.error_catch import api_catch_error
from tone.core.common.verify_token import token_required
from tone.core.utils.permission_manage import check_job_operator_permission
from tone.services.job.test_services import operation_after_stop_job


@api_catch_error
@token_required
def stop_job(request):
    job_id = request.GET.get('job_id', None)
    assert job_id, ValueError(ErrorCode.JOB_NEED)
    job_obj = TestJob.objects.filter(id=job_id).first()
    assert job_obj, ValueError(ErrorCode.TEST_JOB_NONEXISTENT)
    if not check_job_operator_permission(request.GET.get('username', None), job_obj):
        assert None, ValueError(ErrorCode.PERMISSION_ERROR)
    resp = CommResp()
    if job_obj.state not in [JobState.PENDING, JobState.PENDING_Q, JobState.RUNNING]:
        assert None, ValueError(ErrorCode.STOP_JOB_ERROR)
    with transaction.atomic():
        TestJob.objects.filter(
            id=job_id,
            state__in=['running', 'pending', 'pending_q']
        ).update(state='stop', end_time=datetime.now())
        operation_after_stop_job(job_obj, 'The job stop by ' + request.GET.get('username', None))
    # v2需单独调用额外接口
    return resp.json_resp()
