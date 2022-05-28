import { AxiosInstance } from 'axios';
import { interceptor } from './injectInterceptor';
export declare class MergeInterceptorPlugin {
    collectionPlugin(interceptorList: interceptor[], defaultInterceptor: interceptor | null, axios: AxiosInstance): AxiosInstance;
    private parsePlugin;
    private schedulingPluginCallbacks;
}
