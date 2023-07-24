---
title 基础
---

# v-if 和 v-show 的区别

v-show 其实就是 `display:none` 的切换。而 v-if 是是否渲染该内容。

一般将频繁显隐的元素用 v-show ，反之则 v-if 。

并且，由于 v-if="false" 时，内部组件是不会渲染的，所以可以将不重要的内容设置 false 。

需要时（或异步，比如 $nextTick）再设置为 true，这样可以优先渲染重要的其它内容，合理利用，可以进行性能优化。