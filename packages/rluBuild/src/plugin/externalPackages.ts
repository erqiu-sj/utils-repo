/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:07
 * @LastEditTime: 2022-11-20 15:35:39
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/core/externalPackages.ts
 */

import { Plugin } from 'rollup'
import externals, { ExternalsOptions } from 'rollup-plugin-node-externals'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'

/**
 * @description 打包时排出外部资源
 */
export class ExternalPackages extends PluginHelper implements ConfigImpl<ExternalsOptions> {

    // private helper: PluginHelper = new PluginHelper()
    // 默认
    private externalPackages = ['react', 'vue', '@tarojs/taro', 'axios', '@tarojs/react', '@tarojs/runtime']

    private config: ExternalsOptions = {}

    readPlugInConfiguration(config?: ExternalsOptions): this {
        this.config = config || {}
        return this
    }

    getConfig(): Plugin {
        const that = this
        return {
            ...externals(that.config)
        }
    }
}