import{_ as s,o as n,c as a,a as l}from"./app.b47a0ee6.js";var p="/images/web/promise.gif";const u=JSON.parse('{"title":"Promise \u63A7\u5236\u5E76\u53D1","description":"","frontmatter":{},"headers":[{"level":2,"title":"Promise \u63A7\u5236\u5E76\u53D1","slug":"promise-\u63A7\u5236\u5E76\u53D1"},{"level":2,"title":"\u660E\u786E\u6982\u5FF5","slug":"\u660E\u786E\u6982\u5FF5"},{"level":2,"title":"\u601D\u8DEF","slug":"\u601D\u8DEF"},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"studyCn/Javascript/Promise.md"}'),o={name:"studyCn/Javascript/Promise.md"},e=l(`<h2 id="promise-\u63A7\u5236\u5E76\u53D1" tabindex="-1">Promise \u63A7\u5236\u5E76\u53D1 <a class="header-anchor" href="#promise-\u63A7\u5236\u5E76\u53D1" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8BBE\u8BA1\u4E00\u4E2A\u51FD\u6570\uFF0C\u53EF\u4EE5\u9650\u5236\u8BF7\u6C42\u7684\u5E76\u53D1\uFF0C\u540C\u65F6\u8BF7\u6C42\u7ED3\u675F\u4E4B\u540E\uFF0C\u8C03\u7528callback\u51FD\u6570 sendRequest(requestList:,limits,callback):void</p></div><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#82AAFF;">sendRequest</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u4E00\u4E2A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u4E8C\u4E2A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u4E09\u4E2A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u56DB\u4E2A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7B2C\u4E94\u4E2A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//\u5E76\u53D1\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5176\u4E2Drequest \u53EF\u4EE5\u662F\uFF1A </span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// if(Math.random() &gt; 0.5){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BF7\u6C42\u7ED3\u675F\u{1F44C}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// }else{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">//     reject(&#39;\u9519\u8BEF;&#39;)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">3000</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u660E\u786E\u6982\u5FF5" tabindex="-1">\u660E\u786E\u6982\u5FF5 <a class="header-anchor" href="#\u660E\u786E\u6982\u5FF5" aria-hidden="true">#</a></h2><p>\u26A0\uFE0F \u8FD9\u91CC\u6709\u51E0\u4E2A\u6982\u5FF5\u9700\u8981\u660E\u786E\u4E00\u4E0B</p><ul><li><p><code>\u5E76\u53D1</code>\uFF1A\u5E76\u53D1\u662F\u591A\u4E2A\u4EFB\u52A1\u540C\u65F6\u4EA4\u66FF\u7684\u6267\u884C\uFF08\u56E0\u4E3Acpu\u6267\u884C\u6307\u4EE4\u7684\u901F\u5EA6\u975E\u5E38\u4E4B\u5FEB\uFF0C\u5B83\u53EF\u4EE5\u4E0D\u5FC5\u6309\u987A\u5E8F\u4E00\u6BB5\u4EE3\u7801\u4E00\u6BB5\u4EE3\u7801\u7684\u6267\u884C\uFF0C\u8FD9\u6837\u6548\u7387\u53CD\u800C\u66F4\u52A0\u4F4E\u4E0B\uFF09\uFF0C\u8FD9\u6837\u770B\u8D77\u6765\u5C31\u662F\u4E00\u8D77\u6267\u884C\u7684\uFF0C\u6240\u4EE5\u53EB\u5E76\u53D1\u3002</p></li><li><p><code>\u5E76\u884C</code>\uFF1A\u53EF\u4EE5\u7406\u89E3\u4E3A\u591A\u4E2A\u7269\u7406cpu\u6216\u8005\u6709\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u662F\u771F\u6B63\u7684&#39;\u540C\u65F6&#39;\u6267\u884C</p></li><li><p><code>\u5E76\u53D1\u63A7\u5236</code>\uFF1A\u610F\u601D\u662F\u591A\u4E2A\u5E76\u53D1\u7684\u4EFB\u52A1\uFF0C\u4E00\u65E6\u6709\u4EFB\u52A1\u5B8C\u6210\uFF0C\u5C31\u7ACB\u523B\u5F00\u542F\u4E0B\u4E00\u4E2A\u4EFB\u52A1</p></li><li><p><code>\u5207\u7247\u63A7\u5236</code>\uFF1A\u5C06\u5E76\u53D1\u4EFB\u52A1\u5207\u7247\u7684\u5206\u914D\u51FA\u6765\uFF0C\u6BD4\u598210\u4E2A\u4EFB\u52A1\uFF0C\u5207\u62102\u4E2A\u7247\uFF0C\u6BCF\u7247\u67095\u4E2A\u4EFB\u52A1\uFF0C\u5F53\u524D\u4E00\u7247\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u518D\u5F00\u59CB\u4E0B\u4E00\u4E2A\u7247\u7684\u4EFB\u52A1\uFF0C\u8FD9\u6837\u660E\u663E\u6548\u7387\u6CA1\u5E76\u53D1\u63A7\u5236\u90A3\u4E48\u9AD8\u4E86</p></li></ul><h2 id="\u601D\u8DEF" tabindex="-1">\u601D\u8DEF <a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a></h2><p>\u5C06\u5173\u952E\u6B65\u9AA4\u62C6\u5206\u51FA\u5408\u9002\u7684\u51FD\u6570\u6765\u7EC4\u7EC7\u4EE3\u7801</p><ol><li>\u5FAA\u73AF\u53BB\u542F\u52A8\u80FD\u6267\u884C\u7684\u4EFB\u52A1</li><li>\u53D6\u51FA\u4EFB\u52A1\u5E76\u4E14\u63A8\u5230\u6267\u884C\u5668\u6267\u884C</li><li>\u6267\u884C\u5668\u5185\u66F4\u65B0\u5F53\u524D\u7684\u5E76\u53D1\u6570\uFF0C\u5E76\u4E14\u89E6\u53D1\u635E\u8D77\u4EFB\u52A1</li><li>\u635E\u8D77\u4EFB\u52A1\u91CC\u9762\u53EF\u4EE5\u89E6\u53D1\u6700\u7EC8\u7684\u56DE\u8C03\u51FD\u6570\u548C\u8C03\u8D77\u6267\u884C\u5668\u7EE7\u7EED\u6267\u884C\u4EFB\u52A1</li></ol><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sendRequest</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">requestList</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">limits</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promises</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">requestList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#F07178;">() </span><span style="color:#676E95;font-style:italic;">// \u53D6\u5F97\u8BF7\u6C42list\uFF08\u6D45\u62F7\u8D1D\u4E00\u4EFD\uFF09</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5F97\u5230\u5F00\u59CB\u65F6\uFF0C\u80FD\u6267\u884C\u7684\u5E76\u53D1\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">concurrentNum</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">min</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">limits</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">requestList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4EFB\u52A1\u6267\u884C\u5E76\u53D1\u6570\uFF1A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">concurrentNum</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;\u4E2A&#39;+&#39;\u{1F34F}&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">concurrentCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// \u5F53\u524D\u5E76\u53D1\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u7B2C\u4E00\u6B21\u5148\u8DD1\u8D77\u53EF\u4EE5\u5E76\u53D1\u7684\u4EFB\u52A1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">runTaskNeeded</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u542F\u52A8\u5F53\u524D\u80FD\u6267\u884C\u7684\u4EFB\u52A1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">concurrentNum</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">runTask</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u53D6\u51FA\u4EFB\u52A1\u5E76\u4E14\u6267\u884C\u4EFB\u52A1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">runTask</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promises</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">runner</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u5668</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u4EFB\u52A1\uFF0C\u540C\u65F6\u66F4\u65B0\u5F53\u524D\u5E76\u53D1\u6570</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">runner</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">task</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">concurrentCount</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5F53\u524Dtask</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">task</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4EFB\u52A1\u5F00\u59CB\u6267\u884C==&gt; concurrentCount++</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">task</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">finally</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// \u5E76\u53D1\u6570--</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">concurrentCount</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7ED3\u675F\u6267\u884C\u6267\u884C ==&gt;concurrentCount--</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// \u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">picker</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">picker</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u635E\u8D77\u4E0B\u4E00\u4E2A\u4EFB\u52A1\u6267\u884C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u4EFB\u52A1\u961F\u5217\u91CC\u8FD8\u6709\u4EFB\u52A1\u5E76\u4E14\u6B64\u65F6\u8FD8\u6709\u5269\u4F59\u5E76\u53D1\u6570\u7684\u65F6\u5019 \u6267\u884C</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">concurrentCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">limits</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">promises</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">runTask</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// \u961F\u5217\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C\u5E76\u4E14\u8BF7\u6C42\u6C60\u6E05\u7A7A\u4E86\uFF0C\u5C31\u53EF\u4EE5\u6267\u884C\u6700\u540E\u7684\u56DE\u8C03\u51FD\u6570\u4E86</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">promises</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">concurrentCount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> )</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5168\u90E8\u6267\u884C\u7ED3\u675F\u{1F4AB}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">callback</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5165\u53E3\u6267\u884C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">runTaskNeeded</span><span style="color:#F07178;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p><img src="`+p+'" alt="promise"></p>',12),c=[e];function t(r,F,y,D,i,A){return n(),a("div",null,c)}var d=s(o,[["render",t]]);export{u as __pageData,d as default};
