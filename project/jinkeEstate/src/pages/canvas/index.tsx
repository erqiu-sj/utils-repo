/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 19:42:37
 * @LastEditTime: 2022-05-20 19:48:35
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/pages/canvas/index.tsx
 */

import { FC } from 'react'
import canvas from '~/assets/canvas.pic.jpg'
import './index.scss'

export interface CanvasProps { }

const Canvas: FC<CanvasProps> = () => {
    return <div className='canvas'>
        <img src={canvas} alt="" className='canvasContainer' />
    </div>
}

export default Canvas

