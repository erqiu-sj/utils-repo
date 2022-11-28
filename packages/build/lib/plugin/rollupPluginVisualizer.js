"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollupPluginVisualizer = void 0;
/*
 * @Author: 邱狮杰
 * @Date: 2022-11-27 16:24:00
 * @LastEditTime: 2022-11-27 16:47:30
 * @Description:
 * @FilePath: /repo/packages/build/src/plugin/rollupPluginVisualizer.ts
 */
const rollup_plugin_visualizer_1 = require("rollup-plugin-visualizer");
class RollupPluginVisualizer {
    constructor() {
        this.plugin = null;
    }
    createBasicConfiguration(conf) {
        this.plugin = (0, rollup_plugin_visualizer_1.visualizer)(conf);
        return this;
    }
    getPlugin() {
        return this.plugin;
    }
}
exports.RollupPluginVisualizer = RollupPluginVisualizer;
