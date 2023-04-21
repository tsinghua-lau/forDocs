---
title: VitePress首页(Home Page) - VitePress中文文档
description: VitePress中文文档之首页(Home Page)
tags: 
  - VitePress中文文档,VitePress首页,VitePress Home Page
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress首页,VitePress Home Page
---

# Home Page

VitePress 默认主题提供了一个`Home Page`布局，你也可以在[这个网站的首页](/)上看到它的使用。你可以在你的任何页面上使用它，只要在`frontmatter`中指定`layout: home`。

```md
---
layout: home
---
```

然而，单靠这个选项并没有什么显性的作用。你还需要通过设置额外的选项，如`hero`和`features`，在首页上添加几个不同的预制模板块。

## Hero Section

`Hero Section`位于首页的顶部。下面是你如何配置`Hero Section`的方法。

```md
---
layout: home
hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```

```ts
interface Hero {
  // The string shown top of `text`. Comes with brand color
  // and expected to be short, such as product name.
  name?: string
  // The main text for the hero section. This will be defined
  // as `h1` tag.
  text: string
  // Tagline displayed below `text`.
  tagline?: string
  // Action buttons to display in home hero section.
  actions?: HeroAction[]
}
interface HeroAction {
  // Color theme of the button. Defaults to `brand`.
  theme?: 'brand' | 'alt'
  // Label of the button.
  text: string
  // Destination link of the button.
  link: string
}
```

### 自定义 name 属性的 color

VitePress使用（-vp-c-brand）来定义`name`属性。然而，你可以通过覆盖`--vp-home-hero-name-color`变量来定制这种颜色。

```css
:root {
  --vp-home-hero-name-color: blue;
}
```

此外，你还可以通过结合`--vp-home-hero-name-background`来进一步定制它，让`name`有渐变的颜色效果。

```css
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
}
```

## Features Section

在`Features Section`，你可以在`Hero Section`之后列出你想要显示的任何数量的`feature`。请将`features`选项传递给`frontmatter`来要配置它。

```md
---
layout: home
features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---
```

```ts
interface Feature {
  // Show icon on each feature box. Currently, only emojis
  // are supported.
  icon?: string
  // Title of the feature.
  title: string
  // Details of the feature.
  details: string
}
```