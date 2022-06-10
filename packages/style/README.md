# `style`

> 常用效果

## Usage

```ts
// 默认导入
// 常用的居中样式
// 通过 * 匹配符影响全局的样式(小程序不支持*匹配符,会导致报错)
import '@mxnet/style'
```

## 快照


- `shutter class`定义快照容器 

- `style="--flaps: 9"` 定义快照旋转片

- `shutter_flap` 定义快照单个旋转片

- `style="--i: 0"` 定义旋转片在容器的旋转角度

预览效果见`/__tests__/shutter.html`

```ts
import "@mxnet/style/src/shutter.css"
```

```html
    <div class="shutter" style="--flaps: 9">
        <div class="shutter_flap shutter_flap__start"  style="--i: 0"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 1"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 2"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 3"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 4"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 5"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 6"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 7"></div>
        <div class="shutter_flap shutter_flap__start"  style="--i: 8"></div>
    </div>
```
