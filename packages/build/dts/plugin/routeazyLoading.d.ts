import { UserConfigExport } from 'vite';
import { MergeConfiguration } from '../types';
export declare class RouteLazyLoading extends MergeConfiguration {
    private c;
    addRouterConfig(obj: object): void;
    getConfig(userConfig: UserConfigExport): UserConfigExport;
}
