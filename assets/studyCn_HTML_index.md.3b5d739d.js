import{_ as e,o as a,c as o,R as t}from"./chunks/framework.af956f17.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"基","7":"础"},"headers":[],"relativePath":"studyCn/HTML/index.md"}'),d={name:"studyCn/HTML/index.md"},l=t('<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>HTML 的英文全称叫 <code>Hyper Text Markup Language</code> ,也叫做 <strong>超文本标记语言</strong> ，是一种使用结构化 Web 网页及其内容的标记语言。</p><p>主要用于定义网页中的结构。</p><h2 id="html-语义化" tabindex="-1">HTML 语义化 <a class="header-anchor" href="#html-语义化" aria-label="Permalink to &quot;HTML 语义化&quot;">​</a></h2><ol><li><p>用正确的标签做正确的事情。</p></li><li><p>html 语义化让页面的<strong>内容结构化，结构更清晰</strong>，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;</p></li><li><p>搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，<strong>利于 SEO</strong>;</p></li><li><p>使阅读源代码的人对网站更容易将网站分块，<strong>便于阅读维护理解</strong>。</p></li></ol><h2 id="doctype" tabindex="-1">DOCTYPE <a class="header-anchor" href="#doctype" aria-label="Permalink to &quot;DOCTYPE&quot;">​</a></h2><h3 id="doctype作用" tabindex="-1">DOCTYPE作用 <a class="header-anchor" href="#doctype作用" aria-label="Permalink to &quot;DOCTYPE作用&quot;">​</a></h3><p>DOCTYPE （document type） 声明位于文档的最前面，处于标签之前，它不是 html 标签。</p><p>主要作用是告诉浏览器使用哪个版本的 HTML 规范来渲染文档。DOCTYPE 不存在或形式不正确会导致HTML文档以<strong>混杂模式</strong>呈现。</p><h3 id="标准模式与混杂模式如何区分" tabindex="-1">标准模式与混杂模式如何区分 <a class="header-anchor" href="#标准模式与混杂模式如何区分" aria-label="Permalink to &quot;标准模式与混杂模式如何区分&quot;">​</a></h3><p>标准模式（Standards mode）以浏览器支持的最高标准运行；</p><p>混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。</p><h2 id="块级元素和行内元素" tabindex="-1">块级元素和行内元素 <a class="header-anchor" href="#块级元素和行内元素" aria-label="Permalink to &quot;块级元素和行内元素&quot;">​</a></h2><h3 id="块级元素和行内元素的区别" tabindex="-1">块级元素和行内元素的区别 <a class="header-anchor" href="#块级元素和行内元素的区别" aria-label="Permalink to &quot;块级元素和行内元素的区别&quot;">​</a></h3><h4 id="块级元素" tabindex="-1">块级元素 <a class="header-anchor" href="#块级元素" aria-label="Permalink to &quot;块级元素&quot;">​</a></h4><ul><li>与其他行内元素并排</li><li>不能设置宽高，默认的宽度就是文字的宽度</li></ul><h4 id="行内元素" tabindex="-1">行内元素 <a class="header-anchor" href="#行内元素" aria-label="Permalink to &quot;行内元素&quot;">​</a></h4><ul><li>独占一行，不能与其他任何元素并列</li><li>能接受宽高，如果不设置宽度，那么宽度将默认变为父级的100%</li></ul><h3 id="块级元素和行内元素都有哪些" tabindex="-1">块级元素和行内元素都有哪些 <a class="header-anchor" href="#块级元素和行内元素都有哪些" aria-label="Permalink to &quot;块级元素和行内元素都有哪些&quot;">​</a></h3><h4 id="块级元素-1" tabindex="-1">块级元素 <a class="header-anchor" href="#块级元素-1" aria-label="Permalink to &quot;块级元素&quot;">​</a></h4><ul><li><p>常用元素</p><p><code>div</code> , <code>p</code> , <code>form</code> , <code>section</code> , <code>table</code></p></li><li><p>标题</p><p><code>h1</code> , <code>h2</code> , <code>h3</code> , <code>h4</code> , <code>h5</code> , <code>h6</code></p></li><li><p>列表</p><p><code>ul</code> , <code>ol</code> , <code>dd</code> , <code>dl</code></p></li><li><p>h5新特性</p><p><code>section</code> , <code>header</code> , <code>footer</code> , <code>video</code> , <code>output</code> , <code>audio</code> , <code>aside</code></p></li></ul><h4 id="行内元素-1" tabindex="-1">行内元素 <a class="header-anchor" href="#行内元素-1" aria-label="Permalink to &quot;行内元素&quot;">​</a></h4><ul><li><p>常用元素</p><p><code>a</code> , <code>button</code> , <code>span</code> , <code>img</code> , <code>em</code> , <code>i</code> , <code>label</code> , <code>select</code> , <code>textarea</code></p></li></ul><h2 id="链接打开方式有几种" tabindex="-1">链接打开方式有几种 <a class="header-anchor" href="#链接打开方式有几种" aria-label="Permalink to &quot;链接打开方式有几种&quot;">​</a></h2><p>总共有五种：</p><ul><li><h4 id="blank" tabindex="-1">_blank <a class="header-anchor" href="#blank" aria-label="Permalink to &quot;_blank&quot;">​</a></h4><p>在新窗口中打开被链接文档。</p></li><li><h4 id="self" tabindex="-1">_self <a class="header-anchor" href="#self" aria-label="Permalink to &quot;_self&quot;">​</a></h4><p>默认。在相同的框架中打开被链接文档。</p></li><li><h4 id="parent" tabindex="-1">_parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;_parent&quot;">​</a></h4><p>在父框架集中打开被链接文档。</p></li><li><h4 id="top" tabindex="-1">_top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;_top&quot;">​</a></h4><p>在整个窗口中打开被链接文档。</p></li><li><h4 id="framename" tabindex="-1">framename <a class="header-anchor" href="#framename" aria-label="Permalink to &quot;framename&quot;">​</a></h4><p>在指定的框架中打开被链接文档。</p></li></ul><h2 id="script-标签中-defer-和-async-的区别" tabindex="-1">script 标签中 defer 和 async 的区别 <a class="header-anchor" href="#script-标签中-defer-和-async-的区别" aria-label="Permalink to &quot;script 标签中 defer 和 async 的区别&quot;">​</a></h2><p>defer 和 async 都是作用于 外链JS 的。对于 内部JS 是没有效果的。</p><p>defer 和 async 都是异步的，主要的区别在于执行顺序以及执行的时间。</p><p>async 标志的脚本文件一旦加载完成就会立即执行，并且不会按照书写顺序，谁下载好了就直接执行。所以适用于那些没有代码依赖顺序，并且没有 DOM操作 的脚本文件。</p><p>defer 标志的脚本文件会严格按照书写顺序执行，并且，会在 DOMContentLoaded 事件之前（也就是页面DOM加载完成时）执行。适用于有 DOM操作 ，或者是有代码依赖顺序的脚本文件。</p><h2 id="html5离线存储" tabindex="-1">HTML5离线存储 <a class="header-anchor" href="#html5离线存储" aria-label="Permalink to &quot;HTML5离线存储&quot;">​</a></h2><h3 id="html5的离线储存" tabindex="-1">HTML5的离线储存 <a class="header-anchor" href="#html5的离线储存" aria-label="Permalink to &quot;HTML5的离线储存&quot;">​</a></h3><p>HTML5的离线存储是基于一个新建的.manifest文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，<br>这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。</p><h3 id="离线储存资源进行管理和加载" tabindex="-1">离线储存资源进行管理和加载 <a class="header-anchor" href="#离线储存资源进行管理和加载" aria-label="Permalink to &quot;离线储存资源进行管理和加载&quot;">​</a></h3><p>在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。</p>',36),r=[l];function i(c,n,h,s,p,u){return a(),o("div",null,r)}const f=e(d,[["render",i]]);export{b as __pageData,f as default};