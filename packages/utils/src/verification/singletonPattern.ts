/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 10:42:38
 * @LastEditTime: 2022-08-28 15:12:45
 * @Description: 单例模式
 * @FilePath: /repo/packages/utils/src/verification/singletonPattern.ts
 */

import { fn } from "@mxnet/types/dts";

export function singletonPattern<T extends unknown>(fn: fn<T>) {
    let result: T
    return () => {
        return result ? result : (result = fn(), result);
    }
}