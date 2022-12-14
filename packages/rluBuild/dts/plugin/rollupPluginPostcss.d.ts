import { Plugin } from 'rollup';
import { PostCSSPluginConf } from 'rollup-plugin-postcss';
import { ConfigImpl } from '../types/config';
import { PluginHelper } from '../utils/pluginHelper';
export declare class RollupPluginPostcss extends PluginHelper implements ConfigImpl<PostCSSPluginConf> {
    private config;
    readPlugInConfiguration(config?: PostCSSPluginConf): this;
    getConfig(): Plugin;
}
