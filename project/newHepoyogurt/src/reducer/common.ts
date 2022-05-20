/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 16:22:45
 * @LastEditTime: 2022-05-19 08:57:07
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/reducer/common.ts
 */
import { CreateReducer, getAllValsWithActionCollectionHelper } from '@zealforchange/conciseredux'
import { fillResponse } from '~/hooks/useService'



export type commonAction = {
  SETFILLIN: 'setFillin',
  SETINIT: 'setInit'
}

export type commonActionTypes = getAllValsWithActionCollectionHelper<commonAction>

export type commonStateTypes = {
  common: Partial<fillResponse>
  init: boolean
}

export type commonActionPayloadTypes = {
  common?: fillResponse
  init?: boolean
}

export const common = new CreateReducer<commonStateTypes, commonActionPayloadTypes, commonActionTypes>({
  common: {},
  init: false
})
  .addAction('setFillin', (state, action) => {
    return { ...state, common: action.common || {} }
  })
  .addAction('setInit', (state, action) => {
    return { ...state, init: action.init || false }
  })
  .setReducerKey('common')

