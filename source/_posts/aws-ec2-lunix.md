---
title: 'aws + ec2 + linux '
date: 2018-10-12 09:41:25
tags: 
	- aws
	- ec2
	- vpn
---

## aws ec2实例 + linux 搭建vpn
科学上网,从我做起

电脑端准备工作
Ⅰ.
首先,需要有个亚马逊账号,注册准备工作：
信用卡一张,授权亚马逊使用会扣$1美元
可通信电话
电子邮箱
<!--more-->

Ⅱ.
登陆之后找到 ec2.
启动一个新的实例
{% asset_img 1.png 启动实例 %}

Ⅲ.
选择创建实例的服务器类型
此处选择linux
{% asset_img 2.png linux 服务器 %}

Ⅳ.
默认选项 
{% asset_img 3.png %}
创建新的密钥对
下载密钥对
{% asset_img 4.png %}
直到启动实例

Ⅴ.
启动实例
给实例设置 name 以便于区分


Ⅵ.
编辑入站规则
{% asset_img 11.png %}

Ⅴ.
连接到实例
初始化实例需要稍等一会 
{% asset_img 5.png %}
实例连接成功：
{% asset_img 6.png %}

-----------分割线--------------

##### 操作远程linux系统
1.创建root用户及密码：
``
sudo passwd root
`` 
2.切换到root账户：
``
su root
``
3.使用root身份编辑亚马逊主机的ssh登录方式
``
vi /etc/ssh/sshd_config
``
把 PasswordAuthentication no 改为 PasswordAuthentication yes
如果没有则新插进去
使用 i 进行修改
出现可修改 insert , 修改后 esc :wq 退出
4.重启sshd使修改生效
``
service sshd restart
``
5.使用用户名密码远程连接
``
ssh root@ip地址
``
------------分割线--------------
##### 搭建vpn
Ⅰ.
安装wget
``
yum -y install wget
``
Ⅱ.
安装setuptools
``
wget --no-check-certificate https://bootstrap.pypa.io/ez_setup.py
sudo python ez_setup.py --insecure
``
Ⅲ.
下载pip安装包，解压
```
wget https://pypi.python.org/packages/11/b6/abcb525026a4be042b486df43905d6893fb04f05aac21c32c638e939e447/pip-9.0.1.tar.gz#md5=35f01da33009719497f01a4ba69d63c9

tar -xf pip-9.0.1.tar.gz
# 切换路径
cd pip-9.0.1
# 安装
sudo python setup.py install
# 添加引用
ln -s /usr/local/python27/bin/pip /usr/bin/pip  #如果报 File exists 忽略此步
```
Ⅳ.
安装shadowsocks远程客户端
``
pip install shadowsocks
``
Ⅴ.
添加shadowsocks配置文件
```
mkdir /etc/shadowsocks/
cd /etc/shadowsocks/
vi config.json
```
Ⅵ.
粘贴已下内容
```
{    
  "server":"0.0.0.0",
  "server_port":8388,
  "local_port":1080,     
  "password":"替换为密码",
  "timeout":600,    
  "method":"aes-256-cfb",
  "fast_open":false
}
```
Ⅶ.
启动服务
``
ssserver -c /etc/shadowsocks/config.json -d start
``
看到
{% asset_img 7.png 服务启动 %}
服务启动成功
-----------------分割线------------------
Ⅰ.
本机电脑
安装 shadowsocks
{% asset_img 8.png shadowsocks %}
{% asset_img 9.png 下载地址 %}

Ⅱ.
配置 shadowsocks
填写ip, 登陆密码
{% asset_img 10.png 配置%}