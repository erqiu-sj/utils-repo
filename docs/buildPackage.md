# 设计的核心要素

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
    // dev时执行
    // prod时会被删除
}

if(prod){
    // prod时执行
    // dev时会被删除
}

```

参考

- vue

- rollup

## 良好的 tree——shaking

## 应该输出什么样的构建产物？

### 考虑会会被放在何处执行

#### 浏览器

#### 框架 dep

## 特性开关

## 错误处理

## 良好的 ts 支持
