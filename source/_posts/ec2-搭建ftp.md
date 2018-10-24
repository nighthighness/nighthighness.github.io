---
title: aws + ec2 搭建ftp
date: 2018-10-12 15:18:30
tags: 
	- aws
	- ec2
	- ftp
---

#### ec2 + 搭建ftp服务器
前言
需要注册 aws 账号 ,
搭建 linux 服务器环境

<!--more-->

Ⅰ.
登陆远程 linux 服务器
``
ssh root@ip地址
`` 

Ⅱ.
使用yum安装vsftpd
``
yum install -y vsftpd
``

Ⅲ.
安装后,启动FTP服务：
``
service vsftpd start
``

Ⅳ.
启动后,查看系统监听的端口：
``
netstat -nltp | grep 21
``

Ⅴ.
配置ftp权限, 编辑 /etc/vsftpd/vsftpd.conf, 找到下面两处位置并修改：
作用：
禁用匿名用户 12 YES 改为 NO
禁止切换目录 101 行 删除 #
```
anonymous_enable=NO
chroot_local_user=YES
```

Ⅵ.
重启ftp服务
创建ftp 用户
```
useradd web
echo "123456" | passwd --stdin
```
{% asset_img 2.png 创建web用户并创建密码 %}

Ⅶ.
限制用户仅能通过 FTP 访问
限制用户 ftpuser只能通过 FTP 访问服务器，而不能直接登录服务器：
``
usermod -s /sbin/nologin web
``

Ⅷ.
为用户分配主目录
/data/ftp 为主目录, 该目录不可上传文件
/data/ftp/pub 文件只能上传到该目录下
``
mkdir -p /data/ftp/pub
``
设置访问权限
``
chmod a-w /data/ftp && chmod 777 -R /data/ftp/pub
``

Ⅸ.
设置为用户的主目录：
``
usermod -d /data/ftp web
``

Ⅹ.
开放ftp 21 端口 或者 关闭防火墙
关闭SELinux服务
``
setenforce 0
``
关闭防火墙
``
iptables -F
``
--------------分割线------------------
设置入站规则
{% asset_img 4.png %}

--------------分割线------------------
本机下载leapFTP
输入用户名, 密码 登陆
{% asset_img 3.png ftp本地客户端 %}

登陆成功

<font color="red">注意：</font>
不要使用资源管理器登陆
使用 leapFTP 登陆
