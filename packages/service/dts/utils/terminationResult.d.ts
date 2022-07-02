import { ServiceRequestConfig } from '../core/create';
export declare class TerminationResult<T> {
    ConfigurationParameters(config: ServiceRequestConfig & T): {
        getConfiguration(): ServiceRequestConfig<string[]>;
        terminateTrigger(): void;
    };
}
