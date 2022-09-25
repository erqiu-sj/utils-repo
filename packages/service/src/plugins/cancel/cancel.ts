/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 17:56:58
 * @LastEditTime: 2022-09-18 10:13:51
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cancel/cancel.ts
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { interceptor } from '../../core/injectInterceptor'
import { requestCancellationHepler } from '../../utils/cancel'
import { allowExecution } from '../../utils/decorator'
import { TerminationResult } from '../../utils/terminationResult'
import { cancelHeader, cancelRequestConfiguration, defaultRules, requestContainer } from './config'

type requestConfig = AxiosRequestConfig & cancelRequestConfiguration

type responseConfig = AxiosResponse<any, requestConfig>

export class Cancel implements interceptor {
  requestFailInterceptor(err: unknown): void {}

  responseFailInterceptor(err: unknown): void {}

  @allowExecution<requestConfig>(config => {
    return Reflect.get(config.headers || {}, 'cancelHeader') === cancelHeader
  })
  requestSuccessInterceptor(config: requestConfig): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void> {
    const rule = config.cancellationRules?.(config) || defaultRules(config)
    if (rule && requestContainer.has(rule)) {
      requestCancellationHepler(config)
    } else if (rule) requestContainer.set(rule, true)
  }

  @allowExecution<responseConfig>(config => {
    return Reflect.get(config?.config?.headers || {}, 'cancelHeader') === cancelHeader
  })
  responseSuccessInterceptor(response: responseConfig): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    // @ts-ignore
    const rule = response.config?.['cancellationRules']?.(response.config) || defaultRules(response.config)
    if (rule && requestContainer.has(rule)) requestContainer.delete(rule)
  }
}
