"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 18:02:55
 * @LastEditTime: 2022-05-28 18:02:55
 * @Description:
 * @FilePath: /repo/packages/service/src/utils/cancel.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCancellationHepler = void 0;
const axios_1 = __importDefault(require("axios"));
function requestCancellationHepler(config, msg) {
    const source = axios_1.default.CancelToken.source();
    config.cancelToken = source.token;
    source.cancel(msg);
}
exports.requestCancellationHepler = requestCancellationHepler;
