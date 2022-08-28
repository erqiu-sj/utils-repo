import { fn } from '@mxnet/types/src';
export declare function singletonPattern<T extends unknown>(fn: fn<T>): () => T;
