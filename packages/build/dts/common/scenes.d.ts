import { ScenarioExpectations, technologyStackTypes, scenesTypes, determineConfigurationAccordingTechnologyStack } from '../types';
export declare class Scenes {
    private defaultScene?;
    private scenes?;
    setScenes(type: scenesTypes): this;
    setTechnologyStack<T extends technologyStackTypes, S extends scenesTypes>(type: T, ops?: determineConfigurationAccordingTechnologyStack<T, S>): this;
    private verifyScenesThrow;
    combine(): ScenarioExpectations;
}
