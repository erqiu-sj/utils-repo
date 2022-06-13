import { UserConfigExport } from 'vite';
import { MergeConfiguration } from '../types/index';
export declare class Alias implements MergeConfiguration {
    private config;
    private pwd;
    analysis(obj?: {
        [key: string]: string;
    }): this;
    getConfig(userConfig: UserConfigExport): UserConfigExport;
}
