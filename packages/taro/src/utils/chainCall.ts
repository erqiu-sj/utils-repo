/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 10:02:32
 * @LastEditTime: 2022-09-18 10:29:25
 * @Description: 只需要将小程序所有api传入，则会自动读取小程序参数作为该链式调用的参数声明，链式小程序api的所有回调
 * @FilePath: /repo/packages/taro/src/utils/chainCall.ts
 */
import * as taro from '@tarojs/taro'

// 获取函数所有参数类型
// 如果传入的不是一个函数则返回never
export type getAllParameterTypesOfFunction<T extends allTaroApi> = typeof taro[T] extends (...args: any) => any ? NonNullable<Parameters<typeof taro[T]>[0]> : never

export type allTaroApi = keyof typeof taro

export interface CallbackOptions {
  success?: (...args: unknown[]) => unknown
  fail?: (...args: unknown[]) => unknown
  complete?: (...args: unknown[]) => unknown
}

export class Callback<P extends CallbackOptions> {
  private callbackCollector: {
    [key in keyof CallbackOptions]: keyof CallbackOptions[key]
  } = {}

  success(res?: P['success']) {
    Reflect.set(this.callbackCollector, 'success', res)
    return this
  }

  complete(res?: P['complete']) {
    Reflect.set(this.callbackCollector, 'complete', res)
    return this
  }

  fail(res?: P['fail']) {
    Reflect.set(this.callbackCollector, 'fail', res)
    return this
  }

  callTrigger<T extends keyof CallbackOptions>(key: T, args?: unknown): this {
    // @ts-ignore
    Reflect.get(this.callbackCollector, key)?.(args)
    return this
  }

  setCallback<T extends keyof CallbackOptions>(key: T, cb: CallbackOptions[T]): this {
    Reflect.set(this.callbackCollector, key, cb)
    return this
  }

  protected getCallback(key: keyof CallbackOptions) {
    return this.callbackCollector[key]
  }

  protected getCallbackAll() {
    return this.callbackCollector
  }
}

/**
 *  @description 链式调用,
 *  @example 
    new ChainCall().injectApi('login').success(() => { }).injectionParameters({})
 */
export class ChainCall<P extends object = object, N extends allTaroApi = allTaroApi> extends Callback<Pick<getAllParameterTypesOfFunction<N>, 'success' | 'fail' | 'complete'>> {
  private fn: (...args: any) => any | Promise<any>

  private parameter: P
  /**
   * @description 选择函数名 login or nativationBack ...
   * @param { allTaroApi } apiName
   * @returns
   */
  injectApi<T extends allTaroApi>(apiName: T): ChainCall<getAllParameterTypesOfFunction<T>, T> {
    // @ts-ignore
    this.fn = taro[apiName]
    // @ts-ignore
    return this
  }

  /**
   * @description 传入api对应参数
   * @param parameterType
   * @returns
   */

  injectionParameters(parameterType: P) {
    this.parameter = parameterType
    return this
  }
  /**
   * @description 调用
   * @returns
   */
  async done() {
    return await this.fn?.(Object.assign({}, { ...this.parameter, ...this.getCallbackAll() }))
  }
}
