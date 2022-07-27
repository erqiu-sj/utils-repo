<!--
 * @Author: 邱狮杰
 * @Date: 2022-07-17 21:57:48
 * @LastEditTime: 2022-07-18 12:15:00
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

## Usage

```

const wechatpublicaccounthelper = require('weChatPublicAccountHelper');

// TODO: DEMONSTRATE API

```

```

```
