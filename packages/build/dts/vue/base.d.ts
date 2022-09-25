import { PluginOption } from 'vite';
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport';
import { scenesTypes } from '../types/base';
import { ScenarioExpectations, ScenarioExpectationsForVueDefaultOptionTypes } from '../types/scenes';
export declare class ScenarioExpectationsForVue implements ScenarioExpectations {
    scenes: scenesTypes;
    postcssPxToViewport: PostcssPxToViewport;
    private defaultConfig?;
    constructor(defaultOptions?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>);
    defaultNotConfigurable(): PluginOption;
    setScene(type: scenesTypes): this;
    private getPcConfig;
    private getMobileConfig;
    private schedulingDefaultMobileConfiguration;
    getConfig(): PluginOption;
}
