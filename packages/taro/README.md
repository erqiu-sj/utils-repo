<!--
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:14:04
 * @LastEditTime: 2022-06-25 10:01:46
 * @Description:
 * @FilePath: /repo/packages/taro/README.md
-->

# `taro`

> taro utils

## Usage

```

import {} from '@mxnet/taro'

```

## `getCurRouter`

> 获取当前页面的所有信息

- 良好的类型声明能节约没必要的判断

- 避免忘记个别 `api` 的使用方法

```ts
import { getCurRouter } from "@mxnet/taro";

// 定义页面参数类型
type pageParams = {
  age: number;
};
const { getParameter } = getCurRouter<pageParams>();

// 获取页面参数信息
getParameter().age;
```

## `Storeage`

> 小程序中的 `localstorage utils`

- 良好的类型声明会在定义 `set` 和 `get` 的检查你的代码

- 链式同步调用

```ts
import { Storeage } from "@mxnet/taro";
// 定义所有item 的 key 类型
const key = {
  name: "name",
};

new Storeage<typeof key | "age">().set("age", "age").get("age");
```

## `SimpleRouteJump`

> 简单的路由跳转

- 链式调用

- 新增预跳转验证函数

- 每个参数都有良好的类型提示

- 良好的预设

- 避免拼接 `url query`

- 自动处理 `url` 前缀

```ts
import { SimpleRouteJump } from "@mxnet/taro";

//  根据 对象 转换成 url query

SimpleRouteJump.parseParameters({ name: "age", age: "12" }); // => ?name=age&age=12

new SimpleRouteJump("url")
  // 定义跳转方法,良好的类型提示
  // 默认 navigateTo 跳转
  .setMethod("navigateBack")
  // 预跳转回调
  // 在跳转前背调用，根据返回值是否为fasly决定是否发起一次跳转
  .setPreJumpJnterceptor(() => false)
  .success(() => {})
  .complete(() => {})
  .fail(() => {})
  // 根据定义方法传递所需参数,良好的类型提示
  .trigger({
    // mete 会将参数附加在url后
    mete: { name: "age", age: "12" }, // => ?name=age&age=12
    // 一下回调会覆盖上方同名回调
    success() {},
    fail() {},
    complete() {},
  });
```

```ts
// 集中管理跳转api
const container = {
  goHome: new SimpleRouteJump("url"),
};

// verfiy.tsx
useEffect(() => {
  container.goHome.trigger();
}, []);
```
