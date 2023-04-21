---
title: VitePress内置组件API - VitePress中文文档
description: VitePress中文文档之内置组件API
tags: 
  - VitePress中文文档,VitePress内置组件
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress内置组件
---

# 内置组件 API

::: details 原文
VitePress offers several built in API to let you access app data. VitePress also comes with few built-in component that can be used globally.

The helper methods are globally importable from vitepress and are typically used in custom theme Vue components. However, they are also usable inside .md pages because markdown files are compiled into Vue single-file components.

Methods that start with use* indicates that it is a Vue 3 Composition API function that can only be used inside setup() or `<script setup>`.
:::

VitePress 提供了几个内置组件 API，让你访问应用程序的数据。VitePress 还提供了一些可在全局范围内使用的内置组件。

这些 API 方法可以从 Vitepress 全局导入，通常用于定制主题的 Vue 组件。然而，它们也可以在`.md`页面内使用，因为 Markdown 文件被编译成 Vue 的单文件组件。

以`use*`开头的 API 方法表示它是一个[Vue 3 Composition API](https://vuejs.org/guide/introduction.html#api-styles)函数，只能在`setup()`或`<script setup>`中使用。

## `useData`

返回页面的特定数据。返回的对象具有以下类型：

```ts
interface VitePressData {
  site: Ref<SiteData>
  page: Ref<PageData>
  theme: Ref<any> // themeConfig from .vitepress/config.js
  frontmatter: Ref<PageData['frontmatter']>
  lang: Ref<string>
  title: Ref<string>
  description: Ref<string>
  localePath: Ref<string>
}
```

例子：

```vue
<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
</script>
<template>
  <h1>{{ theme.footer.copyright }}</h1>
</template>
```

:::tip TIP
使用[useData](/vitepress-cn/api.html#usedata) 方法读取数据时，不光可以使用 `{{}}` 来读取数据，也可以使用 `v-html`。
:::


## `useRoute`

返回当前路由对象信息，类型如下：

```ts
interface Route {
  path: string
  data: PageData
  component: Component | null
}
```

## `useRouter`

返回 VitePress 路由实例，因此可以通过编程导航的方式跳转到另一个页面。

```ts
interface Router {
  route: Route
  go: (href?: string) => Promise<void>
}
```

## `withBase`

- **Type**: `(path: string) => string`

将配置[base](/vitepress-cn/config-app#base)的内容添加到给定的路径上。也请看 [Base URL](/vitepress-cn/asset-handling#base-url)。

## `<Content />`

`<Content />` 组件用来渲染 Markdown 的内容。在创建[自定义主题](/vitepress-cn/theme-introduction)时很有用。

## `<ClientOnly />`

`<ClientOnly />`组件仅在客户端渲染。

因为 VitePress 应用程序在生成静态构建时是在 Node.js 中进行服务器渲染的，任何 Vue 的使用都必须符合通用代码要求。简而言之，确保只在`beforeMount`或`mounted`的钩子中访问`Browser / DOM APIs`。

如果你正在使用或演示对SSR不友好的组件（例如，包含自定义指令），你可以将它们包裹在`ClientOnly`组件内。

```vue-html
<ClientOnly>
  <NonSSRFriendlyComponent />
</ClientOnly>
```