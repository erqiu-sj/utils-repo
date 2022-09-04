"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-04 15:24:26
 * @LastEditTime: 2022-09-04 15:53:14
 * @Description:
 * @FilePath: /repo/packages/build/src/common/genConfig.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGenPluginConfig = void 0;
function getGenPluginConfig(ops) {
    return Object.assign(Object.assign({}, ops), { name: `vite-plugin-mxnet/${ops === null || ops === void 0 ? void 0 : ops.name}` });
}
exports.getGenPluginConfig = getGenPluginConfig;
