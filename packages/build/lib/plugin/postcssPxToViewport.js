"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostcssPxToViewport = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 22:54:33
 * @LastEditTime: 2022-09-25 11:54:43
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/postcssPxToViewport.ts
 */
const postcss_px_to_viewport_1 = __importDefault(require("postcss-px-to-viewport"));
/**
 * @description 适用于mobile的px转vw的postcss插件
 */
class PostcssPxToViewport {
    constructor() {
        this.ops = {
            unitToConvert: 'px',
            viewportWidth: 1080,
            unitPrecision: 6,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: ['wrap'],
            minPixelValue: 1,
            mediaQuery: true,
            replace: true,
            // @ts-ignore
            exclude: [/node_modules/],
            landscape: false, // 是否处理横屏情况
        };
    }
    getPlugin(ops) {
        return (0, postcss_px_to_viewport_1.default)(Object.assign(Object.assign({}, this.ops), ops));
    }
    injectionConfiguration(config) {
        if (config === false)
            return [];
        // 显式拒绝配置 才跳过配置
        const plugin = {
            name: '@mxnet/postcssPxToViewport',
            config: () => {
                return {
                    css: {
                        postcss: {
                            plugins: [this.getPlugin(config)],
                        },
                    },
                };
            },
        };
        return plugin;
    }
}
exports.PostcssPxToViewport = PostcssPxToViewport;
