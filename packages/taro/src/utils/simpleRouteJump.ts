/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 17:13:37
 * @LastEditTime: 2022-06-25 10:03:06
 * @Description: 简单的路由跳转
 * @FilePath: /repo/packages/taro/src/utils/simpleRouteJump.ts
 */

import { navigateBack, navigateTo, redirectTo, reLaunch } from "@tarojs/taro"

export interface callbackCollectionTypes {
    complete?: (res: TaroGeneral.CallbackResult) => void
    fail?: (res: TaroGeneral.CallbackResult) => void
    success?: (res: TaroGeneral.CallbackResult) => void
}

export class DefineJumpCallback {
    protected callbackCollection: Partial<callbackCollectionTypes> = {}

    success(cb?: ((res: TaroGeneral.CallbackResult) => void)) {
        this.callbackCollection = { ...this.callbackCollection, success: cb }
        return this
    }
    fail(cb?: ((res: TaroGeneral.CallbackResult) => void)) {
        this.callbackCollection = { ...this.callbackCollection, fail: cb }
        return this
    }
    complete(cb?: ((res: TaroGeneral.CallbackResult) => void)) {
        this.callbackCollection = { ...this.callbackCollection, complete: cb }
        return this
    }
}



export type jumpMethod = typeof navigateBack | typeof navigateTo | typeof reLaunch | typeof redirectTo

export type jumpMethodName = 'navigateBack' | 'navigateTo' | 'reLaunch' | 'redirectTo'

export type getJumpParametersAccordingToJumpMethod<T extends jumpMethodName> =
    T extends 'navigateBack' ? typeof navigateBack :
    T extends 'navigateTo' ? typeof navigateTo :
    T extends 'reLaunch' ? typeof reLaunch :
    T extends 'redirectTo' ? typeof redirectTo : never

const jumpMethodContainer: { [key in jumpMethodName]: jumpMethod } = {
    'navigateBack': navigateBack,
    'navigateTo': navigateTo,
    'reLaunch': reLaunch,
    'redirectTo': redirectTo
}

export type simpleRouteJumpConfig = {
    method: jumpMethodName,
    url?: string
    // 预跳转回调
    // 返回值是falsy则拒绝跳转, 反之
    preJumpJnterceptor?: () => boolean
}


export interface triggerOptions {
    // 附加在跳转时的url上
    mete: object
}

/**
 * @description 简单的路由跳转
 * @example  
     new SimpleRouteJump().setMethod('navigateBack').setPreJumpJnterceptor().trigger({})
 */
export class SimpleRouteJump<T extends jumpMethodName = 'navigateTo'> extends DefineJumpCallback {

    private simpleRouteJumpConfig: simpleRouteJumpConfig = { method: 'navigateBack' }

    constructor(url: string) {
        super()
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, url }
    }

    setMethod<M extends jumpMethodName = 'navigateTo'>(method?: M): SimpleRouteJump<M> {
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, method: method || 'navigateTo' }
        // @ts-ignore
        return this
    }

    setPreJumpJnterceptor(fn?: simpleRouteJumpConfig['preJumpJnterceptor']) {
        if (!fn) return this
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, preJumpJnterceptor: fn }
        return this
    }

    trigger(options?: Partial<triggerOptions> & NonNullable<Parameters<getJumpParametersAccordingToJumpMethod<T>>[0]>) {
        // @ts-ignore
        return jumpMethodContainer[this.simpleRouteJumpConfig.method]({ ...this.callbackCollection, ...options, url: `${this.simpleRouteJumpConfig.url}${parseParameters(options?.mete)}` })
    }

    static parseParameters = parseParameters
}

function parseParameters(mete: object) {
    if (typeof mete !== 'object') throw new Error(`${mete} 不是一个对象`)
    if (Array.isArray(mete)) throw new Error(`${mete} 不是一个对象 {} `)
    let h = '?'
    for (const key in mete) {
        // @ts-ignore
        h += `${key} = ${mete[key]} & `
    }
    return h
}