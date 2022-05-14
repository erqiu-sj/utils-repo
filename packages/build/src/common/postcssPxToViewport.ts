import plugin, { options } from 'postcss-px-to-viewport'
import { UserConfigExport } from 'vite'
import defaultsdeep from 'lodash.defaultsdeep'
import { defaultInjectionPlugins } from '../types'

export type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<options>

/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export class PostcssPxToViewport implements defaultInjectionPlugins {
  getPlugin(ops: Partial<options>) {
    return plugin(ops)
  }

  injectionConfiguration(viteConfig: UserConfigExport, config?: injectionConfigurationWithPostcssPxToViewport): UserConfigExport {
    // 显式拒绝配置 才跳过配置
    if (config === false) return viteConfig
    const ownConfig: UserConfigExport = {
      css: {
        postcss: {
          plugins: [this.getPlugin(config as Partial<options>)],
        },
      },
    }
    defaultsdeep(viteConfig, ownConfig)
    return viteConfig
  }
}
