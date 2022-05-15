import { defineConfig } from 'vite'
import { ViteConfiguration } from '@mx/build'

const config = new ViteConfiguration()
  .setScenes('mobile')
  .setTechnologyStack<'react', 'mobile'>('react', {
    postcssPxToViewport: {
      viewportWidth: 1080,
      viewportHeight: 2330,
    },
  })
  .getConfig({})

export default defineConfig({
  ...config,
})
