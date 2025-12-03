import { useState } from 'react'
import Users from '../icons/Users'
import Sparkle from '../icons/Sparkle'
import Chart from '../icons/Chart'
import Sig from '../icons/Sig'
import JsBlack from '../icons/JsBlack'
import RailsBlack from '../icons/RailsBlack'
import TailwindBlack from '../icons/TailwindBlack'
import Wave from '../icons/Wave'

export default function Inventory() {
  const [isHovered, setIsHovered] = useState(false)
  const handleHover = () => {
    setIsHovered(true)
  }
  const handleLeave = () => {
    setIsHovered(false)
  }
  return (
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
              <div className='w-full overflow-x-auto  overflow-y-hidden flex items-start gap-2 sm:gap-3 hide-scrollbar'>
                <div className='shrink-0 w-full max-w-full flex flex-col'>
                  <video
                      src="/media/onboarding1.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-t-2xl w-full"
                    />
                  <div className='flex flex-col px-4 sm:px-6 md:px-10 gap-2 sm:gap-3 bg-white pt-2 sm:pt-3'>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-black'>Worker onboarding</h2>
                    <span className='text-gray-500 text-sm sm:text-base font-bold w-full sm:w-1/2'>Worker sets up their account, and the system links them to the job so the company can continue the hiring process.</span>
                  </div>
                </div>
                <div className='shrink-0 w-full max-w-full flex flex-col'>
                  <img src="/media/hiring1.png" alt="hiring" className="rounded-t-2xl shrink-0 w-full max-w-full" />
                  <div className='flex flex-col px-4 sm:px-6 md:px-10 gap-2 sm:gap-3 bg-white pt-2 sm:pt-3'>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-black'>Hiring</h2>
                    <span className='text-gray-500 text-sm sm:text-base font-bold w-full sm:w-1/2'>Worker sets up their account, and the system links them to the job so the company can continue the hiring process.</span>
                  </div>
                </div>
                <div className='shrink-0 w-full max-w-full flex flex-col'>
                  <video
                  src="/media/timesheet.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-t-2xl shrink-0 w-full max-w-full"
                  />
                  <div className='flex flex-col px-4 sm:px-6  md:px-10 gap-2 sm:gap-3 bg-white pb-4 pt-2 sm:pt-3'>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-black'>Timesheet</h2>
                    <span className='text-gray-500 text-sm sm:text-base font-bold w-full sm:w-1/2'>Worker sets up their account, and the system links them to the job so the company can continue the hiring process.</span>
                  </div>
                </div>
              </div>
              <div className='bg-white relative rounded-b-2xl w-full pl-4 sm:pl-6 md:pl-10 flex pt-2 sm:pt-3 items-center flex-1 min-h-[120px] sm:min-h-[150px]'>
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
  )
}