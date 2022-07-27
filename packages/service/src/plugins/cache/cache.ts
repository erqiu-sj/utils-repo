/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 22:07:09
 * @LastEditTime: 2022-07-27 15:20:40
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cache/cache.ts
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { interceptor } from '../../core/injectInterceptor'
import { allowExecution } from '../../utils/decorator'
import { CacheConfig, defaultCacheRule, hasCacheConfig } from './config'
import { CacheData } from './utils'

export type requestConfig = AxiosRequestConfig & Partial<CacheConfig>

export type responseConfig = AxiosResponse<any, Partial<CacheConfig>>

const cacheHandler = new CacheData()

export class CachePrerequisites {
  private config: requestConfig = {}

  constructor(config: requestConfig) {
    this.config = config
  }

  // 是否符合开启缓存的标准
  areThereCachePrerequisites(): boolean {
    return hasCacheConfig(this.config)
  }

  useCache() {
    const rule = this.config.cacheRules?.(this.config) || defaultCacheRule(this.config)
    if (this.config.useCache && cacheHandler.cachedAndAvailable(rule)) {
      return [true, cacheHandler.getCache(rule)?.cacheDate]
    }
    return [false, null]
  }
}
export class Cache implements interceptor {
  requestFailInterceptor(err: unknown): void { }

  responseFailInterceptor(err: unknown): void { }

  @allowExecution<requestConfig>(config => hasCacheConfig(config))
  requestSuccessInterceptor(config: requestConfig): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {
    const rule = config.cacheRules?.(config) || defaultCacheRule(config)
    if ((config.useCache || !cacheHandler.hasCache(rule)) && config.cacheExpirationTime) {
      // ((启用缓存 || 没有缓存 if=== true) if=== true) && 缓存时间戳
      cacheHandler.preAddACache(rule, { cacheExpirationTime: config.cacheExpirationTime || 0 })
    }
    return config
  }
  @allowExecution<responseConfig>(resConfig => {
    return hasCacheConfig(resConfig.config)
  })
  responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    const config: requestConfig = response.config
    const rule = config.cacheRules?.(config) || defaultCacheRule(config)
    cacheHandler.fillTheCache(rule, response.data)
    return response
  }
}
