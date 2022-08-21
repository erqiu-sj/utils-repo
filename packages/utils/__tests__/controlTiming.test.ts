/*
 * @Author: 邱狮杰
 * @Date: 2022-08-21 13:02:07
 * @LastEditTime: 2022-08-21 13:06:18
 * @Description:
 * @FilePath: /repo/packages/utils/__tests__/controlTiming.test.ts
 */
import { expect, it } from 'vitest'
import { ControlTiming } from '../src'

it('controlTiming dispatch', () => {
  const c = new ControlTiming()
    .addTimingItems('name', async (name?: string) => {
      return 1
    })
    .addTimingItems('two', async () => {
      return await new Promise(res => {
        res(12)
      })
    })

  c.monitor('name', res => {
    expect(res).toStrictEqual(1)
  })

  c.monitor('two', async res => {
    expect(res).toStrictEqual(12)
  })

  c.trigger('name')
})
