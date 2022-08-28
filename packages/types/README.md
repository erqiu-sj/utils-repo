<!--
 * @Author: 邱狮杰
 * @Date: 2022-08-28 10:51:40
 * @LastEditTime: 2022-08-28 14:30:52
 * @Description:
 * @FilePath: /repo/packages/types/README.md
-->

# `types`

> 常用类型声明和类型测试

## Usage

```ts
import types from "@mxnet/types";
```

### Test

```ts
import { Extends, Expect, Equal, IsAny, IsFalse } from "@mxnet/types";
// 检查类型是否为 true, 不为 true 时 编译器会报错, 通常搭配 Equal 使用
type result = Expect<false>;

// Equal 接受两个泛型参数 返回 boolean 传入 Expect 泛型 由编译器检查类型
type result1 = Expect<Equal<string, boolean>>;

// IsAny 检查是否类型为 any
type s = IsAny<number>; // false
// 检查 类型 是否 互为子集
type s = Extends<son, father>; // boolean

// IsFalse 检查类型是否为 false
type s = IsFalse<false>; // true
```

### types

- `fn` 定义一个普通函数

  - `T` 定义函数返回值

```ts
export type fn<T = unknown> = (...args: any[]) => T;
// 泛型参数为函数的返回值
type f = fn<number>;
const a: f = () => {
  return 1;
};
```

- `promiseFn` 定义一个 `promise` 函数

  - `T` 定义函数返回值

```ts
export type promiseFn<T = unknown> = (...args: any[]) => Promise<T>;
// 泛型参数为函数的返回值
type f = promiseFn<number>;
const a: f = async () => {
  return 1;
};
```

- `nonNullFnParameter` 获取一个函数参数 且 绝对不为空值

  - `T` 传入函数

```ts
export type nonNullFnParameter<T extends (...args: any) => any> = NonNullable<
  Parameters<T>
>;
const a = (n: number, l: string) => {};
type s = nonNullFnParameter<typeof a>; // [n:number, l:string];

const l = (...k: s) => {};
l(1, "");
```

- `mergeFnWithPromiseFn` 普通函数和 `promise` 函数的交叉类型

  - `T` 函数返回值类型 **默认 `unknown`**

  - `P` . `ArrayLike`形式的函数参数 **默认(any)**

  - `isP` 是否返回 `Promise` 函数 , `true` 是 `false` 不是 , **默认 `undefined` 返回 普通函数和 `promise` 函数**

```ts
export type mergeFnWithPromiseFn<
  T = unknown,
  P extends any[] = any,
  isP extends boolean | undefined = undefined
> = isP extends undefined
  ? fn<T, P> | promiseFn<T, P>
  : isP extends true
  ? promiseFn<T, P>
  : fn<T, P>;

const f = (n: mergeFnWithPromiseFn<void, [], undefined>) => {};

f(async () => {}); // success

f(() => {}); // success

const f = (n: mergeFnWithPromiseFn<void, [], false>) => {};
f(() => {}); // success
f(async () => {}); // error , 这里需要的是一个 普通函数类型 类型
```

- `isPromiseFn` 需要一个泛型函数 判断是否为 `Promise` 函数 , 返回结果 `boolean`

  - `f` 传入函数

```ts
export type isPromiseFn<f extends mergeFnWithPromiseFn<any, any, undefined>> =  Equal<ReturnType<f>, Promise<any>>;

type s = isPromiseFn(() => {}); // false
type a = isPromiseFn(async () => {}) // false
```
