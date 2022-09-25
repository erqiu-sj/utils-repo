import { PluginOption } from 'vite';
export interface postcssPxToViewportOptions {
    unitToConvert: string;
    viewportWidth: number;
    viewportHeight: number;
    unitPrecision: number;
    viewportUnit: string;
    fontViewportUnit: string;
    selectorBlackList: string[];
    propList: string[];
    minPixelValue: number;
    mediaQuery: boolean;
    replace: boolean;
    exclude: string[];
    landscape: boolean;
    landscapeUnit: string;
    landscapeWidth: string;
}
export declare type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<postcssPxToViewportOptions>;
/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export declare class PostcssPxToViewport {
    private ops;
    getPlugin(ops: Partial<postcssPxToViewportOptions>): any;
    injectionConfiguration(config?: injectionConfigurationWithPostcssPxToViewport): PluginOption;
}
