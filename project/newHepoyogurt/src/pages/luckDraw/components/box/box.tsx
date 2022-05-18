/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 11:41:39
 * @LastEditTime: 2022-05-18 16:14:44
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/box/box.tsx
 */

import animejs from 'animejs'
import { FC, startTransition, useEffect, useRef } from 'react'
import box from '~/assets/lotteryPage/box.png'
import a from '~/assets/prize/1.png'
import b from '~/assets/prize/2.png'
import c from '~/assets/prize/3.png'
import d from '~/assets/prize/4.png'
import e from '~/assets/prize/5.png'
import f from '~/assets/prize/6.png'
import { useLottery, verifyPhone } from '~/hooks'
import './box.scss'
import { position, positionBigLayout, positionBigLayoutWithMax, positionWidhIphone5 } from './data'

export interface boxProps {
    status?: boolean,
    onCloseBoxComplete?: () => void // 关闭盒子完成
    onInitComplete?: () => void // 盒子打开完成
}

const Box: FC<boxProps> = ({ onInitComplete, status, onCloseBoxComplete }) => {
    const { curStateWithLottery } = useLottery()

    // 打开之后
    const afterOpening = useRef(false)

    useEffect(() => {
        // alert(`${window.screen.width} ${window.screen.height}, 'wh'`)
        if (curStateWithLottery.lotteryStatus !== 1) return
        if (status) openBox()
        else closeBox()
    }, [status])

    function openBox() {
        afterOpening.current = true
        let bottom = '33.037vw'

        const { callback } = verifyPhone(['iphone5', 'iphone678', 'iphone678p'], () => {
            bottom = '27vw'
        })
        callback()
        const { callback: callback1213Pro } = verifyPhone(['iphone1213/Pro'], () => {
            bottom = '26vw'
        })

        callback1213Pro()

        animejs({
            targets: '.prizeBox',
            bottom: bottom,
            scale: 1,
            opacity: 1,
            complete() {
                // animejs({
                //     targets: '.prizeBox',
                //     loop: true,
                //     easing: 'linear',
                //     duration: 3000,
                //     bottom: `${parseFloat(bottom) + 3}vw`,
                // })
                eject({ targets: '.displayPrizes1', delay: 0 }, 'lt')
                eject({ targets: '.displayPrizes2', delay: 200 }, 'tc')
                eject({ targets: '.displayPrizes3', delay: 400 }, 'rt')
                eject({ targets: '.displayPrizes4', delay: 600 }, 'lb')
                eject({ targets: '.displayPrizes5', delay: 800 }, 'bc')
                eject({
                    targets: '.displayPrizes6', delay: 1000, complete() {
                        console.log('what?')
                        onInitComplete?.()
                    }
                }, 'rb')
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
        let positionLayout = position
        const { callback } = verifyPhone(['iphone5', 'iphone678', 'iphone678p'], () => {
            positionLayout = positionWidhIphone5
        })
        callback()
        const { callback: callbackIphone1213Pro } = verifyPhone(['iphone1213/Pro'], () => {
            positionLayout = positionBigLayout
        })
        callbackIphone1213Pro()

        const { callback: callbackIphone1213ProMax } = verifyPhone(['iphone1213/Pro/max'], () => {
            positionLayout = positionBigLayoutWithMax
        })
        callbackIphone1213ProMax()
        return animejs({
            // @ts-ignore
            keyframes: positionLayout[po],
            duration: 300,
            easing: 'easeInOutSine',
            ...ops,
            complete() {
                // @ts-ignore
                ops?.complete?.()
                // @ts-ignore
                const translateY = positionLayout[po][0].translateY
                let instance: animejs.AnimeInstance | null = animejs({
                    targets: ops.targets,
                    translateY: `${parseInt(translateY) - 4}vw`,
                    easing: 'linear',
                    duration: 3000,
                    loop: true,
                    update() {
                        if (!status) {
                            instance?.pause()
                            instance = null
                        }
                    }
                })
            }
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
        <img src={b} alt="" className='displayPrizes1  displayPrizes' />
        <img src={f} alt="" className='displayPrizes2 displayPrizes' />
        <img src={e} alt="" className='displayPrizes3 displayPrizes' />
        <img src={d} alt="" className='displayPrizes4 displayPrizes' />
        <img src={c} alt="" className='displayPrizes5 displayPrizes' />
        <img src={a} alt="" className='d6 displayPrizes6 displayPrizes' />
    </>
}

export default Box

