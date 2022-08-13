<!--
 * @Author: 邱狮杰
 * @Date: 2022-08-05 22:24:30
 * @LastEditTime: 2022-08-13 16:36:20
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
  // 定义 generateWeChat 函数文件的位置  用于获取绝对路径 后续方便获取 rootDir, pagesConfigPath,routerFilePath,routeVariableName 的绝对路径
  defineGenerateWeChatPagePath: string;
  pages: string[] | pagesConfig[];
  rootDir: string;
  // 路由文件地址
  routerFilePath?: string;
  // 路由变量名
  routeVariableName?: string;
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
import { resolve } from "path";

generateWeChatPage({
  defineGenerateWeChatPagePath: resolve(__dirname),
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
