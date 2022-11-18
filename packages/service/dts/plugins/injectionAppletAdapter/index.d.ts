import { mergeFnWithPromiseFn } from '@mxnet/types';
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { interceptor } from "../../core/injectInterceptor";
export declare class InjectionAppletAdapter implements interceptor {
    private inject;
    constructor(injection: boolean | mergeFnWithPromiseFn<boolean, [], false>);
    requestFailInterceptor(err: unknown): unknown;
    responseFailInterceptor(err: unknown): unknown;
    requestSuccessInterceptor(config: AxiosRequestConfig<any>): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void>;
    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void>;
}
