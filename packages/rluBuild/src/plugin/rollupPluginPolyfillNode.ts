/*
 * @Author: 邱狮杰
 * @Date: 2022-11-26 15:36:54
 * @LastEditTime: 2022-11-26 15:46:46
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginPolyfillNode.ts
 */
import { Plugin } from 'rollup'
import polyfillNode, { NodePolyfillsOptions } from 'rollup-plugin-polyfill-node'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'


export class RollupPluginPolyfillNode extends PluginHelper implements ConfigImpl<NodePolyfillsOptions> {
    private conf?: NodePolyfillsOptions = {}

    readPlugInConfiguration(config?: NodePolyfillsOptions | undefined): this {
        this.conf = config
        return this
    }

    getConfig(): Plugin {
        return {
            ...polyfillNode(this.conf)
        }
    }

}