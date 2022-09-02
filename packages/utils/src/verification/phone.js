"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 22:50:03
 * @LastEditTime: 2022-08-28 13:11:30
 * @Description:
 * @FilePath: /repo/packages/utils/src/verification/phone.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
class Phone {
    constructor(phone, ops) {
        // 最严格验证
        this.strictVerification = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
        // 宽松验证
        this.laxValidation = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        // 最宽松
        this.leastValidation = /^(?:(?:\+|00)86)?1\d{10}$/;
        // 验证方式
        this.verify = this.laxValidation;
        this.phone = '';
        this.options = null;
        this.phone = phone;
        this.options = ops;
        this.filterVerificationMethod();
        this.errorThrowing();
    }
    filterVerificationMethod() {
        var _a, _b;
        // 验证规则
        // 自定义规则优先
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.customRules) {
            this.verify = this.options.customRules;
            return;
        }
        const h = {
            'loose': this.laxValidation,
            'loosest': this.leastValidation,
            'rigorous': this.strictVerification
        };
        // 如选择验证模式
        if ((_b = this.options) === null || _b === void 0 ? void 0 : _b.stringency) {
            this.verify = h[this.options.stringency];
            return;
        }
    }
    /**
     * @description 抛出错误
     * 当手机验证失败时默认抛出错误 throw 终止进程
     * 除非用户手动取消改默认行为
     * errorThrowsImmediately =  false
     */
    errorThrowing() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.errorThrowsImmediately) === false)
                return;
            if (this.verify.test(this.phone))
                return;
            (_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.throwHandling) === null || _c === void 0 ? void 0 : _c.call(_b);
            throw new Error(((_d = this.options) === null || _d === void 0 ? void 0 : _d.throwMsg) || '手机号验证失败');
        });
    }
    /**
     *  @description 当用户拒绝默认抛出错误时 使用的手动验证函数
     */
    verifyPhoneNumber() {
        var _a, _b;
        const result = this.verify.test(this.phone);
        !result && ((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.verificationFailed) === null || _b === void 0 ? void 0 : _b.call(_a));
        return result;
    }
    getPhone() {
        return this.phone;
    }
}
exports.Phone = Phone;
