/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 17:05:20
 * @LastEditTime: 2022-11-27 17:04:02
 * @Description: 路由懒加载 适用于vue
 * @FilePath: /repo/packages/build/src/plugin/routeazyLoading.ts
 */

import { PluginOption, UserConfigExport } from 'vite'
import { getGenPluginConfig } from '../common/genConfig'

export class RouteLazyLoading {
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
