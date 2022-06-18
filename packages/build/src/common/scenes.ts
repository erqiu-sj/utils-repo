/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:51:08
 * @LastEditTime: 2022-06-16 16:46:29
 * @Description: 
 * @FilePath: /repo/packages/build/src/common/scenes.ts
 */
import { ScenarioExpectationsForReact } from '../react/base'
import { determineConfigurationAccordingTechnologyStack, ScenarioExpectations, scenesTypes, technologyStackTypes } from '../types'
import { ScenarioExpectationsForVue } from '../vue/base'

export class Scenes {
  private defaultScene?: ScenarioExpectations
  private scenes?: scenesTypes
  private technologyStackTypes?: technologyStackTypes

  setScenes(type: scenesTypes) {
    this.scenes = type
    return this
  }

  // 设置技术栈
  setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>) {
    this.technologyStackTypes = type
    if (type === 'react') this.defaultScene = new ScenarioExpectationsForReact(ops)
    if (type === 'vue') this.defaultScene = new ScenarioExpectationsForVue(ops)
    return this
  }

  private verifyScenesThrow() {
    if (!this.scenes) throw new Error('not set scenes')
    if (!this.defaultScene) throw new Error('not set technology stack')
  }

  getTechnologyStackTypes(): technologyStackTypes | undefined {
    return this.technologyStackTypes
  }

  // 默认值
  combine(): ScenarioExpectations {
    this.verifyScenesThrow()
    return this.defaultScene?.setScene?.(this.scenes as scenesTypes) as ScenarioExpectations
  }
}
