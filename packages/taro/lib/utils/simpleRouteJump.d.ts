import { getTaroApiTypes } from './importTaro';
export interface callbackCollectionTypes {
    complete?: (res: TaroGeneral.CallbackResult) => void;
    fail?: (res: TaroGeneral.CallbackResult) => void;
    success?: (res: TaroGeneral.CallbackResult) => void;
}
export declare class DefineJumpCallback {
    protected callbackCollection: Partial<callbackCollectionTypes>;
    success(cb?: (res: TaroGeneral.CallbackResult) => void): this;
    fail(cb?: (res: TaroGeneral.CallbackResult) => void): this;
    complete(cb?: (res: TaroGeneral.CallbackResult) => void): this;
}
declare type navigateBackTypes = getTaroApiTypes<'navigateBack'>;
declare type navigateToTypes = getTaroApiTypes<'navigateTo'>;
declare type reLaunchTypes = getTaroApiTypes<'reLaunch'>;
declare type redirectTo = getTaroApiTypes<'redirectTo'>;
export declare type jumpMethod = navigateBackTypes | navigateToTypes | reLaunchTypes | redirectTo | undefined;
export declare type jumpMethodName = 'navigateBack' | 'navigateTo' | 'reLaunch' | 'redirectTo';
export declare type getJumpParametersAccordingToJumpMethod<T extends jumpMethodName> = T extends 'navigateBack' ? navigateBackTypes : T extends 'navigateTo' ? navigateToTypes : T extends 'reLaunch' ? reLaunchTypes : T extends 'redirectTo' ? redirectTo : never;
export declare type simpleRouteJumpConfig<T = unknown> = {
    method: jumpMethodName;
    url?: string;
    preJumpJnterceptor?: (params: T) => boolean;
};
export interface triggerOptions<T extends object> {
    mete: T;
}
/**
 * @description 简单的路由跳转
 * @example
     new SimpleRouteJump().setMethod('navigateBack').setPreJumpJnterceptor().trigger({})
 */
export declare class SimpleRouteJump<Mete extends object, T extends jumpMethodName = 'navigateTo'> extends DefineJumpCallback {
    private simpleRouteJumpConfig;
    constructor(url?: string);
    setUrl(url?: string): this;
    setMethod<M extends jumpMethodName>(method?: M): SimpleRouteJump<Mete, M>;
    setPreJumpJnterceptor(fn?: simpleRouteJumpConfig<Mete>['preJumpJnterceptor']): this;
    trigger(options?: Partial<triggerOptions<Mete>> & Omit<NonNullable<Parameters<getJumpParametersAccordingToJumpMethod<T>>[0]>, 'url'>): Promise<TaroGeneral.CallbackResult>;
    static parseParameters: typeof parseParameters;
}
declare function parseParameters(mete: object): string;
export {};
