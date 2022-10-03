/*
 * @Author: 邱狮杰
 * @Date: 2022-10-01 21:55:07
 * @LastEditTime: 2022-10-03 11:34:55
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/importTaro.ts
 */
import { mergeFnWithPromiseFn } from '@mxnet/types/dts'

export let TaroInstance: null | typeof import('@tarojs/taro') = null

export async function getTaroApi<T>(cb?: mergeFnWithPromiseFn<T, [typeof import('@tarojs/taro')]>): Promise<T | undefined> {
  if (TaroInstance) return (await cb?.(TaroInstance)) as T
  if (window?.wx) {
    const result = await import('@tarojs/taro')
    TaroInstance = result
    return (await cb?.(TaroInstance)) as T
  }
}

export let ReactInstance: null | typeof import('react') = null

export async function getReactApi<T>(cb?: mergeFnWithPromiseFn<T, [typeof import('react')]>): Promise<T | typeof import('react')> {
  if (ReactInstance) return cb ? cb?.(ReactInstance) : ReactInstance
  const result = await import('react')
  ReactInstance = result
  return cb ? cb(ReactInstance) : ReactInstance
}

export type getTaroApiTypes<T extends keyof typeof import('@tarojs/taro')> = typeof import('@tarojs/taro')[T]
