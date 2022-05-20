/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 17:45:09
 * @LastEditTime: 2022-05-20 20:18:09
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/reducer/common.ts
 */
import { CreateReducer, getAllValsWithActionCollectionHelper } from '@zealforchange/conciseredux'

export type commonAction = {
  SETUPPROCESS: 'setupProcess', // 设置流程
  SETPOPULATEBASICDATA: 'setPopulateBasicData', // 填充初始化信息
  SETLOTTERYID: 'setLotteryId', // 抽奖ID
  SETFILLIN: 'setFillIn' // 抽奖ID
  SETADDR: 'setCurAddr' // 抽奖ID
}

export type commonActionTypes = getAllValsWithActionCollectionHelper<commonAction>

export type common = {
  "title": string,
  "desc": string,
  "imgUrl": string,
  "link": string,
  "fans": {
    "id": string,
    "openid": string,
    "nickname": string,
    "avatar": string,
    "award1": string,
    "award2": string,
    "created_at": "1653032672",
    "ip": string,
    "truename": string,
    "phone": string,
    "address": string,
    "needinfo": number,
    "lat": string,
    "lng": string,
    "zone_id": string
  }
}

export type curAddr = {
  address: string
  city: string
  content: string
  content2: string
  cost: null
  free: string
  id: string
  map: string
  newscontent: string
  newstitle: string
  thumb: string
  title: string
  total: string
}

export type commonStateTypes = {
  setupProcess: number
  lotteryId: number
  populateBasicData: object
  prizeList: { id: number, tips: string }[]
  commonData: Partial<common>
  addr: Partial<curAddr>

}

export type commonActionPayloadTypes = {
  setupProcess?: number
  setLotteryId?: number
  setPopulateBasicData?: object
  commonData?: Partial<common>
  addr?: Partial<curAddr>
}

export const common = new CreateReducer<commonStateTypes, commonActionPayloadTypes, commonActionTypes>({
  // 0 初始化首页 1 点击马上点亮后  2 点亮完后准备抽奖 3 感谢分享后准备抽奖 5 空状态
  setupProcess: 0,
  lotteryId: 3,
  populateBasicData: {},
  addr: {},
  prizeList: [
    {
      id: 1,
      tips: "获得金科定制梅见果酒1瓶"
    },
    {
      id: 2,
      tips: "获得金小宝雪糕一箱"
    }
  ],
  commonData: {},
}).addAction('setupProcess', (state, action) => {
  return { ...state, setupProcess: action.setupProcess || 0 }
}).addAction('setPopulateBasicData', (state, action) => {
  return { ...state, populateBasicData: action.setPopulateBasicData || {} }
}).addAction('setLotteryId', (state, action) => {
  return { ...state, lotteryId: action.setLotteryId || 0 }
}).addAction('setFillIn', (state, action) => {
  return { ...state, commonData: action.commonData || {} }
}).addAction('setCurAddr', (state, action) => {
  return { ...state, addr: action.addr || {} }
})
  .setReducerKey('common')