import { Equal } from './verify';
/**
 * @description define normal function type
 */
export declare type fn<T = unknown, P extends any[] = any> = (...args: P) => T;
/**
 * @description define promise function type
 */
export declare type promiseFn<T = unknown, P extends any[] = any> = (...args: P) => Promise<T>;
/**
 * @description non-null function parameter type
 */
export declare type nonNullFnParameter<T extends (...args: any) => any> = NonNullable<Parameters<T>>;
/**
 * @description merge define normal function and define promise function type
 */
export declare type mergeFnWithPromiseFn<T = unknown, P extends any[] = any, isP extends boolean | undefined = undefined> = isP extends undefined ? fn<T, P> | promiseFn<T, P> : isP extends true ? promiseFn<T, P> : fn<T, P>;
export declare type isPromiseFn<f extends mergeFnWithPromiseFn<any, any, undefined>> = Equal<ReturnType<f>, Promise<any>>;
