---
title: Frontmatter - VitePress中文文档
description: VitePress中文文档之Frontmatter
tags: 
  - VitePress中文文档,Frontmatter
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,Frontmatter
---

# Frontmatter

::: details 原文
Any Markdown file that contains a YAML frontmatter block will be processed by [gray-matter](https://github.com/jonschlinkert/gray-matter). The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:

```md
---
title: Docs with VitePress
editLink: true
---
```

Between the triple-dashed lines, you can set [predefined variables](https://vitepress.vuejs.org/config/frontmatter-configs.html), or even create custom ones of your own. These variables can be used via the special $frontmatter variable.

Here’s an example of how you could use it in your Markdown file:

```md
---
title: Docs with VitePress
editLink: true
---
# {{ $frontmatter.title }}
Guide content
```
:::

任何包含 YAML 前言块的 Markdown 文件都将被[gray-matter](https://github.com/jonschlinkert/gray-matter)处理。Frontmatter 的内容必须是在 Markdown 文件的顶部，并且必须采取有效的 YAML 形式，设置在三段虚线之间。

如：

```md
---
title: Docs with VitePress
editLink: true
---
```

在三条虚线之间，你可以设置[预定义的变量](/vitepress-cn/config-frontmatter)，甚至可以创建你自己的自定义变量。这些变量可以通过特殊的`$frontmatter`变量使用。

下面是一个例子，说明你如何在你的 Markdown 文件中使用它：

```md
---
title: Docs with VitePress
editLink: true
---
# {{ $frontmatter.title }}
Guide content
```

## Frontmatter 语法 JSON 格式

VitePress 还支持`JSON`格式的 Frontmatter 语法，以大括号({})开始和结束：

```json
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```