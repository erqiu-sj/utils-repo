import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
export declare let TaroInstance: null | typeof import('@tarojs/taro');
export declare function getTaroApi<T>(cb?: mergeFnWithPromiseFn<T, [typeof import('@tarojs/taro')]>): Promise<T | undefined>;
export declare let ReactInstance: null | typeof import('react');
export declare function getReactApi<T>(cb?: mergeFnWithPromiseFn<T, [typeof import('react')]>): Promise<T | typeof import('react')>;
export declare type getTaroApiTypes<T extends keyof typeof import('@tarojs/taro')> = typeof import('@tarojs/taro')[T];
