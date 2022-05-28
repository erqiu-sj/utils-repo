import { Axios } from './core/create';
import { Cancel } from './plugins/cancel/cancel';
import { cancelHeader, cancelRequestConfiguration } from './plugins/cancel/config';
import type { interceptor } from './core/injectInterceptor';
import { requestCancellationHepler } from './utils/cancel';
export { Axios, requestCancellationHepler, cancelHeader, cancelRequestConfiguration, Cancel };
export type { interceptor };
