import{_ as s,o as a,c as n,R as l}from"./chunks/framework.d95bcf44.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"基","7":"础"},"headers":[],"relativePath":"studyCn/Vue3/index.md"}'),e={name:"studyCn/Vue3/index.md"},o=l(`<h2 id="vue-v-if与v-for" tabindex="-1">Vue v-if与v-for <a class="header-anchor" href="#vue-v-if与v-for" aria-label="Permalink to &quot;Vue v-if与v-for&quot;">​</a></h2><ul><li><p>在Vue2中，当v-if与v-for在相同元素上使用时，v-for具有更高的优先级</p></li><li><p>在Vue3中，当v-if与v-for在相同元素上使用时，v-if具有更高的优先级</p></li></ul><h2 id="v-bind-in-css" tabindex="-1">v-bind in css <a class="header-anchor" href="#v-bind-in-css" aria-label="Permalink to &quot;v-bind in css&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//声明 变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yellow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//读取 变量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">-</span><span style="color:#82AAFF;">bind</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">color</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,5),p=[o];function t(c,i,r,d,y,v){return a(),n("div",null,p)}const f=s(e,[["render",t]]);export{_ as __pageData,f as default};