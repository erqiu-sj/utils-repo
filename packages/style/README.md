<!--
 * @Author: 邱狮杰
 * @Date: 2022-06-10 21:51:06
 * @LastEditTime: 2022-06-12 11:49:27
 * @Description: 
 * @FilePath: /repo/packages/style/README.md
-->
# `style`

> 常用效果

## Usage

```ts
// 默认导入
// 常用的居中样式
// 通过 * 匹配符影响全局的样式(小程序不支持*匹配符,会导致报错)
import '@mxnet/style'
```
##  测试开发

```ts
import '@mxnet/style/src/test.css'
```

预览效果见`/__tests__/test.html`

```html
    <div class="test_Notification">开发中...</div>
```


## 文本溢出


```ts
import '@mxnet/style/src/overflowOmitted.css'
```

预览效果见`/__tests__/overflowOmitted.html`

- `lineOver` 当行省略,行内元素无效，无`width`属性无效 

- `moreLineOver_${line}` 多行省略,行内元素无效，无`width`属性无效 

```html
<!-- 溢出省略两行 -->
<div class='moreLineOver_2' style='width: 50vw'></div>
<!-- 溢出省略三行 -->
<div class='moreLineOver_3' style='width: 50vw'></div>
```

## 居中

```ts
import '@mxnet/style/src/drama.css'
```

预览效果见`/__tests__/drama.html`

- `flex-cr` 绝对居中更适用于父元素只包裹一个元素的情况下

- `flex_Ycr` 子元素Y轴居中

- `pos-cr` 基于父元素绝对居中

- `pos-Xcr` 基于父元素水平居中

- `pos-Ycr` 基于父元素垂直居中

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
