import { PluginOption } from 'vite';
import { Options as vueJsxPluginOptions } from '@vitejs/plugin-vue-jsx';
import { injectionConfigurationWithPostcssPxToViewport } from '../plugin/postcssPxToViewport';
import { scenesTypes, technologyStackTypes } from './base';
import { Options as VuePluginOptions } from '@vitejs/plugin-vue';
import { Options } from 'unplugin-vue-macros';
/**
 * @description 场景预期
 * 场景和技术栈默认配置都必须符合该场景预期
 */
export interface ScenarioExpectations {
    scenes: scenesTypes;
    defaultNotConfigurable(): PluginOption;
    setScene(type: scenesTypes): this;
    getConfig(): PluginOption;
}
export interface ScenarioExpectationsDefaultOptionsTypes {
    default: boolean;
}
export interface ScenarioExpectationsDefaultOptionsTypesWithVue {
    vueMacros: Options;
    vuePlugin: VuePluginOptions;
    vueJsxPlugin: vueJsxPluginOptions;
}
export declare type determineSceneConfiguration<P extends ScenarioExpectationsDefaultOptionsTypes, M extends ScenarioExpectationsDefaultOptionsTypes, S extends scenesTypes = 'pc'> = S extends 'pc' ? P : M;
export interface ScenarioExpectationsForReactWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
}
export interface ScenarioExpectationsForReactWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes {
    postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport;
}
export declare type ScenarioExpectationsForReactDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<determineSceneConfiguration<ScenarioExpectationsForReactWithPCDefaultOptionTypes, ScenarioExpectationsForReactWithMobileDefaultOptionTypes, S>>;
export interface ScenarioExpectationsForVueWithPCDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes, ScenarioExpectationsDefaultOptionsTypesWithVue {
}
export interface ScenarioExpectationsForVueWithMobileDefaultOptionTypes extends ScenarioExpectationsDefaultOptionsTypes, ScenarioExpectationsDefaultOptionsTypesWithVue {
    postcssPxToViewport: injectionConfigurationWithPostcssPxToViewport;
}
export declare type ScenarioExpectationsForVueDefaultOptionTypes<S extends scenesTypes = 'pc'> = Partial<determineSceneConfiguration<ScenarioExpectationsForVueWithPCDefaultOptionTypes, ScenarioExpectationsForVueWithMobileDefaultOptionTypes, S>>;
export declare type determineConfigurationAccordingTechnologyStack<T extends technologyStackTypes = 'vue', S extends scenesTypes = 'pc'> = T extends 'vue' ? ScenarioExpectationsForVueDefaultOptionTypes<S> : ScenarioExpectationsForReactDefaultOptionTypes<S>;
