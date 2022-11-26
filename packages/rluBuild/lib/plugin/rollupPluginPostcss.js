/*
 * @Author: 邱狮杰
 * @Date: 2022-11-18 22:15:23
 * @LastEditTime: 2022-11-20 15:50:20
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/plugin/rollupPluginPostcss.ts
 */
import postcss from 'rollup-plugin-postcss';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupPluginPostcss extends PluginHelper {
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
        return Object.assign({}, postcss(that.config));
    }
}
