import { UserConfig, UserConfigExport } from 'vite';
import { VitePWAOptions } from 'vite-plugin-pwa';
import { viteVConsoleOptions } from 'vite-plugin-vconsole';
import { autoImportOptions } from '../plugin/autoImport';
import type { Options } from '../plugin/inspect';
import type { PluginVisualizerOptions } from '../plugin/rollupPluginVisualizer';
import type { VitePluginConfig } from '../plugin/unocssPlugin';
import { VitePluginQrcode } from '../plugin/vitePluginQrcode';
import { determineConfigurationAccordingTechnologyStack, eliminatePropertiesBasedTechnologyStack, scenesTypes, technologyStackTypes } from '../types';
import { CommonPluginsConfig } from '../types/plugin';
export declare class ViteConfiguration {
    protected config: UserConfigExport;
    private scenes;
    private alias;
    private plugins;
    constructor(config?: CommonPluginsConfig);
    /**
     * @description 用二维码预览项目
     * @param conf
     * @returns
     */
    addQrcodePreview(conf?: Parameters<VitePluginQrcode['createBasicConfiguration']>[0]): this;
    /**
     * @description 设置场景
     */
    setScenes(type: scenesTypes): this;
    /**
     * @description  设置技术栈
     */
    setTechnologyStack<Ty extends technologyStackTypes, S extends scenesTypes>(type: Ty, ops?: determineConfigurationAccordingTechnologyStack<Ty, S>): eliminatePropertiesBasedTechnologyStack<Ty, this>;
    /**
     * @description 设置别名
     */
    setAlias(aliasConfig?: {
        [key: string]: string;
    }): this;
    /**
     * @description 新增vconsole配置
     */
    addVConsole(config?: Partial<viteVConsoleOptions>): this;
    /**
     * @description 新增自动生成api接口
     */
    addAutoImport(conf?: autoImportOptions): this;
    addPwaConfigure(conf?: Partial<VitePWAOptions>): this;
    /**
     *  @description 懒加载路由
     */
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
    /**
     * @description 返回配置
     */
    getConfig(config?: UserConfig): UserConfigExport;
}
