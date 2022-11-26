<!--
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:49:53
 * @LastEditTime: 2022-11-26 17:03:42
 * @Description
 * @FilePath: /repo/packages/rluBuild/README.md
-->

# `rluBuild`

> 基于 `rollup` 封装的 `rollup` 常用插件合集

## Usage

```ts
import { RluBuild } from "@mxnet/rlubuild";

const h = new RluBuild()
  // 添加插件
  .addPlugin((pl) => {
    // pl 是一个添加插件的帮手, 你可在 pl 点出尽可能多的插件
    // 将 ts 和 rollup 进行结合
    pl.addTypescript({
      tsconfig: "./tsconfig.json",
      module: "es2015",
    });
    // 压缩
    pl.addRollupPluginTerser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        drop_console: true,
        drop_debugger: true,
      },
    });
    // ...
  })
  .build({
    input: "./src/index.ts",
    output: [
      {
        dir: "dist.es",
        name: "weChatPublicAccountHelper",
        format: "umd",
      },
    ],
  });
```

## Which packages are in use?

- `@mxnet/wechatpublicaccounthelper`

- `@mxnet/service`

- `@mxnet/utils`
