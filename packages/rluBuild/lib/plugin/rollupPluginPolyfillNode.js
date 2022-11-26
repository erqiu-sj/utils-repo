import polyfillNode from 'rollup-plugin-polyfill-node';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupPluginPolyfillNode extends PluginHelper {
    constructor() {
        super(...arguments);
        this.conf = {};
    }
    readPlugInConfiguration(config) {
        this.conf = config;
        return this;
    }
    getConfig() {
        return Object.assign({}, polyfillNode(this.conf));
    }
}
