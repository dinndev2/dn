import { useState } from 'react'
import './App.css'
import Bar from './components/navigation/Bar'
import Tab from './components/navigation/Tab'
import MainContent from './components/MainContent'
import Inventory from './components/inventory/Inventory'

function App() {

  return (
    <>
      {/* <Tab/> */}
      <MainContent/>
      <Inventory/>
      {/* <Bar/> */}
    </>
  )
}

export default App
