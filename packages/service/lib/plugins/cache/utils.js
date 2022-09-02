"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheData = exports.ExpirationTime = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-28 22:09:37
 * @LastEditTime: 2022-08-21 16:31:22
 * @Description:
 * @FilePath: /repo/packages/service/src/plugins/cache/utils.ts
 */
const config_1 = require("./config");
/**
 * @description 过期时间
 */
class ExpirationTime {
    constructor(type, timer) {
        this.verify(type, timer);
    }
    verify(type, timer) {
        this.type = type;
        this.timer = timer;
    }
    /**
     * @description 生成时间
     * @returns
     */
    generateExpirationTime() {
        const date = new Date();
        if (this.type === 'hour')
            return date.setHours(date.getHours() + ((this === null || this === void 0 ? void 0 : this.timer) || 0));
        if (this.type === 'min')
            return date.setMinutes(date.getMinutes() + ((this === null || this === void 0 ? void 0 : this.timer) || 0));
        if (this.type === 'second')
            return date.setSeconds(date.getSeconds() + ((this === null || this === void 0 ? void 0 : this.timer) || 0));
        return 0;
    }
    /**
     * @description 是否过期
     * @param compareTime  对比时间
     * @param curTime  当前时间
     * @returns  { boolean }
     */
    static isItExpired(compareTime, curTime) {
        const cur = curTime !== null && curTime !== void 0 ? curTime : new Date().getTime();
        if (compareTime >= cur)
            return false;
        return true;
    }
}
exports.ExpirationTime = ExpirationTime;
class CacheData {
    // 预新增缓存
    preAddACache(rule, payload) {
        if (this.hasCache(rule))
            return;
        config_1.expirationMap.set(rule, { preAdded: false, cacheExpirationTime: payload.cacheExpirationTime || 0 });
    }
    // 填充缓存
    fillTheCache(rule, data) {
        if (!this.hasCache(rule))
            return;
        const cur = config_1.expirationMap.get(rule);
        if (!cur)
            return;
        config_1.expirationMap.set(rule, Object.assign(Object.assign({ cacheDate: data }, cur), { preAdded: true }));
    }
    // 删除缓存
    removeCache(rule) {
        if (!this.hasCache(rule))
            return;
        config_1.expirationMap.delete(rule);
    }
    // 是否缓存
    hasCache(rule) {
        return config_1.expirationMap.has(rule);
    }
    // 有缓存并且可用
    cachedAndAvailable(rule) {
        const cur = config_1.expirationMap.get(rule);
        if (this.hasCache(rule) && cur && cur.preAdded && cur.cacheExpirationTime && !ExpirationTime.isItExpired(cur.cacheExpirationTime))
            return true;
        if (this.hasCache(rule) && cur && cur.preAdded && cur.cacheExpirationTime && ExpirationTime.isItExpired(cur.cacheExpirationTime))
            config_1.expirationMap.delete(rule);
        return false;
    }
    getCache(rule) {
        return config_1.expirationMap.get(rule);
    }
}
exports.CacheData = CacheData;
