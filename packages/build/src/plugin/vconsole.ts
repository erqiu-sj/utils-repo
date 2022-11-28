/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:33:50
 * @LastEditTime: 2022-11-27 17:04:18
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vconsole.ts
 */

import { resolve } from 'path'
import { Plugin } from 'vite'
import { viteVConsole, viteVConsoleOptions } from 'vite-plugin-vconsole'

export class Vconsole {
  private config: Plugin | undefined = undefined
  private defaultConfig(): viteVConsoleOptions {
    return {
      entry: resolve('src/main.ts'),
      localEnabled: false,
      enabled: false,
      config: {
        maxLogNumber: 1000,
        theme: 'light',
      },
    }
  }

  changeSetting(conf?: Partial<viteVConsoleOptions>): this {
    this.config = viteVConsole({
      ...(conf || {}),
      ...this.defaultConfig(),
    })
    return this
  }

  getPlugin() {
    return this.config
  }
}
