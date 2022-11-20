import { Plugin } from 'rollup';
import { Options } from 'rollup-plugin-terser';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupPluginTerser extends PluginHelper implements ConfigImpl<Options> {
    private conf;
    readPlugInConfiguration(config?: Options | undefined): this;
    getConfig(): Plugin;
}
