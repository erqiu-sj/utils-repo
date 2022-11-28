import { Plugin } from 'vite';
import { viteVConsoleOptions } from 'vite-plugin-vconsole';
export declare class Vconsole {
    private config;
    private defaultConfig;
    changeSetting(conf?: Partial<viteVConsoleOptions>): this;
    getPlugin(): Plugin | undefined;
}
