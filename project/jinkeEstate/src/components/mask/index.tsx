/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 17:29:34
 * @LastEditTime: 2022-05-19 17:30:34
 * @Description: 
 * @FilePath: /jinkeEstate/src/components/mask/index.tsx
 */
import { Mask } from 'antd-mobile'
import { MaskProps } from 'antd-mobile/es/components/mask'
import { FC } from 'react'

export interface ownMaskProps extends MaskProps {

}

const OwnMask: FC<ownMaskProps> = ({ ...props }) => {
    return <Mask {...props}>
    </Mask>
}

export default OwnMask

