/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 22:54:33
 * @LastEditTime: 2022-09-25 11:54:43
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/postcssPxToViewport.ts
 */
import plugin from 'postcss-px-to-viewport'
import { Plugin, PluginOption } from 'vite'

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
  exclude: string[]
  landscape: boolean
  landscapeUnit: string
  landscapeWidth: string
}

export type injectionConfigurationWithPostcssPxToViewport = boolean | Partial<postcssPxToViewportOptions>

/**
 * @description 适用于mobile的px转vw的postcss插件
 */
export class PostcssPxToViewport {
  private ops = {
    unitToConvert: 'px', // 要转化的单位
    viewportWidth: 1080, // UI设计稿的宽度
    unitPrecision: 6, // 转换后的精度，即小数点位数
    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
    selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
    replace: true, // 是否转换后直接更换属性值
    // @ts-ignore
    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    landscape: false, // 是否处理横屏情况
  }

  getPlugin(ops: Partial<postcssPxToViewportOptions>) {
    return plugin({ ...this.ops, ...ops })
  }

  injectionConfiguration(config?: injectionConfigurationWithPostcssPxToViewport): PluginOption {
    if (config === false) return []
    // 显式拒绝配置 才跳过配置
    const plugin: Plugin = {
      name: '@mxnet/postcssPxToViewport',
      config: () => {
        return {
          css: {
            postcss: {
              plugins: [this.getPlugin(config as Partial<postcssPxToViewportOptions>)],
            },
          },
        }
      },
    }

    return plugin
  }
}
