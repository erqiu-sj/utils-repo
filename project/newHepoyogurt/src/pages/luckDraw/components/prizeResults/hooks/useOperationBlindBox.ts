/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:26:02
 * @LastEditTime: 2022-05-19 16:45:21
 * @Description: 
 * @FilePath: /newHepoyogurt/src/pages/luckDraw/components/prizeResults/hooks/useOperationBlindBox.ts
 */

import { useState } from 'react';
import { useLottery, useService } from "~/hooks";

export function useOperationBlindBox() {
    const { dispatchWithLottery, curStateWithLottery } = useLottery()
    const { luckDrawHandler } = useService()

    // 盒子初始化动画是否执行完毕
    const [boxInitAnim, setBoxInitAnim] = useState(false)

    const [lotteryStatus, setLotteryStatus] = useState(false)

    async function closelotteryStatusHandler() {
        await luckDrawHandler(() => {
            setLotteryStatus(false)
        })
    }

    function openlotteryStatusHandler() {
        setLotteryStatus(true)
    }

    function setBoxInitAnimSuccess() {
        console.log('init');
        setBoxInitAnim(true)
    }

    // 盲盒关闭后
    function blindBoxClosed() {
        dispatchWithLottery.setLotteryStatus({ lotteryStatus: 2 })
        setBoxInitAnim(false)
    }

    return {
        lotteryStatus,
        openlotteryStatusHandler,
        closelotteryStatusHandler,
        blindBoxClosed,
        setBoxInitAnimSuccess,
        boxInitAnim
    }

}