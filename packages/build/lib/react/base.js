"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioExpectationsForReact = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 21:58:41
 * @LastEditTime: 2022-07-01 11:27:23
 * @Description:
 * @FilePath: /repo/packages/build/src/react/base.ts
 */
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const postcssPxToViewport_1 = require("../plugin/postcssPxToViewport");
class ScenarioExpectationsForReact {
    constructor(defaultOptions) {
        this.scenes = 'pc';
        this.postcssPxToViewport = new postcssPxToViewport_1.PostcssPxToViewport();
        this.defaultConfig = defaultOptions;
    }
    defaultNotConfigurable() {
        return {
            plugins: [(0, plugin_react_1.default)()],
        };
    }
    getPcConfig() {
        return {
            plugins: [(0, plugin_react_1.default)()],
        };
    }
    getMobileConfig() {
        return this.schedulingDefaultMobileConfiguration();
    }
    schedulingDefaultMobileConfiguration() {
        var _a;
        let config = {};
        const mobileConfig = this.defaultConfig;
        this.postcssPxToViewport.injectionConfiguration(config, (_a = mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.postcssPxToViewport) !== null && _a !== void 0 ? _a : mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.default);
        return (0, lodash_defaultsdeep_1.default)(config, this.defaultNotConfigurable());
    }
    setScene(type) {
        this.scenes = type;
        return this;
    }
    getConfig() {
        return this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig();
    }
}
exports.ScenarioExpectationsForReact = ScenarioExpectationsForReact;
