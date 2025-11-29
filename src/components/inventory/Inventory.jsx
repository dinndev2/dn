import Figma from '../icons/Figma'
import GithubSvg from '../icons/GithubSvg'
import Javascript from '../icons/Javascript'
import ReactSvg from '../icons/ReactSvg'
import Tailwind from '../icons/Tailwind'
import RubyOnRails from '../icons/RubyOnRails'
import bgImage from '../../assets/images/bg.png'
import meSvg from '../../assets/images/me.svg'
import Tab from './Tab'
import { useState } from 'react'

const tileBaseClasses = "col-span-1 flex items-center justify-center text-white bg-black/30 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ring-1 sm:ring-2 ring-inset p-1 sm:p-1.5 md:p-2 ring-gray-500 border sm:border-2 border-black/50"

const inventoryItems = [
  { id: 1, icon: <RubyOnRails /> },
  { id: 2, icon: <ReactSvg /> },
  { id: 3, icon: <GithubSvg /> },
  { id: 4, icon: <Javascript /> },
  { id: 5, icon: <Figma /> },
  { id: 6, icon: <Tailwind /> },
  { id: 7, icon: null },
  { id: 8, icon: null },
  { id: 9, icon: null },
  { id: 10, icon: null },
  { id: 11, icon: null },
  { id: 12, icon: null },
  { id: 13, icon: null },
  { id: 14, icon: null },
  { id: 15, icon: null },
  { id: 16, icon: null },
  { id: 17, icon: null, },
  { id: 18, icon: null },
  { id: 19, icon: null },
  { id: 20, icon: null },
]

export default function Inventory() {
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <div 
      id="Inventory" 
      className="bg-landscape-inventory min-h-screen w-screen h-screen overflow-auto flex flex-col relative"
    >
      {/* Blurred background layer */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)',
          transform: 'scale(1.1)',
          zIndex: 0
        }}
      />
      {/* Dark overlay layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-gray-900 opacity-60"
        style={{
          zIndex: 1
        }}
      />
      {/* Content layer - not blurred */}
      <div className="flex-1 flex flex-row items-center justify-center pb-4 sm:pb-6 md:pb-0 relative z-10" style={{ filter: 'none' }}>
        {/* Inventory Section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <Tab />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-2 px-2 sm:px-4 md:px-1 relative">
            {inventoryItems.map((item) => (
              <div key={item.id} className={tileBaseClasses}>
                {item.icon}
                {item.text && (
                  <span className="text-xs sm:text-sm md:text-base">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* SVG Image - Right side centered */}
        <div className="hidden md:flex flex-col items-center justify-between flex-1 px-4">
          
        </div>
      </div>
    </div>
  )
}