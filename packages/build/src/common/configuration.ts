/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 17:58:13
 * @LastEditTime: 2022-09-04 16:18:16
 * @Description:
 * @FilePath: /repo/packages/build/src/common/configuration.ts
 */

import defaultsdeep from 'lodash.defaultsdeep'
import { PluginOption, UserConfig, UserConfigExport } from 'vite'
import { VitePWAOptions } from 'vite-plugin-pwa'
import { viteVConsoleOptions } from 'vite-plugin-vconsole'
import { RouteLazyLoading } from '../plugin//routeazyLoading'
import { Alias } from '../plugin/alias'
import { AutoImportApi, autoImportOptions } from '../plugin/autoImport'
import { Pwa } from '../plugin/pwa'
import { Vconsole } from '../plugin/vconsole'
import { determineConfigurationAccordingTechnologyStack, eliminatePropertiesBasedTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
import { Scenes } from './scenes'

export class ViteConfiguration<T extends technologyStackTypes> {
  protected config: UserConfigExport = {}

  private scenes = new Scenes()

  private alias = new Alias()

  private plugins: PluginOption[] = []

  constructor(config?: UserConfigExport) {
    this.config = config || {}
    // 默认添加路径别名
    this.plugins.push(this.alias.analysis().plugin)
  }

  // 设置场景
  setScenes(type: scenesTypes) {
    this.scenes.setScenes(type)
    return this
  }
  // 设置技术栈
  setTechnologyStack<Ty extends technologyStackTypes, S extends scenesTypes>(type: Ty, ops?: determineConfigurationAccordingTechnologyStack<Ty, S>): eliminatePropertiesBasedTechnologyStack<Ty, this> {
    this.scenes.setTechnologyStack(type, ops)
    this.plugins.push(this.scenes.combine().getConfig())
    return this
  }

  // 设置别名
  setAlias(aliasConfig?: { [key: string]: string }): this {
    this.plugins.push(this.alias.analysis(aliasConfig).plugin)
    return this
  }

  // 新增vconsole配置
  addVConsole(config?: Partial<viteVConsoleOptions>): this {
    const vconsole = new Vconsole()
    this.plugins.push(vconsole.changeSetting(config).getPlugin())
    return this
  }

  // 新增自动生成api接口
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

  //
  addRouteLazyLoading(obj: object): this {
    const r = new RouteLazyLoading()
    this.plugins.push(r.addRouterConfig(obj).getPlugin())
    return this
  }

  // 返回配置
  getConfig(config?: UserConfig): UserConfigExport {
    const p = [...this.plugins, ...(config?.plugins || [])]
    this.config = {
      ...config,
      plugins: p,
    }
    return this.config
  }
}
