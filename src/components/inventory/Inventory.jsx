import { useState, useRef, useEffect } from 'react'
import Users from '../icons/Users'
import Sparkle from '../icons/Sparkle'
import Chart from '../icons/Chart'
import Sig from '../icons/Sig'
import JsBlack from '../icons/JsBlack'
import RailsBlack from '../icons/RailsBlack'
import TailwindBlack from '../icons/TailwindBlack'
import Wave from '../icons/Wave'
import Divider from '../Divider'

const carouselItems = [
  {
    id: 1,
    type: 'video',
    src: '/media/onboarding1.mp4',
    title: 'Worker onboarding',
    description: 'Worker sets up their account, and the system links them to the job so the company can continue the hiring process.'
  },
  {
    id: 2,
    type: 'image',
    src: '/media/hiring1.png',
    title: 'Hiring',
    description: 'Worker sets up their account, and the system links them to the job so the company can continue the hiring process.'
  },
  {
    id: 3,
    type: 'video',
    src: '/media/timesheet.mp4',
    title: 'Timesheet',
    description: 'Worker sets up their account, and the system links them to the job so the company can continue the hiring process.'
  }
]

export default function Inventory() {
  const [isHovered, setIsHovered] = useState(false)
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false)
  const scrollContainerRef = useRef(null)
  const manualScrollTimeoutRef = useRef(null)

  const handleHover = () => {
    setIsHovered(true)
  }
  const handleLeave = () => {
    setIsHovered(false)
  }

  const handleManualScrollStart = () => {
    setIsManuallyScrolling(true)
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current)
    }
  }

  const handleManualScrollEnd = () => {
    // Resume auto-scroll after 2 seconds of no manual interaction
    manualScrollTimeoutRef.current = setTimeout(() => {
      setIsManuallyScrolling(false)
    }, 2000)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Initialize scroll position to first item
    const itemWidth = container.children[0]?.offsetWidth || 0
    if (itemWidth > 0) {
      container.scrollLeft = 0
    }

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.children[0]?.offsetWidth || 0
      const gap = 12 // gap-3 = 0.75rem = 12px
      const totalItemWidth = itemWidth + gap
      const setWidth = totalItemWidth * carouselItems.length
      
      // If scrolled to the duplicate set, reset to original seamlessly
      if (scrollLeft >= setWidth) {
        container.scrollLeft = scrollLeft - setWidth
      }
      // If scrolled before the original set, jump to duplicate
      else if (scrollLeft < 0) {
        container.scrollLeft = setWidth + scrollLeft
      }
    }

    let scrollTimeout
    const throttledScroll = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        handleScroll()
        scrollTimeout = null
      }, 10)
    }

    container.addEventListener('scroll', throttledScroll)
    return () => {
      container.removeEventListener('scroll', throttledScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  // Continuous scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId
    let lastTimestamp = 0
    let scrollAccumulator = 0 // Accumulate small scroll amounts
    const scrollSpeed = 0.30 // pixels per frame (adjust for speed - can go as low as 0.01)

    const continuousScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      lastTimestamp = timestamp

      if (!isHovered && container) {
        const itemWidth = container.children[0]?.offsetWidth || 0
        if (itemWidth > 0) {
          const gap = 12
          const setWidth = (itemWidth + gap) * carouselItems.length
          
          // Accumulate scroll amount
          scrollAccumulator += scrollSpeed
          
          // Only apply scroll when accumulated amount is >= 0.5 pixels
          if (scrollAccumulator >= 0.5) {
            const scrollLeft = container.scrollLeft
            const scrollAmount = Math.floor(scrollAccumulator)
            scrollAccumulator -= scrollAmount // Keep the remainder
            
            let newScrollLeft = scrollLeft + scrollAmount
            
            // If we've scrolled past the duplicate set, reset to original
            if (newScrollLeft >= setWidth) {
              newScrollLeft = newScrollLeft - setWidth
            }
            
            container.scrollLeft = newScrollLeft
          }
        }
      }

      animationFrameId = requestAnimationFrame(continuousScroll)
    }

    animationFrameId = requestAnimationFrame(continuousScroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])


  return (
    <> 
      <Divider />
      <div className="min-h-screen h-auto sm:h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div 
          id="Inventory" 
          className="grid grid-cols-1 xl:grid-cols-2 w-full mx-auto gap-3 sm:gap-4">
            <div className="col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-1 sm:col-span-2 card-bg p-6 md:p-10 rounded-xl flex gap-2 sm:gap-3 flex-col">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">Naoi</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">Managing contractor hiring, workflows, and engagement in one platform.</h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg font-bold">A collaborative system built for teams managing contract hiring, Naoi brings together all tools needed to handle the full contractor lifecycle.</p>
              </div>
              <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className='col-span-1 card-bg rounded-2xl flex gap-2 sm:gap-3 flex-col p-6 md:p-8'>
                  <div className='flex gap-3 sm:gap-5'>
                    <Users />
                    <p className='text-black text-base sm:text-lg font-bold'>Users</p>
                  </div>
                  <p className='text-gray-500 text-sm sm:text-base md:text-lg font-bold'>Supports tiered billing and client-specific plans with automated access control.</p>
                </div>
                <div className='col-span-1 card-bg rounded-2xl flex gap-2 sm:gap-3 flex-col p-6 md:p-8'>
                  <div className='flex gap-3 sm:gap-5'>
                    <Sparkle />
                    <p className='text-black text-base sm:text-lg font-bold'>Subscription Plan</p>
                  </div>
                  <p className='text-gray-500 text-sm sm:text-base md:text-lg font-bold'>Supports tiered billing and client-specific plans with automated access control.</p>
                </div>
                <div className='col-span-1 card-bg rounded-2xl flex gap-2 sm:gap-3 flex-col p-6 md:p-8'>
                  <div className='flex gap-3 sm:gap-5'>
                    <Sig />
                    <p className='text-black text-base sm:text-lg font-bold'>Electric Signature</p>
                  </div>
                  <p className='text-gray-500 text-sm sm:text-base md:text-lg font-bold'>signing flow for contracts and renewals.</p>
                </div>
                <div className='col-span-1 card-bg rounded-2xl flex gap-2 sm:gap-3 flex-col p-6 md:p-8'>
                  <div className='flex gap-3 sm:gap-5'>
                    <Chart />
                    <p className='text-black text-base sm:text-lg font-bold'>Admin Dashboard</p>
                  </div>
                  <p className='text-gray-500 text-sm sm:text-base md:text-lg font-bold'>Gives admins full visibility into contractors, jobs, timesheets, and activity.</p>
                </div>
              </div>
            </div>
            <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className="col-span-1 card-bg rounded-2xl overflow-hidden">
              <div className='relative flex flex-col p-2 sm:p-4 h-full hover:scale-101 cursor-pointer transition-all duration-200'>
                <div 
                  ref={scrollContainerRef}
                  className='w-full overflow-x-auto overflow-y-hidden flex items-start gap-2 sm:gap-3 hide-scrollbar'
                >
                  {/* Original items */}
                  {carouselItems.map((item) => (
                    <div key={item.id} className='shrink-0 w-full max-w-full flex flex-col'>
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-t-2xl w-full"
                        />
                      ) : (
                        <img src={item.src} alt={item.title} className="rounded-t-2xl shrink-0 w-full max-w-full" />
                      )}
                      <div className={`flex flex-col px-4 sm:px-6 md:px-10 gap-2 sm:gap-3 bg-white ${item.id === 3 ? 'pb-4' : ''} pt-2 sm:pt-3`}>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-black'>{item.title}</h2>
                        <span className='text-gray-500 text-sm sm:text-base font-bold w-full sm:w-1/2'>{item.description}</span>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate items for seamless loop */}
                  {carouselItems.map((item) => (
                    <div key={`duplicate-${item.id}`} className='shrink-0 w-full max-w-full flex flex-col'>
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="rounded-t-2xl w-full"
                        />
                      ) : (
                        <img src={item.src} alt={item.title} className="rounded-t-2xl shrink-0 w-full max-w-full" />
                      )}
                      <div className={`flex flex-col px-4 sm:px-6 md:px-10 gap-2 sm:gap-3 bg-white ${item.id === 3 ? 'pb-4' : ''} pt-2 sm:pt-3`}>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-black'>{item.title}</h2>
                        <span className='text-gray-500 text-sm sm:text-base font-bold w-full sm:w-1/2'>{item.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='bg-white relative rounded-b-2xl w-full px-4 sm:px-6 md:px-10 flex pt-2 sm:pt-3 items-center flex-1 min-h-[120px] sm:min-h-[150px]'>
                  <Wave show={isHovered} />
                  <div className='flex gap-2 sm:gap-3 items-center'>  
                    <RailsBlack />
                    <JsBlack />
                    <TailwindBlack />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}