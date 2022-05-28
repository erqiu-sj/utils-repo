/*
 * @Author: 邱狮杰
 * @Date: 2022-05-15 10:57:03
 * @LastEditTime: 2022-05-23 17:07:07
 * @Description: 
 * @FilePath: /repo/project/newHepoyogurt/src/App.tsx
 */
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouterName, useService } from '~/hooks'
import { Home, LuckDraw, SpringFrame } from '~/pages/'
import mp3 from './assets/bkg.mp3'
import './index.css'

function App() {

  const { fillComonData } = useService()

  useEffect(() => {
    fillComonData()
  }, [])
  useEffect(() => {
    document.body.addEventListener('touchstart', () => {
      const audioPlay = document.querySelector('#audioPlay') as HTMLAudioElement
      if (audioPlay.paused) audioPlay.play()
    })
  }, [])

  return (
    <>
      <audio id='audioPlay' style={{ display: 'none' }} src={mp3} autoPlay loop></audio>
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
