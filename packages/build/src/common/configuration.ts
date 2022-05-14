import { UserConfigExport } from 'vite'
import { determineConfigurationAccordingTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
import defaultsdeep from 'lodash.defaultsdeep'
import { Scenes } from './scenes'

export class ViteConfiguration {
  protected config: UserConfigExport = {}
  private scenes = new Scenes()

  constructor(config?: UserConfigExport) {
    this.config = config || {}
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

  getConfig(config?: UserConfigExport): UserConfigExport {
    defaultsdeep(this.config, config)
    return this.config
  }
}
