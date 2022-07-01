"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioExpectationsForVue = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-07-01 11:26:47
 * @Description:
 * @FilePath: /repo/packages/build/src/vue/base.ts
 */
const plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const postcssPxToViewport_1 = require("../plugin/postcssPxToViewport");
class ScenarioExpectationsForVue {
    constructor(defaultOptions) {
        this.scenes = 'pc';
        this.postcssPxToViewport = new postcssPxToViewport_1.PostcssPxToViewport();
        this.defaultConfig = defaultOptions;
    }
    defaultNotConfigurable() {
        return {
            plugins: [(0, plugin_vue_1.default)()],
        };
    }
    setScene(type) {
        this.scenes = type;
        return this;
    }
    getPcConfig() {
        const config = {};
        (0, lodash_defaultsdeep_1.default)(config, this.defaultNotConfigurable());
        return config;
    }
    getMobileConfig() {
        const config = {};
        (0, lodash_defaultsdeep_1.default)(config, this.schedulingDefaultMobileConfiguration(), this.defaultNotConfigurable());
        return config;
    }
    schedulingDefaultMobileConfiguration() {
        var _a;
        let config = {};
        const mobileConfig = this.defaultConfig;
        this.postcssPxToViewport.injectionConfiguration(config, (_a = mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.postcssPxToViewport) !== null && _a !== void 0 ? _a : mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.default);
        return config;
    }
    getConfig() {
        const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig();
        return options;
    }
}
exports.ScenarioExpectationsForVue = ScenarioExpectationsForVue;
