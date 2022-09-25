"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadFile = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-12 22:09:41
 * @LastEditTime: 2022-09-24 22:55:52
 * @Description:
 * @FilePath: /repo/packages/vite-plugin-img-reload/src/loadFile.ts
 */
const fs_extra_1 = require("fs-extra");
class LoadFile {
    loadCssFile(filePath, readFilePath) {
        (0, fs_extra_1.pathExists)(filePath).then(hasFile => {
            if (hasFile)
                return;
            (0, fs_extra_1.ensureFile)(filePath, () => {
                (0, fs_extra_1.readFile)(readFilePath, { encoding: 'utf-8' }, (err, data) => {
                    if (err)
                        throw err;
                    (0, fs_extra_1.writeFile)(filePath, data, { encoding: 'utf-8' }, writeError => {
                        if (err)
                            throw writeError;
                    });
                });
            });
        });
    }
}
exports.LoadFile = LoadFile;
