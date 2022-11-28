<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:45:25
 * @LastEditTime: 2022-11-29 00:27:24
 * @Description:
 * @FilePath: /repo/docs/lerna.md
-->

# 注意事项

尽量少使用 `yarn` or `npm`

当一个 `packages` 中存在不需要的依赖时才有必要 使用 以上包管理工具 或 手动从 `package.json` 中删除

当一不小心在 `package` 中使用了 `yarn` 安装了依赖后，建议删除 `node_modules` 执行一遍 `lerna bootstrap` 参照以下 `install dep` 一节

# craete module ( create packages )

- `lerna create module-1`

- `lerna create packages/module-1`

- `lerna create template/module-1`

# install dep

- `lerna add lodash packages/module-1 [--dev| --peer | -- exact] `

> `--dev` 将新包添加到 `devDependencies` 而不是 `dependencies`.

> `--exact` 添加具有确切版本（例如 `1.0.1`）而不是默认`^semver` 范围（例如`^1.0.1`）的新包

> `--peer` 将新包添加到 `peerDependencies` 而不是 `dependencies`

- `lerna add lodash --scope=module-1`

- `lerna add lodash **/module-1`

- `lerna bootstrap`

```
需要注意的是 lerna bootstrap 会给所有 packages install dep
```

- `lerna clean`

```
排除顶级目录的node_modules 会删除所有 package 内的node_modules 一般搭配 lerna bootstrap 使用
```
