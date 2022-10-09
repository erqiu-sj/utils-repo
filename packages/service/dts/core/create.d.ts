import { AxiosRequestConfig } from 'axios';
import { interceptor } from './injectInterceptor';
import { handlingUnexpectedResultsCaller } from './unexpectedResults';
/**
 *  V = 版本号列表
 */
export interface ServiceRequestConfig<V extends string[] = string[]> extends AxiosRequestConfig {
    returnOnPromiseError?: unknown;
    preventUnexpectedTriggers?: boolean;
    version?: V[number];
}
declare type requestResultType<R> = Promise<R>;
export declare class Service<V extends string[] = string[], T extends unknown = unknown> {
    private axios?;
    private interceptorPluginList;
    private mergeInterceptorPlugin;
    private defaultInterceptorParameter;
    private unexpectedResultsHandler?;
    private multiVersionSwitching?;
    constructor(request?: ServiceRequestConfig<V> & T);
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
    getAxios(): <R>(config?: Partial<ServiceRequestConfig<V> & T> | undefined) => Promise<Awaited<R>>;
}
export {};
