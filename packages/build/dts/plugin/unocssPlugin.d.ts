import { VitePluginConfig } from 'unocss/vite';
import { Plugin } from 'vite';
import { MergeConfiguration } from '../types';
export type { VitePluginConfig };
export declare class UnocssPlugin implements MergeConfiguration<VitePluginConfig> {
    private plugin;
    createBasicConfiguration(conf?: VitePluginConfig<{}> | undefined): this;
    getPlugin(): Plugin | Plugin[] | null;
}
