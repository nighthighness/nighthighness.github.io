---
title: hexo + domain绑定
date: 2018-05-03 10:22:14
tags: 
	- hexo 
	- domain
	- github
---

#### 绑定阿里云域名 

三处操作：
**<font color="red">github操作</font>**

**<font color="red">hexo端文件操作</font>**

**<font color="red">阿里云端操作</font>**

<!--more-->
##### 第一处操作
①github 仓库中找到 .io 的库
② settings 进入如下界面并进行更改
{% asset_img 3.png 修改domain指向地址%} 

##### 第二处操作
①添加 CNAME 文件
打开 CNAME 文件 添加内容如下：
 	xxx.com 
②hexo 重新部署推送至github
	```
	hexo g
	hexo d
    ```
##### 第三处操作
① *保证阿里云域名* 已经过实名认证
② 进入域名服务 进行 *域名解析*
③ 添加两条解析	

如图所示：
 **第一条**
{% asset_img 1.png 第一条解析 %}
添加记录类型：A
主机记录：www   xxxx.域名
解析路线：默认
记录值：对应的github的ip地址 (*此处可通过ping获取*)

**第二条**
{% asset_img 2.png 第二条解析%}
添加记录类型：CNAME
主机记录：@    xxxx.域名
解析路线：默认
记录值：username.github.io

完成 
稍等几分钟,可打开域名进行访问
{% asset_img icon_razz.gif 哈哈%}





 
 


