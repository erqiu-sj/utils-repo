/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 10:55:32
 * @LastEditTime: 2022-05-28 20:36:32
 * @Description: 
 * @FilePath: /repo/packages/service/src/index.ts
 */

import { Axios } from './core/create'
import { Cancel } from './plugins/cancel/cancel'
import { cancelHeader, cancelRequestConfiguration } from './plugins/cancel/config'
import type { interceptor } from './core/injectInterceptor'
import { requestCancellationHepler } from './utils/cancel'

export { Axios, requestCancellationHepler, cancelHeader, cancelRequestConfiguration, Cancel }

export type { interceptor }


