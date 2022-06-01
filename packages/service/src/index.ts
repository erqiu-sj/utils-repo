/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:55:32
 * @LastEditTime: 2022-05-31 21:58:29
 * @Description: 
 * @FilePath: /repo/packages/service/src/index.ts
 */

import { Service } from './core/create'
import type { interceptor } from './core/injectInterceptor'
import { Cache } from './plugins/cache/cache'
import { CacheConfig } from './plugins/cache/config'
import { ExpirationTime } from './plugins/cache/utils'
import { Cancel } from './plugins/cancel/cancel'
import { cancelHeader, cancelRequestConfiguration } from './plugins/cancel/config'
import { requestCancellationHepler } from './utils/cancel'

export { Service, requestCancellationHepler, cancelHeader, cancelRequestConfiguration, Cancel, ExpirationTime, Cache }

export type { interceptor, CacheConfig }






