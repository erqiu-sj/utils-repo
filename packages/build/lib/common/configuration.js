"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-12 17:58:13
 * @LastEditTime: 2022-09-25 10:43:51
 * @Description:
 * @FilePath: /repo/packages/build/src/common/configuration.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteConfiguration = void 0;
const routeazyLoading_1 = require("../plugin//routeazyLoading");
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
        this.plugins = [];
        this.config = config || {};
        // 默认添加路径别名
        this.plugins.push(this.alias.analysis().plugin);
    }
    // 设置场景
    setScenes(type) {
        this.scenes.setScenes(type);
        return this;
    }
    // 设置技术栈
    setTechnologyStack(type, ops) {
        this.scenes.setTechnologyStack(type, ops);
        this.plugins.push(this.scenes.combine().getConfig());
        return this;
    }
    // 设置别名
    setAlias(aliasConfig) {
        this.plugins.push(this.alias.analysis(aliasConfig).plugin);
        return this;
    }
    // 新增vconsole配置
    addVConsole(config) {
        const vconsole = new vconsole_1.Vconsole();
        this.plugins.push(vconsole.changeSetting(config).getPlugin());
        return this;
    }
    // 新增自动生成api接口
    addAutoImport(conf) {
        this.plugins.push(new autoImport_1.AutoImportApi().configurePresets(this.scenes.getTechnologyStackTypes()).instancePlugin(conf).getPlugin());
        return this;
    }
    // setPwa
    addPwaConfigure(conf) {
        const p = new pwa_1.Pwa();
        this.plugins.push(p.createBasicConfiguration(conf).getPlugin());
        return this;
    }
    //
    addRouteLazyLoading(obj) {
        const r = new routeazyLoading_1.RouteLazyLoading();
        this.plugins.push(r.addRouterConfig(obj).getPlugin());
        return this;
    }
    // 返回配置
    getConfig(config) {
        const p = [...this.plugins, ...((config === null || config === void 0 ? void 0 : config.plugins) || [])];
        this.config = Object.assign(Object.assign({}, config), { plugins: p });
        return this.config;
    }
}
exports.ViteConfiguration = ViteConfiguration;
