import { AxiosRequestConfig } from 'axios';
import { requestConfig } from './cache';
export interface CacheConfig {
    useCache?: boolean;
    cacheExpirationTime?: number;
    cacheRules?: (config?: AxiosRequestConfig) => string;
}
export interface expirationMapType extends CacheConfig {
    cacheDate?: unknown;
    preAdded?: boolean;
}
export declare function defaultCacheRule(config: AxiosRequestConfig): string;
export declare const expirationMap: Map<string, Partial<expirationMapType>>;
export declare function hasCacheConfig(config: requestConfig): boolean;
