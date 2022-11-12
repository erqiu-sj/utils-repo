/*
 * @Author: 邱狮杰
 * @LastEditTime: 2022-10-25 10:17:58
 * @Description:
 * @FilePath: /repo/packages/weChatPublicAccountHelper/src/common/weChatVerification.ts
 */
import { CallbackCollector, CommonCallback, ProcessingConfiguration } from './weChatApiHelper'

/**
 * @description 是否注入微信SDK
 */
export function checkWhetherToJnjectWechatSDK(): boolean {
  return window?.wx !== undefined
}

/**
 * @description 调用sdk
 */
export class CallWechatSdk {
  async trigger(common: CommonCallback & ProcessingConfiguration & CallbackCollector) {
    if (!checkWhetherToJnjectWechatSDK()) {
      // @ts-ignore
      await common.getCallbacks('success')?.(await common.weChatDdkDoesNotInjectTriggerBehavior())
      // @ts-ignore
      await common.getCallbacks('complete')?.()
      return
    }
    await common.weChatSdkJnjectionTriggerBehavior()
  }
}
