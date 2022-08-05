"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 17:58:13
 * @LastEditTime: 2022-08-04 21:39:36
 * @Description:
 * @FilePath: /repo/packages/build/src/common/configuration.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteConfiguration = void 0;
const lodash_defaultsdeep_1 = __importDefault(require("lodash.defaultsdeep"));
const alias_1 = require("../plugin/alias");
const autoImport_1 = require("../plugin/autoImport");
const pwa_1 = require("../plugin/pwa");
const vconsole_1 = require("../plugin/vconsole");
const scenes_1 = require("./scenes");
class ViteConfiguration {
    constructor(config) {
        this.config = {};
        this.scenes = new scenes_1.Scenes();
        this.alias = new alias_1.Alias();
        this.config = config || {};
        // 默认添加路径别名
        this.config = this.alias.analysis().getConfig(this.config);
    }
    // 设置场景
    setScenes(type) {
        this.scenes.setScenes(type);
        return this;
    }
    // 设置技术栈
    setTechnologyStack(type, ops) {
        this.scenes.setTechnologyStack(type, ops);
        (0, lodash_defaultsdeep_1.default)(this.config, this.scenes.combine().getConfig());
        return this;
    }
    // 设置别名
    setAlias(aliasConfig) {
        this.config = this.alias.analysis(aliasConfig).getConfig(this.config);
        return this;
    }
    // 新增vconsole配置
    addVConsole(config) {
        const vconsole = new vconsole_1.Vconsole();
        this.config = vconsole.changeSetting(config).getConfig(this.config);
        return this;
    }
    // 新增自动生成api接口
    addAutoImport(conf) {
        this.config = new autoImport_1.AutoImportApi().configurePresets(this.scenes.getTechnologyStackTypes()).instancePlugin(conf).getConfig(this.config);
        return this;
    }
    // setPwa
    addPwaConfigure(conf) {
        const p = new pwa_1.Pwa();
        this.config = p.createBasicConfiguration(conf).getConfig(this.config);
        return this;
    }
    // 返回配置
    getConfig(config) {
        (0, lodash_defaultsdeep_1.default)(this.config, config);
        return this.config;
    }
}
exports.ViteConfiguration = ViteConfiguration;
