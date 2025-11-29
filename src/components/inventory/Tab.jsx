import Sword from '../icons/Sword'
import Star from '../icons/Star'
import Projects from '../icons/Projects'
import { useState, useRef, useEffect } from 'react'

export default function Tab() { 
  const [selectedTab, setSelectedTab] = useState('skills')
  const tabRefs = useRef([])
  const borderRef = useRef(null)
  const containerRef = useRef(null)
  
  const tabs = [{
    id: 'skills',
    label: 'Skills',
    icon: <Sword />
  }, {
    id: 'achievements',
    label: 'Achievements',
    icon: <Star />
  }, {
    id: 'projects',
    label: 'Projects',
    icon: <Projects />
  }]
  
  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.id === selectedTab)
    if (tabRefs.current[activeIndex] && borderRef.current && containerRef.current) {
      const tabRect = tabRefs.current[activeIndex].getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      const leftOffset = tabRect.left - containerRect.left + (tabRect.width / 2)
      borderRef.current.style.left = `${leftOffset}px`
    }
  }, [selectedTab])
  
  return (
    <div ref={containerRef} className="relative border-b-2 border-white/20 flex items-center gap-8 justify-center z-60 mb-5">
      {/* Moving active border - aligns exactly with container border */}
      <div 
        ref={borderRef}
        className="absolute -bottom-0.5 h-0.5 bg-white transition-all duration-300"
        style={{ width: '3rem', transform: 'translateX(-50%)' }}
      />
      
      {tabs.map((tab, index) => {
        const isActive = tab.id === selectedTab
        return (
          <a 
            key={tab.id}
            ref={el => tabRefs.current[index] = el}
            onClick={() => setSelectedTab(tab.id)}
            className={`cursor-pointer transition-all duration-300 h-20 relative w-20 text-white flex items-center justify-center flex-col ${
              isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
            }`}
          >
            <span className={`${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 font-bold absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap`}>{tab.label}</span>
            <div className="text-white">
              {tab.icon}
            </div>
          </a>
        )
      })}
    </div>
  )
}