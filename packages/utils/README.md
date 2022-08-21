<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:47:31
 * @LastEditTime: 2022-08-21 13:17:03
 * @Description:
 * @FilePath: /repo/packages/utils/README.md
-->

# `@mxnet/utils`

> description

常用工具

## Usage

### `dist` 适用于 esm 规范 可直接运行在浏览器中, 兼容性考虑不建议

```ts
import {} from "@mxnet/utils";
```

### `dist.umd` 更加通用 可用直接运行在浏览器中,兼容性稳定

```html
<script src="./dist.umd/index.js"></script>
<script>
  console.log(mxUtils);
</script>
```

### `lib` 适用于 `commonjs` 规范

```ts
const { Phone } = require("@mxnet/utils");
```

## 常用工具

### 时序控制器(`ControlTiming`)

```ts
/**
 * 创建一个时序控制器
 * const httpList = new ControlTiming()
 * 添加一个时序项名(name), 添加请求函数
 * httpList.addTimingItems(name,httpTask)
 * httpList.addTimingItems(name,httpTask)
 *
 *
 * 触发器
 * 触发的时序标识,以及触发的参数
 * httpList.trigger('name',{})
 *
 * 监听器
 * 返回响应时触发回调
 * httpList.monitor('name',()=>{})
 *
 */
const c = new ControlTiming()
  .addTimingItems("name", async (name?: string) => {
    return 1;
  })
  .addTimingItems("two", async () => {
    return await new Promise((res) => {
      res(12);
    });
  });

c.monitor("name", (res) => {
  expect(res).toStrictEqual(1);
});

c.monitor("two", async (res) => {
  expect(res).toStrictEqual(12);
});

c.trigger("name");
```

### `html2canvas`

在 `html2canvas(1.4.1)` 中兼容了 `img object-fit` 属性, 打印时不能将图片放入`div`当作 `background-image` 使用， 这样只会更模糊

```ts
import html2canvas from "@mxnet/utils/html2canvas";
```

```html
<script src="./html2canvas/index.js"></script>
<script>
  window.html2canvas(dom, options);
</script>
```

### 转盘

```html
<script src="./dist.umd/index.js"></script>
<script>
  const rotateColl = {
    1: 0, //  藏碳餐饮优惠卷
    2: 35, // 佳得乐清爽一箱
    3: 106, //  瑜伽垫
    4: 178, // 佳得乐背包
    5: 217, // 佳得乐运动毛巾
    6: 254, // 佳得乐水壶
    7: 287, //  奇迹健身走体验卡
    8: 323, //蜀大侠餐饮优惠卷
    9: 70, // 谢谢惠顾
    10: 142, // 谢谢惠顾
  };
  const instance = new mxUtils.BigTurntable()
    // 设置奖品列表
    .setPrizeIndexAndAngle(rotateColl)
    // 设置未中奖时的奖品id
    .setPrizeIdWhenNotWinning([9, 10])
    // 设置未中奖时随机旋转角度
    .setRandomAngleWhenLotteryisNotDrawn([70, 142])
    // 设置一个旋转周期时间 ，建议根据  transition: all 3s 来设置
    .setTurntableCycle({ time: 3000 });

  instance.startTheCarousel(dom, {
    onDone() {
      console.log("周期结束时调用");
    },
    onCallingBackDraws() {
      console.log("转盘正在旋转时调用");
    },
    onPreliminaryDraw() {
      console.log("转盘预转动调用");
    },
  });

  instance.destroySpinCycle(); // 销毁旋转周期 onDone将不会被执行
</script>
```

## 验证类型

### `Phone`

```ts
import { Phone } from "@mxnet/utils";
```

```html
// 引入文件
<script>
  const n = new mxUtils.Phone("phone");
  n.getPhone();
</script>
```

#### `options`

- 验证程度:`默认宽松`,存在`最宽松(loose)`,`宽松(loosest)`,`严谨(rigorous)`，三种验证模式

```ts
// 修改验证程度
new Phone("phone", {
  stringency: "rigorous",
  // 也可以自定义验证
  customRules: /test/g,
});
```

- 当验证失败时会立即报错(`throw`)且不会继续向下执行

```ts
new Phone("phone", {
  // 手动关闭自动抛错行为
  errorThrowsImmediately: false,
  // 当关闭自动抛错行为,验证错误后会回调 verificationFailedn 函数, 否则会调用 throwHandling
  verificationFailed() {},
  throwHandling() {},
});
```

```ts
const phone = new Phone("13983912420");
phone.getPhone();
```

## 基本类型

### `RandomNumberInterval`(取随机数区间)

```ts
import { RandomNumberInterval } from "@mxnet/utils";
// 默认的随机数是小数，通过isInteger参数取整
const n = new RandomNumberInterval([5, 10], { isInteger: true });
n.getNumber();
```

```html
// 引入文件
<script>
  const n = new mxUtils.RandomNumberInterval([5, 10]);
  n.getNumber();
</script>
```
