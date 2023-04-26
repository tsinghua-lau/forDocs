---
title: VitePress中文文档
description: VitePress中文文档
tags: 
  - VitePress中文文档
---

# VitePress 是什么？

VitePress 是建立在Vite之上的 和 VuePress 兄弟关系。

::: warning
VitePress 目前处于 alpha 状态。它已经适合于开箱即用的文档站点使用，但配置和主题化的 API 仍可能在小版本之间发生变化。
:::

## 目的

::: details 原文
We love VuePress v1, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable. Even HMR updates can take up to seconds to reflect in the browser!
:::
我们都喜欢使用 VuePress v1，但由于是建立在 Webpack 的基础之上，即使是一个只有几个页面的文档网站来说，启动开发服务器所需要花费的时间也会变的让人难以忍受。

::: details 原文
Fundamentally, this is because VuePress v1 is a Webpack app under the hood. Even with just two pages, it's a full on Webpack project (including all the theme source files) being compiled. It gets even worse when the project has many pages – every page must first be fully compiled before the server can even display anything!
:::
从根本上说，这是因为 VuePress v1 是一个 Webpack 应用程序的引擎。即使只有两个页面，它也是一个完整的 Webpack 项目（包括所有的主题源文件）被编译。当项目有很多页面时，每一个页面都必须首先被完全编译，然后服务器才可以显示一些内容，这样会让情况就更糟糕！

::: details 原文
Incidentally, Vite solves these problems really well: nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR. Plus, there are a few additional design issues I have noted in VuePress v1 over time but never had the time to fix due to the amount of refactoring it would require.
:::
顺便说一句，Vite 很好地解决了这些问题：几乎是即时启动服务器，按需编译，只编译正在提供的页面，以及快如闪电的 HMR。另外，在 VuePress v1 中，我还注意到一些额外的设计问题，但由于需要大量的重构，所以一直没有时间去解决。

::: details 原文
Now, with Vite and Vue 3, it is time to rethink what a "Vue-powered static site generator" can really be.
:::
现在有了 Vite 和 Vue 3，是时候重新思考什么是"由 Vue 驱动的静态网站生成器"了。

## 对比 VuePress v1 的改进

相当于 VuePress v1 有几处得到了改进...

### 使用了 Vue 3

::: details 原文
Leverages Vue 3's improved template static analysis to stringify static content as much as possible. Static content is sent as string literals instead of JavaScript render function code – the JS payload is therefore much cheaper to parse, and hydration also becomes faster.
:::
利用 Vue 3 改进的模板静态分析能力，尽可能地将静态内容字符串化。静态内容以字符串文本形式发送，而非 JavaScript 渲染函数代码，因此，JS 有效载荷的解析成本更低，hydration 也开始变得更快。

::: tip 译者注
不清楚 hydration 到底是什么意思，特意查了一下。

网上查到的资料：[hydration 代表的是给对象填充数据的这一过程](https://blog.csdn.net/qq_41800366/article/details/117738916)。

然后在 Vue 的官方英文版中也找到了[hydration](https://vuejs.org/guide/scaling-up/ssr.html#client-hydration)，对比[中文版](https://cn.vuejs.org/guide/scaling-up/ssr.html#client-hydration)发现官方翻译为“激活”的意思。

在激活过程中，Vue 会创建一个与服务端完全相同的应用实例，然后将每个组件与它应该控制的 DOM 节点相匹配，并添加 DOM 事件监听器。

同时在掘金上咨询了一下，有人给出的解释为：[这是同构渲染中的概念，在服务器上脱水，传到浏览器注水](https://juejin.cn/pin/7135598417903878157)
:::

::: details 原文
Note the optimization is applied while still allowing the user to freely mix Vue components inside markdown content – the compiler does the static/dynamic separation for you automatically and you never need to think about it.
:::
在应用优化的同时，你会发现仍然允许用户在 markdown 内容中自由混合 Vue 组件，编译器自动为你做静态/动态分离，你永远不需要考虑这个问题。

### 内部使用了 Vite 引擎

* 更快的 dev 开发服务器启动 Faster dev server start
* 更快的热更新 Faster hot updates
* 更快的打包（内部使用了了 Rollup）Faster build (uses Rollup internally)

### 更轻的页面权重

Vue 3 tree-shaking + Rollup 代码分割

::: details 原文
* Does not ship metadata for every page on every request. This decouples page weight from total number of pages. Only the current page's metadata is sent. Client side navigation fetches the new page's component and metadata together.
* Does not use vue-router because the need of VitePress is very simple and specific - a simple custom router (under 200 LOC) is used instead.
:::
* 不在每个请求中为每个页面提供元数据。这使页面权重与总页数脱钩。只有当前页面的元数据被发送。客户端导航同时获取新页面的组件和元数据。

* 不使用 vue-router，因为 VitePress 的需求非常简单和具体，使用一个简单的自定义路由器（低于200 LOC）来代替。

### 其它差异

::: details 原文
VitePress is more opinionated and less configurable: VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.

VitePress is future oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation, and CSS variables for theming.
:::
VitePress 配置更加鲜明简洁：VitePress 目标是缩减当前 VuePress 的复杂性，并从根源上以极简的方式实现。

VitePress 是面向未来的：VitePress 只支持允许本地 ES 模块导入的浏览器。它鼓励使用本地 JavaScript 而不进行转译，并使用 CSS 变量进行主题化。

## 这将会成为下一个 vuepress 吗？

::: details 原文
We already have [vuepress-next](https://github.com/vuepress/vuepress-next), which would be the next major version of VuePress. It also makes lots of improvements over VuePress v1, and also supports Vite now.

VitePress is not compatible with the current VuePress ecosystem (mostly themes and plugins). The overall idea is that VitePress will have a drastically more minimal theming API (preferring JavaScript APIs instead of file layout conventions) and likely no plugins (all customization is done in themes).

There is an [ongoing disccussion](https://github.com/vuejs/vitepress/discussions/548) about this topic. If you're curious, please leave your thoughts!
:::
我们已经有了 [vuepress-next](https://github.com/vuepress/vuepress-next)，这将是 VuePress 的下一个主要版本。它也比 VuePress v1 做了很多改进，而且现在也支持 Vite。

VitePress 与当前的 VuePress 生态系统（主要是主题和插件）不兼容。总的想法是，VitePress 将有一个大幅减少的主题 API（倾向于 JavaScript APIs 而不是文件布局惯例），并且可能没有插件（所有的定制都在主题中完成）。

关于这个问题，目前正在进行[讨论](https://github.com/vuejs/vitepress/discussions/548)。如果你感到好奇，请留下你的想法。