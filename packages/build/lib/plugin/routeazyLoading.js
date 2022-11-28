"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 17:05:20
 * @LastEditTime: 2022-11-27 17:04:02
 * @Description: 路由懒加载 适用于vue
 * @FilePath: /repo/packages/build/src/plugin/routeazyLoading.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteLazyLoading = void 0;
const genConfig_1 = require("../common/genConfig");
class RouteLazyLoading {
    constructor() {
        this.plugins = null;
    }
    addRouterConfig(obj) {
        const conf = {
            build: {
                rollupOptions: {
                    output: {
                        manualChunks: Object.assign({}, obj),
                    },
                },
            },
        };
        this.plugins = (0, genConfig_1.getGenPluginConfig)({
            name: 'routeLazyLoading',
            config: () => {
                return conf;
            },
        });
        return this;
    }
    getPlugin() {
        return this.plugins;
    }
}
exports.RouteLazyLoading = RouteLazyLoading;
