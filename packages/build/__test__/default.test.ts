/*
 * @Author: 邱狮杰
 * @Date: 2022-05-13 12:56:23
 * @LastEditTime: 2022-12-14 16:13:40
 * @Description:
 * @FilePath: /repo/packages/build/__test__/default.test.ts
 */
import { UserConfig } from 'vite'
import { describe, expect, it } from 'vitest'
import { ViteConfiguration } from '../src/index'
import { whetherPlugInsExist } from './test.helper'

const postcssPxToViewportName = '@mxnet/postcssPxToViewport'

describe('vue default config', () => {

  describe('mobile mode', () => {

    it('reject injection', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'vue', 'mobile'>('vue', { default: false })

      const getConfig = config.getConfig() as UserConfig
      // 返回值不为空
      expect(config.getConfig()).toBeDefined()
      expect(whetherPlugInsExist(getConfig.plugins, postcssPxToViewportName)).toBe(-1)
    })

    it('default configuration is injected into postcss plugins -- postcss px to viewport', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue')
      const getConfig = config.getConfig() as UserConfig
      // 返回值不为空
      expect(config.getConfig()).toBeDefined()
      // in mobile 默认注入postcss配置
      expect(
        whetherPlugInsExist(getConfig.plugins, postcssPxToViewportName)
      ).not.toBe(-1)
    })
  })
})

describe('react default config', () => {
  describe('mobile mode', () => {
    it('reject injection', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'react', 'mobile'>('react', { default: false })
      const getConfig = config.getConfig() as UserConfig
      // 返回值不为空
      expect(getConfig).toBeDefined()
      expect(
        whetherPlugInsExist(getConfig.plugins, postcssPxToViewportName)
      ).toBe(-1)
    })

    it('default configuration is injected into postcss plugins -- postcss px to viewport', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('react')
      const getConfig = config.getConfig() as UserConfig
      // 返回值不为空
      expect(getConfig).toBeDefined()
      // in mobile 默认注入postcss配置
      expect(
        whetherPlugInsExist(getConfig.plugins, postcssPxToViewportName)
      ).not.toBe(-1)
    })
  })
})
