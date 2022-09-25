"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgReloadContext = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:48:36
 * @LastEditTime: 2022-09-25 10:32:23
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/context.ts
 */
const fs_extra_1 = require("fs-extra");
const lqip_1 = require("lqip");
const path_1 = require("path");
const constant = {
    constantCollectionFilename: 'base64.ts',
};
class ImgReloadContext {
    constructor(ops) {
        this.ops = { resourcePathDir: '', outputDir: '' };
        this.ops = ops;
    }
    genOutputDir() {
        var _a, _b;
        ((_a = this.ops) === null || _a === void 0 ? void 0 : _a.outputDir) && (0, fs_extra_1.ensureDir)((_b = this.ops) === null || _b === void 0 ? void 0 : _b.outputDir);
    }
    genResourcePathDir() {
        var _a, _b;
        ((_a = this.ops) === null || _a === void 0 ? void 0 : _a.resourcePathDir) && (0, fs_extra_1.ensureDir)((_b = this.ops) === null || _b === void 0 ? void 0 : _b.resourcePathDir).then(() => this.processingResourcePathDir());
    }
    // 文件名转变量名
    filenameConversionVariable(fileName) {
        return fileName.replace(/(\.|-)/g, '_');
    }
    processingResourcePathDir() {
        this.ops.resourcePathDir &&
            (0, fs_extra_1.readdir)(this.ops.resourcePathDir, { encoding: 'utf-8' }).then((res) => __awaiter(this, void 0, void 0, function* () {
                // @ts-ignore
                let soureceList = res.map(p => {
                    var _a;
                    return {
                        joinSourcePath: (0, path_1.resolve)((_a = this.ops) === null || _a === void 0 ? void 0 : _a.resourcePathDir, p),
                        fileName: p,
                    };
                });
                for (const key in soureceList) {
                    try {
                        const base64Source = yield (0, lqip_1.base64)(soureceList[key].joinSourcePath);
                        const outPutFilePath = (0, path_1.resolve)(this.ops.outputDir, constant.constantCollectionFilename);
                        soureceList[key] = Object.assign(Object.assign({}, soureceList[key]), { base64Source,
                            outPutFilePath });
                    }
                    catch (_a) { }
                }
                const outPutFilePath = (0, path_1.resolve)(this.ops.outputDir, constant.constantCollectionFilename);
                const content = soureceList.map(n => `export const ${this.filenameConversionVariable(n.fileName)} = '${n.base64Source}';`).join('\r\n');
                (0, fs_extra_1.pathExists)(outPutFilePath).then(hasFile => {
                    if (hasFile)
                        return;
                    (0, fs_extra_1.createFile)(outPutFilePath).then(() => {
                        (0, fs_extra_1.writeFile)(outPutFilePath, content, { encoding: 'utf-8' });
                    });
                });
            }));
    }
}
exports.ImgReloadContext = ImgReloadContext;
