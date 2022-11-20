/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 21:50:48
 * @LastEditTime: 2022-11-20 15:35:22
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupCommonjs.ts
 */

import commonjs, { RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import { Plugin } from 'rollup';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';

export class RollupCommonjs extends PluginHelper implements ConfigImpl<RollupCommonJSOptions> {

    private config: RollupCommonJSOptions = {}

    readPlugInConfiguration(config?: RollupCommonJSOptions | undefined): this {
        this.config = config || {}
        return this
    }

    getConfig(): Plugin {
        const that = this
        return {
            ...commonjs(that.config)

        }
    }

}