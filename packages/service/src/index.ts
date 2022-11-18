/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:55:32
 * @LastEditTime: 2022-11-18 17:13:48
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
import { descConfig } from './plugins/desc/config'
import { Desc } from './plugins/desc/desc'
import { InjectionAppletAdapter } from './plugins/injectionAppletAdapter'
import { requestCancellationHepler } from './utils/cancel'
import { SynchronizationAwaitError } from './utils/error'
import { TerminationResult } from './utils/terminationResult'

export { InjectionAppletAdapter, Desc, Service, requestCancellationHepler, cancelHeader, Cancel, ExpirationTime, Cache, SynchronizationAwaitError, TerminationResult }
export type { interceptor, CacheConfig, cancelRequestConfiguration, descConfig }

