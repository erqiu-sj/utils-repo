/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-19 10:31:07
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from '~/App'
import { store } from '~/store'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
