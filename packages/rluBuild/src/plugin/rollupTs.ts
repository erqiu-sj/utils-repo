/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:46:36
 * @LastEditTime: 2022-11-20 15:30:54
 * @Description: rollupTs
 * @FilePath: /repo/packages/rluBuild/src/core/rollupTs.ts
 */
import typescript, { RollupTypescriptOptions } from '@rollup/plugin-typescript'
import { Plugin } from 'rollup'
import { ConfigImpl } from '../types/config'
import { PluginHelper } from '../utils/pluginHelper'

/**
 * @description Rollup和TypeScript之间的无缝集成
 */
export class RollupTs extends PluginHelper implements ConfigImpl<RollupTypescriptOptions> {

    private config: RollupTypescriptOptions = {}

    readPlugInConfiguration(config?: RollupTypescriptOptions): this {
        this.config = config || {}
        return this
    }

    getConfig(): Plugin {
        const that = this
        return {
            ...typescript(that.config)
        }
    }
}