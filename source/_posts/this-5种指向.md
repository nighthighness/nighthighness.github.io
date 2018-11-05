---
title: this 5种指向
date: 2018-05-29 15:19:12
tags: 
	- javaScript
---

###### this 的指向问题
this 的指向容易头晕
此处翻了大神的文章 得出 this ——> 5种指向

下面准备好编辑器, 慢慢看

<font color="red">*第一种*</font>
**1. this 指向 当前调用 它 的对象**
```javascript
	var obj = {
		a: 20,
		fun: function(){
			console.log(this.a)
	}
}
	obj.fun();  //20  
	// 此时 this --> obj 
	
	obj.fun = {
		a: 30,
		fun: function(){
			console.log(this.a)
		}
	}
	obj.fun.fun();  //30
	// 此时 this --> fun   
	// this 指向只在上一级对象进行绑定
```
<font color="red">*第二种*</font>
**2. this 指向全局**
```javascript
	var a = 20;
	var fun = function(){
		console.log(this.a)
	// fun 为全局 this --> 全局
}
```
<!--more-->
<font color="red">2.1 易出现的错误</font>
```javascript
	var a = 10;
	var obj = {
		a: 20,
		fun: function(){
			console.log(this.a);
			var foo = function(){
				console.log(this.a)
			}
			foo(); //2
			// 调用前方没有对象 , this 指向全局
		}
	}
	obj.fun(); // 20
```
此时 obj.fun() this --> obj, foo() --> 无对象调用, this -->全局 全局 a = 10

此时 使 foo()内 this 指向 a:20 ,需要 缓存 this
```javascript
	var a = 10;
	var obj = {
		a: 20,
		fun: function(){
			console.log(this.a);  // this --> a:20
			var that = this;  // 缓存当前 this 指向
			var foo = function(){ 
				console.log(that.a) // that --> a:20
			} 
			foo();
		}
	}

obj.fun();
```

<font color="red">2.2 易出现的错误</font>
```javascript
	var a = 10;
	var obj = {
		a: 20,
		fun: function(){ 
			console.log(this.a)  // this--> a:20
		}
	}

	obj.fun();  
	var funOut = obj.fun; // 函数未调用
	funOut();    // this指向全局  a:10
 	var obj2 = {
		a: 30,
		fun: obj.fun
	}
	obj2.fun(); // 30
```
此时 三处调用 三处输出 
① line9 obj.fun() this 指向obj  this.a = 20
② line11    funOut() --> window.funOut()
this 指向全局  this.a = 10
③ line16 obj2.fun() this 指向obj2 this.a = 30

<font color="red">*第三种*</font>
**3.this 指向call 或 apply**
```javascript
	var obj = {
		a: 20,
		fun: function(){
			console.log(this.a)
		}
	}
	var obj2 = {
		a: 30
	}
	obj.fun.call(obj2);  // 30
```
此时 使用 call 强行将 obj2 的属性绑定给 obj 
this-->obj2 this.a = 30

<font color="red">*第四种*</font>
**4.this 指向new 构造函数创建的对象 **
```javascript
	function Money(){
		this.money = 100;
	} 
	var eric = new Money(); //this 指向 new 出来的 对象
```
<font color="red">*第五种*</font>
**5.this 指向当前对象所调用的 callback **

```javascript
	<div id="box">内容区</div>
	var box = document.getElementById("box")
	box.onclick = function(){
		this.innerHTML= "click me";
	}
```
此时 调用 callback 的对象为 box , this 将指向 传给 调用 callback 的对象
this --> box


<font color="red">over.</font> 


