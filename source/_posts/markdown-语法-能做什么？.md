---
title: markdown 语法 能做什么？
date: 2018-10-11 14:53:03
tags:
	- markdown
	- hexo
---


## markdown 语法能做点啥

#### todoList

- [x] 已完成事项
	- [x] 已完成事项
	- [ ] 未完成事项

#### 流程图

hexo 默认不支持 markdow 流程图, 需要插件支持
``
	npm install --save hexo-filter-flowchart
``

```flow
st=>start: 开始 
op1=>operation: My Operation 
c=>condition: Yes or No? 
e=>end: 结束

st->op1->c
c(yes)->e
c(no)->op1
```




