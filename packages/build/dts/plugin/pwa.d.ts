import { UserConfigExport } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { MergeConfiguration } from '../types';
export declare class Pwa implements MergeConfiguration {
    private defaultConfigure;
    private plugin;
    createBasicConfiguration(conf?: Partial<VitePWAOptions>): this;
    getConfig(userConfig: UserConfigExport): UserConfigExport;
}
