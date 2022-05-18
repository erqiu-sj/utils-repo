/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:00:31
 * @LastEditTime: 2022-05-18 17:58:38
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/index.tsx
 */
import animejs from 'animejs'
import { FC, PropsWithChildren, useEffect } from 'react'
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
import { useCommon, useLottery, useService, useSpringFrame } from '~/hooks'
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
    const { dispatchWithSpringFrame } = useSpringFrame()
    const { isFillUserInfo, luckyDraw } = useCommon()

    function getPrizeHandler() {
        if (!isFillUserInfo) {
            dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
            dispatchWithSpringFrame.setPopStatusBox({
                popStatusBox: { id: 1 }
            })
        } else {
            alert('领取成功')
        }

        onGetPrize?.()
    }

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
            curStateWithLottery.lotteryStatus === 2 ? <img src={get} style={luckyDraw ? { filter: 'grayscale(1)' } : {}} onClick={getPrizeHandler} alt="" className='getPrize' /> : <></>
        }
    </div>
}

export interface baseProps { }

const Base: FC<PropsWithChildren<baseProps>> = ({ }) => {

    const { boxInitAnim, blindBoxClosed, lotteryStatus, openlotteryStatusHandler, closelotteryStatusHandler, setBoxInitAnimSuccess } = useOperationBlindBox()

    useEffect(() => {
        appearanceAnimation({
            targets: ".basesLight",
            width: '40vw'
        })

        appearanceAnimation({
            targets: ".bigLight",
            opacity: 0.5,
            width: '100vw'
        })

        appearanceAnimation({
            targets: ".smallLight",
            width: '88vw',
            opacity: 0.5,
            complete() {
                openlotteryStatusHandler()
            }
        })
    }, [])

    function appearanceAnimation(ops: animejs.AnimeParams) {
        animejs({
            easing: 'easeInQuad',
            opacity: 1,
            loop: 1,
            ...ops,
        })
    }
    // 开盲盒
    function openBlindBox() {
        if (!boxInitAnim) return
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
                <Box onInitComplete={setBoxInitAnimSuccess} status={lotteryStatus} onCloseBoxComplete={blindBoxClosed} />
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
    </div>
}

export default LuckDraw
