import { PluginOption, UserConfigExport } from 'vite';
export declare class Alias {
    private config;
    plugin: PluginOption;
    private pwd;
    analysis(obj?: {
        [key: string]: string;
    }): this;
    getConfig(userConfig: UserConfigExport): UserConfigExport;
}
