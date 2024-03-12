from initial.base_config.script.deploy_agent import DEPLOY_AGENT
from initial.base_config.script.deploy_agent_debian import DEPLOY_AGENT_DEBIAN
from initial.base_config.script.initial_debian import INITIAL_DEBIAN
from initial.base_config.script.install_debian import INSTALL_KERNEL_DEBIAN
from initial.base_config.script.install_rpm_debian import INSTALL_RPM_DEBIAN
from initial.base_config.script.prepare_debian import PREPARE_DEBIAN
from initial.base_config.script.reboot import REBOOT
from initial.base_config.script.run_test_debian import RUN_TEST_DEBIAN
from initial.base_config.script.ssh_pub_key import SSH_PUB_KEY
from initial.base_config.script.initial import INITIAL
from initial.base_config.script.install import INSTALL_KERNEL
from initial.base_config.script.install_rpm import INSTALL_RPM
from initial.base_config.script.install_hotfix import INSTALL_HOTFIX
from initial.base_config.script.prepare import PREPARE
from initial.base_config.script.run_test import RUN_TEST
from initial.base_config.script.upload import UPLOAD
from initial.base_config.script.upload_file import UPLOAD_FILE
from tone.core.utils.config_parser import cp

BASE_CONFIG_DATA = [
    {
        'config_type': 'sys',
        'config_key': 'TEST_FRAMEWORK',
        'config_value': 'tone',
        'description': '默认测试框架',
    },
    {
        'config_type': 'sys',
        'config_key': 'WHITE_LIST',
        'config_value': """/api/job/create/,
/api/job/query/,
/api/job/send_completed_msg/,
/api/sys/upload/,
/api/auth/logout/,
/api/auth/re_login/,
/api/auth/ws_admin/,
/api/job/test/summary/,
/api/auth/personal_center/
        """,
        'description': 'api接口白名单',
    },

    # script
    {
        'config_type': 'script',
        'config_key': 'REBOOT',
        'config_value': REBOOT,
        'bind_stage': 'reboot',
        'description': '重启脚本。作用：重启测试机。使用场景：选择重启步骤的时候会调用该脚本。',
    },
    {
        'config_type': 'script',
        'config_key': 'SSH_PUB_KEY',
        'config_value': SSH_PUB_KEY,
        'bind_stage': 'ssh_pub_key',
        'description': '集群测试时免密登录脚本。作用：给集群机器做免密。使用场景：集群测试 prepare 步骤之前。',
    },
    {
        'config_type': 'script',
        'config_key': 'INITIAL',
        'config_value': INITIAL,
        'bind_stage': 'initial',
        'description': '初始化机器脚本。作用：初始化环境，清理安装包。使用场景：安装内核之前。',
    },
    {
        'config_type': 'script',
        'config_key': 'INSTALL_KERNEL',
        'config_value': INSTALL_KERNEL,
        'bind_stage': 'install_kernel',
        'description': '安装内核脚本。作用：安装内核。使用场景：选择安装内核包时。',
    },
    {
        'config_type': 'script',
        'config_key': 'INSTALL_RPM',
        'config_value': INSTALL_RPM,
        'bind_stage': 'install_rpm',
        'description': '安装RPM脚本。作用：安装RPM包。使用场景：选择安装RPM时。',
    },
    {
        'config_type': 'script',
        'config_key': 'INSTALL_HOTFIX',
        'config_value': INSTALL_HOTFIX,
        'bind_stage': 'install_hotfix',
        'description': '安装HOTFIX脚本。作用：安装hotfix脚本。使用场景：选择安装hotfix时。',
    },
    {
        'config_type': 'script',
        'config_key': 'PREPARE',
        'config_value': PREPARE,
        'bind_stage': 'prepare',
        'description': '准备阶段脚本。作用：clone tone仓库脚本，安装tone及其依赖包。使用场景：执行测试用例之前。',
    },
    {
        'config_type': 'script',
        'config_key': 'RUN_TEST',
        'config_value': RUN_TEST.format(
            tone_storage_host=cp.get('tone_storage_domain'),
            tone_storage_sftp_port=cp.get('tone_storage_sftp_port'),
            tone_storage_proxy_port=cp.get('tone_storage_proxy_port'),
            tone_storage_user=cp.get('tone_storage_user'),
            tone_storage_password=cp.get('tone_storage_password')
        ),
        'bind_stage': 'run_test',
        'description': '执行用例阶段脚本。作用：安装用例，执行用例，上传测试结果及测试日志。使用场景：执行用例时。',
    },
    {
        'config_type': 'script',
        'config_key': 'UPLOAD',
        'config_value': UPLOAD.format(
            tone_storage_host=cp.get('tone_storage_domain'),
            tone_storage_sftp_port=cp.get('tone_storage_sftp_port'),
            tone_storage_proxy_port=cp.get('tone_storage_proxy_port'),
            tone_storage_user=cp.get('tone_storage_user'),
            tone_storage_password=cp.get('tone_storage_password')
        ),
        'bind_stage': 'upload',
        'description': '上传脚本。作用：上传日志。使用场景，执行用例失败时。',
    },
    {
        'config_type': 'script',
        'config_key': 'DEPLOY_AGENT',
        'config_value': DEPLOY_AGENT,
        'bind_stage': '',
        'description': '部署toneagent的脚本。作用：部署toneagent。使用场景：使用弹性机器配置创建机器实例时。',
    },
    {
        'config_type': 'script',
        'config_key': 'DEPLOY_AGENT_DEBIAN',
        'config_value': DEPLOY_AGENT_DEBIAN,
        'bind_stage': '',
        'description': 'Debian系统部署toneagent的脚本。作用：部署toneagent。使用场景：使用弹性机器配置创建机器实例时。',
    },
    {
        'config_type': 'script',
        'config_key': 'INITIAL_DEBIAN',
        'config_value': INITIAL_DEBIAN,
        'bind_stage': '',
        'description': 'Debian系统initial脚本。初始化机器脚本。作用：初始化环境，清理安装包。使用场景：安装内核之前。',
    },
    {
        'config_type': 'script',
        'config_key': 'INSTALL_KERNEL_DEBIAN',
        'config_value': INSTALL_KERNEL_DEBIAN,
        'bind_stage': '',
        'description': 'Debian系统安装内核脚本。作用：安装内核。使用场景：选择安装内核包时。',
    },
    {
        'config_type': 'script',
        'config_key': 'INSTALL_RPM_DEBIAN',
        'config_value': INSTALL_RPM_DEBIAN,
        'bind_stage': '',
        'description': 'Debian系统安装RPM脚本。作用：安装RPM包。使用场景：选择安装RPM时。',
    },
    {
        'config_type': 'script',
        'config_key': 'PREPARE_DEBIAN',
        'config_value': PREPARE_DEBIAN,
        'bind_stage': '',
        'description': 'Debian系统准备阶段脚本。作用：clone tone仓库脚本，安装tone及其依赖包。使用场景：执行测试用例之前。',
    },
    {
        'config_type': 'script',
        'config_key': 'RUN_TEST_DEBIAN',
        'config_value': RUN_TEST_DEBIAN.format(
            tone_storage_host=cp.get('tone_storage_domain'),
            tone_storage_sftp_port=cp.get('tone_storage_sftp_port'),
            tone_storage_proxy_port=cp.get('tone_storage_proxy_port'),
            tone_storage_user=cp.get('tone_storage_user'),
            tone_storage_password=cp.get('tone_storage_password')
        ),
        'bind_stage': '',
        'description': 'Debian系统执行用例阶段脚本。作用：安装用例，执行用例，上传测试结果及测试日志。使用场景：执行用例时。',
    },
    {
        'config_type': 'script',
        'config_key': 'UPLOAD_FILE',
        'config_value': UPLOAD_FILE.format(
            tone_storage_host=cp.get('tone_storage_domain'),
            tone_storage_sftp_port=cp.get('tone_storage_sftp_port'),
            tone_storage_proxy_port=cp.get('tone_storage_proxy_port'),
            tone_storage_user=cp.get('tone_storage_user'),
            tone_storage_password=cp.get('tone_storage_password')
        ),
        'bind_stage': 'upload',
        'description': '上传日志文件脚本。作用：上传准备阶段的执行日志。使用场景：准备步骤执行后。',
    },
]
