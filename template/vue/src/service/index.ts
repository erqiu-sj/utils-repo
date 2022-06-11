/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:22:34
 * @LastEditTime: 2022-06-11 15:25:24
 * @Description: 
 * @FilePath: /vue/src/service/index.ts
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Cache, CacheConfig, cancelRequestConfiguration, interceptor, Service } from '../../../../packages/service/src/index';


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

const http = new Service({
    baseURL: "http://localhost:3002/weaknet",
})
    .injectionInterceptorPlugin([new Cache()])
    .defaultInterceptor(new defaultInterceptor())
    .collectUnexpectedResultsHandler((response) => {
        console.log(response);
    })
    .getAxios<Partial<cancelRequestConfiguration & CacheConfig>>()

export {
    http
};

