/*
 * @Author: 邱狮杰
 * @Date: 2022-12-11 02:02:44
 * @LastEditTime: 2022-12-14 16:32:20
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vuejsx.ts
 */

import { Plugin } from 'vite'
import vueJSXPlugin, { Options } from '@vitejs/plugin-vue-jsx'
// import VueMacros from 'unplugin-vue-macros/vite'
import { MergeConfiguration } from '../types'

export class VueJSX implements MergeConfiguration<Options> {
  private plugin: Plugin[] | null = null

  createBasicConfiguration(conf?: Options | undefined): this {
    this.plugin = vueJSXPlugin(conf) as any
    return this
  }

  getPlugin(): Plugin | Plugin[] | null {
    return this.plugin
  }
}
