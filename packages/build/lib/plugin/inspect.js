"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:45:20
 * @LastEditTime: 2022-11-27 16:50:02
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/inspect.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inspect = void 0;
const vite_plugin_inspect_1 = __importDefault(require("vite-plugin-inspect"));
class Inspect {
    constructor() {
        this.plugin = null;
    }
    createBasicConfiguration(conf) {
        this.plugin = (0, vite_plugin_inspect_1.default)(conf);
        return this;
    }
    getPlugin() {
        return this.plugin;
    }
}
exports.Inspect = Inspect;
