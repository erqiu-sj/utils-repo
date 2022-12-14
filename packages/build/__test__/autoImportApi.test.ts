/*
 * @Author: 邱狮杰
 * @Date: 2022-06-16 16:51:22
 * @LastEditTime: 2022-12-14 16:02:26
 * @Description:  auto import api test
 * @FilePath: /repo/packages/build/__test__/autoImportApi.test.ts
 */
import { UserConfig } from 'vite'
import { expect, it, describe } from 'vitest'
import { ViteConfiguration } from '../src/index'
import { whetherPlugInsExist } from './test.helper'

describe('auto import api group', () => {

  it('add auto import api', () => {
    const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue').addVConsole().addAutoImport().getConfig() as UserConfig

    expect(
      whetherPlugInsExist(config.plugins, 'unplugin-auto-import')
    ).not.toBe(-1)

    expect(config.plugins).toHaveLength(4)
  })

})
