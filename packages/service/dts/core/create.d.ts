import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { interceptor } from './injectInterceptor';
export declare class Service {
    private axios?;
    private interceptorPluginList;
    private mergeInterceptorPlugin;
    private defaultInterceptorParameter;
    constructor(request?: AxiosRequestConfig);
    injectionInterceptorPlugin(interceptorList: interceptor | interceptor[]): this;
    defaultInterceptor(interceptor?: interceptor): this;
    getAxios<T = unknown>(): (config?: (AxiosRequestConfig<any> & T) | undefined) => AxiosPromise;
}