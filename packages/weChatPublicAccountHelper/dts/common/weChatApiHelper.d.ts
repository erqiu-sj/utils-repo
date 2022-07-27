/**
 * @description 常用回调 抽象类
 */
export declare abstract class CommonCallback<s = unknown, f = unknown, c = unknown> {
    abstract success(cb?: (res?: s) => noResultsAllowAsynchrony): this;
    abstract fail(cb?: (res?: f) => noResultsAllowAsynchrony): this;
    abstract complete(cb?: (res?: c) => noResultsAllowAsynchrony): this;
    abstract done(): noResultsAllowAsynchrony;
    abstract cancel(cb?: (res?: unknown) => void): this;
    abstract trigger(cb?: (res?: unknown) => void): this;
    abstract weChatSdkJnjectionTriggerBehavior(): noResultsAllowAsynchrony;
    abstract weChatDdkDoesNotInjectTriggerBehavior(): unknown | Promise<unknown>;
}
export declare type noResultsAllowAsynchrony = void | Promise<void>;
declare type wechatAPICommonCallback<s = unknown, f = unknown, c = unknown> = Pick<CommonCallback<s, f, c>, 'success' | 'fail' | 'complete' | 'cancel' | 'trigger'>;
export declare type CallbackCollectorMapper<s = unknown, f = unknown, c = unknown> = {
    [key in keyof wechatAPICommonCallback<s, f, c>]: NonNullable<Parameters<wechatAPICommonCallback<s, f, c>[key]>[0]>;
};
/**
 *
 * 常用回调收集器
 */
export declare class CallbackCollector {
    private callbackMapper;
    collector<T extends keyof CallbackCollectorMapper>(key: T, val?: CallbackCollectorMapper[T]): this;
    getCallbacks<T extends keyof CallbackCollectorMapper>(key: T): CallbackCollectorMapper[T];
    getAllCallbacks(): Partial<CallbackCollectorMapper>;
}
export declare type wechatSDKAPI = keyof NonNullable<typeof window.wx>;
/**
 * @description 处理配置
 */
export declare abstract class ProcessingConfiguration<T = unknown> {
    abstract configure?: T;
    abstract call: string;
    abstract readConfiguration(conf: T): this;
    abstract getConfiguration(): T | undefined;
    abstract callName(name: wechatSDKAPI): void;
}
export {};
