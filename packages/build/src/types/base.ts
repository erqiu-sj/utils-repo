import { UserConfigExport } from 'vite'

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
