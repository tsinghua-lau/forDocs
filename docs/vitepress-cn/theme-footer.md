---
title: VitePress footer 页脚 - VitePress中文文档
description: VitePress中文文档之页脚
tags: 
  - VitePress中文文档,VitePress footer,VitePress 页脚
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress footer,VitePress 页脚
---

# 页脚

选项`themeConfig.footer`被设置后，将在 VitePress 页面底部显示全局页脚。

```ts
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
  // The message shown rigth before copyright.
  message?: string
  // The actual copyright text.
  copyright?: string
}
```

注意，当侧边栏可见时，将不显示页脚。
