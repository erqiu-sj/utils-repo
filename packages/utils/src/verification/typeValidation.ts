/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 14:40:36
 * @LastEditTime: 2022-09-02 22:19:35
 * @Description: 
 * @FilePath: /taro-react-template/Users/devops/Desktop/maixun/repo/packages/utils/src/verification/typeValidation.ts
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
    if (i === false) return true
    return (i ?? true) === true
}
