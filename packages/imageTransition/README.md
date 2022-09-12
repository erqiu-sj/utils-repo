# `@mxnet/imageTransition(不可用)`

> 图片过渡动画，启发来自 [你的图片加载，一点都不酷炫！不信You Look Look...](https://juejin.cn/post/7122256732940107813)

## Usage

```ts
import {ImageTransitionAnimation} from '@mxnet/imagetransition'
import {createApp} from 'vue'

const app = createApp(App)

app.directive("imgAni", ImageTransitionAnimation)
```

```html
<img src="" v-imgAni="{def: src}"/>
```

## Principle

该指令会生成一个 `img` 元素在 指令元素后方

并且替换当前元素 `src` 为 默认占位图片`(def)`

这时会立即去请求真实的图片资源

请求回来后会将当前元素隐藏

显示真实图片资源

期间会有一系列钩子调用

来完成这个过渡动画


## Precautions

- 被指令标记的 `img` 元素必须是一个脱离文档流的元素

- 必须搭配 `vite-plugin-img-reload` 使用

- 只在 `img` 标签才生效

- `options`

```ts
interface ImageTransitionAnimationOptions {
    // 默认占位图片
    def: string
}
```
