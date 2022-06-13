import { UserConfigExport } from 'vite';
import { ScenarioExpectations, scenesTypes, ScenarioExpectationsForReactDefaultOptionTypes } from '../types';
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport';
export declare class ScenarioExpectationsForReact implements ScenarioExpectations {
    scenes: scenesTypes;
    postcssPxToViewport: PostcssPxToViewport;
    private defaultConfig?;
    constructor(defaultOptions?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>);
    defaultNotConfigurable(): UserConfigExport;
    private getPcConfig;
    private getMobileConfig;
    private schedulingDefaultMobileConfiguration;
    setScene(type: scenesTypes): this;
    getConfig(): UserConfigExport;
}
