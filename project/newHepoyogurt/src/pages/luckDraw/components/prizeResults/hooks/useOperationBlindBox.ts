/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:26:02
 * @LastEditTime: 2022-05-17 10:32:09
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/pages/luckDraw/components/prizeResults/hooks/useOperationBlindBox.ts
 */

import { useState } from 'react';
import { useLottery } from "~/hooks";

export function useOperationBlindBox() {
    const { dispatchWithLottery, curStateWithLottery } = useLottery()
    const [lotteryStatus, setLotteryStatus] = useState(false)

    function closelotteryStatusHandler() {
        setLotteryStatus(false)
    }

    function openlotteryStatusHandler() {
        setLotteryStatus(true)
    }

    // 盲盒关闭后
    function blindBoxClosed() {
        dispatchWithLottery.setLotteryStatus({ lotteryStatus: 2 })
    }

    return {
        lotteryStatus,
        openlotteryStatusHandler,
        closelotteryStatusHandler,
        blindBoxClosed
    }

}