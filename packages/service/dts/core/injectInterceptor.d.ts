import { AxiosRequestConfig, AxiosResponse } from 'axios';
export declare abstract class interceptor {
    abstract requestSuccessInterceptor(config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> | void | Promise<void>;
    abstract requestFailInterceptor(err: unknown): void | Promise<unknown> | unknown | Promise<void>;
    abstract responseSuccessInterceptor(response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> | void | Promise<void>;
    abstract responseFailInterceptor(err: unknown): void | Promise<unknown> | unknown | Promise<void>;
}
