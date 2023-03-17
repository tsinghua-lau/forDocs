import{o as n,c as s,a,e as t}from"./app.9032fc35.js";const o='{"title":"event loop","description":"","frontmatter":"title Javascript 进阶","headers":[{"level":2,"title":"event loop","slug":"event-loop"},{"level":2,"title":"new","slug":"new"},{"level":2,"title":"var let const 变量提升","slug":"var-let-const-变量提升"},{"level":2,"title":"for in 缺陷","slug":"for-in-缺陷"},{"level":2,"title":"for in 与 for of","slug":"for-in-与-for-of"}],"relativePath":"Javascript/advanced.md","lastUpdated":1679049468637}',l={},e=a("h2",{id:"event-loop"},[a("a",{class:"header-anchor",href:"#event-loop","aria-hidden":"true"},"#"),t(" event loop")],-1),c=a("p",null,[a("img",{src:"/assets/event-loop.9d818b57.gif",alt:"event-loop"})],-1),p=a("p",null,[t("     如图所示，浏览器V8引擎遇到同步任务会直接进入"),a("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"华文新魏"},"调用栈"),t("执行，遇到异步交给由浏览器的Web Apis来执行，执行完之后将回调添加到"),a("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"华文新魏"},"调用队列(任务队列)"),t("，等调用栈的任务清空后执行调用队列事件，来实现 event loop。")],-1),u=a("h2",{id:"new"},[a("a",{class:"header-anchor",href:"#new","aria-hidden":"true"},"#"),t(" new")],-1),i=a("ul",null,[a("li",null,"1、创建一个空对象")],-1),r=a("p",null,"var obj = new Object();",-1),k=a("ul",null,[a("li",null,"2、让Person中的this指向obj，并执行Person这个构造函数")],-1),d=a("p",null,"var result = Person.call(obj);",-1),f=a("ul",null,[a("li",null,"3、设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象")],-1),g=a("p",null,[t("obj."),a("strong",null,"proto"),t(" = Person.prototype;")],-1),v=a("ul",null,[a("li",null,"4、判断result的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。（因此调用call方法的时候可能返回了this，也可能没有返回）")],-1),b=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"typeof"),a("span",{class:"token punctuation"},"("),t("result"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token operator"},"=="),t(),a("span",{class:"token string"},'"object"'),a("span",{class:"token punctuation"},")"),t(" \n\tperson "),a("span",{class:"token operator"},"="),t(" result"),a("span",{class:"token punctuation"},";"),t("  \n"),a("span",{class:"token keyword"},"else"),t("\n\tperson "),a("span",{class:"token operator"},"="),t(" obj"),a("span",{class:"token punctuation"},";"),t("\n\n\n   "),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"Person"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("name "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token string"},"'pcm'"),t("\n    "),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),t("age "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"20"),t("\n    "),a("span",{class:"token comment"},"// return this    //可有可无，因为在下面做了判断"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n")])])],-1),m=a("p",null,"整体实例如下：",-1),y=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[t("\n"),a("span",{class:"token keyword"},"let"),t(" obj "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token keyword"},"new"),t(),a("span",{class:"token class-name"},"Object"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token keyword"},"let"),t(" result "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token function"},"Person"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"call"),a("span",{class:"token punctuation"},"("),t("obj"),a("span",{class:"token punctuation"},")"),t("\nobj"),a("span",{class:"token punctuation"},"."),t("__proto__ "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token class-name"},"Person"),a("span",{class:"token punctuation"},"."),t("prototype\n\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("result"),a("span",{class:"token punctuation"},")"),t("\n\n"),a("span",{class:"token keyword"},"if"),t(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"typeof"),t(" result "),a("span",{class:"token operator"},"==="),t(),a("span",{class:"token string"},"'object'"),a("span",{class:"token punctuation"},")"),t(),a("span",{class:"token punctuation"},"{"),t("\n    person "),a("span",{class:"token operator"},"="),t(" result\n"),a("span",{class:"token punctuation"},"}"),t(),a("span",{class:"token keyword"},"else"),t(),a("span",{class:"token punctuation"},"{"),t("\n    person "),a("span",{class:"token operator"},"="),t(" obj\n"),a("span",{class:"token punctuation"},"}"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("person"),a("span",{class:"token punctuation"},")"),t("\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'******'"),a("span",{class:"token punctuation"},")"),t("\n\nconsole"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("person"),a("span",{class:"token punctuation"},"."),t("name"),a("span",{class:"token punctuation"},")"),t("\n\n")])])],-1),h=a("h2",{id:"var-let-const-变量提升"},[a("a",{class:"header-anchor",href:"#var-let-const-变量提升","aria-hidden":"true"},"#"),t(" var let const 变量提升")],-1),w=a("ol",null,[a("li",null,"var")],-1),j=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"//变量age自动提升到函数作用域顶部"),t("\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n   console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("age"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n   "),a("span",{class:"token keyword"},"var"),t(" age "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"26"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n\n"),a("span",{class:"token comment"},"//等同于如下的代码："),t("\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n   "),a("span",{class:"token keyword"},"var"),t(" age"),a("span",{class:"token punctuation"},";"),t("    "),a("span",{class:"token comment"},"//先声明，并赋值成undefined"),t("\n   console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("age"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n   age "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"26"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("   "),a("span",{class:"token comment"},"//undefined"),t("\n\n")])])],-1),C=a("ol",{start:"2"},[a("li",null,"let const")],-1),P=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[t("\n"),a("span",{class:"token keyword"},"function"),t(),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n    console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),t("a"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("\n    "),a("span",{class:"token keyword"},"let"),t(" a "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n"),a("span",{class:"token function"},"foo"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),t("   "),a("span",{class:"token comment"},"//VM254:2 Uncaught ReferenceError: Cannot access 'a' before initialization"),t("\n\n")])])],-1),S=a("p",null,"The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.（这些变量是在实例化包含它们的词法环境时创建的，但在评估变量的词法绑定之前，不得以任何方式访问它们。）",-1),_=a("p",null,"通过let或者const声明的变量会在进入块级作用域的时被创建，但是在该变量没有赋值之前，引用该变量JavaScript引擎会抛出错误。这就是“暂时性死区”。这主要是因为V8虚拟机做了限制，虽然a在内存中，但是当你在let a 之前访问a时，根据ECMAScript定义，虚拟机会阻止的访问",-1),x=a("h2",{id:"for-in-缺陷"},[a("a",{class:"header-anchor",href:"#for-in-缺陷","aria-hidden":"true"},"#"),t(" for in 缺陷")],-1),E=a("ol",null,[a("li",null,[a("p",null,[t("for-in用来循环对象中的属性，但是通过for-in循环输出的属性名的"),a("code",null,"顺序"),t("是不可测的。具体来说，所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。")])]),a("li",null,[a("p",null,[t("ES5之前：如果表示要迭代的对象的变量值为null或undefined，for-in语句会"),a("code",null,"抛出错误"),t("；")])]),a("li",null,[a("p",null,"ES5之后：这种情况不再抛出错误，而只是不执行循环体。")]),a("li",null,[a("p",null,[t("for-in会遍历"),a("code",null,"原型链"),t("上的属性")])])],-1),O=a("h2",{id:"for-in-与-for-of"},[a("a",{class:"header-anchor",href:"#for-in-与-for-of","aria-hidden":"true"},"#"),t(" for in 与 for of")],-1),z=a("ul",null,[a("li",null,"for...in 遍历得到 key"),a("li",null,"for...of 遍历得到 value")],-1),J=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"const"),t(" arr "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"11"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"22"),a("span",{class:"token punctuation"},","),a("span",{class:"token number"},"33"),a("span",{class:"token punctuation"},"]"),t("\n"),a("span",{class:"token keyword"},"for"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" val "),a("span",{class:"token keyword"},"in"),t(" arr"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'for...in'"),a("span",{class:"token punctuation"},","),t(" val"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n\n"),a("span",{class:"token keyword"},"for"),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"let"),t(" val "),a("span",{class:"token keyword"},"of"),t(" arr"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},"{"),t("\n  console"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'for...of'"),a("span",{class:"token punctuation"},","),t(" val"),a("span",{class:"token punctuation"},")"),t("\n"),a("span",{class:"token punctuation"},"}"),t("\n")])])],-1),M=a("p",null,[a("img",{src:"/assets/run.85aaf370.jpg",alt:"run"})],-1),V=a("p",null,"for...in 可以用在可枚举的数据，如：",-1),A=a("ul",null,[a("li",null,"对象"),a("li",null,"数组"),a("li",null,"字符串")],-1),L=a("p",null,[t("什么是可"),a("code",null,"枚举"),t("数据呢？ 使用 "),a("code",null,"Object.getOwnPropertyDescriptors"),t(" 方法获取指定对象所有的自有属性的属性描述符 每一个属性中 "),a("code",null,"enumerable"),t(" 都是 "),a("code",null,"true"),t("，这时候他就是可枚举的 "),a("img",{src:"/assets/run2.42f5b44c.jpg",alt:"run"})],-1),U=a("p",null,"for...of用于可迭代的数据，如：",-1),B=a("ul",null,[a("li",null,"数组"),a("li",null,"字符串"),a("li",null,"Map"),a("li",null,"Set")],-1),D=a("p",null,"什么是可迭代数据呢？",-1),I=a("div",{class:"language-javascript"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"const"),t(" arr "),a("span",{class:"token operator"},"="),t(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),t(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},"]"),t("\n")])])],-1),R=a("p",null,[t("数组中有个 Symbol.iterator的属性： "),a("img",{src:"/assets/run3.8fcb1e7d.jpg",alt:"run"})],-1),T=a("ol",null,[a("li",null,[a("p",null,[t("只要一个数据已经实现了Iterator接口, 那么这个数据就有一个叫做"),a("code",null,"[Symbol.iterator]"),t("的属性")])]),a("li",null,[a("p",null,[a("code",null,"[Symbol.iterator]"),t("的属性会返回一个函数")])]),a("li",null,[a("p",null,[a("code",null,"[Symbol.iterator]"),t("返回的函数执行之后会返回一个对象")])]),a("li",null,[a("p",null,[a("code",null,"[Symbol.iterator]"),t("函数返回的对象中又一个名称叫做next的方法")])]),a("li",null,[a("p",null,"next方法每次执行都会返回一个对象{value: 10, done: false}")]),a("li",null,[a("p",null,"这个对象中存储了当前取出的数据和是否取完了的标记")])],-1);l.render=function(a,t,o,l,W,q){return n(),s("div",null,[e,c,p,u,i,r,k,d,f,g,v,b,m,y,h,w,j,C,P,S,_,x,E,O,z,J,M,V,A,L,U,B,D,I,R,T])};export default l;export{o as __pageData};