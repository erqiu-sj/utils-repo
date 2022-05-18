/*
 * @Author: 邱狮杰
 * @Date: 2022-05-17 10:35:54
 * @LastEditTime: 2022-05-18 17:37:56
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/reducer/springFrame.ts
 */

import { CreateReducer, getAllValsWithActionCollectionHelper } from '@zealforchange/conciseredux'

export type springFrameAction = {
  SETBULLETFRAMESWITCHSTATUS: 'setBulletFrameSwitchStatus',
  SETPOPSTATUSBOX: 'setPopStatusBox'
}

export type springFrameActionTypes = getAllValsWithActionCollectionHelper<springFrameAction>

export type springFrameStateTypes = {
  open: boolean,
  popStatusBox: {
    id: number // 1 规则  2 用户信息 3 二维码
  }
}
export type springFrameActionPayloadTypes = {
  open?: boolean // 开关
  popStatusBox?: {
    id: number
  } // 弹框状态
}

export const springFrame = new CreateReducer<springFrameStateTypes, springFrameActionPayloadTypes, springFrameActionTypes>({
  open: false,
  popStatusBox: {
    id: 1// 1 用户信息 2 规则 3 二维码
  }
})
  .addAction('setBulletFrameSwitchStatus', (state, action) => {
    return { ...state, open: action?.open || false }
  }).addAction('setPopStatusBox', (state, action) => {
    return {
      ...state, popStatusBox: {
        id: action.popStatusBox?.id || 2
      }
    }
  })
  .setReducerKey('springFrame')

