"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:46:43
 * @LastEditTime: 2022-09-25 10:43:10
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/plugin.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const context_1 = require("./context");
const loadFile_1 = require("./loadFile");
const vitePluginImgReload = {
    name: 'vite-plugin-img-reload',
};
exports.default = (ops) => {
    return {
        name: vitePluginImgReload.name,
        enforce: 'pre',
        configResolved(config) {
            const ctx = new context_1.ImgReloadContext(Object.assign(Object.assign({}, ops), { outputDir: (ops === null || ops === void 0 ? void 0 : ops.outputDir) || config.root }));
            // 初始化css文件
            new loadFile_1.LoadFile().loadCssFile((0, path_1.resolve)(config.root, 'imgReload.css'), (0, path_1.resolve)(__dirname, './imgReload.css'));
            ctx.genOutputDir();
            ctx.genResourcePathDir();
        },
    };
};
