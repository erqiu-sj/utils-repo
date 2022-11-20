/*
 * @Author: 邱狮杰
 * @Date: 2022-11-20 14:29:50
 * @LastEditTime: 2022-11-20 15:34:50
 * @Description: 
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginTerser.ts
 */
import { Plugin } from 'rollup'
import { Options, terser } from 'rollup-plugin-terser'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'



export class RollupPluginTerser extends PluginHelper implements ConfigImpl<Options> {

    private conf: Options = {}

    readPlugInConfiguration(config?: Options | undefined): this {

        this.conf = config || {}

        return this
    }

    getConfig(): Plugin {
        const that = this
        return {
            ...terser(that.conf)
        }
    }


}
