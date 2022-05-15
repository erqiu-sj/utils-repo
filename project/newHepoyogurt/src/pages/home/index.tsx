/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 11:01:10
 * @LastEditTime: 2022-05-15 13:30:21
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/home/index.tsx
 */

import anime from 'animejs'
import { FC, useEffect, useState } from 'react'
import arrow from '~/assets/arrow.png'
import bkg from '~/assets/bkg.png'
import check from '~/assets/check.png'
import homeTips from '~/assets/homeTips.png'
import join from '~/assets/join.png'
import { useRouter } from '~/hooks'
import './index.scss'




export interface homeProps { }



export interface joinProps {
    onJoin?: () => void
}

const Join: FC<joinProps> = ({ onJoin }) => {
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
    return <div className='join' onClick={joinHandler} >
        <div className='joinBox'>
            <img src={join} alt="" className='joinImg' />
            <img src={arrow} alt="" className='arrow' />
        </div>
    </div>

}


export interface checkMeProps {
    checked?: boolean
    onCheckedChange?: () => void
}

const CheckMe: FC<checkMeProps> = ({ checked, onCheckedChange }) => {

    return <div className='checkme'>
        <div className='check' onClick={() => onCheckedChange?.()}>
            {checked ?
                <img src={check} alt="" className='checked' /> : <></>}
        </div>

        <div className='desc'>
            <span onClick={() => onCheckedChange?.()}>
                我已经阅读并同意
            </span>
            <span className='underline'>
                活动须知
            </span>
        </div>

    </div>
}


const Home: FC<homeProps> = () => {
    const [checked, setCheck] = useState(false)
    const { go } = useRouter()
    function onJoinHandler() {
        if (!checked) {
            alert('请阅读活动须知~')
            return
        }
        go('luckDraw')
    }

    return <div className='home'>
        <img src={bkg} className='bkg' alt="" />
        <img src={homeTips} alt="" className='homeTips' />
        <Join onJoin={onJoinHandler} />
        <CheckMe checked={checked} onCheckedChange={() => setCheck(!checked)} />
    </div>

}

export default Home