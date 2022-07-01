/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:58:41
 * @LastEditTime: 2022-07-01 11:27:23
 * @Description: 
 * @FilePath: /repo/packages/build/src/react/base.ts
 */
import react from '@vitejs/plugin-react'
import defaultsdeep from 'lodash.defaultsdeep'
import { UserConfigExport } from 'vite'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { ScenarioExpectations, ScenarioExpectationsForReactDefaultOptionTypes, scenesTypes } from '../types'

export class ScenarioExpectationsForReact implements ScenarioExpectations {
  scenes: scenesTypes = 'pc'
  postcssPxToViewport: PostcssPxToViewport = new PostcssPxToViewport()

  private defaultConfig?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>

  constructor(defaultOptions?: ScenarioExpectationsForReactDefaultOptionTypes<'pc'>) {
    this.defaultConfig = defaultOptions
  }

  defaultNotConfigurable(): UserConfigExport {
    return {
      plugins: [react()],
    }
  }
  private getPcConfig(): UserConfigExport {
    return {
      plugins: [react()],
    }
  }

  private getMobileConfig(): UserConfigExport {
    return this.schedulingDefaultMobileConfiguration()
  }

  private schedulingDefaultMobileConfiguration(): UserConfigExport {
    let config: UserConfigExport = {}
    const mobileConfig = this.defaultConfig as ScenarioExpectationsForReactDefaultOptionTypes<'mobile'>
    this.postcssPxToViewport.injectionConfiguration(config, mobileConfig?.postcssPxToViewport ?? mobileConfig?.default)
    return defaultsdeep(config, this.defaultNotConfigurable())
  }

  setScene(type: scenesTypes): this {
    this.scenes = type
    return this
  }

  getConfig(): UserConfigExport {
    return this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig()
  }
}
