/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 12:10:05
 * @LastEditTime: 2022-05-28 20:39:26
 * @Description: 
 * @FilePath: /repo/packages/service/src/core/mergeInterceptorPlugin.ts
 */
import { AxiosInstance } from 'axios'
import { interceptor } from './injectInterceptor'

export class MergeInterceptorPlugin {

    collectionPlugin(interceptorList: interceptor[], defaultInterceptor: interceptor | null, axios: AxiosInstance) {
        const parsePlugin = this.parsePlugin(interceptorList)
        axios.interceptors.request.use(async (request) => {
            const config = await this.schedulingPluginCallbacks(parsePlugin.requestSuccessInterceptor, request) || request
            return await defaultInterceptor?.requestSuccessInterceptor?.(config) || config
        }, (error) => {
            const err = this.schedulingPluginCallbacks(parsePlugin?.requestFailInterceptorList, error)
            return defaultInterceptor?.requestFailInterceptor?.(err) || err
        })
        axios.interceptors.response.use(async (response) => {
            const res = await this.schedulingPluginCallbacks(parsePlugin.responseSuccessInterceptor, response) || response
            return defaultInterceptor?.responseSuccessInterceptor?.(res) || res
        }, async (error) => {
            const err = this.schedulingPluginCallbacks(parsePlugin.responseFailInterceptor, error)
            return defaultInterceptor?.responseFailInterceptor?.(err) || err
        })
        return axios
    }

    private parsePlugin(interceptorList: interceptor[]) {
        const requestFailInterceptorList: interceptor['requestFailInterceptor'][] = []
        const requestSuccessInterceptor: interceptor['requestSuccessInterceptor'][] = []
        const responseFailInterceptor: interceptor['responseFailInterceptor'][] = []
        const responseSuccessInterceptor: interceptor['responseSuccessInterceptor'][] = []
        interceptorList.forEach(i => {
            i?.requestFailInterceptor && requestFailInterceptorList.push(i.requestFailInterceptor)
            i?.requestSuccessInterceptor && requestSuccessInterceptor.push(i.requestSuccessInterceptor)
            i?.responseFailInterceptor && responseFailInterceptor.push(i.responseFailInterceptor)
            i?.responseSuccessInterceptor && responseSuccessInterceptor.push(i.responseSuccessInterceptor)
        })

        return {
            requestFailInterceptorList,
            requestSuccessInterceptor,
            responseFailInterceptor,
            responseSuccessInterceptor
        }
    }

    private async schedulingPluginCallbacks<T>(list: ((params: any) => (Promise<T> | T))[], params: T): Promise<T> {
        let config: T = params
        for (let i = 0; i < list.length; i++) {
            config = await list[i](config) || config
        }
        return config
    }
}
