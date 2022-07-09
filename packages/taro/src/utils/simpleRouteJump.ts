/*
 * @Author: 邱狮杰
 * @Date: 2022-06-22 17:13:37
 * @LastEditTime: 2022-07-08 14:49:41
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

export type simpleRouteJumpConfig<T = unknown> = {
    method: jumpMethodName,
    url?: string
    // 预跳转回调
    // 返回值是falsy则拒绝跳转, 反之
    preJumpJnterceptor?: (params: T) => boolean
}


export interface triggerOptions<T extends object> {
    // 附加在跳转时的url上
    mete: T
}

/**
 * @description 简单的路由跳转
 * @example  
     new SimpleRouteJump().setMethod('navigateBack').setPreJumpJnterceptor().trigger({})
 */
export class SimpleRouteJump<Mete extends object, T extends jumpMethodName = 'navigateTo'> extends DefineJumpCallback {

    private simpleRouteJumpConfig: simpleRouteJumpConfig<Mete> = { method: 'navigateTo' }

    constructor(url?: string) {
        super()
        this.setUrl(url)
    }

    setUrl(url?: string): this {
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, url }
        return this
    }

    setMethod<M extends jumpMethodName>(method?: M): SimpleRouteJump<Mete, M> {
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, method: method || 'navigateTo' }
        // @ts-ignore
        return this
    }

    setPreJumpJnterceptor(fn?: simpleRouteJumpConfig<Mete>['preJumpJnterceptor']) {
        if (!fn) return this
        this.simpleRouteJumpConfig = { ...this.simpleRouteJumpConfig, preJumpJnterceptor: fn }
        return this
    }

    trigger(options?: Partial<triggerOptions<Mete>> & Omit<NonNullable<Parameters<getJumpParametersAccordingToJumpMethod<T>>[0]>, 'url'>) {
        if (this.simpleRouteJumpConfig.preJumpJnterceptor) {
            if (this.simpleRouteJumpConfig.preJumpJnterceptor(options?.mete as Mete)) {
                // @ts-ignore
                return jumpMethodContainer[this.simpleRouteJumpConfig.method]({ ...this.callbackCollection, ...options, url: `${this.simpleRouteJumpConfig.url}${parseParameters(options?.mete || {})}` })
            } else {
                throw new Error(`预跳转验证未通过 ${this.simpleRouteJumpConfig.url}`)
            }
        }
        if (!this.simpleRouteJumpConfig.preJumpJnterceptor) {
            // @ts-ignore
            return jumpMethodContainer[this.simpleRouteJumpConfig.method]({ ...this.callbackCollection, ...options, url: `${this.simpleRouteJumpConfig.url}${parseParameters(options?.mete || {})}` })
        }
    }

    static parseParameters = parseParameters
}

function parseParameters(mete: object) {
    if (typeof mete !== 'object') throw new Error(`${mete} 不是一个对象`)
    if (Array.isArray(mete)) throw new Error(`${mete} 不是一个对象 {} `)
    let h = '?'
    for (const key in mete) {
        if (h.length === 1) {
            // @ts-ignore
            h += `${key}=${mete[key]}`
            // @ts-ignore
        } else h += `&${key}=${mete[key]}`
    }
    return h
}

