import{_ as a,o as n,c as l,z as o,n as t,R as e}from"./chunks/framework.d95bcf44.js";const c={};function r(s,p){return n(),l("span",null,"⚡")}const i=a(c,[["render",r]]),y="_example_t4bci_2",D={example:y},d={props:["slot-key"],components:{ComponentInHeader:i},mounted(){document.querySelector(`.${this.$style.example}`).textContent="这段文本由由内联脚本渲染的，并由内联 CSS 样式化。"}},f=JSON.parse('{"title":"VitePress在Markdown中使用Vue功能 - VitePress中文文档","description":"VitePress中文文档之在Markdown中使用Vue功能","frontmatter":{"title":"VitePress在Markdown中使用Vue功能 - VitePress中文文档","description":"VitePress中文文档之在Markdown中使用Vue功能","tags":["VitePress中文文档,Markdown,Vue"],"head":[["meta",{"name":"keywords","content":"VitePress中文文档,Markdown,Vue"}]]},"headers":[],"relativePath":"vitepressCn/using-vue.md"}'),F=e(`<h1 id="在-markdown-中使用-vue-功能" tabindex="-1">在 Markdown 中使用 Vue 功能 <a class="header-anchor" href="#在-markdown-中使用-vue-功能" aria-label="Permalink to &quot;在 Markdown 中使用 Vue 功能&quot;">​</a></h1><details class="details custom-block"><summary>原文</summary><p>In VitePress, each markdown file is compiled into HTML and then processed as a Vue Single-File Component. This means you can use any Vue features inside the markdown, including dynamic templating, using Vue components, or arbitrary in-page Vue component logic by adding a <code>&lt;script&gt;</code> tag.</p><p>It is also important to know that VitePress leverages Vue 3&#39;s compiler to automatically detect and optimize the purely static parts of the markdown. Static contents are optimized into single placeholder nodes and eliminated from the page&#39;s JavaScript payload. They are also skipped during client-side hydration. In short, you only pay for the dynamic parts on any given page.</p></details><p>在 VitePress 中，每个 Markdown 文件都被编译成<code>HTML</code>，然后作为一个 Vue 单文件组件进行处理。这意味着你可以在 Markdown 内使用任何 Vue 功能，包括动态模板，使用 Vue 组件，或通过添加<code>&lt;script&gt;</code>标签来实现任意的页内 Vue 组件逻辑。</p><p>同样重要的是，VitePress 利用 Vue 3 的编译器来自动检测和优化 Markdown 的纯静态部分。静态内容被优化为单个占位符节点，并从页面的 JavaScript 有效载荷中删除。它们也会在客户端 <a href="https://blog.csdn.net/qq_41800366/article/details/117738916" target="_blank" rel="noreferrer">hydration</a> 过程中被跳过。简而言之，你只需为任何特定页面的动态部分交付功能。</p><h2 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h2><h3 id="插值" tabindex="-1">插值 <a class="header-anchor" href="#插值" aria-label="Permalink to &quot;插值&quot;">​</a></h3><p>每个 Markdown 文件首先被编译成 HTML，然后作为一个 Vue 组件传递给 Vite 流程管道。这意味着你可以在文本中使用 Vue 风格的插值。</p><p><strong>输入</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{{ 1 + 1 }}</span></span></code></pre></div><p><strong>显示</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">2</span></span></code></pre></div><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;Directives&quot;">​</a></h3><p>directives 也可以有效工作:</p><p><strong>输入</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;span v-for=&quot;i in 3&quot;&gt;{{ i }}&lt;/span&gt;</span></span></code></pre></div><p><strong>显示</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1 </span></span>
<span class="line"><span style="color:#A6ACCD;">2 </span></span>
<span class="line"><span style="color:#A6ACCD;">3</span></span></code></pre></div><h3 id="usedata" tabindex="-1">useData <a class="header-anchor" href="#usedata" aria-label="Permalink to &quot;useData&quot;">​</a></h3><p>你可以在<code>&lt;script&gt;</code>中使用 useData helper，并将数据暴露给页面。</p><p><strong>输入</strong></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> useData </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> = useData()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> page </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">pre</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">Output</span></span></code></pre></div><p><strong>显示</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/using-vue.html</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Using Vue in Markdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">frontmatter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="转义" tabindex="-1">转义 <a class="header-anchor" href="#转义" aria-label="Permalink to &quot;转义&quot;">​</a></h2><details class="details custom-block"><summary>原文</summary><p>By default, fenced code blocks are automatically wrapped with v-pre, unless you have set some language with -vue suffix like js-vue (in that case you can use Vue-style interpolation inside fences). To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the v-pre custom container:</p></details><p>默认情况下，代码块会自动用<code>v-pre</code>包装，除非你设置了一些带有<code>-vue</code>后缀的语言，如<code>js-vue</code>（在这种情况下，你可以在代码块内使用 Vue 风格的插值）。要在内联代码片段或纯文本中显示原始的大括号或 Vue 特定的语法，你需要用<code>v-pre</code>自定义容器来包装一个段落：</p><p><strong>输入</strong></p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">::: v-pre</span></span>
<span class="line"><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">{{ This will be displayed as-is }}</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">:::</span></span></code></pre></div><p><strong>显示</strong></p><div><p><code>{{ This will be displayed as-is }}</code></p></div><h2 id="使用-components" tabindex="-1">使用 Components <a class="header-anchor" href="#使用-components" aria-label="Permalink to &quot;使用 Components&quot;">​</a></h2><p>当你需要有更多的灵活性时，VitePress 允许你用自己的 Vue 组件来扩展你的 Markdown。</p><h3 id="局部组件" tabindex="-1">局部组件 <a class="header-anchor" href="#局部组件" aria-label="Permalink to &quot;局部组件&quot;">​</a></h3><p>如果你的组件只在少数地方使用，推荐的使用方法是在使用它的文件中导入组件。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import CustomComponent from &#39;../components/CustomComponent.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Docs</span></span>
<span class="line"><span style="color:#A6ACCD;">This is a .md using a custom component</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;CustomComponent /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">More docs</span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span></code></pre></div><h3 id="全局组件" tabindex="-1">全局组件 <a class="header-anchor" href="#全局组件" aria-label="Permalink to &quot;全局组件&quot;">​</a></h3><p>如果组件要在文档的多个页面中使用，它们可以在主题中全局注册（或作为扩展默认 VitePress 主题的一部分）。请查看<a href="/forDocs/vitepressCn/theme-introduction.html">主题指南</a>以了解更多信息。</p><p>在<code>.vitepress/theme/index.js</code>中，<code>enhanceApp</code>函数接收 Vue 应用实例，因此你可以像在普通Vue 应用中那样<a href="https://vuejs.org/guide/components/registration.html" target="_blank" rel="noreferrer">注册组件</a>。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">DefaultTheme</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enhanceApp</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">app</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VueClickAwayExample</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VueClickAwayExample</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>以后在你的 Markdown 文件中，该组件可以穿插在内容之间。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;"># </span><span style="color:#FFCB6B;">Vue Click Away</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;VueClickAwayExample /&gt;</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">IMPORTANT</p><p>请确保自定义组件的名称包含一个连字符或使用<code>PascalCase</code>。否则，它将被视为内联元素，并被包裹在<code>&lt;p&gt;</code>标签内，这将导致 hydration 不匹配，因为<code>&lt;p&gt;</code>不允许将块状元素放在它里面。</p></div><h2 id="在-header-标签中使用组件" tabindex="-1">在 header 标签中使用组件 <a class="header-anchor" href="#在-header-标签中使用组件" aria-label="Permalink to &quot;在 header 标签中使用组件&quot;">​</a></h2><p>可以在 header 标签中使用 Vue 组件，但需要注意语言之间的区别：</p><table><thead><tr><th>Markdown</th><th>Output HTML</th><th>Parsed Header</th></tr></thead><tbody><tr><td><pre><code> # text &lt;Tag/&gt; </code></pre></td><td><code>&lt;h1&gt;text &lt;Tag/&gt;&lt;/h1&gt;</code></td><td><code>text</code></td></tr><tr><td><pre><code> # text \`&lt;Tag/&gt;\` </code></pre></td><td><code>&lt;h1&gt;text &lt;code&gt;&amp;lt;Tag/&amp;gt;&lt;/code&gt;&lt;/h1&gt;</code></td><td><code>text &lt;Tag/&gt;</code></td></tr></tbody></table><p>被<code>&lt;code&gt;</code>包裹的 HTML 将按原样显示；只有未被包裹的 HTML 会被 Vue 解析。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>输出的 HTML 是由<a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a>完成的，而解析的标题则由 VitePress 处理（并用于侧边栏和文件标题）。</p></div><h2 id="css-预处理器" tabindex="-1">CSS 预处理器 <a class="header-anchor" href="#css-预处理器" aria-label="Permalink to &quot;CSS 预处理器&quot;">​</a></h2><p>VitePress <a href="https://vitejs.dev/guide/features.html#css" target="_blank" rel="noreferrer">内置支持</a> CSS 预处理程序：<code>.scss</code>、<code>.sass</code>、<code>.less</code>、<code>.styl</code>和<code>.stylus</code>文件。不需要为它们安装 Vite-specific 插件，但必须安装相应的预处理器本身。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># .scss and .sass</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D sass</span></span>
<span class="line"><span style="color:#A6ACCD;"># .less</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D less</span></span>
<span class="line"><span style="color:#A6ACCD;"># .styl and .stylus</span></span>
<span class="line"><span style="color:#A6ACCD;">npm install -D stylus</span></span></code></pre></div><p>然后你可以在 Markdown 和主题组件中使用以下内容。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sass</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">.title</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#A6ACCD;">: </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;font-style:italic;">px</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="script-style-优先级提升" tabindex="-1">Script &amp; Style 优先级提升 <a class="header-anchor" href="#script-style-优先级提升" aria-label="Permalink to &quot;Script &amp; Style 优先级提升&quot;">​</a></h2><p>有时你可能需要将一些 JavaScript 或 CSS 只应用于当前页面。在这些情况下，你可以直接在 Markdown文件中写根级的<code>&lt;script&gt;</code>或<code>&lt;style&gt;</code>块。这些将被从编译的 HTML 中提升出来，并作为<code>&lt;script&gt;</code>和<code>&lt;style&gt;</code>块用于生成的 Vue 单文件组件。</p>`,54),C=e(`<div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;p class=&quot;demo&quot; :class=&quot;$style.example&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style module&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.example {</span></span>
<span class="line"><span style="color:#A6ACCD;">  color: #41b883;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ComponentInHeader from &#39;../components/ComponentInHeader.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  props: </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">&#39;slot-key&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: { ComponentInHeader },</span></span>
<span class="line"><span style="color:#A6ACCD;">  mounted () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.querySelector(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">.\${this.$style.example}</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">      .textContent = &#39;这段文本由由内联脚本渲染的，并由内联 CSS 样式化。&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span></code></pre></div><p>组件代码：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">&amp;#x26A1;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="内置组件" tabindex="-1">内置组件 <a class="header-anchor" href="#内置组件" aria-label="Permalink to &quot;内置组件&quot;">​</a></h2><p>VitePress 提供<code>ClientOnly</code>和<code>OutboundLink</code>等内置 Vue 组件，请查看<a href="/forDocs/vitepressCn/api.html">API 索引</a>以了解更多信息。</p><p>参考：</p><ul><li><a href="/forDocs/vitepressCn/using-vue.html#在-header-标签中使用组件">在-header-标签中使用组件</a></li></ul><h2 id="浏览器-api-访问限制" tabindex="-1">浏览器 API 访问限制 <a class="header-anchor" href="#浏览器-api-访问限制" aria-label="Permalink to &quot;浏览器 API 访问限制&quot;">​</a></h2><p>由于 VitePress 应用程序在生成静态构建时是在 Node.js 中进行服务器渲染的，任何 Vue 的使用都必须符合 <a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank" rel="noreferrer">universal code requirements</a>。简而言之，确保只在<code>beforeMount</code>或<code>mounted</code>钩子中访问<code>Browser / DOM APIs</code>。</p><p>如果你使用或演示的组件对 SSR 不友好（例如，包含自定义指令），你可以将它们包裹在内置的<code>&lt;ClientOnly&gt;</code>组件内：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;ClientOnly&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;NonSSRFriendlyComponent /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/ClientOnly&gt;</span></span></code></pre></div><p>注意这并不能解决在导入时访问浏览器 API 的组件或库的问题。要使用在导入时假设浏览器环境的代码，你需要在适当的生命周期钩子中动态地导入它们：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// use code</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>如果你的模块默认导出一个 Vue 组件，你可以动态地注册它：</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">component</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:is</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dynamicComponent</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      dynamicComponent</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">mounted</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lib-that-access-window-on-import</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">module</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">dynamicComponent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">module.</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>参考：</p><ul><li><a href="https://vuejs.org/guide/essentials/component-basics.html#dynamic-components" target="_blank" rel="noreferrer">Vue.js &gt; Dynamic Components</a></li></ul>`,17);function u(s,p,A,h,g,b){return n(),l("div",null,[F,o("p",{class:t(["demo",s.$style.example])},null,2),C])}const m={$style:D},k=a(d,[["render",u],["__cssModules",m]]);export{f as __pageData,k as default};