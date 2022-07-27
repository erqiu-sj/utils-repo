import { CallbackCollector, CommonCallback, noResultsAllowAsynchrony, ProcessingConfiguration, wechatSDKAPI } from './weChatApiHelper';
export declare class ApiImplementation<C = unknown, s = unknown, f = unknown, c = unknown> extends CallbackCollector implements ProcessingConfiguration<C>, CommonCallback<s, f, c> {
    configure?: C | undefined;
    call: string;
    readConfiguration(conf: C): this;
    callName(name: wechatSDKAPI): void;
    getConfiguration(): C | undefined;
    fail(cb?: ((res?: f | undefined) => noResultsAllowAsynchrony) | undefined): this;
    success(cb?: ((res?: s | undefined) => noResultsAllowAsynchrony) | undefined): this;
    complete(cb?: ((res?: c | undefined) => noResultsAllowAsynchrony) | undefined): this;
    cancel(cb?: ((res?: unknown) => void) | undefined): this;
    trigger(cb?: ((res?: unknown) => void) | undefined): this;
    done(): Promise<void>;
    weChatDdkDoesNotInjectTriggerBehavior(): Promise<any>;
    weChatSdkJnjectionTriggerBehavior(): Promise<void>;
}
