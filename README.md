<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-11 22:37:08
 * @LastEditTime: 2022-08-28 15:31:25
 * @Description:
 * @FilePath: /repo/README.md
-->

# utils repo

## 构建环境

```shell
sh ./script/install.sh
```

## 阅读

[为什么要搞 repo](https://juejin.cn/post/6844904087662624781)

[repo 踩坑](https://juejin.cn/post/6972139870231724045)

## 开发规范

[包管理(必读)](/docs/lerna.md)

[基于面向对象的工程设计方法论 DDD](https://www.bilibili.com/video/bv11q4y1q74f?spm_id_from=333.337.search-card.all.click)

## 通用包规范(packages 目录下)

[包管理(必读)](/docs/lerna.md)

[packages 目录结构(必读)](/docs/basicDirectoryStructure.md)

[如何设计一个 api](https://juejin.cn/post/6958414391339401247)

[设计一个包应该考虑什么？](/docs/buildPackage.md)

## packages

[@mxnet/build](/packages/build/README.md) 适用 `frame(react,vue)`, 基于 `vite` 对 `场景` 和 `技术栈` 的再封装

[@mxnet/utils](/packages/utils/README.md) 适用 `frame(react,vue),browser` , 一些工具函数

[@mxnet/service](/packages/service/README.md) 适用 `frame(react,vue),browser`, 基于 `axios`, 实现拦截器热插拔, 灵活配置(缓存请求,取消重复请求,请求错误兜底,多版本共存,灵活的请求取消句柄 等等)

[@mxnet/style](/packages/style/README.md) 适用 `frame(react,vue),browser`, 基础样式

[@mxnet/taro](/packages/taro/README.md) 适用 `frame(react,vue) with taro` , 封装了一些常用且难用的 `wechat api`

[@mxnet/wechatpublicaccounthelper](/packages/weChatPublicAccountHelper/README.md) 适用 `frame(react,vue)` , 无 `wechat sdk` 时 模拟 `wechat sdk` 行为进行本地调试

[@mxnet/types](/packages/weChatPublicAccountHelper/README.md) 适用 `frame(react,vue)` , 常用类型，类型测试

[@mxnet/generatewechatpage](/script/generateWeChatPage/README.md) 适用 `node` , 自动生成页面 `components` `hooks` `路由`, 且同步 `app.config.ts`中`pages` 数组

## TODO

- 完善文档

- `eslint config`

- `stylelint config`

- `packages` 包完善

- `统一 tsconfig`

- `h5`

  - 预加载
  - `loading`
  - ~~开发部署阶段的页面提示~~
  - ~~`快门css`~~

- `wechat`
  - ~~根据 `pages` 自动生成页面和路由~~
