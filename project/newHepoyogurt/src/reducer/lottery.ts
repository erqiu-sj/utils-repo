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
  lotteryStatus: lotteryStateTypes['lotteryStatus']
  id: number // prize id
}

export const lottery = new CreateReducer<lotteryStateTypes, lotteryActionPayloadTypes, lotteryActionTypes>({
  lotteryStatus: 1,
  prizeList: [],
  currentPrizeList: { id: 11, tips: '很遗憾～' },
})
  .addAction('setLotteryStatus', (state, action) => {
    return { ...state, lotteryStatus: action.lotteryStatus || 3 }
  })
  .addAction('setLotteryId', (state, action) => {
    const curPrize = state.prizeList[action.id as number] || { tips: '很遗憾，下次再来吧～', id: 10000 }
    return { ...state, currentPrizeList: curPrize }
  })
  .setReducerKey('lottery')
