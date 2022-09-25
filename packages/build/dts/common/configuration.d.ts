import { UserConfig, UserConfigExport } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { viteVConsoleOptions } from 'vite-plugin-vconsole';
import { autoImportOptions } from '../plugin/autoImport';
import { determineConfigurationAccordingTechnologyStack, eliminatePropertiesBasedTechnologyStack, scenesTypes, technologyStackTypes } from '../types';
export declare class ViteConfiguration {
    protected config: UserConfigExport;
    private scenes;
    private alias;
    private plugins;
    constructor(config?: UserConfigExport);
    setScenes(type: scenesTypes): this;
    setTechnologyStack<Ty extends technologyStackTypes, S extends scenesTypes>(type: Ty, ops?: determineConfigurationAccordingTechnologyStack<Ty, S>): eliminatePropertiesBasedTechnologyStack<Ty, this>;
    setAlias(aliasConfig?: {
        [key: string]: string;
    }): this;
    addVConsole(config?: Partial<viteVConsoleOptions>): this;
    addAutoImport(conf?: autoImportOptions): this;
    addPwaConfigure(conf?: Partial<VitePWAOptions>): this;
    addRouteLazyLoading(obj: object): this;
    getConfig(config?: UserConfig): UserConfigExport;
}
