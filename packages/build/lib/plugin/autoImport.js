"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-12 21:13:02
 * @LastEditTime: 2022-11-27 17:05:06
 * @Description:  自动导入api
 * @FilePath: /repo/packages/build/src/plugin/autoImport.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoImportApi = void 0;
// @ts-ignore
const unplugin_auto_import_1 = __importDefault(require("unplugin-auto-import"));
const include = [
    /\.[tj]sx?$/,
    /\.vue$/,
    /\.vue\?vue/,
    /\.md$/, // .md
];
class AutoImportApi {
    constructor() {
        this.defaultImports = [];
    }
    // 根据技术栈配置预设
    configurePresets(technologyStackTypes) {
        this.defaultImports = technologyStackTypes === 'react' ? this.reactImports() : this.vueImports();
        return this;
    }
    vueImports() {
        return ['vue', 'vue-router', 'pinia'];
    }
    reactImports() {
        return ['react'];
    }
    // 实例插件
    instancePlugin(conf) {
        const newLocal = conf || {};
        const userConfig = unplugin_auto_import_1.default.vite(Object.assign({ include, dts: true, 
            // vue模版自动导入
            vueTemplate: false, 
            // @ts-ignore
            imports: [...this.defaultImports] }, newLocal));
        this.userConfig = userConfig;
        return this;
    }
    getPlugin() {
        return this.userConfig;
    }
}
exports.AutoImportApi = AutoImportApi;
