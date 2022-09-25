/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:55:11
 * @LastEditTime: 2022-09-18 11:15:34
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/decorator.ts
 */

import { DownloadFile } from '@mxnet/taro'
import { mergeFnWithPromiseFn, nonNullFnParameter } from '@mxnet/types/dts'

// 根据传入函数的返回值判断class中的method 是否允许执行
export function allowExecution<T = unknown>(cb?: (parmater: T) => boolean) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value
    desc.value = function () {
      const params = Array.from(arguments)
      //    @ts-ignore
      return cb?.(...params) && fn(...params)
    }
    return desc
  }
}

/**
 * @description 微信缓存类装饰器
 * @param { mergeFnWithPromiseFn<nonNullFnParameter<DownloadFile<unknown, T[0]>['down']>[0], [R, Pick<DownloadFile, 'success' | 'fail' | 'complete'>]> } cb callback
 * @param { nonNullFnParameter<DownloadFile['setDownloadLocation'] } type cache type
 * @returns
 */
export function wechatCaching<R extends unknown, T extends nonNullFnParameter<DownloadFile['setDownloadLocation']> = nonNullFnParameter<DownloadFile['setDownloadLocation']>>(
  cb: mergeFnWithPromiseFn<nonNullFnParameter<DownloadFile<unknown, T[0]>['down']>[0], [R, Pick<DownloadFile, 'success' | 'fail' | 'complete'>]>,
  ...type: T
) {
  return async (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const result = await desc.value(...arguments)
    const down = new DownloadFile()
    if (type && type[0]) down.setDownloadLocation(type[0])
    await cb(result, down)
    return result
  }
}
