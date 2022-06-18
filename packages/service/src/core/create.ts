/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-06-18 11:53:05
 * @Description: 
 * @FilePath: /repo/packages/service/src/core/create.ts
 */

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CachePrerequisites } from '../plugins/cache/cache';
import { SynchronizationAwaitError } from "../utils/error";
import { interceptor } from './injectInterceptor';
import { MergeInterceptorPlugin } from './mergeInterceptorPlugin';
import { MultiVersionSwitching } from "./multiVersionSwitching";
import { handlingUnexpectedResultsCaller } from "./unexpectedResults";

/**
 *  V = 版本号列表
 */
export interface ServiceRequestConfig<V extends string[] = string[]> extends AxiosRequestConfig {
    returnOnPromiseError?: unknown
    preventUnexpectedTriggers?: boolean
    // 选择版本号
    version?: V[number]
}

export class Service<V extends string[] = string[]> {
    private axios?: AxiosInstance
    // 拦截器插件列表
    private interceptorPluginList: interceptor[] = []
    // 合并插件
    private mergeInterceptorPlugin: MergeInterceptorPlugin = new MergeInterceptorPlugin()
    // 默认拦截器
    private defaultInterceptorParameter: interceptor | null = null
    // 不符预期的结果处理函数
    private unexpectedResultsHandler?: handlingUnexpectedResultsCaller
    // 多版本切换
    private multiVersionSwitching?: MultiVersionSwitching = new MultiVersionSwitching()

    constructor(request?: ServiceRequestConfig<V>) {
        if (request?.baseURL) this.multiVersionSwitching?.setBaseURL(request.baseURL)
        // @ts-ignore
        this.axios = axios.create(request)
        // this.axios.switchVersion = 
    }

    collectUnexpectedResultsHandler(fn: handlingUnexpectedResultsCaller) {
        this.unexpectedResultsHandler = fn
        return this
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

    private async requestTrigger(config?: ServiceRequestConfig<V>): Promise<AxiosResponse> {

        const baseURL = config?.version ? this.multiVersionSwitching?.replaceVersionPlaceholder(this.multiVersionSwitching.getOriginalBaseURL() as string, config?.version) : this.axios?.defaults.baseURL as string

        const [_, res] = await SynchronizationAwaitError((this.axios as AxiosInstance)({ baseURL: baseURL, ...config } || {}))

        const isAxiosError = res && typeof res === 'object' && Reflect.get(res, 'name') === 'AxiosError'
        if (isAxiosError) {
            // 当请求参数错误 ,比如请求一个404 地址时候
            // 判断是否存在兜底参数，不存在则原路返回
            !!!config?.preventUnexpectedTriggers && this?.unexpectedResultsHandler?.(res)
            return (config?.returnOnPromiseError || res) as AxiosResponse
        }
        !!!config?.preventUnexpectedTriggers && this?.unexpectedResultsHandler?.(res)
        return (res || config?.returnOnPromiseError) as AxiosResponse
    }

    // 修改版本号占位符
    setVersionPlaceholder(pl: string): this {
        this.multiVersionSwitching?.setVersionPlaceholder(pl)
        return this
    }

    // 切换版本号
    switchVersion(item: V[number]) {
        this.axios!.defaults!.baseURL = this.multiVersionSwitching?.switchVersion(item)
        return this
    }

    getAxios<T = unknown>() {
        return async (config?: ServiceRequestConfig<V> & T): Promise<AxiosPromise> => {
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
                return await this.requestTrigger(config)
            }
            return await this.requestTrigger(config)
        }
    }
}