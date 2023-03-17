import{o as n,c as s,b as a}from"./app.9032fc35.js";const e='{"title":"Vue v-if与v-for","description":"","frontmatter":"title 基础","headers":[{"level":2,"title":"Vue v-if与v-for","slug":"vue-v-if与v-for"},{"level":2,"title":"v-bind in css","slug":"v-bind-in-css"}],"relativePath":"Vue3/index.md","lastUpdated":1670836899662}',t={},o=a('<h2 id="vue-v-if与v-for"><a class="header-anchor" href="#vue-v-if与v-for" aria-hidden="true">#</a> Vue v-if与v-for</h2><ul><li><p>在Vue2中，当v-if与v-for在相同元素上使用时，v-for具有更高的优先级</p></li><li><p>在Vue3中，当v-if与v-for在相同元素上使用时，v-if具有更高的优先级</p></li></ul><h2 id="v-bind-in-css"><a class="header-anchor" href="#v-bind-in-css" aria-hidden="true">#</a> v-bind in css</h2><div class="language-javascript"><pre><code><span class="token comment">//声明 变量</span>\n\n<span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-javascript"><pre><code><span class="token comment">//读取 变量</span>\n\n<span class="token punctuation">.</span>item<span class="token punctuation">{</span>\n    color<span class="token operator">:</span>v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',5);t.render=function(a,e,t,p,i,c){return n(),s("div",null,[o])};export default t;export{e as __pageData};