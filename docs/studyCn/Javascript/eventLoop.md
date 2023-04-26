## event loop

![event-loop](/images/web/event-loop.gif)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如图所示，浏览器V8引擎遇到同步任务会直接进入<p color =#33CC33 bgcolor=#33CC33 size = 4 face = "华文新魏">调用栈</p>执行，遇到异步交给由浏览器的Web Apis来执行，执行完之后将回调添加到<p color =#33CC33 bgcolor=#33CC33 size = 4 face = "华文新魏">调用队列(任务队列)</p>，等调用栈的任务清空后执行调用队列事件，来实现 event loop。

## new

* 1、创建一个空对象

var obj = new Object(); 

* 2、让Person中的this指向obj，并执行Person这个构造函数

var result = Person.call(obj);  

* 3、设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象

obj.__proto__ = Person.prototype; 

* 4、判断result的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。（因此调用call方法的时候可能返回了this，也可能没有返回）

```javascript
if (typeof(result) == "object") 
	person = result;  
else
	person = obj;


   function Person() {
    this.name = 'pcm'
    this.age = 20
    // return this    //可有可无，因为在下面做了判断
}

```

整体实例如下：

```javascript

let obj = new Object()
let result = Person.call(obj)
obj.__proto__ = Person.prototype

console.log(result)

if (typeof result === 'object') {
    person = result
} else {
    person = obj
}
console.log(person)
console.log('******')

console.log(person.name)

```