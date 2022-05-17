/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 22:47:13
 * @LastEditTime: 2022-05-16 22:57:05
 * @Description: 弹框
 * @FilePath: /repo/project/newHepoyogurt/src/pages/springFrame/index.tsx
 */

import { FC } from 'react'
import borderRadius from '~/assets/borderRadius.png'
import './index.scss'

export interface SpringFrameProps { }

const SpringFrame: FC<SpringFrameProps> = () => {
    return <div className='springFrame'>
        <div className='springFrameContainer'>
            <div className='popup'>
            </div>
        </div>
    </div>
}

export default SpringFrame


