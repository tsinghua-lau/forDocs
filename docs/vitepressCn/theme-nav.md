---
title: VitePress导航栏(Nav) - VitePress中文文档
description: VitePress中文文档之导航栏
tags: 
  - VitePress中文文档,VitePress导航栏,VitePress Nav
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress导航栏,VitePress Nav
---

# Nav

Nav 是显示在页面顶部的导航栏，包含网站标题、全局菜单连接等。

## 网站标题和 Logo

默认情况下，导航是根据[config.title](/vitepressCn/config-app#title)的值显示网站的标题。如果你想改变导航上显示的内容，你可以在`themeConfig.siteTitle`选项中定义自定义文本。

```js
export default {
  themeConfig: {
    siteTitle: 'My Custom Title'
  }
}
```

如果你的网站有一个 LOGO，你可以通过传入图片的路径来显示它。你应该把 LOGO 直接放在`public`目录中，并定义它的绝对路径。

```js
export default {
  themeConfig: {
    logo: '/my-logo.svg'
  }
}
```

当添加一个 LOGO 时，它将与网站标题一起显示。如果只想显示 LOGO，并且想隐藏网站的标题文本，请在`siteTitle`选项中设置`false`。

```js
export default {
  themeConfig: {
    logo: '/my-logo.svg',
    siteTitle: false
  }
}
```

## 导航链接

你可以定义`themeConfig.nav`选项来给导航添加链接。

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ]
  }
}
```

`text`是显示在导航中的实际文本。`link`是点击导航后跳转的页面地址。设置`link`为实际文件所在目录的位置，不带`.md`后缀，并且总以`/`开头。

使用 `items` 选项可以设置下拉菜单形式的导航链接：

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

注意：下拉菜单的一级标题不能使用`link`属性，因为它变成了一个打开下拉框的按钮。

也可以通过传递更多的嵌套来进一步为下拉菜单添加 "分组"。

```js
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // 分组标题
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // 也可以省略标题
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ]
  }
}
```

### 自定义链接的 “active” 状态

当**当前页面**在匹配的路径下时，导航菜单项将被突出显示。如果你想自定义要匹配的路径，请定义`activeMatch`属性和`regex`作为一个字符串值。

```js
export default {
  themeConfig: {
    nav: [
      // This link gets active state when the user is
      // on `/config/` path.
      {
        text: 'Guide',
        link: '/guide',
        activeMatch: '/config/'
      }
    ]
  }
}
```

::: warning WARNING
**activeMatch** 预计是一个 regex 字符串，但你必须把它定义为一个字符串。我们不能在这里使用实际的正则表达式对象，因为它在构建时不能被序列化。
:::

## 社交链接

参考 [socialLinks](/vitepressCn/config-theme#socialLinks)