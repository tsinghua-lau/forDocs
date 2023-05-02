::: info Vitest

是一个由 vite 提供的快速的单元测试框架


没了~简洁明了～ [官网](https://cn.vitest.dev/)

:::

单元测试在代码改动时，有哪些好处呢？

1. 保证代码质 

## 安装

```ts
pnpm i vitest -D
```

## 创建 `test` 文件夹

一般来说，我们会在项目根目录下创建一个 `test` 文件夹，用来存放所有的测试文件。

`test` 文件夹下的文件一般以 `.spec.ts` 或 `.test.ts` 结尾，这样我们就可以使用 `vite` 的 `glob` 功能来自动加载所有的测试文件。
 


创建`viteConfig.ts`文件，用来封装`vite`的配置
```ts
/// <reference types="vitest" /> 
import { UserConfig } from 'vitest/config';
export const vitestConfig: UserConfig['test'] = {
        lobals: true, //支持全局导包
};
```

## 添加类型声明

在`tsconfig.json`中添加 `types`

```ts
"compilerOptions": {
    "types":[
      "vitest/globals",
    ]
}
```

## 添加编译文件

在`tsconfig.node.json`中添加 "vite.config.ts"

```ts
"include": ["vite.config.ts","vitestConfig.ts"]
 ```



### `vite.config.ts` 导入配置
```ts
import { vitestConfig } from './vitestConfig';

export default defineConfig({
    test: {
        ...vitestConfig,
    },
    //...
});
```

## 创建`index.spec.ts`文件

```ts
import { test, expect } from "vitest";
// 一个组件
import loading from "@/components/Loading/index.vue";

// 编写测试用例 1
test("test", () => {
  expect(1 + 1).toBe(2);
});

// 编写测试用例 2
test("test", () => {
  expect(1 + 1).toBe(2);
});

// 编写测试用例 3
test("loading", () => {
  console.log(loading);
});
```

## 配置 `package.json` 添加 `test` 命令

```ts
{
  "scripts": {
    "test": "vitest"
  }
}
```

## 运行测试

```ts
pnpm run test
```

## 测试结果

![run](/images/web/pnpmtest.png)

在这里可以看到 3 个测试用例都绿色通过了
