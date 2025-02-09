# flake8: noqa

INSTALL_RPM = """#!/bin/sh

#--------------------------------------------
# 该脚本用来安装RPM包
# 使用场景：当用户在创建JOB选择安装RPM时
# 系统会执行该脚本来安装指定的RPM包
#--------------------------------------------

script_path=$(readlink -f `dirname $0`)


log_cmd()
{
	local cmd="$@"

	[ -z "$logfile" ] && logfile="/tmp/$(basename $0 | cut -d. -f1).log"
	[ -f "$logfile" ] || touch $logfile
	{
		echo "[$(date '+%F %T')] $cmd"
		$cmd
	} >> $logfile 2>&1
}


install_rpm()
{
	local ret=1
	local pkgs=$@

	# try 10 times
	for ((i=0; i<10; ++i)); do
		log_cmd rpm -ivh --force $pkgs
		if [[ $? != 0 ]]; then
			sleep 3
			continue
		else
			ret=0
			break
		fi
	done
	return $ret
}


install_rpm $@
if [[ $? != 0 ]]; then
    echo "Failed to install packages: $@"
    exit 1
else
    echo "Success to install packages: $@"
fi

"""