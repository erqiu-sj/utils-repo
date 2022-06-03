/*
 * @Author: 邱狮杰
 * @Date: 2022-06-03 20:23:12
 * @LastEditTime: 2022-06-03 20:28:44
 * @Description: 
 * @FilePath: /repo/template/react/src/service/index.ts
 */

import { Cache, CacheConfig, Cancel, cancelHeader, cancelRequestConfiguration, interceptor, Service } from '@mx/service'
import { AxiosRequestConfig, AxiosResponse } from 'axios'



interface requestConfig extends CacheConfig, cancelRequestConfiguration {

}


class defaultInterceptor implements interceptor {

    requestFailInterceptor(err: unknown): unknown {
        return
    }
    responseFailInterceptor(err: unknown): unknown {
        return
    }
    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | Promise<void> | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> {

    }
    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {

    }
}

const http = new Service({
    baseURL: "",
    headers: {
        cancelHeader
    }
}).injectionInterceptorPlugin([
    new Cancel(),
    new Cache()
]).defaultInterceptor().getAxios<Partial<requestConfig>>()

export {
    http
}

