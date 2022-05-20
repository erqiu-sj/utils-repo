/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 14:35:15
 * @LastEditTime: 2022-05-19 15:11:57
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/springFrame/qrcode.tsx
 */


import { FC, useMemo } from 'react'
import day from '~/assets/prize/7.png'
import get from '~/assets/prize/get.png'
import link from '~/assets/prize/link.png'
import qrcode from '~/assets/qrcode.png'
import { useLottery } from '~/hooks'
import './qrcode.scss'
export interface QRcodeProps { }


const QRcode: FC<QRcodeProps> = () => {
    const { curStateWithLottery } = useLottery()

    const modelId = useMemo(() => {
        const materialObject = [1, 2, 4, 5, 6, 7, 11, 12, 13].includes(curStateWithLottery.currentPrizeList.id)
        if (materialObject) return 1 // 实物
        if (curStateWithLottery.currentPrizeList.id === 3) return 3 // 优惠卷
        return 2 // 小额红包
    }, [curStateWithLottery])

    if (modelId === 1) return <div className='qrcode3'>
        <img src={get} alt="" className='get' />
        <img src={qrcode} alt="" className='qrcodeImages' />
    </div>

    if (modelId === 2) return <div className='qrcode2'>
        <img src={day} alt="" className='day' />
        <img src={qrcode} alt="" className='qrcodeImages' />
        <img src={link} alt="" className='link' />
    </div>

    if (modelId === 3) return <div className='qrcode'>
        <h2>
            长按识别添加工作人员
        </h2>
        <h2>
            领取优惠券
        </h2>
        <img src={qrcode} alt="" className='qrcodeImages' />
    </div>
    return <></>
}

export default QRcode