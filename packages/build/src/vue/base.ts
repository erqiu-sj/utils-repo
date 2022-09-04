/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-09-04 16:17:50
 * @Description:
 * @FilePath: /repo/packages/build/src/vue/base.ts
 */
import vue from '@vitejs/plugin-vue'
import defaultsDeep from 'lodash.defaultsdeep'
import { PluginOption, UserConfig, UserConfigExport } from 'vite'
import { getGenPluginConfig } from '../common/genConfig'
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

  private getPcConfig(): UserConfig {
    const config: UserConfigExport = {}
    defaultsDeep(config, this.defaultNotConfigurable())
    return config
  }

  private getMobileConfig(): UserConfig {
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

  getConfig(): PluginOption {
    const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig()
    return options.plugins
  }
}
