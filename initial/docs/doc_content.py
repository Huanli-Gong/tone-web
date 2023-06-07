OVERVIEW_DOC = """<h3>T- One是什么</h3><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">T-One（testing in one）是一站式、全场景的质量协作平台，通过它可以解决大型软件的各类测试问题。</span></p><p></p><h3><strong>平台架构</strong></h3><p><img src="https://anolis.gitee.io/anolis_features/materials/imgs/dev_infra/t-one/t-one.jpg" alt="T-One平台架构图"></p><h3><strong>核心特点</strong></h3><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">T-One主要有下面三方面的优势：</span></p><ol><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">提供全场景的测试能力</span></p><ul><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">支持多CPU混合架构（x86、arm、loongarch64、risc-v）；</span></p></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">支持多操作系统类型（龙蜥、centos、debian、ubuntu、统信、麒麟）；</span></p></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">支持复杂环境测试（企业内网、网络隔离环境、弹性云虚拟机/容器、应用集群及多种混合环境）。</span></p></li></ul></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">提供一站式的测试支持，打通了从环境部署，测试执行、测试分析、测试计划、测试报告等整个测试流程闭环：</span></p><ul><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">基线跟踪模型：聚合型基线模型、测试指标跟踪模式；</span></p></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">分析及报告：时序分析、对比分析等分析能力；灵活定制测试报告；</span></p></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">可快速搭建CI流程；自定义测试计划。</span></p></li></ul></li><li><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">高效的质量协作模式，通过独立租户空间、离线模式和独立部署，充分解决测试协作问题。</span></p></li></ol><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">T-One经历多年迭代开发，累计运行时长超过930万小时；目前集成了各领域、各类型120多种业界主流benchmark，3000+测试套件。</span></p><p></p><h3><strong>应用场景</strong></h3><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">T-One支撑了龙蜥社区的所有测试活动，包括版本测试、软件包CI测试、镜像nightly测试等等。在相关评测中提升测试效率，提升测试效率30倍以上。</span></p><p><span style="color: rgb(51, 51, 51); font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px">T-One不仅应用于产品研发过程中的质量保障，还可以作为测评项目的测试平台使用。同时支持了40多个项目的质量协同以及数百台测试机器并发执行。服务龙蜥社区，被包括统信、电子五所、云原生、浪潮信息、高性能网络、中科曙光等多家企业、机构的十多个项目采用。</span></p><h3></h3><h3></h3><h3></h3>"""

API_DOC = """
<h1><span style="color: rgb(0, 0, 0)">接口说明</span></h1><h2><span style="color: rgb(0, 0, 0)">1. 创建Job</span></h2><ul><li><p><span style="color: rgb(0, 0, 0)">接口说明：创建T-One测试job</span></p></li><li><p><span style="color: rgb(0, 0, 0)">url: </span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="http://xn--{}-nn6cx8lt65aqf6b/api/[task_create/task_query/task_delete]">http://{请求域名}</a><span style="color: rgb(24, 144, 255)">/api/job/create/</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求方式：POST</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求参数：</span></p></li></ul><table><tbody><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数名</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数类型</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是否必须</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">示例值</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">描述</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">username</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">yfh</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用户username</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">signature</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">d2IteWZoNjY2MzgzfG9KZEM3Z3I4TUZFRGFCMHlMYzJLa3R4aFNUc05xR1d3fDE2MDgxNzM5ODIuODEzOTA2Mg==</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">签名。详细描述见【签名说明】</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">workspace</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">tone-ws</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">workspace名称（是名字，不是显示名称）</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">template</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">nightly-4.19</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">job模板名称</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">job_type</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">未传template下必须传</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">自定义功能测试</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">job类型的名称</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">name</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">yfh_test</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">job名，不传为默认值</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">project</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">tone</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">项目，不传为默认值</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">need_reboot</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">int</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">1</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">传0（不重启，默认）和1（重启）</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">console</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">int</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">0</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">传0（不设置控制台，默认）和1（设置）</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">baseline</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">集团功能基线</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">基线，不传为默认值</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">kernel_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">object</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">见备注kernel_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">内核信息</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">script_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">array</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">见备注script_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">脚本信息</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">rpm_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">array</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">见备注rpm_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">rpm包信息</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">cleanup_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">echo cleanup</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">清理脚本</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">notice_subject</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">test</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">通知主题</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">email</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="mailto:xxx@alibaba-inc.com"><span style="color: rgb(38, 38, 38)">xxx@alibaba-inc.com</span></a></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">邮箱地址</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ding_token</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">fcce4fcfdb8276726953b9</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">钉钉token</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">callback_api</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><a target="_blank" rel="noopener noreferrer nofollow" href="http://xxx.api"><span style="color: rgb(0, 0, 0)">http://xxx.api</span></a></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">回调接口</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">env_info</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">a=1</span></p><p><span style="color: rgb(0, 0, 0)">b=2</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">全局变量</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">env_ifs</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">"\n"</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">指定全局变量的分割符</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">tag</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">tag1,tag2,tag3</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">job标签</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">test_config</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">array</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">未传template下必须传</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">见备注test_config</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用例配置</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(38, 38, 38)">default_server</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str / object</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">否</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">a.指定机器池机器场景："127.0.0.1"</span></p><p><span style="color: rgb(0, 0, 0)">b.指定未在机器池指定机器：</span></p><p><span style="color: rgb(0, 0, 0)">{</span></p><p><span style="color: rgb(0, 0, 0)">'custom_ip': '127.0.0.1', 'custom_channel': 'staragent'</span></p><p><span style="color: rgb(0, 0, 0)">}</span></p><p><span style="color: rgb(0, 0, 0)">c.云上机器实例场景："</span></p><p><span style="color: rgba(0, 0, 0, 0.85)">132.168.1.2</span><span style="color: rgb(0, 0, 0)"><br>"</span></p><p><span style="color: rgb(0, 0, 0)">d.指定云上机器配置场景："</span></p><p><span style="color: rgba(0, 0, 0, 0.85)">cloud_server_config_1</span><span style="color: rgb(0, 0, 0)"><br>"</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">如果机器在机器池只需要传机器ip；如果是自持机器，需要传一个包含custom_ip、custom_channel的键值对对象；这个字段指定的机器会覆盖掉所有case配置的机器</span></p></td></tr></tbody></table><ul><li><p><strong><span style="color: rgb(0, 0, 0)">字段说明</span></strong></p></li><li><p><span style="color: rgb(0, 0, 0)">kernel_info:</span></p></li></ul><pre><code>安装场景：
1、已发布场景
'kernel_id': 10,
'kernel_info': {
    "hotfix": False,
    "scripts": [
        {"pos": "before", "script": "echo before"}, 
        {"pos": "after", "script": "echo after"}
    ]
}
2、未发布场景
（1）rpm包数量小于等于3个时
'kernel_info': {
    "kernel": "http://xxx_kernel.rpm",
    "devel": "http://xxx_devel.rpm",
    "headers": "xxx_headers.rpm",
    "hotfix_install": False,
    "scripts": [
        {"pos": "before", "script": "echo before"}, 
        {"pos": "after", "script": "echo after"}
    ]
}
（2）rpm包数量大于等于3个时，参数kernel_packages中第一个rpm包必须是内核包
'kernel_info': {
    "kernel_packages": [
        "http://xxx.kernel-3.10.0-327.alios7.x86_64.rpm",
        "http://xxx.kernel-devel-3.10.0-327.alios7.x86_64.rpm",
        "http://xxx.kernel-headers-3.10.0-327.alios7.x86_64.rpm",
        "http://xxx.kernel-***-3.10.0-327.alios7.x86_64.rpm"
    ]
    "hotfix_install": False,
    "scripts": [
        {"pos": "before", "script": "echo before"}, 
        {"pos": "after", "script": "echo after"}
    ]
}</code></pre><p></p><ul><li><p><span style="color: rgb(0, 0, 0)">script_info:</span></p></li></ul><pre><code>script_info: [
    {"pos": "before", "script": "echo before"},  # pos表示执行时机，script表示脚本内容
    {"pos": "after", "script": "echo after"}
]</code></pre><ul><li><p><span style="color: rgb(0, 0, 0)">rpm_info:</span></p></li></ul><pre><code>rpm_info: [
    {"pos": "before", "rpm": "xxx.rpm"}, # pos表示执行时机，rpm表示rpm包
    {"pos": "after", "rpm": "xxx.rpm"}
]</code></pre><ul><li><p><span style="color: rgb(0, 0, 0)">notice_info:</span></p></li></ul><p><span style="color: rgb(0, 0, 0)"><br></span></p><ul><li><p><span style="color: rgb(0, 0, 0)">test_config:</span></p></li></ul><pre><code>test_config:[
    {
        'test_suite': 'ltp',  # test_suite  名称
        'setup_info': "echo before1",  # test_suite 执行前脚本
        'need_reboot': False,  # 重启
        'console': False,
        'cleanup_info': "echo after1",  # 重启后脚本
        'priority': 10,  # 执行优先级
        'cases': [
            {
                'test_case': 'ltp-all', # test _conf 名称
                'setup_info': "echo before1",  # test conf执行前脚本
                'cleanup_info': "echo after1",  # test conf执行后脚本
                'repeat': 3,
                'server': {'ip': '1.2.3.1'}  # 非必传
                # 'server': {'tag': 'alinux2'}  # 非必传
                'need_reboot': False,  # 重启
                'console': False,
                'priority': 10,
                'env_info': 'A=1, B=2',  # 变量
            },
        ],
    },
]</code></pre><p></p><h2><span style="color: rgb(0, 0, 0)">2. 查询Job</span></h2><ul><li><p><span style="color: rgb(0, 0, 0)">接口说明：用于查询一个job的详细信息</span></p></li><li><p><span style="color: rgb(0, 0, 0)">接口url: </span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="http://xn--{}-nn6cx8lt65aqf6b/api/[task_create/task_query/task_delete]">http://{请求域名}</a><span style="color: rgb(24, 144, 255)">/api/job/query/</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求方式：POST</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求参数</span></p></li></ul><table><tbody><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数名</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数类型</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是否必须</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">示例值</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">描述</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">username</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">user1</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用户username</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">signature</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">d2IteWZoNjY2MzgzfG9KZEM3Z3I4TUZFRGFCMHlMYzJLa3R4aFNUc05xR1d3fDE2MDgxNzM5ODIuODEzOTA2Mg==</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">签名，规则建获取签名</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">job_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">int</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">6379</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">查询job的id</span></p></td></tr></tbody></table><ul><li><p><span style="color: rgb(0, 0, 0)">返回数据：</span></p></li><li><p><span style="color: rgb(0, 0, 0)">功能测试任务</span></p></li></ul><pre><code>{
    "success": true,
    "msg": "ok",
    "data": {
        "job_id": 3524,
        "job_state": "success",
        "test_type": "functional",
        "result_statistics": {
            "success": 33,
            "fail": 5,
            "skip": 0,
            "total": 38
        },
        "job_result": [
            {
                "test_suite": "demo_echo",
                "test_case": "default",
                "result_statistics": {
                    "total": 1,
                    "success": 1,
                    "fail": 0,
                    "skip": 0
                },
                "case_server": {
                    "config_server": "随机",
                    "server_provider": "aliyun",
                    "is_instance": false,
                    "run_server": "1.1.2.3"
                },
                "case_state": "success"
            },
            {
                "test_suite": "perf-sanity-tests",
                "test_case": "default",
                "result_statistics": {
                    "total": 35,
                    "success": 32,
                    "fail": 3,
                    "skip": 0
                },
                "case_server": {
                    "config_server": "随机",
                    "server_provider": "aliyun",
                    "is_instance": false,
                    "run_server": "1.1.2.3"
                },
                "case_state": "fail"
            }
        ]
    },
    "code": 200
}</code></pre><ul><li><p><span style="color: rgb(0, 0, 0)">性能测试任务</span></p></li></ul><pre><code>{
    "success": true,
    "msg": "ok",
    "data": {
        "job_id": 3525,
        "job_state": "success",
        "test_type": "performance",
        "result_statistics": {
            "increase": 0,
            "decline": 0,
            "normal": 0,
            "invalid": 0,
            "na": 3,
            "total": 3
        },
        "job_result": [
            {
                "test_suite": "unixbench",
                "test_case": "whetstone-double-1-30",
                "result_statistics": {
                    "increase": 0,
                    "decline": 0,
                    "normal": 0,
                    "invalid": 0,
                    "na": 1,
                    "total": 1
                },
                "case_server": {
                    "config_server": "随机",
                    "server_provider": "aliyun",
                    "is_instance": false,
                    "run_server": "1.1.2.3"
                },
                "case_result": [
                    {
                        "metric": "score",
                        "test_value": "817.96",
                        "cv_value": "±0.02%",
                        "max_value": "818.2",
                        "min_value": "817.8",
                        "value_list": [
                            818.2,
                            817.8,
                            817.9
                        ],
                        "baseline_value": null,
                        "compare_result": null,
                        "track_result": "na"
                    }
                ],
                "case_state": "complete"
            }
        ]
    },
    "code": 200
}</code></pre><ul><li><p><span style="color: rgb(0, 0, 0)">字段说明</span></p></li><li><p><span style="color: rgb(0, 0, 0)">job_state（任务状态）</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">pending 队列中</span></p></li><li><p><span style="color: rgb(0, 0, 0)">running 运行中</span></p></li><li><p><span style="color: rgb(0, 0, 0)">success 执行成功</span></p></li><li><p><span style="color: rgb(0, 0, 0)">fail 执行失败</span></p></li><li><p><span style="color: rgb(0, 0, 0)">stop 被终止</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">case_state(case状态)</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">pengding 队列中</span></p></li><li><p><span style="color: rgb(0, 0, 0)">running 运行中</span></p></li><li><p><span style="color: rgb(0, 0, 0)">complete 已完成（性能测试case）</span></p></li><li><p><span style="color: rgb(0, 0, 0)">success 成功 （功能测试case）</span></p></li><li><p><span style="color: rgb(0, 0, 0)">fail 失败 （功能测试case）</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">test_type(测试类型)</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">functional 功能测试</span></p></li><li><p><span style="color: rgb(0, 0, 0)">performance 性能测试</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">result_statistics(结果统计)</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">功能测试：</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">total 总数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">success 成功数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">fail 失败数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">skip 跳过数</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">性能测试</span></p></li></ul><ul><li><p><span style="color: rgb(0, 0, 0)">total: 总数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">increase： 上升case数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">decline：下降case数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">normal：正常范围数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">invalid：无效case数</span></p></li><li><p><span style="color: rgb(0, 0, 0)">na：没有对比基线</span></p></li></ul><h2><span style="color: rgb(0, 0, 0)">3.查询suite列表</span></h2><ul><li><p><span style="color: rgb(0, 0, 0)">接口说明：用于查询workspace下的suite的列表数据</span></p></li><li><p><span style="color: rgb(0, 0, 0)">接口url: </span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="http://xn--{}-nn6cx8lt65aqf6b/api/[task_create/task_query/task_delete]">http://{请求域名}</a><span style="color: rgb(24, 144, 255)">/api/</span><span style="color: rgb(0, 0, 0)">case/get_suite_list</span><span style="color: rgb(24, 144, 255)">/</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求方式：GET</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求参数</span></p></li></ul><table><tbody><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数名</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数类型</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是否必须</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">示例值</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">描述</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">username</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">user1</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用户username</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">signature</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">d2IteWZoNjY2MzgzfG9KZEM3Z3I4TUZFRGFCMHlMYzJLa3R4aFNUc05xR1d3fDE2MDgxNzM5ODIuODEzOTA2Mg==</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">签名，规则建获取签名</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">workspace</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">perfanalytics</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间名称</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">test_type</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">performance</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">测试类型performance/</span><strong><span style="color: rgb(0, 128, 128)">functional</span></strong></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ws_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ljzgl0mc</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间id</span></p></td></tr></tbody></table><p><span style="color: rgb(0, 0, 0)"><br></span></p><ul><li><p><span style="color: rgb(0, 0, 0)">返回数据：</span></p></li></ul><pre><code>{
    "success": true,
    "msg": "ok",
    "data": [
        {
            "id": 78,
            "name": "perf-bench",
            "certificated": true,
            "add_state": 0,
            "case_count": 14
        },
        {
            "id": 687,
            "name": "kbuild",
            "certificated": true,
            "add_state": 0,
            "case_count": 4
        },
        {
            "id": 688,
            "name": "will-it-scale",
            "certificated": true,
            "add_state": 0,
            "case_count": 58
        },
        {
            "id": 866,
            "name": "sysbench-mysql",
            "certificated": false,
            "add_state": 0,
            "case_count": 68
        }
    ],
    "code": 200
}</code></pre><h2><span style="color: rgb(0, 0, 0)">4.查询case列表</span></h2><ul><li><p><span style="color: rgb(0, 0, 0)">接口说明：用于查询workspace下的suite的列表数据</span></p></li><li><p><span style="color: rgb(0, 0, 0)">接口url: </span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="http://xn--{}-nn6cx8lt65aqf6b/api/[task_create/task_query/task_delete]">http://{请求域名}</a><span style="color: rgb(24, 144, 255)">/api/</span><span style="color: rgb(0, 0, 0)">case/get_case_list</span><span style="color: rgb(24, 144, 255)">/</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求方式：GET</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求参数</span></p></li></ul><table><tbody><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数名</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数类型</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是否必须</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">示例值</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">描述</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">username</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">user1</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用户username</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">signature</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">d2IteWZoNjY2MzgzfG9KZEM3Z3I4TUZFRGFCMHlMYzJLa3R4aFNUc05xR1d3fDE2MDgxNzM5ODIuODEzOTA2Mg==</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">签名，规则建获取签名</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">workspace</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">perfanalytics</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间名称</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">suite_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">int</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">78</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">test suite id</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ws_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ljzgl0mc</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间id</span></p></td></tr></tbody></table><p><span style="color: rgb(0, 0, 0)"><br></span></p><ul><li><p><span style="color: rgb(0, 0, 0)">返回数据：</span></p></li></ul><pre><code>{
  "success": true,
  "msg": "ok",
  "data": [
    {
      "id": 1551,
      "name": "sched-messaging-100%",
      "metric_count": 1
    },
    {
      "id": 1552,
      "name": "sched-messaging-200%",
      "metric_count": 1
    },
    {
      "id": 1553,
      "name": "sched-messaging-400%",
      "metric_count": 1
    },
    {
      "id": 1554,
      "name": "sched-pipe",
      "metric_count": 2
    },
    {
      "id": 4210,
      "name": "epoll-wait-100%",
      "metric_count": 2
    },
    {
      "id": 4211,
      "name": "epoll-ctl-100%",
      "metric_count": 1
    }
  ],
  "code": 200
}</code></pre><h2><span style="color: rgb(0, 0, 0)">5.查询metric列表</span></h2><ul><li><p><span style="color: rgb(0, 0, 0)">接口说明：用于查询workspace下的suite的列表数据</span></p></li><li><p><span style="color: rgb(0, 0, 0)">接口url: </span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="http://xn--{}-nn6cx8lt65aqf6b/api/[task_create/task_query/task_delete]">http://{请求域名}</a><span style="color: rgb(24, 144, 255)">/api/</span><span style="color: rgb(0, 0, 0)">case/get_metric_list</span><span style="color: rgb(24, 144, 255)">/</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求方式：GET</span></p></li><li><p><span style="color: rgb(0, 0, 0)">请求参数</span></p></li></ul><table><tbody><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数名</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">参数类型</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是否必须</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">示例值</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">描述</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">username</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">user1</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">用户username</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">signature</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">d2IteWZoNjY2MzgzfG9KZEM3Z3I4TUZFRGFCMHlMYzJLa3R4aFNUc05xR1d3fDE2MDgxNzM5ODIuODEzOTA2Mg==</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">签名，规则建获取签名</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">workspace</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">perfanalytics</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间名称</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">case_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">int</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">1554</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">test case id</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ws_id</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">str</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">是</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">ljzgl0mc</span></p></td><td colspan="1" rowspan="1"><p><span style="color: rgb(0, 0, 0)">工作空间id</span></p></td></tr></tbody></table><p><span style="color: rgb(0, 0, 0)"><br></span></p><ul><li><p><span style="color: rgb(0, 0, 0)">返回数据：</span></p></li></ul><pre><code>{
  "success": true,
  "msg": "ok",
  "data": [
    {
      "id": 2887,
      "name": "threads_mode"
    },
    {
      "id": 2888,
      "name": "process_mode"
    }
  ],
  "code": 200
}</code></pre><h1>签名说明</h1><h2><span style="color: rgb(0, 0, 0)">1. 获取token</span></h2><p><span style="color: rgb(0, 0, 0)">从系统右上角个人主页进入Token配置栏，查看配置，拷贝token</span></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/8589/1643176599758-9bd80aa4-e053-47c7-bed4-ed48ef1487f0.png"></p><h2><span style="color: rgb(0, 0, 0)">2.计算签名</span></h2><p><span style="color: rgb(0, 0, 0)">签名规则：</span></p><p><span style="color: rgb(0, 0, 0)">1.username、token、timestamp 用'|'拼接后base64加密后获得signature</span></p><p><span style="color: rgb(0, 0, 0)">2.username必须和接口所传username一致与用户的token对应，否则判定失败</span></p><p><span style="color: rgb(0, 0, 0)">3.获得的签名五分钟内使用有效</span></p><pre><code class="language-bash">#!/bin/bash

username="sam"
token="JCq5KZOvI7dpXcuQao0x3sgne6b****"
current=`date "+%Y-%m-%d %H:%M:%S"`
timestamp=`date -d "$current" +%s`
pack_token="${username}|${token}|${timestamp}"
signature="$(base64  &lt;&lt;&lt; $pack_token)"
echo $signature</code></pre><h1><span style="color: rgb(0, 0, 0)">调用示例</span></h1><h2><span style="color: rgb(0, 0, 0)">1. 创建任务</span></h2><p><span style="color: rgb(0, 0, 0)">1.python调用示例</span></p><pre><code class="language-bash">def create_job():
    url = 'https://tone.openanolis.cn/api/job/create/'
    token = 'xxxx' + '|' + '******CLPOjev0gdSF******' + '|' + str(time.time())
    signature = base64.b64encode(token.encode('utf-8')).decode('utf-8')
    data = {
        'username': 'sam',
        'signature': signature,
        'workspace': 'public-WorkSpace',
        'template': 'nightly_4.19',
        'name': 'nightly_job_test',
    }
    res = requests.post(url=url, json=data, verify=False)
    print(res.json)</code></pre><p><a target="_blank" rel="noopener noreferrer nofollow" href="http://2.shell"><span style="color: rgb(0, 0, 0)">2.shell</span></a><span style="color: rgb(0, 0, 0)">调用示例</span></p><pre><code>ARCH=`uname -m`
job_name="ali4000_nightly_${today}_${BUILD_ID}_${ARCH}"

username="sam"
token="******cuQao0x3sgne6b******"
current=`date "+%Y-%m-%d %H:%M:%S"`
timestamp=`date -d "$current" +%s`
pack_token="${username}|${token}|${timestamp}"
signature="$(base64  &lt;&lt;&lt; $pack_token)"
workspace="anolis"
template="4.19-functional-ci-suites"
project="alios-4.19-009"


generate_job_data()
{
  cat &lt;&lt;EOF
{
    "name":"$job_name",
    "username": "$username",
    "signature": "$signature",
    "workspace": "$workspace",
    "template": "$template",
}
EOF
}

echo $(generate_job_data)

curl -H 'Content-Type: application/json' -X POST -d "$(generate_job_data)" https://tone.openanolis.cn/api/job/create/</code></pre><h2>2.查询Job</h2><pre><code>def query_job():
    url = 'https://tone.openanolis.cn/api/job/query/'
    token = 'xxxx' + '|' + '******CLPOjev0gdSF******' + '|' + str(time.time())
    signature = base64.b64encode(token.encode('utf-8')).decode('utf-8')
    data = {
        'job_id': 1223,
    }
    res = requests.post(url=url, json=data, verify=False)
    print(res.json)</code></pre>"""

CREATE_JOB_DOC = """<p><code>T-One</code>中，我们将<strong>任务</strong>作为一个最小的执行单元。本文档将会详细介绍如何在<code>T-One</code> 中创建一个Job。</p><h1>1. 创建方式</h1><p>可以通过以下三种方式创建 <strong>Job</strong> :</p><ul><li><p><strong>通过 </strong><code>T-One</code><strong> 页面交互创建</strong>。</p></li><li><p><strong>通过 </strong><code>T-One</code><strong> API 手册创建</strong>：详情请参见<span style="color: rgb(24, 144, 255)">对外服务 API</span> 。</p></li><li><p><strong>通过测试计划创建</strong>：详情请参见<span style="color: rgb(24, 144, 255)">如何创建测试计划</span><strong><span style="color: rgb(24, 144, 255)">。</span></strong></p></li></ul><h1>2. 示范：如何在页面通过 Job 类型创建一个 Job 的操作步骤</h1><h2>2.1 创建Job</h2><ol><li><p>打开 <code>T-One</code>，进入<code>workspace</code>列表界面，进入<span style="color: rgba(0, 0, 0, 0.85)">【</span>公共workspace<span style="color: rgba(0, 0, 0, 0.85)">】</span>来创建第一个Job。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658718780805-076f3273-b3e1-4631-81a8-9fa70d88b1b0.png"></p><p></p><ol start="2"><li><p><span style="color: rgba(0, 0, 0, 0.85)">进入</span><code>workspace</code><span style="color: rgba(0, 0, 0, 0.85)">后，在导航栏中点击【新建 Job】，然后在下拉的测试列表中选择【功能测试】。</span></p></li></ol><p><span style="color: rgba(0, 0, 0, 0.85)">实际使用中，可以根据需要选择不同的 Job 类型。如何配置 Job 类型，请参见 </span><span style="color: rgb(24, 144, 255)">Job 类型管理</span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="about:blank"><span style="color: rgb(0, 0, 0)">。</span></a></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641954178020-ec882aad-15d0-4f90-8252-ac6667275d46.png"></p><p></p><ol start="3"><li><p><span style="color: rgba(0, 0, 0, 0.85)">点击【功能测试】，进入创建功能测试Job的页面。</span></p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641553078918-8b837fc9-b032-4172-88ab-3512139a4d9a.png"></p><p></p><ol start="4"><li><p>点击【用例和机器】中的【选择用例】按钮，打开【用例列表】弹窗，勾选需要测试的用例。</p></li></ol><p><code>T-One</code> 中已经提前内置了很多测试用例，不用担心不会写测试用例的问题</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641552893541-ba35cefe-f3c8-49f7-8d11-21b88f7a75cd.png"></p><p></p><ol start="5"><li><p>选择完测试用例后，直接将刚才新建的任务【提交测试】即可。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658719158898-d58020b9-6999-4f2f-b942-b5ea3587cf3a.png?x-oss-process=image/format,png"></p><h2>2.2 查看任务状态</h2><p>创建完【测试任务】，会跳转到测试任务结果界面，点击创建的【任务名称】，即可查看测试任务为详情信息。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658719844952-bc31ee3e-7820-41ef-9dde-9ef4dc835541.png?x-oss-process=image/format,png"></p><p><br><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658719871683-799831d2-7a46-4921-89be-960864cdacd5.png"></p>"""

CALLBACK_DOC = """<p>T-One 的 Job 执行有<strong>自动回调机制</strong>，<strong>一旦 Job 状态发生改变即可以通过回调的形式通知相应的系统</strong>，这非常方便系统间的对接。</p><p></p><p>那么如何使用呢？用户可以在 T-One Job 里配置一个回调接口，T-One 平台会在 Job 状态发生变化时携带该Job 信息并以 POST 方式主动请求该接口，用户的对接系统即可获取到 Job 实时信息并做相关操作。</p><h3>1. 示范</h3><p>新建 Job 时，配置<strong>回调接口</strong>参数即可。如果您的新建 Job 页面没有「回调接口」配置项，请在 Job 类型里添加该选项。</p><p>详细配置操作，请参见<a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="https://yuque.antfin-inc.com/ostest/ducrbe/kgg37t">如何添加 Job 类型</a>。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/236938/1657883422982-bf22d971-926b-4273-831a-28dd0f10b617.png"></p><h3>2. 详细说明</h3><p><strong>回调接口：</strong>需要是一个对外开放的服务接口，并支持 POST 请求</p><p><strong>请求方式：</strong> <code>POST</code></p><p><strong>回调时机：</strong></p><ol><li><p>当 Job 状态变化时，比如当 Job 完成时，或者 Job 状态从 pending 变到 running 时</p></li><li><p>当 Job 里相关机器发生 broken 时</p></li></ol><p><strong>回调参数：</strong></p><ol><li><p>当 Job 状态 从 pending 到 running 时</p></li></ol><pre><code>{ 
    "callback_type": "job_running",   
    "callback_desc": "job开始执行",   
    "callback_data":{       
        "job_id": 1234,       
        "job_status": "running",       
        "ws_id": "xxxxxxx",       
        "job_link": "https://tone.openanolis.cn/ws/k5z7sxfu/test_result/371"
    } 
}</code></pre><ol start="2"><li><p>当 Job 在执行的时候有机器发生 broken 时</p></li></ol><pre><code>{   
    "callback_type": "server_broken",   
    "callback_desc": "机器broken，请检查机器是否正常",   
    "callback_data":{       
        "job_id": 1234,       
        "job_status": "running",       
        "ws_id": "xxxxx",       
        "job_link": "https://tone.openanolis.cn/ws/k5z7sxfu/test_result/371",       
        "broken_server_id": 123,       
        "broken_server_ip": "0.0.0.0",       
        "broken_server_sn": "xxxxxxxxx",       
        "blocked_cases": {           
            "perf-test": ["default"],           
            "ltp": ["test=commands", "test=connectors", "test=containers"]
    }
}</code></pre><ol start="3"><li><p>当 Job 完成/停止时</p></li></ol><ol><li><p>功能测试</p></li></ol><pre><code>{   
    "callback_type": "job_completed",   
    "callback_desc": "job执行完毕",   
    "callback_data":{       
        "job_id": 1234,       
        "job_status": "success",       
        "ws_id": "xxxxxxx",       
        "job_link": "https://tone.openanolis.cn/ws/k5z7sxfu/test_result/371",       
        "test_type": "functional",       
        "job_statics": {            
            "count": 1,            
            "success": 1,           
            "fail": 0,            
            "skip": 0       
        }   
    } 
}</code></pre><ol><li><p>性能测试</p></li></ol><pre><code>{   
    "callback_type": "job_complete",   
    "callback_desc": "job执行完毕",   
    "callback_data":{       
        "job_id": 1234,       
        "job_status": "success",       
        "ws_id": "xxxxxx",       
        "job_link": "https://tone.openanolis.cn/ws/k5z7sxfu/test_result/371",       
        "test_type": "performance",       
        "job_statics": {            
            "count": 1,           
            "increase": 0,            
            "decline": 0,            
            "normal": 0,            
            "invalid": 0,            
            "na": 1       
        }   
    } 
}</code></pre><p></p><p></p>"""

ENV_INFO_DOC = """
<h3>1. 全局变量说明</h3><p>T-One 支持在 Test Job 中定义全局变量，全局变量包括两种：</p><ol><li><p>系统级的全局变量，一般是固定的名称，以 TONE_ 开头，名称大写。</p></li></ol><ol><li><p>大部分系统级的全局变量不需要用户定义，可以直接使用。</p></li><li><p>个别全局变量用户可以自定义值，可以改变 t-one 的执行逻辑，比如 tone 分支的下载等。</p></li></ol><ol start="2"><li><p>用户自定义的全局变量，是用户根据自己的需要在 Test Job 中自定义的全局变量。</p></li></ol><p></p><p>一旦用户定义了全局变量，<strong>它会在 T-One Job 的任何一个执行步骤中传递进去</strong>，这样测试用例就可以在测试用例的业务逻辑中使用这些全局变量。</p><p>基本格式：key=value</p><pre><code>http_proxy=http://127.0.0.1:10000</code></pre><p>value<span style="color: rgb(77, 77, 77)">可以由</span><strong><span style="color: rgb(77, 77, 77)">字母、数字和下划线</span></strong><span style="color: rgb(77, 77, 77)">组成。</span></p><p><span style="color: rgb(77, 77, 77); font-size: 16px">全局变量默认类型都是字符串类型。</span></p><h3>2. 全局变量的填写规则</h3><p><span style="font-size: 16px">全局变量的填写规则基本和 shell 变量的定义保持一致：</span></p><ol><li><p>定义多个全局变量，请使用<strong>换行</strong>分割</p></li><li><p>必须是<strong>字母、数字和下划线</strong>组合</p></li><li><p>支持 value 中有双等号</p></li><li><p><span style="color: rgb(77, 77, 77); font-size: 16px">可以定义一个数组（使用括号）</span></p></li><li><p><span style="color: rgb(77, 77, 77); font-size: 16px">value中包含空格，则必须用双引号括起来</span></p></li></ol><pre><code># 1. 多个全局变量，空格和换行分割
BASEURL=http://localhost/

# 2. 字母、数字和下划线组合
group=abc1_

# 3. 支持value中有双等号
name=key==zhangsan

# 4. 定义一个数组
fruits=(apple banana lemon)
#在脚本中获取数组中元素的个数
echo ${#fruits[@]}
#通过下标，获取数组中的元素
echo "fruits:" ${fruits[2]}
# 错误的写法！
# fruits=apple banana lemon 

# 5. value中包含空格，则必须用双引号括起来
fruits="apple banana lemon"
binary_opt="-a -v:fail,error,time -retain:fail,error -ignore:quiet -timeoutFactor:8 -xml:verify -Dtest.wisp.socketAddress=gitlab-sp.alibaba-inc.com"</code></pre><h3>3. 系统全局变量</h3><p><span style="color: rgb(23, 26, 29); font-size: 14px">除了用户自定义的全局变量之外，T-One 还提供系统级别的全局变量；</span></p><h5><span style="color: rgb(0, 0, 0)">3.1 TONE_DEBUG_BRANCH</span></h5><p><span style="color: rgb(0, 0, 0)">使用场景：开发用例的时候如果想调试自己的dev分支，可以指定该变量。</span></p><p><span style="color: rgb(0, 0, 0)">使用方式：TONE_DEBUG_BRANCH=$分支名</span></p><p><span style="color: rgb(0, 0, 0)"><br></span></p><h5><span style="color: rgb(0, 0, 0)">3.2 TONE_JOB_ID</span></h5><p><span style="color: rgb(0, 0, 0)">使用场景：此变量是 T-One job 的 ID，有时候需要在测试用例中使用测试任务 ID，则可以直接使用。</span></p><p><span style="color: rgb(0, 0, 0)">使用方法：可以在测试用例脚本中使用此变量 $TONE_JOB_ID</span></p><p><span style="color: rgb(0, 0, 0)"><br></span></p><h5><span style="color: rgb(0, 0, 0)">3.3 TONE_CUSTOM_SCRIPT</span></h5><p><span style="color: rgb(0, 0, 0)">使用场景：开发用例的时候可以指定自己的自定义脚本。</span></p><p><span style="color: rgb(0, 0, 0)">使用方法：</span><span style="color: rgb(18, 20, 22)">TONE_CUSTOM_SCRIPT=</span><a target="_blank" rel="noopener noreferrer nofollow" href="https://gitee.com/anolis/ci-meta/packages/c/cmake/test.sh"><span style="color: rgb(18, 20, 22)">https://gitee.com/anolis/ci-meta/packages/c/cmake/test.sh</span></a></p><p><span style="color: rgb(0, 0, 0)">使用要求：</span><span style="color: rgb(18, 20, 22)">这个自定义脚本能自闭环，依赖其它的文件脚本内解决</span></p><p><span style="color: rgb(0, 0, 0)"><br></span></p><h5><span style="color: rgb(0, 0, 0)">3.4 TONE_TESECASES</span></h5><p><span style="color: rgb(0, 0, 0)">使用场景：当只需要运行某一个test case而不是整个test conf时，可以指定该变量。</span></p><p><span style="color: rgb(0, 0, 0)">使用方法：</span><span style="color: rgb(18, 20, 22)">TONE_TESTCASES=xxx（tone run命令会加上</span><span style="color: rgb(0, 0, 0)">--testcases=$TONE_TESTCASES参数</span><span style="color: rgb(18, 20, 22)">）</span></p><p><span style="color: rgb(0, 0, 0)"><br></span></p><p><span style="color: rgb(23, 26, 29); font-size: 14px"><br></span></p><p></p>
"""

CREATE_PLAN_DOC = """<p>T-One支持用户通过多个模板，创建计划，执行周期性测试。</p><p></p><h4><strong>创建计划流程</strong></h4><ol><li><p>进入Workspace，鼠标移动到导航栏菜单上“测试计划”，点击“计划管理”-&gt;“创建计划”。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641975056000-b10c3753-c8eb-4c45-b7c5-46e2e5228b1b.png"></p><ol start="2"><li><p>打开新建计划表单页面，填写新建计划的配置信息。</p></li></ol><p>Step1：基础配置</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641975746124-b8d04984-1f04-4c97-ab8c-020dfb653109.png"></p><ul><li><p>计划名称：必填，且名称唯一。</p></li><li><p>计划描述：计划描述信息。</p></li><li><p>是否启用：启用，计划立即生效；不启用，计划不生效，不可调用，运行。</p></li></ul><p></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641975778116-575da7d7-0133-4688-ab03-34961abadab7.png"></p><ul><li><p>Project、测试基线、被测对象、全局RPM、全局变量、通知主题、邮件通知和钉钉通知，这些是Job运行的配置项，这里配置的是最高优先级，如果填写会覆盖后续测试模版中的相关配置。</p></li></ul><p></p><p>Step2：测试配置</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641893940706-46b43be2-0e40-4af8-bed4-d16e4bfd1a1d.png"></p><ul><li><p>环境准备阶段：可以添加机器和自定义脚本。</p></li><li><p>新测试阶段：可配置最多5个测试阶段；每个阶段可以配置最多15个模版。</p></li><li><p>是否影响后续步骤：若是，该阶段运行失败，计划运行即停止，后续阶段不再执行：若否，该阶段运行失败，计划运行不受影响，后续阶段继续执行。</p></li></ul><p></p><p>Step3：报告配置</p><p>是否自动生成测试报告，若需要自动生成报告，需要填写如下报告配置信息。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641895173490-d591d58a-f6d5-4d8e-adac-976508d07ab0.png"></p><ul><li><p>报告名称：非必填，不填时依旧计划名称按照默认规则生成。</p></li><li><p>选择报告模版：选择需要生成的报告模版样式，不填时使用默认模版。</p></li><li><p>分组方式：以Job维度分组，即报告按照一个Job分成一个对比组；以阶段维度分组，即报告按照一个阶段的所有Job分成一个对比组。</p></li><li><p>选择基准组：生成报告时，必须选择一组数据作为基准组数据。</p></li><li><p>报告描述：报告描述信息。</p></li></ul><p></p><p>Step4：触发配置</p><p>是否定时触发计划，若需要定时触发计划执行测试，需要填写如下信息。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641895874544-31d6f5b8-d5ac-4f7a-be1b-d24c5c655951.png"></p><ul><li><p>触发规则</p></li></ul><p><strong><span style="color: rgba(0, 0, 0, 0.85); font-size: 14px">如：*</span></strong></p><p><span style="font-size: 14px">1. minute:分（可以用数字0－59 表示）</span></p><p><span style="font-size: 14px">2. hour:时（可以用数字0-23表示）</span></p><p><span style="font-size: 14px">3. day:日（可以用数字1-31表示）</span></p><p><span style="font-size: 14px">4. month:月（可以用数字1-12表示）</span></p><p><span style="font-size: 14px">5. day_of_week:星期几（0表示星期天，1-6表示星期一到星期六）</span></p><p></p><p><strong><span style="font-size: 14px">特殊符号：</span></strong></p><p><span style="font-size: 14px">1. * 任何时间</span></p><p><span style="font-size: 14px">2. , 不连续的时间</span></p><p><span style="font-size: 14px">3. - 连续的时间</span></p><p><span style="font-size: 14px">4. / 每隔多久执行一次</span></p><p></p><p><strong><span style="font-size: 14px">举例：</span></strong></p><p><span style="font-size: 14px">30 21 1-5 （每周一到周五的21点30分执行任务）</span></p><p><span style="font-size: 14px">0 21 6,0（每周六和周天的21点执行任务）</span></p><p><span style="font-size: 14px">0 21 </span><em><span style="font-size: 14px">/2 </span></em><span style="font-size: 14px">*（每个月从1号起每隔两天21点执行任务）</span></p><p><span style="font-size: 14px">0 21,23,1 *（每天21点，23点，1点执行任务）</span></p><p></p><ul><li><p><span style="color: rgba(0, 0, 0, 0.65); font-size: 14px">阻塞处理策略：</span><span style="color: rgb(23, 26, 29); font-size: 14px">①</span><span style="color: rgba(0, 0, 0, 0.65); font-size: 14px">忽略前序计划，直接同时执行；</span><span style="color: rgb(23, 26, 29); font-size: 14px">②</span><span style="color: rgba(0, 0, 0, 0.65); font-size: 14px">中止前序运行中的计划，再执行；</span><span style="color: rgb(23, 26, 29); font-size: 14px">③</span><span style="color: rgba(0, 0, 0, 0.65); font-size: 14px">有前序运行中计划，忽略本次执行。</span></p></li></ul><p></p><ol start="3"><li><p>填写完计划配置信息，点击发布，一个测试计划就创建完成了。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1641896157245-b216f463-69da-4b3f-81c7-c5afb4eea56f.png"></p><p></p><p></p><p></p>"""

ANALYSIS_DOC = """<p>时序分析是从时间维度把测试结果拉一条曲线，通过曲线图可以直观的分析出测试结果的突变情况，以快速准确的识别问题。</p><p>在 T-One 里，我们通常会把同一项目中的数据，通过 Job 标签进行过滤，然后在时间轴上把测试结果画图展示，就可以快速得出一个时序分析图了。</p><h2>1. 使用场景</h2><p>场景1：性能测试的某个指标是否稳定，可以通查看性能指标趋势图，来帮助判断其稳定行。</p><p>场景2：功能测试的某个用例是否稳定，可以通过查看 Test Conf 通过率，帮助判断其稳定性。</p><p>场景3: 某个用例当前失败了，但是它可能是一个已知的问题。可以通过查看功能结果趋势图上历史数据是否都是失败的，帮助判断结果的严重程度。</p><p></p><h2>2. 操作步骤</h2><p><strong>示范查询时序分析-性能指标趋势</strong></p><ol><li><p>在导航菜单栏中点击【时序分析】，默认选择的是【性能分析】，选择测试环境。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680069475816-65d68b37-a7cb-48ca-9425-e19364df7a7a.png"></p><ol start="2"><li><p>选择所属项目、指标、标签（默认不区分）和日期范围。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680069526042-3a135af2-6b4f-428d-bdfb-9a55c8013b1d.png"></p><ol start="3"><li><p>查看性能测试结果中的指标，在一段时间内的波动趋势。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1686041968804-91152c4b-f9ab-4b87-8543-85f5e47967c7.png"></p><ol start="4"><li><p>查看指标可选择多个指标在同一张图上显示。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1686042124739-50816c2d-2b88-4741-8507-84d4c7ec7173.png"></p><h2>3. 功能说明</h2><ol><li><p>只有包含“analytics”系统标签的 Job 才能进行时序分析。</p></li><li><p>分析时选择不同的标签，会按照选取的标签过滤 Job 结果来进行分析。默认“不区分标签”。</p></li><li><p>趋势图中的每个点代表当天的Job测试结果值，若一天当中有多个Job跑了相同的测试用例，则取最新的一个Job跑出的结果值。</p></li></ol><p></p><p><strong>性能分析-指标趋势</strong></p><ol start="4"><li><p>性能基线AVG值</p></li></ol><ul><li><p>基线AVG值，取Job（趋势图中最后一条job）的对比基线值。</p></li><li><p>如果Job（趋势图中最后一条job）中没有对比基线值，则基线AVG值显示为空。</p></li></ul><ol start="5"><li><p>用固定机器执行的 Job，会根据不同的机器IP生成不同的指标曲线。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680000555789-4ed9ee81-4985-4581-a4d0-26d075662f0c.png"></p><p></p><p><strong>功能分析-Test Conf 通过率</strong></p><ol start="6"><li><p>Test Conf 通过率=（ Pass Test Case + Skip Test Case ）/Total Test Case</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1679992650480-9bfd3b71-57e7-430f-a71f-9c261cfb9ec1.png"></p><p></p><h2>4. 使用小技巧</h2><h4>4.1 巧用标签</h4><p>给 Job 加上标签，在时序分析时可以将带有相同标签的用例筛选出来进行分析。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680001519707-94c1648f-7eb4-422e-8727-3b219c279841.png"></p><h4>4.2 分析结果一键分享</h4><p>配置参数，查看分析结果后，可通过点击分享图标，分享当前分析结果。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680000988459-6ad10d03-48ed-483b-a035-10639d9749ff.png"></p><p></p><h4>4.3 快速选择日期</h4><p>日期输入框，提供：“近7天”、“近30天”、“近60天”、“近90天”快速选取日期功能。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1680001243963-054783ae-6f33-4a39-ab09-9a07afc14414.png"></p><p></p><h4>4.4 时序分析可自定义分享日期</h4><p>每次打开链接都可以看到最近时间范围内的时序图。在分享出来的URL上加上一个 days 参数。比如，分享最近7天：</p><ol><li><p>点击时序分析中的分享按钮，复制URL。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2023/png/269913/1686043457938-73876b2d-4589-42fa-b781-43c9a611a76a.png"></p><ol start="2"><li><p>在URL后面加上“&amp;days=7”。</p></li><li><p>复制2步骤中的URL，分享打开即可。</p></li></ol>"""

REPORT_DOC = """<p><strong>测试报告</strong>是对一组或多组测试任务的<strong>数据分析结果</strong>。测试报告将单任务或多任务测试结果聚合起来，按照产品版本内、产品版本间以及时间线的维度进行数据对比分析，并可保存和分享。</p><p><code>T-One</code> 提供一个默认测试报告模版，同时也支持用户定制测试报告样式，即定制 WS 级专属报告模版。</p><h3>1. 使用场景</h3><p><code>T-One</code> 默认测试报告模板不适用的情况下，可自定义测试报告模板。</p><h3>2. 操作步骤</h3><ol><li><p>在导航栏找到【测试报告】，选择【报告模版】页面后，点击【新建模版】。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642065217240-a90143ba-a361-4a4a-b9ef-f54e4bfedc44.png"></p><ol start="2"><li><p>在新建报告模版表单页面，输入报告模版名称和描述，【勾选】添加报告内容项。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642065848574-06712da8-f9e4-450c-8e3e-ced20d0de538.png"></p><ol start="3"><li><p>点击【保存报告模版】，一个报告模版就创建完成了。</p></li></ol><p></p><h3>3. 报告模版填写参数说明</h3><h4>3.1 基础信息<img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642065956618-bfbd0a6b-2621-49e3-ab0d-de66ffd9d64d.png"></h4><ul><li><p>测试背景：文本编辑框，用户可手动填写测试背景。</p></li><li><p>测试方法：文本编辑框，用户可手动填写测试方法。</p></li><li><p>测试结论：文本编辑框，用户可手动填写测试结论。</p></li><li><p>Summary：系统自动生成的统计数据。</p></li></ul><ul><li><p>性能测试：统计测试数据中所有测试项的 Metirc 总计数、下降数、上升数。</p></li><li><p>功能测试：统计测试数据中所有测试项的 Test Case 总计数、通过数、失败数。</p></li></ul><ul><li><p>环境描述：文本编辑框，用户可手动填写测试环境。</p></li><li><p>机器环境：系统自动提取的测试机器数据，包含：IP/SN ，机型、OS 、RPM 、GCC 。</p></li></ul><h4>3.2 测试数据</h4><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642068529089-c896a18e-87c4-4b68-a5be-b8b66acedba5.png"></p><ul><li><p>性能测试数据</p></li></ul><ul><li><p>测试工具：系统从 Test Suite 中自动提取。</p></li><li><p>测试环境：文本编辑框，用户可手动填写 Test Suite 测试环境。</p></li><li><p>测试说明：文本编辑框，用户可手动填写 Test Suite 测试说明。</p></li><li><p>测试结论：文本编辑框，用户可手动填写 Test Suite 测试结论。</p></li><li><p>数据视图样式：生成报告的测试数据展示方式，用户可以选择用图展示或用表展示测试数据。</p></li><li><p>测试组：测试数据按组展示，一个测试组可以添加多个测试项。</p></li><li><p>测试项：测试项代表着测试某个产品的某一项能力，一个测试项可由多个 Test Suite 测试。</p></li></ul><p></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642068581042-71fd3169-39be-4c66-a205-8ca1bf897e9e.png"></p><ul><li><p>功能测试数据</p></li></ul><ul><li><p>测试组：测试数据按组展示，一个测试组可以添加多个测试项。</p></li><li><p>测试项：测试数据按项展示，一个测试项可以添加多个 Test Suite 。</p></li></ul><p></p><h3>4. 使用小技巧</h3><h4>4.1 预览效果</h4><p>自定义报告后，不知道效果如何，可通过预览功能查看生成报告的样式。</p><p></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1657704133743-76b2dae0-6bbf-48e2-beff-ae6838a7ade7.png"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1657704167134-1d63c3fa-79d3-4b21-8ca5-1b50225739aa.png"></p><p></p>"""

CASE_DOC = """<p><code>T-One</code> 平台使用 tone 测试框架来驱动测试的执行，并将测试用例的管理分为<strong>系统级</strong>和 <code>workspace</code><strong> 级</strong>：</p><ul><li><p><strong>系统级用例管理</strong>是维护整个系统的所有测试用例，可以在这里进行测试用例的集成、修改、移除等。</p></li><li><p><strong>WS 级用例管理</strong>是维护 WS 的所有测试用例，可以根据 WS 的测试需求加入测试用例，好管理。</p></li></ul><h2>1. 集成步骤</h2><p>一个用例集成到<code>T-One</code> 中需要经过以下几个步骤：</p><ol><li><p><strong>编写用例</strong>：通过 PR 的形式提交到 tone 测试框架的 Gitee 仓库中，详情请参见<a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="https://openanolis.cn/sig/T-One/doc/477881758433984528">测试套件集成手册</a>。</p></li><li><p><code>T-One</code><strong>集成</strong>：通过 <code>T-One</code> 的系统级用例管理把用例集成到 <code>T-One</code> 平台中，这样所有 WS 都可以使用。</p></li><li><p><strong>WS 管理用例</strong>：一个 WS 中使用哪些用例可以在 WS 级的用例管理中进行管理控制，详情请参见<span style="color: rgb(24, 144, 255)">如何管理用例</span></p></li></ol><h2>2. 示范：集成一个功能用例到 T-One 平台步骤</h2><p>下面示范集成一个功能用例，操作如下：</p><ol><li><p><span style="color: rgba(0, 0, 0, 0.85); font-size: 14px">打开系统配置，点击【Test Suite管理】，</span>在【功能测试】sheet 页面，点击【新增功能 Test Suite】。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1645521023713-17bbdf7c-b0a5-458b-a399-7f616335c702.png"></p><ol start="2"><li><p>填写新增的 Test Suite 信息。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1645521095329-ac13ef98-530d-4370-b7a5-17ff00c47758.png"></p><p></p><ol start="3"><li><p>添加 Test Conf ，有两种方式可以操作。</p></li></ol><p><span style="color: rgb(23, 26, 29)">3.1 自动同步：选择一个 Test Suite ，点击右边操作栏中的【同步】按钮，即可自动从测试框架中同步该 Test Suite 下已有的所有 Test Conf 。</span></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1645521883836-f1ecfbed-6bfc-43ab-a7fd-6dfaa8c3a6a0.png"></p><p><span style="color: rgb(23, 26, 29)">3.2 手动添加：</span></p><p><span style="color: rgb(23, 26, 29)">（1）展开一个 Test Suite ，点击 Test Conf 右边操作栏中的【新增】按钮。</span></p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1645521938123-82003e99-625c-44db-afc4-cc3b08c266c4.png"></p><p><span style="color: rgb(23, 26, 29); font-size: 14px">（2） </span>填写新增 Test Conf 的信息，确认保存即可。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1645522377441-8936386c-f55f-481a-a338-992dd28c6991.png"></p><p></p><h2>3. 参数说明</h2><h3>3.1 新增 Test Suite</h3><ul><li><p>Test Suite：要集成的 Test Suite 名称，必须与 tone 测试框架里存储的名称保持一致。填入后，会自动校验。只有存在在测试框架里的用例才能加入。</p></li><li><p>测试类型：测试用例的类型，系统会自动识别出对应的测试类型。</p></li><li><p>运行模式：测试用例是在单机或集群上运行。</p></li><li><p>领域：给测试用例的一种逻辑分类，通过领域方便查找同类型的测试用例。</p></li><li><p>Owner：指明用例的创作者或维护者。</p></li><li><p>默认用例：标注为默认用例的 Test Suite 将默认显示在每个 WS 用例管理列表中。一般情况，WS 的用例需要有个添加的操作才能在用例列表中显示，而系统标注为默认用例的，无需添加操作即能显示。</p></li><li><p>是否认证：只有认证过的 Test Suite 才能同步到 Testfarm。</p></li><li><p>说明：对 Test Suite 的说明信息，可以从 tone 测试框架中获取，帮助后面的使用者理解测试用例。</p></li><li><p>备注：对 Test Suite 的备注信息。</p></li></ul><h3>3.2 手动新增 Test Conf</h3><ul><li><p>Test Conf：要添加的 Test Conf 名称。</p></li><li><p>别名：Test Conf 的别名，在对比分析展示时，展示的就是别名。</p></li><li><p>领域：Test Conf 属于哪个领域，一种逻辑分类，通过领域方便查找同类型的测试用例。</p></li><li><p>最大运行时长：Test Conf 运行的最大时间值。默认最大运行时长是 3600 分钟。</p></li><li><p>运行次数：Test Conf 运行的次数。默认功能用例1次，性能用例 3 次。</p></li><li><p>变量：Test Conf 级可配置的变量信息，在系统级用例管理中定义，实际调用时可编辑变量值。</p></li><li><p>默认用例：标注为默认用例的 Test Conf 将默认显示在每个 WS 用例管理列表中。一般情况，WS 的用例需要有个添加的操作才能在用例列表中显示，而系统标注为默认用例的，无需添加操作即能显示。</p></li><li><p>是否认证：只有认证过的 Test Conf 才能同步到 Testfarm。</p></li><li><p>说明：可加入对 Test Conf 的说明，可以从用例脚本中获取，帮助后面的使用者理解测试用例。</p></li></ul><p></p><h2>4. 使用小技巧</h2><h3>4.1 批量编辑/删除Test Conf</h3><ol><li><p>全选或选择多个 Test Conf ，页面下端和悬浮显示批量编辑入口，点击【批量编辑】or【批量删除】。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1657874012665-5c02500b-ecc0-40e5-8967-218e21d99171.png"></p><ol start="2"><li><p>打开【批量编辑Test Conf】,可对 Test Conf 的领域、最大运行时长、运行次数参数进行批量配置。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1657874160836-2b7bfe83-f398-4ea7-bfb1-c4042077b73e.png"></p><p></p>"""

WS_CASE_DOC = """<p><span style="color: rgba(0, 0, 0, 0.85)">T-One 平台已集成了大量测试用例，Workspace 初始化后，默认配置了部分用例。</span><strong><span style="color: rgba(0, 0, 0, 0.85)">WS 管理员</span></strong><span style="color: rgba(0, 0, 0, 0.85)">可以根据业务需要添加使用更多的系统用例，也可以维护删除掉不需要使用的用例。</span></p><p><span style="color: rgba(0, 0, 0, 0.85)">相关文档：</span><a target="_blank" rel="noopener noreferrer nofollow" class="ne-link" href="https://aliyuque.antfin.com/ostest/ib4gow/lprbks">如何集成和管理用例</a></p><h1><span style="color: rgba(0, 0, 0, 0.85)">1. WS 中测试用例管理</span></h1><h2>1.1 新增测试用例</h2><ol><li><p>点击导航栏右侧的设置按钮，进入<code>workspace</code>的配置管理界面。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658721436358-4978bc3e-0c6c-470f-97e9-ef4c5152a9ed.png"></p><ol start="2"><li><p><span style="color: rgba(0, 0, 0, 0.85)">选择左侧导航栏的【Test Suite管理】，可以查看当前workspace的所有用例。</span></p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658721691547-bcc410ba-956e-4c38-b4d7-76f824b572f5.png"></p><ol start="3"><li><p>在【功能测试】sheet栏，点击左上角的【Test Suite管理】来新增测试用例。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/45956447/1658721549794-5558c37f-6f6c-46ef-9b10-6816825508a7.png"></p><ol start="4"><li><p><span style="color: rgba(0, 0, 0, 0.85)">在 Test Suite 管理页面，点击【添加】按钮，保存即可。</span></p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642413209251-e12977d4-a408-4691-9925-44455c54cb22.png"></p><h2><span style="color: rgba(0, 0, 0, 0.85)">1.2 删除测试用例</span></h2><ol><li><p><span style="color: rgba(0, 0, 0, 0.85)">在功能测试 sheet 页面，点击【Test Suite 管理】按钮，打开添加页面。</span></p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2021/png/269913/1639040977561-68461cd9-57dc-4ec2-916a-255a87fa6bfc.png"></p><ol start="2"><li><p><span style="color: rgba(0, 0, 0, 0.85)">在 Test Suite 管理页面，点击【 删除 】按钮，保存即可。</span></p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642413306559-f29aee09-ac64-4fbb-8550-be275a7bf744.png"></p><p></p><h1>2. 使用小技巧</h1><h2>2.1 快速查找添加用例</h2><p>添加系统用例到 WS 时，可通过领域分类或 Test Suite 搜索快速查找定位需要添加的测试用例。</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1657875005200-2629769d-bc6d-4383-ad5d-f7fe28e5b971.png"></p>"""

JOB_TYPE_DOC = """<p>Job 类型就是 Job 表单样式。T-One 将测试流程拆解成一个一个测试步骤，用户可以根据自己的测试需求，将各种测试步骤组合成不同的测试表单样式。即通过创建 Job 类型，定制不同的 Job 表单。</p><p></p><h3>1. 使用场景</h3><p>当前，系统预设 2～4 个 Job 类型。当这些 Job 类型不能满足需求或需要定制 Job 类型的时候，用户可以添加新的 Job 类型。</p><h3>2. 操作步骤</h3><ol><li><p>打开导航栏右侧的【 WS 配置管理】，选择 Job 配置中的【 Job 类型管理】页面后，点击【新建 Job 类型】。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642586442025-e5151e69-815f-4b39-a266-a8480ab4aa07.png"></p><p>另外，有一个快捷路径，【新建 Job 】菜单下拉窗口中可直接点击【新建 Job 类型】进入到页面。<img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642586371454-abdd4adc-c140-40af-b558-633f0d92d9ff.png"></p><p></p><ol start="2"><li><p>根据需求配置新建 Job 类型表单内容，点击保存，一个新的【 Job 类型】就创建成功了。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642587165510-6726d56a-6abc-46df-996f-c015109a7994.png"></p><p>类型配置</p><ul><li><p>是否启用：当设置为启用，该Job类型出现在【通过Job类型新建】列表中，可以被点击使用。当设置为停用，该 Job 类型处在不可用状态，不会显示在【通过Job 类型新建】列表中。</p></li><li><p>Job 类型名称：自定义的 Job 类型名称，方便后面区分不同的 Job 类型。</p></li><li><p>ServerProvider：配置测试环境，选择测试机器是来自于固定机器池还是弹性机器池。</p></li><li><p>测试类型：配置测试类型，选择是功能测试、性能测试。</p></li><li><p>描述：对此 Job 类型的描述介绍。</p></li></ul><p></p><p>测试环境配置</p><ul><li><p>基础配置：配置“ Job 名称”、“ Project 选择”、“测试基线”项。</p></li><li><p>环境准备配置：配置“重装机器”、“重装内核”、“重启机器”、“全局变量”、“安装 RPM ”、“执行脚本”、“ console ”、“监控配置”项。</p></li><li><p>测试用例和机器配置：配置“领域选择”、“变量”、“重启”、“脚本”、“ console ”、“监控”项。</p></li><li><p>更多配置：配置“清理脚本”、“通知主题”、“钉钉通知”、“邮件通知”、“ Job 标签”、“自动生成报告”、“回调接口”项。</p></li></ul><p></p><ol start="3"><li><p>启用后的Job类型就可以在新建Job时使用了。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642587871427-e71313be-1823-4b62-9811-8fdbd3b156a8.png"></p><p></p><h3>3. 使用小技巧</h3><h4>3.1 变更Job表单标题的显示名称</h4><ol><li><p>&nbsp;光标移动到【测试环境配置】中任何配置项的名称处，会显示出一个蓝色的编辑按钮。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1659691388195-bfe69529-f7a2-493f-b68c-c6c76c6e81ee.png"></p><ol start="2"><li><p>打开编辑弹窗，编辑名称，点击【确定】保存。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1659691684047-135a0d6b-e135-4018-a3b2-ef839ac5979f.png"></p><ol start="3"><li><p>创建 Job 时就会按照自定义的名称显示。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1659691986249-2fc3d68c-cccd-46c6-83c8-98a72276b829.png"></p><p></p><h4>3.2 变更默认新建Job类型</h4><ol><li><p>在【 Job 类型管理】页面中，可以变更默认打开新建 Job 类型功能。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1659692497337-3a276290-b6f4-47e2-9ab3-0e5f5393a259.png"></p><ol start="2"><li><p>点击【新建 Job 】菜单，可以直接打开设置为默认的 Job 类型。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1659692415311-ccfa1aea-2920-4183-80e9-bc3aacd06b92.png"></p><p></p><p></p>"""

JOB_TMPL_DOC = """<p>Job模板可以将用户常用的Job配置保存起来，下次新建Job时，不需要再进行繁琐的配置，直接通过模版创建Job去执行。</p><p></p><h3>1. 使用场景</h3><p>需要反复用到同样的配置内容测试 ，可以通过创建Job模版保存配置内容。</p><p></p><h3>2. 操作步骤</h3><ol><li><p>点击【新建Job】菜单，打开需要创建的【新建Job】表单页面。输入Job表单内容后，点击【存为模版】。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642500895462-2c36386b-5ce5-4406-9950-ca6b80971936.png"></p><ol start="3"><li><p>在“存为模版”对话框中输入模版名称、描述，是否请用后，点击“确认”保存，一条新的模版就创建成功了。</p></li></ol><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/269913/1642501119035-2a0058aa-645a-4f9e-af50-247ccede214d.png"></p><ul><li><p>启用说明：启用的显示在【通过模版新建】【用模版新建】列表下，可以被使用；不启用则不显示，即不可被使用。</p></li></ul><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2021/png/269913/1639123913079-16d497d7-b487-4966-b6ac-fc35d8b074df.png"><img src="https://intranetproxy.alipay.com/skylark/lark/0/2021/png/269913/1639123875083-780ca03f-c4fa-4004-b75d-634d7eb2105d.png"></p><p></p><p></p><p></p><p></p><h4></h4><p></p><p></p>"""

FAQ_DOC = """<h2>创建执行Job常见问题</h2><h4>1. 为什么任务状态一直 pending?</h4><p>进入 Job 详情页可以查看 pending 原因，一般有以下几种原因：</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/236938/1657103635276-6532e7e5-d4be-410b-b3da-0f9968345610.png"></p><ul><li><p>当机器/集群被其它 Job 占用时：点击 JobID 可以跳转到对应 Job 页面，等该 Job 运行完毕即可，也可以手动终止或者删除该 Job。</p></li></ul><ul><li><p>若点击 JobID 跳转到对应 Job 页面，显示已经完成。可能是因为<span style="color: rgb(23, 26, 29)">长时间 pending 的 Job 获取机器的时间会比刚创建的 Job 要慢一些，请稍等一下。</span></p></li></ul><ul><li><p>当机器池无可用机器/集群时：检查机器池机器/机器配置，添加可用机器或者集群。</p></li><li><p>当机器 Broken 时：检查机器是否能正常连接，Agent 服务是否正常。</p></li></ul><p></p><h4>2. 为什么 prepare 步骤报 “<span style="color: rgb(0, 0, 0)">tone make install error</span>” 错误？</h4><p><span style="color: rgb(0, 0, 0)">tone测试框架安装失败，具体原因请进机器查看/tmp/tone_prepare.log。</span></p><p></p><h4>3. 为什么 prepare 步骤报 “<span style="color: rgb(0, 0, 0)">clone tone from .... failed</span>” 错误？</h4><p><span style="color: rgb(0, 0, 0)">clone tone 代码失败，请检查机器网络及代理，具体原因请进机器查看/tmp/prepare_tone.log。</span></p><h4></h4><h4>4. 为什么 prepare 步骤报 “<span style="color: rgb(0, 0, 0)">Failed to .....</span>” 错误？</h4><p><span style="color: rgb(0, 0, 0)">如果 prepare 步骤失败，排查原因请进入机器查看/tmp/prepare_tone.log。</span></p><p></p><h4>5. 为什么执行用例步骤报 “<span style="color: rgb(0, 0, 0)">script exec failed(signal: killed)</span>” 错误？</h4><p>有可能是用例<span style="color: rgb(0, 0, 0)">执行超时或进程被kill。</span></p><ul><li><p><span style="color: rgb(0, 0, 0)">用例执行超时，可适当延长用例执行时间。在 Test Suite 管理中调整“最大运行时长”。</span></p></li></ul><p></p><h4>6. 为什么执行用例步骤报 “<span style="color: rgb(0, 0, 0)">tone install ... error</span>” 错误？</h4><p><span style="color: rgb(0, 0, 0)">安装用例失败，具体原因请进机器 /tmp 下查看用例的相关日志。</span></p><p><span style="color: rgb(0, 0, 0)">例如 : "tone install ltp error"，进入机器查看 /tmp/tone_ltp.log。</span></p><p></p><h4>7. <span style="color: rgb(23, 26, 29)">安装内核之后还是原有内核，新装内核没有生效怎么处理？</span></h4><p><span style="color: rgba(0, 0, 0, 0.85)">有些机器在执行完安装内核步骤之后，当前内核依然不是指定安装的内核，加个全局变量：</span><span style="color: rgb(23, 26, 29)"> GRUB_FORCE_MKCONF=N </span><span style="color: rgba(0, 0, 0, 0.85)">，可以强制应用该内核。</span></p><p></p><h4>8. 如何控制 Test Suite / Test Conf 的执行顺序？</h4><p>在新建 Job 页面，选择用例之后可以配置 Test Suite/Test Conf 的执行优先级。（ Test Suite 级别的优先级需要打开“高级配置”开关才可配置。）</p><p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2022/png/236938/1664249055173-ec340edb-26a6-4fc6-9884-0fa58e18d18c.png"></p><ul><li><p>执行优先级配置的数值越大，优先级越高。</p></li></ul><p></p><h4><span style="color: rgb(23, 26, 29)">9. 为什么测试机上已经结束了，但是 </span><span style="color: var(--common_level1_base_color,#171a1d)">T-One </span><span style="color: rgb(23, 26, 29)">上还是显示 running？</span></h4><ul><li><p><span style="color: rgb(23, 26, 29)">Toneagent：</span></p></li></ul><p>可以进机器查看<span style="color: rgb(23, 26, 29)">/usr/local/logs/toneagent.log，以 TID 为关键词搜索相关内容。</span></p><p></p><h2>测试结果常见问题</h2><h4>1. 打开结果详情时，为什么有些任务<span style="color: rgb(23, 26, 29)">会自动展开，有的不会？</span></h4><p><span style="color: rgb(23, 26, 29)">目前自动展开功能的规则是：Test Case 或 Metric 的总条数在50条以下就自动展开，超过50条不会自动展开。</span></p><p></p><h4>2. 性能跟踪结果为什么显示为NA？</h4><p>如果性能跟踪结果显示为NA，可能是以下两种情况：</p><ul><li><p>没有设置测试基线</p></li><li><p>没有设置指标的阈值</p></li></ul><p></p><h2>测试分析常见问题</h2><h4>1. 为什么任务中<span style="color: rgb(23, 26, 29)">展示的指标数和对比分析报告中展示的指标数不一致？</span></h4><p><span style="color: rgb(23, 26, 29)">可能是没有跟踪指标，在</span>系统配置中 TestSuite 管理里添加跟踪指标，设置阈值。</p><p></p><h2>机器配置常见问题</h2><h4>1. 机器的 Toneagent 部署成功了，在内网机器池中添加机器时提示“机器未找到”的原因是？</h4><p>添加的机器可能是云上机器，不能添加到内网机器池。应在云上机器池中添加。</p><p></p><h4>2. <span style="color: rgb(38, 38, 38)">在机器池中添加阿里云控制台机器，机器列表中无法找到，</span>如何处理？</h4><ul><li><p>确认选择的 ak 与机器所属账号是否一致</p></li><li><p>确认选择的 region/zone 与机器所在 region/zone 是否一致</p></li><li><p>确认机器所在资源组是否为默认配置的资源组</p></li></ul><p></p><h4>3. 为什么机器状态显示 broken ?</h4><p>请按下面步骤排查原因：</p><ul><li><p>请检查机器是否正常开机、是否能 ping 通。</p></li><li><p>如果是 Toneagent 控制通道，请检查 Toneagent 服务是否正常。如果正常，请检查机器的时钟是否正确设置。</p></li></ul><ul><li><p>查看时间命令：date、date -R、hwclock --show。</p></li></ul><p></p><h2>用例配置常见问题</h2><h4>1. 系统配置中的 Test Suite 管理，" <span style="color: rgb(23, 26, 29)">默认用例" 是什么意思？</span></h4><p>如果是默认用例，新建 Workspace 的时候会自动加入。</p><h4></h4><h2>其他配置常见问题</h2><h4>1. <span style="color: rgb(23, 26, 29)">部署完 Toneagent，机器状态显示 broken，如何处理？</span></h4><ul><li><p>被动模式下，查看 8479 端口是否已开放。</p></li><li><p>主动模式下，检查机器配置的 tsn 和 Toneagent 服务端配置的 tsn 是否一致：</p></li></ul><ul><li><p>如果不一致，将其配置成一致。</p></li><li><p>如果一致，检查机器和 Toneagent 服务端网络是否通畅。</p></li></ul><p></p><h2>发送邮件常见问题</h2><h4>1. 任务发送的邮件正文没有时序分析链接的原因是？</h4><ul><li><p>任务中没有包含 "analytics</p></li></ul>"""