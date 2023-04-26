---
title: VitePress Markdown 扩展功能 - VitePress中文文档
description: VitePress中文文档之Markdown 扩展功能
tags: 
  - VitePress中文文档,Markdown扩展功能
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,Markdown扩展功能
---

# Markdown 扩展功能

VitePress带有内置的Markdown扩展功能。

## Header Anchors

Header会自动应用锚链接`Anchors`。锚`Anchors`的渲染可以通过`markdown.anchor`选项进行配置。

## Links

内部和外部链接都得到特殊处理。

### Internal Links 内部链接

::: details 原文
Internal links are converted to router link for SPA navigation. Also, every index.md contained in each sub-directory will automatically be converted to index.html, with corresponding URL /.
:::

内部链接被转换为路由器链接，用于SPA导航。另外，每个子目录中包含的每个`index.md`将自动转换为`index.html`，并有相应的URL `/`。

假设以下目录结构：

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

在`foo/one.md`文件中使用：

``` md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extention -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### 页面后缀

页面和内部链接生成页面后默认以`.html`为后缀。

### 外部链接

外部链接都会自动添加`target="_blank" rel="noreferrer"`:

* [vuejs.org](https://vuejs.org/)
* [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Frontmatter

开箱支持 YAML frontmatter。

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

该数据可用于页面的其他部分，以及所有自定义主题组件。

更多细节，请参考<a href="/vitepressCn/frontmatter">Frontmatter</a>。

## GitHub 风格表格

**输入** 

```
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```
**显示**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji

**输入** 

```
:tada: :100:
```

**显示**

:tada: :100:

查询所有[表情符号的列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 目录导航

**输入** 

```
[[toc]]
```

**显示**

[[toc]]

TOC 的渲染可以使用`markdown.toc`选项进行配置。

::: danger 译者注：
在 "vitepress": "^1.0.0-alpha.4" 时，使用`[[toc]]`会无法正常显示目录导航。
:::

## 自定义容器

自定义容器可以通过其类型、标题和内容来定义。

### 默认标题

**输入** 

``` md
::: info
This is an info box.
:::
::: tip
This is a tip.
:::
::: warning
This is a warning.
:::
::: danger
This is a dangerous warning.
:::
::: details
This is a details block.
:::
```

**显示**

::: info
This is an info box.
:::
::: tip
This is a tip.
:::
::: warning
This is a warning.
:::
::: danger
This is a dangerous warning.
:::
::: details
This is a details block.
:::

### 自定义标题

你可以通过在容器的 "类型 "后面添加文本来设置自定义标题。

**输入** 

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::
````

**显示**

::: danger STOP
Danger zone, do not proceed
:::
::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::

## 代码块中的语法高亮

VitePress 使用 Shiki 来突出 Markdown 代码块中的语言语法，使用彩色文本。Shiki 支持各种各样的编程语言。你所需要做的就是在代码块的开头回车符上添加一个有效的语言别名。

**输入** 

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**显示**

```js
export default {
  name: 'MyComponent',
  // ...
}
```
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

详细[语言的列表](https://github.com/shikijs/shiki/blob/main/docs/languages.md)可在 Shiki 的资源库中找到。

你也可以在应用配置中自定义语法高亮主题。更多细节请参见[markdown选项](/vitepressCn/config-app#markdown)。

## 代码块中的行高亮

**输入** 

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**显示**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，你还可以指定多个单行、范围或两者来显示高亮。

* 行的范围：如`{5-8}，{3-10}，{10-17}`
* 多个单行：如`{4,7,9}`
* 行范围和单行：如`{4,7-13,16,23-27,40}`

**输入** 

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**显示**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## 行号

通过在 config.js 中配置`lineNumbers`让代码块中实现行号。

``` js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

更多详情请参考[markdown选项](/vitepressCn/config-app.html#markdown)。

## 导入代码片段

可以通过以下语法从现有文件中导入代码片段：

```md
<<< @/filepath
```

同样支持[语法高亮](/vitepressCn/markdown#代码块中的语法高亮)

```md
<<< @/filepath{highlightLines}
```

**输入** 

```md
<<< @/snippets/snippet.js{2}
```

**代码文件**

```js
export default function () {
  // ..
}
```

**显示**

```js
export default function () {
  // ..
}
```

::: tip TIP
@的值对应于根目录。默认情况下是 VitePress 项目根目录，除非 srcDir 被配置了。
:::

你也可以使用[VS code region](https://code.visualstudio.com/docs/editor/codebasics#_folding)只包括代码文件的相应部分。你可以在文件路径的`#`后面提供一个自定义的范围名称。

**输入** 

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**代码文件**

```js
// #region snippet
function foo() {
  // ..
}
// #endregion snippet
export default foo
```

**显示**

```js
function foo() {
  // ..
}
```

也可以像下面这样在大括号({})中指定语言：

```md
<<< @/snippets/snippet.cs{c#}
<!-- with line highlighting: -->
<<< @/snippets/snippet.cs{1,2,4-6 c#}
```

如果无法从文件扩展名中推断出语言类型，这就很有用了。

## 包含 Markdown 文件

你可以像下面这样将一个 Markdown 文件包含到另一个 Markdown 文件中：

**输入** 

```md
# Docs

## Basics

<!--@include: ../public/parts/basics.md-->
````

**代码文件**

```md
Some getting started stuff.
### Configuration
Can be created using `.foorc.json`.
```

**等同于**

```md
# Docs
## Basics
Some getting started stuff.
### Configuration
Can be created using `.foorc.json`.
```

::: warning WARNING
请注意，如果被包含的文件不存在则不会引发错误，所以在使用该功能之前，请确保内容的存在。
:::

## 高级设置

VitePress 使用[markdown-it](https://github.com/markdown-it/markdown-it)作为 Markdown 渲染器。上面的很多扩展是通过自定义插件实现的。你可以使用`.vitepress/config.js`中的`markdown`选项进一步定制 markdown-it。

```js
const anchor = require('markdown-it-anchor')
module.exports = {
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#permalinks
    anchor: {
      permalink: anchor.permalink.headerLink()
    },
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2] },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

更多相关配置请参考：[App Configs](/vitepressCn/config-app#markdown).