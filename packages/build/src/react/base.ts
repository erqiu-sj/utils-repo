import { UserConfigExport } from 'vite'
import { ScenarioExpectations, scenesTypes, ScenarioExpectationsForReactDefaultOptionTypes } from '../types'
import defaultsdeep from 'lodash.defaultsdeep'
import { PostcssPxToViewport } from '../common/postcssPxToViewport'
import react from '@vitejs/plugin-react'

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
    return {}
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
