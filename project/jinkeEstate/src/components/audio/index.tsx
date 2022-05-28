/*
 * @Author: 邱狮杰
 * @Date: 2022-05-21 18:49:34
 * @LastEditTime: 2022-05-21 20:16:02
 * @Description: 
 * @FilePath: /jinkeEstate/src/components/audio/index.tsx
 */
import { FC } from 'react'
import audio from '~/assets/audio.mp3'


export interface AudioProps { }

const Audio: FC<AudioProps> = () => {
    return <>
        <audio src={'https://actcdn.yoois.com/zt/jkmap/audio.mp3?v=1'} autoPlay loop>
        </audio>
    </>
}

export default Audio
