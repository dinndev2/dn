import { useState, useEffect} from 'react'
import { AnimatePresence } from 'motion/react'
import './App.css'
import Tab from './components/navigation/Tab'
import MainContent from './components/MainContent'
import Inventory from './components/inventory/Inventory'
import OnboardingForm from './components/OnboardingForm'
import LoadingSpinner from './components/LoadingSpinner'
import Question from './components/Question'
import Timeline from './components/Timeline'
import Hero from './components/Hero'
import ProjectSeparator from './components/ProjectSeparator' 
import TimelineSeparator from './components/TimelineSeparator'
import PersonalProjects from './components/PersonalProjects'

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
    {isHome ? (
      <>
        <Hero/> 
        <ProjectSeparator /> 
        <Inventory setIsHome={setIsHome}/>
        <PersonalProjects />
        <TimelineSeparator />
        <Timeline />
      </>
    ) : (
      <OnboardingForm/>
    )}
    </>
  )
}

export default App
