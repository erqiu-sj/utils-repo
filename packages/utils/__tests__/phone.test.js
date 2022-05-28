"use strict";
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:47:31
 * @LastEditTime: 2022-05-21 23:07:59
 * @Description:
 * @FilePath: /repo/packages/utils/__tests__/phone.test.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const src_1 = require("../src");
(0, vitest_1.it)('通常用法', () => {
    const phone = new src_1.Phone('13983912420');
    (0, vitest_1.expect)(phone.getPhone()).toBe('13983912420');
});
(0, vitest_1.it)('手动验证', () => {
    let msg = 'success';
    // 关闭自动验证并抛错的默认行为
    const phone = new src_1.Phone('', {
        errorThrowsImmediately: false, verificationFailed() {
            // message.warn()
            msg = 'fail';
        }
    });
    (0, vitest_1.expect)(phone.verifyPhoneNumber()).toBeFalsy();
    (0, vitest_1.expect)(msg).toBe('fail');
    const p = new src_1.Phone('13983912420', { errorThrowsImmediately: false });
    (0, vitest_1.expect)(p.verifyPhoneNumber()).toBeTruthy();
    (0, vitest_1.expect)(p.getPhone()).toBe('13983912420');
});
(0, vitest_1.it)('最佳实践', () => {
    // let msg = ''
    // 参数语意化
    // 参数自检性
    // 与业务逻辑解耦
    function login(phone) {
        // 业务逻辑
        const p = phone.getPhone();
        // http
        // if
        // render
        return p;
    }
    (0, vitest_1.expect)(login(new src_1.Phone('13983912420'))).toBe("13983912420");
});
