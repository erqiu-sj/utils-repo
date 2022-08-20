/*
 * @Author: 邱狮杰
 * @Date: 2022-06-16 17:07:17
 * @LastEditTime: 2022-08-20 21:49:59
 * @Description:
 * @FilePath: /repo/packages/build/dts/plugin/autoImport.d.ts
 */
import autoImport from 'unplugin-auto-import/index'
import { UserConfigExport } from 'vite'
import { MergeConfiguration, technologyStackTypes } from '../types'
export declare type autoImportOptions = NonNullable<Parameters<typeof autoImport.vite>[0]>
export declare class AutoImportApi extends MergeConfiguration {
  private userConfig?
  private defaultImports
  configurePresets(technologyStackTypes?: technologyStackTypes): this
  private vueImports
  private reactImports
  instancePlugin(conf?: autoImportOptions): this
  getConfig(userConfig: UserConfigExport): UserConfigExport
}
