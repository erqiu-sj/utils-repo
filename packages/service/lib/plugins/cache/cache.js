"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 22:07:09
 * @LastEditTime: 2022-05-29 20:27:06
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cache/cache.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = exports.CachePrerequisites = void 0;
const decorator_1 = require("../../utils/decorator");
const config_1 = require("./config");
const utils_1 = require("./utils");
const cacheHandler = new utils_1.CacheData();
class CachePrerequisites {
    constructor(config) {
        this.config = {};
        this.config = config;
    }
    // 是否符合开启缓存的标准
    areThereCachePrerequisites() {
        return (0, config_1.hasCacheConfig)(this.config);
    }
    useCache() {
        var _a, _b, _c;
        const rule = ((_b = (_a = this.config).cacheRules) === null || _b === void 0 ? void 0 : _b.call(_a, this.config)) || (0, config_1.defaultCacheRule)(this.config);
        if (this.config.useCache && cacheHandler.cachedAndAvailable(rule)) {
            return [true, (_c = cacheHandler.getCache(rule)) === null || _c === void 0 ? void 0 : _c.cacheDate];
        }
        return [false, null];
    }
}
exports.CachePrerequisites = CachePrerequisites;
class Cache {
    requestFailInterceptor(err) {
    }
    responseFailInterceptor(err) {
    }
    requestSuccessInterceptor(config) {
        var _a;
        const rule = ((_a = config.cacheRules) === null || _a === void 0 ? void 0 : _a.call(config, config)) || (0, config_1.defaultCacheRule)(config);
        if ((config.useCache || !cacheHandler.hasCache(rule)) && config.cacheExpirationTime) {
            // ((启用缓存 || 没有缓存 if=== true) if=== true) && 缓存时间戳
            cacheHandler.preAddACache(rule, { cacheExpirationTime: config.cacheExpirationTime || 0 });
        }
        return config;
    }
    responseSuccessInterceptor(response) {
        var _a;
        const config = response.config;
        const rule = ((_a = config.cacheRules) === null || _a === void 0 ? void 0 : _a.call(config, config)) || (0, config_1.defaultCacheRule)(config);
        cacheHandler.fillTheCache(rule, response.data);
        return response;
    }
}
__decorate([
    (0, decorator_1.allowExecution)(config => (0, config_1.hasCacheConfig)(config))
], Cache.prototype, "requestSuccessInterceptor", null);
__decorate([
    (0, decorator_1.allowExecution)((resConfig) => {
        return (0, config_1.hasCacheConfig)(resConfig.config);
    })
], Cache.prototype, "responseSuccessInterceptor", null);
exports.Cache = Cache;
