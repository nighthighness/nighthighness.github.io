---
title: valine体验--开启评论系统
date: 2018-06-26 22:57:46
tags: 
	- git
	- hexo 
	- github
	- valine
---
	
hexo 作为静态博客很受欢迎,除了可以应该用github上大量主题之外
还可以开启友链、打赏、评论等互动功能

hexo 搭载了众多可使用的评论系统,如：
<font color = "red">畅言,多说,有言,disqus...等等</font>
目前本博客使用 <font color="red">**valine**</font> 评论系统
原因有三：
	1.轻量级
	2.注册快捷
	3.简单优雅大方 markdown语法支持
	4.官方解释：Leancloud的快速、简洁且高效的无后端评论系统

这里放出链接 [valine](https://valine.js.org/)

 <!-- more -->

使用方法如下：
###### 首先配置 leancloud 平台
①[valine](https://valine.js.org/) 
②进入链接 [leancloud](https://leancloud.cn/dashboard/login.html#/signup)
	如果没有账号,快速注册一个
③快速创建一个应用👇 如图
	{% asset_img 1.png 创建应用 %}
④进入控制台找到设置
	如图复制 appid 与 appkey 
	{% asset_img 2.png 复制id %}
⑤安全中心绑定域名
	此处注意踩坑 http 与 https 两者缺一不可
	{% asset_img 3.png 绑定域名 %}

###### 其次配置 hexo
①目前使用主题为 yilia 主题 需要去看主题说明 
	{%asset_img 4.png 主题更改配置链接 %}
	此处传送链接[yilia + valine](https://github.com/litten/hexo-theme-yilia/pull/646)
②安装 valine 插件
``npm install valine --save``
③在yilia 配置文件中进行相关配置如图：
	a.配置说明 {%asset_img 6.png 配置说明 %}
	b.yilia theme config 配置开启：
		{% asset_img 5.png yml配置 %}
	c.配置layout/partial/article.ejs:
		{% asset_img 7.png article.ejs配置 %}
	d.新建layout/post/vaine.ejs 并复制保存以下代码
		{% asset_img 8.png valine.ejs配置 %}
④分别保存并运行 hexo d
搞定
	{% asset_img 9.png 拜谢 %}
感谢 litten valine 大佬们
	




