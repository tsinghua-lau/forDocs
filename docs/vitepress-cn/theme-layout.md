---
title: VitePress布局(Layout) - VitePress中文文档
description: VitePress中文文档之布局(Layout)
tags: 
  - VitePress中文文档,VitePress布局,VitePress Layout
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress布局,VitePress Layout
---

# Layout

你可以通过在页面前言中设置`layout`选项来选择页面布局。有3个布局选项：`doc`、`page`和`home`。如果没有指定任何东西，那么该页就被视为`doc`页。

```md
---
layout: doc
---
```

## Doc Layout

选项`doc`是默认的布局，它将整个 Markdown 内容样式化为"文档"外观。它的工作原理是将整个内容包裹在`vp-doc` css 类中，并对其下的元素应用样式。

几乎所有的通用元素，如`p`或`h2`，都有特殊的样式。因此，请记住，如果你在 Markdown 内容中添加任何自定义的HTML，这些也会受到这些样式的影响。

它还提供了下面列出的`doc`特定功能。这些功能只在这个布局中启用。

- [Edit Link](/vitepress-cn/theme-edit-link)
- [Prev Next Link](/vitepress-cn/theme-pre-next-link)
- Outline
- [Carbon Ads](/vitepress-cn/theme-carbon-ads)

## Page Layout

选项`Page`被当作"blank page"处理。Markdown 仍将被解析，所有的 [Markdown 扩展](/vitepress-cn/markdown)与`Doc Layout`一样工作，但它不会得到任何默认样式。

Page Layout将让你在不影响 VitePress 主题的情况下自行设计所有样式。当你想创建你自己的自定义页面时，这很有用。

请注意，即使在这种布局中，如果页面有一个匹配的侧边栏配置，侧边栏仍然会显示出来。

## Home Layout

选项`home`将生成模板化的`Homepage`。在这个布局中，你可以设置额外的选项，如`hero`和`features`来进一步定制内容。请访问[主题：首页](/vitepress-cn/theme-home-page)以了解更多细节。