
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
// 1
```






