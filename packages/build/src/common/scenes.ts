import { ScenarioExpectations, technologyStackTypes, scenesTypes, determineConfigurationAccordingTechnologyStack } from '../types'
import { ScenarioExpectationsForVue } from '../vue/base'
import { ScenarioExpectationsForReact } from '../react/base'

export class Scenes {
  private defaultScene?: ScenarioExpectations
  private scenes?: scenesTypes

  setScenes(type: scenesTypes) {
    this.scenes = type
    return this
  }

  // 设置技术栈
  setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>) {
    if (type === 'react') this.defaultScene = new ScenarioExpectationsForReact(ops)
    if (type === 'vue') this.defaultScene = new ScenarioExpectationsForVue(ops)
    return this
  }

  private verifyScenesThrow() {
    if (!this.scenes) throw new Error('not set scenes')
    if (!this.defaultScene) throw new Error('not set technology stack')
  }

  // 默认值
  combine(): ScenarioExpectations {
    this.verifyScenesThrow()
    return this.defaultScene?.setScene?.(this.scenes as scenesTypes) as ScenarioExpectations
  }
}
