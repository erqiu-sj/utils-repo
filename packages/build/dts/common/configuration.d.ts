import { UserConfigExport } from 'vite'
import { determineConfigurationAccordingTechnologyStack, scenesTypes, technologyStackTypes } from '../types'
export declare class ViteConfiguration {
  protected config: UserConfigExport
  private scenes
  constructor(config?: UserConfigExport)
  setScenes(type: scenesTypes): this
  setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>): this
  getConfig(config?: UserConfigExport): UserConfigExport
}
