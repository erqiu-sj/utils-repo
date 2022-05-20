/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 17:10:37
 * @LastEditTime: 2022-05-20 14:46:55
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/components/modal/index.tsx
 */

import { Modal } from 'antd-mobile'
import { ModalProps } from 'antd-mobile/es/components/modal'
import { FC, PropsWithChildren } from 'react'

export interface ownModalProps extends ModalProps {

}

const OwnModal: FC<PropsWithChildren<ownModalProps>> = ({ children, ...props }) => {
    return <Modal title='规则' {...props} content={children}></Modal>
}

export default OwnModal
