"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:33:50
 * @LastEditTime: 2022-11-27 17:04:18
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/vconsole.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vconsole = void 0;
const path_1 = require("path");
const vite_plugin_vconsole_1 = require("vite-plugin-vconsole");
class Vconsole {
    constructor() {
        this.config = undefined;
    }
    defaultConfig() {
        return {
            entry: (0, path_1.resolve)('src/main.ts'),
            localEnabled: false,
            enabled: false,
            config: {
                maxLogNumber: 1000,
                theme: 'light',
            },
        };
    }
    changeSetting(conf) {
        this.config = (0, vite_plugin_vconsole_1.viteVConsole)(Object.assign(Object.assign({}, (conf || {})), this.defaultConfig()));
        return this;
    }
    getPlugin() {
        return this.config;
    }
}
exports.Vconsole = Vconsole;
