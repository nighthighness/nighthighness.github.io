---
title: vue-cli+axios+百度搜索引擎接口调调用_实现搜索功能(踩坑)
date: 2018-07-18 16:02:11
tags: 
	- hexo
	- vue-cli
	- axios
	- http
---
#### vue_search 小案例

**实现方式**

###### 使用 vue-cli + webpack + axios  实现调用 百度搜索引擎接口 
<font color = 'red'>重点： 使用 axios http 跨域请求、webpack 配置 跨域请求设置</font> 

###### 首先要踩的几个坑：

## 注意eslint 语法规范

#### 第一步.
 1. vue-cli 项目初始化  vue init webpack vue_search
 2. 注意 eslint \ vue-router \ npm install 的安装使用
 3. 安装 插件库 axios ---> 基于 http 协议  npm install --save-dev
 4. 如图：
{% asset_img 1.png 安装依赖 %}

#### 第二步.
文件夹路径 cd 进入时， 大小写一定要注意，否则 <font color="red">eslint 警告</font>

<!--more-->
#### 第三步.
 1. main.js 引入axios . 并加入 prototype , 使 axios 可以全局使用
 {% asset_img 2.png main.js 引入axios %}

 2. config 下 index.js 中配置    proxyTable 配置如下：
```
	proxyTable: {
        '/api': {
          target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',//设置你调用的接口域名和端口号 别忘了加http
          changeOrigin: true,
          pathRewrite: {
            '^/api': '/'
                  // 这里理解成用‘/api’代替target里面的地址，
                  // 后面组件中我们掉接口时直接用api代替 比如我要调
                  // 用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
          }
        }  
    },  	
```

#### 第四步.
	接口调用: 百度里面扒接口

#### 第五步.
	axios调用：
```
	this.$http('/api',{
		params: { wd: this.msg }
	}).then(res => {
			console.log(res.data)
		}, res => {
			alert('网络错误')
			})
```	
 
##### 完成

