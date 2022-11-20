import { Plugin } from 'rollup';
export declare abstract class ConfigImpl<C = unknown> {
    abstract readPlugInConfiguration(config?: C): this;
    abstract getConfig(): Plugin;
}
