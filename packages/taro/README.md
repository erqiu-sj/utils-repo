<!--
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:14:04
 * @LastEditTime: 2022-08-05 22:04:16
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

- 避免拼接 `url query` , 且 `url query` 可预设类型

- 自动处理 `url` 前缀

```ts
import { SimpleRouteJump } from "@mxnet/taro";

//  根据 对象 转换成 url query

SimpleRouteJump.parseParameters({ name: "age", age: "12" }); // => ?name=age&age=12

// url query
interface parameter {
  name: string;
  age: string;
}

new SimpleRouteJump<parameter>("url")
  // 定义跳转方法,良好的类型提示
  // 默认 navigateTo 跳转
  .setMethod("navigateBack")
  // 预跳转回调
  // 在跳转前背调用，根据返回值是否为fasly决定是否发起一次跳转
  .setPreJumpJnterceptor((params: parameter) => false)
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

### `getAppId`

> 获取小程序 `appid`

### `getWxLoginCode`

> 同步获取 `wxlogin.code`

### `DownloadFile`

- 下载临时文件，缓存文件，用户文件 的集合类

- 微信文件系统参考 https://developers.weixin.qq.com/miniprogram/dev/framework/ability/file-system.html

- 灵活的类型声明

```ts
import { DownloadFile } from "@mxnet/taro";
// 下载临时文件
new DownloadFile()
  .success((res) => {
    console.log(res);
  })
  .fail(() => {})
  .down({
    url: "",
  });

// 下载临时文件后缓存到本地 成为缓存文件
new DownloadFile()
  .setDownloadLocation("cache")
  .success(() => {})
  .fail(() => {})
  .down({
    url: "",
  });

// 下载并储存到指定路径成为用户文件
new DownloadFile()
  .setDownloadLocation("userFile")
  .success(() => {})
  .fail(() => {})
  .down({
    data: "hahah",
    encoding: "utf-8",
    filePath:
      "/Users/devops/Desktop/maixun/taro-react-template/assets/hello.txt",
  });
```

### `ChainCall`

- 链式调用

- 灵活的类型声明

```ts
import { ChainCall } from "@mxnet/taro";

new ChainCall()
  // 选择需要调用的api
  .injectApi("downloadFile")
  // success 回调参数会根据 injectApi 声明自动匹配参数类型, 以下回调同理
  .success(() => {})
  .fail(() => {})
  .complete(() => {})
  // 注入参数
  .injectionParameters({ url: "" })
  // 调用
  .done();
```

### `useAudio`

- 解决一个页面中 `createInnerAudioContext` 实例不一致问题
- tips: 不要尝试用 `setState` 和 `useRef` 取创建一个 `createInnerAudioContext` 实例 ，会变得不幸

```ts
const { audioInstanceToUpdate, audioInstanceRef } = useAudio();

// 更新 实例选项
audioInstanceToUpdate({
  src: "",
});

// 调用实例api
audioInstanceRef.play();
```
