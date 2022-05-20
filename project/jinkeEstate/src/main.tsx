/*
 * @Author: 邱狮杰
 * @Date: 2022-05-19 09:21:10
 * @LastEditTime: 2022-05-20 20:34:11
 * @Description: 
 * @FilePath: /repo/project/jinkeEstate/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from '~/App'
import { store } from '~/store'
import './index.css'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
