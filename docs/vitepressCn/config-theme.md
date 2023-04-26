---
title: VitePress主题配置 - VitePress中文文档
description: VitePress中文文档之VitePress主题配置
tags: 
  - VitePress中文文档,VitePress主题配置,VitePress theme config
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress主题配置,VitePress theme config
---

# 主题配置

主题配置让你自定义你的主题。你可以通过在配置文件中添加`themeConfig`选项来定义主题配置。

```js
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```

上述代码呈现了 VitePress 默认主题的设置。如果你使用的是由他人创建的自定义主题，这些设置可能没有任何效果，或者可能有不同的表现。

## logo

- 类型：`ThemeableImage`

在导航栏显示的 LOGO，就在网站标题之前。接受一个路径字符串，或一个对象来设置一个不同的标志，以适应`light/dark`模式。

```js
export default {
  themeConfig: {
    logo: '/logo.svg'
  }
}
```

```ts
type Image = string | { src: string; alt?: string }
type ThemeableImage = Image | { light: Image; dark: Image }
```

## siteTitle

- 类型：`string | false`

你可以自定义这个选项，以取代导航中的默认网站标题（应用程序配置中的`title`）。当设置为`false`时，导航中的标题将被禁用。当你有已经包含网站标题文本的 LOGO 时，这很有用。

```js
export default {
  themeConfig: {
    siteTitle: 'Hello World'
  }
}
```

## nav

- 类型：`NavItem`

导航菜单项的配置。你可以在[Theme.Nav](/vitepressCn/theme-nav)了解更多细节。

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```

```ts
type NavItem = NavItemWithLink | NavItemWithChildren
type NavItemWithLink = {
  text: string
  link: string
  activeMatch?: string
}
interface NavItemWithChildren {
  text?: string
  items: NavItemWithLink[]
  activeMatch?: string
}
```

## sidebar

- 类型：`Sidebar`

侧边栏的配置项，可以在[Theme Sidebar](/vitepressCn/theme-sidebar)了解更多细节。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```

```ts
type Sidebar = SidebarGroup[] | SidebarMulti
interface SidebarMulti {
  [path: string]: SidebarGroup[]
}
interface SidebarGroup {
  text: string
  items: SidebarItem[]
  collapsible?: boolean
  collapsed?: boolean
}
interface SidebarItem {
  text: string
  link: string
}
```

## outlineTitle

- 类型：`string`

- 默认值：`On this page`

可以用来定制右侧边栏的标题（在概述链接的顶部）。这在用另一种语言编写文档时很有用。

```js
export default {
  themeConfig: {
    outlineTitle: 'In hac pagina'
  }
}
```

## socialLinks

- 类型：`SocialLink[]`

你可以通过定义这个选项在导航中用图标显示你的社交账户链接。

```js
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
  }
}
```

```ts
interface SocialLink {
  icon: SocialLinkIcon
  link: string
}
type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'youtube'
  | { svg: string }
```

## footer

- 类型：`Footer`

页脚配置。你可以添加一个`message`和`copyright`。只有当页面由于设计原因不包含侧边栏时，才会显示页脚。

```js
export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
```

```ts
export interface Footer {
  message?: string
  copyright?: string
}
```

## editLink

- 类型：`EditLink`

`Edit Link`让你在 Git 管理服务（如 GitHub 或 GitLab）上显示一个编辑页面的链接。通过[Theme：Edit Link](/vitepressCn/theme-edit-link)了解更多细节。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
```

```ts
export interface EditLink {
  pattern: string
  text?: string
}
```

## lastUpdatedText

- 类型：`string`

- 默认值：`Last updated`

在最后更新的时间之前显示的前缀文字。

```js
export default {
  themeConfig: {
    lastUpdatedText: 'Updated Date'
  }
}
```

## carbonAds

- 类型：`CarbonAds`

展示[Carbon Ads](https://www.carbonads.net/)的选项。

```js
export default {
  themeConfig: {
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
}
```

```ts
export interface CarbonAds {
  code: string
  placement: string
}
```

通过[Theme: Carbon Ads](/vitepressCn/theme-carbon-ads)了解更多细节。

## docFooter

- 类型：`DocFooter`

可定制出现在`上一篇`和`下一篇`链接上方的文本。如果不是用英语写文档，则很有帮助。

```js
export default {
  themeConfig: {
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}
```

```ts
export interface DocFooter {
  prev?: string
  next?: string
}
```
