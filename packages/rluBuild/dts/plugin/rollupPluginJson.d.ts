import { RollupJsonOptions } from '@rollup/plugin-json';
import { Plugin } from 'rollup';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupPluginJson extends PluginHelper implements ConfigImpl<RollupJsonOptions> {
    private conf?;
    readPlugInConfiguration(config?: RollupJsonOptions | undefined): this;
    getConfig(): Plugin;
}
