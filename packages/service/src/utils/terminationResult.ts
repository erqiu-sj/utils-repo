/*
 * @Author: 邱狮杰
 * @Date: 2022-07-02 20:35:19
 * @LastEditTime: 2022-07-02 22:37:32
 * @Description: 终止网络请求
 * @FilePath: /repo/packages/service/src/utils/terminationResult.ts
 */

import axios from 'axios'
import { ServiceRequestConfig } from '../core/create'

export class TerminationResult<T> {
    ConfigurationParameters(config: ServiceRequestConfig & T) {
        const cancel = axios.CancelToken.source()
        const c: ServiceRequestConfig = { ...config, cancelToken: cancel.token }

        return {
            getConfiguration() {
                return c
            },
            terminateTrigger() {
                cancel.cancel()
            }
        }
    }
}
