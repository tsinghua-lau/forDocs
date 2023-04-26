---
title: VitePress入门 - VitePress中文文档
description: VitePress中文文档之VitePress入门
tags: 
  - VitePress中文文档,VitePress入门
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress入门
---

# 入门

::: details 原文
This section will help you build a basic VitePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.

::: warning WARNING

VitePress is currently in alpha status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.
:::

本节将帮助你从头开始建立一个基本的VitePress文档网站。如果你已经有一个现有的项目，并希望在项目中保留文档，请从第2步开始。

::: warning 
VitePress 目前处于 alpha 状态。它已经适合于开箱即用的文档站点使用，但配置和主题化的 API 仍可能在小版本之间发生变化。
:::

## Step. 1: 创建新项目

创建并进入新目录

``` sh
$ mkdir vitepress-starter && cd vitepress-starter
```

然后初始化包管理器

``` sh
$ yarn init
```

## Step. 2: 安装 VitePress

安装 VitePress 和 Vue 作为项目的开发依赖

``` sh
$ yarn add --dev vitepress vue
```

::: details 相关依赖缺失警告？
@docsearch/js 如果看到相关依赖缺失引起的失败，你可以尝试使用以下解决方案:

On Yarn v2/v3, 将其添加到你的 rc 文件中 (.yarnrc.yml by default):
``` yaml
packageExtensions:
  '@docsearch/react@*':
    peerDependenciesMeta:
      '@types/react':
        optional: true
      'react':
        optional: true
      'react-dom':
        optional: true
```
On PNPM, 添加到你的 package.json:
``` json
"pnpm": {
  "peerDependencyRules": {
    "ignoreMissing": [
      "@algolia/client-search",
      "@types/react",
      "react",
      "react-dom"
    ]
  }
}
```
:::

创建第一个文档

``` sh
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## Step. 3: 开启开发环境

在 package.json 中添加脚本命令

``` js
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

在本地开发环境开启服务器

``` sh
$ yarn docs:dev
```

VitePress 将在 `http://localhost:3000`，启动热重载开发服务器。

## Step. 4: 添加更多页面

::: details 原文
Let's add another page to the site. Create a file name getting-started.md along with index.md you've created in Step. 2. Now your directory structure should look like this.
:::
让我们在网站上添加另一个页面。与你在步骤 2 中创建的 index.md 一样创建一个名为 getting-started.md 的文件。现在你的目录结构应该是这样的。

```
.
├─ docs
│  ├─ getting-started.md
│  └─ index.md
└─ package.json
```

::: details 原文
Then, try to access `http://localhost:3000/getting-started` and you should see the content of getting-started is shown.

This is how VitePress works basically. The directory structure corresponds with the URL path. You add files, and just try to access it.
:::

然后，尝试访问 `http://localhost:3000/getting-started` ，你应该看到显示的是 Getting-started 的内容。

这就是 VitePress 的基本工作方式。目录结构与 URL 路径相对应。你添加文件然后尝试访问它就可以了。

## 下一步做什么？

::: details 原文
By now, you should have a basic but functional VitePress documentation site. But currently, the user has no way to navigate around the site because it's missing for example sidebar menu we have on this site.

To enable those navigations, we must add some configurations to the site. Head to [configuration guide](https://vitepress.vuejs.org/guide/configuration.html) to learn how to configure VitePress.

If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the "Writing" section of the docs. [Markdown guide](https://vitepress.vuejs.org/guide/markdown.html) would be a great starting point.

If you want to know how to customize how the site looks (Theme), and find out the features VitePress's default theme provides, visit [Theme: Introduction](https://vitepress.vuejs.org/guide/theme-introduction.html).

When your documentation site starts to take shape, be sure to read the [deployment guide](https://vitepress.vuejs.org/guide/deploying.html).
:::

现在，你应该有一个基础功能的 VitePress 文档网站。但目前用户没有办法在网站上进行导航，因为它缺少例如我们在这个网站上的侧边栏菜单。

要启用这些导航功能，我们必须在网站上添加一些配置。前往[配置指南](/vitepressCn/configuration)，了解如何配置 VitePress。

如果你想了解更多关于你在页面内可以做的事情，例如，编写 markdown 内容，或使用 Vue 组件，请查看文档的 "Markdown "部分。[Markdown 指南](/vitepressCn/markdown)将是一个很好的起点。

如果你想知道如何定制网站的外观（主题），并了解 VitePress 的默认主题提供的功能，请访问[主题介绍](/vitepressCn/theme-introduction)。

当你的文档网站准备上线时，一定要阅读[部署指南](/vitepressCn/deploying)。
