"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 11:37:24
 * @LastEditTime: 2022-06-11 15:27:33
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
const cache_1 = require("../plugins/cache/cache");
const error_1 = require("../utils/error");
const mergeInterceptorPlugin_1 = require("./mergeInterceptorPlugin");
class Service {
    constructor(request) {
        // 拦截器插件列表
        this.interceptorPluginList = [];
        // 合并插件
        this.mergeInterceptorPlugin = new mergeInterceptorPlugin_1.MergeInterceptorPlugin();
        // 默认拦截器
        this.defaultInterceptorParameter = null;
        this.axios = axios_1.default.create(request);
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
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const [_, res] = yield (0, error_1.SynchronizationAwaitError)(this.axios(config || {}));
            const isAxiosError = res && typeof res === 'object' && Reflect.get(res, 'name') === 'AxiosError';
            if (isAxiosError) {
                // 当请求参数错误 ,比如请求一个404 地址时候
                // 判断是否存在兜底参数，不存在则原路返回
                !!!(config === null || config === void 0 ? void 0 : config.preventUnexpectedTriggers) && ((_a = this === null || this === void 0 ? void 0 : this.unexpectedResultsHandler) === null || _a === void 0 ? void 0 : _a.call(this, res));
                return ((config === null || config === void 0 ? void 0 : config.returnOnPromiseError) || res);
            }
            !!!(config === null || config === void 0 ? void 0 : config.preventUnexpectedTriggers) && ((_b = this === null || this === void 0 ? void 0 : this.unexpectedResultsHandler) === null || _b === void 0 ? void 0 : _b.call(this, res));
            return (res || (config === null || config === void 0 ? void 0 : config.returnOnPromiseError));
        });
    }
    getAxios() {
        return (config) => __awaiter(this, void 0, void 0, function* () {
            // 缓存先决条件判断
            const cachePrerequisiteJudgment = new cache_1.CachePrerequisites(config || {});
            if (cachePrerequisiteJudgment.areThereCachePrerequisites()) {
                // 满足缓存先决条件
                // 尝试使用缓存
                const [cacheExists, cache] = cachePrerequisiteJudgment.useCache();
                if (cacheExists) {
                    // 存在可用缓存
                    return cache;
                }
                return yield this.requestTrigger(config);
            }
            return yield this.requestTrigger(config);
        });
    }
}
exports.Service = Service;
