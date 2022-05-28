/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:50:03
 * @LastEditTime: 2022-05-21 23:03:33
 * @Description: 
 * @FilePath: /repo/packages/utils/src/verification/phone.ts
 */


export interface phoneOptions {
    // 严格程度 默认宽松 最宽松|宽松|严谨
    stringency: 'loosest' | 'loose' | 'rigorous'
    // 自定义规则
    customRules: RegExp
    // 错误立即抛出 默认开启
    errorThrowsImmediately: boolean
    // 抛出时的处理函数
    throwHandling: () => void | Promise<void>
    // 验证错误时回调
    verificationFailed: () => void | Promise<void>
    // 抛错信息
    throwMsg: string
}

export class Phone {
    // 最严格验证
    private strictVerification: RegExp = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/
    // 宽松验证
    private laxValidation: RegExp = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
    // 最宽松
    private leastValidation: RegExp = /^(?:(?:\+|00)86)?1\d{10}$/
    // 验证方式
    private verify: RegExp = this.laxValidation

    private phone: string = ''

    private options?: Partial<phoneOptions> | null = null

    constructor(phone: string, ops?: Partial<phoneOptions>) {
        this.phone = phone
        this.options = ops
        this.filterVerificationMethod()
        this.errorThrowing()
    }

    private filterVerificationMethod() {
        // 验证规则
        // 自定义规则优先
        if (this.options?.customRules) {
            this.verify = this.options.customRules
            return
        }
        const h: { [key in phoneOptions['stringency']]: RegExp } = {
            'loose': this.laxValidation,
            'loosest': this.leastValidation,
            'rigorous': this.strictVerification
        }
        // 如选择验证模式
        if (this.options?.stringency) {
            this.verify = h[this.options.stringency]
            return
        }
    }

    /**
     * @description 抛出错误
     * 当手机验证失败时默认抛出错误 throw 终止进程
     * 除非用户手动取消改默认行为 
     * errorThrowsImmediately =  false 
     */
    private async errorThrowing() {
        if (this.options?.errorThrowsImmediately === false) return
        if (this.verify.test(this.phone)) return
        this.options?.throwHandling?.()
        throw new Error(this.options?.throwMsg || '手机号验证失败')
    }

    /**
     *  @description 当用户拒绝默认抛出错误时 使用的手动验证函数
     */
    verifyPhoneNumber(): boolean {
        const result = this.verify.test(this.phone)
        !result && this.options?.verificationFailed?.()
        return result
    }

    getPhone() {
        return this.phone
    }
}
