"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-25 11:06:44
 * @LastEditTime: 2022-06-25 11:08:53
 * @Description:
 * @FilePath: /repo/packages/taro/src/utils/getAppMetadata.ts
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
exports.getAppId = exports.getWxLoginCode = void 0;
const taro_1 = require("@tarojs/taro");
function getWxLoginCode() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield (0, taro_1.login)()).code;
    });
}
exports.getWxLoginCode = getWxLoginCode;
function getAppId() {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, taro_1.getAccountInfoSync)().miniProgram.appId;
    });
}
exports.getAppId = getAppId;
