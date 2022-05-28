/*
 * @Author: 邱狮杰
 * @Date: 2022-05-27 12:35:06
 * @LastEditTime: 2022-05-28 10:42:09
 * @Description: 
 * @FilePath: /myApp/src/store/index.ts
 */
import { applyMiddleware, compose, createStore } from '@zealforchange/conciseredux'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

const middlewares = [
  thunkMiddleware
]

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
)

export default function configStore() {
  const store = createStore(combineReducers({}), enhancer)
  return store
}
