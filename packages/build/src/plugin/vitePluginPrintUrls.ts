/*
 * @Author: 邱狮杰
 * @Date: 2022-12-14 17:05:54
 * @LastEditTime: 2022-12-14 17:07:55
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vitePluginPrintUrls.ts
 */
import PluginDecorator from 'vite-plugin-print-urls'
import { Plugin } from 'vite'
import { MergeConfiguration } from '../types/plugin'

export class VitePluginPrintUrls implements MergeConfiguration {
  private plugin: Plugin | null = null

  createBasicConfiguration(): this {
    this.plugin = PluginDecorator()
    return this
  }

  getPlugin(): Plugin | Plugin[] | null {
    return this.plugin
  }
}
