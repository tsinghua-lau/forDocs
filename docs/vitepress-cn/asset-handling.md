---
title: 资源管理(asset) - VitePress中文文档
description: VitePress中文文档之资源管理
tags: 
  - VitePress中文文档,VitePress资源管理
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress资源管理
---

# 资源管理

::: details 原文
All Markdown files are compiled into Vue components and processed by Vite. You can, and should, reference any assets using relative URLs:

```md
![An image](./image.png)
```

You can reference static assets in your markdown files, your *.vue components in the theme, styles and plain .css files either using absolute public paths (based on project root) or relative paths (based on your file system). The latter is similar to the behavior you are used to if you have used vue-cli or webpack's file-loader.

Common image, media, and font filetypes are detected and included as assets automatically.

All referenced assets, including those using absolute paths, will be copied to the dist folder with a hashed file name in the production build. Never-referenced assets will not be copied. Similar to vue-cli, image assets smaller than 4kb will be base64 inlined.

All static path references, including absolute paths, should be based on your working directory structure.
:::

所有的 Markdown 文件都被编译成 Vue 组件并由 Vite 处理。你可以且应该使用相对的 URL 来引用任何资源。

```md
![An image](./image.png)
```

你可以使用绝对公共路径（基于项目根）或相对路径（基于你的文件系统）来引用你的 Markdown 文件中的静态静态资源、主题中的`*.vue`组件、样式和普通`.css`文件。后者类似于你使用`vue-cli`或`webpack`的文件加载器所习惯的操作。

常见的图像、媒体和字体文件类型会被自动检测并作为资源包含。

所有被引用的资源，包括那些使用绝对路径的资源，在生产构建中都会被复制到`dist`文件夹中，并带有哈希的文件名。从未引用过的静态资源将不会被复制。与`vue-cli`类似，小于`4kb`的图片静态资源将被转换成`base64`。

所有的静态路径引用，包括绝对路径，都应该以你的工作目录结构为基础。

## Public 文件

::: details 原文
Sometimes you may need to provide static assets that are not directly referenced in any of your Markdown or theme components (for example, favicons and PWA icons). The public directory under project root (docs folder if you're running vitepress build docs) can be used as an escape hatch to provide static assets that either are never referenced in source code (e.g. robots.txt), or must retain the exact same file name (without hashing).

Assets placed in public will be copied to the root of the dist directory as-is.

Note that you should reference files placed in public using root absolute path - for example, public/icon.png should always be referenced in source code as /icon.png.
:::

有时你可能需要提供在你的 Markdown 或主题组件中没有直接引用的静态资源（例如，`favicons`和`PWA`图标）。项目根目录下的`public`目录（如果你正在运行`vitepress build docs`的话，`docs`文件夹）可以作为一个用来提供在源代码中从未被引用的静态资源（例如`robots.txt`），或者必须保持完全相同的文件名（没有哈希值）的目录。

放在`public`目录下的资源将被原样复制到`dist`目录的根部。

请注意，你应该使用绝对的根路径来引用放置在`public`中的文件，如`public/icon.png`在源代码中应该总是被引用为`/icon.png`。

## Base URL

::: details 原文
If your site is deployed to a non-root URL, you will need to set the base option in .vitepress/config.js. For example, if you plan to deploy your site to https://foo.github.io/bar/, then base should be set to '/bar/' (it should always start and end with a slash).

All your static asset paths are automatically processed to adjust for different base config values. For example, if you have an absolute reference to an asset under public in your markdown:

```md
![An image](/image-inside-public.png)
```

You do not need to update it when you change the base config value in this case.

However, if you are authoring a theme component that links to assets dynamically, e.g. an image whose src is based on a theme config value:

```vue
<img :src="theme.logoPath" />
```
In this case it is recommended to wrap the path with the withBase helper provided by VitePress:

```vue
<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
</script>
<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```
:::

如果你的网站被部署到一个非根的`URL`，你将需要在`.vitepress/config.js`中设置`base`选项。例如，如果打算把你的网站部署到`https://foo.github.io/bar/`，那么`base`应该被设置为`'/bar/'`（它应该总是以斜线开始和结束）。

你所有的静态资源路径都会被自动处理，以适应不同的基础配置值。例如，如果在你的`Markdown`中对`public`下的资源有一个绝对引用。

```md
![An image](/image-inside-public.png)
```

在这种情况下，当你改变`base`配置值时，你不需要更新它。

然而，如果你正在编写一个动态链接到资源的主题组件，例如，一个图片的`src`是基于主题配置值的。

```vue
<img :src="theme.logoPath" />
```

在这种情况下，建议用`VitePress`提供的[`withBase` helper](/vitepress-cn/api#withBase)来包装路径。

```vue
<script setup>
import { withBase, useData } from 'vitepress'
const { theme } = useData()
</script>
<template>
  <img :src="withBase(theme.logoPath)" />
</template>
```
