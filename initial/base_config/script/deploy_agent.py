# flake8: noqa

DEPLOY_AGENT = """#!/bin/bash

#--------------------------------------------
# 该脚本用来部署 toneagent 服务
# 使用场景：当用户在创建JOB、选择使用弹性机器池里的机器配置当做测试机时
# 系统会自动根据配置创建 ecs 实例，然后自动给机器部署 toneagent 服务
# 此时会调用该脚本来完成部署操作
# 主要流程是：
    1.下载安装包 
    2.安装 
    3.修改配置文件
#--------------------------------------------

toneagent_dir=/usr/local/toneagent/rpm
config_file=/usr/local/toneagent/conf/toneagent.config.yaml
rpm_url={rpm_url}

rm -Rf $toneagent_dir
mkdir -p $toneagent_dir
cd $toneagent_dir

echo "[log]downloading the rpm package..."
curl $rpm_url --connect-timeout 10 -o toneagent.rpm
if [ $? -ne 0 ]; then
    echo "[log]rpm download failed..."
    exit 1
fi

echo "[log]install toneagent..."
yum -y install toneagent.rpm
if [ $? -ne 0 ]; then
    echo "[log]rpm install failed..."
    exit 1
fi

echo "[log]modify toneagent configuration..."
echo -e "tsn: {tsn}\nmode: {mode}\nproxy: {proxy}" > $config_file
if [ $? -ne 0 ]; then
    echo "[log]modify toneagent configuration failed..."
    exit 1
fi

systemctl restart toneagent
echo "[log]toneagent deploy success!"
"""