---
title 基础
---

# vue2为什么不能通过下标改变数组的值

## Object.defineProperty

```Object.defineProperty``` 可以监控到数组下标的变化

```js
function defineReactive(data, key, value) {
	 Object.defineProperty(data, key, {
		 enumerable: true,
		 configurable: true,
		 get: function defineGet() {
			 console.log(`get key: ${key} value: ${value}`)
			 return value
		 },
		 set: function defineSet(newVal) {
			 console.log(`set key: ${key} value: ${newVal}`)
			 value = newVal
		 }
	 })
}
 
function observe(data) {
	Object.keys(data).forEach(function(key) {
		defineReactive(data, key, data[key])
	})
}
 
let arr = [1, 2, 3]
observe(arr)

```

运行结果如下：

![run](/images/web/arr.png)


arr[1] 触发了 ```get``` 和  ```set```, Object.defineProperty 有监听数组索引的能力

vue2中对数组的7个方法（push、pop、shift、unshift、splice、sort、reverse） 进行了拦截重写实现了响应式

## 尤大大官方解释

性能代价和用户收益不成正比，在 Vue 的实现中，从`性能/体验`的性价比考虑，放弃了这个特性。

因为数组的长度不固定，通过遍历数组的每一项来进行拦截，性能开销是非常大的。而且通过下标直接修改数组的某一项的方式非常少，所以这个特性的收益非常低。

