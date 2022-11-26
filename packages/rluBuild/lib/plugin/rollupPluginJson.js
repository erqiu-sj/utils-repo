/*
 * @Author: 邱狮杰
 * @Date: 2022-11-26 15:14:19
 * @LastEditTime: 2022-11-26 15:15:22
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginJson.ts
 */
import json from '@rollup/plugin-json';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupPluginJson extends PluginHelper {
    constructor() {
        super(...arguments);
        this.conf = {};
    }
    readPlugInConfiguration(config) {
        this.conf = config;
        return this;
    }
    getConfig() {
        return Object.assign({}, json(this.conf));
    }
}
