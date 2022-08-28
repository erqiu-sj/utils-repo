"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-13 14:57:13
 * @LastEditTime: 2022-08-26 21:10:59
 * @Description:
 * @FilePath: /repo/script/parseImport/src/index.ts
 */
const core_1 = require("@swc/core");
// const { parseFileSync } = require("@swc/core");
const parseResult = (0, core_1.parseFileSync)('./test.js', {
    syntax: 'typescript',
    comments: false,
    script: true,
    target: 'es2016',
    isModule: false
});
console.log(parseResult);
