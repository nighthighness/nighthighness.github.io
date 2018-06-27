---
title: git-基础操作
date: 2018-05-27 15:30:12
tags: 
	- git 
	- github
---

git 基础使用

###### 首先 git 是个版本控制工具
① 拥有一个自己的github 账号：[github](http://github.com)
② 安装 git pc 客户端 [git](https://git-scm.com)
③ 给电脑授权,生成 ssh key 
``
	$ ssh-keygen -t rsa -C "xxx@xxx.com"
`` 
c盘生成 rsa.pub 文件
④ 添加计算机使用权限
github -->setting --> ssh and GPG keys 添加
⑤ 全局配置 用户名 和 邮箱 并进行验证 
``` 
	git config --global user.name "xxx"
	git config --global user.email "xxx@xxx.com" 
	ssh -T git@github.com
```
⑥ git 本地端仓库
``
	git init 
``
⑥ github 远程仓库 推送
```
	git add .
	git commit -m "提交到..."
	git remote add origin git@github.com:xxx/xxx.git
	git push -u origin master 
```
⑦ 第二次此仓库提交
```
	git add .
	git commit -m "第二次提交..."
	git push 
```

over.
{% asset_img 1.png over %}


