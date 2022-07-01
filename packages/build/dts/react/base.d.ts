import { UserConfigExport } from 'vite';
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport';
import { ScenarioExpectations, ScenarioExpectationsForReactDefaultOptionTypes, scenesTypes } from '../types';
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
