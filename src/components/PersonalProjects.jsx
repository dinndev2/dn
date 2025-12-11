import RailsBlack from './icons/RailsBlack'
import BlackGemini from './icons/BlackGemini'
import GithubLogo from './icons/GithubLogo'
import GraduationCap from './icons/GraduationCap'
import Ship from './icons/Ship'
import JavaScript from './icons/JavaScript'
import ReactSvg from './icons/ReactSvg'
export default function PersonalProjects() {
  return (
    <div className="mt-4">
      <div className=" p-4 md:p-8 flex flex-col gap-4 items-center justify-center card-bg rounded-2xl"> 
        <h2 className="text-black text-center text-xl sm:2xl md:text-4xl font-bold flex items-center justify-center " >Ahh Yes AI. And More!</h2>
        <p className="text-gray-600 font-bold text-center max-w-full px-4 text-base sm:text-lg md:text-xl"> Personal projects and Professional Contributions </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 grid-rows-2 mt-4">
        <div className="card-bg lg:row-span-3 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center">
          <img src="/media/codereview.png" alt="codereviewdemo" className="rounded-t-2xl shrink-0 w-full max-w-full" />
          <div className='rounded-b-2xl bg-white flex gap-1 flex-col p-4 sm:p-6 md:p-10'>
            <p className='text-black text-base sm:text-xl font-bold'>AI Code Reviewer</p>
            <p className='text-gray-500 text-sm md:text-base font-bold'>A personal created tool that uses AI to review code and provide feedback for local pull requests.</p>
            <div className='flex gap-2 sm:gap-3 items-center mt-2'>  
              <RailsBlack />
              <BlackGemini />
              <GithubLogo />
            </div>
          </div>
        </div>
        <div className="card-bg rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col">
          <h2 className="text-black flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-bold">
            <Ship className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-black shrink-0" />
            Greenore</h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 font-semibold">2023 - 2024</p>
          <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4 font-bold leading-relaxed">
            A specialized platform built for managing vessel operations. It tracks a ship's ongoing expenses, monitors its movement and port status, and generates accurate invoices based on recorded activity. The system gives teams a clear view of each vessel's operational state — including when it arrives or departs — while keeping financial data organized and easy to manage.
          </p>
          <div className='flex gap-2 sm:gap-3 items-center mt-4'>
            <RailsBlack className="h-8 w-8 sm:h-10 sm:w-10" />
            <JavaScript className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </div>
        <div className="card-bg rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col">
          <h2 className="text-black flex items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl font-bold">
            <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-black shrink-0" />
            Sun Asterisk</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 sm:mt-4 font-bold leading-relaxed">
            I was responsible for maintaining and enhancing a JavaScript-based school management platform. My work involved improving existing features, fixing system issues, and ensuring the platform stayed stable and reliable for daily academic operations. I supported ongoing development while helping the team keep the product running smoothly for its users.
          </p>
          <div className='flex gap-2 sm:gap-3 items-center mt-4'>
            <JavaScript className="h-8 w-8 sm:h-10 sm:w-10" />
            <ReactSvg className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </div>
      </div>
    </div>
  )
}