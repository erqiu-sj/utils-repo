/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-06-13 10:57:22
 * @Description: 
 * @FilePath: /newHepoyogurt/vite.config.ts
 */
import { ViteConfiguration } from '@mxnet/build'
import { defineConfig } from 'vite'

const config = new ViteConfiguration()
  .setScenes('mobile')
  .setTechnologyStack<'react', 'mobile'>('react', {
    postcssPxToViewport: {
      viewportWidth: 1080,
      viewportHeight: 2330,
      mediaQuery: true
    },
  })
  .getConfig({
    base: "/zt/qr3/"
  })
export default defineConfig({
  ...config,
})
