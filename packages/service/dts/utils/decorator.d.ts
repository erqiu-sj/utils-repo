import { DownloadFile } from '@mxnet/taro';
import { mergeFnWithPromiseFn, nonNullFnParameter } from '@mxnet/types/dts';
export declare function allowExecution<T = unknown>(cb?: (parmater: T) => boolean): (target: object, key: string, desc: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
/**
 * @description 微信缓存类装饰器
 * @param { mergeFnWithPromiseFn<nonNullFnParameter<DownloadFile<unknown, T[0]>['down']>[0], [R, Pick<DownloadFile, 'success' | 'fail' | 'complete'>]> } cb callback
 * @param { nonNullFnParameter<DownloadFile['setDownloadLocation'] } type cache type
 * @returns
 */
export declare function wechatCaching<R extends unknown, T extends nonNullFnParameter<DownloadFile['setDownloadLocation']> = nonNullFnParameter<DownloadFile['setDownloadLocation']>>(cb: mergeFnWithPromiseFn<nonNullFnParameter<DownloadFile<unknown, T[0]>['down']>[0], [R, Pick<DownloadFile, 'success' | 'fail' | 'complete'>]>, ...type: T): (target: object, key: string, desc: TypedPropertyDescriptor<any>) => Promise<any>;
