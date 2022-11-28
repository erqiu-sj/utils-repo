/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 21:56:23
 * @LastEditTime: 2022-11-27 17:05:23
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/alias.ts
 */
import defaultsDeep from 'lodash.defaultsdeep'
import { resolve } from 'path'
import { PluginOption, UserConfigExport } from 'vite'
import { getGenPluginConfig } from '../common/genConfig'
// import { MergeConfiguration } from '../types/index'

export class Alias {
  private config: UserConfigExport = {}

  plugin: PluginOption = null

  private pwd(path: string) {
    return resolve(process.cwd(), '.', path) + '/'
  }

  analysis(obj?: { [key: string]: string }) {
    const h: { [key: string]: string } = {}
    for (const key in obj) {
      h[key] = this.pwd(obj[key])
    }

    this.plugin = getGenPluginConfig({
      name: 'alias',
      config: () => {
        return {
          resolve: {
            alias: { '~/': this.pwd('src'), ...h },
          },
        }
      },
    })

    return this
  }

  getConfig(userConfig: UserConfigExport): UserConfigExport {
    const result = defaultsDeep(userConfig, this.config)
    return result
  }
}
