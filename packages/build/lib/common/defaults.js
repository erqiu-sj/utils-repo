"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultsObj = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-09-04 15:19:23
 * @LastEditTime: 2022-09-04 15:22:27
 * @Description:
 * @FilePath: /repo/packages/build/src/common/defaults.ts
 */
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
function defaultsObj(obj, obj1) {
    for (const key in obj) {
        // @ts-ignore
        obj[key] = (0, lodash_defaultsdeep_1.default)(obj[key], obj1[key]);
    }
    for (const key in obj1) {
        // @ts-ignore
        obj1[key] = (0, lodash_defaultsdeep_1.default)(obj1[key], obj[key]);
    }
}
exports.defaultsObj = defaultsObj;
