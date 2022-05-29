import { CacheConfig, expirationMapType } from './config';
declare type generateExpirationTimeType = 'min' | 'hour' | 'second';
/**
 * @description 过期时间
 */
export declare class ExpirationTime {
    private type?;
    private timer?;
    constructor(type: generateExpirationTimeType, timer: number);
    verify(type: generateExpirationTimeType, timer: number): void;
    /**
     * @description 生成时间
     * @returns
     */
    generateExpirationTime(): number;
    /**
     * @description 是否过期
     * @param compareTime  对比时间
     * @param curTime  当前时间
     * @returns  { boolean }
     */
    static isItExpired(compareTime: number, curTime?: number): boolean;
}
export declare class CacheData {
    preAddACache(rule: string, payload: CacheConfig): void;
    fillTheCache(rule: string, data: unknown): void;
    removeCache(rule: string): void;
    hasCache(rule: string): boolean;
    cachedAndAvailable(rule: string): boolean;
    getCache(rule: string): Partial<expirationMapType> | undefined;
}
export {};
