/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:55:11
 * @LastEditTime: 2022-10-09 09:09:53
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/decorator.ts
 */

// 根据传入函数的返回值判断class中的method 是否允许执行
export function allowExecution<T = unknown>(cb?: (parmater: T) => boolean) {
  return (target: object, key: string, desc: TypedPropertyDescriptor<any>) => {
    const fn = desc.value
    desc.value = function () {
      const params = Array.from(arguments)
      //    @ts-ignore
      return cb?.(...params) && fn(...params)
    }
    return desc
  }
}
