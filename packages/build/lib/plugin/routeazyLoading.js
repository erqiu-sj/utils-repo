"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-20 17:05:20
 * @LastEditTime: 2022-08-20 21:13:09
 * @Description: 路由懒加载 适用于vue
 * @FilePath: /repo/packages/build/src/plugin/routeazyLoading.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteLazyLoading = void 0;
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const types_1 = require("../types");
class RouteLazyLoading extends types_1.MergeConfiguration {
    constructor() {
        super(...arguments);
        this.c = {};
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
        this.c = conf;
    }
    getConfig(userConfig) {
        return (0, lodash_defaultsdeep_1.default)(userConfig, this.c);
    }
}
exports.RouteLazyLoading = RouteLazyLoading;
