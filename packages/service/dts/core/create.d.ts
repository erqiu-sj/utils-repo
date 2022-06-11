import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { interceptor } from './injectInterceptor';
import { handlingUnexpectedResultsCaller } from "./unexpectedResults";
export interface ServiceRequestConfig extends AxiosRequestConfig {
    returnOnPromiseError?: unknown;
    preventUnexpectedTriggers?: boolean;
}
export declare class Service {
    private axios?;
    private interceptorPluginList;
    private mergeInterceptorPlugin;
    private defaultInterceptorParameter;
    private unexpectedResultsHandler?;
    constructor(request?: ServiceRequestConfig);
    collectUnexpectedResultsHandler(fn: handlingUnexpectedResultsCaller): this;
    injectionInterceptorPlugin(interceptorList: interceptor | interceptor[]): this;
    defaultInterceptor(interceptor?: interceptor): this;
    private requestTrigger;
    getAxios<T = unknown>(): (config?: (ServiceRequestConfig & T) | undefined) => Promise<AxiosPromise>;
}
