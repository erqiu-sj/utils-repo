<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:05:45
 * @LastEditTime: 2022-06-16 17:29:03
 * @Description: 
 * @FilePath: /repo/packages/build/README.md
-->
# `@mxnet/build`

> description

脚手架的基础建设 与 `vite` 结合

## Usage

```typescript
import { ViteConfiguration } from '@mxnet/build'
// ViteConfiguration 是一切配置的开始

// 我们应该考虑清楚我们的 project run 在哪个场景？ mobile ? pc ?
const config = new ViteConfiguration().setScenes('mobile') // 设置场景

// 考虑技术选型

// 第一个参数是技术栈名称,第二个参数则会根据场景提示相应的配置，可忽略,忽略则注入 mobile 下 vue 的默认配置 , 可以 default:false 拒绝注入
config.setTechnologyStack('vue', { default: false })

// 导出配置传递给vite
config.getConfig()
```

```typescript
// 构建一个 基础的 mobile vue vite config
import { ViteConfiguration } from '@mxnet/build'
const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'vue', 'mobile'>('vue', { default: false }).getConfig({} /* vite config */)
```

## 全局默认配置

- 默认路径别名 `~/`

```typescript
import {} from '~/assets/
```

## `mobile` 下的默认配置

### `vue` and `react`

- `postcss-px-to-viewport` : `px` 转 `vw` `postcss` 插件 默认开启，可以关闭可配置

```typescript
// 禁用 postcss-px-to-viewport
const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'vue', 'mobile'>('vue', { postcssPxToViewport: false })
// 配置 postcss-px-to-viewport
const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'vue', 'mobile'>('vue', { postcssPxToViewport: {} })
```

## more

### vconsole

- tips: 默认不开启`vconsole`, 你也可以通过配置修改。[更多配置见](https://github.com/vadxq/vite-plugin-vconsole#options)

```ts
    const viteConfig = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().getConfig({
    }) 
```

```ts
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
    return new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole({
        entry: [path.resolve('src/main.ts')], 
        localEnabled: command === 'serve', 
        enabled: command !== 'serve' || mode === 'test', 
        config: { // vconsole options
          maxLogNumber: 1000，
          theme: 'light'
        }
    }).getConfig({
    })
};
```
### auto import api

- [选项参考](https://github.com/antfu/unplugin-auto-import)

-  `addAutoImport(options?) api` 会根据技术栈 `setTechnologyStack api` 自动生成对应的`.d.ts`文件

- 技术栈 `vue` 会默认生成 `vue pinia vue-router .d.ts`文件

- 技术栈 `react` 会默认生成 `react .d.ts`文件

```ts
    const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addAutoImport().getConfig() as UserConfig
```


## Plugin

### TODO 