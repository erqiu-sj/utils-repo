/*
 * @Author: 邱狮杰
 * @Date: 2022-08-21 13:25:31
 * @LastEditTime: 2022-08-21 13:46:29
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/desc/desc.ts
 */
import { AxiosResponse } from 'axios'
import { interceptor } from '../../core/injectInterceptor'
import { allowExecution } from '../../utils/decorator'
import { descConfig } from './config'

export class Desc<Req extends object, Res extends any> implements interceptor {
  requestFailInterceptor(err: unknown): void {}

  @allowExecution<descConfig<object>>(config => Reflect.has(config, 'reqDesc'))
  requestSuccessInterceptor(config: descConfig<Req>): void | descConfig<Req> | Promise<descConfig<Req>> | Promise<void> {
    if (typeof config.reqDesc === 'function') {
      // @ts-ignore
      console.log(config.reqDesc(config), ...config.reqDescOption)
      return config
    }
    console.log(config.reqDesc, ...config.reqDescOption)
    return config
  }

  responseFailInterceptor(err: unknown): void {}

  @allowExecution<AxiosResponse<Res>>(config => Reflect.has(config.config, 'resDesc'))
  responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void> {
    const resDescHandler = Reflect.get(response.config, 'resDesc')
    if (typeof resDescHandler === 'function') {
      console.log(resDescHandler(response), ...Reflect.get(response.config, 'resDescOption'))
      return response
    }
    console.log(resDescHandler)
    return response
  }
}
