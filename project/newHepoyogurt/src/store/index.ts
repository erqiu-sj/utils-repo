import { lottery } from '~/reducer/lottery'
/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 14:04:12
 * @LastEditTime: 2022-05-15 14:06:43
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/store/index.ts
 */
import { combineReducers, createStore } from '@zealforchange/conciseredux'

const store = createStore(combineReducers({ lottery: lottery.finish() }))

export { store }
