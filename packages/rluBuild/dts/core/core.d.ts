import { mergeFnWithPromiseFn } from '@mxnet/types';
import { defineConfig, RollupOptions } from 'rollup';
import { PlugHelper } from './plugHelper';
export declare type ReturnValue = ReturnType<typeof defineConfig>;
export declare class RluBuild {
    private pluginList;
    addPlugin(pl?: mergeFnWithPromiseFn<void, [PlugHelper], false>): this;
    build(opt?: RollupOptions): ReturnValue;
}
