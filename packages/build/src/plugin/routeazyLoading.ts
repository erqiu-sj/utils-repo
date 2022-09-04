/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 17:05:20
 * @LastEditTime: 2022-09-04 15:41:03
 * @Description: 路由懒加载 适用于vue
 * @FilePath: /repo/packages/build/src/plugin/routeazyLoading.ts
 */

import defaultsDeep from 'lodash.defaultsdeep'
import { PluginOption, UserConfigExport } from 'vite'
import { getGenPluginConfig } from '../common/genConfig'
import { MergeConfiguration } from '../types'

export class RouteLazyLoading extends MergeConfiguration {
  private plugins: PluginOption | null = null

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
    this.plugins = getGenPluginConfig({
      name: 'routeLazyLoading',
      config: () => {
        return conf
      },
    })
    return this
  }
  getPlugin() {
    return this.plugins
  }
}
