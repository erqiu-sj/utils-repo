<!--
 * @Author: 邱狮杰
 * @Date: 2022-07-17 21:57:48
 * @LastEditTime: 2022-08-03 22:25:24
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/README.md
-->

# `weChatPublicAccountHelper`

> TODO: description

## flow chart

每个 `api` 通过继承 `ApiImplementation` 获取读写 `api` 配置,`wechat SDK api` 常用回调封装

并通过 `api.done()` 来完成调用

期间会判断当前环境是否注入 `wechat sdk`

当 `wechat sdk` 不存在时

会调用 根据 `api polyfill` 的预期行为, 该预期行为属于无 `wechat sdk` 时模拟 `wechat sdk`的预期行为

预期行为会返回 `succces` 的预期参数 并 `call success callback`

当 `wechat sdk` 存在时

将会把 `api.readConfiguration({})` 获取的所有参数传递给 `wechat sdk`,你仍然可以通过`api.success(()=>{})`等回调跟踪 `wechat sdk` 的行为

## Usage

### cjs

```ts
const wechatpublicaccounthelper = require("weChatPublicAccountHelper");
```

### esm

```ts
import * as wechatpublicaccounthelper from "wechatpublicaccounthelper";
import { ChooseImage } from "wechatpublicaccounthelper";
```

### umd

```html
<script src="./dist.umd"></script>
<script>
  new weChatPublicAccountHelper.GetLocalImgData().done();
</script>
```

### common use

```html
<script src="./dist.umd"></script>
<script>
  // 配置 weChatPublicAccountHelper
  new weChatPublicAccountHelper.BasicConfiguration({
    // 该baseSrc会在无 wechat sdk 的情况下，在部分api success 参数需要 图片 url 链接 的情况下返回 (如 GetLocalImgData)
    baseSrc: "abd",
  });
  new weChatPublicAccountHelper.GetLocalImgData()
    .success((res) => {
      // 该 res 和 wechat sdk 返回的数据结构兼容
      console.log(res.localData === "abd");
    })
    .done();
</script>
```

```html
<script src="./dist.umd"></script>
<script>
  // 以下 api 代之 wechat sdk api
  new weChatPublicAccountHelper.api()
    // wechat sdk succscc callback
    .success(() => {})
    // wechat sdk fail callback
    .fail(() => {})
    // wechat sdk complete callback
    .complete(() => {})
    // wechat sdk cancel callback 此回调只在部分 api 中存在
    .cancel(() => {})
    // wechat sdk trigger callback 此回调只在部分 api 中存在
    .trigger(() => {})
    // 该函数的参数会传入 wechat sdk api 中
    .readConfiguration({})
    .done();
</script>
```
