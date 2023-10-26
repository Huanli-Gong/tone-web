# flake8: noqa

UPLOAD = """#!/bin/bash

#--------------------------------------------
# 该脚本用来当RUN_TEST步骤失败或者中止后上传执行日志
#--------------------------------------------

TONE_PATH=$1
TEST_SUITE=$2
TEST_CONF=$3
OSS_RESULT_FOLDER=$4
CONF_SHORT_NAME=$5
TONE_STORAGE_BUCKET=${{6:-results}}


TONE_STORAGE_HOST={tone_storage_host}
TONE_STORAGE_SFTP_PORT={tone_storage_sftp_port}
TONE_STORAGE_PROXY_PORT={tone_storage_proxy_port}
TONE_STORAGE_USER={tone_storage_user}
TONE_STORAGE_PASSWORD={tone_storage_password}

LOG=/tmp/tone_${{TEST_SUITE}}_${{CONF_SHORT_NAME}}.log
ALL_LOG=/tmp/tone.log
TONE_RESULT_PATH=$TONE_PATH/result/$TEST_SUITE/$CONF_SHORT_NAME
TONE_RESULT_PATH_LEN=$((${{#TONE_RESULT_PATH}}+1))
SFTP_PARAMS="set sftp:auto-confirm yes; set net:timeout 60; set net:reconnect-interval-base 10; set net:max-retries 2"

install_utils()
{{
 yum install -y lftp >> $ALL_LOG 2>&1
}}

function upload_file(){{
    file=$1
    new_file=$2
    folder=$3
    echo_sw=$4
    if [[ ! -e $file ]];then
        return
    fi
    if [ "$new_file" == "" ];then
        file_name=$(date +%s)"_$1"
    else
        file_name=$new_file
    fi


    if [ "$folder" == "" ];then
      file_path=${{TONE_JOB_ID}}
    else
      file_path=${{TONE_JOB_ID}}/$folder
    fi

    if [[ $? != "0" ]];then
        return
    fi

    lftp -u ${{TONE_STORAGE_USER}},${{TONE_STORAGE_PASSWORD}} -e "${{SFTP_PARAMS}}" sftp://${{TONE_STORAGE_HOST}}:${{TONE_STORAGE_SFTP_PORT}} >> $ALL_LOG 2>&1 <<EOF
    cd ${{TONE_STORAGE_BUCKET}}
    mkdir -p $file_path
    cd $file_path
    mput $file
    by
EOF
}}

install_utils

if [ -f "/tmp/prepare_tone.log" ];then
  echo "#####################################################
###################tone prepare log###################
#####################################################" > $ALL_LOG
  echo "" >> $ALL_LOG
  cat /tmp/prepare_tone.log >> $ALL_LOG
  upload_file /tmp/prepare_tone.log prepare_tone.log $OSS_RESULT_FOLDER no_echo
fi
if [ -f "$LOG" ];then
  echo "" >> $ALL_LOG
  echo "#####################################################
###################tone install && run################
#####################################################" >> $ALL_LOG
  echo "" >> $ALL_LOG
  cat $LOG >> $ALL_LOG
  upload_file $LOG tone_run.log $OSS_RESULT_FOLDER no_echo
fi

if [ -f "$ALL_LOG" ];then
  echo list_file $TONE_RESULT_PATH >> $ALL_LOG
  echo upload_file $ALL_LOG tone.log $OSS_RESULT_FOLDER >> $ALL_LOG
  upload_file $ALL_LOG tone.log $OSS_RESULT_FOLDER no_echo
fi
"""
