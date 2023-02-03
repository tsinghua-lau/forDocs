---
title 基础
---

## Vue v-if与v-for

* 在Vue2中，当v-if与v-for在相同元素上使用时，v-for具有更高的优先级

* 在Vue3中，当v-if与v-for在相同元素上使用时，v-if具有更高的优先级

## v-bind in css

```javascript
//声明 变量

const color = ref('yellow')
```

```javascript
//读取 变量

.item{
    color:v-bind(color)
}
```


