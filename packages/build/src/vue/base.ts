import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { ScenarioExpectations, ScenarioExpectationsForVueDefaultOptionTypes } from '../types/scenes'
import { scenesTypes } from '../types/base'
import defaultsDeep from 'lodash.defaultsdeep'

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
    return {}
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
