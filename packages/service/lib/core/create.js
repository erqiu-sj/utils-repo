"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-08-21 15:52:46
 * @Description:
 * @FilePath: /repo/packages/service/src/core/create.ts
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_miniprogram_adapter_1 = __importDefault(require("axios-miniprogram-adapter"));
const cache_1 = require("../plugins/cache/cache");
const error_1 = require("../utils/error");
const mergeInterceptorPlugin_1 = require("./mergeInterceptorPlugin");
const multiVersionSwitching_1 = require("./multiVersionSwitching");
class Service {
    constructor(request) {
        var _a;
        // 拦截器插件列表
        this.interceptorPluginList = [];
        // 合并插件
        this.mergeInterceptorPlugin = new mergeInterceptorPlugin_1.MergeInterceptorPlugin();
        // 默认拦截器
        this.defaultInterceptorParameter = null;
        // 多版本切换
        this.multiVersionSwitching = new multiVersionSwitching_1.MultiVersionSwitching();
        if (request === null || request === void 0 ? void 0 : request.baseURL)
            (_a = this.multiVersionSwitching) === null || _a === void 0 ? void 0 : _a.setBaseURL(request.baseURL);
        // @ts-ignore
        this.axios = axios_1.default.create(request);
        // this.axios.switchVersion =
    }
    collectUnexpectedResultsHandler(fn) {
        this.unexpectedResultsHandler = fn;
        return this;
    }
    // 注入拦截器插件列表
    injectionInterceptorPlugin(interceptorList) {
        if (Array.isArray(interceptorList))
            this.interceptorPluginList = [...this.interceptorPluginList, ...interceptorList];
        else
            this.interceptorPluginList.push(interceptorList);
        this.mergeInterceptorPlugin.collectionPlugin(this.interceptorPluginList, this.defaultInterceptorParameter, this.axios);
        return this;
    }
    defaultInterceptor(interceptor) {
        this.defaultInterceptorParameter = interceptor || null;
        this.mergeInterceptorPlugin.collectionPlugin(this.interceptorPluginList, this.defaultInterceptorParameter, this.axios);
        return this;
    }
    requestTrigger(config) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const baseURL = (config === null || config === void 0 ? void 0 : config.version) ? (_a = this.multiVersionSwitching) === null || _a === void 0 ? void 0 : _a.replaceVersionPlaceholder(this.multiVersionSwitching.getOriginalBaseURL(), config === null || config === void 0 ? void 0 : config.version) : (_b = this.axios) === null || _b === void 0 ? void 0 : _b.defaults.baseURL;
            const [_, res] = yield (0, error_1.SynchronizationAwaitError)(this.axios(Object.assign({ baseURL: baseURL }, config) || {}));
            const isAxiosError = res && typeof res === 'object' && Reflect.get(res, 'name') === 'AxiosError';
            if (isAxiosError) {
                // 当请求参数错误 ,比如请求一个404 地址时候
                // 判断是否存在兜底参数，不存在则原路返回
                !!!(config === null || config === void 0 ? void 0 : config.preventUnexpectedTriggers) && ((_c = this === null || this === void 0 ? void 0 : this.unexpectedResultsHandler) === null || _c === void 0 ? void 0 : _c.call(this, res));
                return ((config === null || config === void 0 ? void 0 : config.returnOnPromiseError) || res);
            }
            !!!(config === null || config === void 0 ? void 0 : config.preventUnexpectedTriggers) && ((_d = this === null || this === void 0 ? void 0 : this.unexpectedResultsHandler) === null || _d === void 0 ? void 0 : _d.call(this, res));
            return (res || (config === null || config === void 0 ? void 0 : config.returnOnPromiseError));
        });
    }
    // 修改版本号占位符
    setVersionPlaceholder(pl) {
        var _a;
        (_a = this.multiVersionSwitching) === null || _a === void 0 ? void 0 : _a.setVersionPlaceholder(pl);
        return this;
    }
    // 切换版本号
    switchVersion(item) {
        var _a;
        this.axios.defaults.baseURL = (_a = this.multiVersionSwitching) === null || _a === void 0 ? void 0 : _a.switchVersion(item);
        return this;
    }
    /**
     * @description 添加小程序(微信，支付宝，钉钉，百度)适配器
     * @returns { this }
     */
    addAppletAdapter() {
        var _a, _b;
        if (this.axios)
            // @ts-ignore
            (_b = (_a = this.axios) === null || _a === void 0 ? void 0 : _a.defaults) === null || _b === void 0 ? void 0 : _b.adapter = axios_miniprogram_adapter_1.default;
        return this;
    }
    getAxios() {
        return (config) => __awaiter(this, void 0, void 0, function* () {
            // 缓存先决条件判断
            const cachePrerequisiteJudgment = new cache_1.CachePrerequisites(config || {});
            if (cachePrerequisiteJudgment.areThereCachePrerequisites()) {
                // 满足缓存先决条件
                // 尝试使用缓存
                const [cacheExists, cache] = cachePrerequisiteJudgment.useCache();
                return cacheExists ? cache : (yield this.requestTrigger(config));
            }
            return (yield this.requestTrigger(config));
        });
    }
}
exports.Service = Service;
