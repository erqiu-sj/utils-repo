/*
 * @Author: 邱狮杰
 * @Date: 2022-05-20 09:18:31
 * @LastEditTime: 2022-05-20 21:04:03
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/pages/home/components/game/index.tsx
 */

import { FC } from 'react'
import drawNow from '~/assets/drawNow.png'
import glow from '~/assets/glow.png'
import like from '~/assets/like.png'
import mapa from '~/assets/map1.png'
import map from '~/assets/opaqueMap.png'
import OwnMask from '~/components/mask'
import { useCommon, useCommonHelper, useRouter, useService } from '~/hooks'
import { useGame } from './hooks'
import './index.scss'

export interface gameProps { }

const Game: FC<gameProps> = () => {

    const { drawAfterLike, gameScreen, triggerDrawAfterLike, home } = useCommonHelper()

    const { curStateWithCommon } = useCommon()

    const { go } = useRouter()

    const { smokeWine } = useService()

    const { lightList, lightUpOneByOne, brightness, curAddr } = useGame()

    async function likeHandler() {
        const isOver = lightList.every(i => i.light)
        if (isOver) {
            triggerDrawAfterLike()
            return
        }
        if (!isOver) {
            lightUpOneByOne()
        }
    }

    async function clickDraw() {
        //  时间 地址
        await smokeWine(() => {
            go('lottery')
        })
    }

    return <div className='game'>
        <div className='gameContainer'>
            <div className={`map `}>
                {(gameScreen || home) && <>
                    <img src={gameScreen ? map : mapa} alt="" className={'mapa'} />
                    <img src={glow} alt="" className={'mapa'} style={{ zIndex: 1, opacity: brightness }} />
                    {
                        lightList.map(i => {
                            return <img src={i.src} alt="" className={`mapa ${!i.light && 'hidden'}`} key={i.src} />
                        })
                    }
                </>
                }
            </div>
            {
                gameScreen && <img src={like} alt="" className={`like highIndex ${!gameScreen && 'hidden'}`} onClick={likeHandler} />
            }
            <div className={`descWithgame ${!gameScreen && 'hidden'}`}>
                24年来，金科不忘初心，秉承着“美好你的生活”主张，已进驻重庆30个区、县，累计开发项目168个，服务业主家庭达436966户。
            </div>
            <OwnMask visible={drawAfterLike}>
                {/* 抽奖后显示 */}
                {
                    drawAfterLike &&
                    <div className='contentAfterLuckyDraw'>
                        <img src={curStateWithCommon.addr.map} alt="" className='addrImg' />
                        <div className='desc' style={{ textAlign: 'center' }}>
                            {curStateWithCommon.addr.content2}
                        </div>
                        <img onClick={clickDraw} src={drawNow} alt="" className='drawNow' />
                    </div>}
            </OwnMask>
        </div>
    </div>
}

export default Game

