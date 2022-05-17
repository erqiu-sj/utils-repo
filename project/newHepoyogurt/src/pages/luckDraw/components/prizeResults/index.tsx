/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 17:36:13
 * @LastEditTime: 2022-05-17 10:17:06
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/prizeResults/index.tsx
 */


import animejs from 'animejs'
import { FC, useEffect } from 'react'
import { useLottery } from '~/hooks'
import { useDisplayPrizes } from './hooks'
import './index.scss'


export interface PrizeResultsProps { }

const PrizeResults: FC<PrizeResultsProps> = () => {
    const { dynamicPrize, } = useDisplayPrizes()
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
            animejs({
                targets: ".prizeResult",
                bottom: '58.037vw',
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
