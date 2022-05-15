import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from '@zealforchange/conciseredux'
import { lottery, lotteryStateTypes } from '~/reducer/lottery'

export function useLottery() {
  const dispatchWithLottery = bindActionCreators(lottery.getCallBackAll(), useDispatch())

  const curStateWithLotteryForRedux = lottery.getCurState()

  const curStateWithLottery = useSelector((state: { lottery: lotteryStateTypes }) => {
    return state.lottery
  })

  return { dispatchWithLottery, curStateWithLottery, curStateWithLotteryForRedux }
}
