import { RollupTypescriptOptions } from '@rollup/plugin-typescript';
import { Plugin } from 'rollup';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
/**
 * @description Rollup和TypeScript之间的无缝集成
 */
export declare class RollupTs extends PluginHelper implements ConfigImpl<RollupTypescriptOptions> {
    private config;
    readPlugInConfiguration(config?: RollupTypescriptOptions): this;
    getConfig(): Plugin;
}
