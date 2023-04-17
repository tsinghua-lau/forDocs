import{_ as a,c as l,o as p,b as s,d as n,e as o}from"./app.4acad237.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"J","7":"a","8":"v","9":"a","10":"s","11":"c","12":"r","13":"i","14":"p","15":"t","16":" ","17":"进","18":"阶"},"headers":[{"level":2,"title":"event loop","slug":"event-loop","link":"#event-loop","children":[]},{"level":2,"title":"new","slug":"new","link":"#new","children":[]},{"level":2,"title":"var let const 变量提升","slug":"var-let-const-变量提升","link":"#var-let-const-变量提升","children":[]},{"level":2,"title":"for in 缺陷","slug":"for-in-缺陷","link":"#for-in-缺陷","children":[]}],"relativePath":"guide/Javascript/advanced.md","lastUpdated":1675390351000}'),e={name:"guide/Javascript/advanced.md"},t=s("h2",{id:"event-loop",tabindex:"-1"},"event loop",-1),c=s("p",null,[n("     如图所示，浏览器V8引擎遇到同步任务会直接进入"),s("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"华文新魏"},"调用栈"),n("执行，遇到异步交给由浏览器的Web Apis来执行，执行完之后将回调添加到"),s("p",{color:"#33CC33",bgcolor:"#33CC33",size:"4",face:"华文新魏"},"调用队列(任务队列)"),n("，等调用栈的任务清空后执行调用队列事件，来实现 event loop。")],-1),r=o(`<h2 id="new" tabindex="-1">new</h2><ul><li>1、创建一个空对象</li></ul><p>var obj = new Object();</p><ul><li>2、让Person中的this指向obj，并执行Person这个构造函数</li></ul><p>var result = Person.call(obj);</p><ul><li>3、设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象</li></ul><p>obj.<strong>proto</strong> = Person.prototype;</p><ul><li>4、判断result的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。（因此调用call方法的时候可能返回了this，也可能没有返回）</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;">(result) </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span></span>
<span class="line"><span style="color:#A6ACCD;">	person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">	person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> obj</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Person</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pcm</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// return this    //可有可无，因为在下面做了判断</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>整体实例如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Object</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Person</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(obj)</span></span>
<span class="line"><span style="color:#A6ACCD;">obj</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__proto__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">person</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">******</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="var-let-const-变量提升" tabindex="-1">var let const 变量提升</h2><ol><li>var</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//变量age自动提升到函数作用域顶部</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//等同于如下的代码：</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">//先声明，并赋值成undefined</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//undefined</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="2"><li>let const</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">//VM254:2 Uncaught ReferenceError: Cannot access &#39;a&#39; before initialization</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated.（这些变量是在实例化包含它们的词法环境时创建的，但在评估变量的词法绑定之前，不得以任何方式访问它们。）</p><p>通过let或者const声明的变量会在进入块级作用域的时被创建，但是在该变量没有赋值之前，引用该变量JavaScript引擎会抛出错误。这就是“暂时性死区”。这主要是因为V8虚拟机做了限制，虽然a在内存中，但是当你在let a 之前访问a时，根据ECMAScript定义，虚拟机会阻止的访问</p><h2 id="for-in-缺陷" tabindex="-1">for in 缺陷</h2><ol><li><p>for-in用来循环对象中的属性，但是通过for-in循环输出的属性名的<code>顺序</code>是不可测的。具体来说，所有属性都会被返回一次，但返回的先后次序可能会因浏览器而异。</p></li><li><p>ES5之前：如果表示要迭代的对象的变量值为null或undefined，for-in语句会<code>抛出错误</code>；</p></li><li><p>ES5之后：这种情况不再抛出错误，而只是不执行循环体。</p></li><li><p>for-in会遍历<code>原型链</code>上的属性</p></li></ol>`,20),y=[t,c,r];function i(F,D,A,C,d,u){return p(),l("div",null,y)}const g=a(e,[["render",i]]);export{f as __pageData,g as default};