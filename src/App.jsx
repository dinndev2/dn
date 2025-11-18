import { useState } from 'react'
import './App.css'
import Bar from './components/navigation/Bar'
import Tab from './components/navigation/Tab'
import MainContent from './components/MainContent'

function App() {

  return (
    <>
      <Tab/>
      <MainContent/>
      <Bar/>
    </>
  )
}

export default App
