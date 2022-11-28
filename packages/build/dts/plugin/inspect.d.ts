import { Plugin } from 'vite';
import { Options } from 'vite-plugin-inspect';
import { MergeConfiguration } from '../types';
export type { Options };
export declare class Inspect implements MergeConfiguration<Options> {
    private plugin;
    createBasicConfiguration(conf?: Options): this;
    getPlugin(): Plugin | null;
}
