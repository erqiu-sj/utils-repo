<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:52:32
 * @LastEditTime: 2022-08-20 22:05:39
 * @Description:
 * @FilePath: /repo/packages/service/README.md
-->

# `@mxnet/service`

> 请求最佳实践

## precautions

```ts
// 2022.8.3
// 如果你以前喜欢这样发起请求, 请忘掉他
// 这种写法(SynchronizationAwaitError)通常是为了 catch 同步的 promise 错误 而诞生, 但目前看来如果将它暴露给开发者调用不是一个明智的选择

// err 不属于业务错误的范畴 它属于service code 500,4xx 等 或者 axios内部报错时(当你需要格式化你获取到的返回值时某个属性为空)

// 我们不应该在这里处理非业务的错误这样会显得冗余
const [err, response] = await SynchronizationAwaitError(http({ url: "" }));
// 难道你想在每次请求后面都跟一个处理非业务的catchErrorHandler吗？
// 但如果不处理 err ， response 将会存在于 非预期 和 预期 响应的两种状态,我们需要进行更多的判断 才能得知response是否是我们想要的
catchErrorHandler(err);
// 在编写业务前要处理这么多繁琐的事情实在是太糟糕了
// 通常解决上面的问题只需要 错误拦截器 和 错误兜底(下方有最佳实践)即可
```

## Usage

```ts
import { Service, cancelHeader, Cancel } from "@mxnet/service";

//  implements interceptor 后再 class 内 输入 re 函数包括类型会自动补全
class defaultInterceptor implements interceptor {
  // 请求失败拦截器
  requestFailInterceptor(err: unknown): void {}
  // 响应失败拦截器
  responseFailInterceptor(err: unknown): void {}
  // 请求成功拦截器
  requestSuccessInterceptor(
    config: AxiosRequestConfig<any>
  ):
    | void
    | AxiosRequestConfig<any>
    | Promise<AxiosRequestConfig<any>>
    | Promise<void> {}

  // 响应成功拦截器
  responseSuccessInterceptor(
    response: AxiosResponse<any, any>
  ):
    | void
    | AxiosResponse<any, any>
    | Promise<AxiosResponse<any, any>>
    | Promise<void> {}
}

const http = new Service({
  baseURL: "http://localhost",
  headers: {
    cancelHeader,
  },
})
  .defaultInterceptor(new defaultInterceptor())
  .injectionInterceptorPlugin([new Cancel()])
  .getAxios();

http()({ url: "" });
```

## notes

### Service

- `defaultInterceptor method` 安装默认拦截器,拦截器类型为`class implements interceptor` 。会在每个插件拦截器最后执行

- `injectionInterceptorPlugin method` 注入拦截器插件

在`axios`安装拦截器的方法内按照相应的类型插件拦截器被循环调用，且下一个插件的相同类型的插件参数会根据上一个插件相同类型的函数返回值当作形参。

即在请求响应成功拦截器内，会先调用所有插件的响应成功拦截器，顺序是放入`injectionInterceptorPlugin method`的顺序,且将上一个响应成功拦截器的返回值传递给下一个响应成功拦截器的参数里,

默认所有插件拦截器的返回值都有可能是空的，当是空时，会沿用上上个拦截器的返回值，以此类推
当所有插件拦截器都执行完后，会执行 `defaultInterceptor method` 注入的拦截器

我们约定编写插件拦截器时不应该修改`axios`内部传入的参数,这可能导致后续插件出现意想不到的错误,当遵循约定后，这类情况会极其少见

### 错误兜底

- 在请求参数中新增了 `returnOnPromiseError` 字段,当 `http` 请求报错时,你的`promise`请求不会返回一个空,会返回事先定义好的`returnOnPromiseError`字段的值

### 友好的错误提示

```ts
const http = new Service({
  baseURL: "http://localhost",
})
  // 不符合预期函数
  // 会在所有的响应成功后触发
  .collectUnexpectedResultsHandler((response) => {
    if (response.code !== 200) {
      alert(response.msg);
    }
  })
  .getAxios();

http({
  // 阻止不符合预期函数触发
  preventUnexpectedTriggers: true,
});
```

### 多版本共存

> 切换版本号通过定义在`baseURL`上的占位符来正则替换实现的

- `setVersionPlaceholder api` 定义占位符

- `switchVersion api` 修改版本号

```ts
const http = new Service<["v1", "v2", "v3"]>({
  baseURL: "https://localhost:3002/baseVersion",
})
  .setVersionPlaceholder("baseVersion")
  .switchVersion("v1")
  // 默认请求地址 https://localhost:3002/v1
  .getAxios();

// 请求地址 https://localhost:3002/v2
http({
  // version 字段内容根据 Service 泛型内容提供
  version: "v2",
});

// 请求地址 https://localhost:3002/v1
http({});
```

### 请求取消句柄

**解耦请求实例和请求参数本身, 因为手动取消请求是通过 axios 的请求参数赋值实现的**

**现在我们可以在任意地方取消你想取消的请求**

```ts
// 类型定义
export declare class TerminationResult<T> {
  ConfigurationParameters(config: ServiceRequestConfig & T): {
    getConfiguration(): ServiceRequestConfig<string[]>;
    terminateTrigger(): void;
  };
}
```

- `new TerminationResult` 用于定义请求参数的固定类型

- `ConfigurationParameters` 用于定义请求参数并且返回一个对象 ，对象包含两个方法

```ts
  ConfigurationParameters(config: ServiceRequestConfig & T): {
    // 用于返回 ConfigurationParameters 定义的所有参数并自动添加 cancelToken 属性用于 terminateTrigger 取消该请求
    getConfiguration(): ServiceRequestConfig<string[]>;
    // 取消定义的请求
    terminateTrigger(): void;
  };
```

```ts
import { TerminationResult, CacheConfig, ExpirationTime } from "@mxnet/service";

//  service.ts file
export const t = new TerminationResult<Partial<CacheConfig>>();

// page.ts
import { t } from "./service.ts";

const f = t.ConfigurationParameters({
  // 优秀的类型提示
  url: "",
  cacheExpirationTime: new ExpirationTime("min", 1).generateExpirationTime(),
});

http(f.getConfiguration()); // 发起请求1

f.terminateTrigger(); // 终止请求1
```

### 请求响应类型泛型

```ts
const http = new Service().getAxios();
const result = await http<{ name: string }>();
result.name;
```

### 请求响应类型泛型

## plugin

### Cancel

#### config

- `cancelHeader` 该常量应该放于请求头内, `Cancel` 插件正是根据该请求头判断是否需要进行取消判断

- `cancellationRules` 定义取消请求规则, 默认规则 `${config.url||config.baseURL} & ${config.method}`

```ts
import { Service, cancelHeader, Cancel } from "@mxnet/service";

const http = new Service({
  baseURL: "http://localhost",
  headers: {
    cancelHeader,
  },
  // 当请求1请求，请求2再次请求，此时请求1还没有返回，且请求1的 url 或者baseURL 和 请求2 相同,这时 Cancel 插件 会认定为请求2是一个重复请求,会取消请求2
  cancellationRules(requestConfig): string {
    return `${requestConfig.url || requestConfig.baseURL}`;
  },
})
  .injectionInterceptorPlugin([new Cancel()])
  .getAxios();
```

### Cache

#### config

- `useCache` 声明当前函数是否需要调用缓存, 缓存存在时，不会走`axios`的请求初始化流程,而是将上一次相同请求的 `response.data` 直接返回

- `cacheExpirationTime` 缓存时间戳 ,从当前时间向后延迟的毫秒数,是一个基于当前浏览器时间的时间戳

- `cacheRules` 缓存规则，同`Cancel`插件的`cancellationRules`, 默认值 `${config.url || config.baseURL}`

```ts
import { Service, ExpirationTime, Cache, CacheConfig } from "@mxnet/service";
const http = new Service({
  baseURL: "http://localhost",
})
  .injectionInterceptorPlugin([new Cache()])
  // 向请求参数添加更多的类型声明
  .getAxios<Partial<CacheConfig>>();

await http({
  url: "/weaknet/hello",
  cacheExpirationTime: new ExpirationTime("min", 1).generateExpirationTime(),
});
// 该请求不会被发出
await http({
  url: "/weaknet/hello",
  useCache: true,
});
```

## TASK

- ~~缓存请求~~

- ~~取消重复请求~~

- ~~概念映射~~

- ~~请求兜底~~

- ~~友好的错误提示~~

- ~~多版本共存~~

- ~~请求取消句柄~~

- ~~请求响应类型泛型~~

- 防腐层设计

- 时序控制器(进行时)
