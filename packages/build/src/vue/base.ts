/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-12-14 16:39:21
 * @Description:
 * @FilePath: /repo/packages/build/src/vue/base.ts
 */

import vue from '@vitejs/plugin-vue'
import { Options } from 'unplugin-vue-macros'
import { PluginOption } from 'vite'
import { PostcssPxToViewport } from '../plugin/postcssPxToViewport'
import { VueJSX } from '../plugin/vuejsx'
import { VueMacro } from '../plugin/vueMacro'
import { scenesTypes } from '../types/base'
import { ScenarioExpectations, ScenarioExpectationsForVueDefaultOptionTypes } from '../types/scenes'

export class ScenarioExpectationsForVue implements ScenarioExpectations {
  scenes: scenesTypes = 'pc'
  postcssPxToViewport: PostcssPxToViewport = new PostcssPxToViewport()

  private defaultConfig?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>

  constructor(defaultOptions?: ScenarioExpectationsForVueDefaultOptionTypes<'pc'>) {
    this.defaultConfig = defaultOptions
  }

  defaultNotConfigurable(): PluginOption {
    const def: Options = {
      plugins: {
        vue: vue(this.defaultConfig?.default ? {} : this.defaultConfig?.vuePlugin),
      },
    }

    const result = [
      ...(new VueMacro().createBasicConfiguration(this.defaultConfig?.default ? def : Object.assign({}, this.defaultConfig?.vueMacros, def)).getPlugin() || []),
      new VueJSX().createBasicConfiguration(this.defaultConfig?.default ? {} : this.defaultConfig?.vueJsxPlugin).getPlugin(),
    ]
    return result
  }

  setScene(type: scenesTypes): this {
    this.scenes = type
    return this
  }

  private getPcConfig(): PluginOption {
    return this.defaultNotConfigurable()
  }

  private getMobileConfig(): PluginOption {
    return [this.defaultNotConfigurable(), this.schedulingDefaultMobileConfiguration()]
  }

  private schedulingDefaultMobileConfiguration() {
    const mobileConfig = this.defaultConfig as ScenarioExpectationsForVueDefaultOptionTypes<'mobile'>
    return [this.postcssPxToViewport.injectionConfiguration(mobileConfig?.postcssPxToViewport ?? mobileConfig?.default)]
  }

  private dispatchingVueMacros() {
    return
  }

  getConfig(): PluginOption {
    const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig()
    return options
  }
}
