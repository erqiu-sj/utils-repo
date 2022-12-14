/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 21:51:41
 * @LastEditTime: 2022-12-11 02:01:34
 * @Description:
 * @FilePath: /repo/packages/build/src/types/scenes.ts
 */
import { PluginOption } from 'vite'
import { Options as vueJsxPluginOptions } from '@vitejs/plugin-vue-jsx'
import { injectionConfigurationWithPostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { scenesTypes, technologyStackTypes } from './base'
import { Options as VuePluginOptions } from '@vitejs/plugin-vue'
import { Options } from 'unplugin-vue-macros'

/**
 * @description 场景预期
 * 场景和技术栈默认配置都必须符合该场景预期
 */
export interface ScenarioExpectations {
  scenes: scenesTypes
  defaultNotConfigurable(): PluginOption // 默认不可配置
  setScene(type: scenesTypes): this
  getConfig(): PluginOption
}
export interface ScenarioExpectationsDefaultOptionsTypes {
  default: boolean
}

// vue的默认配置

export interface ScenarioExpectationsDefaultOptionsTypesWithVue {
  vueMacros: Options
  vuePlugin: VuePluginOptions
  vueJsxPlugin: vueJsxPluginOptions
}

// 判断场景配置
export type determineSceneConfiguration<P extends ScenarioExpectationsDefaultOptionsTypes, M extends ScenarioExpectationsDefaultOptionsTypes, S extends scenesTypes = 'pc'> = S extends 'pc' ? P : M
// ======================== 场景预期react默认配置 ========================

// pc下的默认配置
export interface ScenarioExpectationsForReactWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  // pc: boolean
}

// mobile下的默认配置
export interface ScenarioExpectationsForReactWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
  // postcssPxToViewport: false 时将不启用插件 反之注入 postcssPxToViewport 插件配置
  postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport
}

export type ScenarioExpectationsForReactDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<
  determineSceneConfiguration<ScenarioExpectationsForReactWithPCDefaultOptionTypes, ScenarioExpectationsForReactWithMobileDefaultOptionTypes, S>
>

// ======================== 场景预期vue默认配置 ========================
// pc下的默认配置
export interface ScenarioExpectationsForVueWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes, ScenarioExpectationsDefaultOptionsTypesWithVue {
  // pc: boolean
}
// mobile下的默认配置
export interface ScenarioExpectationsForVueWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes, ScenarioExpectationsDefaultOptionsTypesWithVue {
  // postcssPxToViewport: false 时将不启用插件 反之注入 postcssPxToViewport 插件配置
  postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport
}

// 默认配置
export type ScenarioExpectationsForVueDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<
  determineSceneConfiguration<ScenarioExpectationsForVueWithPCDefaultOptionTypes, ScenarioExpectationsForVueWithMobileDefaultOptionTypes, S>
>

// 根据技术栈判断配置
export type determineConfigurationAccordingTechnologyStack<T extends technologyStackTypes = 'vue', S extends scenesTypes = 'pc'> = T extends 'vue'
  ? ScenarioExpectationsForVueDefaultOptionTypes<S>
  : ScenarioExpectationsForReactDefaultOptionTypes<S>
