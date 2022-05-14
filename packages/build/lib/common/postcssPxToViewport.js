"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostcssPxToViewport = void 0;
const postcss_px_to_viewport_1 = __importDefault(require("postcss-px-to-viewport"));
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
/**
 * @description 适用于mobile的px转vw的postcss插件
 */
class PostcssPxToViewport {
    getPlugin(ops) {
        return (0, postcss_px_to_viewport_1.default)(ops);
    }
    injectionConfiguration(viteConfig, config) {
        // 显式拒绝配置 才跳过配置
        if (config === false)
            return viteConfig;
        const ownConfig = {
            css: {
                postcss: {
                    plugins: [this.getPlugin(config)],
                },
            },
        };
        (0, lodash_defaultsdeep_1.default)(viteConfig, ownConfig);
        return viteConfig;
    }
}
exports.PostcssPxToViewport = PostcssPxToViewport;
