/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:22:34
 * @LastEditTime: 2022-05-28 21:45:34
 * @Description: 
 * @FilePath: /repo/template/vue/src/service/index.ts
 */

import { Axios, Cancel, cancelHeader, interceptor } from '@mx/service';
import { AxiosRequestConfig, AxiosResponse } from 'axios';


class defaultInterceptor implements interceptor {

    requestFailInterceptor(err: unknown): void {

    }
    responseFailInterceptor(err: unknown): void {

    }

    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {

    }

    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    }
}

const http = new Axios({
    baseURL: "http://localhost:3002", headers: {
        cancelHeader
    },
})
    .defaultInterceptor(new defaultInterceptor())
    .injectionInterceptorPlugin([new Cancel()])
    .getAxios()

export {
    http
};

