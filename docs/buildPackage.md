<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-14 12:42:25
 * @LastEditTime: 2022-08-18 10:50:26
 * @Description:
 * @FilePath: /repo/docs/buildPackage.md
-->

# 设计的核心要素

## 依赖

> 依赖可以是一些可执行代码，也可以只是一句声明

处理不好它会造成`实例不一致`,`版本难统一`,`包体臃肿`等问题

当你需要开发一个 `vue utils package` 时, 最终会引用在 `vue` 框架中,这时你的 `vue utils package` 中对 `vue` 的依赖必须只是一句声明，不然会导致(`实力不一致，版本难统一...`)

```ts
import { ref } from "vue";
```

可执行代码很好解释

当开发环境不需要额外的添加依赖时,即可将 `package` 设计为打包后将可执行代码也打包进产物

```html
<script src="https://unpkg.com/vue@next"></script>
```

`utils packages.json` 中的所以 `dependencies` 都会在 `app install` 后被安装到 `node_modules` 中 , 而 `devDependencies` 不会, 这是很重要的

## 开发体验

衡量一个 `package` 是否足够优秀的指标之一就是看他的开发体验如何

根据用户的参数进行验证并且进行良好的提示输出

良好的接口语语义，参数拥有自检性

参考

- 《vuejs 设计与实现》

- [DDD domain primitive](https://www.bilibili.com/video/BV11q4y1q74f?spm_id_from=333.337.search-card.all.click)

## 代码体积

考虑 `dev` 和 `prod`时

```

if(dev){
// dev 时执行
// prod 时会被删除
}

if(prod){
// prod 时执行
// dev 时会被保留
}

```

参考

- vue

- rollup

## 良好的 tree——shaking

## 应该输出什么样的构建产物？

### 考虑会会被放在何处执行

#### 浏览器

## 特性开关

## 错误处理

## 良好的 ts 支持
