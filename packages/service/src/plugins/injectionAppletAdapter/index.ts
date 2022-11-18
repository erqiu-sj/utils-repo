/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:03:18
 * @LastEditTime: 2022-11-18 17:11:36
 * @Description: 注入小程序适配器
 * @FilePath: /repo/packages/service/src/plugins/injectionAppletAdapter/index.ts
 */

import { mergeFnWithPromiseFn } from '@mxnet/types';
import { AxiosRequestConfig, AxiosResponse } from "axios";
import adapter from 'axios-miniprogram-adapter';
import { interceptor } from "../../core/injectInterceptor";


export class InjectionAppletAdapter implements interceptor {

    private inject: boolean = true

    constructor(injection: boolean | mergeFnWithPromiseFn<boolean, [], false>) {
        this.inject = typeof injection === 'function' ? injection() : injection
    }

    requestFailInterceptor(err: unknown): unknown {
        return
    }

    responseFailInterceptor(err: unknown): unknown {
        return
    }


    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {
        if (this.inject)
            // @ts-ignore
            config.adapter = adapter
        return config
    }

    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    }

}