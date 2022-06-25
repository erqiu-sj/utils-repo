import { navigateBack, navigateTo, redirectTo, reLaunch } from "@tarojs/taro";
export interface callbackCollectionTypes {
    complete?: (res: TaroGeneral.CallbackResult) => void;
    fail?: (res: TaroGeneral.CallbackResult) => void;
    success?: (res: TaroGeneral.CallbackResult) => void;
}
export declare class DefineJumpCallback {
    protected callbackCollection: Partial<callbackCollectionTypes>;
    success(cb?: ((res: TaroGeneral.CallbackResult) => void)): this;
    fail(cb?: ((res: TaroGeneral.CallbackResult) => void)): this;
    complete(cb?: ((res: TaroGeneral.CallbackResult) => void)): this;
}
export declare type jumpMethod = typeof navigateBack | typeof navigateTo | typeof reLaunch | typeof redirectTo;
export declare type jumpMethodName = 'navigateBack' | 'navigateTo' | 'reLaunch' | 'redirectTo';
export declare type getJumpParametersAccordingToJumpMethod<T extends jumpMethodName> = T extends 'navigateBack' ? typeof navigateBack : T extends 'navigateTo' ? typeof navigateTo : T extends 'reLaunch' ? typeof reLaunch : T extends 'redirectTo' ? typeof redirectTo : never;
export declare type simpleRouteJumpConfig = {
    method: jumpMethodName;
    url?: string;
    preJumpJnterceptor?: () => boolean;
};
export interface triggerOptions {
    mete: object;
}
/**
 * @description 简单的路由跳转
 * @example
     new SimpleRouteJump().setMethod('navigateBack').setPreJumpJnterceptor().trigger({})
 */
export declare class SimpleRouteJump<T extends jumpMethodName = 'navigateTo'> extends DefineJumpCallback {
    private simpleRouteJumpConfig;
    constructor(url: string);
    setMethod<M extends jumpMethodName = 'navigateTo'>(method?: M): SimpleRouteJump<M>;
    setPreJumpJnterceptor(fn?: simpleRouteJumpConfig['preJumpJnterceptor']): this;
    trigger(options?: Partial<triggerOptions> & NonNullable<Parameters<getJumpParametersAccordingToJumpMethod<T>>[0]>): Promise<TaroGeneral.CallbackResult>;
    static parseParameters: typeof parseParameters;
}
declare function parseParameters(mete: object): string;
export {};
