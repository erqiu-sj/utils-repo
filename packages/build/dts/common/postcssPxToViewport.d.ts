import { options } from 'postcss-px-to-viewport';
import { UserConfigExport } from 'vite';
import { defaultInjectionPlugins } from '../types';
export declare type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<options>;
/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export declare class PostcssPxToViewport implements defaultInjectionPlugins {
    getPlugin(ops: Partial<options>): any;
    injectionConfiguration(viteConfig: UserConfigExport, config?: injectionConfigurationWithPostcssPxToViewport): UserConfigExport;
}
