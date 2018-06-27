---
title: JS数据属性&访问器属性
date: 2018-02-28 16:43:32
tags:
    - javaScript
    - es5
---

javaScript 中,一切皆对象。对象中可以包含"基本值、对象、函数"。
**创建自定义函数**
#### 第一种字面直接量
```     
var person = {
	name:'eric',
	age:24,
	intr:function(){
		console.log(this.name)
	}	
}
```

#### 第二种创建对象实例
```
var person = new Object();
person.name = "eric";
person.age = 24;
person.intr = function(){
	console.log(person.name)
}
```
**属性类型**
javaScript中定义了两种不用的属性类型：
	一种是数据属性：用于储存属性的值
	另一种是访问器属性：一般用来进行get/set操作

**<font color="red">数据属性</font>**
Configurable、Enumerable、Writable、Value
前三者默认值为<font color="pink">true</font>,Value默认值为特定值
设置对象数据属性为不可更改：
```
	var person = {
		name :'eric',
	}
	Object.definerProperty(person,'name',{
		configurable:false;
	})	
	consoel.log(person.name); //eric
	<font color="blue">delete</font> person.name;
	console.log(person.name); //eric
```

<font color="red">访问器属性</font>

##### getter/setter函数
```
	var person = {
		name:'hammer',
		age:'23',
		gender:'male'
	}
	Object.defineProperty(person,'age',{
		get:function(){
			return this._age; //此时age属性只读
		}
	});

	Object.defineProperty(person,'name',{
		set:function(name){
			return this._name = name; //此时name属性只写
		}
	});

	Object.defineProperty(person,'gender',{
		//此时gender属性可读可写
		get:function(){
			return this._gender; 
		}
		set:function(gender){
			return this._gender = gender; 
		}
	});

```
