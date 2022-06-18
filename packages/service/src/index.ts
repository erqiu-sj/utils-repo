/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:55:32
 * @LastEditTime: 2022-06-18 11:54:51
 * @Description: 
 * @FilePath: /repo/packages/service/src/index.ts
 */
import { Service } from './core/create'
import type { interceptor } from './core/injectInterceptor'
import { Cache } from './plugins/cache/cache'
import { CacheConfig } from './plugins/cache/config'
import { ExpirationTime } from './plugins/cache/utils'
import { Cancel } from './plugins/cancel/cancel'
import type { cancelRequestConfiguration } from './plugins/cancel/config'
import { cancelHeader } from './plugins/cancel/config'
import { requestCancellationHepler } from './utils/cancel'
import { SynchronizationAwaitError } from "./utils/error"

export { Service, requestCancellationHepler, cancelHeader, Cancel, ExpirationTime, Cache, SynchronizationAwaitError }
export type { interceptor, CacheConfig, cancelRequestConfiguration }




