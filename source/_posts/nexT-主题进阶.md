---
title: nexT 主题进阶
date: 2018-10-12 21:42:34
tags: 
	- hexo
	- nexT
---
### 涉及背景、侧边栏、标签栏、点击效果、音乐插件

#### 背景设置
F12 查看元素位置
找到 themes/next/source/css/_common/components/post/post.styl
添加以下代码：
```
	border: 1px solid #C4C6CE;
	border-radius: 10px;
	box-shadow: 0 0 5px  #ADB2B2;
	background: white;
	padding: 5px 30px;
```

#### 侧边栏设置
① 开启侧边栏头像
编辑站点配置 _config.yml
``
	avatar: themes/next/source/images/avatar.png
``

② 处理

<!-- more -->
#### 页面点击添加效果1
① 在/themes/next/source/js/src 下新建文件 clicklove.js
并粘贴以下代码
```
!function(e,t,a){
	function n(){
		c(".heart{
				width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);
			}
			.heart:after,.heart:before{
				content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;
			}
			.heart:after{top: -5px;}
			.heart:before{left: -5px;}"
		),
		o(),
		r()
	}
	function r(){
		for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");
		requestAnimationFrame(r)
	}
	function o(){
		var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}
	}
	function i(e){
		var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)
	}
	function c(e){
		var a=t.createElement("style");a.type="text/css";
		try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)
	}
	function s(){
		return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
	}
	var d=[];
	e.requestAnimationFrame=function(){
		return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}
	}(),n()}(window,document);
```
② 修改layout.swig
\themes\next\layout\_layout.swig 末尾添加：
```
<script type="text/javascript" src="/js/src/clicklove.js"></script>
```

#### 页面点击添加效果2
① 在/themes/next/source/js/src 下新建文件 click+.js
```
	$(".post-body").click(function(e){
		var n=Math.round(Math.random()*20);//随机数
		var $i=$("<b>").text("+"+n);//添加到页面的元素
		var x=e.pageX,y=e.pageY;//鼠标点击的位置
		$i.css({
			"z-index":99999,
			"top":y-15,
			"left":x,
			"position":"absolute",
			"color": "red"
		});
		$("body").append($i);
		$i.animate(
			{"top":y-180,"opacity":0},
			1300,
			function(){$i.remove();}
		);
		e.stopPropagation();
});
```
② 修改layout.swig
\themes\next\layout\_layout.swig 末尾添加：
```
<script type="text/javascript" src="/js/src/click+.js"></script>
```
③ <font color="red"></font>注意：文件包需要有jquery
#### 离开欺骗
① 在next\source\js\src 文件夹下创建 crash_cheat.js
```
var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
```
② 修改layout.swig
\themes\next\layout\_layout.swig 末尾添加：
```
<script type="text/javascript" src="/js/src/crash_cheat.js"></script>
```

