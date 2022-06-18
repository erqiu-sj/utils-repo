/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 18:02:55
 * @LastEditTime: 2022-05-28 18:02:55
 * @Description: 
 * @FilePath: /repo/packages/service/src/utils/cancel.ts
 */

import axios, { AxiosRequestConfig } from 'axios'

export function requestCancellationHepler(config: AxiosRequestConfig, msg?: string) {
    const source = axios.CancelToken.source()
    config.cancelToken = source.token
    source.cancel(msg)
}

