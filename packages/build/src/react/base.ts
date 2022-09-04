/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:58:41
 * @LastEditTime: 2022-09-04 16:12:45
 * @Description:
 * @FilePath: /repo/packages/build/src/react/base.ts
 */
import react from '@vitejs/plugin-react'
import defaultsdeep from 'lodash.defaultsdeep'
import { PluginOption, UserConfig, UserConfigExport } from 'vite'
import { getGenPluginConfig } from '../common/genConfig'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { ScenarioExpectations, ScenarioExpectationsForReactDefaultOptionTypes, scenesTypes } from '../types'

export class ScenarioExpectationsForReact implements ScenarioExpectations {
  scenes: scenesTypes = 'pc'
  postcssPxToViewport: PostcssPxToViewport = new PostcssPxToViewport()

  private defaultConfig?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>

  constructor(defaultOptions?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>) {
    this.defaultConfig = defaultOptions
  }

  defaultNotConfigurable(): UserConfig {
    return {
      plugins: [react()],
    }
  }
  private getPcConfig(): UserConfig {
    return {
      plugins: [react()],
    }
  }

  private getMobileConfig(): UserConfig {
    return this.schedulingDefaultMobileConfiguration()
  }

  private schedulingDefaultMobileConfiguration(): UserConfig {
    let config: UserConfigExport = {}
    const mobileConfig = this.defaultConfig as ScenarioExpectationsForReactDefaultOptionTypes<'mobile'>
    this.postcssPxToViewport.injectionConfiguration(config, mobileConfig?.postcssPxToViewport ?? mobileConfig?.default)
    return defaultsdeep(config, this.defaultNotConfigurable())
  }

  setScene(type: scenesTypes): this {
    this.scenes = type
    return this
  }

  getConfig(): PluginOption {
    const result = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig()
    return getGenPluginConfig({
      name: 'scenesReact',
      enforce: 'pre',
      config: () => {
        return result
      },
    })
  }
}
