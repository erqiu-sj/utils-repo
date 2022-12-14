/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 11:19:18
 * @LastEditTime: 2022-12-10 23:13:53
 * @Description:
 * @FilePath: /repo/packages/types/src/baseType.ts
 */
import { Equal } from './verify'
/**
 * @description define normal function type
 */
export type fn<T = unknown, P extends any[] = any> = (...args: P) => T

/**
 * @description define promise function type
 */
export type promiseFn<T = unknown, P extends any[] = any> = (...args: P) => Promise<T>

/**
 * @description non-null function parameter type
 */
export type nonNullFnParameter<T extends (...args: any) => any> = NonNullable<Parameters<T>>

/**
 * @description merge define normal function and define promise function type
 */
export type mergeFnWithPromiseFn<T = unknown, P extends any[] = any, isP extends boolean | undefined = undefined> = isP extends undefined ? fn<T, P> | promiseFn<T, P> : isP extends true ? promiseFn<T, P> : fn<T, P>

/**
 *  @description  need a function generics, verify is it promise function
 */
export type isPromiseFn<f extends mergeFnWithPromiseFn<any, any, undefined>> = Equal<ReturnType<f>, Promise<any>>


export type stringWithBool = 'false' | 'true'
