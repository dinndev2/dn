import RailsBlack from './icons/RailsBlack'
import BlackGemini from './icons/BlackGemini'
import GithubLogo from './icons/GithubLogo'
import GraduationCap from './icons/GraduationCap'
import Ship from './icons/Ship'
export default function PersonalProjects() {
  return (
    <div className="mt-4">
      <div className=" p-4 md:p-8 flex flex-col gap-4 items-center justify-center card-bg rounded-2xl"> 
        <h2 className="text-black text-center text-xl sm:2xl md:text-4xl font-bold flex items-center justify-center " >Ahh Yes AI. And More!</h2>
        <p className="text-gray-600 font-bold text-center w-96 text-xl "> Personal projects and Professional Contributions </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-2 gap-4 mt-4">
        <div className="card-bg row-span-3 rounded-2xl p-4 flex flex-col items-center justify-center">
          <img src="/media/codereview.png" alt="codereviewdemo" className="rounded-t-2xl shrink-0 w-full max-w-full" />
          <div className='rounded-b-2xl bg-white flex gap-1 flex-col p-10'>
            <p className='text-black text-base sm:text-xl font-bold'>AI Code Reviewer</p>
            <p className='text-gray-500 text-sm md:text-base font-bold'>A personal created tool that uses AI to review code and provide feedback for local pull requests.</p>
            <div className='flex gap-2 sm:gap-3 items-center mt-2'>  
              <RailsBlack />
              <BlackGemini />
              <GithubLogo />
            </div>
          </div>
        </div>
        <div className="card-bg rounded-2xl p-4 md:p-6 ">
          <h2 className="text-black flex items-center text-center gap-4 text-base sm:text-lg md:text-xl font-bold">
            <Ship />
            Greenore</h2>
          <p className="text-gray-500 text-base md:text-lg mt-4 font-bold">Vessel operations & expense tracking.</p>

        </div>
        <div className="card-bg rounded-2xl ">
          
        </div>
        <div className="card-bg rounded-2xl ">
          
        </div>
      </div>
    </div>
  )
}