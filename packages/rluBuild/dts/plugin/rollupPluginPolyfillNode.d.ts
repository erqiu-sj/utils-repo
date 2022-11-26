import { Plugin } from 'rollup';
import { NodePolyfillsOptions } from 'rollup-plugin-polyfill-node';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupPluginPolyfillNode extends PluginHelper implements ConfigImpl<NodePolyfillsOptions> {
    private conf?;
    readPlugInConfiguration(config?: NodePolyfillsOptions | undefined): this;
    getConfig(): Plugin;
}
