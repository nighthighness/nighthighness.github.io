---
title: gitpush冲突解决
date: 2018-06-25 21:29:46
tags: 
	- git
	- github
---


#### 如题

冲突原因：
远程端或有合作的小伙伴已经更新了代码
本地代码再次进行提交时 发生冲突

#### 造成如下图报错：
{% asset_img 1.png git push 错误 %}

此时解决办法：
① 使用git pull 先拉远程库到本地
② 在进入的 vim 界面进行如下操作
1. press <font color = "blue">i</font>	 进入输入模式
2. 按 esc 退出修改 commit 
3. 输入 <font color= "red"> :wq</font> 退出并进行合并
🌂 重新使用 git push
搞定  
