/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 14:07:02
 * @LastEditTime: 2022-05-18 16:43:57
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/hooks/useLottery.ts
 */
import { bindActionCreators } from '@zealforchange/conciseredux'
import { useDispatch, useSelector } from 'react-redux'
import { lottery, lotteryStateTypes } from '~/reducer/lottery'

export function useLottery() {
  const dispatchWithLottery = bindActionCreators(lottery.getCallBackAll(), useDispatch())

  const curStateWithLotteryForRedux = lottery.getCurState()

  const curStateWithLottery = useSelector((state: { lottery: lotteryStateTypes }) => {
    return state.lottery
  })

  return { dispatchWithLottery, curStateWithLottery, curStateWithLotteryForRedux }
}
