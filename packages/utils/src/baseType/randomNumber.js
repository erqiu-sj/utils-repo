"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-11 21:45:47
 * @LastEditTime: 2022-08-20 22:17:12
 * @Description: 随机数
 * @FilePath: /repo/packages/utils/src/baseType/randomNumber.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberInterval = void 0;
/**
 * @description 随机数区间
 */
class RandomNumberInterval {
    constructor(interval, ops) {
        this.n = 0;
        const maxNum = Math.max(interval[0], interval[1]);
        const minNum = Math.min(interval[0], interval[1]);
        const result = Math.random() * (maxNum - minNum + 1) + minNum;
        this.n = (ops === null || ops === void 0 ? void 0 : ops.isInteger) ? Math.floor(result) : result;
    }
    getNumber() {
        return this.n;
    }
}
exports.RandomNumberInterval = RandomNumberInterval;
