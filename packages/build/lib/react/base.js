"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioExpectationsForReact = void 0;
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const postcssPxToViewport_1 = require("../plugin/postcssPxToViewport");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
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
        return {};
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
