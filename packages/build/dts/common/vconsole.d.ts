import { UserConfigExport } from 'vite';
import { viteVConsoleOptions } from "vite-plugin-vconsole";
import { MergeConfiguration } from "../types";
export declare class Vconsole implements MergeConfiguration {
    private config;
    private defaultConfig;
    changeSetting(conf?: Partial<viteVConsoleOptions>): this;
    getConfig(config: UserConfigExport): UserConfigExport;
}
