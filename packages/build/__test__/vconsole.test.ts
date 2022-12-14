/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 20:00:17
 * @LastEditTime: 2022-12-14 15:53:35
 * @Description: test vconsole
 * @FilePath: /repo/packages/build/__test__/vconsole.test.ts
 */

import { UserConfig } from 'vite'
import { expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'
import { whetherPlugInsExist } from './test.helper'

it('addVconsole', () => {
  const viteConfig = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().getConfig({}) as UserConfig
  expect(
    whetherPlugInsExist(viteConfig.plugins, 'vite:vconsole')
  ).not.toBe(-1)

  expect(viteConfig.plugins).toHaveLength(3)
})
