"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-28 14:40:36
 * @LastEditTime: 2022-09-02 22:19:35
 * @Description:
 * @FilePath: /taro-react-template/Users/devops/Desktop/maixun/repo/packages/utils/src/verification/typeValidation.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFalseValue = exports.isEmptyArray = exports.isEmptyObject = void 0;
function isEmptyObject(o) {
    if (Array.isArray(o)) {
        return isEmptyArray(o);
    }
    return Object.keys(o).length === 0;
}
exports.isEmptyObject = isEmptyObject;
function isEmptyArray(o) {
    if (!Array.isArray(o))
        return false;
    return o.length === 0;
}
exports.isEmptyArray = isEmptyArray;
function isFalseValue(i) {
    if (i === false)
        return true;
    return (i !== null && i !== void 0 ? i : true) === true;
}
exports.isFalseValue = isFalseValue;
