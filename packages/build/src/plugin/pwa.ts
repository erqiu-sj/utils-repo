/*
 * @Author: 邱狮杰
 * @Date: 2022-08-04 15:18:03
 * @LastEditTime: 2022-12-10 23:08:42
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/pwa.ts
 */

import { Plugin } from 'vite'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { MergeConfiguration } from '../types'

export class Pwa implements MergeConfiguration<VitePWAOptions> {
  private defaultConfigure: Partial<VitePWAOptions> = {
    injectRegister: 'auto',
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,ttf}'],
    },
  }

  private plugin: Plugin[] | null = null

  createBasicConfiguration(conf?: Partial<VitePWAOptions>) {
    this.plugin = VitePWA(Object.assign({}, conf, this.defaultConfigure))
    return this
  }

  getPlugin() {
    return this.plugin
  }
}
