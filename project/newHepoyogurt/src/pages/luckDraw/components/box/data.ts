/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 16:51:11
 * @LastEditTime: 2022-05-16 22:40:10
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/box/data.ts
 */
import animejs from 'animejs'

export const position = {
    //  左上
    'lt': [
        {
            translateX: '-44vw',
            translateY: '-50vw',
            opacity: 1,
            scale: 1
        },
    ],
    // 上中
    "tc": [
        {
            translateX: '-50%',
            translateY: '-50vw',
            opacity: 1,
            scale: 1
        },
    ],
    // 右上
    "rt": [
        {
            translateX: '15vw',
            translateY: '-50vw',
            opacity: 1,

            scale: 1
        },
    ],
    // 左下
    "lb": [
        {
            translateX: '-47vw',
            translateY: '-30vw',
            opacity: 1,

            scale: 1
        },
    ],
    // 上中
    "bc": [
        {
            translateX: '-90%',
            translateY: '-30vw',
            opacity: 1,
            scale: 1
        },
    ],
    // 右下
    "rb": [
        {
            translateX: '8vw',
            translateY: '-30vw',
            opacity: 1,
            scale: 1
        },
    ]
}

export function animeCompose(fnList: (() => animejs.AnimeInstance)[]) {
    for (let i = 0; i < fnList.length; i++) {
        fnList[i]().complete = function () {
            fnList[i + 1]?.()
        }
    }
}