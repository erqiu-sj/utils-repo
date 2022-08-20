/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:09:31
 * @LastEditTime: 2022-08-20 21:22:20
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

  const result = Object.keys(Reflect.get(config.build?.rollupOptions?.output as object, 'manualChunks'))

  expect(result).toHaveLength(1)
})
