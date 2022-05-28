/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:00:31
 * @LastEditTime: 2022-05-24 14:41:54
 * @Description: 
 * @FilePath: /newHepoyogurt/src/pages/luckDraw/index.tsx
 */
import animejs from 'animejs'
import debounce from 'lodash.debounce'
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react'
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
import { useCommon, useLottery, useSpringFrame } from '~/hooks'
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
    boxStatus?: boolean // 盲盒状态
    boxInitAnim?: boolean
}

const OperationArea: FC<operationAreaProps> = ({ boxInitAnim, boxStatus, onOpenBlindBox, onGetPrize }) => {

    // 是否正在抽奖
    const lottery = useRef(true)

    const { curStateWithLottery } = useLottery()
    const { dispatchWithSpringFrame } = useSpringFrame()
    const { isFillUserInfo } = useCommon()

    useEffect(() => {
        lottery.current = boxStatus || false
    }, [boxStatus])

    // useEffect(() => {
    //     lottery.current = true
    // }, [curStateWithLottery])

    function getPrizeHandler() {
        if (curStateWithLottery.currentPrizeList.id === 0) {
            alert('谢谢参与～')
            return
        }

        if (!isFillUserInfo) {
            dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
            dispatchWithSpringFrame.setPopStatusBox({
                popStatusBox: { id: 1 }
            })
        } else {
            // if (curStateWithLottery.currentPrizeList.id === 3) {
            //     // 优惠卷直接跳小程序
            //     return
            // }
            if ([8, 9, 10].includes(curStateWithLottery.currentPrizeList.id)) {
                dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
                dispatchWithSpringFrame.setPopStatusBox({
                    popStatusBox: { id: 4 }
                })
                return
            }
            dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: true })
            dispatchWithSpringFrame.setPopStatusBox({
                popStatusBox: { id: 3 }
            })
        }
        onGetPrize?.()
    }

    function openBlindBoxHandler() {
        lottery.current && onOpenBlindBox?.()
    }

    return <div className='operationAreaWithLuckDraw'>
        {
            curStateWithLottery.lotteryStatus === 1 ? <div className='status1'>
                <div className='oper'>
                    {boxInitAnim &&
                        <>
                            <div className='btn' style={{ margin: 0 }}>
                                <img src={open} alt="" className='btn' onClick={debounce(() => {
                                    openBlindBoxHandler()
                                }, 300)} style={{ margin: 0 }} />
                            </div>
                        </>
                    }
                </div>
                <img src={tips} alt="" className='tips' />
            </div> : <></>
        }
        {
            curStateWithLottery.lotteryStatus === 2 ? <>
                <img src={get} onClick={getPrizeHandler} alt="" className='getPrize' />
                &nbsp;
                &nbsp;
                {/* @ts-ignore */}
                <wx-open-launch-weapp
                    class='getPrizeWithPage'
                    username="gh_49fc4df96ddf"
                    path="pages/common/blank-page/index?scene=596177233"
                >
                    <script type="text/wxtag-template">
                        <img src={buy} alt="" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
                    </script>
                    {/* <template>
                                </template> */}
                    {/* @ts-ignore */}
                </wx-open-launch-weapp>
            </> : <></>
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
        // console.log(boxInitAnim, 'boxInitAnim');
        if (!boxInitAnim) return
        closelotteryStatusHandler()
        return
    }
    // const openBlindBox = useCallback(() => {
    //     console.log(boxInitAnim, '1');
    //     if (!boxInitAnim) return
    //     console.log(boxInitAnim, '2');
    //     closelotteryStatusHandler()
    // }, [
    //     boxInitAnim, lotteryStatus
    // ])

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
        <OperationArea boxInitAnim={boxInitAnim} boxStatus={lotteryStatus} onOpenBlindBox={openBlindBox} />
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
