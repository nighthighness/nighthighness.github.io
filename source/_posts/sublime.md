---
title: sublime
date: 2018-03-05 14:23:43
tags:
     - sublime3
---

**sublime 3安装及使用**

作为轻量级编辑器，sublime如它的名字一样，好用，反应迅速，插件强大。
官网一般有安装包下载  [sublimetext.com](https://www.sublimetext.com) 
激活码一般度娘找

##### 插件使用
ctrl+shift+p 进入控制台，当然前提是安装了控制台功能
控制台功能：
在 ctrl+` 打开的底部任务栏窗口处添加以下代码
```
 import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by) ``` 

安装成功之后，ctrl+shift+p 进入控制台 输入install package项
强大的插件安装功能

**推荐使用**
①SublimeLiner -- 类似于 webstrom\Idea 里面的 <font color="lightblue">ToDo</font> 能够高亮一些特别的注释
②Emmet (既是原来的Zen Coding) 在editplus里面也以 Emmet 显示
③JS Format JS代码格式化插件
④auto Prefixer Css3代码前缀自动补全
⑤Bracket Hightlighter 代码匹配，不担心掉括号了

##### 还可以进行主题的选择 
同样通过 ctrl+shift+p 进入控制台 输入install package项
输入想要的theme主题 或 在输入的 theme  列表项相应选择安装

##### 移除插件
调出控制台
`` remove package ``
输入需要删除的 package  