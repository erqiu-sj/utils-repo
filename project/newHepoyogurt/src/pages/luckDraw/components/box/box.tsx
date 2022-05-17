/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 11:41:39
 * @LastEditTime: 2022-05-17 10:24:10
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/box/box.tsx
 */

import animejs from 'animejs'
import { FC, useEffect, useRef } from 'react'
import box from '~/assets/lotteryPage/box.png'
import a from '~/assets/prize/1.png'
import b from '~/assets/prize/2.png'
import c from '~/assets/prize/3.png'
import d from '~/assets/prize/4.png'
import e from '~/assets/prize/5.png'
import f from '~/assets/prize/6.png'
import { useLottery } from '~/hooks'
import './box.scss'
import { position } from './data'

export interface boxProps {
    status?: boolean,
    onCloseBoxComplete?: () => void // 关闭盒子完成
}

const Box: FC<boxProps> = ({ status, onCloseBoxComplete }) => {
    const { curStateWithLottery } = useLottery()
    // 打开之后
    const afterOpening = useRef(false)

    useEffect(() => {
        if (curStateWithLottery.lotteryStatus !== 1) return
        if (status) openBox()
        else closeBox()
    }, [status])

    function openBox() {
        afterOpening.current = true
        animejs({
            targets: '.prizeBox',
            bottom: '33.037vw',
            scale: 1,
            opacity: 1,
            complete() {
                eject({ targets: '.displayPrizes1', delay: 0 }, 'lt')
                eject({ targets: '.displayPrizes2', delay: 200 }, 'tc')
                eject({ targets: '.displayPrizes3', delay: 400 }, 'rt')
                eject({ targets: '.displayPrizes4', delay: 600 }, 'lb')
                eject({ targets: '.displayPrizes5', delay: 800 }, 'bc')
                eject({ targets: '.displayPrizes6', delay: 1000 }, 'rb')
            }
        })
    }

    function closeBox() {
        if (!afterOpening.current) return
        closeEject({ targets: ".displayPrizes1", delay: 0 })
        closeEject({ targets: ".displayPrizes2", delay: 200 })
        closeEject({ targets: ".displayPrizes3", delay: 400 })
        closeEject({ targets: ".displayPrizes4", delay: 600 })
        closeEject({ targets: ".displayPrizes5", delay: 800 })
        closeEject({
            targets: ".displayPrizes6", delay: 1000, complete() {
                animejs({
                    targets: '.prizeBox',
                    bottom: '15.51852vw',
                    scale: 0,
                    opacity: 0,
                    complete() {
                        afterOpening.current = false
                        onCloseBoxComplete?.()
                    }
                })
            }
        })
    }

    function eject(ops: animejs.AnimeParams, po: string) {
        return animejs({
            // @ts-ignore
            keyframes: position[po],
            duration: 300,
            easing: 'easeInOutSine',
            ...ops,
        })
    }

    function closeEject(ops: animejs.AnimeParams) {
        animejs({
            ...ops,
            translateX: '0',
            translateY: '0',
            opacity: 0,
            duration: 300,
            scale: 0,
        })
    }

    return <>
        <img src={box} alt="" className='prizeBox' />
        <img src={b} alt="" className='displayPrizes1' />
        <img src={f} alt="" className='displayPrizes2' />
        <img src={e} alt="" className='displayPrizes3' />
        <img src={d} alt="" className='displayPrizes4' />
        <img src={c} alt="" className='displayPrizes5' />
        <img src={a} alt="" className='displayPrizes6 d6' />
    </>
}

export default Box

