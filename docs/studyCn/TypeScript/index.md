---
title 基础
---

# type 和 interface 区别

1. 定义方式不同

- interface 可以通过继承其他 interface 来扩展自身的属性和方法，也可以多次声明同名的 interface，它们会自动合并成一个接口。

- type 可以使用交叉类型（用&连接）或联合类型（用 | 连接）来组合其他类型，但不能直接继承其他 type。同样的，多次声明同名的 type 导致类型冲突错误。

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const john: Person = { name: "John" };

type Dog = {
  name: string;
};

type GuardDog = Dog & {
  isGurading: boolean;
};

const dog: GuardDog = { name: "Buddy", isGuarding: true };
```

2. 同名合并

- 如果你定义了多个同名的 interface，它们会被自动合并成一个，合并后的 interface 会拥有所有定义的属性和方法。

- type 不支持同名合并，如果多次声明同名的 type，则会导致类型冲突错误。

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
}

const p: Person = { name: "John", age: 25 };
```

3. 语法不同

- interface 可以用来定义对象、函数、类的类型，而 type 只能用来定义对象、基本类型、联合类型、元组等类型。

4. 兼容性

- 对于对象类型，interface 会进行兼容性检查以确保属性的兼容性和缺失属性的检查；而 type 则更加宽松，只要目标类型具有所需的属性即可。

- 当使用 implement 关键字实现一个接口时，编译器会强制检查是否实现了所有接口的属性和方法。

```ts
interface Animal {
  name: string;
}

type Dog = {
  name: string;
  breed: string;
};

const animal: Animal = { name: "Tom" };
const dog: Dog = { name: "Spike", breed: "Labrador" };

animal = dog; // 兼容
dog = animal; // 不兼容
```

一般情况下，如果需要定义对象的结构或者实现类似接口的功能，可以使用 interface；如果需要描述更复杂的类型或进行类型组合，可以使用 type。
