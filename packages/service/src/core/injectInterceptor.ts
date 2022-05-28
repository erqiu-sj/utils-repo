/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:43:20
 * @LastEditTime: 2022-05-28 17:52:17
 * @Description: 
 * @FilePath: /repo/packages/service/src/core/injectInterceptor.ts
 */
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class interceptor {
    abstract requestSuccessInterceptor(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> | void | Promise<void>
    abstract requestFailInterceptor(err: unknown): void | Promise<unknown> | unknown | Promise<void>
    abstract responseSuccessInterceptor(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> | void | Promise<void>
    abstract responseFailInterceptor(err: unknown): void | Promise<unknown> | unknown | Promise<void>
}
