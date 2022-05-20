/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 09:32:21
 * @LastEditTime: 2022-05-20 21:10:11
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/pages/home/index.tsx
 */

import { FC, useState } from 'react'
import click from '~/assets/click.png'
import desc from '~/assets/desc.jpg'
import logo from '~/assets/logo.png'
import logo1 from '~/assets/logo1.png'
import logo2 from '~/assets/logo2.png'
import shareImage from '~/assets/share.jpg'
import share from '~/assets/share.png'
import OwnMask from '~/components/mask'
import OwnModal from '~/components/modal'
import { useCommonHelper, useService } from '~/hooks'
import Game from './components/game'
import './index.scss'

export interface homeProps { }


export interface RuleProps { }

const Rule: FC<RuleProps> = () => {
    const [show, setShow] = useState<boolean>(false)

    return <>
        <div className='rule' onClick={() => setShow(true)} >规则</div>
        <OwnModal visible={show} showCloseButton onClose={() => setShow(false)}>
            children
        </OwnModal>
    </>

}

export interface ShareProps { }

const Share: FC<ShareProps> = () => {
    const [showMask, setMask] = useState(false)
    return <>
        <OwnMask visible={showMask} onMaskClick={() => setMask(false)}>
            <img src={shareImage} alt="" className='shareJpg' />
            <div className='shareText'>分享至朋友圈</div>
        </OwnMask>
        <img src={share} alt="" className='share' onClick={() => {
            setMask(true)
        }} />
    </>
}


const Home: FC<homeProps> = () => {
    const { triggerGame, home, gameScreen } = useCommonHelper()

    const [show, setShow] = useState<boolean>(false)

    return <>
        <div className='home'>
            <div className={`logoContainer highIndex ${!(home || gameScreen) && 'hidden'}`}>
                <img src={logo1} alt="" className='logo1' />
                <div className='rule' onClick={() => setShow(true)} >规则</div>
                {/* <Rule /> */}
            </div>
            <div className={`logo2Container ${!home && 'hidden'} ${home && 'highIndex'}`}>
                <img src={logo2} alt="" className='logo2' />
            </div>
            <div className={`villain ${!home && 'hidden'} ${home && 'highIndex'}`}>
                <div className='villainContainer'>
                    <img src={logo} alt="" className='logo' />

                    <img src={click} alt="" className='click' onClick={() => {
                        triggerGame()
                    }} />

                    <OwnModal title='活动规则' visible={show} showCloseButton onClose={() => setShow(false)}>
                        <div style={{ width: '70vw' }}>
                            参与时间：5月21日—5月27日
                            <br />
                            领奖时间：5月28日—5月29日
                            <br />
                            快递时间：6月5日前发出快递
                            <br />
                            参与项目：
                            <br />
                            主城—金科南山、春和锦明
                            <br />
                            永川—棠城壹号院
                            <br />
                            开县—四季丰泰
                            <br />
                            涪陵—中央公园城
                            <br />
                            长寿——集美文苑
                            <br />
                            垫江——集美牡丹湖
                            <br />
                            丰都——集美东方
                            <br />
                            梁平——集美东方
                            <br />
                            万州——雍江上镜
                            <br />
                            奉节——雲山万璟
                            <br />
                            巫山——金科城
                            <br />
                            云阳——集美江悦
                            <br />
                            江津——集美东方
                            <br />
                            合川——中泰上境
                            <br />
                            綦江——御景江湾
                            <br />
                            铜梁——原乡溪岸
                            <br />
                            荣昌——棠悦府
                            <br />
                            详细规则：
                            <br />
                            1、参与活动需获取您的微信公开信息（头像、微信名、定位等），请允许后方可参与活动。
                            <br />
                            2、在您点亮重庆地图的将获得一次抽奖机会（金科定制的梅见酒，随机获奖，填写姓名、电话后即可前往就近项目领取）
                            <br />
                            3、在您点亮重庆地图后，不论你是否中奖，将本次活动告知您的亲朋，将增加一次抽奖机会，有机会获得价值168元的金小宝雪糕一箱（请填写具体地址，将在15个工作日冷链快递到家）
                            <br />
                            4、金科24周年，诚邀您5月28日就近莅临18个项目参与现场抽奖，好礼送不停。
                            <br />
                            5、特别提醒，如错过领奖时间，则奖品作废。
                            <br />
                            6、本次活动在法律允许范围内，最终解释权归重庆金科房地产开发有限公司所有，活动咨询电话
                            <br />
                            奖品设置：
                            <br />
                            梅见酒：10000瓶（各项目累计）
                            <br />
                            金小宝雪糕：500箱
                        </div>
                    </OwnModal>
                    <Share />
                </div>
            </div>
            <div className={`descContainer ${!home && 'hidden'}`}>
                <div>金&nbsp;科&nbsp;成&nbsp;立&nbsp; 24&nbsp; 周年 &nbsp; &nbsp; &nbsp;一&nbsp;起&nbsp;点&nbsp;亮&nbsp;重&nbsp;庆</div>
                <img src={desc} alt="" className='desc' />
            </div>
        </div >
        <Game />
    </>
}

export default Home

