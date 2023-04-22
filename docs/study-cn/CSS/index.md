---
title 关于CSS
---

## 盒模型

![盒模型](/images/web/box-sizing.png)

## box-sizing

`box-sizing` 主要分为 `border-box` 和 `content-box`

拿 width 举例：

`content-box： width = content + padding + border`

`border-box： width = content`

为了方便样式计算，一般采用 `border-box`

## 外边距塌陷

外边距塌陷也被称为外边距合并。

是指两个在正常流中相邻的**上下块级元素**的边距塌陷，垂直距离取两个值中的较大者。

## 子元素有高度，父元素高度为0

首先，这种情况被称为**高度坍塌**。

1. 父元素 `position: absolute` 绝对定位，脱离文档流

2. 父元素 `float` 设置了浮动，脱离文档流

## 清除浮动

1. 父元素设置 `overflow: hidden;`

2. 在父元素中添加一个空元素，设置 `clear:both`

3. 给父元素的伪元素添加 `clear:both`

## 伪元素和伪类的区别


- 伪类

类不就是 `class='title'` ，所以，它就是添加所谓的效果的。

常用的伪类有： `:active` , `:focus` , `:hover` , `:link` , `:visited` , `:visited` 等。

- 伪元素

元素不就是类似于 `<div></div>` 这种，在文档中有实际的占用空间的，能用来创建一些原有 DOM 结构不存在的元素。

常用的伪元素有： `::before` , `::after` , `::first-letter` , `::first-line` 等。

一般伪元素用 `::` 双冒号，伪类用 `:` 单冒号

## link和@import的区别

1. link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

2. link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

3. link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

4. link支持使用Javascript控制DOM去改变样式；而@import不支持。


## display:none与visibility:hidden的区别

#### DOM结构

1. display:会让元素完全从渲染树中消失，渲染的时候不占据任何空间

2. visibility:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见

3. opacity:不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见

#### DOM事件

* display:无法进行 DOM 事件

* visibility:无法进行 DOM 事件

* opacity:可以进行 DOM 事件

#### 继承

* display:是非继承属性，通过修改子孙节点属性无法显示

* visibility:是继承属性，子孙节点消失由于继承了hidden，通过设置visible可以让子孙节点显式

* opacity:是非继承属性，通过修改子孙节点属性无法显示

#### 性能

* display:修改元素会造成文档回流，性能消耗较大，读屏器不会读取display: none元素内容

* visibility:修改元素只会造成元素的重绘，性能消耗较少，读屏器读取visibility: hidden元素内容

* opacity:修改元素会造成重绘，但是性能会更好

#### transition

 display:transition不支持display

* visibility:transition从理论上来说是支持visibility，但是过渡效果不如平常属性一样，从hidden到visible是无过渡效果的，从visible到hidden变成了一种延迟效果。

* opacity:transition支持opacity

## z-index属性在什么情况下不起作用

* 元素没有设置position属性（不包括static）

* 元素设置了浮动float

* 父级元素的z-index比子级元素的z-index小

* 元素的父级设置了position: relative
