import { AxiosRequestConfig } from 'axios';
export declare type requestRule = string;
export declare const cancelHeader = "cancelVerification";
export declare const requestContainer: Map<string, boolean>;
export declare function defaultRules(config: AxiosRequestConfig): requestRule;
export interface cancelRequestConfiguration {
    cancellationRules: (config?: AxiosRequestConfig) => requestRule;
}
