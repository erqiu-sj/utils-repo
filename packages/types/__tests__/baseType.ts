/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 10:52:31
 * @LastEditTime: 2022-08-28 12:38:17
 * @Description: 
 * @FilePath: /repo/packages/types/__tests__/baseType.ts
 */

import { fn, mergeFnWithPromiseFn, nonNullFnParameter, promiseFn } from "../src/baseType";
import { Equal, Expect, IsFalse } from "../src/verify";


const fn1 = (fn2: fn<string>) => { }

type fn1Params = nonNullFnParameter<typeof fn1>

type verifyFn1 = Expect<Equal<fn<number>, (...args: any[]) => number>>

type verifyFn2 = Expect<Equal<fn<string>, fn1Params>>

type verifyPromisefn1 = IsFalse<Equal<promiseFn<string>, mergeFnWithPromiseFn<string>>>

type verifyPromisefn2 = Expect<Equal<promiseFn<string>, (...args: any[]) => Promise<string>>>

