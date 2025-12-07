import { useState, useEffect} from 'react'
import './App.css'
import Bar from './components/navigation/Bar'
import Tab from './components/navigation/Tab'
import MainContent from './components/MainContent'
import Inventory from './components/inventory/Inventory'
import OnboardingForm from './components/OnboardingForm'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [isHome, setIsHome] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 300)
    return () => clearTimeout(timer)
  }, [isHome])


  
  return ( 
    <>
    {(isLoading || isTransitioning) && <LoadingSpinner />}
    <Tab setIsHome={setIsHome}/>
    {isHome ? (
      <>
        <MainContent/>
        <Inventory setIsHome={setIsHome}/>
      </>
    ) : (
      <OnboardingForm/>
    )}
    </>
  )
}

export default App
