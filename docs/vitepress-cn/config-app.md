---
title: VitePress应用配置 - VitePress中文文档
description: VitePress中文文档之VitePress应用配置
tags: 
  - VitePress中文文档,VitePress应用配置,VitePress App config
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress应用配置,VitePress App config
---

# 应用配置

应用配置是可以定义网站的全局设置的地方。应用配置定义的基本设置不仅限于主题配置，如 "基本目录 "的配置，或网站的 "标题"。

```js
export default {
  // These are app level configs.
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

## appearance

- 类型：`boolean`

- 默认值：`true`

是否启用"暗黑模式"选项。如果该选项被设置为`true`，它会根据用户的偏好，在`<html>`标签中添加`.dark`类。

它还会注入内联脚本，试图通过`vitepress-theme-appearance`键从本地存储中读取用户的设置，并恢复用户偏好的颜色模式。

```js
export default {
  appearance: true
}
```

## base

- 类型：`string`

- 默认值：`/`

`base URL`是网站部署所在的 URL。如果你打算在一个子路径下部署你的网站，例如 GitHub 页面，你就需要设置这个。如果你计划将你的网站部署到`https://foo.github.io/bar/`，那么你应该将`base`设置为`'/bar/'`。它应该总是以斜线开始和结束。

`base`会自动预置到其他选项中以`/`开头的所有 URL 中，所以你只需要指定一次。

```js
export default {
  base: '/base/'
}
```

## description

- 类型：`string`

- 默认值：`A VitePress site`

网站的描述。这将作为页面 HTML 中的`<meta>`标签呈现。

```js
export default {
  description: 'A VitePress site'
}
```

## head

- 类型：`HeadConfig[]`

- 默认值：`[]`

在页面 HTML 的`<head>`标签中呈现的额外元素。用户添加的标签将出现在`head`标签结束前，在VitePress 标签之后。

```js
export default {
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ]
}
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## ignoreDeadLinks

- 类型：`boolean`

- 默认值：`false`

如果设置为`true`，那 VitePress 在构建时不会因为死链接而导致构建失败。

```ts
export default {
  ignoreDeadLinks: true
}
```

### lang

- 类型：`boolean`

- 默认值：`en-US`

网站`lang`属性，在页面 HTML 中呈现为`<html lang="en-US">`标签。

```js
export default {
  lang: 'en-US'
}
```

## lastUpdated

- 类型：`boolean`

- 默认值：`false`

使用`git commit`来获取时间戳。该选项使默认主题显示页面的最后更新时间。你可以通过[themeConfig.lastUpdatedText](/vitepress-cn/config-theme#lastupdatedtext)选项自定义文本。

```js
export default {
  lastUpdated: true
}
```

## markdown

- 类型：`MarkdownOption`

配置 Markdown 解析器选项。VitePress 使用[Markdown-it](https://github.com/markdown-it/markdown-it)作为分析器，并使用[Shiki](https://shiki.matsu.io/)来强调语言语法。在这个选项中，你可以通过各种与 Markdown 有关的选项来满足你的需要。

```js
export default {
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
}
```

下面是这个对象中可以配置的所有选项：

```js
interface MarkdownOptions extends MarkdownIt.Options {
  // Custom theme for syntax highlighting.
  // You can use an existing theme.
  // See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
  // Or add your own theme.
  // See: https://github.com/shikijs/shiki/blob/main/docs/themes.md#loading-theme
  theme?:
    | Shiki.IThemeRegistration
    | { light: Shiki.IThemeRegistration; dark: Shiki.IThemeRegistration }
  // Enable line numbers in code block.
  lineNumbers?: boolean
  // markdown-it-anchor plugin options.
  // See: https://github.com/valeriangalliat/markdown-it-anchor
  anchor?: {
    permalink?: anchor.AnchorOptions['permalink']
  }
  // markdown-it-attrs plugin options.
  // See: https://github.com/arve0/markdown-it-attrs
  attrs?: {
    leftDelimiter?: string
    rightDelimiter?: string
    allowedAttributes?: string[]
    disable?: boolean
  }
  // markdown-it-toc-done-right plugin options
  // See: https://github.com/nagaozen/markdown-it-toc-done-right
  toc?: any
  // Configure the Markdown-it instance.
  config?: (md: MarkdownIt) => void
}
```

## outDir

- 类型：`string`

- 默认值：`./.vitepress/dist`

网站的构建完成后的输出位置，相对于项目根目录（如果你正在运行 VitePress 构建项目，则是`docs`文件夹）。

```js
export default {
  outDir: '../public'
}
```

## title

- 类型：`string`

- 默认值：`VitePress`

网站的标题。这将显示在导航栏中。除非定义了`titleTemplate`，否则也作为所有页面标题的后缀。

```js
export default {
  title: 'VitePress'
}
```

## titleTemplate

- 类型：`string | boolean`

`title`的后缀。例如，如果你将`title`设置为 VitePress，并将`titleTemplate`设置为 My Site，那么 HTML 标题就变成`VitePress | My Site`。

设置为`false`则禁用该功能。如果该选项未定义，那么将使用标题选项的值。

```js
export default {
  title: 'VitePress',
  titleTemplate: 'Vite & Vue powered static site generator'
}
```
