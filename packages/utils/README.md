<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:47:31
 * @LastEditTime: 2022-06-11 22:56:51
 * @Description: 
 * @FilePath: /repo/packages/utils/README.md
-->
# `@mxnet/utils`

> description

常用工具

## Usage

### `dist` 适用于 esm 规范 可直接运行在浏览器中, 兼容性考虑不建议

```ts
import {} from '@mxnet/utils'
```

### `dist.umd` 更加通用 可用直接运行在浏览器中,兼容性稳定

```html
<script src='./dist.umd/index.js'></script>
<script>
    console.log(
         mxUtils
    )
</script>
```

### `lib` 适用于 `commonjs` 规范
```ts
const { Phone } = require('@mxnet/utils')
```

## 验证类型 

### Phone

```ts
import { Phone } from  "@mxnet/utils"
```

```html
// 引入文件
<script>
const n = new mxUtils.Phone('phone')
n.getPhone()
</script>
```

#### options

- 验证程度:`默认宽松`,存在`最宽松(loose)`,`宽松(loosest)`,`严谨(rigorous)`，三种验证模式

```ts
// 修改验证程度
new Phone("phone", {
    stringency: "rigorous",
    // 也可以自定义验证
    customRules: /test/g
})
```

- 当验证失败时会立即报错(`throw`)且不会继续向下执行

```ts
new Phone("phone", {
    // 手动关闭自动抛错行为
    errorThrowsImmediately: false,
    // 当关闭自动抛错行为,验证错误后会回调 verificationFailedn 函数, 否则会调用 throwHandling
    verificationFailed() {},
    throwHandling() {}
})
```

```ts
const phone = new Phone("13983912420")
phone.getPhone()
```

## 基本类型 

### RandomNumberInterval(取随机数区间)

```ts
import { RandomNumberInterval } from '@mxnet/utils'
// 默认的随机数是小数，通过isInteger参数取整
const n = new RandomNumberInterval([5,10], { isInteger: true })
n.getNumber()
```

```html
// 引入文件
<script>
const n = new mxUtils.RandomNumberInterval([5,10])
n.getNumber()
</script>
```
