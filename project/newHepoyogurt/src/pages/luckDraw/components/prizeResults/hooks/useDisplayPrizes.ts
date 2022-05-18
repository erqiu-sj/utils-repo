/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:25:00
 * @LastEditTime: 2022-05-18 16:58:58
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/prizeResults/hooks/useDisplayPrizes.ts
 */

import { useMemo } from 'react'
import c from '~/assets/prize/turntable/0.88.png'
import one from '~/assets/prize/turntable/1.png'
import d from '~/assets/prize/turntable/150.png'
import two from '~/assets/prize/turntable/2.png'
import b from '~/assets/prize/turntable/6666.png'
import a from '~/assets/prize/turntable/8888.png'
import fitrue from '~/assets/prize/turntable/fiture.png'
import g from '~/assets/prize/turntable/gun.png'
import k from '~/assets/prize/turntable/kettle.png'
import kq from '~/assets/prize/turntable/kq.png'
import m from '~/assets/prize/turntable/mike.png'
import s from '~/assets/prize/turntable/s.png'
import sw from '~/assets/prize/turntable/switch.png'
import { useLottery } from '~/hooks'

export function useDisplayPrizes() {
    const { curStateWithLottery } = useLottery()

    const dynamicPrize = useMemo(() => {
        const curId = curStateWithLottery.prizeList.find(item => item.id === curStateWithLottery.currentPrizeList.id)?.id || 0
        // const curId = curStateWithLottery.prizeList[curStateWithLottery.currentPrizeList.id].id
        const h: {
            [key: string]: {
                className: string
                src: string
            }
        } = {
            1: {
                className: "kettle",
                src: k
            },
            2: {
                className: 'skippingRope',
                src: s
            },
            3: {
                className: "coupon",
                src: d
            },
            4: {
                className: "gun",
                src: g
            },
            5: {
                className: "mike",
                src: m
            },
            6: {
                className: "switch",
                src: sw
            },
            7: {
                className: "kq",
                src: kq
            },
            8: {
                className: "smallredEnvelope",
                src: c
            },
            9: {
                className: "smallredEnvelope",
                src: one
            },
            10: {
                className: "smallredEnvelope",
                src: two
            },
            11: {
                className: "bigredEnvelope",
                src: b
            },
            12: {
                className: "bigredEnvelope",
                src: a
            },
            13: {
                className: "fitrue",
                src: fitrue
            }
        }

        const result = h[curId.toString()] || { className: "kettle", src: '' }

        return result
    }, [curStateWithLottery])

    return {
        dynamicPrize,
    }
}