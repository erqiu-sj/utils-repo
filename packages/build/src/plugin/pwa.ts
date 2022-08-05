/*
 * @Author: 邱狮杰
 * @Date: 2022-08-04 15:18:03
 * @LastEditTime: 2022-08-04 21:39:41
 * @Description: 
 * @FilePath: /repo/packages/build/src/plugin/pwa.ts
 */

import { Plugin, UserConfig, UserConfigExport } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { MergeConfiguration } from '../types';

export class Pwa implements MergeConfiguration {
    private defaultConfigure: Partial<VitePWAOptions> = {
        injectRegister: 'auto',
        registerType: 'autoUpdate',
        workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,ttf}']
        }
    }

    private plugin: Plugin[] | null = null

    createBasicConfiguration(conf?: Partial<VitePWAOptions>) {
        this.plugin = VitePWA(Object.assign({}, conf, this.defaultConfigure))
        return this
    }

    getConfig(userConfig: UserConfigExport): UserConfigExport {
        const c = userConfig as UserConfig
        c.plugins = [...(c.plugins || []), this.plugin]
        return userConfig
    }
}