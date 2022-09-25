"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioExpectationsForReact = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:58:41
 * @LastEditTime: 2022-09-24 22:52:27
 * @Description:
 * @FilePath: /repo/packages/build/src/react/base.ts
 */
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const postcssPxToViewport_1 = require("../plugin/postcssPxToViewport");
class ScenarioExpectationsForReact {
    constructor(defaultOptions) {
        this.scenes = 'pc';
        this.postcssPxToViewport = new postcssPxToViewport_1.PostcssPxToViewport();
        this.defaultConfig = defaultOptions;
    }
    defaultNotConfigurable() {
        return [(0, plugin_react_1.default)()];
    }
    getPcConfig() {
        return {
            plugins: [(0, plugin_react_1.default)()],
        };
    }
    getMobileConfig() {
        return [this.defaultNotConfigurable(), this.schedulingDefaultMobileConfiguration()];
    }
    schedulingDefaultMobileConfiguration() {
        var _a;
        const mobileConfig = this.defaultConfig;
        return this.postcssPxToViewport.injectionConfiguration((_a = mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.postcssPxToViewport) !== null && _a !== void 0 ? _a : mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.default);
    }
    setScene(type) {
        this.scenes = type;
        return this;
    }
    getConfig() {
        const result = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig().plugins;
        return [result];
    }
}
exports.ScenarioExpectationsForReact = ScenarioExpectationsForReact;
