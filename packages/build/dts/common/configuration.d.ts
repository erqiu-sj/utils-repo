import { UserConfig, UserConfigExport } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { viteVConsoleOptions } from 'vite-plugin-vconsole';
import { autoImportOptions } from '../plugin/autoImport';
import type { Options } from '../plugin/inspect';
import type { PluginVisualizerOptions } from '../plugin/rollupPluginVisualizer';
import type { VitePluginConfig } from '../plugin/unocssPlugin';
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
    /**
     * @description Bundle 分析
     */
    addRollupPluginVisualizer(conf?: PluginVisualizerOptions): this;
    /**
     * @description 测试插件
     */
    addInspect(conf?: Options): this;
    /**
     * @description add unocssPlugin
     */
    addUnocssPlugin(conf?: VitePluginConfig): this;
    getConfig(config?: UserConfig): UserConfigExport;
}
