
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 15:58:52
 * @LastEditTime: 2022-05-21 19:36:09
 * @Description: 
 * @FilePath: /jinkeEstate/src/hooks/useService.ts
 */
import { SynchronizationAwaitError } from 'synchronizationawaiterror';
import { common, curAddr } from '~/reducer/common';
import { httpHelper, mergeCheck, response } from '~/service/index';
import { useCommon } from './useCommon';
import { useRouter } from './useRouter';


export interface saveRequest {
    truename?: string
    address?: string
    phone?: string
}

export function useService() {

    const { dispatchWithCommon, curStateWithCommon } = useCommon()

    const { go } = useRouter()

    function openSharingPage() {
        if (curStateWithCommon.commonData.fans?.award2 === '') {
            go('lottery')
            dispatchWithCommon.setupProcess({ setupProcess: 3 })
        }
    }

    async function saveInfo(params: saveRequest) {
        const [err, res] = await SynchronizationAwaitError<response<curAddr>, response<curAddr>>(
            // @ts-ignore
            httpHelper({
                params: {
                    action: 'saveinfo',
                    ...params
                }
            })
        )
        mergeCheck(err, res, '保存内容失败，请重试')
        return res
    }

    async function news() {
        const [err, res] = await SynchronizationAwaitError<response<curAddr>, response<curAddr>>(
            // @ts-ignore
            httpHelper({
                params: {
                    action: 'news',
                }
            })
        )
        mergeCheck(err, res, '初始化失败，请重试')
        dispatchWithCommon.setCurAddr({
            addr: res?.data
        })
        return res
    }

    async function initHandler(x: number, y: number) {
        const [err, res] = await SynchronizationAwaitError<response<common>, response<common>>(
            // @ts-ignore
            httpHelper({
                params: {
                    action: 'index',
                    lat: x,
                    lng: y
                    // lat: 29.35,
                    // lng: 106.33
                }
            })
        )
        mergeCheck(err, res, '初始化失败，请重试')

        if (res?.data.fans.award1 !== '') {
            go('lottery')
            if (res?.data.fans.award1 === "3") wineWinning(false)
            else wineWinning(true)
        }

        dispatchWithCommon.setFillIn({ commonData: res?.data || {} })
    }

    async function init() {
        // initHandler(29.35, 106.33)
        if (
            localStorage.getItem('latitude') || localStorage.getItem('longitude')
        ) {
            initHandler(parseFloat(localStorage.getItem('latitude') as string), parseFloat(localStorage.getItem('longitude') as string))
        } else {
            window.wx.ready(function () {
                window.wx.getLocation({
                    async success({ latitude, longitude }) {
                        localStorage.setItem('latitude', latitude.toString())
                        localStorage.setItem('longitude', longitude.toString())
                        initHandler(latitude, longitude)
                    }
                })
            })
        }
    }

    function iceCreamWinner(status: boolean) {
        dispatchWithCommon.setMissedWine({ missedWine: false })
        if (status) {
            dispatchWithCommon.setupProcess({ setupProcess: 5 })
            dispatchWithCommon.setLotteryId({ setLotteryId: 2 })
            dispatchWithCommon.setIceCreamMissed({ iceCreamMissed: false })
        } else {
            dispatchWithCommon.setupProcess({ setupProcess: 5 })
            dispatchWithCommon.setLotteryId({ setLotteryId: 0 })
            dispatchWithCommon.setIceCreamMissed({ iceCreamMissed: true })
        }
    }

    async function iceCreamHandler() {
        // award2 是抽雪糕   2表示 中奖  3表示 未中奖 空白表示 未抽奖
        const [err, res] = await SynchronizationAwaitError<response<{ id: number }>, response<{ id: number }>>(
            // @ts-ignore
            httpHelper({
                params: {
                    action: 'award2',
                }
            })
        )

        mergeCheck(err, res, '抽奖失败，请重试')
        if (res?.data && res?.data.id === 3) {
            iceCreamWinner(false)
        }
        if (res?.data && res.data.id === 2) {
            iceCreamWinner(true)
        }
        return res
    }

    function wineWinning(status: boolean) {
        dispatchWithCommon.setIceCreamMissed({ iceCreamMissed: false })
        if (status) {
            dispatchWithCommon.setupProcess({ setupProcess: 5 })
            dispatchWithCommon.setLotteryId({ setLotteryId: 1 })
            dispatchWithCommon.setMissedWine({ missedWine: false })
        } else {
            dispatchWithCommon.setupProcess({ setupProcess: 5 })
            dispatchWithCommon.setLotteryId({ setLotteryId: 0 })
            dispatchWithCommon.setMissedWine({ missedWine: true })
        }
    }
    async function smokeWine(sucCb?: () => void) {
        // 1表示 中奖  3表示 未中奖 空白表示 未抽奖
        const [err, res] = await SynchronizationAwaitError<response<{ id: number }>, response<{ id: number }>>(
            // @ts-ignore
            httpHelper({
                params: {
                    action: 'award1',
                }
            })
        )
        mergeCheck(err, res, '抽奖失败，请重试')
        if (res?.data && res.data.id === 3) wineWinning(false)
        if (res?.data && res.data.id === 1) wineWinning(true)
        sucCb?.()
    }

    return {
        smokeWine,
        init,
        news,
        saveInfo,
        iceCreamHandler,
        openSharingPage,
        wineWinning
    }
}
