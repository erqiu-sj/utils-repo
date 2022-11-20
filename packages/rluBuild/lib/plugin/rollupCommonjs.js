/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 21:50:48
 * @LastEditTime: 2022-11-20 15:35:22
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupCommonjs.ts
 */
import commonjs from '@rollup/plugin-commonjs';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupCommonjs extends PluginHelper {
    constructor() {
        super(...arguments);
        this.config = {};
    }
    readPlugInConfiguration(config) {
        this.config = config || {};
        return this;
    }
    getConfig() {
        const that = this;
        return Object.assign({}, commonjs(that.config));
    }
}
