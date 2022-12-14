/*
 * @Author: 邱狮杰
 * @Date: 2022-12-14 17:09:29
 * @LastEditTime: 2022-12-14 17:14:03
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vitePluginProgress.ts
 */

import { MergeConfiguration } from '../types/plugin'
import vitePluginProgress from 'vite-plugin-progress'
import { Plugin } from 'vite'

type vitePluginProgressOptions = Parameters<typeof vitePluginProgress>[0]

export class VitePluginProgress implements MergeConfiguration<vitePluginProgressOptions> {
  private plugins: Plugin | null = null
  private defalut: vitePluginProgressOptions = {
    format: 'building [:bar] :percent',
    total: 200,
    width: 60,
    complete: '=',
    incomplete: '',
  }

  createBasicConfiguration(conf?: vitePluginProgressOptions): this {
    this.plugins = vitePluginProgress(conf ?? this.defalut) as Plugin
    return this
  }

  getPlugin(): Plugin | Plugin[] | null {
    return this.plugins
  }
}
