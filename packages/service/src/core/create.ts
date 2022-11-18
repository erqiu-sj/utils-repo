/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-11-18 17:12:34
 * @Description:
 * @FilePath: /repo/packages/service/src/core/create.ts
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
// import axiosMiniprogramAdapter from 'axios-miniprogram-adapter'
import { CachePrerequisites } from '../plugins/cache/cache'
import { SynchronizationAwaitError } from '../utils/error'
import { interceptor } from './injectInterceptor'
import { MergeInterceptorPlugin } from './mergeInterceptorPlugin'
import { MultiVersionSwitching } from './multiVersionSwitching'
import { handlingUnexpectedResultsCaller } from './unexpectedResults'

/**
 *  V = 版本号列表
 */
export interface ServiceRequestConfig<V extends string[] = string[]> extends AxiosRequestConfig {
  returnOnPromiseError?: unknown
  preventUnexpectedTriggers?: boolean
  // 选择版本号
  version?: V[number]
}

// 请求结果类型
type requestResultType<R> = Promise<R>

export class Service<V extends string[] = string[], T extends unknown = unknown> {
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

  constructor(request?: ServiceRequestConfig<V> & T) {
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

  private async requestTrigger<R>(config?: ServiceRequestConfig<V>): Promise<Awaited<requestResultType<R>>> {
    const baseURL = config?.version ? this.multiVersionSwitching?.replaceVersionPlaceholder(this.multiVersionSwitching.getOriginalBaseURL() as string, config?.version) : (this.axios?.defaults.baseURL as string)

    const [_, res] = await SynchronizationAwaitError((this.axios as AxiosInstance)({ baseURL: baseURL, ...config } || {}))

    // axios 是否 报错
    const isAxiosError = res && typeof res === 'object' && Reflect.get(res, 'name') === 'AxiosError'

    if (isAxiosError) {
      // 当请求参数错误 ,比如请求一个404 地址时候
      // 判断是否存在兜底参数，不存在则原路返回
      !!!config?.preventUnexpectedTriggers && this?.unexpectedResultsHandler?.(res)
      return (config?.returnOnPromiseError || res) as Promise<Awaited<requestResultType<R>>>
    }
    !!!config?.preventUnexpectedTriggers && this?.unexpectedResultsHandler?.(res)
    return (res || config?.returnOnPromiseError) as unknown as Promise<Awaited<requestResultType<R>>>
  }

  // 修改版本号占位符
  setVersionPlaceholder(pl: string): this {
    this.multiVersionSwitching?.setVersionPlaceholder(pl)
    return this
  }

  // 切换版本号
  switchVersion(item: V[number]): this {
    this.axios!.defaults!.baseURL = this.multiVersionSwitching?.switchVersion(item)
    return this
  }

  // /**
  //  * @description 添加小程序(微信，支付宝，钉钉，百度)适配器
  //  * @returns { this }
  //  */
  // addAppletAdapter(): this {
  //   if (this.axios)
  //     // @ts-ignore
  //     this!.axios!.defaults!.adapter = axiosMiniprogramAdapter
  //   return this
  // }

  getAxios() {
    return async <R>(config?: Partial<ServiceRequestConfig<V> & T>): Promise<Awaited<requestResultType<R>>> => {
      // 缓存先决条件判断
      const cachePrerequisiteJudgment = new CachePrerequisites(config || {})
      if (cachePrerequisiteJudgment.areThereCachePrerequisites()) {
        // 满足缓存先决条件
        // 尝试使用缓存
        const [cacheExists, cache] = cachePrerequisiteJudgment.useCache()
        return cacheExists ? (cache as Promise<Awaited<requestResultType<R>>>) : ((await this.requestTrigger(config)) as unknown as Promise<Awaited<requestResultType<R>>>)
      }
      return (await this.requestTrigger(config)) as unknown as Promise<Awaited<requestResultType<R>>>
    }
  }
}
