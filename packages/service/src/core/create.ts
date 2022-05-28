/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-05-28 21:09:23
 * @Description: 
 * @FilePath: /repo/packages/service/src/core/create.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { interceptor } from './injectInterceptor';
import { MergeInterceptorPlugin } from './mergeInterceptorPlugin';



export class Axios {
    private axios?: AxiosInstance
    private interceptorPluginList: interceptor[] = []
    private mergeInterceptorPlugin: MergeInterceptorPlugin = new MergeInterceptorPlugin()
    private defaultInterceptorParameter: interceptor | null = null

    constructor(request?: AxiosRequestConfig) {
        this.axios = axios.create(request)
    }

    // 注入拦截器插件列表
    injectionInterceptorPlugin(interceptorList: interceptor | interceptor[]): this {
        if (Array.isArray(interceptorList)) this.interceptorPluginList = [...this.interceptorPluginList, ...interceptorList]
        else this.interceptorPluginList.push(interceptorList)
        this.mergeInterceptorPlugin.collectionPlugin(this.interceptorPluginList, this.defaultInterceptorParameter, this.axios as AxiosInstance)
        return this
    }

    defaultInterceptor(interceptor?: interceptor): this {
        this.defaultInterceptorParameter = interceptor || null
        this.mergeInterceptorPlugin.collectionPlugin(this.interceptorPluginList, this.defaultInterceptorParameter, this.axios as AxiosInstance)
        return this
    }

    getAxios() {
        return (): AxiosInstance => {
            // TODO：缓存请求
            return this.axios as AxiosInstance
        }
    }
}
