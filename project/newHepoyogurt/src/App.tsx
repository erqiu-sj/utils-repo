/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-18 17:30:34
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/App.tsx
 */
import { Suspense, useEffect } from 'react'
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
          <Suspense fallback={<>loading...</>}>
            <Home />
          </Suspense>
        } />
        <Route path={RouterName.luckDraw} element={
          <Suspense fallback={<>loading...</>}>
            <LuckDraw />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default App
