export declare function allowExecution<T = unknown>(cb?: (parmater: T) => boolean): (target: object, key: string, desc: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
