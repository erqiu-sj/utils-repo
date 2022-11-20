import { terser } from 'rollup-plugin-terser';
import { PluginHelper } from '../utils/pluginHelper';
export class RollupPluginTerser extends PluginHelper {
    constructor() {
        super(...arguments);
        this.conf = {};
    }
    readPlugInConfiguration(config) {
        this.conf = config || {};
        return this;
    }
    getConfig() {
        const that = this;
        return Object.assign({}, terser(that.conf));
    }
}
