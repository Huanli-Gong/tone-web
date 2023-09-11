# flake8: noqa

INSTALL_KERNEL_DEBIAN = """#!/bin/bash

#--------------------------------------------
# 该脚本用来安装内核（针对Debian系统）
# 使用场景：当用户在创建JOB选择安装内核时
# 系统会执行该脚本来安装指定内核
#--------------------------------------------

logfile='/tmp/tone_run.log'

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


install_deb()
{
	local ret=1
	local pkg=$1

	# try 3 times
	for i in $(seq 1 3); do
		log_cmd dpkg -i --force $pkg
		if [[ $? != 0 ]]; then
			sleep 1
			continue
		else
			ret=0
			break
		fi
	done
	return $ret
}


# remove existing kernel-headers to avoid dependency error
if echo $@ | grep -qE "kernel-headers|kernel-alinux-headers"; then
	for x in `dpkg -l | grep -E "kernel-headers|kernel-alinux-headers"`; do
		log_cmd dpkg -r --nodeps $x
	done
fi

for pkg in $@;do
    install_deb $pkg
    if [ $? != 0 ]; then
      echo "Failed to install kernel deb: $pkg"
    exit 1
fi
done

# print installed kernel package for better tone output
if [ -n "$new_kver" ]; then
	echo "Kernel: $new_kver"
else
	dpkg -l | grep "$(basename $1 .deb)"
fi

echo "install kernel done."
exit 0

"""