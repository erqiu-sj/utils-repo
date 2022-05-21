/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 15:55:01
 * @LastEditTime: 2022-05-21 19:55:03
 * @Description: 
 * @FilePath: /jinkeEstate/src/service/index.ts
 */
import { customConfiguration, initializationAxios, InitializeContainer, interceptorsResponseSuccess } from '@zealforchange/proveaxios';
import { AxiosResponse } from 'axios';

export interface response<T = object> {
    data: T
    message: string
    msg: string
    success: number
}

@initializationAxios({
    // baseURL: "https://act.yoois.com/zt/jkmap/api.php?i=3&logout=1&test=1"
    baseURL: "https://act.yoois.com/zt/jkmap/api.php?i=3&logout=1"
})
class Core {
    @interceptorsResponseSuccess()
    static async response(res: AxiosResponse) {
        return Promise.resolve(res.data)
    }
}

const http = new InitializeContainer().collect([Core])

export function httpHelper(config: customConfiguration<object>) {
    return http.get(0)(config)
}

export function mergeCheck(err: unknown, res: any, msg: string) {
    if (err) {
        const alertMsg = msg || err as string
        throw new Error(alertMsg)
    }
    if (res && res?.success !== 1) {
        const alertMsg = msg || res?.msg as string
        // alert(alertMsg)
        throw new Error(alertMsg)
    }
}

