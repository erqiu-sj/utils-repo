import autoImport from 'unplugin-auto-import';
import { Plugin } from 'vite';
import { MergeConfiguration, technologyStackTypes } from '../types';
export declare type autoImportOptions = NonNullable<Parameters<typeof autoImport.vite>[0]>;
export declare class AutoImportApi extends MergeConfiguration {
    private userConfig?;
    private defaultImports;
    configurePresets(technologyStackTypes?: technologyStackTypes): this;
    private vueImports;
    private reactImports;
    instancePlugin(conf?: autoImportOptions): this;
    getPlugin(): Plugin | undefined;
}
