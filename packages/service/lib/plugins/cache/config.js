"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasCacheConfig = exports.expirationMap = exports.defaultCacheRule = void 0;
function defaultCacheRule(config) {
    return `${config.url || config.baseURL}`;
}
exports.defaultCacheRule = defaultCacheRule;
exports.expirationMap = new Map();
function hasCacheConfig(config) {
    const r = Reflect.get(config || {}, 'useCache') || Reflect.get(config || {}, 'cacheExpirationTime');
    return r;
}
exports.hasCacheConfig = hasCacheConfig;
