# flake8: noqa

RUN_TEST_DEBIAN = """#!/bin/bash

#--------------------------------------------
# 该脚本用来执行测试用例、上传测试结果和执行日志（针对Debian系统）
# 主要操作是：
#   1.安装依赖
#   2.安装测试用例
#   3.执行测试用例
#   4.上传测试结果及日志
#--------------------------------------------

export PYTHONIOENCODING=utf-8

TONE_STORAGE_HOST={tone_storage_host}
TONE_STORAGE_SFTP_PORT={tone_storage_sftp_port}
TONE_STORAGE_PROXY_PORT={tone_storage_proxy_port}
TONE_STORAGE_USER={tone_storage_user}
TONE_STORAGE_PASSWORD={tone_storage_password}
TONE_STORAGE_BUCKET=${{7:-results}}

TONE_PATH=$1
TONE_BIN=/usr/local/bin/tone
TEST_SUITE=$2
TEST_CONF=$3
REPEAT=$4
OSS_RESULT_FOLDER=$5
CONF_SHORT_NAME=$6
OSS_PARENT_FOLDER=${{7:-tone/results}}

TONE_RESULT_PATH=$TONE_PATH/result/$TEST_SUITE/$CONF_SHORT_NAME
TONE_RESULT_PATH_LEN=$((${{#TONE_RESULT_PATH}}+1))

LOG=/tmp/tone_${{TEST_SUITE}}_${{CONF_SHORT_NAME}}.log
ALL_LOG=/tmp/tone.log
SERVICE_HOSTS=${{SERVICE_HOSTS:-""}}
rm -Rf $LOG > /dev/null 2>&1
rm -Rf $ALL_LOG > /dev/null 2>&1
date > $LOG

if [ ! -d $TONE_PATH ];then
  echo "$TONE_PATH not a directory"
  exit 1
fi

if [ ! -x "$TONE_BIN" ];then
  echo "$TONE_BIN not found"
  exit 1
fi


install_utils()
{{
 apt-get install -y expect >> $ALL_LOG 2>&1
}}


prepare_suite(){{
  #install suite
  echo -e "
##CMD: tone fetch $TEST_SUITE && tone install $TEST_SUITE && tone list $TEST_SUITE" >> $LOG
  cd $TONE_PATH
  tone fetch $TEST_SUITE >> $LOG 2>&1
  tone install $TEST_SUITE >> $LOG 2>&1
  tone list $TEST_SUITE >> $LOG 2>&1
  if [ $? -ne 0 ];then
    echo "tone install $TEST_SUITE error"
    upload_file $LOG tone.log $OSS_RESULT_FOLDER no_echo
    exit 1
  fi
}}

validate_ssh(){{
    expect << EOF
    set timeout 5

    spawn sftp -P $TONE_STORAGE_SFTP_PORT $TONE_STORAGE_USER@$TONE_STORAGE_HOST
    expect {{
        "yes/no" {{ send "yes\\n";exp_continue }}
        "password" {{ send "$TONE_STORAGE_PASSWORD\\n" }}
    }}
    expect "password" {{ send "$TONE_STORAGE_PASSWORD\\n" }}
    expect "tp>" {{ send "exit\\n" }}
    expect eof
EOF
    echo "ssh key validation success!"
}}

upload_file(){{
    file=$1
    new_file=$2
    folder=$3
    echo_sw=$4
    #if [ ! -e $file ];then
    #    return
    #fi
    if [ "$new_file" = "" ];then
        file_name=$(date +%s)"_$1"
    else
        file_name=$new_file
    fi


    if [ "$folder" = "" ];then
      file_path=${{TONE_JOB_ID}}
    else
      file_path=${{TONE_JOB_ID}}/$folder
    fi

    if [ $? != "0" ];then
        return
    fi

    mkdir -p $file_path
    
    expect << EOF
    set timeout 30

    spawn sftp -P $TONE_STORAGE_SFTP_PORT $TONE_STORAGE_USER@$TONE_STORAGE_HOST
    expect "password" {{ send "$TONE_STORAGE_PASSWORD\\n" }}
    
    expect "tp>" {{ send "cd $TONE_STORAGE_BUCKET\\n" }}
    expect "tp>" {{ send "cd $file_path\\n" }}
    expect "tp>" {{ send "put $file\\n" }}
    expect "tp>" {{ send "exit\\n" }}
    expect EOF
EOF
    rm -rf $file_path

}}


upload_dir(){{
    dir=$1
    if [ -z $dir ];then
        echo "upload dir not exists"
        exit 2
    fi

    mkdir -p $TONE_JOB_ID/$OSS_RESULT_FOLDER 
    
    expect << EOF
    set timeout 30

    spawn sftp -P $TONE_STORAGE_SFTP_PORT $TONE_STORAGE_USER@$TONE_STORAGE_HOST
    expect "password" {{ send "$TONE_STORAGE_PASSWORD\\n" }}
    
    expect "tp>" {{ send "cd $TONE_STORAGE_BUCKET\\n" }}
    expect "tp>" {{ send "put -R $TONE_JOB_ID\\n" }}
    expect "tp>" {{ send "cd $TONE_JOB_ID/$OSS_RESULT_FOLDER\\n" }}
    expect "tp>" {{ send "lcd $dir\\n" }}
    expect "tp>" {{ send "put -r *\\n" }}
    expect "tp>" {{ send "exit\\n" }}
    expect EOF
EOF
    rm -rf $TONE_JOB_ID
}}


list_file(){{
    for i in `ls $1`
    do
      son="$1/$i"
      if [ -d $son ] && [ $son != "." ] && [ $son != ".." ];then
        list_file $son
      else
        echo ${{son:$TONE_RESULT_PATH_LEN}} >> $LOG
        echo ${{son:$TONE_RESULT_PATH_LEN}}
      fi
    done
}}

install_utils

validate_ssh

# echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config
# systemctl restart sshd

if [ -z ${{CLUSTER_SERVERS+x}} ];then
    echo "##standalone test .." >> $LOG
    prepare_suite $TONE_PATH $TEST_SUITE
else
    echo "##cluster test, prepare suite for all cluster servers: $CLUSTER_SERVERS" >> $LOG
    for ip in $CLUSTER_SERVERS
    do
    	if [[ "$SERVICE_HOSTS" == *"$ip"* ]]; then
        	echo "## service host: $ip skip.."
        else
        	echo "##tone install $TEST_SUITE on $ip" >> $LOG
        	$remote_ssh root@$ip "cd $TONE_PATH && tone fetch $TEST_SUITE && tone install $TEST_SUITE && tone list $TEST_SUITE" >> $LOG 2>&1
        	if [ $? -ne 0 ];then
				echo "tone install $TEST_SUITE error on $ip"
          		upload_file $LOG tone.log $OSS_RESULT_FOLDER no_echo
          		exit 1
        	fi
        fi
    done
fi


for i in `seq $REPEAT`
do
    echo -e "
##CMD: tone run $TEST_SUITE:$TEST_CONF, repeat:$i" >> $LOG
    $TONE_BIN run $TEST_SUITE:$TEST_CONF >> $LOG 2>&1
done
run_ret=$?


if [ $run_ret -ne 0 ];then
  echo "tone run $TEST_SUITE:$TEST_CONF failed"
  upload_file $LOG tone.log $OSS_RESULT_FOLDER no_echo
  exit 1
fi
sleep 5
sync

# 必须在 upload_file 之前
upload_dir $TONE_RESULT_PATH

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

file_result_path="http://$TONE_STORAGE_HOST:$TONE_STORAGE_PROXY_PORT/$TONE_STORAGE_BUCKET/$TONE_JOB_ID/$OSS_RESULT_FOLDER/"
echo $file_result_path >> $LOG
echo $file_result_path

list_file $TONE_RESULT_PATH
"""