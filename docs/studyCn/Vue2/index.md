---
title 基础
---

## Vue 中的 key

可以有效避免 vue 为了性能，**就地复用** 的机制，更快，更准确地拿到 Vnode节点。

## v-if 和 v-show 的区别

v-show 其实就是 `display:none` 的切换。而 v-if 是是否渲染该内容。

一般将频繁显隐的元素用 v-show ，反之则 v-if 。

并且，由于 v-if="false" 时，内部组件是不会渲染的，所以可以将不重要的内容设置 false 。

需要时（或异步，比如 $nextTick）再设置为 true，这样可以优先渲染重要的其它内容，合理利用，可以进行性能优化。

## 计算属性和侦听器的区别

计算属性是通过某些变量，得到一个新的值，并且它相比侦听器，它有缓存，性能更好。

watch 侦听器是监听某个变量发生了改变之后，执行某些回调。

所以，只是需要动态值，那就用计算属性；需要知道值的改变后执行业务逻辑，才用 watch，用反或混用虽然可行，但都是不正确的用法。

## 组件中 data 为什么是函数 而 new Vue 实例里，data 可以直接是一个对象

首先，因为 Vue 是 `SPA` ,所以，组件都是复用的。对象是引用关系，没有作用域隔离，所以，需要函数作用域来隔离。

而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。

##  keep-alive 的理解

[浅析Vue系列之(一)详解keep-alive](https://juejin.cn/post/6844904084479164424)

## v-for 和 v-if 不能同时书写

首先， v-for 的优先级高于 v-if ，也就是说，假设总计50条数据，即使经过v-if以后，只剩下25条显示，但是v-for早就循环了一遍50条数据。

为了提高性能，解决办法就是用一个计算属性先将数据过滤了以后，v-for循环过滤了之后的数据。

## router path和name的区别

name和path都可以实现跳转

* name和params 结合使用

* path和query 结合使用

* 其实name和query也可以组合使用，但是参数无法正常传递接收

* params传递参数在地址栏是看不到的，就跟post请求很像

* query参数会显示在地址栏

## npm -s -d -g

1. npm install XXX -s 
        npm install XXX -s 相当于 npm install -S 相当于 npm install --save

        这样安装是局部安装的，会写进package.json文件中的dependencie里。

        dependencies： 表示生产环境下的依赖管理；

        说白了你安装一个库如果是用来构建你的项目的，比如echarts、element-ui，是实际在项目中起作用，就可以使用 -s 来安装。

2. npm install XXX -d
        npm install XXX -d 相当于 npm install -D 相当于 npm install --save-dev

        这样安装是局部安装的，会写进package.json文件中的devDependencies 里。

        devDependencies ：表示开发环境下的依赖管理；

        如果你安装的库是用来打包的、解析代码的，比如webpack、babel，就可以用 -d 来安装，项目上线了，这些库就没用了，不然留这些库给用户自己来打包和解析代码嘛。               

3. npm install XXX -g
        npm install XXX -g 表示全局安装，安装一次过后，你就可以在其他直接用啦。

4. npm install XXX
        npm install XXX   什么都不加的时候

        npm 5开始通过npm install 什么都不加 和 npm install --save一样，都是局部安装并会把模块自动写入package.json中的dependencies里。




---
进阶 基础
---

## nextTick

#### 为什么会有nextTick这个东西的存在?

因为 vue 采用的异步更新策略，当监听到数据发生变化的时候不会立即去更新DOM，
而是开启一个任务队列，并缓存在同一事件循环中发生的所有数据变更;
这种做法带来的好处就是可以将多次数据更新合并成一次，减少操作DOM的次数，
如果不采用这种方法，假设数据改变100次就要去更新100次DOM，而频繁的DOM更新是很耗性能的；

#### 宏任务
 script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering

#### 微任务
 script process.nextTick（Nodejs） 、promise 、Object.observe 、MutationObserver

#### 区别

 * 宏任务是每次执行栈执行的代码（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）

 * 浏览器为了能够使得JS引擎线程与GUI渲染线程有序切换，会在当前宏任务结束之后，下一个宏任务执行开始之前，对页面进行重新渲染（宏任务 > 渲染  > 宏任务 > ...）

 * 微任务是在当前宏任务执行结束之后立即执行的任务（在当前 宏任务执行之后，UI渲染之前执行的任务）。微任务的响应速度相比setTimeout（下一个宏任务）会更快，因为无需等待UI渲染。

当前宏任务执行后，会将在它执行期间产生的所有微任务都执行一遍。

#### 流程

1. 执行一个宏任务（首次执行的主代码块或者任务队列中的回调函数）
2. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
3. 宏任务执行完毕后，立即执行当前微任务队列中的所有任务（依次执行）
4. JS引擎线程挂起，GUI线程执行渲染
5. GUI线程渲染完毕后挂起，JS引擎线程执行任务队列中的下一个宏任务



#### nextTick原理

 * Vue中 数据变化 => DOM变化 是异步过程，一旦观察到数据变化，Vue就会开启一个任务队列，然后把在同一个事件循环 (Event loop) 中观察到数据变化的 Watcher（Vue源码中的Wacher类是用来更新Dep类收集到的依赖的）推送进这个队列。

 * 如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOM操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。

 * nextTick的作用是为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用
Vue.nextTick(callback)，JS是单线程的，拥有事件循环机制，nextTick的实现就是利用了事件循环的宏任务和微任务。



####  dom操作是异步的吗

dom的操作其实是同步的，但是渲染是异步的。因为JavaScript引擎线程跟GUI渲染线程是互斥的，即我执行的时候，你就靠边站，我执行完你才能执行。




