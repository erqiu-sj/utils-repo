/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-15 14:05:22
 * @Description:
 * @FilePath: /repo/project/newHepoyogurt/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '~/store'
import App from '~/App'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
