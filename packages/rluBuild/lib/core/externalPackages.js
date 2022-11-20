/*
 * @Author: 邱狮杰
 * @Date: 2022-11-12 23:54:07
 * @LastEditTime: 2022-11-20 15:35:39
 * @Description:
 * @FilePath: /repo/packages/rluBuild/src/core/externalPackages.ts
 */
import externals from 'rollup-plugin-node-externals';
import { PluginHelper } from '../utils/pluginHelper';
/**
 * @description 打包时排出外部资源
 */
export class ExternalPackages extends PluginHelper {
    constructor() {
        super(...arguments);
        // private helper: PluginHelper = new PluginHelper()
        // 默认
        this.externalPackages = ['react', 'vue', '@tarojs/taro', 'axios', '@tarojs/react', '@tarojs/runtime'];
        this.config = {};
    }
    readPlugInConfiguration(config) {
        this.config = config || {};
        return this;
    }
    getConfig() {
        const that = this;
        return Object.assign({}, externals(that.config));
    }
}
