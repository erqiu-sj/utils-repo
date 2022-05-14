import { Plugin, UserConfigExport } from 'vite';
import { PostcssPxToViewport } from '../common/postcssPxToViewport';
import { ScenarioExpectations, ScenarioExpectationsForVueDefaultOptionTypes } from '../types/scenes';
import { scenesTypes } from '../types/base';
export declare class ScenarioExpectationsForVue implements ScenarioExpectations {
    scenes: scenesTypes;
    postcssPxToViewport: PostcssPxToViewport;
    private defaultConfig?;
    constructor(defaultOptions?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>);
    defaultNotConfigurable(): UserConfigExport;
    setScene(type: scenesTypes): this;
    private getPcConfig;
    private getMobileConfig;
    private schedulingDefaultMobileConfiguration;
    getConfig(): UserConfigExport;
}
/**
 * @description 返回基本的配置文件
 * @returns
 */
export declare function getBasePluginsForVue(): Plugin[];
