/*
 * @Author: 邱狮杰
 * @Date: 2022-06-16 16:51:22
 * @LastEditTime: 2022-09-25 11:43:52
 * @Description:  auto import api test
 * @FilePath: /repo/packages/build/__test__/autoImportApi.test.ts
 */
import { UserConfig } from 'vite'
import { expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'

it('add auto import api', () => {
  const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().addAutoImport().getConfig() as UserConfig
  expect(
    config.plugins?.findIndex(n => {
      return n?.['name'] === 'unplugin-auto-import'
    })
  ).not.toBe(-1)
  expect(config.plugins).toHaveLength(4)
})
