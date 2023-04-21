---
title: VitePress Edit Link 编辑页面 - VitePress中文文档
description: VitePress中文文档之编辑页面
tags: 
  - VitePress中文文档,VitePress Edit Link,VitePress 编辑页面
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress Edit Link,VitePress 编辑页面
---

# Edit Link

Edit Link lets you display a link to edit the page on Git management services such as GitHub, or GitLab. To enable it, add themeConfig.editLink options to your config.


Edit Link 可以让你在 Git 管理（如GitHub或GitLab）上显示一个编辑页面的链接。要启用它，请在你的配置中添加`themeConfig.editLink`选项。

```js
export default {
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    }
  }
}
```

`pattern`选项定义了链接的 URL 结构，而`:path`将被替换成页面路径。

默认情况下，这将在文档页面的底部添加链接文本 "Edit this page"。你可以通过定义`text`选项来定制这个文本。

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