/**
 * @description 同步捕获错误
 * @param promise
 * @param errorCaptured
 * @returns
 */
export declare function SynchronizationAwaitError<T = unknown, E = Error>(promise: Promise<T>, errorCaptured?: object): Promise<[E, null] | [null, T]>;
