/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:09:31
 * @LastEditTime: 2022-09-25 11:50:33
 * @Description:
 * @FilePath: /repo/packages/build/__test__/routeazyLoading.test.ts
 */

import { UserConfig } from 'vite'
import { expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'

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

  expect(config.plugins).toHaveLength(2)

  // const result = Object.keys(Reflect.get(config.build?.rollupOptions?.output as object, 'manualChunks'))

  // console.log(result, 'result')

  // expect(result).toHaveLength(1)
})
