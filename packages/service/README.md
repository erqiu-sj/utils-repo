<!--
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:52:32
 * @LastEditTime: 2022-06-11 15:23:22
 * @Description: 
 * @FilePath: /repo/packages/service/README.md
-->
# `@mxnet/service`

>  请求最佳实践


## Usage

```ts
import { Service , cancelHeader , Cancel } from '@mxnet/service'

//  implements interceptor 后再 class 内 输入 re 函数包括类型会自动补全
class defaultInterceptor implements interceptor {
    // 请求失败拦截器
    requestFailInterceptor(err: unknown): void {

    }
    // 响应失败拦截器
    responseFailInterceptor(err: unknown): void {

    }
    // 请求成功拦截器
    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {

    }

    // 响应成功拦截器
    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    }
}


const http = new Service({
    baseURL: "http://localhost",
    headers:{
        cancelHeader
    }
})
    .defaultInterceptor(new defaultInterceptor())
    .injectionInterceptorPlugin([new Cancel()])
    .getAxios()

http()({ url: "" })
```

## notes

### Service

- `defaultInterceptor method`  安装默认拦截器,拦截器类型为`class implements interceptor` 。会在每个插件拦截器最后执行

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
        if(response.code !== 200) {
            alert(response.msg)
        }
    })
    .getAxios()

http({
    // 阻止不符合预期函数触发
    preventUnexpectedTriggers: true
})
```
## plugin

### Cancel

#### config

-  `cancelHeader` 该常量应该放于请求头内, `Cancel` 插件正是根据该请求头判断是否需要进行取消判断

-  `cancellationRules` 定义取消请求规则, 默认规则  `${config.url||config.baseURL} & ${config.method}`

```ts
import { Service , cancelHeader , Cancel } from '@mxnet/service'

const http = new Service({
    baseURL: "http://localhost",
    headers:{
        cancelHeader
    },
// 当请求1请求，请求2再次请求，此时请求1还没有返回，且请求1的 url 或者baseURL 和 请求2 相同,这时 Cancel 插件 会认定为请求2是一个重复请求,会取消请求2
    cancellationRules(requestConfig): string {
        return `${requestConfig.url||requestConfig.baseURL}`
    }
})
    .injectionInterceptorPlugin([new Cancel()])
    .getAxios()
```

### Cache

#### config

- `useCache` 声明当前函数是否需要调用缓存, 缓存存在时，不会走`axios`的请求初始化流程,而是将上一次相同请求的 `response.data` 直接返回


- `cacheExpirationTime` 缓存时间戳 ,从当前时间向后延迟的毫秒数,是一个基于当前浏览器时间的时间戳

- `cacheRules` 缓存规则，同`Cancel`插件的`cancellationRules`, 默认值 `${config.url || config.baseURL}`

```ts
import { Service, ExpirationTime , Cache , CacheConfig} from '@mxnet/service'
const http = new Service({
    baseURL: "http://localhost",
})
    .injectionInterceptorPlugin([new Cache()])
    // 向请求参数添加更多的类型声明
    .getAxios<Partial<CacheConfig>>()

   await http({
    url: '/weaknet/hello', 
    cacheExpirationTime: new ExpirationTime('min', 1).generateExpirationTime()
  })
   // 该请求不会被发出
   await http({
    url: '/weaknet/hello',
    useCache: true
  })
```


## TODO

- ~~缓存请求~~

- ~~取消重复请求~~

- ~~概念映射~~

- ~~请求兜底~~

- ~~友好的错误提示~~

- 多版本共存

- 防腐层设计

- 时序控制器
