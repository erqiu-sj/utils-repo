/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:54:03
 * @LastEditTime: 2022-11-27 17:03:07
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/unocssPlugin.ts
 */
import unocssPlugin, { VitePluginConfig } from 'unocss/vite'
import { Plugin } from 'vite'
import { MergeConfiguration } from '../types'


export type { VitePluginConfig }

export class UnocssPlugin implements MergeConfiguration<VitePluginConfig> {
    private plugin: null | Plugin[] = null

    createBasicConfiguration(conf?: VitePluginConfig<{}> | undefined): this {
        this.plugin = unocssPlugin(conf)
        return this
    }

    getPlugin(): Plugin | Plugin[] | null {
        return this.plugin
    }

}