---
title: VitePress侧边栏(sidebar) - VitePress中文文档
description: VitePress中文文档之侧边栏(sidebar)
tags: 
  - VitePress中文文档,VitePress侧边栏,VitePress sidebar
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress侧边栏,VitePress sidebar
---

# 侧边栏

侧边栏是网站的主要导航块。你可以在`themeConfig.sidebar`中配置侧边栏菜单。

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

## 基本配置

边栏菜单的最简单形式是传入一个单一的链接数组。第一层项目定义了侧边栏的分组`Section`。它应该包含`text`，这是分组的标题，`items`作为实际导航链接的。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
          ...
        ]
      },
      {
        text: 'Section Title B',
        items: [
          { text: 'Item C', link: '/item-c' },
          { text: 'Item D', link: '/item-d' },
          ...
        ]
      }
    ]
  }
}
```

如果你在`link`的末尾添加尾部斜线，它将显示相应目录的`index.md`。否则就是响应的`.md`文件，VitePress 会自动将`.md`转换成`.html`，所以不必添加`.md`后缀。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          // 这里显示的是 `/guide/index.md` 页面.
          { text: 'Introduction', link: '/guide/' }
        ]
      }
    ]
  }
}
```

## 多个侧边栏

你可以根据页面路径来显示不同的侧边栏。例如，如[VitePress官方网站](https://vitepress.vuejs.org/)那样，你可能想在你的文档中创建一个单独的内容部分，如 "指南 "页和 "配置 "页。

要做到这一点，首先要把你的页面组织成每个所需分组`Section`的目录。

```
.
├─ guide/
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ config/
   ├─ index.md
   ├─ three.md
   └─ four.md
```

然后，更新你的配置，为每个分组`Section`定义你的侧边栏。现在，你应该传递一个对象而不是一个数组。

```js
export default {
  themeConfig: {
    sidebar: {
      // This sidebar gets displayed when user is under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/guide/' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],
      // This sidebar gets displayed when user is under `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    }
  }
}
```

## 可收缩的侧边栏

通过向侧边栏组添加`collapsible`选项，会显示了一个切换按钮来隐藏/显示每个分组。如当前页面左侧侧边栏。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsible: true,
        items: [...]
      },
      {
        text: 'Section Title B',
        collapsible: true,
        items: [...]
      }
    ]
  }
}
```

所有分组默认都是展开状态的。如果你想让它们在初始页面加载时是关闭收缩状态，请将`collapsible`选项设置为`true`。

```js
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsible: true,
        collapsed: true,
        items: [...]
      }
    ]
  }
}
```

::: tip TIP
`在 "vitepress": "^1.0.0-alpha.4" 版本及之前`

需要注意的是，如果没有添加`collapsible`选项是不会出现收缩展开功能按钮的。
:::