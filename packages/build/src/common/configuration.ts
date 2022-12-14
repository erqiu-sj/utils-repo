/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 17:58:13
 * @LastEditTime: 2022-12-14 17:44:45
 * @Description:
 * @FilePath: /repo/packages/build/src/common/configuration.ts
 */
import { PluginOption, UserConfig, UserConfigExport } from 'vite'
import { VitePWAOptions } from 'vite-plugin-pwa'
import { viteVConsoleOptions } from 'vite-plugin-vconsole'
import { RouteLazyLoading } from '../plugin//routeazyLoading'
import { Alias } from '../plugin/alias'
import { AutoImportApi, autoImportOptions } from '../plugin/autoImport'
import type { Options } from '../plugin/inspect'
import { Inspect } from '../plugin/inspect'
import { Pwa } from '../plugin/pwa'
import type { PluginVisualizerOptions } from '../plugin/rollupPluginVisualizer'
import { RollupPluginVisualizer } from '../plugin/rollupPluginVisualizer'
import type { VitePluginConfig } from '../plugin/unocssPlugin'
import { UnocssPlugin } from '../plugin/unocssPlugin'
import { Vconsole } from '../plugin/vconsole'
import { VitePluginPrintUrls } from '../plugin/vitePluginPrintUrls'
import { VitePluginProgress } from '../plugin/vitePluginProgress'
import { VitePluginQrcode } from '../plugin/vitePluginQrcode'
import { determineConfigurationAccordingTechnologyStack, eliminatePropertiesBasedTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
import { CommonPluginsConfig } from '../types/plugin'
import { Scenes } from './scenes'

export class ViteConfiguration {
  protected config: UserConfigExport = {}

  private scenes = new Scenes()

  private alias = new Alias()

  private plugins: PluginOption[] = []

  constructor(config?: CommonPluginsConfig) {
    // this.config = config || {}
    // 默认添加路径别名
    this.plugins.push(this.alias.analysis().plugin, new VitePluginPrintUrls().createBasicConfiguration().getPlugin(), new VitePluginProgress().createBasicConfiguration(config?.vitePluginProgress).getPlugin())
  }

  /**
   * @description 用二维码预览项目
   * @param conf
   * @returns
   */
  addQrcodePreview(conf?: Parameters<VitePluginQrcode['createBasicConfiguration']>[0]) {
    const p = new VitePluginQrcode()
    this.plugins.push(p.createBasicConfiguration(conf).getPlugin())
    return this
  }

  /**
   * @description 设置场景
   */
  setScenes(type: scenesTypes) {
    this.scenes.setScenes(type)
    return this
  }

  /**
   * @description  设置技术栈
   */
  setTechnologyStack<Ty extends technologyStackTypes, S extends scenesTypes>(type: Ty, ops?: determineConfigurationAccordingTechnologyStack<Ty, S>): eliminatePropertiesBasedTechnologyStack<Ty, this> {
    this.scenes.setTechnologyStack(type, ops)
    this.plugins.push(this.scenes.combine().getConfig())
    return this
  }

  /**
   * @description 设置别名
   */
  setAlias(aliasConfig?: { [key: string]: string }): this {
    this.plugins.push(this.alias.analysis(aliasConfig).plugin)
    return this
  }

  /**
   * @description 新增vconsole配置
   */
  addVConsole(config?: Partial<viteVConsoleOptions>): this {
    const vconsole = new Vconsole()
    this.plugins.push(vconsole.changeSetting(config).getPlugin())
    return this
  }

  /**
   * @description 新增自动生成api接口
   */
  addAutoImport(conf?: autoImportOptions): this {
    this.plugins.push(new AutoImportApi().configurePresets(this.scenes.getTechnologyStackTypes()).instancePlugin(conf).getPlugin())
    return this
  }

  // setPwa
  addPwaConfigure(conf?: Partial<VitePWAOptions>) {
    const p = new Pwa()
    this.plugins.push(p.createBasicConfiguration(conf).getPlugin())
    return this
  }

  /**
   *  @description 懒加载路由
   */
  addRouteLazyLoading(obj: object): this {
    const r = new RouteLazyLoading()
    this.plugins.push(r.addRouterConfig(obj).getPlugin())
    return this
  }

  /**
   * @description Bundle 分析
   */
  addRollupPluginVisualizer(conf?: PluginVisualizerOptions) {
    const s = new RollupPluginVisualizer()
    this.plugins.push(s.createBasicConfiguration(conf).getPlugin())
    return this
  }

  /**
   * @description 测试插件
   */
  addInspect(conf?: Options) {
    const s = new Inspect()
    this.plugins.push(s.createBasicConfiguration(conf).getPlugin())
    return this
  }

  /**
   * @description add unocssPlugin
   */
  addUnocssPlugin(conf?: VitePluginConfig) {
    const u = new UnocssPlugin()
    this.plugins.push(u.createBasicConfiguration(conf).getPlugin())
    return this
  }

  /**
   * @description 返回配置
   */
  getConfig(config?: UserConfig): UserConfigExport {
    const p = [...this.plugins, ...(config?.plugins || [])]
    this.config = {
      ...config,
      plugins: p,
    }
    return this.config
  }
}
