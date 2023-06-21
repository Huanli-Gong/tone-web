# flake8: noqa

SSH_PUB_KEY = """#!/bin/bash

#--------------------------------------------
# 该脚本用来对集群下的机器做免密操作
# 原理是生成ssh key并返回，然后系统拿到ssh key之后写入到其他机器
#--------------------------------------------

if [ ! -f "/root/.ssh/id_rsa.pub" ]; then
	ssh-keygen -b 2048 -t rsa -f /root/.ssh/id_rsa -q -N ""
fi

cat /root/.ssh/id_rsa.pub

"""
