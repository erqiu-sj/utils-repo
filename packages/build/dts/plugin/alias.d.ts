import { PluginOption, UserConfigExport } from 'vite';
import { MergeConfiguration } from '../types/index';
export declare class Alias implements MergeConfiguration {
    private config;
    plugin: PluginOption;
    private pwd;
    analysis(obj?: {
        [key: string]: string;
    }): this;
    getConfig(userConfig: UserConfigExport): UserConfigExport;
}
