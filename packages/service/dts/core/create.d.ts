import { AxiosRequestConfig, AxiosResponse } from 'axios';
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
declare type requestResultType<R> = R extends object ? R : Promise<AxiosResponse<any, any>>;
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
    /**
     * @description 添加小程序(微信，支付宝，钉钉，百度)适配器
     * @returns { this }
     */
    addAppletAdapter(): this;
    getAxios<T = unknown>(): <R>(config?: (ServiceRequestConfig<V> & T) | undefined) => Promise<Awaited<requestResultType<R>>>;
}
export {};
