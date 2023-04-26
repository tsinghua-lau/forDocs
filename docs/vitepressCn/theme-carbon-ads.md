---
title: Carbon Ads - VitePress中文文档
description: VitePress中文文档之Carbon Ads
tags: 
  - VitePress中文文档,VitePress广告位,VitePress Carbon Ads
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress广告位,VitePress Carbon Ads
---

# Carbon Ads

VitePress 已经内置了对 [Carbon Ads](https://www.carbonads.net/) 的本地支持。通过在配置中定义`Carbon Ads`凭证，VitePress 将在页面上显示广告。

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
这些值被用来调用 carbon CDN 脚本，如下所示：

```js
`//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`
```

要了解更多关于 Carbon Ads 的配置，请访问 [Carbon Ads](https://www.carbonads.net/) 官方网站。
