/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:01:10
 * @LastEditTime: 2022-05-23 13:49:08
 * @Description: 
 * @FilePath: /newHepoyogurt/src/pages/home/index.tsx
 */

import anime from 'animejs'
import { FC, useEffect, useState } from 'react'
import arrow from '~/assets/arrow.png'
import bkg from '~/assets/bkg.png'
import check from '~/assets/check.png'
import homeTips from '~/assets/homeTips.png'
import join from '~/assets/join.png'
import run from '~/assets/run.png'
import slogan from '~/assets/slogan.png'
import { usePopup, useRouter } from '~/hooks'
import './index.scss'

export interface homeProps { }
export interface joinProps {
    onJoin?: () => void
    init?: boolean
}

const Join: FC<joinProps> = ({ onJoin, init }) => {
    useEffect(() => {
        anime({
            targets: ".arrow",
            loop: 4,
            translateX: 4,
            easing: 'easeInOutSine',
            direction: 'alternate',
        })
    }, [])
    function joinHandler() {
        onJoin?.()
    }
    return <div className={`join ${!init && 'negative'}`}  >
        <div className='joinBox'>
            <img src={join} alt="" className='joinImg' onClick={joinHandler} />
            <img src={arrow} alt="" className='arrow' />
        </div>
    </div>
}


export interface checkMeProps {
    checked?: boolean
    onCheckedChange?: () => void
    init?: boolean
}

const CheckMe: FC<checkMeProps> = ({ init, checked, onCheckedChange }) => {
    const { openRule } = usePopup()

    return <div className={`checkme ${!init && 'negative'}`}>
        <div className='check' onClick={() => onCheckedChange?.()}>
            {checked ?
                <img src={check} alt="" className='checked' /> : <></>}
        </div>
        <div className='desc'>
            <span onClick={() => onCheckedChange?.()}>
                我已经阅读并同意
            </span>
            <span className='underline' onClick={openRule}>
                活动须知
            </span>
        </div>

    </div>
}

const Home: FC<homeProps> = () => {
    const [checked, setCheck] = useState(false)
    const [init, setInit] = useState(false)
    const { go } = useRouter()

    useEffect(() => {
        setTimeout(() => {
            setInit(true)
        }, 400);
    }, [])

    function onJoinHandler() {
        if (!checked) {
            alert('请阅读活动须知~')
            return
        }
        go('luckDraw')
    }

    return <div className='home'>
        {/* breathingRun */}
        <img src={run} alt="" className={` run ${init && 'slide-in-top'}`} />
        <img src={slogan} alt="" className={`slogan ${init && 'slide-in-left'} `} />
        <img src={bkg} className='bkg' alt="" />
        <img src={homeTips} alt="" className={`homeTips ${!init && 'negative '} `} />
        <Join init={init} onJoin={onJoinHandler} />
        <CheckMe init={init} checked={checked} onCheckedChange={() => setCheck(!checked)} />
    </div>
}

export default Home