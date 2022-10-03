/*
 * @Author: 邱狮杰
 * @Date: 2022-10-01 21:55:07
 * @LastEditTime: 2022-10-01 22:36:15
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/importTaro.ts
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'

let TaroInstance: any = null

export async function getTaroApi<T>(cb: mergeFnWithPromiseFn<void, [typeof import('@tarojs/taro')]>): Promise<T | undefined> {
  // @ts-ignore
  if (TaroInstance) return cb(TaroInstance) as T
  if (window?.wx) {
    console.log('once')
    TaroInstance = await import('@tarojs/taro')
    // @ts-ignore
    return cb(TaroInstance) as T
  }
}
