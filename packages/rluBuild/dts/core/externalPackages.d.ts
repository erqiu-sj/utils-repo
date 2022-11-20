import { Plugin } from 'rollup';
import { ExternalsOptions } from 'rollup-plugin-node-externals';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
/**
 * @description 打包时排出外部资源
 */
export declare class ExternalPackages extends PluginHelper implements ConfigImpl<ExternalsOptions> {
    private externalPackages;
    private config;
    readPlugInConfiguration(config?: ExternalsOptions): this;
    getConfig(): Plugin;
}
