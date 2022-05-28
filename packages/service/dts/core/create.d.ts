import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { interceptor } from './injectInterceptor';
export declare class Axios {
    private axios?;
    private interceptorPluginList;
    private mergeInterceptorPlugin;
    private defaultInterceptorParameter;
    constructor(request?: AxiosRequestConfig);
    injectionInterceptorPlugin(interceptorList: interceptor | interceptor[]): this;
    defaultInterceptor(interceptor?: interceptor): this;
    getAxios(): () => AxiosInstance;
}
