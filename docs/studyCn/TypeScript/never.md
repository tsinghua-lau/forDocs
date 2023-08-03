# never 类型

  never 类型的应用场景

```ts
  type BandNumber<T, K> = T extends K ? never : T

  function tag<T>(x: BandNumber<T, number>) {}

  tag(1) //error

  tag('1') //ok

  tag({'a':1})//ok

```
