/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 17:05:20
 * @LastEditTime: 2022-08-20 21:13:09
 * @Description: 路由懒加载 适用于vue
 * @FilePath: /repo/packages/build/src/plugin/routeazyLoading.ts
 */

import defaultsDeep from 'lodash.defaultsdeep'
import { UserConfigExport } from 'vite'
import { MergeConfiguration } from '../types'

export class RouteLazyLoading extends MergeConfiguration {
  private c: UserConfigExport = {}

  addRouterConfig(obj: object) {
    const conf: UserConfigExport = {
      build: {
        rollupOptions: {
          output: {
            manualChunks: { ...obj },
          },
        },
      },
    }
    this.c = conf
  }

  getConfig(userConfig: UserConfigExport): UserConfigExport {
    return defaultsDeep(userConfig, this.c)
  }
}
