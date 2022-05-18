/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 17:36:13
 * @LastEditTime: 2022-05-18 17:58:25
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/prizeResults/index.tsx
 */


import animejs from 'animejs'
import { FC, useEffect } from 'react'
import { useCommon, useLottery, verifyPhone } from '~/hooks'
import { useDisplayPrizes } from './hooks'
import './index.scss'


export interface PrizeResultsProps { }

const PrizeResults: FC<PrizeResultsProps> = () => {
    const { dynamicPrize } = useDisplayPrizes()
    const { luckyDraw } = useCommon()
    const { curStateWithLottery } = useLottery()

    useEffect(() => {
        if (curStateWithLottery.lotteryStatus !== 2) return
        if (curStateWithLottery.currentPrizeList.id === 12) {
            animejs({
                targets: ".prizeResult",
                bottom: '43.037vw',
                scale: 1,
                opacity: 1,
                autoplay: true
            })
        } else {
            let bottom = '58.037vw'
            const { callback } = verifyPhone(['iphone5', 'iphone678', 'iphone678p'], () => {
                bottom = '34vw'
            })
            callback()
            const { callback: callback1213Pro } = verifyPhone(['iphone1213/Pro', 'iphone1213/Pro/max'], () => {
                bottom = '44vw'
            })
            callback1213Pro()
            animejs({
                targets: ".prizeResult",
                bottom: bottom,
                scale: 1,
                opacity: 1,
                autoplay: true
            })
        }
    }, [curStateWithLottery.lotteryStatus])

    return <>
        <img src={dynamicPrize.src} alt="" className={`prizeResult ${dynamicPrize.className}`} />
    </>

}

export default PrizeResults
