"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 16:35:54
 * @LastEditTime: 2022-06-23 15:07:53
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/storeage.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storeage = void 0;
const taro_1 = require("@tarojs/taro");
class Storeage {
    get(k) {
        return (0, taro_1.getStorageSync)(k);
    }
    set(k, val) {
        (0, taro_1.setStorageSync)(k, val);
        return this;
    }
}
exports.Storeage = Storeage;
