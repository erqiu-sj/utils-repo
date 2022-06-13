/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:37:20
 * @LastEditTime: 2022-06-12 19:47:04
 * @Description: 
 * @FilePath: /repo/packages/build/src/types/base.ts
 */
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
