---
title: 从VitePress 0.x迁移到VitePress 1.x - VitePress中文文档
description: VitePress中文文档之从VitePress 0.x迁移到VitePress 1.x
tags: 
  - VitePress中文文档,VitePress迁移
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress迁移
---

# 从 VitePress 0.x 迁移

如果你是从 VitePress 0.x 版本来的，由于新的功能和增强，有几个突破性的变化。请遵循本指南，了解如何将您的应用程序迁移到最新的 VitePress 上。

## App Config

- 国际化功能还没有实现

## Theme Config

- `sidebar` 选项结构已经改变.
    - `children` 更换成 `items`.
    - 顶层项目目前可能不包含链接。正计划将其带回来。
- `epo`, `repoLabel`, `docsDir`, `docsBranch`, `editLinks`, `editLinkText` 移除以支持更灵活的 api。
    - 为了在导航中添加带有图标的 GitHub 链接，请使用[Social Links](/vitepressCn/theme-nav#社交链接)功能。
    - 需要"编辑此页"功能，请使用[Edit this page](/vitepressCn/theme-edit-link)。
- `lastUpdated` 拆分为`config.lastUpdated`和`themeConfig.lastUpdatedText`。
- `carbonAds.carbon` 变成 `carbonAds.code`。


## Frontmatter Config

- `home: true`选项已改为`layout: home`。另外，许多首页相关的设置也被修改，以提供更多的功能。详见[首页指南](/vitepressCn/theme-home-page)。

- `footer`选项被移至`themeConfig.footer`。