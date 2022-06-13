/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:56:30
 * @LastEditTime: 2022-06-13 10:57:32
 * @Description: 
 * @FilePath: /newHepoyogurt/src/pages/springFrame/userContent.tsx
 */
import { Phone } from '@mxnet/utils';
import { FC, useEffect, useState } from 'react';
import submit from '~/assets/submit.png';
import { useCommon, useService, useSpringFrame } from '~/hooks';
import './userContent.scss';

export interface userContentProps {
    onSubmit?: (res: infoTypes) => void
}

export interface infoTypes {
    name: string,
    phone: string,
    addr: string
}

const UserContent: FC<userContentProps> = ({ onSubmit }) => {

    const { saveUserInfo } = useService()
    const { dispatchWithSpringFrame } = useSpringFrame()

    const { curStateWithCommon } = useCommon()

    const [info, setInfo] = useState<infoTypes>({
        name: '',
        phone: '',
        addr: ''
    })

    useEffect(() => {
        setInfo({
            name: curStateWithCommon.common.fans?.truename || '',
            addr: curStateWithCommon.common.fans?.address || '',
            phone: curStateWithCommon.common.fans?.phone || ''
        })
    }, [
        curStateWithCommon
    ])

    async function submitHandler() {
        if (!info.name.trim()) {
            alert('姓名不能为空~')
            return
        }
        if (!info.phone.trim()) {
            alert('手机号不能为空~')
            return
        }

        if (!new Phone(info.phone, { errorThrowsImmediately: false }).verifyPhoneNumber()) {
            alert('请检查手机号～')
            return
        }

        if (!info.addr.trim()) {
            alert('地址不能为空~')
            return
        }
        await saveUserInfo({
            address: info.addr,
            phone: info.phone,
            truename: info.name
        })
        alert('保存成功~')
        dispatchWithSpringFrame.setPopStatusBox({
            popStatusBox: {
                id: 3
            }
        })
        onSubmit?.(info)
    }

    function setInfoHandler(obj: Partial<{ [key in keyof infoTypes]: string }>) {
        setInfo({
            ...info,
            ...obj
        })
    }

    return <div className='userContent'>
        <div className='form'>
            <div className='formItem'>
                <span className='label'>
                    姓名
                </span>
                <input type="text" className='value' value={info.name}
                    onChange={(e) => {
                        setInfoHandler({ name: e.target.value })
                    }}
                />
            </div>
            <div className='formItem'>
                <span className='label'>
                    电话
                </span>
                <input type="text" className='value'
                    value={info.phone}
                    onChange={(e) => {
                        setInfoHandler({ phone: e.target.value })
                    }}
                />
            </div>
            <div className='formItem'>
                <span className='label' style={{ letterSpacing: '0px' }}>
                    收件地址
                </span>
                <input type="text" className='value'
                    value={info.addr}
                    onChange={(e) => {
                        setInfoHandler({ addr: e.target.value })
                    }}
                />
            </div>
        </div>
        <img src={submit} alt="" className='submit' onClick={submitHandler} />
        <span className='tipsText'>
            我司承诺将对消费者信息进行严格保密，信息仅用于奖品邮寄
        </span>
    </div>
}

export default UserContent

