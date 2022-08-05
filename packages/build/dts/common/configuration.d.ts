import { UserConfigExport } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { viteVConsoleOptions } from 'vite-plugin-vconsole';
import { autoImportOptions } from '../plugin/autoImport';
import { determineConfigurationAccordingTechnologyStack, scenesTypes, technologyStackTypes } from '../types';
export declare class ViteConfiguration {
    protected config: UserConfigExport;
    private scenes;
    private alias;
    constructor(config?: UserConfigExport);
    setScenes(type: scenesTypes): this;
    setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>): this;
    setAlias(aliasConfig?: {
        [key: string]: string;
    }): this;
    addVConsole(config?: Partial<viteVConsoleOptions>): this;
    addAutoImport(conf?: autoImportOptions): this;
    addPwaConfigure(conf?: Partial<VitePWAOptions>): this;
    getConfig(config?: UserConfigExport): UserConfigExport;
}
