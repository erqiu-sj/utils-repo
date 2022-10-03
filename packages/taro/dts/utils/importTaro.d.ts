import { mergeFnWithPromiseFn } from '@mxnet/types/dts';
export declare function getTaroApi<T>(cb: mergeFnWithPromiseFn<void, [typeof import('@tarojs/taro')]>): Promise<T | undefined>;
