/*
 * @Author: 邱狮杰
 * @Date: 2022-11-20 14:21:54
 * @LastEditTime: 2022-11-20 15:35:05
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPlugin-node-resolve.ts
 */
import resolve, { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve'
import { Plugin } from 'rollup'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'


export class RollupPluginNodeResolve extends PluginHelper implements ConfigImpl<RollupNodeResolveOptions> {
    private conf: RollupNodeResolveOptions = {}

    readPlugInConfiguration(config?: RollupNodeResolveOptions | undefined): this {
        this.conf = config || {}
        return this
    }

    getConfig(): Plugin {
        const that = this
        return {
            ...resolve(that.conf)
        }

    }

}