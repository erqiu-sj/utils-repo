/*
 * @Author: 邱狮杰
 * @Date: 2022-08-04 21:38:04
 * @LastEditTime: 2022-12-14 15:59:13
 * @Description:
 * @FilePath: /repo/packages/build/__test__/pwa.test.ts
 */
import { UserConfig } from 'vite'
import { describe, expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'
import { whetherPlugInsExist } from './test.helper'

describe('vite add pwa plugin', () => {
  const c = new ViteConfiguration().addAutoImport().addPwaConfigure().getConfig() as UserConfig

  it('have pwd plugins', () => {
    const pwaPluginsName = ['vite-plugin-pwa', 'vite-plugin-pwa:build', 'vite-plugin-pwa:dev-sw']
    expect(
      pwaPluginsName.some(n => {
        return whetherPlugInsExist(c.plugins, n)
      })
    ).toBeTruthy()
  })

  it('pwa plugins return value is array', () => {
    expect(Array.isArray(c.plugins?.at(-1))).toBeTruthy()
  })
})
