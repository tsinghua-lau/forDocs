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

# 上（下）一篇

你可以自定义上一篇和下一篇链接的文本。如果你想在上一篇/下一篇链接上显示与你的侧边栏上不同的文字，这很有帮助。

## prev

- Type: string

- Details:

    指定显示在通往前一页的链接上的文字。

    如果你不在`frontmatter`中设置这个，文本将从侧边栏的配置中推断出来。

- 例子:

```yaml
---
prev: 'Get Started | Markdown'
---
```

## next

- Type: string

- Details:

    同`prev`。