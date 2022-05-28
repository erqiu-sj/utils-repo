/*
 * @Author: 邱狮杰
 * @Date: 2022-05-10 22:47:31
 * @LastEditTime: 2022-05-21 23:07:59
 * @Description: 
 * @FilePath: /repo/packages/utils/__tests__/phone.test.ts
 */

import { expect, it } from 'vitest';

import { Phone } from '../src';

it('通常用法', () => {
    const phone = new Phone('13983912420')
    expect(phone.getPhone()).toBe('13983912420')
})

it('手动验证', () => {
    let msg = 'success'

    // 关闭自动验证并抛错的默认行为

    const phone = new Phone('', {
        errorThrowsImmediately: false, verificationFailed() {
            // message.warn()
            msg = 'fail'
        }
    })

    expect(phone.verifyPhoneNumber()).toBeFalsy()

    expect(msg).toBe('fail')

    const p = new Phone('13983912420', { errorThrowsImmediately: false })

    expect(p.verifyPhoneNumber()).toBeTruthy()

    expect(p.getPhone()).toBe('13983912420')

})

it('最佳实践', () => {
    // let msg = ''
    // 参数语意化
    // 参数自检性
    // 与业务逻辑解耦
    function login(phone: Phone) {
        // 业务逻辑
        const p = phone.getPhone()
        // http
        // if
        // render
        return p
    }

    expect(login(new Phone('13983912420'))).toBe("13983912420")

})