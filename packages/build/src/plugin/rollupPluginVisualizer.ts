/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:24:00
 * @LastEditTime: 2022-11-27 16:47:30
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/rollupPluginVisualizer.ts
 */
import { PluginVisualizerOptions, visualizer } from 'rollup-plugin-visualizer'
import { Plugin } from 'vite'
import { MergeConfiguration } from '../types'

export type { PluginVisualizerOptions }

export class RollupPluginVisualizer implements MergeConfiguration<PluginVisualizerOptions> {

    private plugin: Plugin | null = null

    createBasicConfiguration(conf?: PluginVisualizerOptions) {
        this.plugin = visualizer(conf) as Plugin
        return this
    }

    getPlugin() {
        return this.plugin
    }

}