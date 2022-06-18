import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { interceptor } from './injectInterceptor';
import { handlingUnexpectedResultsCaller } from "./unexpectedResults";
/**
 *  V = 版本号列表
 */
export interface ServiceRequestConfig<V extends string[] = string[]> extends AxiosRequestConfig {
    returnOnPromiseError?: unknown;
    preventUnexpectedTriggers?: boolean;
    version?: V[number];
}
export declare class Service<V extends string[] = string[]> {
    private axios?;
    private interceptorPluginList;
    private mergeInterceptorPlugin;
    private defaultInterceptorParameter;
    private unexpectedResultsHandler?;
    private multiVersionSwitching?;
    constructor(request?: ServiceRequestConfig<V>);
    collectUnexpectedResultsHandler(fn: handlingUnexpectedResultsCaller): this;
    injectionInterceptorPlugin(interceptorList: interceptor | interceptor[]): this;
    defaultInterceptor(interceptor?: interceptor): this;
    private requestTrigger;
    setVersionPlaceholder(pl: string): this;
    switchVersion(item: V[number]): this;
    getAxios<T = unknown>(): (config?: (ServiceRequestConfig<V> & T) | undefined) => Promise<AxiosPromise>;
}
