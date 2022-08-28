/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 10:36:27
 * @LastEditTime: 2022-08-28 15:30:23
 * @Description: 
 * @FilePath: /repo/packages/utils/src/verification/typeInvalidValidation.ts
 */
import { isPromiseFn, mergeFnWithPromiseFn, nonNullFnParameter } from "@mxnet/types/dts"
import { singletonPattern } from "./singletonPattern"
import { isEmptyArray, isEmptyObject, isFalseValue } from './typeValidation'


// 类型策略验证
export class TypeInvalidValidation<R extends { [k in number]: mergeFnWithPromiseFn }> {
    private policySet: Map<string, mergeFnWithPromiseFn<unknown, any>> = new Map()
    // 新增策略
    addTypePolicy<K extends string, f extends mergeFnWithPromiseFn>(name: K, fn: f): TypeInvalidValidation<R & { [k in K]: mergeFnWithPromiseFn<ReturnType<f>, nonNullFnParameter<f>, isPromiseFn<f>> }> {
        this.policySet.set(name, fn)
        return this
    }

    // 删除策略
    deletePolicy<k extends keyof R>(name: k): TypeInvalidValidation<Omit<R, k>> {
        if (typeof name !== 'string') throw new Error(`deletePolicy function need a string parameter , but got a ${typeof name}. ${name.toString()}`)
        this.policySet.delete(name)
        return this
    }

    // 调用类型策略
    // @ts-ignore
    callTypeStrategy<K extends keyof R>(name: K, ...params: nonNullFnParameter<R[K]>): ReturnType<R[K]> {
        if (typeof name !== 'string') throw new Error(`callTypeStrategy function need a string parameter , but got a ${typeof name}. ${name.toString()}`)
        if (!this.policySet.has(name)) throw new Error(`call failed(${name}), check for type policy`)
        // @ts-ignore
        return this.policySet.get(name)?.(params) as ReturnType<R[K]>
    }


}

export const typeInvalidValidation = singletonPattern(() => new TypeInvalidValidation())()

export function builtInTypeStrategy() {
    return typeInvalidValidation.addTypePolicy('isEmptyObject', isEmptyObject).addTypePolicy('isEmptyArray', isEmptyArray).addTypePolicy('isFalseValue', isFalseValue)
}