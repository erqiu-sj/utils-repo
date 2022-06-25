/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:35:54
 * @LastEditTime: 2022-06-23 15:07:53
 * @Description: 
 * @FilePath: /repo/packages/taro/src/utils/storeage.ts
 */

import { getStorageSync, setStorageSync } from "@tarojs/taro";

// 获取分布式key 只支持object和string
type getDistributedKey<T> = T extends any[] ? never : T extends object ? keyof T : T extends string ? T : never

export class Storeage<T> {
    get<V>(k: getDistributedKey<T>): V {
        return getStorageSync(k as string)
    }

    set<V>(k: getDistributedKey<T>, val: V) {
        setStorageSync(k as string, val)
        return this
    }
}