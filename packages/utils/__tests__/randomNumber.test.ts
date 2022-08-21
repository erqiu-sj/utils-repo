/*
 * @Author: 邱狮杰
 * @Date: 2022-06-11 21:54:05
 * @LastEditTime: 2022-06-11 22:10:38
 * @Description:
 * @FilePath: /repo/packages/utils/__tests__/randomNumber.test.ts
 */
import { expect, it } from 'vitest'
import { RandomNumberInterval } from '../src'

it('random number interval 5 ~ 10', () => {
  const number = new RandomNumberInterval([5, 10], { isInteger: true })
  expect(number.getNumber()).toBeGreaterThanOrEqual(5)
  expect(number.getNumber()).toBeLessThanOrEqual(10)
})

it('random number interval 10 ~ 15', () => {
  const number = new RandomNumberInterval([10, 15], { isInteger: true })
  expect(number.getNumber()).toBeGreaterThanOrEqual(10)
  expect(number.getNumber()).toBeLessThanOrEqual(15)
})

it('random number interval 100 ~ 150', () => {
  const number = new RandomNumberInterval([100, 150], { isInteger: true })
  expect(number.getNumber()).toBeGreaterThanOrEqual(100)
  expect(number.getNumber()).toBeLessThanOrEqual(150)
})
