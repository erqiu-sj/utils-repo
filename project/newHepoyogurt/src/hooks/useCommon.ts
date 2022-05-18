/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 16:22:45
 * @LastEditTime: 2022-05-18 18:00:27
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/hooks/useCommon.ts
 */
import { bindActionCreators } from '@zealforchange/conciseredux';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { common, commonStateTypes } from '~/reducer/common';


export function useCommon() {

    const dispatchWithCommon = bindActionCreators(
        common.getCallBackAll(), useDispatch())

    const curStateWithCommonForRedux = common.getCurState()

    const curStateWithCommon = useSelector((state: { common: commonStateTypes }) => {
        return state.common
    })

    // TODO: 填完信息后 但为领过奖 但是saveinfo时候会更新用户信息会出现没领过奖但是领奖按钮变灰的情况 
    const luckyDraw = useMemo(() => {
        if (parseInt(curStateWithCommon?.common?.gametimes || '1') !== 0)
            return false
        if (!curStateWithCommon.common?.myawards?.length)
            return false
        return true
    }, [curStateWithCommon])
    // 用户信息是否完整 
    const isFillUserInfo = useMemo(() => {
        return !!curStateWithCommon.common.fans?.phone || !!curStateWithCommon.common.fans?.truename || !!curStateWithCommon.common.fans?.address
    }, [curStateWithCommon])


    return { isFillUserInfo, dispatchWithCommon, curStateWithCommon, curStateWithCommonForRedux, luckyDraw }

}