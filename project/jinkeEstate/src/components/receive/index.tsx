/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 14:44:13
 * @LastEditTime: 2022-05-21 10:46:21
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/components/receive/index.tsx
 */
import { Modal } from 'antd-mobile'
import html2canvas from 'html2canvas'
import { FC, useEffect, useRef, useState } from 'react'
import canvas from '~/assets/canvas.pic.jpg'
import gen from '~/assets/gen.png'
import { useCommon, useCommonHelper, useService } from '~/hooks'
import './index.scss'

export interface receiveProps {
    showGen?: boolean
}

const Receive: FC<receiveProps> = ({ showGen }) => {
    const { curStateWithCommon } = useCommon()
    const ref = useRef<HTMLDivElement | null>(null)
    const [show, setShow] = useState(false)
    const [poster, setPoster] = useState('')
    const { isSaveed } = useCommonHelper()
    useEffect(() => {
        if (show && ref.current && !poster) {
            setTimeout(() => {
                html2canvas(ref.current as HTMLDivElement, { useCORS: true }).then(res => {
                    setPoster(res.toDataURL())
                })
            }, 100);
        }
    }, [show])
    return <>
        <div className='receiveContainer'>
            {
                (isSaveed || showGen) && <img src={gen} alt="" className='gen' onClick={() => {
                    setShow(true)
                }} />
            }

            <Modal visible={show} showCloseButton onClose={() => setShow(false)} content={
                <>
                    <div className='canvas' ref={ref}>
                        {poster ? <img src={poster} alt="" className='canvasContainer ' /> : <>
                            <img src={canvas} alt="" className='canvasContainer ' />
                            <img src={curStateWithCommon.commonData.fans?.avatar} alt="" className='avatar' />
                            <span className='trueName'>{curStateWithCommon.commonData.fans?.truename}</span>
                            <span className='descx' style={{ textAlign: 'center' }}>
                                我是{curStateWithCommon?.commonData?.fans?.id}位点亮重庆的美好见证者，快来跟我一起点亮重庆版图
                            </span>
                        </>}
                        {poster && <span>
                            长按保存～
                        </span>}
                    </div>
                </>
            } />
            <div className='prizeLine'>
                <h2>
                    {`> ${curStateWithCommon.addr.title} <`}
                </h2>
            </div>
            <br />
            <div className=''>
                <h3 style={{ textAlign: 'center' }}>
                    - 活动现场 奖品设置 -
                </h3>
                <br />
                <div style={{ textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: curStateWithCommon.addr.newscontent || '' }}></div>
            </div>
            <br />
            {/* <div className='addr'>
                <span>
                    {curStateWithCommon.addr.address}
                </span>
                <Button size='large'>立即导航</Button>
            </div> */}
            <div className='project'>
                <div className="left">
                    <h3 style={{ textAlign: 'center' }}> - 项目介绍 -</h3>
                    <div className='projectDesc'>
                        {curStateWithCommon?.addr?.content || ''}
                        <br />
                        参与时间：5月21日—5月27日
                    </div>
                </div>
                <div className="right">
                    <img src={curStateWithCommon.addr.thumb} alt="" className='projectImages ' />
                </div>
            </div>
            <br />
            {/* <div className='withShare'>
                <Button size='large'>立即分享</Button>
            </div> */}
        </div>
    </>
}

export default Receive

