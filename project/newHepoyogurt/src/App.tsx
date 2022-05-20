/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-19 10:37:34
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/App.tsx
 */

import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterName, useService } from '~/hooks'
import { Home, LuckDraw, SpringFrame } from '~/pages/'
import './index.css'

function App() {

  const { fillComonData } = useService()

  useEffect(() => {
    fillComonData()
  }, [])

  return (
    <>
      <SpringFrame />
      <Routes>
        <Route path={RouterName.index} element={
          <Home />
        } />
        <Route path={RouterName.luckDraw} element={
          <LuckDraw />
        } />
      </Routes>
    </>
  )
}

export default App
