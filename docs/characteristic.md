<!--
 * @Author: 邱狮杰
 * @Date: 2022-11-29 00:31:32
 * @LastEditTime: 2022-11-29 02:05:33
 * @Description:
 * @FilePath: /repo/docs/characteristic.md
-->

## 缓存打包内容

> `/package.json` -> `script` -> `build`

- 找到所有项目中 `packages.json` 文件中包含 `build` 字段的指令执行

```shell
yarn build
```

## 清除所有缓存

> `/package.json` -> `script` -> `clearNx`

```shell
yarn clearNx
```

## 安装所有依赖

> `/package.json` -> `script` -> `i`

```shell
yarn i
```

## 查看项目依赖

> `/package.json` -> `script` -> `graph`

```shell
yarn graph
```

## 查看项目的 `package` 信息

> `/package.json` -> `script` -> `ls`

```shell
yarn ls
```

## 查看项目的更新信息

> `/package.json` -> `script` -> `change`

```
yarn change
```

## 更新失败后强制更新至 `npm`

> `/package.json` -> `script` -> `publish:force`

```
yarn publish:force
```
