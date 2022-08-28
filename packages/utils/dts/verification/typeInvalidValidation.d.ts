import { isPromiseFn, mergeFnWithPromiseFn, nonNullFnParameter } from "@mxnet/types/dts";
export declare class TypeInvalidValidation<R extends {
    [k in number]: mergeFnWithPromiseFn;
}> {
    private policySet;
    addTypePolicy<K extends string, f extends mergeFnWithPromiseFn>(name: K, fn: f): TypeInvalidValidation<R & {
        [k in K]: mergeFnWithPromiseFn<ReturnType<f>, nonNullFnParameter<f>, isPromiseFn<f>>;
    }>;
    deletePolicy<k extends keyof R>(name: k): TypeInvalidValidation<Omit<R, k>>;
    callTypeStrategy<K extends keyof R>(name: K, ...params: nonNullFnParameter<R[K]>): ReturnType<R[K]>;
}
export declare const typeInvalidValidation: TypeInvalidValidation<{
    [x: number]: import("@mxnet/types/dts").fn<unknown, any> | import("@mxnet/types/dts").promiseFn<unknown, any>;
}>;
export declare function builtInTypeStrategy(): TypeInvalidValidation<{
    [x: number]: import("@mxnet/types/dts").fn<unknown, any> | import("@mxnet/types/dts").promiseFn<unknown, any>;
} & {
    isEmptyObject: import("@mxnet/types/dts").fn<boolean, [o: object]>;
} & {
    isEmptyArray: import("@mxnet/types/dts").fn<boolean, [o: unknown[]]>;
} & {
    isFalseValue: import("@mxnet/types/dts").fn<boolean, [i: unknown]>;
}>;
