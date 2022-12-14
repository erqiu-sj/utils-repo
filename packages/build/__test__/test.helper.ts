/*
 * @Author: 邱狮杰
 * @Date: 2022-12-14 15:47:07
 * @LastEditTime: 2022-12-14 15:52:28
 * @Description: 
 * @FilePath: /repo/packages/build/__test__/test.helper.ts
 */
/**
 * @description 将多维数组转为一维数组
 * @param list 
 * @param multidimensional 
 * @returns 
 */
export function removeMultidimensionalArray(list: unknown[], multidimensional?: number) {
    return list.flat(multidimensional ?? 5)
}

/**
 * @description 是否存在插件
 * @param list 
 * @param pluginName 
 * @returns 
 */
export function whetherPlugInsExist(list?: unknown[], pluginName?: string): number {
    return removeMultidimensionalArray(list || []).findIndex(n => {
        return n?.['name'] === pluginName
    })
}