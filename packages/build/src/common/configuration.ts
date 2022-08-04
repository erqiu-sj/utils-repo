/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 17:58:13
 * @LastEditTime: 2022-08-04 15:29:02
 * @Description: 
 * @FilePath: /repo/packages/build/src/common/configuration.ts
 */

import defaultsdeep from 'lodash.defaultsdeep'
import { UserConfigExport } from 'vite'
import { VitePWAOptions } from 'vite-plugin-pwa'
import { viteVConsoleOptions } from 'vite-plugin-vconsole'
import { Alias } from '../plugin/alias'
import { AutoImportApi, autoImportOptions } from '../plugin/autoImport'
import { Pwa } from '../plugin/pwa'
import { Vconsole } from '../plugin/vconsole'
import { determineConfigurationAccordingTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
import { Scenes } from './scenes'


export class ViteConfiguration {
  protected config: UserConfigExport = {}
  private scenes = new Scenes()
  private alias = new Alias()

  constructor(config?: UserConfigExport) {
    this.config = config || {}
    // 默认添加路径别名
    this.config = this.alias.analysis().getConfig(this.config)
  }

  // 设置场景
  setScenes(type: scenesTypes) {
    this.scenes.setScenes(type)
    return this
  }
  // 设置技术栈
  setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>) {
    this.scenes.setTechnologyStack(type, ops)
    defaultsdeep(this.config, this.scenes.combine().getConfig())
    return this
  }

  // 设置别名
  setAlias(aliasConfig?: { [key: string]: string }): this {
    this.config = this.alias.analysis(aliasConfig).getConfig(this.config)
    return this
  }

  // 新增vconsole配置
  addVConsole(config?: Partial<viteVConsoleOptions>): this {
    const vconsole = new Vconsole()
    this.config = vconsole.changeSetting(config).getConfig(this.config)
    return this
  }

  // 新增自动生成api接口
  addAutoImport(conf?: autoImportOptions): this {
    this.config = new AutoImportApi().configurePresets(this.scenes.getTechnologyStackTypes()).instancePlugin(conf).getConfig(this.config)
    return this
  }

  // setPwa
  addPwaConfigure(conf: Partial<VitePWAOptions>) {
    const p = new Pwa()
    this.config = p.createBasicConfiguration(conf).getConfig(this.config)
    return this
  }

  // 返回配置
  getConfig(config?: UserConfigExport): UserConfigExport {
    defaultsdeep(this.config, config)
    return this.config
  }
}
