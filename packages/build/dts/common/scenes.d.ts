import { determineConfigurationAccordingTechnologyStack, ScenarioExpectations, scenesTypes, technologyStackTypes } from '../types';
export declare class Scenes {
    private defaultScene?;
    private scenes?;
    private technologyStackTypes?;
    setScenes(type: scenesTypes): this;
    setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>): this;
    private verifyScenesThrow;
    getTechnologyStackTypes(): technologyStackTypes | undefined;
    combine(): ScenarioExpectations;
}
