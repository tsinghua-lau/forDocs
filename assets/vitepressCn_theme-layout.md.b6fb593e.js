import{_ as e,o as a,c as o,a as t}from"./app.a2d27a6b.js";const m=JSON.parse('{"title":"VitePress\u5E03\u5C40(Layout) - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u5E03\u5C40(Layout)","frontmatter":{"title":"VitePress\u5E03\u5C40(Layout) - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u5E03\u5C40(Layout)","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u5E03\u5C40,VitePress Layout"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u5E03\u5C40,VitePress Layout"}]]},"headers":[{"level":2,"title":"Doc Layout","slug":"doc-layout"},{"level":2,"title":"Page Layout","slug":"page-layout"},{"level":2,"title":"Home Layout","slug":"home-layout"}],"relativePath":"vitepressCn/theme-layout.md"}'),s={name:"vitepressCn/theme-layout.md"},d=t(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h1><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u9875\u9762\u524D\u8A00\u4E2D\u8BBE\u7F6E<code>layout</code>\u9009\u9879\u6765\u9009\u62E9\u9875\u9762\u5E03\u5C40\u3002\u67093\u4E2A\u5E03\u5C40\u9009\u9879\uFF1A<code>doc</code>\u3001<code>page</code>\u548C<code>home</code>\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u4EFB\u4F55\u4E1C\u897F\uFF0C\u90A3\u4E48\u8BE5\u9875\u5C31\u88AB\u89C6\u4E3A<code>doc</code>\u9875\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">doc</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Doc Layout <a class="header-anchor" href="#doc-layout" aria-hidden="true">#</a></h2><p>\u9009\u9879<code>doc</code>\u662F\u9ED8\u8BA4\u7684\u5E03\u5C40\uFF0C\u5B83\u5C06\u6574\u4E2A Markdown \u5185\u5BB9\u6837\u5F0F\u5316\u4E3A&quot;\u6587\u6863&quot;\u5916\u89C2\u3002\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u662F\u5C06\u6574\u4E2A\u5185\u5BB9\u5305\u88F9\u5728<code>vp-doc</code> css \u7C7B\u4E2D\uFF0C\u5E76\u5BF9\u5176\u4E0B\u7684\u5143\u7D20\u5E94\u7528\u6837\u5F0F\u3002</p><p>\u51E0\u4E4E\u6240\u6709\u7684\u901A\u7528\u5143\u7D20\uFF0C\u5982<code>p</code>\u6216<code>h2</code>\uFF0C\u90FD\u6709\u7279\u6B8A\u7684\u6837\u5F0F\u3002\u56E0\u6B64\uFF0C\u8BF7\u8BB0\u4F4F\uFF0C\u5982\u679C\u4F60\u5728 Markdown \u5185\u5BB9\u4E2D\u6DFB\u52A0\u4EFB\u4F55\u81EA\u5B9A\u4E49\u7684HTML\uFF0C\u8FD9\u4E9B\u4E5F\u4F1A\u53D7\u5230\u8FD9\u4E9B\u6837\u5F0F\u7684\u5F71\u54CD\u3002</p><p>\u5B83\u8FD8\u63D0\u4F9B\u4E86\u4E0B\u9762\u5217\u51FA\u7684<code>doc</code>\u7279\u5B9A\u529F\u80FD\u3002\u8FD9\u4E9B\u529F\u80FD\u53EA\u5728\u8FD9\u4E2A\u5E03\u5C40\u4E2D\u542F\u7528\u3002</p><ul><li><a href="/vitepressCn/theme-edit-link.html">Edit Link</a></li><li><a href="/vitepressCn/theme-pre-next-link.html">Prev Next Link</a></li><li>Outline</li><li><a href="/vitepressCn/theme-carbon-ads.html">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Page Layout <a class="header-anchor" href="#page-layout" aria-hidden="true">#</a></h2><p>\u9009\u9879<code>Page</code>\u88AB\u5F53\u4F5C&quot;blank page&quot;\u5904\u7406\u3002Markdown \u4ECD\u5C06\u88AB\u89E3\u6790\uFF0C\u6240\u6709\u7684 <a href="/vitepressCn/markdown.html">Markdown \u6269\u5C55</a>\u4E0E<code>Doc Layout</code>\u4E00\u6837\u5DE5\u4F5C\uFF0C\u4F46\u5B83\u4E0D\u4F1A\u5F97\u5230\u4EFB\u4F55\u9ED8\u8BA4\u6837\u5F0F\u3002</p><p>Page Layout\u5C06\u8BA9\u4F60\u5728\u4E0D\u5F71\u54CD VitePress \u4E3B\u9898\u7684\u60C5\u51B5\u4E0B\u81EA\u884C\u8BBE\u8BA1\u6240\u6709\u6837\u5F0F\u3002\u5F53\u4F60\u60F3\u521B\u5EFA\u4F60\u81EA\u5DF1\u7684\u81EA\u5B9A\u4E49\u9875\u9762\u65F6\uFF0C\u8FD9\u5F88\u6709\u7528\u3002</p><p>\u8BF7\u6CE8\u610F\uFF0C\u5373\u4F7F\u5728\u8FD9\u79CD\u5E03\u5C40\u4E2D\uFF0C\u5982\u679C\u9875\u9762\u6709\u4E00\u4E2A\u5339\u914D\u7684\u4FA7\u8FB9\u680F\u914D\u7F6E\uFF0C\u4FA7\u8FB9\u680F\u4ECD\u7136\u4F1A\u663E\u793A\u51FA\u6765\u3002</p><h2 id="home-layout" tabindex="-1">Home Layout <a class="header-anchor" href="#home-layout" aria-hidden="true">#</a></h2><p>\u9009\u9879<code>home</code>\u5C06\u751F\u6210\u6A21\u677F\u5316\u7684<code>Homepage</code>\u3002\u5728\u8FD9\u4E2A\u5E03\u5C40\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u989D\u5916\u7684\u9009\u9879\uFF0C\u5982<code>hero</code>\u548C<code>features</code>\u6765\u8FDB\u4E00\u6B65\u5B9A\u5236\u5185\u5BB9\u3002\u8BF7\u8BBF\u95EE<a href="/vitepressCn/theme-home-page.html">\u4E3B\u9898\uFF1A\u9996\u9875</a>\u4EE5\u4E86\u89E3\u66F4\u591A\u7EC6\u8282\u3002</p>`,14),c=[d];function r(n,l,i,p,h,u){return a(),o("div",null,c)}var _=e(s,[["render",r]]);export{m as __pageData,_ as default};