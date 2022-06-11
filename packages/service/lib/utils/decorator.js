"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:55:11
 * @LastEditTime: 2022-05-29 20:11:44
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/decorator.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowExecution = void 0;
// 根据传入函数的返回值判断class中的method 是否允许执行
function allowExecution(cb) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            const params = Array.from(arguments);
            // @ts-ignore
            return (cb === null || cb === void 0 ? void 0 : cb(...params)) && fn(...params);
        };
        return desc;
    };
}
exports.allowExecution = allowExecution;
