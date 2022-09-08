var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-06 23:48:36
 * @LastEditTime: 2022-09-06 23:48:36
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/utils.ts
 */
import { ensureDir, readdir } from 'fs-extra';
import { base64 } from 'lqip';
import { resolve } from 'path';
export class ImgReloadContext {
    constructor(ops) {
        this.ops = { resourcePathDir: '', outputDir: '' };
        this.ops = ops;
    }
    genOutputDir() {
        ensureDir(this.ops.outputDir);
    }
    genResourcePathDir() {
        ensureDir(this.ops.resourcePathDir).then(() => this.processingResourcePathDir());
    }
    processingResourcePathDir() {
        console.log(this.ops.resourcePathDir, 'this.ops.resourcePathDir');
        readdir(this.ops.resourcePathDir, { encoding: 'utf-8' }).then((res) => __awaiter(this, void 0, void 0, function* () {
            const soureceList = res.map(p => {
                return {
                    joinSourcePath: resolve(this.ops.resourcePathDir, p),
                    path: p,
                };
            });
            for (const key in soureceList) {
                const base64Source = yield base64(soureceList[key].joinSourcePath);
                soureceList[key] = Object.assign(Object.assign({}, soureceList[key]), { 
                    // @ts-ignore
                    base64Source });
            }
            console.log(soureceList);
        }));
    }
}
