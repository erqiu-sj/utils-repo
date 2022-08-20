import { UserConfigExport } from 'vite';
/**
 * @description 场景
 */
export declare type scenesTypes = 'pc' | 'mobile';
/**
 * @description 技术栈
 */
export declare type technologyStackTypes = 'vue' | 'react';
export interface defaultInjectionPlugins {
    injectionConfiguration<T>(viteConfig: UserConfigExport, config?: T): UserConfigExport;
}
export declare type eliminatePropertiesBasedTechnologyStack<T extends technologyStackTypes, curType extends object> = T extends 'vue' ? Omit<curType, ''> : Omit<curType, 'addRouteLazyLoading'>;
