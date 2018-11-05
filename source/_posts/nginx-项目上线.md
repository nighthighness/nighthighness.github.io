---
title: nginx -- 项目上线
date: 2018-11-05 14:36:52
tags: 
- aws
- ec2
- nginx
- linux
---

#### 项目上线准备工作
1. 服务器：linux
2. 域名：xxx.com/xxx.cn
3. 实例对象：ftp搭建已完成
 
服务器：可选择阿里云, 亚马逊, 新浪云, 购买服务器 以 linux ,redhat 系统 为准
使用方法：生成服务器实例 
传送门： 见 [亚马逊 ec2 实例](http://nighthighness.site/2018/10/12/ec2-%E6%90%AD%E5%BB%BAftp/)

域名：服务器提供商均可进行域名购买, 域名购买后, 需在 服务器平台进行解析
安装: ec2 实例生成后, 进行远程登陆
ftp: 远程登陆 
传送门：见 [亚马逊ec2+ ftp 搭建](http://nighthighness.site/2018/10/12/ec2-%E6%90%AD%E5%BB%BAftp/)

<!-- more -->
#### 安装 node
```
# 下载node压缩包
wget https://npm.taobao.org/mirrors/node/v10.6.0/node-v10.6.0-linux-x64.tar.xz
# 解压
tar -xvf node-v10.6.0-linux-x64.tar.xz
# 更改node安装目录
mv node-v10.6.0-linux-x64 /root/node
# 配置全局环境变量 
ln -s /root/node/bin/node /usr/sbin/node
ln -s /root/node/bin/npm /usr/sbin/npm
```

#### 安装mysql
```
# 查看是否有自带的MySql库，如果先有卸载
rpm -qa | grep mysql
# 删除mysql-lib(系统自带的版本过低)
yum remove mysql-libs
# 下载mysql
wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.12-1.el6.x86_64.rpm-bundle.tar 
# 解压
tar -xvf mysql-5.7.12-1.el6.x86_64.rpm-bundle.tar  
# 依次安装mysql包（common、libs、client、server）
rpm -ivh mysql-community-common-5.7.12-1.el6.x86_64.rpm
rpm -ivh mysql-community-libs-5.7.12-1.el6.x86_64.rpm
rpm -ivh mysql-community-client-5.7.12-1.el6.x86_64.rpm  
rpm -ivh mysql-community-server-5.7.12-1.el6.x86_64.rpm 
# 启动mysql服务
service mysqld start
# 查看默认密码
grep 'password' /var/log/mysqld.log
# [Note] A temporary password is generated for root@localhost: x2sX3Gb6+Dtm
# root@localhost: 这里后面就是默认密码
# 登陆
mysql -uroot -p
# 修改默认密码
SET PASSWORD = PASSWORD('Abcd1234.');
# ps：这里需要大小写数组字符相结合，不然会通不过
# 刷新系统权限
flush privileges;
# 开启远程登录权限
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'Abcd1234.' WITH GRANT OPTION;
# 刷新系统权限
flush privileges;
# 接下来就可以远程登陆了
```

#### 安装nginx
```
# 安装wget
yum install -y weget
# 安装编译工具和相关的库文件 
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
# 下载PCRE（让Nginx支持RUL地址的重定向功能）
wget https://sourceforge.net/projects/pcre/files/pcre/8.41/pcre-8.41.tar.gz
# 解压
tar -xvzf pcre-8.41.tar.gz
# 进入安装包目录
cd pcre-8.41
# 编译安装
./configure
make && make install
# 下载安装 Nginx
wget http://nginx.org/download/nginx-1.14.0.tar.gz
# 解压
tar -xvzf nginx-1.14.0.tar.gz
# 进入安装包目录：
cd nginx-1.14.0
# 编译安装：
./configure --prefix=/usr/local/share/applications/nginx-1.14.0/ --with-http_ssl_module
make && make install
# 启动Ngnix
/usr/local/share/applications/nginx-1.14.0/sbin/nginx
```

#### nginx 文件配置
1. 进入如下文件
``
	cd /usr/local/share/applications/nginx-1.14.0/conf
	vi nginx.conf
``
2. 编辑如下配置：
```
server {
    listen       80;
    server_name  aaa.com;  # 购买的域名地址
    
    location / {
        root   项目路径1; # ftp上传的 项目路径
        index  index.html index.htm;
        # 端口代理
        proxy_pass   http://127.0.0.1:3000;
    }
}
#  第二个项目
server {
    listen       80;
    server_name  bbb.com; 
    
    location / {
        root   项目路径2;
        index  index.html index.htm;
        # 端口代理
        proxy_pass   http://127.0.0.1:4000;
    }
}
```
3. 编辑后重启 nginx 服务
``
/usr/local/share/applications/nginx-1.14.0/sbin/nginx -s reload
``
#### 项目部分
1. 进行项目打包
``
	npm run bulid
``
2. 将生成的index.html  & dist 目录 & 服务器 上传到 远程 ftp 上传的地址如下

3. 创建存放项目的文件夹及路径
```
# 如果没有此文件夹  创建 mkdir
cd /var/www/html
```
4. 启动后台服务

#### nginx 常规操作
```
# 启动nginx
/usr/local/share/applications/nginx-1.14.0/sbin/nginx
 
# 重新载入配置文件
/usr/local/share/applications/nginx-1.14.0/sbin/nginx -s reload 
 
# 重启 Nginx
/usr/local/share/applications/nginx-1.14.0/sbin/nginx -s reopen      
      
# 停止 Nginx
/usr/local/share/applications/nginx-1.14.0/sbin/nginx -s stop
```

