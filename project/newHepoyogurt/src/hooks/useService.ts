/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 16:23:15
 * @LastEditTime: 2022-05-23 15:00:01
 * @Description: 
 * @FilePath: /newHepoyogurt/src/hooks/useService.ts
 */


import { SynchronizationAwaitError } from 'synchronizationawaiterror'
import { httpHelper, mergeCheck, response } from '~/service/index'
import { useCommon } from './useCommon'
import { useLottery } from './useLottery'
import { useRouter } from './useRouter'

export interface fillResponse {
    desc: string
    fans: {
        id: string
        openid: string
        nickname: string
        avatar: string
        award: string
        address: string
        created_at: string
        ip: string
        needinfo: number
        phone: string
        truename: string
    }
    gametimes: string
    imgUrl: string
    link: string
    myawards: { type: string }[]
    needinfo: number
    title: string
}



export interface luckdrawResponse {
    id: string
    title: string
    type?: string
    url?: string
}

export interface saveUserinfoRequest {
    address: string
    phone: string
    truename: string
}

export function useService() {

    const { dispatchWithCommon, curStateWithCommon } = useCommon()
    const { dispatchWithLottery } = useLottery()
    const { go } = useRouter()

    async function fillComonData() {
        const [err, res] = await SynchronizationAwaitError(httpHelper({}))
        mergeCheck(err, res, '初始化失败，请联系管理员');
        const data = (res as response<fillResponse>).data

        if (parseInt(data.gametimes) === 0 && data.myawards.length && !curStateWithCommon.init) {
            // 领取过
            dispatchWithLottery.setLotteryId({ id: parseInt(data.myawards[data.myawards.length - 1].type) })
            dispatchWithLottery.setLotteryStatus({
                lotteryStatus: 2
            })
            go('luckDraw')
        }

        dispatchWithCommon.setFillin({
            common: data
        })

        dispatchWithCommon.setInit({ init: true })
    }

    async function luckDrawHandler(suc?: () => void) {
        const [err, res] = await SynchronizationAwaitError(httpHelper({
            params: {
                action: 'award'
            }
        }))
        mergeCheck(err, res, '抽奖失败，请重试');
        const data = (res as response<luckdrawResponse>).data
        suc?.()
        dispatchWithLottery.setLotteryId({ id: parseInt(data.id) })
    }

    // https://act.yoois.com/zt/qr3/api.php?i=3&logout=1&test=1&action=saveinfo&truename=a&phone=133&address=myadd

    async function saveUserInfo(params: saveUserinfoRequest) {
        const [err, res] = await SynchronizationAwaitError(httpHelper({
            params: {
                action: "saveinfo",
                ...params
            }
        }))
        mergeCheck(err, res, '保存失败，请重试');
        await fillComonData()
        return res
    }

    // https://act.yoois.com/zt/qr3/api.php?i=3&logout=1&test=1&action=award

    return {
        saveUserInfo,
        fillComonData,
        luckDrawHandler
    }
}

