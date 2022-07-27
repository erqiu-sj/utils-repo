/*
 * @Author: 邱狮杰
 * @Date: 2022-07-17 23:27:59
 * @LastEditTime: 2022-07-23 13:24:29
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/common/apiImplementation.ts
 */

import { CallbackCollector, CommonCallback, noResultsAllowAsynchrony, ProcessingConfiguration, wechatSDKAPI } from './weChatApiHelper'
import { CallWechatSdk } from './weChatVerification'

export class ApiImplementation<C = unknown, s = unknown, f = unknown, c = unknown> extends CallbackCollector implements ProcessingConfiguration<C>, CommonCallback<s, f, c> {
  private configure?: C | undefined
  private call: string = ''

  readConfiguration(conf: C): this {
    this.configure = conf
    return this
  }

  protected callName(name: wechatSDKAPI): void {
    this.call = name
  }

  getConfiguration(): C | undefined {
    return this.configure
  }

  fail(cb?: ((res?: f | undefined) => noResultsAllowAsynchrony) | undefined): this {
    // @ts-ignore
    this.collector('fail', cb)
    return this
  }
  success(cb?: ((res?: s | undefined) => noResultsAllowAsynchrony) | undefined): this {
    // @ts-ignore
    this.collector('success', cb)
    return this
  }
  complete(cb?: ((res?: c | undefined) => noResultsAllowAsynchrony) | undefined): this {
    // @ts-ignore
    this.collector('complete', cb)
    return this
  }
  cancel(cb?: ((res?: unknown) => void) | undefined): this {
    // @ts-ignore
    this.collector('cancel', cb)
    return this
  }

  trigger(cb?: ((res?: unknown) => void) | undefined): this {
    // @ts-ignore
    this.collector('trigger', cb)
    return this
  }

  async done(): Promise<void> {
    await new CallWechatSdk().trigger(this)
  }

  async weChatDdkDoesNotInjectTriggerBehavior(): Promise<any> {
    return
  }

  async weChatSdkJnjectionTriggerBehavior(): Promise<void> {
    const h = {
      ...this.getAllCallbacks(),
      ...(this.getConfiguration() as any),
    }
    Reflect.get(window.wx as object, this.call)(h)
    return
  }
}
