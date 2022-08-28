/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 14:40:36
 * @LastEditTime: 2022-08-28 14:48:35
 * @Description: 
 * @FilePath: /repo/packages/utils/src/verification/typeValidation.ts
 */

export function isEmptyObject(o: object): boolean {
    if (Array.isArray(o)) {
        return isEmptyArray(o)
    }
    return Object.keys(o).length === 0
}

export function isEmptyArray(o: unknown[]): boolean {
    if (!Array.isArray(o)) return false
    return o.length === 0
}

export function isFalseValue(i: unknown) {
    return (i ?? true) === true
}
