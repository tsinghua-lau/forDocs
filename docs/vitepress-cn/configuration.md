---
title: VitePress配置 - VitePress中文文档
description: VitePress中文文档之配置
tags: 
  - VitePress中文文档,VitePress配置
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress配置
---

# 配置

::: details 原文
Without any configuration, the page is pretty minimal, and the user has no way to navigate around the site. To customize your site, let's first create a .vitepress directory inside your docs directory. This is where all VitePress-specific files will be placed. Your project structure is probably like this:
:::

在没有任何配置的情况下，页面是相当小的，用户没有办法在网站上导航。要定制你的网站，首先让我们在你的`docs`目录中创建一个`.vitepress`目录。VitePress 配置相关的文件都将放在这里。你的项目结构可能是这样的:

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

::: details 原文
The essential file for configuring a VitePress site is .vitepress/config.js, which should export a JavaScript object:
:::

配置 VitePress 网站的基本文件是`.vitepress/config.js`，它应该导出一个 JavaScript 对象。

``` js
export default {
  title: 'VitePress',
  description: 'Just playing around.'
}
```

::: details 原文
In the above example, the site will have the title of VitePress, and Just playing around. as the description meta tag.

Learn everything about VitePress features at [Theme: Introduction](https://vitepress.vuejs.org/guide/theme-introduction.html) to find how to configure specific features within this config file.

You may also find all configuration references at [Configs](https://vitepress.vuejs.org/config/introduction.html).
:::

在上面的例子中，该网站将有 VitePress 的 `title` 和 `description` 元标签，值分别为：`VitePress` 和 `Just playing around`。

了解有关 VitePress 功能特性可以在[Theme 主题](/vitepress-cn/theme-introduction)中找到如何在此配置文件中配置特定功能。

你也可以在[Configs 配置](/vitepress-cn/config-introduction)中找到所有的配置参考。