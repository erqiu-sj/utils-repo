export declare type getAllParameterTypesOfFunction<T extends allTaroApi> = typeof import('@tarojs/taro')[T] extends (...args: any) => any ? NonNullable<Parameters<typeof import('@tarojs/taro')[T]>[0]> : never;
export declare type allTaroApi = keyof typeof import('@tarojs/taro');
export interface CallbackOptions {
    success?: (...args: unknown[]) => unknown;
    fail?: (...args: unknown[]) => unknown;
    complete?: (...args: unknown[]) => unknown;
}
export declare class Callback<P extends CallbackOptions> {
    private callbackCollector;
    success(res?: P['success']): this;
    complete(res?: P['complete']): this;
    fail(res?: P['fail']): this;
    callTrigger<T extends keyof CallbackOptions>(key: T, args?: unknown): this;
    setCallback<T extends keyof CallbackOptions>(key: T, cb: CallbackOptions[T]): this;
    protected getCallback(key: keyof CallbackOptions): never;
    protected getCallbackAll(): {
        success?: never;
        fail?: never;
        complete?: never;
    };
}
/**
 *  @description 链式调用,
 *  @example
    new ChainCall().injectApi('login').success(() => { }).injectionParameters({})
 */
export declare class ChainCall<P extends object = object, N extends allTaroApi = allTaroApi> extends Callback<Pick<getAllParameterTypesOfFunction<N>, 'success' | 'fail' | 'complete'>> {
    private fn;
    private parameter;
    /**
     * @description 选择函数名 login or nativationBack ...
     * @param { allTaroApi } apiName
     * @returns
     */
    injectApi<T extends allTaroApi>(apiName: T): ChainCall<getAllParameterTypesOfFunction<T>, T>;
    /**
     * @description 传入api对应参数
     * @param parameterType
     * @returns
     */
    injectionParameters(parameterType: P): this;
    /**
     * @description 调用
     * @returns
     */
    done(): Promise<any>;
}
