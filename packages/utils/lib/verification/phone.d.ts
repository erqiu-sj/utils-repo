import { mergeFnWithPromiseFn } from "@mxnet/types/dts";
export interface phoneOptions {
    stringency: 'loosest' | 'loose' | 'rigorous';
    customRules: RegExp;
    errorThrowsImmediately: boolean;
    throwHandling: mergeFnWithPromiseFn<void>;
    verificationFailed: mergeFnWithPromiseFn<void>;
    throwMsg: string;
}
export declare class Phone {
    private strictVerification;
    private laxValidation;
    private leastValidation;
    private verify;
    private phone;
    private options?;
    constructor(phone: string, ops?: Partial<phoneOptions>);
    private filterVerificationMethod;
    /**
     * @description 抛出错误
     * 当手机验证失败时默认抛出错误 throw 终止进程
     * 除非用户手动取消改默认行为
     * errorThrowsImmediately =  false
     */
    private errorThrowing;
    /**
     *  @description 当用户拒绝默认抛出错误时 使用的手动验证函数
     */
    verifyPhoneNumber(): boolean;
    getPhone(): string;
}
