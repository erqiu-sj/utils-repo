"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnocssPlugin = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:54:03
 * @LastEditTime: 2022-11-27 17:03:07
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/unocssPlugin.ts
 */
const vite_1 = __importDefault(require("unocss/vite"));
class UnocssPlugin {
    constructor() {
        this.plugin = null;
    }
    createBasicConfiguration(conf) {
        this.plugin = (0, vite_1.default)(conf);
        return this;
    }
    getPlugin() {
        return this.plugin;
    }
}
exports.UnocssPlugin = UnocssPlugin;
