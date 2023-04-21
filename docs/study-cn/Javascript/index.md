
## JS数据类型

首先，JS 分为**基本数据类型**和**引用数据类型**。

基本数据类型： number , string , boolean , undefined , null ,symbol

引用数据类型： Object , Array , Function

## null 和 undefined 的区别

1. #### 意义不同

    null 表示没有对象，即该处不应该有值

    undefined 表示缺少值，即此处应该有值，但未定义

2. #### 类型转化不同

    null 默认转成 0

    undefined 默认转为 NaN


## 判断数组的方式

1. #### Array.isArray()

```javascript
let a = [1,2,3]
Array.isArray(a);//true
```

2. #### instanceof

```javascript
let a = [];
a instanceof Array; //true
```

3. #### constructor

```javascript
let a = [1,3,4];
a.constructor === Array;//true
```

4. #### Object.prototype.toString.call()

```javascript
let a = [1,2,3]
Object.prototype.toString.call(a) === '[object Array]';//true
```

它强大的地方在于不仅仅可以检验是否为数组，比如是否是一个函数，是否是数字等等。

```javascript
//检验是否是函数
let a = function () {};
Object.prototype.toString.call(a) === '[object Function]';//true
//检验是否是数字
let b = 1;;
Object.prototype.toString.call(a) === '[object Number]';//true
```

## 数组去重遇 深度对象处理

```javascript
let arr=[1,1,2,5,4,5,1,2,3];
let arr2=[...new Set(arr)];
console.log(arr2);
```

```javascript
let arr=[1,1,2,{a:'11'},5,4,5,1,2,3,{a:'11'}];
let arr2=[];
arr.forEach(item=>{
    arr2.findIndex(x=>JSON.parse(JSON.stringify(x)===JSON.stringify(item)))>=0?'':arr2.push(item);
})
console.log(arr2);
```


## 编写一个查找数组中最长公共前缀的函数

例如 str=['flower','flow','flight'] => 'fl'

例如 str=['tiger','dog','cat'] => ''

```javascript
let arr=['flower','flow','flight'];
let res='';
for(let i=0;i<arr[0].length;i++){
    let temp=arr[0][i];
    if(arr.every(x=>x.charAt(i)===temp)){
        res+=temp;
    }else{
        break;
    }
}
console.log(res);   // fl
```

## 数组转为对象

```javascript
let arr=['flower','flow','flight'];
let obj={...arr}
console.log(obj);   // {0: 'flower', 1: 'flow', 2: 'flight'}
```

##  new

```javascript
function _new(fn,...args) {
  let obj={};
  obj.__proto__=fn.prototype;
  fn.apply(obj, args)
  return obj;
}
```

##  forEach

```javascript
Array.prototype._forEach=function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
```

##  map

```javascript
Array.prototype._map=function (callback) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this))
  }
  return res
}
```

##  filter

```javascript
Array.prototype._filter=function (callback) {
    let res=[];
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this) && res.push(this[i])
    }
    return res;
}
```

##  every

```javascript
Array.prototype._every=function (callback) {
    let flag=true;
    for(let i=0;i<this.length;i++){
        flag = callback(this[i], i, this)
        if (!flag) break
    }
    return flag
}
```

##  some

```javascript
Array.prototype._some=function (callback) {
    let flag=false;
    for(let i=0;i<this.length;i++){
        flag = callback(this[i], i, this)
        if (flag) break
    }
    return flag
}
```

##  reduce

```javascript
Array.prototype._reduce=function (callback,...args) {
    let start=0,pre
    if(args.length){
        pre=args[0]
    }else{
        pre=this[0]
        start=1
    }
    for (let i = start; i < this.length; i++) {
        pre = callback(pre, this[i], i, this)
    }
    return pre
}
```

##  findIndex

```javascript
Array.prototype._findIndex=function (callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return i
        }
    }
    return -1
}
```

##  find

```javascript
Array.prototype._find=function (callback) {
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i]
        }
    }
    return undefined
}
```

##  fill

```javascript
Array.prototype._fill = function (value, start = 0, end) {
    end = end || this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}
```

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