import { fn } from "@mxnet/types/dts";
export declare function singletonPattern<T extends unknown>(fn: fn<T>): () => T;
