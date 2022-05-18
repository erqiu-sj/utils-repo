/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 14:35:15
 * @LastEditTime: 2022-05-17 14:53:50
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/springFrame/qrcode.tsx
 */


import { FC } from 'react'
import qrcode from '~/assets/qrcode.png'
import './qrcode.scss'
export interface QRcodeProps { }

const QRcode: FC<QRcodeProps> = () => {
    return <div className='qrcode'>
        <h2>
            长按识别添加工作人员
        </h2>
        <h2>
            领取优惠券
        </h2>
        <img src={qrcode} alt="" className='qrcodeImages' />
    </div>
}

export default QRcode