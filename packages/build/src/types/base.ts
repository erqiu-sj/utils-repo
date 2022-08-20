/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:37:20
 * @LastEditTime: 2022-08-20 21:41:30
 * @Description:
 * @FilePath: /repo/packages/build/src/types/base.ts
 */

import { UserConfigExport } from 'vite'
import { ViteConfiguration } from '../common/configuration'

/**
 * @description 场景
 */
export type scenesTypes = 'pc' | 'mobile'

/**
 * @description 技术栈
 */
export type technologyStackTypes = 'vue' | 'react'

export interface defaultInjectionPlugins {
  injectionConfiguration<T>(viteConfig: UserConfigExport, config?: T): UserConfigExport
}

export type eliminatePropertiesBasedTechnologyStack<T extends technologyStackTypes, curType extends object> = T extends 'vue' ? Omit<curType, ''> : Omit<curType, 'addRouteLazyLoading'>
