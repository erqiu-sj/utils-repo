import { AxiosRequestConfig, AxiosResponse } from 'axios';
export interface descConfig<Req extends object = object, Res extends unknown = unknown> extends AxiosRequestConfig {
    reqDesc?: ((request: Req & AxiosRequestConfig) => string) | string;
    reqDescOption?: any[];
    resDesc?: ((response: AxiosResponse<Res>) => string) | string;
    resDescOption?: any[];
}
