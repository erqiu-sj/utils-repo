/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-07-01 11:26:47
 * @Description: 
 * @FilePath: /repo/packages/build/src/vue/base.ts
 */
import vue from '@vitejs/plugin-vue'
import defaultsDeep from 'lodash.defaultsdeep'
import { UserConfigExport } from 'vite'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { scenesTypes } from '../types/base'
import { ScenarioExpectations, ScenarioExpectationsForVueDefaultOptionTypes } from '../types/scenes'

export class ScenarioExpectationsForVue implements ScenarioExpectations {
  scenes: scenesTypes = 'pc'
  postcssPxToViewport: PostcssPxToViewport = new PostcssPxToViewport()

  private defaultConfig?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>

  constructor(defaultOptions?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>) {
    this.defaultConfig = defaultOptions
  }
  defaultNotConfigurable(): UserConfigExport {
    return {
      plugins: [vue()],
    }
  }
  setScene(type: scenesTypes): this {
    this.scenes = type
    return this
  }

  private getPcConfig(): UserConfigExport {
    const config: UserConfigExport = {}
    defaultsDeep(config, this.defaultNotConfigurable())
    return config
  }

  private getMobileConfig(): UserConfigExport {
    const config: UserConfigExport = {}
    defaultsDeep(config, this.schedulingDefaultMobileConfiguration(), this.defaultNotConfigurable())
    return config
  }

  private schedulingDefaultMobileConfiguration() {
    let config: UserConfigExport = {}
    const mobileConfig = this.defaultConfig as ScenarioExpectationsForVueDefaultOptionTypes<'mobile'>
    this.postcssPxToViewport.injectionConfiguration(config, mobileConfig?.postcssPxToViewport ?? mobileConfig?.default)
    return config
  }

  getConfig(): UserConfigExport {
    const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig()
    return options
  }
}
