"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-09-25 12:22:21
 * @Description:
 * @FilePath: /repo/packages/build/src/vue/base.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioExpectationsForVue = void 0;
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const postcssPxToViewport_1 = require("../plugin/postcssPxToViewport");
class ScenarioExpectationsForVue {
    constructor(defaultOptions) {
        this.scenes = 'pc';
        this.postcssPxToViewport = new postcssPxToViewport_1.PostcssPxToViewport();
        this.defaultConfig = defaultOptions;
    }
    defaultNotConfigurable() {
        return [(0, plugin_vue_1.default)()];
    }
    setScene(type) {
        this.scenes = type;
        return this;
    }
    getPcConfig() {
        return this.defaultNotConfigurable();
    }
    getMobileConfig() {
        return [this.defaultNotConfigurable(), this.schedulingDefaultMobileConfiguration()];
    }
    schedulingDefaultMobileConfiguration() {
        var _a;
        const mobileConfig = this.defaultConfig;
        return this.postcssPxToViewport.injectionConfiguration((_a = mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.postcssPxToViewport) !== null && _a !== void 0 ? _a : mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.default);
    }
    getConfig() {
        const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig();
        return options;
    }
}
exports.ScenarioExpectationsForVue = ScenarioExpectationsForVue;
