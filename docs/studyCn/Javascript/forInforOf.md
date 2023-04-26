## for in 缺陷

1. for-in用来循环对象中的属性，但是通过for-in循环输出的属性名的`顺序`是不可测的。具体来说，所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。

2. ES5之前：如果表示要迭代的对象的变量值为null或undefined，for-in语句会`抛出错误`；

3. ES5之后：这种情况不再抛出错误，而只是不执行循环体。

4. for-in会遍历`原型链`上的属性

## for in 与 for of

*  for...in 遍历得到 key
* for...of 遍历得到 value

```javascript
const arr = [11, 22,33]
for(let val in arr){
  console.log('for...in', val)
}

for(let val of arr){
  console.log('for...of', val)
}
```

![run](/images/web/run.jpg)


for...in
可以用在可枚举的数据，如：
* 对象
* 数组
* 字符串

什么是可`枚举`数据呢？
使用 `Object.getOwnPropertyDescriptors` 方法获取指定对象所有的自有属性的属性描述符
每一个属性中 `enumerable` 都是 `true`，这时候他就是可枚举的
![run]![run](/images/web/run2.jpg)


for...of用于可迭代的数据，如：

* 数组
* 字符串
* Map
* Set

什么是可迭代数据呢？

```javascript
const arr = [10, 20, 30]
```


数组中有个 Symbol.iterator的属性：
![run](/images/web/run3.jpg)

1. 只要一个数据已经实现了Iterator接口, 那么这个数据就有一个叫做`[Symbol.iterator]`的属性

2. `[Symbol.iterator]`的属性会返回一个函数

3. `[Symbol.iterator]`返回的函数执行之后会返回一个对象

4. `[Symbol.iterator]`函数返回的对象中又一个名称叫做next的方法

5.  `next`方法每次执行都会返回一个对象 `{value: 10, done: false} `

6. 这个对象中存储了当前取出的数据和是否取完了的标记