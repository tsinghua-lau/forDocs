---
title: VitePress Frontmatter配置 - VitePress中文文档
description: VitePress中文文档之VitePress Frontmatter配置
tags: 
  - VitePress中文文档,VitePress Frontmatter配置,VitePress Frontmatter config
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress Frontmatter配置,VitePress Frontmatter config
---

# Frontmatter 配置

Frontmatter 支持基于页面级别的配置。在每个 Markdown 上，你可以自由地添加任何设置来覆盖任何全局应用配置或主题配置。此外，还有一些配置，你只能在 Frontmatter 中定义。

```yaml
---
title: Docs with VitePress
editLink: true
---
```

你可以通过`$frontmatter`方法在任何 Markdown 文件中访问 frontmatter 中定义的配置信息。

```yaml
{{ $frontmatter.title }}
```

## title

- 类型：`string`

页面的标题。它与[config.title](/vitepressCn/config-app#title)相同，并覆盖了其配置。

```yaml
---
title: VitePress
---
```

## titleTemplate

- 类型：`string`

`title`的前缀，与[config.titleTemplate](/vitepressCn/config-app#titletemplate)相同，并覆盖了其配置。

```yaml
---
title: VitePress,
titleTemplate: Vite & Vue powered static site generator.
---
```

## description

- 类型：`string`

页面的描述。与[config.description](/vitepressCn/config-app#description)相同，并覆盖了其配置。

```yaml
---
description: VitePress
---
```

## head

- 类型：`HeadConfig[]`

插入到`head`标签的选项。

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

## lastUpdated

- 类型：`boolean`

- 默认值：`true`

是否在当前页面显示[最后更新](/vitepressCn/config-app#lastupdated)文本。

```yaml
---
lastUpdated: false
---
```

## layout

- 类型：`doc | home | page`

- 默认值：`doc`

设置页面布局。

- `doc` - 它将默认的`doc`样式应用到 Markdown 内容中。
- `home` - `Home Page`的特殊布局。你可以添加额外的选项，如`hero`和`features`，以快速创建美丽的登陆页面。
- `page` - 行为类似于`doc`，但它不对内容应用任何样式。当你想创建一个完全自定义的页面时，这很有用。


```yaml
---
layout: doc
---
```

## hero

- 类型：`Hero`

这个选项只有在`layout`被设置为`home`时才会生效。

它定义了首页`hero`部分的内容。

```yaml
---
layout: home
hero:
  name: VuePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
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


## features

- 类型：`Feature[]`

这个选项只有在`layout`被设置为`home`时才会生效。

它定义了首页`features`部分的内容。

```yaml
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

## aside

- 类型：`boolean`

- 默认值：`true`

如果你想在`doc`布局中不显示右边的组件，把这个选项设置为`false`。

```yaml
---
aside: false
---
```

