import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { interceptor } from '../../core/injectInterceptor';
import { cancelRequestConfiguration } from './config';
declare type requestConfig = AxiosRequestConfig & cancelRequestConfiguration;
declare type responseConfig = AxiosResponse<any, requestConfig>;
export declare class Cancel implements interceptor {
    requestFailInterceptor(err: unknown): void;
    responseFailInterceptor(err: unknown): void;
    requestSuccessInterceptor(config: requestConfig): void | AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> | Promise<void>;
    responseSuccessInterceptor(response: responseConfig): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void>;
}
export {};
