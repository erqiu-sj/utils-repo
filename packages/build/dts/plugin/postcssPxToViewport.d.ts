import { UserConfigExport } from 'vite';
import { defaultInjectionPlugins } from '../types';
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
    landscape: boolean;
    landscapeUnit: string;
    landscapeWidth: string;
}
export declare type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<postcssPxToViewportOptions>;
/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export declare class PostcssPxToViewport implements defaultInjectionPlugins {
    getPlugin(ops: Partial<postcssPxToViewportOptions>): any;
    injectionConfiguration(viteConfig: UserConfigExport, config?: injectionConfigurationWithPostcssPxToViewport): UserConfigExport;
}
