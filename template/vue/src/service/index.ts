/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:22:34
 * @LastEditTime: 2022-06-03 20:44:18
 * @Description: 
 * @FilePath: /repo/template/vue/src/service/index.ts
 */

import { Cache, CacheConfig, cancelRequestConfiguration, interceptor, Service } from '@mx/service';
import { AxiosRequestConfig, AxiosResponse } from 'axios';


class defaultInterceptor implements interceptor {

    requestFailInterceptor(err: unknown): void {

    }
    responseFailInterceptor(err: unknown): void {

    }

    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {

    }

    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
        return response.data
    }
}

const http = new Service({})
    .injectionInterceptorPlugin([new Cache()])
    .defaultInterceptor(new defaultInterceptor())
    .getAxios<Partial<cancelRequestConfiguration & CacheConfig>>()

export {
    http
};

