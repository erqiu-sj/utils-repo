/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:00:31
 * @LastEditTime: 2022-05-17 10:31:37
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/index.tsx
 */
import animejs from 'animejs'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import smallLight from '~/assets/lotteryPage/1.png'
import initTips from '~/assets/lotteryPage/100.png'
import bigLight from '~/assets/lotteryPage/2.png'
import bases from '~/assets/lotteryPage/3.png'
import base from '~/assets/lotteryPage/5.png'
// import box from '~/assets/lotteryPage/box.png'
import buy from '~/assets/lotteryPage/buy.png'
import get from '~/assets/lotteryPage/get.png'
import open from '~/assets/lotteryPage/k.png'
import getTips from '~/assets/lotteryPage/pget.png'
import start1 from '~/assets/lotteryPage/start1.png'
import start2 from '~/assets/lotteryPage/start2.png'
import tips from '~/assets/lotteryPage/tips.png'
import { useLottery } from '~/hooks'
import SprintFrame from '../springFrame/index'
import './base.scss'
import Box from './components/box/box'
import PrizeResults from './components/prizeResults'
import { useOperationBlindBox } from './components/prizeResults/hooks'
import './header.scss'
import './index.scss'
import './operationAreaWithLuckDraw.scss'

export interface luckDrawProps { }

export interface headerProps { }

const Header: FC<headerProps> = () => {
    const { curStateWithLottery } = useLottery()
    useEffect(() => {
        setTimeout(() => {
            fadein({ targets: '.start' })
            fadein({ targets: ".headerTips" })
            fadein({ targets: ".prizeText" })
        }, 100);
    }, [curStateWithLottery.lotteryStatus])

    // 渐出
    function fadein(ops: animejs.AnimeParams) {
        animejs({
            ...ops, loop: 2, scale: 1, easing: 'easeInOutSine'
        })
    }
    return <div className='headerWithLuckDraw'>
        {curStateWithLottery.lotteryStatus === 1 ?
            <img src={initTips} alt="" className='init headerTips ' />
            : <></>}
        {curStateWithLottery.lotteryStatus === 2 ?
            <img src={getTips} alt="" className='get headerTips ' />
            : <></>}

        {
            curStateWithLottery.lotteryStatus === 2 ? <div className='prizeText'>
                {curStateWithLottery.currentPrizeList.tips}
            </div> : <></>
        }

        <div className='startBox'>
            <div className='startContainer'>
                <img src={start1} alt="" className={`start start1 ${curStateWithLottery.lotteryStatus === 1 && 'start1WithStatus1'}`} />
                <img src={start2} alt="" className='start start2' />
            </div>
        </div>
    </div>
}


export interface operationAreaProps {
    onOpenBlindBox?: () => void
    onGetPrize?: () => void
}

const OperationArea: FC<operationAreaProps> = ({ onOpenBlindBox, onGetPrize }) => {
    const { curStateWithLottery } = useLottery()
    return <div className='operationAreaWithLuckDraw'>
        {
            curStateWithLottery.lotteryStatus === 1 ? <div className='status1'>
                <div className='oper'>
                    <img src={open} alt="" className='btn' onClick={onOpenBlindBox} />
                    <img src={buy} alt="" className='btn' />
                </div>
                <img src={tips} alt="" className='tips' />
            </div> : <></>
        }
        {
            curStateWithLottery.lotteryStatus === 2 ? <img src={get} onClick={onGetPrize} alt="" className='getPrize' /> : <></>
        }
    </div>
}


export interface baseProps { }

const Base: FC<PropsWithChildren<baseProps>> = ({ }) => {
    const { blindBoxClosed, lotteryStatus, openlotteryStatusHandler, closelotteryStatusHandler } = useOperationBlindBox()
    useEffect(() => {
        appearanceAnimation({
            targets: ".basesLight",
            width: '40vw'
        })

        appearanceAnimation({
            targets: ".bigLight",
            width: '100vw'
        })

        appearanceAnimation({
            targets: ".smallLight",
            width: '88vw',
            complete() {
                openlotteryStatusHandler()
            }
        })
    }, [])

    function appearanceAnimation(ops: animejs.AnimeParams) {
        animejs({
            ...ops,
            easing: 'easeInQuad',
            opacity: 1,
            loop: 1
        })
    }
    // 开盲盒
    function openBlindBox() {
        closelotteryStatusHandler()
        return
    }

    return <>
        <div className='baseWithLuckdraw '>
            <div className='baseContainer'>
                <img src={base} alt="" className='base' />
                <img src={smallLight} alt="" className='smallLight' />
                <img src={bigLight} alt="" className='bigLight' />
                <img src={bases} alt="" className='basesLight' />
                <Box status={lotteryStatus} onCloseBoxComplete={blindBoxClosed} />
                <PrizeResults />
            </div>
        </div>
        <OperationArea onOpenBlindBox={openBlindBox} />
    </>
}





const LuckDraw: FC<luckDrawProps> = () => {
    return <div className='luckDraw'>
        <Header />
        <Base>
        </Base>
        {/* <SprintFrame /> */}
    </div>
}

export default LuckDraw
