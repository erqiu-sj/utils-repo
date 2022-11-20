import { RollupCommonJSOptions } from "@rollup/plugin-commonjs";
import { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import { Plugin } from "rollup";
import { Options } from 'rollup-plugin-terser';
import { ExternalPackages } from '../plugin/externalPackages';
import { RollupTs } from '../plugin/rollupTs';
export declare class PlugHelper {
    private pluginList;
    private externalPackages;
    private rollupTs;
    private rollupCommonjs;
    private rollupPluginNodeResolve;
    private rollupPluginTerser;
    /**
     * @description 汇总插件以缩小生成的es捆绑包
     * @returns
     */
    addRollupPluginTerser(conf?: Options): this;
    /**
     * @description 在node_modules中查找并捆绑第三方依赖项
     */
    addRollupPluginNodeResolve(config?: RollupNodeResolveOptions): this;
    /**
     * @description 将CommonJS模块转换为ES2015
     */
    addRollupCommonjs(config?: RollupCommonJSOptions): this;
    /**
     * @description Rollup和TypeScript之间的无缝集成
     */
    addTypescript(config?: Parameters<RollupTs['readPlugInConfiguration']>[0]): this;
    /**
     * @description 打包时排出外部资源
     */
    externalPackagesHelper(config?: Parameters<ExternalPackages['readPlugInConfiguration']>[0]): this;
    getPluginList(): Plugin[];
}
