import { defineConfig } from 'vite'
import { ViteConfiguration } from 'build'

export default defineConfig({
  ...new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue', {}).getConfig(),
})
