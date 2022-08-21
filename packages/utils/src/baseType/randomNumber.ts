/*
 * @Author: 邱狮杰
 * @Date: 2022-06-11 21:45:47
 * @LastEditTime: 2022-08-20 22:17:12
 * @Description: 随机数
 * @FilePath: /repo/packages/utils/src/baseType/randomNumber.ts
 */

/**
 * @description 随机数区间
 */
export class RandomNumberInterval {
  private n: number = 0
  constructor(
    interval: [number, number],
    ops?: {
      // 是否取整
      isInteger: boolean
    }
  ) {
    const maxNum = Math.max(interval[0], interval[1])
    const minNum = Math.min(interval[0], interval[1])
    const result = Math.random() * (maxNum - minNum + 1) + minNum
    this.n = ops?.isInteger ? Math.floor(result) : result
  }

  getNumber(): number {
    return this.n
  }
}
