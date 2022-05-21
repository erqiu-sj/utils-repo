/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 09:21:10
 * @LastEditTime: 2022-05-21 11:25:53
 * @Description: 
 * 
 * @FilePath: /repo/project/jinkeEstate/vite.config.ts
 */
import { ViteConfiguration } from '@mx/build'
import { defineConfig } from 'vite'

const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('react', {
  postcssPxToViewport: {
    viewportWidth: 900,
    viewportHeight: 1600,
    mediaQuery: true
  }
}).getConfig({
  base: "/zt/jkmap/",
  // base: "https://actcdn.yoois.com/zt/jkmap/"
})

export default defineConfig({
  ...config,
})
