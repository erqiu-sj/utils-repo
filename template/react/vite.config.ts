import { defineConfig } from 'vite'
import { ViteConfiguration } from '@mx/build'

const config = new ViteConfiguration().setScenes('mobile').setTechnologyStack('react').getConfig({})

export default defineConfig({
  ...config,
})
