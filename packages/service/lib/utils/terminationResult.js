"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-07-02 20:35:19
 * @LastEditTime: 2022-09-18 10:08:49
 * @Description: 终止网络请求
 * @FilePath: /marketings/Users/devops/Desktop/maixun/repo/packages/service/src/utils/terminationResult.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminationResult = void 0;
const axios_1 = __importDefault(require("axios"));
class TerminationResult {
    ConfigurationParameters(config) {
        const cancel = axios_1.default.CancelToken.source();
        const c = Object.assign(Object.assign({}, config), { cancelToken: cancel.token });
        return {
            getConfiguration() {
                return c;
            },
            terminateTrigger() {
                cancel.cancel();
            },
        };
    }
}
exports.TerminationResult = TerminationResult;
