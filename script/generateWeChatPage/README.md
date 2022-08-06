<!--
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:24:30
 * @LastEditTime: 2022-08-06 16:00:05
 * @Description:
 * @FilePath: /repo/script/generateWeChatPage/README.md
-->

# `generateWeChatPage`

> 自动生成小程序页面 路由 `components` 和 `hooks` 文件夹

## Usage

### parameters

```ts
export interface pagesConfig {
  // 生成路由 true
  generateRoute?: boolean;
  // 生成 components 文件夹 默认 true
  generateComponents?: boolean;
  // 生成 hooks 文件夹 默认 true
  generateHooks?: boolean;
  path: string;
}

// 生成文件的基本配置
export interface generateWeChatPageReadOptions {
  pages: string[] | pagesConfig[];
  rootDir: string;
  // 路由文件地址
  routerFilePath?: string;
  // pages 配置文件路径
  pagesConfigPath: string;
  // 模版文件路径
  templateFilePath?: string;
  // 替换index内容处理函数 ,data 为 templateFilePath 文件内容
  replaceHandler?: (data: string) => string;
}
```

### cjs

```ts
const { generateWeChatPage } = require("@mxnet/generateWeChatPage");
```

### esm

```ts
import { generateWeChatPage } from "@mxnet/generateWeChatPage";
generateWeChatPage({
  pages: [
    {
      path: "/index/index/index",
      generateComponents: true,
      generateHooks: true,
      generateRoute: false,
    },
    // 默认创建 路由 hooks components
    "/work/index",
  ],
  rootDir: "pages",
  // 自动补全 app.config.ts 中 pages 字段
  pagesConfigPath: "pages/config.ts",
  // 自动生成路由
  routerFilePath: "hooks/router.ts",
});
```
