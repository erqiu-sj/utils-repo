import { isPromiseFn, mergeFnWithPromiseFn, nonNullFnParameter } from "@mxnet/types/dts";
export declare class TypeInvalidValidation<R extends {
    [k in number]: mergeFnWithPromiseFn;
}> {
    private policySet;
    /**
     * @description 新增策略
     * @param name
     * @param fn
     * @returns
     */
    addTypePolicy<K extends string, f extends mergeFnWithPromiseFn>(name: K, fn: f): TypeInvalidValidation<R & {
        [k in K]: mergeFnWithPromiseFn<ReturnType<f>, nonNullFnParameter<f>, isPromiseFn<f>>;
    }>;
    /**
     * @description 删除策略
     * @param name
     * @returns
     */
    deletePolicy<k extends keyof R>(name: k): TypeInvalidValidation<Omit<R, k>>;
    /**
     * @description  调用类型策略
     * @param name
     * @param params
     * @returns
     */
    callTypeStrategy<K extends keyof R>(name: K, ...params: nonNullFnParameter<R[K]>): ReturnType<R[K]>;
    /**
     * @description 销毁策略者实例
     */
    deleteInstance(): void;
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
