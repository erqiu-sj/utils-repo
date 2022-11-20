import { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import { Plugin } from 'rollup';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupPluginNodeResolve extends PluginHelper implements ConfigImpl<RollupNodeResolveOptions> {
    private conf;
    readPlugInConfiguration(config?: RollupNodeResolveOptions | undefined): this;
    getConfig(): Plugin;
}
