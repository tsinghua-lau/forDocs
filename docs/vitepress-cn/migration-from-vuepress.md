---
title: 从VuePress迁移到VitePress - VitePress中文文档
description: VitePress中文文档之从VuePress迁移到VitePress
tags: 
  - VitePress中文文档,VitePress迁移
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress迁移
---

# 从 VuePress 迁移

## Markdown

### Images

与 VuePress 不同，当你使用静态图片时，VitePress 会自动根据`config`中[base](/vitepress-cn/asset-handling.html#base-url)的配置项来处理。

因此，现在你可以不用`img`标签来渲染图片。

```diff
- <img :src="$withBase('/foo.png')" alt="foo">
+ ![foo](/foo.png)
```

::: warning WARNING
对于动态图像，你仍然需要`withBase`，如[Base URL指南](/vitepress-cn/asset-handling.html#base-url)中所示。
:::

Use `<img.*withBase\('(.*)'\).*alt="([^"]*)".*>` regex to find and replace it with `![$2]($1)` to replace all the images with `![](...)` syntax.

---

更多内容请关注...