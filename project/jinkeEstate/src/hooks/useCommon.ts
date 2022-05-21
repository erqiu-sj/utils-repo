/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 17:45:30
 * @LastEditTime: 2022-05-21 00:33:30
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/hooks/useCommon.ts
 */
import { bindActionCreators } from '@zealforchange/conciseredux';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { common, commonStateTypes } from '~/reducer/common';
import { useRouter } from './useRouter';
import { useService } from './useService';

export function useCommon() {
    const dispatchWithCommon = bindActionCreators(
        common.getCallBackAll(), useDispatch())

    const curStateWithCommonForRedux = common.getCurState()

    const curStateWithCommon = useSelector((state: { common: commonStateTypes }) => {
        return state.common
    })

    return { dispatchWithCommon, curStateWithCommon, curStateWithCommonForRedux }

}

export function useCommonHelper() {
    const { dispatchWithCommon, curStateWithCommon } = useCommon()
    const { wineWinning } = useService()
    const { go } = useRouter()
    function replyHomePageStatus() {
        go('/')
        dispatchWithCommon.setupProcess({ setupProcess: 0 })
    }

    const isSaveed = useMemo(() => {
        if (curStateWithCommon.lotteryId === 2) return !!curStateWithCommon.commonData.fans?.address && !!curStateWithCommon.commonData.fans?.truename && !!curStateWithCommon.commonData.fans?.phone
        return !!curStateWithCommon.commonData.fans?.truename && !!curStateWithCommon.commonData.fans?.phone
    }, [curStateWithCommon])

    const gameScreen = useMemo(() => {
        return curStateWithCommon.setupProcess === 1
    }, [curStateWithCommon])

    const drawAfterLike = useMemo(() => {
        return curStateWithCommon.setupProcess === 2
    }, [curStateWithCommon])

    const home = useMemo(() => {
        return curStateWithCommon.setupProcess === 0
    }, [
        curStateWithCommon
    ])

    function triggerGoHome() {
        dispatchWithCommon.setupProcess({ setupProcess: 0 })
    }

    function triggerGame() {
        if (curStateWithCommon.commonData.fans?.award1 === '') {
            dispatchWithCommon.setupProcess({ setupProcess: 1 })
        } else {
            if (curStateWithCommon.commonData.fans?.award1 === "3") {
                wineWinning(false)
            } else {
                wineWinning(true)
            }
            go('lottery')
        }
    }

    function triggerDrawAfterLike() {
        dispatchWithCommon.setupProcess({ setupProcess: 2 })
    }

    return {
        triggerDrawAfterLike,
        drawAfterLike,
        gameScreen,
        triggerGame,
        home,
        triggerGoHome,
        isSaveed,
        curStateWithCommon,
        replyHomePageStatus
    }
}