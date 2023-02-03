---
title Javascript 进阶
---

## event loop


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

## var let const 变量提升


1. var 
```javascript
//变量age自动提升到函数作用域顶部
function foo(){
   console.log(age);
   var age = 26;
}
foo();

//等同于如下的代码：
function foo(){
   var age;    //先声明，并赋值成undefined
   console.log(age);
   age = 26;
}
foo();   //undefined

```

2. let const 

```javascript

function foo(){
    console.log(a);
    let a = 1;
}
foo();   //VM254:2 Uncaught ReferenceError: Cannot access 'a' before initialization

```
The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.（这些变量是在实例化包含它们的词法环境时创建的，但在评估变量的词法绑定之前，不得以任何方式访问它们。）


通过let或者const声明的变量会在进入块级作用域的时被创建，但是在该变量没有赋值之前，引用该变量JavaScript引擎会抛出错误。这就是“暂时性死区”。这主要是因为V8虚拟机做了限制，虽然a在内存中，但是当你在let a 之前访问a时，根据ECMAScript定义，虚拟机会阻止的访问

## for in 缺陷

1. for-in用来循环对象中的属性，但是通过for-in循环输出的属性名的`顺序`是不可测的。具体来说，所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。

2. ES5之前：如果表示要迭代的对象的变量值为null或undefined，for-in语句会`抛出错误`；

3. ES5之后：这种情况不再抛出错误，而只是不执行循环体。

4. for-in会遍历`原型链`上的属性








 


