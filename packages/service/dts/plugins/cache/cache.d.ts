import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { interceptor } from '../../core/injectInterceptor';
import { CacheConfig } from './config';
export declare type requestConfig = AxiosRequestConfig & Partial<CacheConfig>;
export declare type responseConfig = AxiosResponse<any, Partial<CacheConfig>>;
export declare class CachePrerequisites {
    private config;
    constructor(config: requestConfig);
    areThereCachePrerequisites(): boolean;
    useCache(): unknown[];
}
export declare class Cache implements interceptor {
    requestFailInterceptor(err: unknown): void;
    responseFailInterceptor(err: unknown): void;
    requestSuccessInterceptor(config: requestConfig): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void>;
    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void>;
}
