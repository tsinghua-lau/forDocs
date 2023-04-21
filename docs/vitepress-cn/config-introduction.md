---
title: VitePress配置指南 - VitePress中文文档
description: VitePress中文文档之VitePress配置指南
tags: 
  - VitePress中文文档,VitePress配置
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress配置
---

# 配置

VitePress 配置的配置文件`.vitepress/config.js`，VitePress的配置都在这个文件中设置。

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

VitePress有2种类型的配置。一种是[应用配置](/vitepress-cn/config-app)，配置网站的基本功能，如设置网站的标题，或自定义Markdown 解析器的工作方式。第二种是[主题配置](/vitepress-cn/config-theme)，用于配置网站的主题，例如，添加侧边栏，或者添加"[在GitHub上编辑此页面](/vitepress-cn/theme-edit-link)"的链接等功能。

还有一个配置，你可以在`Frontmatter`中进行。[Frontmatter](/vitepress-cn/config-frontmatter)的配置可以覆盖`应用配置`或`主题配置`定义的全局配置。然而，有几个选项也只在`Frontmatter`中可用。

请参考相应的配置页面以了解更多。

## 类型提示

由于 VitePress 带有 TypeScript 类型，你可以利用你的 IDE 的 intellisense 与 jsdoc 类型提示。

```js
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}
export default config
```

你也可以使用`defineConfig`方法，它可以在不需要 jsdoc 注释的情况下提供智能提示。

```js
import { defineConfig } from 'vitepress'
export default defineConfig({
  // ...
})
```

VitePress 也直接支持 TS 配置文件。你也可以使用`.vitepress/config.ts`与`defineConfig`方法。

## 类型化的主题配置

默认情况下，`defineConfig`方法使用了默认主题的配置类型：

```js
import { defineConfig } from 'vitepress'
export default defineConfig({
  themeConfig: {
    // Type is `DefaultTheme.Config`
  }
})
```

如果你使用自定义主题，并希望对主题配置进行类型检查，你需要使用`defineConfigWithTheme`，并通过泛型参数传递自定义主题的配置类型。

```js
import { defineConfigWithTheme } from 'vitepress'
import { ThemeConfig } from 'your-theme'
export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```