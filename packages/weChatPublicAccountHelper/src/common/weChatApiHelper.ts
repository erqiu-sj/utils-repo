/*
 * @Author: 邱狮杰
 * @Date: 2022-07-17 22:07:33
 * @LastEditTime: 2022-07-23 13:23:59
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/common/weChatApiHelper.ts
 */
/**
 * @description 常用回调 抽象类
 */
export abstract class CommonCallback<s = unknown, f = unknown, c = unknown> {
  abstract success(cb?: (res?: s) => noResultsAllowAsynchrony): this
  abstract fail(cb?: (res?: f) => noResultsAllowAsynchrony): this
  abstract complete(cb?: (res?: c) => noResultsAllowAsynchrony): this
  abstract done(): noResultsAllowAsynchrony
  abstract cancel(cb?: (res?: unknown) => void): this // 用户点击取消时的回调函数，仅部分有用户取消操作的 api 才会用到。
  abstract trigger(cb?: (res?: unknown) => void): this // 监听 Menu 中的按钮点击时触发的方法，该方法仅支持 Menu 中的相关接口。
  abstract weChatSdkJnjectionTriggerBehavior(): noResultsAllowAsynchrony // 微信sdk注入才会触发行为
  abstract weChatDdkDoesNotInjectTriggerBehavior(): unknown | Promise<unknown> // 微信sdk未注入才会触发行为
}

// 没有结果，允许异步类型
export type noResultsAllowAsynchrony = void | Promise<void>

// 微信api常用回调
type wechatAPICommonCallback<s = unknown, f = unknown, c = unknown> = Pick<CommonCallback<s, f, c>, 'success' | 'fail' | 'complete' | 'cancel' | 'trigger'>

export type CallbackCollectorMapper<s = unknown, f = unknown, c = unknown> = {
  // @ts-ignore
  [key in keyof wechatAPICommonCallback<s, f, c>]: NonNullable<Parameters<wechatAPICommonCallback<s, f, c>[key]>[0]>
}

/**
 *
 * 常用回调收集器
 */
export class CallbackCollector {
  private callbackMapper: Partial<CallbackCollectorMapper> = {}

  protected collector<T extends keyof CallbackCollectorMapper>(key: T, val?: CallbackCollectorMapper[T]) {
    if (!val) return this
    Reflect.set(this.callbackMapper, key, val)
    return this
  }

  protected getCallbacks<T extends keyof CallbackCollectorMapper>(key: T): CallbackCollectorMapper[T] {
    return Reflect.get(this.callbackMapper, key)
  }

  protected getAllCallbacks(): Partial<CallbackCollectorMapper> {
    return this.callbackMapper
  }
}

export type wechatSDKAPI = keyof NonNullable<typeof window.wx>

/**
 * @description 处理配置
 */
export abstract class ProcessingConfiguration<T = unknown> {
  // 读取配置
  abstract readConfiguration(conf: T): this
  // 获取配置
  abstract getConfiguration(): T | undefined

}
