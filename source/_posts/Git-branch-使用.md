---
title: Git 工作流以及--branch 使用
date: 2018-05-21 23:12:03
tags: 
	 - Git
	 - github
---

说到 Git 的使用 , 首先 , 这是一个版本控制工具

在 Git 的使用中, 存在着 **<font color="red">工作流</font>** 
也即是**<font color="red">working tree</font>**
主要包括：
① 工作目录 -- 包括实际存储的文件
② 缓存区(Index) -- git 缓存区 保存临时的改动
③ HEAD -- 指向最后一次提交的结果

扒张图如下：
 {% asset_img 1.png  git工作流 %}

 👆 通过上图能够看出来 , git HEAD 最后指向的 一定是通过 commit 后的最终文件

存在着以下的步骤：
##### git add eg.txt --->
将文件 添加到缓存区 
##### git commit -m " 提交信息 " --->
此时改动提交到了 HEAD 
##### git push --->
提交到 <font color="red">远程仓库</font>	

<!--more-->

下面是正文： 
#### 分支部分

同样扒张图 来看一下
{% asset_img 2.png 这是创建了一个分支 %}

##### 创建一个分支
``
	git checkout -b feature_x
``
	此处 是创建分支 feature_x 并 切换到 分支 feature_x
{% asset_img 4.png 此处为创建feature_x 并切换到此分支 %}

 
##### 切换分支
``
	git checkout feature_x
`` 
	此处为切换分支 到 feature_x 同样可以切换回 主分支(master)
##### 切换回主分支
``
	git checkout master
``
{% asset_img 3.png 切换回主分支 %}

<hr>
分支之间切换是为了保存你暂时不想合并的 改动内容 
① 可在 当前 分支 编写 需要修改 或者 还未完成的 工作
② 使用 git commit -m "提交当前分支" 至 feature_x 并进行 push 使远程 feature_x 提交成功 如下图所示： 
{% asset_img 5.png 如此图显示 %}
③ 此时主分支 看不到 其他分支的内容 可在feature_x 里面继续工作
④  完成工作后 将当前分支合并到 主分支(master)
```
	git add .
	git commit -m "合并feature_x 分支的工作"
	git merge feature_x
	git push
```
⑤ 此时主分支 master 能够看到 feature_x 提交的内容

到此 , 也就可以愉快的跟小伙伴组团开发了

简单来讲：
首先, 要存在一个**主分支** master

其次, 每个人有一个**自己的分支** <font color="red">eg： branch01</font> 进行自己代码的提交: <font color="red">
	git add .
	git commit -m 
	git push 
</font>

再次, 规定每隔一段时间, 需要一个小伙伴进行合并分支<font color="red">git merge branch01</font> 

再次次, 每个小伙伴 使用 
**<font color="red">git pull</font>** 
更新自己的 master 分支, 进行库的合并 ,使之与 远程端 master 一致

.........
**<font color="red">如此 ... 循环操作 </font>**
.........
直到 最终版本的确定

恭喜又习得新技能~
{% asset_img 2.jpg 嘿嘿~ %}