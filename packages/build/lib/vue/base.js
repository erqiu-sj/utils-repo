"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 23:13:23
 * @LastEditTime: 2022-12-14 16:39:21
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
const vuejsx_1 = require("../plugin/vuejsx");
const vueMacro_1 = require("../plugin/vueMacro");
class ScenarioExpectationsForVue {
    constructor(defaultOptions) {
        this.scenes = 'pc';
        this.postcssPxToViewport = new postcssPxToViewport_1.PostcssPxToViewport();
        this.defaultConfig = defaultOptions;
    }
    defaultNotConfigurable() {
        var _a, _b, _c, _d, _e, _f;
        const def = {
            plugins: {
                vue: (0, plugin_vue_1.default)(((_a = this.defaultConfig) === null || _a === void 0 ? void 0 : _a.default) ? {} : (_b = this.defaultConfig) === null || _b === void 0 ? void 0 : _b.vuePlugin),
            },
        };
        const result = [
            ...(new vueMacro_1.VueMacro().createBasicConfiguration(((_c = this.defaultConfig) === null || _c === void 0 ? void 0 : _c.default) ? def : Object.assign({}, (_d = this.defaultConfig) === null || _d === void 0 ? void 0 : _d.vueMacros, def)).getPlugin() || []),
            new vuejsx_1.VueJSX().createBasicConfiguration(((_e = this.defaultConfig) === null || _e === void 0 ? void 0 : _e.default) ? {} : (_f = this.defaultConfig) === null || _f === void 0 ? void 0 : _f.vueJsxPlugin).getPlugin(),
        ];
        return result;
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
        return [this.postcssPxToViewport.injectionConfiguration((_a = mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.postcssPxToViewport) !== null && _a !== void 0 ? _a : mobileConfig === null || mobileConfig === void 0 ? void 0 : mobileConfig.default)];
    }
    dispatchingVueMacros() {
        return;
    }
    getConfig() {
        const options = this.scenes === 'mobile' ? this.getMobileConfig() : this.getPcConfig();
        return options;
    }
}
exports.ScenarioExpectationsForVue = ScenarioExpectationsForVue;
