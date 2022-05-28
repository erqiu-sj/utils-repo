/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 15:56:58
 * @LastEditTime: 2022-05-23 13:52:21
 * @Description: 
 * @FilePath: /newHepoyogurt/src/hooks/usePhone.ts
 */
type verifyPhoneTypes = 'iphone1213/Pro/max' | 'iphone1213/Pro' | 'iphone5' | 'iphone678' | 'iphone678p' | 'iphonex' | 'iphonexr'

export function verifyPhone(type: verifyPhoneTypes[], cb?: () => void) {

    const isPhone = /iphone/gi.test(window.navigator.userAgent)
    // iphone 5
    const iphone5 = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 320)
    // iphone 678
    const iphone68 = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 375)
    // iphone 678 p
    const iphone68p = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 736)

    const iphonex = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375)

    const iphonexr = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414)

    const iphone1213pro = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 390)

    const iphone1213proMax = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 428)

    // iphone 5
    // const iphone5 = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width >= 320)
    // // iphone 678
    // const iphone68 = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width >= 375)
    // // iphone 678 p
    // const iphone68p = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width >= 414 && window.screen.height <= 672)

    // const iphonex = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width >= 375)

    // const iphonexr = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 808)

    // const iphone1213pro = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width >= 390)

    // const iphone1213proMax = !!(isPhone && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width >= 428)

    const h: { [key in verifyPhoneTypes]: boolean } = {
        'iphone5': iphone5,
        'iphone678': iphone68,
        'iphone678p': iphone68p,
        'iphonex': iphonex,
        'iphonexr': iphonexr,
        'iphone1213/Pro': iphone1213pro,
        'iphone1213/Pro/max': iphone1213proMax
    }

    const isReturnFn = type.some(i => { return h[i] })

    function callback() {
        isReturnFn && cb?.()
    }

    return {
        callback
    }
}
