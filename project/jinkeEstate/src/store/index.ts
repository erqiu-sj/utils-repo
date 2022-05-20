/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 17:45:09
 * @LastEditTime: 2022-05-20 17:54:38
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/store/index.ts
 */
import { combineReducers, createStore } from '@zealforchange/conciseredux';
import { common } from '~/reducer/common';

const store = createStore(combineReducers({
    common: common.finish(),
}))

export { store };
