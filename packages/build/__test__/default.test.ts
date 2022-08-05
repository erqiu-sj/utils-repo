import { describe, it, expect } from 'vitest'
import { UserConfig } from 'vite'
import { ViteConfiguration } from '../src/index'

describe('vue default config', () => {
  describe('mobile mode', () => {
    it('reject injection', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack<'vue', 'mobile'>('vue', { default: false })
      // 返回值不为空
      expect(config.getConfig()).toBeDefined()
      expect((config.getConfig() as UserConfig).plugins).toHaveLength(1)
    })

    it('default configuration is injected into postcss plugins -- postcss px to viewport', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue')
      // 返回值不为空
      expect(config.getConfig()).toBeDefined()
      // in mobile 默认注入postcss配置
      expect(((config.getConfig() as UserConfig)?.css?.postcss as { plugins: unknown[] })?.plugins).toHaveLength(1)
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
      expect(getConfig.plugins).toHaveLength(1)
    })

    it('default configuration is injected into postcss plugins -- postcss px to viewport', () => {
      const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('react')
      const getConfig = config.getConfig() as UserConfig
      // 返回值不为空
      expect(getConfig).toBeDefined()
      // in mobile 默认注入postcss配置
      expect(((config.getConfig() as UserConfig)?.css?.postcss as { plugins: unknown[] })?.plugins).toHaveLength(1)
    })
  })
})
