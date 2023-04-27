---
title: VitePress主题指南 - VitePress中文文档
description: VitePress中文文档之主题指南
tags: 
  - VitePress中文文档,主题指南
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress主题
---

# 主题指南

VitePress 自带的默认主题提供了许多开箱即用的功能。点击下面列出的链接了解更多关于每个功能的信息：

- [Nav](/vitepressCn/theme-nav)
- [Sidebar](/vitepressCn/theme-sidebar)
- [Prev Next Link](/vitepressCn/theme-pre-next-link)
- [Edit Link](/vitepressCn/theme-edit-link)
- [Last Updated](/vitepressCn/theme-last-updated)
- [Layout](/vitepressCn/theme-layout)
- [Home Page](//theme-home-page)
- [Team Page](/vitepressCn/theme-team-page)
- [Footer](/vitepressCn/theme-footer)
- [Search](/vitepressCn/theme-search)
- [Carbon Ads](/vitepressCn/theme-carbon-ads)


如果你没有找到你想要的功能，或者你需要创建自己的主题，你可以定制 VitePress 以满足自己的需求。在下面的章节中，我们将介绍定制 VitePress 主题的每种方式。

## 使用自定义主题

你可以通过`.vitepress/theme/index.js`或`.vitepress/theme/index.ts`文件（"主题入口文件"）来启用一个自定义主题。

```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

一个 VitePress 自定义主题只是一个包含三个属性的对象，其定义如下：

```ts
interface Theme {
  Layout: Component // Vue 3 component
  NotFound?: Component
  enhanceApp?: (ctx: EnhanceAppContext) => void
}
interface EnhanceAppContext {
  app: App // Vue 3 app instance
  router: Router // VitePress router instance
  siteData: Ref<SiteData>
}
```

应该在主题入口文件将主题导出：

```js
// .vitepress/theme/index.js
import Layout from './Layout.vue'
export default {
  // 包含其它组件的根组件
  Layout,
  // vue3 功能组件：404
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {
    // app Vue 3  `createApp()` 的实例
    // router 是 VitePress' 的自定义路由
    // `siteData` 是一个当前站点 metadata 的 `ref`
  }
}
```

`Layout` 组件类似这样：

```vue
<!-- .vitepress/theme/Layout.vue -->
<template>
  <h1>Custom Layout!</h1>
  <!-- this is where markdown content will be rendered -->
  <Content />
</template>
```

默认导出是自定义主题的唯一约束。在你的自定义主题内，它就像一个正常的`Vite + Vue 3`应用程序一样工作。请注意，主题也需要与[SSR](https://vitepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)兼容。

要分发一个主题，只需在你的入口文件中导出该对象。要使用一个外部主题，从自定义主题入口文件中导入并重新导出它。

```js
// .vitepress/theme/index.js
import Theme from 'awesome-vitepress-theme' // 导入的自定义主题
export default Theme // 
```

## 扩展默认主题

如果你想扩展和定制默认的主题，你可以从`.vitepress/theme`中导入，并在自定义主题入口文件中增加。下面是一些常见的定制的例子:

### 注册全局组件

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('MyGlobalComponent', /* ... */)
  }
}
```

由于我们使用的是 Vite，也可以利用 Vite 的[glob import feature](https://vitejs.dev/guide/features.html#glob-import)来自动注册一个组件目录。

### 自定义 CSS

通过覆盖根级 CSS 变量，可以定制默认的主题 CSS

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
export default DefaultTheme
```

```css
/* .vitepress/theme/custom.css */
:root {
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}
```

请参阅可重写的[默认主题 CSS 变量](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)。


### Layout Slots

默认主题的`<Layout/>`组件有几个插槽，可以用来在页面的某些位置注入内容。

例：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}
```

```vue
<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>
<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
```

也可以使用`render`方法：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'
export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-before': () => h(MyComponent)
    })
  }
}
```

可用的默认主题插槽列表：

- When layout: 'doc' (default) is enabled via frontmatter:
    - `doc-footer-before`
    - `doc-before`
    - `doc-after`
    - `aside-top`
    - `aside-bottom`
    - `aside-outline-before`
    - `aside-outline-after`
    - `aside-ads-before`
    - `aside-ads-after`

- When layout: 'home' is enabled via frontmatter:
    - `home-hero-before`
    - `home-hero-after`
    - `home-features-before`
    - `home-features-after`

- Always:
    - `layout-top`
    - `layout-bottom`
    - `nav-bar-title-before`
    - `nav-bar-title-after`
    - `nav-bar-content-before`
    - `nav-bar-content-after`
    - `nav-screen-content-before`
    - `nav-screen-content-after`