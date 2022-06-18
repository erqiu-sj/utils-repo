"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-06-17 10:13:36
 * @LastEditTime: 2022-06-18 11:52:01
 * @Description: 多版本切换
 * @FilePath: /repo/packages/service/src/core/multiVersionSwitching.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiVersionSwitching = void 0;
class MultiVersionSwitching {
    constructor() {
        this.versionPlaceholder = '';
        this.baseURL = '';
        this.originalBaseURL = '';
    }
    // 修改版本号占位符
    setVersionPlaceholder(pl) {
        this.versionPlaceholder = pl;
        return this;
    }
    setBaseURL(URL) {
        this.baseURL = URL;
        this.originalBaseURL = URL;
    }
    replaceVersionPlaceholder(baseURL, repl) {
        return baseURL.replace(new RegExp(this.versionPlaceholder, 'g'), repl);
    }
    getOriginalBaseURL() {
        return this.originalBaseURL;
    }
    switchVersion(item) {
        this.baseURL = this.replaceVersionPlaceholder(this.baseURL, item);
        return this.baseURL;
    }
}
exports.MultiVersionSwitching = MultiVersionSwitching;
