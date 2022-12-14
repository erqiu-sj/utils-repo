"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViteConfiguration = void 0;
const routeazyLoading_1 = require("../plugin//routeazyLoading");
const alias_1 = require("../plugin/alias");
const autoImport_1 = require("../plugin/autoImport");
const inspect_1 = require("../plugin/inspect");
const pwa_1 = require("../plugin/pwa");
const rollupPluginVisualizer_1 = require("../plugin/rollupPluginVisualizer");
const unocssPlugin_1 = require("../plugin/unocssPlugin");
const vconsole_1 = require("../plugin/vconsole");
const vitePluginPrintUrls_1 = require("../plugin/vitePluginPrintUrls");
const vitePluginProgress_1 = require("../plugin/vitePluginProgress");
const vitePluginQrcode_1 = require("../plugin/vitePluginQrcode");
const scenes_1 = require("./scenes");
class ViteConfiguration {
    constructor(config) {
        this.config = {};
        this.scenes = new scenes_1.Scenes();
        this.alias = new alias_1.Alias();
        this.plugins = [];
        // this.config = config || {}
        // 默认添加路径别名
        this.plugins.push(this.alias.analysis().plugin, new vitePluginPrintUrls_1.VitePluginPrintUrls().createBasicConfiguration().getPlugin(), new vitePluginProgress_1.VitePluginProgress().createBasicConfiguration(config === null || config === void 0 ? void 0 : config.vitePluginProgress).getPlugin());
    }
    /**
     * @description 用二维码预览项目
     * @param conf
     * @returns
     */
    addQrcodePreview(conf) {
        const p = new vitePluginQrcode_1.VitePluginQrcode();
        this.plugins.push(p.createBasicConfiguration(conf).getPlugin());
        return this;
    }
    /**
     * @description 设置场景
     */
    setScenes(type) {
        this.scenes.setScenes(type);
        return this;
    }
    /**
     * @description  设置技术栈
     */
    setTechnologyStack(type, ops) {
        this.scenes.setTechnologyStack(type, ops);
        this.plugins.push(this.scenes.combine().getConfig());
        return this;
    }
    /**
     * @description 设置别名
     */
    setAlias(aliasConfig) {
        this.plugins.push(this.alias.analysis(aliasConfig).plugin);
        return this;
    }
    /**
     * @description 新增vconsole配置
     */
    addVConsole(config) {
        const vconsole = new vconsole_1.Vconsole();
        this.plugins.push(vconsole.changeSetting(config).getPlugin());
        return this;
    }
    /**
     * @description 新增自动生成api接口
     */
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
    /**
     *  @description 懒加载路由
     */
    addRouteLazyLoading(obj) {
        const r = new routeazyLoading_1.RouteLazyLoading();
        this.plugins.push(r.addRouterConfig(obj).getPlugin());
        return this;
    }
    /**
     * @description Bundle 分析
     */
    addRollupPluginVisualizer(conf) {
        const s = new rollupPluginVisualizer_1.RollupPluginVisualizer();
        this.plugins.push(s.createBasicConfiguration(conf).getPlugin());
        return this;
    }
    /**
     * @description 测试插件
     */
    addInspect(conf) {
        const s = new inspect_1.Inspect();
        this.plugins.push(s.createBasicConfiguration(conf).getPlugin());
        return this;
    }
    /**
     * @description add unocssPlugin
     */
    addUnocssPlugin(conf) {
        const u = new unocssPlugin_1.UnocssPlugin();
        this.plugins.push(u.createBasicConfiguration(conf).getPlugin());
        return this;
    }
    /**
     * @description 返回配置
     */
    getConfig(config) {
        const p = [...this.plugins, ...((config === null || config === void 0 ? void 0 : config.plugins) || [])];
        this.config = Object.assign(Object.assign({}, config), { plugins: p });
        return this.config;
    }
}
exports.ViteConfiguration = ViteConfiguration;
