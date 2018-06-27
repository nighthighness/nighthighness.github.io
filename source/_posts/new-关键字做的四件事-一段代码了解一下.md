---
title: 'new 关键字做的四件事,一段代码了解一下'
date: 2018-05-31 17:29:14
tags: 
	- javaScript
---

如题： 放代码

```
	function Person() { 
		this.name = 'eric'; 
		this.age = 7; 
	}

	var name = new Person();

	// 1.创建一个空对象obj 
	var obj = {}

	// 2.设置obj的__proto__为原型 
	obj.__proto__ = Person.prototype;

	// 3.使用obj作为上下文调用Person函数 
	var person1 = Person.call(obj); 

	// 4.如果构造函数返回的是原始值，那么这个返回值会被忽略 如果构造函数返回的是对象，就返回这个对象
	if (typeof person1 == 'object'){ 
		return person1; 
	}else{ 
		return person2 
	}
```
