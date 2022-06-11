/*
 * @Author: 邱狮杰
 * @Date: 2022-06-11 13:18:41
 * @LastEditTime: 2022-06-11 13:25:04
 * @Description: 
 * @FilePath: /repo/packages/service/src/utils/error.ts
 */

/**
 * @description 同步捕获错误
 * @param promise 
 * @param errorCaptured 
 * @returns 
 */
export async function SynchronizationAwaitError<T = unknown, E = Error>(promise: Promise<T>, errorCaptured?: object): Promise<[E, null] | [null, T]> {
    return promise
        .then<[null, T]>((result: T) => {
            return [null, result]
        })
        .catch<[E, null]>((causeOfError: E) => {
            if (errorCaptured) return [Object.assign(causeOfError, errorCaptured), null]
            return [causeOfError, null]
        })
}
