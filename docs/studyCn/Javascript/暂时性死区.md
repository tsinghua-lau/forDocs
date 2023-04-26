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