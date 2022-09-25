"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 20:55:11
 * @LastEditTime: 2022-09-18 11:15:34
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/decorator.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wechatCaching = exports.allowExecution = void 0;
const taro_1 = require("@mxnet/taro");
// 根据传入函数的返回值判断class中的method 是否允许执行
function allowExecution(cb) {
    return (target, key, desc) => {
        const fn = desc.value;
        desc.value = function () {
            const params = Array.from(arguments);
            //    @ts-ignore
            return (cb === null || cb === void 0 ? void 0 : cb(...params)) && fn(...params);
        };
        return desc;
    };
}
exports.allowExecution = allowExecution;
/**
 * @description 微信缓存类装饰器
 * @param { mergeFnWithPromiseFn<nonNullFnParameter<DownloadFile<unknown, T[0]>['down']>[0], [R, Pick<DownloadFile, 'success' | 'fail' | 'complete'>]> } cb callback
 * @param { nonNullFnParameter<DownloadFile['setDownloadLocation'] } type cache type
 * @returns
 */
function wechatCaching(cb, ...type) {
    return (target, key, desc) => __awaiter(this, arguments, void 0, function* () {
        const result = yield desc.value(...arguments);
        const down = new taro_1.DownloadFile();
        if (type && type[0])
            down.setDownloadLocation(type[0]);
        yield cb(result, down);
        return result;
    });
}
exports.wechatCaching = wechatCaching;
