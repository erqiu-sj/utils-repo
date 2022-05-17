/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 14:07:02
 * @LastEditTime: 2022-05-17 10:30:15
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/reducer/lottery.ts
 */
import { CreateReducer, getAllValsWithActionCollectionHelper } from '@zealforchange/conciseredux'

export type lotteryAction = {
  SETLOTTERYSTATUS: 'setLotteryStatus'
  SETLOTTERYID: 'setLotteryId'
}

export type lotteryActionTypes = getAllValsWithActionCollectionHelper<lotteryAction>

type prizeItem = {
  id: number
  tips: string
}

export type lotteryStateTypes = {
  // 1 初始化 2 抽奖结果 3 弹框
  lotteryStatus: 1 | 2 | 3
  // 奖品列表
  prizeList: prizeItem[]
  // 当前获奖id
  currentPrizeList: prizeItem
}

export type lotteryActionPayloadTypes = {
  lotteryStatus?: lotteryStateTypes['lotteryStatus']
  id?: number // prize id
}

export const lottery = new CreateReducer<lotteryStateTypes, lotteryActionPayloadTypes, lotteryActionTypes>({
  lotteryStatus: 1,
  prizeList: [
    {
      id: 1,
      tips: "运动水壶"
    },
    {
      id: 2,
      tips: "无绳跳绳"
    },
    {
      id: 3,
      tips: "150元微商城优惠卷包"
    },
    {
      id: 4,
      tips: "筋膜枪"
    },
    {
      id: 5,
      tips: "铂金24小时950ml一年装"
    },
    {
      id: 6,
      tips: "任天堂游戏机 + 健身环"
    },
    {
      id: 7,
      tips: "酷奇平衡车"
    },
    {
      id: 8,
      tips: "0.88元现金红包"
    },
    {
      id: 9,
      tips: "1元红包"
    },
    {
      id: 10,
      tips: "2元现金红包"
    },
    {
      id: 11,
      tips: "6666元现金红包"
    },
    {
      id: 12,
      tips: "8888元现金红包"
    },
    {
      id: 13,
      tips: "Fiture智能健身魔镜"
    }
  ],
  currentPrizeList: { id: 12, tips: '很遗憾～' },
})
  .addAction('setLotteryStatus', (state, action) => {
    return { ...state, lotteryStatus: action.lotteryStatus || 3 }
  })
  .addAction('setLotteryId', (state, action) => {
    const curPrize = state.prizeList[action.id as number] || { tips: '很遗憾，下次再来吧～', id: 10000 }
    return { ...state, currentPrizeList: curPrize }
  })
  .setReducerKey('lottery')
