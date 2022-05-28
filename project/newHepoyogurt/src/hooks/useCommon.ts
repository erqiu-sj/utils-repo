/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 16:22:45
 * @LastEditTime: 2022-05-23 14:35:00
 * @Description: 
 * @FilePath: /newHepoyogurt/src/hooks/useCommon.ts
 */
import { bindActionCreators } from '@zealforchange/conciseredux';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { common, commonStateTypes } from '~/reducer/common';
import { useLottery } from './useLottery';


export function useCommon() {
    const { curStateWithLottery } = useLottery()

    const dispatchWithCommon = bindActionCreators(
        common.getCallBackAll(), useDispatch())

    const curStateWithCommonForRedux = common.getCurState()

    const curStateWithCommon = useSelector((state: { common: commonStateTypes }) => {
        return state.common
    })

    const luckyDraw = useMemo(() => {
        if (curStateWithCommon.init) return false
        if (parseInt(curStateWithCommon?.common?.gametimes || '1') !== 0) return false
        if (!curStateWithCommon.common?.myawards?.length) return false
        return true
    }, [curStateWithCommon])

    // 用户信息是否完整 
    const isFillUserInfo = useMemo(() => {
        const alertUserInfo = [3, 8, 9, 10].includes(curStateWithLottery.currentPrizeList.id)
        if (alertUserInfo) return true
        return !!curStateWithCommon.common.fans?.phone || !!curStateWithCommon.common.fans?.truename || !!curStateWithCommon.common.fans?.address
    }, [curStateWithCommon, curStateWithLottery])

    return { isFillUserInfo, dispatchWithCommon, curStateWithCommon, curStateWithCommonForRedux, luckyDraw }

}