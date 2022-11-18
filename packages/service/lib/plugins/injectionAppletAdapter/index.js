"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 17:03:18
 * @LastEditTime: 2022-11-18 17:11:36
 * @Description: 注入小程序适配器
 * @FilePath: /repo/packages/service/src/plugins/injectionAppletAdapter/index.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectionAppletAdapter = void 0;
const axios_miniprogram_adapter_1 = __importDefault(require("axios-miniprogram-adapter"));
class InjectionAppletAdapter {
    constructor(injection) {
        this.inject = true;
        this.inject = typeof injection === 'function' ? injection() : injection;
    }
    requestFailInterceptor(err) {
        return;
    }
    responseFailInterceptor(err) {
        return;
    }
    requestSuccessInterceptor(config) {
        if (this.inject)
            // @ts-ignore
            config.adapter = axios_miniprogram_adapter_1.default;
        return config;
    }
    responseSuccessInterceptor(response) {
    }
}
exports.InjectionAppletAdapter = InjectionAppletAdapter;
