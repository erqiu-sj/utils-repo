/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:09:31
 * @LastEditTime: 2022-12-14 16:00:50
 * @Description:
 * @FilePath: /repo/packages/build/__test__/routeazyLoading.test.ts
 */

import { UserConfig } from 'vite'
import { expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'
import { whetherPlugInsExist } from './test.helper'

it('add router lazy loading', () => {
  const config: UserConfig = new ViteConfiguration()
    .addRouteLazyLoading({
      user: './src/components/index',
    })
    .getConfig({
      build: {
        rollupOptions: {
          output: {
            assetFileNames: '',
          },
        },
      },
    }) as UserConfig

  expect(
    whetherPlugInsExist(config.plugins, 'vite-plugin-mxnet/routeLazyLoading')
  ).not.toBe(-1)

  expect(config.plugins).toHaveLength(2)

})
