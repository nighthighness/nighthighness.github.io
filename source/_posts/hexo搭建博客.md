---
title: hexo搭建博客
date: 2018-02-01 12:59:42
tags: 
     - hexo
---
#### 根据以下几个步骤进行，注意步骤顺序不要错

1.  新建文件夹(Blog)
2.  `` git bash here --- npm install -g hexo ``
(安装后不报错，否则清空文件夹----重新开始)
3.  创建 hexo 文件夹  --进入hexo文件夹
   ①git bash here ---- hexo init
   ②npm intall  (拉node包)
4.  完成上述步骤：
    ① `` hexo g ``
    ② `` hexo s ``  
    ③ localhost:4000
5.  git ----个人博客远程库搭建
    ①新建库：命名：nighthighness.github.io
    ②连接库：hexo文件夹内 _config.yml 打开
  deploy:
  type: git
  repository:   http://github.com/nighthighness/nighthighness.github.io.git
  branch: master

  **此处注意两点:type:git  、 repository:https---->http**
6. 更改yml文件保存：
   ① hexo g
   ② 部署包(拉包)`` npm install hexo-deployer-git --save ``
   ③ hexo d
7. 完成
   nighthighness.github.io可打开
8. 域名绑定见另篇内容
  [绑定阿里云域名](http://nighthighness.site/2018/05/03/custom-domain/) 


<!--more-->
## 配置 ##

##### Site
title: Nighthighness
subtitle: Nighthighness--BloG
description: 1+1=？
author: nighthighness
language: zh-CN
timezone:

##### Writing
38line post_asset_folder: true

##### Pagination
## Set per_page to 0 to disable pagination
per_page: 5
pagination_dir: page

### hexo常见命令 ###
新建文章
`` hexo new "postName" ``
新建页面 
`` hexo new page "pageName"`` 
生成静态页面至public目录
`` hexo generate `` 
开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
`` hexo server `` 
部署到GitHub
`` hexo deploy ``
查看帮助
`` hexo help ``
查看Hexo的版本
`` hexo version ``

### 命令缩写 ###
`` hexo n `` 
`` hexo g `` 
`` hexo s `` 
`` hexo d `` 

 ### 组合命令 ###
生成并本地预览
`` hexo s -g ``
生成并上传
`` hexo d -g `` 
