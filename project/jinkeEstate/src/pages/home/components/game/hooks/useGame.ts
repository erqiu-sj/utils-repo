/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 10:02:36
 * @LastEditTime: 2022-05-20 10:58:40
 * @Description: 
 * @FilePath: /jinkeEstate/src/pages/home/components/game/hooks/useGame.ts
 */
import { useMemo, useState } from 'react'
import aa from '~/assets/addr/addr1.png'
import a from '~/assets/1.png'
import b from '~/assets/2.png'
import c from '~/assets/3.png'
import d from '~/assets/4.png'
import e from '~/assets/5.png'
import f from '~/assets/6.png'

export interface gameLight {
    src: string, // addr
    light: boolean // 是否点亮
}
export function useGame() {

    const [lightList, setLight] = useState<gameLight[]>([
        { src: a, light: false },
        { src: b, light: false },
        { src: c, light: false },
        { src: d, light: false },
        { src: e, light: false },
        { src: f, light: false },
    ])

    function lightUpOneByOne() {
        setLight(list => {
            let updateOnce = false
            const newList = list.map((i) => {
                if (!updateOnce && !i.light) {
                    updateOnce = true
                    return {
                        ...i,
                        light: true
                    }
                }
                return {
                    ...i
                }
            })
            return [...newList]
        })
    }

    const brightness = useMemo(() => {
        return lightList.filter(i => i.light).length * 0.16
    }, [lightList])

    const curAddr = useMemo(() => {
        return {
            src: aa
        }
    }, [])

    return { lightUpOneByOne, lightList, brightness, curAddr }
}
