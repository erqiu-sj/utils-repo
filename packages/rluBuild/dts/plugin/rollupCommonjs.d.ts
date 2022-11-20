import { RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import { Plugin } from 'rollup';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupCommonjs extends PluginHelper implements ConfigImpl<RollupCommonJSOptions> {
    private config;
    readPlugInConfiguration(config?: RollupCommonJSOptions | undefined): this;
    getConfig(): Plugin;
}
