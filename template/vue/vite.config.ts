import { defineConfig } from 'vite'
import { ViteConfiguration } from '@mx/build'

export default defineConfig({
  ...new ViteConfiguration().setScenes('mobile').setTechnologyStack('vue', {}).getConfig({}),
})
