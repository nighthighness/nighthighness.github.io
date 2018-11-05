---
title: socket.io
date: 2018-10-25 17:19:00
tags: 
    - websocket
---

#### socket.io 使用


Ⅰ.服务器端使用
``
npm install socket.io --save
``
node 监听 3000 端口, io 对 connection 进行监听

a.监听服务器所有客户端, 建立连接并返回所有连接对象
```node
	io.sockets.on('connection',function(sockect){
		console.log('one user is login')
	})
```

b.  io connect 后,  socket 进行监听事件 传递参数
 ```node
	sockect.on(event, function(name){
		socket.emit("user" + name + "is login")    // 通过emit 向本连接传递
	})
 ```
 <!-- more -->
#### socket 三种事件监听
``
io.sockets.emit() ----> 向所有客户端发送广播
``
``
socket.broadcast.emit() ----> 向除去本连接以外的所有客户端发送广播
``
``
socket.emit()  -----> 向建立本连接的客户端发送广播
``

## socket 通过 emit \ on 进行数据双向通信  在客户端、服务器端均可使用  是socket.io的核心函数
emit()  发送  参数：事件名, 数据, 回调函数
on()  监听 emit 发送的事件  参数：事件名，匿名函数

#### socket 三种默认事件
	connect \ message \ disconnect 三种事件满足条件 则 自动触发


Ⅱ. 客户端使用

客户端通过引入 <script src="/socket.io/socket.io.js"></script> 即可使用 
```javascript
 $(document).ready(function() {
   var socket = io.connect();
});
```
``
使用this.socket.on() ---> 进行事件监听  , 对服务器端发送的事件一一监听
``
``
包括：connect \ nickExisted \ loginSuccess \ system \ newMsg \ newImg
``
``
使用 this.socket.on() ---> 进行错误事件监听 
``