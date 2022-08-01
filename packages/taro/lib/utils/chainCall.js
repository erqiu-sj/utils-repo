"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainCall = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-08-01 10:02:32
 * @LastEditTime: 2022-08-01 15:00:16
 * @Description: 只需要将小程序所有api传入，则会自动读取小程序参数作为该链式调用的参数声明，链式小程序api的所有回调
 * @FilePath: /repo/packages/taro/src/utils/chainCall.ts
 */
const taro_1 = __importDefault(require("@tarojs/taro"));
class Callback {
    constructor() {
        this.callbackCollector = {};
    }
    success(res) {
        Reflect.set(this.callbackCollector, 'success', res);
        return this;
    }
    complete(res) {
        Reflect.set(this.callbackCollector, 'complete', res);
        return this;
    }
    fail(res) {
        Reflect.set(this.callbackCollector, 'fail', res);
        return this;
    }
    getCallback(key) {
        return this.callbackCollector[key];
    }
    getCallbackAll() {
        return this.callbackCollector;
    }
}
/**
 *  @description 链式调用,
 *  @example
    new ChainCall().injectApi('login').success(() => { }).injectionParameters({})
 */
class ChainCall extends Callback {
    /**
     * @description 选择函数名 login or nativationBack ...
     * @param { allTaroApi } apiName
     * @returns
     */
    injectApi(apiName) {
        // @ts-ignore
        this.fn = taro_1.default[apiName];
        // @ts-ignore
        return this;
    }
    /**
     * @description 传入api对应参数
     * @param parameterType
     * @returns
     */
    injectionParameters(parameterType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.parameter = parameterType;
            return this;
        });
    }
    /**
     * @description 调用
     * @returns
     */
    done() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield ((_a = this.fn) === null || _a === void 0 ? void 0 : _a.call(this, Object.assign({}, Object.assign(Object.assign({}, this.parameter), this.getCallbackAll()))));
        });
    }
}
exports.ChainCall = ChainCall;
