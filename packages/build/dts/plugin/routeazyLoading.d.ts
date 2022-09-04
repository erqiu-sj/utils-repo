import { PluginOption } from 'vite';
import { MergeConfiguration } from '../types';
export declare class RouteLazyLoading extends MergeConfiguration {
    private plugins;
    addRouterConfig(obj: object): this;
    getPlugin(): PluginOption;
}
