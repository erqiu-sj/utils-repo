/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 20:00:17
 * @LastEditTime: 2022-09-25 11:45:34
 * @Description: test vconsole
 * @FilePath: /repo/packages/build/__test__/vconsole.test.ts
 */

import { UserConfig } from 'vite'
import { expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'

it('addVconsole', () => {
  const viteConfig = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().getConfig({}) as UserConfig
  expect(
    viteConfig.plugins?.findIndex(n => {
      return n?.['name'] === 'vite:vconsole'
    })
  ).not.toBe(-1)
  expect(viteConfig.plugins).toHaveLength(3)
})
