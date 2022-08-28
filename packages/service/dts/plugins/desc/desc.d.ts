import { AxiosResponse } from 'axios';
import { interceptor } from '../../core/injectInterceptor';
import { descConfig } from './config';
export declare class Desc<Req extends object, Res extends any> implements interceptor {
    requestFailInterceptor(err: unknown): void;
    requestSuccessInterceptor(config: descConfig<Req>): void | descConfig<Req> | Promise<descConfig<Req>> | Promise<void>;
    responseFailInterceptor(err: unknown): void;
    responseSuccessInterceptor(response: AxiosResponse<any, any>): void | AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> | Promise<void>;
}
