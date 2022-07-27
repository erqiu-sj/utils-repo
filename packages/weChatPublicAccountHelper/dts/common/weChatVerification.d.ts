import { CallbackCollector, CommonCallback, ProcessingConfiguration } from './weChatApiHelper';
/**
 * @description 是否注入微信SDK
 */
export declare function checkWhetherToJnjectWechatSDK(): boolean;
/**
 * @description 调用sdk
 */
export declare class CallWechatSdk {
    trigger(common: CommonCallback & ProcessingConfiguration & CallbackCollector): Promise<void>;
}
