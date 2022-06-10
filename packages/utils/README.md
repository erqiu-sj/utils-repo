<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:47:31
 * @LastEditTime: 2022-06-03 22:43:08
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
