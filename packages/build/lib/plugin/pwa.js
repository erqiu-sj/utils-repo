"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-04 15:18:03
 * @LastEditTime: 2022-11-27 17:04:50
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/pwa.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pwa = void 0;
const vite_plugin_pwa_1 = require("vite-plugin-pwa");
class Pwa {
    constructor() {
        this.defaultConfigure = {
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,ttf}'],
            },
        };
        this.plugin = null;
    }
    createBasicConfiguration(conf) {
        this.plugin = (0, vite_plugin_pwa_1.VitePWA)(Object.assign({}, conf, this.defaultConfigure));
        return this;
    }
    getPlugin() {
        return this.plugin;
    }
}
exports.Pwa = Pwa;
