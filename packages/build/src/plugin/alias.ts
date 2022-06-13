/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 21:56:23
 * @LastEditTime: 2022-06-12 21:12:11
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/alias.ts
 */
import defaultsDeep from 'lodash.defaultsdeep'
import { resolve } from 'path'
import { UserConfigExport } from 'vite'
import { MergeConfiguration } from '../types/index'


export class Alias implements MergeConfiguration {
  private config: UserConfigExport = {}

  private pwd(path: string) {
    return resolve(process.cwd(), '.', path) + '/'
  }

  analysis(obj?: { [key: string]: string }) {
    const h: { [key: string]: string } = {}
    for (const key in obj) {
      h[key] = this.pwd(obj[key])
    }
    const config: UserConfigExport = {
      resolve: {
        alias: { '~/': this.pwd('src'), ...h },
      },
    }
    this.config = config
    return this
  }

  getConfig(userConfig: UserConfigExport): UserConfigExport {
    const result = defaultsDeep(userConfig, this.config)
    return result
  }

}
