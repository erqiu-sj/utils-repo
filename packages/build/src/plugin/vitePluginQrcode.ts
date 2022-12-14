/*
 * @Author: 邱狮杰
 * @Date: 2022-12-14 17:34:13
 * @LastEditTime: 2022-12-14 17:35:28
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vitePluginQrcode.ts
 */
import { qrcode, PluginOptions } from 'vite-plugin-qrcode'
import { Plugin } from 'vite'
import { MergeConfiguration } from '../types/plugin'

export class VitePluginQrcode implements MergeConfiguration<PluginOptions> {
  private plugin: Plugin | null = null

  createBasicConfiguration(conf?: PluginOptions | undefined): this {
    this.plugin = qrcode(conf)
    return this
  }

  getPlugin(): Plugin | Plugin[] | null {
    return this.plugin
  }
}
