import { Plugin } from 'vite';
import { VitePluginProgress } from '../plugin/vitePluginProgress';
/**
 * @description 合并配置基础继承抽象类
 */
export declare abstract class MergeConfiguration<T = unknown> {
    abstract getPlugin(): Plugin | null | Plugin[];
    abstract createBasicConfiguration(conf?: T): this;
}
export interface CommonPluginsConfig {
    vitePluginProgress: Parameters<VitePluginProgress['createBasicConfiguration']>[0];
}
