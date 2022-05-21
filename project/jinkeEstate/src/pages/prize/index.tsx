/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 11:09:52
 * @LastEditTime: 2022-05-21 13:08:01
 * @Description: 
 * @FilePath: /jinkeEstate/src/pages/prize/index.tsx
 */
import { FC, useState } from 'react'
import { getOriginalNode } from 'typescript'
import callback from '~/assets/callback.png'
import DrawNow from '~/assets/drawNow.png'
import prize from '~/assets/prize.png'
import Form from '~/components/form'
import Receive from '~/components/receive'
import { useCommon, useCommonHelper, useRouter, useService } from '~/hooks'
import { usePrize } from './hooks'
import './index.scss'
import './share.scss'

export interface PrizeProps { }

export interface PrizeItemProps {
    prizeImg: string
    imgClazz?: string
    prize: string
    title?: string
}

const PrizeItem: FC<PrizeItemProps> = ({ title, prize, prizeImg, imgClazz }) => {
    return <div className='prizeItem'>
        <h1 className='congratulations'>{title}</h1>
        <h1 className='congratulations'>{prize}</h1>
        {prizeImg && <img src={prizeImg} alt="" className={`prizeImg ${imgClazz}`} />}
    </div>
}

export interface DisplayPrizeProps { }

const DisplayPrize: FC<DisplayPrizeProps> = () => {

    const { saveInfo, init } = useService()
    const { isSaveed, replyHomePageStatus, curStateWithCommon } = useCommonHelper()
    const { prize } = usePrize()
    const [showDetails, setDetails] = useState(false)

    return <>
        <PrizeItem prizeImg={prize.src} imgClazz={prize.clazz} prize={prize.tips} title={prize.title} />
        {
            prize.id === 1 &&
            <>
                <Form saveed={showDetails} formList={[{ placeholder: "请填写领奖姓名", name: 'name', value: '' }, { placeholder: '请填写领奖电话', name: 'phone', value: '' }]}
                    onSubmit={async (res) => {
                        const params: { name: string, phone: string } = res as any
                        await saveInfo({
                            phone: params.phone,
                            truename: params.name
                        })
                        await init()
                        setDetails(true)
                        alert('保存成功！')
                    }}
                />
                {
                    (isSaveed || showDetails) && <Receive showGen />
                }
            </>
        }

        {
            prize.id === 2 && <>
                <Form saveed={showDetails} formList={[{ placeholder: "请填写收件人姓名", name: 'name', value: '' }, { placeholder: '请填写收件人电话', name: 'phone', value: '' }, {
                    placeholder: "请填写收件地址",
                    name: "addr",
                    value: ""
                }]}
                    onSubmit={async (res) => {
                        const parmas: { addr: string, name: string, phone: string } = res as any
                        await saveInfo({
                            phone: parmas.phone,
                            truename: parmas.name,
                            address: parmas.addr
                        })
                        await init()
                        setDetails(true)
                        alert('保存成功！')
                    }}
                />
                {
                    (isSaveed || showDetails) && <img src={callback} alt="" className='callback' onClick={() => {
                        replyHomePageStatus()
                    }} />
                }
            </>
        }
        {
            curStateWithCommon.iceCreamMissed &&
            <img src={callback} alt="" className='callback' onClick={() => {
                replyHomePageStatus()
            }} />
        }
        {
            curStateWithCommon.missedWine && <>
                <img src={callback} alt="" className='callback' onClick={() => {
                    replyHomePageStatus()
                }} />
                <Receive showGen />
            </>
        }

    </>
}



export interface shareProps { }

const Share: FC<shareProps> = () => {
    const { iceCreamHandler } = useService()
    return <div className='share'>
        <span>感谢您的分享</span>
        <span>恭喜您获得一次抽奖机会</span>
        <img src={prize} alt="" className='prizeImage' />
        <img src={DrawNow} alt="" className='drawNowWithShare' onClick={iceCreamHandler} />
    </div>
}

const Prize: FC<PrizeProps> = () => {
    const { curStateWithCommon } = useCommon()
    // 领奖姓名 领奖电话  mike
    return <div className={`prize ${!!!curStateWithCommon.lotteryId && 'callbackDisplay'}`}>
        {
            curStateWithCommon.setupProcess === 3 ? <Share /> : <DisplayPrize />
        }
    </div>
}

export default Prize

