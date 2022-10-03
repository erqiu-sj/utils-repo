/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:35:54
 * @LastEditTime: 2022-10-01 22:39:10
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/storeage.ts
 */
import { getTaroApi } from '../utils/importTaro'

// 获取分布式key 只支持object和string
type getDistributedKey<T> = T extends any[] ? never : T extends object ? keyof T : T extends string ? T : never

export class Storeage<T> {
  async get<V>(k: getDistributedKey<T>): Promise<V> {
    return (await getTaroApi<V>(res => {
      return res.getStorageSync(k as string)
    })) as Promise<V>
  }

  set<V>(k: getDistributedKey<T>, val: V) {
    getTaroApi(res => {
      res.setStorageSync(k as string, val)
    })
    return this
  }
}
