import { UserConfigExport } from 'vite'
import { scenesTypes, technologyStackTypes } from './base'
import { injectionConfigurationWithPostcssPxToViewport } from '../common/postcssPxToViewport'
/**
 * @description 场景预期
 * 场景和技术栈默认配置都必须符合该场景预期
 */
export interface ScenarioExpectations {
  scenes: scenesTypes
  defaultNotConfigurable(): UserConfigExport
  setScene(type: scenesTypes): this
  getConfig(): UserConfigExport
}
export interface ScenarioExpectationsDefaultOptionsTypes {
  default: boolean
}
export declare type determineSceneConfiguration<P extends ScenarioExpectationsDefaultOptionsTypes, M extends ScenarioExpectationsDefaultOptionsTypes, S extends scenesTypes = 'pc'> = S extends 'pc' ? P : M
export interface ScenarioExpectationsForReactWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  pc: boolean
}
export interface ScenarioExpectationsForReactWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport
}
export declare type ScenarioExpectationsForReactDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<
  determineSceneConfiguration<ScenarioExpectationsForReactWithPCDefaultOptionTypes, ScenarioExpectationsForReactWithMobileDefaultOptionTypes, S>
>
export interface ScenarioExpectationsForVueWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  pc: boolean
}
export interface ScenarioExpectationsForVueWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport
}
export declare type ScenarioExpectationsForVueDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<
  determineSceneConfiguration<ScenarioExpectationsForVueWithPCDefaultOptionTypes, ScenarioExpectationsForVueWithMobileDefaultOptionTypes, S>
>
export declare type determineConfigurationAccordingTechnologyStack<T extends technologyStackTypes = 'vue', S extends scenesTypes = 'pc'> = T extends 'vue'
  ? ScenarioExpectationsForVueDefaultOptionTypes<S>
  : ScenarioExpectationsForReactDefaultOptionTypes<S>
