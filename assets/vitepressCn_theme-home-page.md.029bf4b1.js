import{_ as s,o as n,c as a,a as l}from"./app.a2d27a6b.js";const A=JSON.parse('{"title":"VitePress\u9996\u9875(Home Page) - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u9996\u9875(Home Page)","frontmatter":{"title":"VitePress\u9996\u9875(Home Page) - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u9996\u9875(Home Page)","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u9996\u9875,VitePress Home Page"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u9996\u9875,VitePress Home Page"}]]},"headers":[{"level":2,"title":"Hero Section","slug":"hero-section"},{"level":3,"title":"\u81EA\u5B9A\u4E49 name \u5C5E\u6027\u7684 color","slug":"\u81EA\u5B9A\u4E49-name-\u5C5E\u6027\u7684-color"},{"level":2,"title":"Features Section","slug":"features-section"}],"relativePath":"vitepressCn/theme-home-page.md"}'),p={name:"vitepressCn/theme-home-page.md"},o=l(`<h1 id="home-page" tabindex="-1">Home Page <a class="header-anchor" href="#home-page" aria-hidden="true">#</a></h1><p>VitePress \u9ED8\u8BA4\u4E3B\u9898\u63D0\u4F9B\u4E86\u4E00\u4E2A<code>Home Page</code>\u5E03\u5C40\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u5728<a href="/">\u8FD9\u4E2A\u7F51\u7AD9\u7684\u9996\u9875</a>\u4E0A\u770B\u5230\u5B83\u7684\u4F7F\u7528\u3002\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u4EFB\u4F55\u9875\u9762\u4E0A\u4F7F\u7528\u5B83\uFF0C\u53EA\u8981\u5728<code>frontmatter</code>\u4E2D\u6307\u5B9A<code>layout: home</code>\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u800C\uFF0C\u5355\u9760\u8FD9\u4E2A\u9009\u9879\u5E76\u6CA1\u6709\u4EC0\u4E48\u663E\u6027\u7684\u4F5C\u7528\u3002\u4F60\u8FD8\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E\u989D\u5916\u7684\u9009\u9879\uFF0C\u5982<code>hero</code>\u548C<code>features</code>\uFF0C\u5728\u9996\u9875\u4E0A\u6DFB\u52A0\u51E0\u4E2A\u4E0D\u540C\u7684\u9884\u5236\u6A21\u677F\u5757\u3002</p><h2 id="hero-section" tabindex="-1">Hero Section <a class="header-anchor" href="#hero-section" aria-hidden="true">#</a></h2><p><code>Hero Section</code>\u4F4D\u4E8E\u9996\u9875\u7684\u9876\u90E8\u3002\u4E0B\u9762\u662F\u4F60\u5982\u4F55\u914D\u7F6E<code>Hero Section</code>\u7684\u65B9\u6CD5\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"><span style="color:#F07178;">hero</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/logo.png</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">alt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">VitePress</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">brand</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Get Started</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alt</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">View on GitHub</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Hero</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// The string shown top of \`text\`. Comes with brand color</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// and expected to be short, such as product name.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// The main text for the hero section. This will be defined</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// as \`h1\` tag.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Tagline displayed below \`text\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tagline</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Action buttons to display in home hero section.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeroAction</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeroAction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Color theme of the button. Defaults to \`brand\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">brand</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alt</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Label of the button.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Destination link of the button.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">link</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49-name-\u5C5E\u6027\u7684-color" tabindex="-1">\u81EA\u5B9A\u4E49 name \u5C5E\u6027\u7684 color <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-name-\u5C5E\u6027\u7684-color" aria-hidden="true">#</a></h3><p>VitePress\u4F7F\u7528\uFF08-vp-c-brand\uFF09\u6765\u5B9A\u4E49<code>name</code>\u5C5E\u6027\u3002\u7136\u800C\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8986\u76D6<code>--vp-home-hero-name-color</code>\u53D8\u91CF\u6765\u5B9A\u5236\u8FD9\u79CD\u989C\u8272\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-name-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6B64\u5916\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7\u7ED3\u5408<code>--vp-home-hero-name-background</code>\u6765\u8FDB\u4E00\u6B65\u5B9A\u5236\u5B83\uFF0C\u8BA9<code>name</code>\u6709\u6E10\u53D8\u7684\u989C\u8272\u6548\u679C\u3002</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-name-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --vp-home-hero-name-background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-webkit-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">120deg</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">bd34fe</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">41d1ff</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="features-section" tabindex="-1">Features Section <a class="header-anchor" href="#features-section" aria-hidden="true">#</a></h2><p>\u5728<code>Features Section</code>\uFF0C\u4F60\u53EF\u4EE5\u5728<code>Hero Section</code>\u4E4B\u540E\u5217\u51FA\u4F60\u60F3\u8981\u663E\u793A\u7684\u4EFB\u4F55\u6570\u91CF\u7684<code>feature</code>\u3002\u8BF7\u5C06<code>features</code>\u9009\u9879\u4F20\u9012\u7ED9<code>frontmatter</code>\u6765\u8981\u914D\u7F6E\u5B83\u3002</p><div class="language-md"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#F07178;">layout</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">home</span></span>
<span class="line"><span style="color:#F07178;">features</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u26A1\uFE0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vite, The DX that can&#39;t be beat</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u{1F596}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Power of Vue meets Markdown</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\u{1F6E0}\uFE0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Simple and minimal, always</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Feature</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Show icon on each feature box. Currently, only emojis</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// are supported.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">icon</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Title of the feature.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Details of the feature.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">details</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,17),e=[o];function t(c,r,y,D,i,C){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{A as __pageData,d as default};