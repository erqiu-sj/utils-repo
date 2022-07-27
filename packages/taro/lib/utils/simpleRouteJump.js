"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 17:13:37
 * @LastEditTime: 2022-07-17 22:22:25
 * @Description: 简单的路由跳转
 * @FilePath: /repo/packages/taro/src/utils/simpleRouteJump.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleRouteJump = exports.DefineJumpCallback = void 0;
const taro_1 = require("@tarojs/taro");
class DefineJumpCallback {
    constructor() {
        this.callbackCollection = {};
    }
    success(cb) {
        this.callbackCollection = Object.assign(Object.assign({}, this.callbackCollection), { success: cb });
        return this;
    }
    fail(cb) {
        this.callbackCollection = Object.assign(Object.assign({}, this.callbackCollection), { fail: cb });
        return this;
    }
    complete(cb) {
        this.callbackCollection = Object.assign(Object.assign({}, this.callbackCollection), { complete: cb });
        return this;
    }
}
exports.DefineJumpCallback = DefineJumpCallback;
const jumpMethodContainer = {
    navigateBack: taro_1.navigateBack,
    navigateTo: taro_1.navigateTo,
    reLaunch: taro_1.reLaunch,
    redirectTo: taro_1.redirectTo,
};
/**
 * @description 简单的路由跳转
 * @example
     new SimpleRouteJump().setMethod('navigateBack').setPreJumpJnterceptor().trigger({})
 */
class SimpleRouteJump extends DefineJumpCallback {
    constructor(url) {
        super();
        this.simpleRouteJumpConfig = { method: 'navigateTo' };
        this.setUrl(url);
    }
    setUrl(url) {
        this.simpleRouteJumpConfig = Object.assign(Object.assign({}, this.simpleRouteJumpConfig), { url });
        return this;
    }
    setMethod(method) {
        this.simpleRouteJumpConfig = Object.assign(Object.assign({}, this.simpleRouteJumpConfig), { method: method || 'navigateTo' });
        // @ts-ignore
        return this;
    }
    setPreJumpJnterceptor(fn) {
        if (!fn)
            return this;
        this.simpleRouteJumpConfig = Object.assign(Object.assign({}, this.simpleRouteJumpConfig), { preJumpJnterceptor: fn });
        return this;
    }
    trigger(options) {
        if (this.simpleRouteJumpConfig.preJumpJnterceptor) {
            if (this.simpleRouteJumpConfig.preJumpJnterceptor(options === null || options === void 0 ? void 0 : options.mete)) {
                // @ts-ignore
                return jumpMethodContainer[this.simpleRouteJumpConfig.method](Object.assign(Object.assign(Object.assign({}, this.callbackCollection), options), { url: `${this.simpleRouteJumpConfig.url}${parseParameters((options === null || options === void 0 ? void 0 : options.mete) || {})}` }));
            }
            else {
                throw new Error(`预跳转验证未通过 ${this.simpleRouteJumpConfig.url}`);
            }
        }
        if (!this.simpleRouteJumpConfig.preJumpJnterceptor) {
            // @ts-ignore
            return jumpMethodContainer[this.simpleRouteJumpConfig.method](Object.assign(Object.assign(Object.assign({}, this.callbackCollection), options), { url: `${this.simpleRouteJumpConfig.url}${parseParameters((options === null || options === void 0 ? void 0 : options.mete) || {})}` }));
        }
    }
}
exports.SimpleRouteJump = SimpleRouteJump;
SimpleRouteJump.parseParameters = parseParameters;
function parseParameters(mete) {
    if (typeof mete !== 'object')
        throw new Error(`${mete} 不是一个对象`);
    if (Array.isArray(mete))
        throw new Error(`${mete} 不是一个对象 {} `);
    let h = '?';
    for (const key in mete) {
        if (h.length === 1) {
            // @ts-ignore
            h += `${key}=${mete[key]}`;
            // @ts-ignore
        }
        else
            h += `&${key}=${mete[key]}`;
    }
    return h;
}
