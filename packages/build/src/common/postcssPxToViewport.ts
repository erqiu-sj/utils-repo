import plugin from 'postcss-px-to-viewport'
import { UserConfigExport } from 'vite'
import defaultsdeep from 'lodash.defaultsdeep'
import { defaultInjectionPlugins } from '../types'

export interface postcssPxToViewportOptions {
  unitToConvert: string // 默认值`px`，需要转换的单位
  viewportWidth: number //视窗的宽度，对应的是我们设计稿的宽度
  viewportHeight: number // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
  unitPrecision: number //指定`px`转换为视窗单位值的小数位数，默认是5(很多时候无法整除)
  viewportUnit: string //指定需要转换成的视窗单位，建议使用vw
  fontViewportUnit: string //指定字体需要转换成的视窗单位，默认vw;
  selectorBlackList: string[] //指定不转换为视窗单位的类
  propList: string[]
  minPixelValue: number // 小于或等于`1px`不转换为视窗单位
  mediaQuery: boolean // 允许在媒体查询中转换`px`，默认false
  replace: boolean
  landscape: boolean
  landscapeUnit: string
  landscapeWidth: string
}

export type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<postcssPxToViewportOptions>

/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export class PostcssPxToViewport implements defaultInjectionPlugins {
  getPlugin(ops: Partial<postcssPxToViewportOptions>) {
    return plugin(ops)
  }

  injectionConfiguration(viteConfig: UserConfigExport, config?: injectionConfigurationWithPostcssPxToViewport): UserConfigExport {
    // 显式拒绝配置 才跳过配置
    if (config === false) return viteConfig
    const ownConfig: UserConfigExport = {
      css: {
        postcss: {
          plugins: [this.getPlugin(config as Partial<postcssPxToViewportOptions>)],
        },
      },
    }
    defaultsdeep(viteConfig, ownConfig)
    return viteConfig
  }
}
