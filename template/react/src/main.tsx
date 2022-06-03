/*
 * @Author: 邱狮杰
 * @Date: 2022-05-14 11:41:35
 * @LastEditTime: 2022-06-03 20:40:31
 * @Description: 
 * @FilePath: /repo/template/react/src/main.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '~/App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
