/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 22:08:01
 * @LastEditTime: 2022-05-29 19:56:34
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cache/config.ts
 */
import { AxiosRequestConfig } from 'axios'
import { requestConfig } from './cache'
export interface CacheConfig {
  useCache?: boolean
  cacheExpirationTime?: number
  cacheRules?: (config?: AxiosRequestConfig) => string
}

export interface expirationMapType extends CacheConfig {
  cacheDate?: unknown // 缓存数据
  // 预新增完毕?
  // 新增时为false
  // 但请求回来时该字段将一直为true
  preAdded?: boolean
}

export function defaultCacheRule(config: AxiosRequestConfig) {
  return `${config.url || config.baseURL}`
}

export const expirationMap = new Map<string, Partial<expirationMapType>>()

export function hasCacheConfig(config: requestConfig): boolean {
  const r: boolean = Reflect.get(config || {}, 'useCache') || Reflect.get(config || {}, 'cacheExpirationTime')
  return r
}
