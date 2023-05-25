import{_ as e,o as s,c as a,a as t}from"./app.d8277619.js";const g=JSON.parse('{"title":"\u4ECEVuePress\u8FC1\u79FB\u5230VitePress - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u4ECEVuePress\u8FC1\u79FB\u5230VitePress","frontmatter":{"title":"\u4ECEVuePress\u8FC1\u79FB\u5230VitePress - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u4ECEVuePress\u8FC1\u79FB\u5230VitePress","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u8FC1\u79FB"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u8FC1\u79FB"}]]},"headers":[{"level":2,"title":"Markdown","slug":"markdown"},{"level":3,"title":"Images","slug":"images"}],"relativePath":"vitepressCn/migration-from-vuepress.md"}'),r={name:"vitepressCn/migration-from-vuepress.md"},o=t(`<h1 id="\u4ECE-vuepress-\u8FC1\u79FB" tabindex="-1">\u4ECE VuePress \u8FC1\u79FB <a class="header-anchor" href="#\u4ECE-vuepress-\u8FC1\u79FB" aria-hidden="true">#</a></h1><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-hidden="true">#</a></h2><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-hidden="true">#</a></h3><p>\u4E0E VuePress \u4E0D\u540C\uFF0C\u5F53\u4F60\u4F7F\u7528\u9759\u6001\u56FE\u7247\u65F6\uFF0CVitePress \u4F1A\u81EA\u52A8\u6839\u636E<code>config</code>\u4E2D<a href="/vitepressCn/asset-handling.html#base-url">base</a>\u7684\u914D\u7F6E\u9879\u6765\u5904\u7406\u3002</p><p>\u56E0\u6B64\uFF0C\u73B0\u5728\u4F60\u53EF\u4EE5\u4E0D\u7528<code>img</code>\u6807\u7B7E\u6765\u6E32\u67D3\u56FE\u7247\u3002</p><div class="language-diff"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> &lt;img :src=&quot;$withBase(&#39;/foo.png&#39;)&quot; alt=&quot;foo&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;"> ![foo](/foo.png)</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u5BF9\u4E8E\u52A8\u6001\u56FE\u50CF\uFF0C\u4F60\u4ECD\u7136\u9700\u8981<code>withBase</code>\uFF0C\u5982<a href="/vitepressCn/asset-handling.html#base-url">Base URL\u6307\u5357</a>\u4E2D\u6240\u793A\u3002</p></div><p>Use <code>&lt;img.*withBase\\(&#39;(.*)&#39;\\).*alt=&quot;([^&quot;]*)&quot;.*&gt;</code> regex to find and replace it with <code>![$2]($1)</code> to replace all the images with <code>![](...)</code> syntax.</p><hr><p>\u66F4\u591A\u5185\u5BB9\u8BF7\u5173\u6CE8...</p>`,10),i=[o];function n(c,d,l,p,h,u){return s(),a("div",null,i)}var _=e(r,[["render",n]]);export{g as __pageData,_ as default};