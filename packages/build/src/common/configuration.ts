import { UserConfigExport } from 'vite'
import { determineConfigurationAccordingTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
import defaultsdeep from 'lodash.defaultsdeep'
import { Scenes } from './scenes'
import { Alias } from './alias'

export class ViteConfiguration {
  protected config: UserConfigExport = {}
  private scenes = new Scenes()
  private alias = new Alias()

  constructor(config?: UserConfigExport) {
    this.config = config || {}
    // 默认添加路径别名
    defaultsdeep(this.config, this.alias.analysis().getConfig())
  }

  setScenes(type: scenesTypes) {
    this.scenes.setScenes(type)
    return this
  }

  setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>) {
    this.scenes.setTechnologyStack(type, ops)
    defaultsdeep(this.config, this.scenes.combine().getConfig())
    return this
  }

  setAlias(aliasConfig?: { [key: string]: string }): this {
    defaultsdeep(this.config, this.alias.analysis(aliasConfig).getConfig())
    return this
  }

  getConfig(config?: UserConfigExport): UserConfigExport {
    defaultsdeep(this.config, config)
    return this.config
  }
}
