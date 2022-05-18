/*
 * @Author: 邱狮杰
 * @Date: 2022-05-18 16:22:45
 * @LastEditTime: 2022-05-18 16:35:21
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/reducer/common.ts
 */
import { CreateReducer, getAllValsWithActionCollectionHelper } from '@zealforchange/conciseredux'
import { fillResponse } from '~/hooks/useService'



export type commonAction = {
  SETFILLIN: 'setFillin'
}

export type commonActionTypes = getAllValsWithActionCollectionHelper<commonAction>

export type commonStateTypes = {
  common: Partial<fillResponse>
}

export type commonActionPayloadTypes = {
  common?: fillResponse
}

export const common = new CreateReducer<commonStateTypes, commonActionPayloadTypes, commonActionTypes>({
  common: {}
})
  .addAction('setFillin', (state, action) => {
    return { ...state, common: action.common || {} }
  })
  .setReducerKey('common')

