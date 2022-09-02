"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 10:42:38
 * @LastEditTime: 2022-08-28 15:12:45
 * @Description: 单例模式
 * @FilePath: /repo/packages/utils/src/verification/singletonPattern.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonPattern = void 0;
function singletonPattern(fn) {
    let result;
    return () => {
        return result ? result : (result = fn(), result);
    };
}
exports.singletonPattern = singletonPattern;
