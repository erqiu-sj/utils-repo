/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 11:29:22
 * @LastEditTime: 2022-05-17 11:55:16
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/springFrame/details.tsx
 */

import { FC } from 'react'
import arrowWhite from '~/assets/arrowWhite.png'
import details from '~/assets/details.png'
import initImg from '~/assets/init.png'
import method from '~/assets/method.png'
import './details.scss'

export interface detailsProps { }

const Details: FC<detailsProps> = () => {
    return <div className='activityDetails'>
        <img src={initImg} alt="" className='displayImg' />
        <img src={method} alt="" className='displayImg' />
        <img src={details} alt="" className='displayImg' />
        {/* <img src={arrowWhite} alt="" className='arrowWhite' /> */}
    </div>
}

export default Details

