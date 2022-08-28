"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 18:04:23
 * @LastEditTime: 2022-08-21 13:25:53
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cancel/config.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRules = exports.requestContainer = exports.cancelHeader = void 0;
// 如果需要自动判断请求是否重复，前提是一个请求的请求头需要一个 cancelVerification 字段
exports.cancelHeader = 'cancelVerification';
// 请求容器
// 添加了  cancelHeader   请求头后 ，每一次请求的信息都会被推入map，用于该请求还没取消，但重复请求来时，可以根据 requestRule 决定是否取消重复的请求
exports.requestContainer = new Map();
function defaultRules(config) {
    return `${config.url || config.baseURL}&${config.method}`;
}
exports.defaultRules = defaultRules;
