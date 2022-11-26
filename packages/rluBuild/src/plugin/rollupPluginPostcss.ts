/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 22:15:23
 * @LastEditTime: 2022-11-20 15:50:20
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginPostcss.ts
 */

import { Plugin } from 'rollup'
import postcss, { PostCSSPluginConf } from 'rollup-plugin-postcss'
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
            ...postcss(that.config) as Plugin,
        }

    }

}
