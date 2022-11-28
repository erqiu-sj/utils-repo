import { PluginVisualizerOptions } from 'rollup-plugin-visualizer';
import { Plugin } from 'vite';
import { MergeConfiguration } from '../types';
export type { PluginVisualizerOptions };
export declare class RollupPluginVisualizer implements MergeConfiguration<PluginVisualizerOptions> {
    private plugin;
    createBasicConfiguration(conf?: PluginVisualizerOptions): this;
    getPlugin(): Plugin | null;
}
