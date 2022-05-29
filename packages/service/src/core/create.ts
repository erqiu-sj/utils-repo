/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-05-29 20:25:26
 * @Description: 
 * @FilePath: /repo/packages/service/src/core/create.ts
 */

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { CachePrerequisites } from '../plugins/cache/cache';
import { interceptor } from './injectInterceptor';
import { MergeInterceptorPlugin } from './mergeInterceptorPlugin';


export class Service {
    private axios?: AxiosInstance
    // 拦截器插件列表
    private interceptorPluginList: interceptor[] = []
    // 合并插件
    private mergeInterceptorPlugin: MergeInterceptorPlugin = new MergeInterceptorPlugin()
    // 默认拦截器
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

    getAxios<T = unknown>() {
        return (config?: AxiosRequestConfig & T): AxiosPromise => {
            // 缓存先决条件判断
            const cachePrerequisiteJudgment = new CachePrerequisites(config || {})
            if (cachePrerequisiteJudgment.areThereCachePrerequisites()) {
                // 满足缓存先决条件
                // 尝试使用缓存
                const [cacheExists, cache] = cachePrerequisiteJudgment.useCache()
                if (cacheExists) {
                    // 存在可用缓存
                    return cache as AxiosPromise
                }
                return (this.axios as AxiosInstance)(config || {})
            }
            return (this.axios as AxiosInstance)(config || {})
        }
    }
}
