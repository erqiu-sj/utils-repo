/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 22:47:13
 * @LastEditTime: 2022-05-25 12:55:01
 * @Description: 弹框
 * @FilePath: /repo/project/newHepoyogurt/src/pages/springFrame/index.tsx
 */

import { FC, useMemo } from 'react'
import borderRadius from '~/assets/borderRadius.png'
import close from '~/assets/close.png'
import { useSpringFrame } from '~/hooks'
import Details from './details'
import './index.scss'
import Qrcode from './qrcode'
import UserContent from './userContent'

export interface SpringFrameProps {

}


export interface CloseProps { }

const Close: FC<CloseProps> = () => {
    const { dispatchWithSpringFrame } = useSpringFrame()

    function closeHandler() {
        dispatchWithSpringFrame.setBulletFrameSwitchStatus({ open: false })
    }

    return <div className='closeBox'>
        <div className='closeContainer'>
            <img src={close} alt="" className='close' onClick={closeHandler} />
        </div>
    </div>
}

export const SpringFrame: FC<SpringFrameProps> = () => {

    const { curStateWithSpringFrame } = useSpringFrame()

    const diyClass = useMemo(() => {
        if ([1, 3, 4].includes(curStateWithSpringFrame.popStatusBox.id)) { return 'userContentLayout' }
        return ''
    }, [curStateWithSpringFrame])

    if (!curStateWithSpringFrame.open) {
        return <></>
    }

    return <div className='springFrame'>
        <div className='springFrameContainer'>
            <div className={`popup ${diyClass}`}>
                <Close />
                <div className='content'>
                    {
                        curStateWithSpringFrame.popStatusBox.id === 2 ?
                            <Details /> : <></>
                    }
                    {
                        curStateWithSpringFrame.popStatusBox.id === 1 ?
                            <UserContent /> : <></>
                    }
                    {
                        curStateWithSpringFrame.popStatusBox.id === 3 || curStateWithSpringFrame.popStatusBox.id === 4 ?
                            <Qrcode /> : <></>
                    }
                </div>
            </div>
        </div>
    </div>
}

export default SpringFrame


