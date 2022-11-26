/*
 * @Author: 邱狮杰
 * @Date: 2022-11-26 15:14:19
 * @LastEditTime: 2022-11-26 15:15:22
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginJson.ts
 */

import json, { RollupJsonOptions } from '@rollup/plugin-json'
import { Plugin } from 'rollup'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'


export class RollupPluginJson extends PluginHelper implements ConfigImpl<RollupJsonOptions> {

    private conf?: RollupJsonOptions = {}

    readPlugInConfiguration(config?: RollupJsonOptions | undefined): this {
        this.conf = config
        return this
    }

    getConfig(): Plugin {
        return {
            ...json(this.conf)
        }
    }

}
