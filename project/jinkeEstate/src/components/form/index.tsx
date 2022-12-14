/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 11:16:50
 * @LastEditTime: 2022-05-21 10:18:42
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/components/form/index.tsx
 */
import { FC, InputHTMLAttributes, useMemo, useState } from 'react'
import callback from '~/assets/callback.png'
import submit from '~/assets/save.png'
import submitaa from '~/assets/submit.png'
import { useCommon, useCommonHelper, useRouter } from '~/hooks'
import './index.scss'

type formItem = InputHTMLAttributes<unknown>

export interface FormProps {
    formList?: formItem[]
    onSubmit?: (res: unknown) => void
    saveed?: boolean
}

export interface formState {
    name: string
    phone: string
    addr: string
}

const Form: FC<FormProps> = ({ saveed, formList, onSubmit }) => {

    const { isSaveed, curStateWithCommon, replyHomePageStatus } = useCommonHelper()
    const { go } = useRouter()
    const submitBtn = useMemo(() => {
        if (curStateWithCommon.lotteryId === 1) return submit
        return submitaa
    }, [curStateWithCommon])

    const [form, setForm] = useState(() => {
        let genH = {}
        formList?.map((i) => {
            return { [i.name as string]: '' }
        }).forEach(o => {
            genH = { ...genH, ...o, }
        })
        return genH
    })

    function updateForm(obj: Partial<{ [key: string]: string }>) {
        console.log(obj, 'obj');
        setForm(o => {
            return {
                ...o, ...obj
            }
        })
    }

    function submitHandler() {
        onSubmit?.(form)
    }

    return <div className='form'>
        {(!isSaveed) && formList?.map((i, index) => {
            return <input type="text" {...i} key={index} onChange={e => {
                updateForm({ [i.name as string]: e.target.value })
                // @ts-ignore
            }} className='item' value={form?.[i.name as string] as string} />
        })}

        {(isSaveed || saveed) && curStateWithCommon.lotteryId === 1 && <>
            <span className='item'>
                姓名：{curStateWithCommon.commonData.fans?.truename}
            </span>
            <span className='item'>
                手机号: {curStateWithCommon.commonData.fans?.phone}
            </span>
            <span className='item'>
                领奖时间: 5月28日14:00-15:00
            </span>
            <span className='item' style={{ textAlign: "center" }}>
                {curStateWithCommon.addr.address}
            </span>
        </>
        }

        {
            (isSaveed || saveed) && curStateWithCommon.lotteryId === 2 && <>
                <span className='item'>
                    姓名： {curStateWithCommon.commonData.fans?.truename}
                </span>
                <span className='item'>
                    手机号: {curStateWithCommon.commonData.fans?.phone}
                </span>
                {/* <span className='item'>
                    领奖地址: {curStateWithCommon.commonData.fans?.address}
                </span> */}
            </>
        }
        {
            !isSaveed && <img src={submitBtn} alt="" className='submit' onClick={submitHandler} />
        }
        {/* {
            (isSaveed && curStateWithCommon.lotteryId === 2) && <img src={callback} alt="" className='callback' onClick={() => {
                replyHomePageStatus()
            }} />
        } */}
    </div>

}

export default Form

