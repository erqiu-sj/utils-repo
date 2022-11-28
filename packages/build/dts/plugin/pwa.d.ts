import { Plugin } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { MergeConfiguration } from '../types';
export declare class Pwa implements MergeConfiguration<VitePWAOptions> {
    private defaultConfigure;
    private plugin;
    createBasicConfiguration(conf?: Partial<VitePWAOptions>): this;
    getPlugin(): Plugin[] | null;
}
