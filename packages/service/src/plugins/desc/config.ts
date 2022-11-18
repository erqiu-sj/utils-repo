/*
 * @Author: 邱狮杰
 * @Date: 2022-08-21 13:26:08
 * @LastEditTime: 2022-11-18 17:00:25
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/desc/config.ts
 */

import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface descConfig<Req extends object = object, Res extends unknown = unknown> extends AxiosRequestConfig {
  reqDesc?: ((request: Req & AxiosRequestConfig) => string) | string
  reqDescOption?: any[]
  resDesc?: ((response: AxiosResponse<Res>) => string) | string
  resDescOption?: any[]
}
