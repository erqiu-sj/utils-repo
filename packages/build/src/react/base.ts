/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:58:41
 * @LastEditTime: 2022-09-24 22:52:27
 * @Description:
 * @FilePath: /repo/packages/build/src/react/base.ts
 */
import react from '@vitejs/plugin-react'
import { PluginOption, UserConfig } from 'vite'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { ScenarioExpectations, ScenarioExpectationsForReactDefaultOptionTypes, scenesTypes } from '../types'

export class ScenarioExpectationsForReact implements ScenarioExpectations {
  scenes: scenesTypes = 'pc'
  postcssPxToViewport: PostcssPxToViewport = new PostcssPxToViewport()

  private defaultConfig?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>

  constructor(defaultOptions?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>) {
    this.defaultConfig = defaultOptions
  }

  defaultNotConfigurable(): PluginOption {
    return [react()]
  }

  private getPcConfig(): UserConfig {
    return {
      plugins: [react()],
    }
  }

  private getMobileConfig(): PluginOption {
    return [this.defaultNotConfigurable(), this.schedulingDefaultMobileConfiguration()]
  }

  private schedulingDefaultMobileConfiguration(): PluginOption {
    const mobileConfig = this.defaultConfig as ScenarioExpectationsForReactDefaultOptionTypes<'mobile'>
    return this.postcssPxToViewport.injectionConfiguration(mobileConfig?.postcssPxToViewport ?? mobileConfig?.default)
  }

  setScene(type: scenesTypes): this {
    this.scenes = type
    return this
  }

  getConfig(): PluginOption {
    const result = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig().plugins
    return [result]
  }
}
