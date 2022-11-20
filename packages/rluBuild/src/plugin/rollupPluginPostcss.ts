/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 22:15:23
 * @LastEditTime: 2022-11-20 14:30:26
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginPostcss.ts
 */

import postcss, { PostCSSPluginConf } from 'rollup-plugin-postcss'
import { Plugin } from 'rollup'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'

export class RollupPluginPostcss extends PluginHelper implements ConfigImpl<PostCSSPluginConf> {
    private config: PostCSSPluginConf = {}

    readPlugInConfiguration(config?: PostCSSPluginConf): this {
        this.config = config || {}
        return this
    }

    getConfig(): Plugin {

        const that = this

        return {
            name: this.plugInNamePrefix('rollupPluginPostcss'),
            options(options) {
                return {
                    ...options,
                    // @ts-ignore
                    plugins: [postcss(that.config) as Plugin]
                }
            },
        }

    }

}
