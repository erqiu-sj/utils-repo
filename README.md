<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-11 22:37:08
 * @LastEditTime: 2022-06-12 11:54:41
 * @Description: 
 * @FilePath: /repo/README.md
-->

# repo

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

[@mxnet/build](/packages/build/README.md) 适用 `frame(react,vue)`

[@mxnet/utils](/packages/utils/README.md) 适用 `frame(react,vue),browser`

[@mxnet/service](/packages/service/README.md) 适用 `frame(react,vue),browser`

[@mxnet/style](/packages/style/README.md) 适用 `frame(react,vue),browser`

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