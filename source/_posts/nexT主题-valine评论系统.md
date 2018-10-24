---
title: nexT主题+valine评论系统
date: 2018-10-11 11:08:37
tags: 
	- hexo
	- nexT
	- valine
---

#### nexT 安装
Ⅰ.
``` 
	git clone https://github.com/iissnan/hexo-theme-next themes/next
	cd themes/next
	git pull
```
#### 配置（主题配置+根站点配置）

Ⅱ.
根目录 _config.yml 配置 
theme: next


III.
切换主题：
在themes _config.yml 中 找到	# Schemes：
挑选一个主体进行解注释

 <!-- more -->
Ⅳ.
更改语言：
在 根目录 _config.yml 配置
language: zh-Hans


V.
tags 标签分类：
themes _config.yml 配置
```
  menu:
  home: / || home  //首页
  about: /about/ || user  //关于
  tags: /tags/ || tags  //标签   // 此处解注释
  categories: /categories/ || th   //分类
  archives: /archives/ || archive //归档
  schedule: /schedule/ || calendar   //日程表
  sitemap: /sitemap.xml || sitemap   //站点地图
```

此处使用 hexo new page "tags"
并在 tags/index.md 中进行编辑：
```
---
title: tags
date: 2018-10-11 10:36:20
type: "tags"
---
```

Ⅵ.
设置动态背景：
在 themes _config.yml 中配置
canvas_nest: ture


Ⅶ.
修改底部标签样式：
在 themes\next\layout\_macro\post.swig command+f搜索<font color="red">rel="tag"># </font>,
将#替换成``<i class="fa fa-tag"></i>``

Ⅷ.
配置评论系统：
打开 leancloud 平台
copy appID + App Key
对应 themes _config.yml 中配置
{% asset_img 1.png cleancloud %}


Ⅸ.
配置主题线条色彩：
打开 themes\next\source\lib\canvas-nest
找到 <font color="red">"opacity,color"</font>
修改 opacity,color . 调整线条颜色

V.
```
	hexo clean
	hexo g
	hexo d
```