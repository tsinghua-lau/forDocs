---
title: VitePress在Markdown中使用Vue功能 - VitePress中文文档
description: VitePress中文文档之在Markdown中使用Vue功能
tags: 
  - VitePress中文文档,Markdown,Vue
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,Markdown,Vue
---

# 在 Markdown 中使用 Vue 功能

::: details 原文
In VitePress, each markdown file is compiled into HTML and then processed as a Vue Single-File Component. This means you can use any Vue features inside the markdown, including dynamic templating, using Vue components, or arbitrary in-page Vue component logic by adding a `<script>` tag.

It is also important to know that VitePress leverages Vue 3's compiler to automatically detect and optimize the purely static parts of the markdown. Static contents are optimized into single placeholder nodes and eliminated from the page's JavaScript payload. They are also skipped during client-side hydration. In short, you only pay for the dynamic parts on any given page.
:::

在 VitePress 中，每个 Markdown 文件都被编译成`HTML`，然后作为一个 Vue 单文件组件进行处理。这意味着你可以在 Markdown 内使用任何 Vue 功能，包括动态模板，使用 Vue 组件，或通过添加`<script>`标签来实现任意的页内 Vue 组件逻辑。

同样重要的是，VitePress 利用 Vue 3 的编译器来自动检测和优化 Markdown 的纯静态部分。静态内容被优化为单个占位符节点，并从页面的 JavaScript 有效载荷中删除。它们也会在客户端 [hydration](https://blog.csdn.net/qq_41800366/article/details/117738916) 过程中被跳过。简而言之，你只需为任何特定页面的动态部分交付功能。

## 模板

### 插值

每个 Markdown 文件首先被编译成 HTML，然后作为一个 Vue 组件传递给 Vite 流程管道。这意味着你可以在文本中使用 Vue 风格的插值。

**输入**

```md
{{ 1 + 1 }}
```

**显示**

```
2
```

### Directives

directives 也可以有效工作:

**输入**

```md
<span v-for="i in 3">{{ i }}</span>
```

**显示**

```
1 
2 
3 
```

### useData

你可以在`<script>`中使用 useData helper，并将数据暴露给页面。

**输入**

```js
<script setup>
import { useData } from 'vitepress'
const { page } = useData()
</script>
<pre>{{ page }}</pre>
Output
```

**显示**

```json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 转义

::: details 原文
By default, fenced code blocks are automatically wrapped with v-pre, unless you have set some language with -vue suffix like js-vue (in that case you can use Vue-style interpolation inside fences). To display raw mustaches or Vue-specific syntax inside inline code snippets or plain text, you need to wrap a paragraph with the v-pre custom container:
:::

默认情况下，代码块会自动用`v-pre`包装，除非你设置了一些带有`-vue`后缀的语言，如`js-vue`（在这种情况下，你可以在代码块内使用 Vue 风格的插值）。要在内联代码片段或纯文本中显示原始的大括号或 Vue 特定的语法，你需要用`v-pre`自定义容器来包装一个段落：

**输入**

```md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**显示**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用 Components

当你需要有更多的灵活性时，VitePress 允许你用自己的 Vue 组件来扩展你的 Markdown。

### 局部组件

如果你的组件只在少数地方使用，推荐的使用方法是在使用它的文件中导入组件。

```md
<script setup>
import CustomComponent from '../components/CustomComponent.vue'
</script>
# Docs
This is a .md using a custom component
<CustomComponent />
## More docs
...
```

### 全局组件

如果组件要在文档的多个页面中使用，它们可以在主题中全局注册（或作为扩展默认 VitePress 主题的一部分）。请查看[主题指南](/vitepress-cn/theme-introduction)以了解更多信息。

在`.vitepress/theme/index.js`中，`enhanceApp`函数接收 Vue 应用实例，因此你可以像在普通Vue 应用中那样[注册组件](https://vuejs.org/guide/components/registration.html)。

```js
import DefaultTheme from 'vitepress/theme'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
```

以后在你的 Markdown 文件中，该组件可以穿插在内容之间。

```md
# Vue Click Away
<VueClickAwayExample />
```

::: warning IMPORTANT
请确保自定义组件的名称包含一个连字符或使用`PascalCase`。否则，它将被视为内联元素，并被包裹在`<p>`标签内，这将导致 hydration 不匹配，因为`<p>`不允许将块状元素放在它里面。
:::

## 在 header 标签中使用组件

可以在 header 标签中使用 Vue 组件，但需要注意语言之间的区别：

| Markdown                                                | Output HTML                               | Parsed Header |
| ------------------------------------------------------- | ----------------------------------------- | ------------- |
| <pre v-pre><code> # text &lt;Tag/&gt; </code></pre>     | `<h1>text <Tag/></h1>`                    | `text`        |
| <pre v-pre><code> # text \`&lt;Tag/&gt;\` </code></pre> | `<h1>text <code>&lt;Tag/&gt;</code></h1>` | `text <Tag/>` |

被`<code>`包裹的 HTML 将按原样显示；只有未被包裹的 HTML 会被 Vue 解析。

::: tip
输出的 HTML 是由[markdown-it](https://github.com/markdown-it/markdown-it)完成的，而解析的标题则由 VitePress 处理（并用于侧边栏和文件标题）。
:::

## CSS 预处理器

VitePress [内置支持](https://vitejs.dev/guide/features.html#css) CSS 预处理程序：`.scss`、`.sass`、`.less`、`.styl`和`.stylus`文件。不需要为它们安装 Vite-specific 插件，但必须安装相应的预处理器本身。

```
# .scss and .sass
npm install -D sass
# .less
npm install -D less
# .styl and .stylus
npm install -D stylus
```

然后你可以在 Markdown 和主题组件中使用以下内容。

```vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

## Script & Style 优先级提升

有时你可能需要将一些 JavaScript 或 CSS 只应用于当前页面。在这些情况下，你可以直接在 Markdown文件中写根级的`<script>`或`<style>`块。这些将被从编译的 HTML 中提升出来，并作为`<script>`和`<style>`块用于生成的 Vue 单文件组件。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
import ComponentInHeader from '../public/components/ComponentInHeader.vue'

export default {
  props: ['slot-key'],
  components: { ComponentInHeader },
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这段文本由由内联脚本渲染的，并由内联 CSS 样式化。'
  }
}
</script>

```md
<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
import ComponentInHeader from '../components/ComponentInHeader.vue'

export default {
  props: ['slot-key'],
  components: { ComponentInHeader },
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这段文本由由内联脚本渲染的，并由内联 CSS 样式化。'
  }
}
</script>
```

组件代码：

```vue
<template>
  <span>&#x26A1;</span>
</template>
```

## 内置组件

VitePress 提供`ClientOnly`和`OutboundLink`等内置 Vue 组件，请查看[API 索引](/vitepress-cn/api)以了解更多信息。

参考：
- [在-header-标签中使用组件](/vitepress-cn/using-vue.html#在-header-标签中使用组件)


## 浏览器 API 访问限制

由于 VitePress 应用程序在生成静态构建时是在 Node.js 中进行服务器渲染的，任何 Vue 的使用都必须符合 [universal code requirements](https://vuejs.org/guide/scaling-up/ssr.html)。简而言之，确保只在`beforeMount`或`mounted`钩子中访问`Browser / DOM APIs`。

如果你使用或演示的组件对 SSR 不友好（例如，包含自定义指令），你可以将它们包裹在内置的`<ClientOnly>`组件内：

```md
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```

注意这并不能解决在导入时访问浏览器 API 的组件或库的问题。要使用在导入时假设浏览器环境的代码，你需要在适当的生命周期钩子中动态地导入它们：

```vue
<script>
export default {
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      // use code
    })
  }
}
</script>
```

如果你的模块默认导出一个 Vue 组件，你可以动态地注册它：

```vue
<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent">
  </component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted() {
    import('./lib-that-access-window-on-import').then((module) => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
```

参考：
- [Vue.js > Dynamic Components](https://vuejs.org/guide/essentials/component-basics.html#dynamic-components)