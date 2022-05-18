/*
 * @Author: 邱狮杰
 * @Date: 2022-05-16 16:51:11
 * @LastEditTime: 2022-05-18 10:59:06
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/box/data.ts
 */
import animejs from 'animejs'

const positionCommon = {
    opacity: 1,
    scale: 1
}
class Position {
    private object: object = {}
    add(key: string, position: object) {
        Reflect.set(this.object, key, [
            {
                ...position, ...positionCommon
            }
        ])
        return this
    }
    getConfig() {
        return this.object
    }
}
export const position = new Position().add('lt', {
    translateX: '-44vw',
    translateY: '-48vw',
}).add('tc', {
    translateX: '-50%',
    translateY: '-48vw',
}).add('rt', {
    translateX: '15vw',
    translateY: '-48vw',
}).add('lb', {
    translateX: '-47vw',
    translateY: '-28vw',
}).add('bc', {
    translateX: '-90%',
    translateY: '-28vw',
}).add('rb', {
    translateX: '8vw',
    translateY: '-28vw',
}).getConfig()

export const positionWidhIphone5 = new Position()
    .add('lt', {
        translateX: '-37vw',
        translateY: '-20vw',
    })
    .add('tc', {
        translateX: '-50%',
        translateY: '-20vw',
    })
    .add('rt', {
        translateX: '15vw',
        translateY: '-20vw',
    })
    .add('lb', {
        translateX: '-41vw',
        translateY: '-2vw',
    })
    .add('bc', {
        translateX: '-90%',
        translateY: '-3vw',
    })
    .add('rb', {
        translateX: '8vw',
        translateY: '-3vw',
    })
    .getConfig()

// 12 13 pro
export const positionBigLayout = new Position()
    .add('lt', {
        translateX: '-44vw',
        translateY: '-34vw',
    }).add('tc', {
        translateX: '-50%',
        translateY: '-34vw',
    }).add('rt', {
        translateX: '15vw',
        translateY: '-34vw',
    }).add('lb', {
        translateX: '-47vw',
        translateY: '-14vw',
    }).add('bc', {
        translateX: '-90%',
        translateY: '-14vw',
    }).add('rb', {
        translateX: '8vw',
        translateY: '-14vw',
    })
    .getConfig()

// 12 13 pro max
export const positionBigLayoutWithMax = new Position()
    .add('lt', {
        translateX: '-44vw',
        translateY: '-40vw',
    }).add('tc', {
        translateX: '-50%',
        translateY: '-40vw',
    }).add('rt', {
        translateX: '15vw',
        translateY: '-40vw',
    }).add('lb', {
        translateX: '-47vw',
        translateY: '-20vw',
    }).add('bc', {
        translateX: '-90%',
        translateY: '-20vw',
    }).add('rb', {
        translateX: '8vw',
        translateY: '-20vw',
    })
    .getConfig()


export function animeCompose(fnList: (() => animejs.AnimeInstance)[]) {
    for (let i = 0; i < fnList.length; i++) {
        fnList[i]().complete = function () {
            fnList[i + 1]?.()
        }
    }
}