<!--
 * @Author: 邱狮杰
 * @Date: 2022-09-08 08:56:24
 * @LastEditTime: 2022-09-12 22:05:20
 * @Description: 
 * @FilePath: /repo/packages/vite-plugin-img-reload/README.md
-->
# `vite-plugin-img-reload(不可用)`

> 配合 `@mxnet/imagetransition` 指令发挥最大功效

## Usage

```ts
import {resolve} from 'path'
import vitePluginImgReload from 'vite-plugin-img-reload'

// 插件所有选项
export interface vitePluginImgReloadOption {
    // 资源路径
    resourcePathDir?: string
    // 输出路径
    outputDir?: string
}

const config = new ViteConfiguration()
    .setScenes('mobile')
    .setTechnologyStack('vue', {})
    .addAutoImport({})
    .getConfig({
        plugins: [
            inspect(),
            ImgReload({
                resourcePathDir: resolve("./src/assets/")
            })
        ],
    }) as UserConfig
```

## Principle

该插件会输出一个 `css` 文件， `@mxnet/imagetransition` 中的指令逻辑会用到该样式

`@mxnet/imagetransition` 中的指令有一个非常重要的参数 `def` 代表占位图

通常来说 在加载一个大图的时候我们不希望一个试图占位处一片空白，空白太枯燥了，当我们知道是因为网络问题造成的加载缓慢时

我们渴望看见一个轮廓后 慢慢等到图片加载 ，这时候我们需要一个占位图，但我们又不希望占位图消耗太多资源

当 插件中的 `resourcePathDir`  参数不为空时候，插件会去查找该路径下的所有图片并且转为极小的`base64`

生成一个 `base64` 集合文件 , 生成于 `vite.root` 参数路径 或指定的 `outputDir` 参数路径

你可以尽情的引用这个极小的资源文件
 
后配合 `@mxnet/imagetransition` 指令 当原图加载完成后 丝滑的从缩略图切换至原图


### 原图

![ori](/packages/vite-plugin-img-reload/ori.png)

## 压缩后

![ori](/packages/vite-plugin-img-reload/base64.png)
