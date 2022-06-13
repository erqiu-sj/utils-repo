"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 19:33:50
 * @LastEditTime: 2022-06-12 21:02:10
 * @Description:
 * @FilePath: /repo/packages/build/src/common/vconsole.ts
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
            entry: (0, path_1.resolve)("src/main.ts"),
            localEnabled: false,
            enabled: false,
            config: {
                maxLogNumber: 1000,
                theme: 'light'
            }
        };
    }
    changeSetting(conf) {
        this.config = (0, vite_plugin_vconsole_1.viteVConsole)(Object.assign(Object.assign({}, (conf || {})), this.defaultConfig()));
        return this;
    }
    getConfig(config) {
        const c = config;
        c.plugins = [...(c.plugins || []), this.config];
        // lodash.defaultsDeep  在此处无法达到预期效果
        return c;
    }
}
exports.Vconsole = Vconsole;
