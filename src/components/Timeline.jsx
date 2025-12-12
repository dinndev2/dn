import RailsBlack from './icons/RailsBlack'
import BlackGemini from './icons/BlackGemini'
import GithubLogo from './icons/GithubLogo'
import JsBlack from './icons/JsBlack'
export default function Timeline() {
  return (
    <div className="mb-20 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">Timeline</h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium">My Journey in the industry so far.</p>
        </div>
        
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          {/* Timeline Item 1 */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black flex flex-wrap items-center gap-2">
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black shrink-0"></span>
              <span className="font-semibold">Really Good Software</span>
              <span className="text-gray-500 text-xs sm:text-sm">(Former Tonic)</span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium ml-auto">2025 - Present</span>
            </h2>
            <span className="text-black font-bold text-base sm:text-lg">Product Engineer</span>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base border-l-2 border-gray-300 ml-2 sm:ml-3 pl-3 sm:pl-4 leading-relaxed">
              <li className="ml-4">Built and expanded a multi-tenant hiring and interview platform, including authentication, time tracking, timesheets, E-Signature workflows, and PDF generation.</li>
              <li className="ml-4">Implemented real-time chat and a timezone-aware interview scheduling system used across multiple countries.</li>
              <li className="ml-4">Modernized front-end interfaces using TailwindCSS, improving usability and performance across the platform.</li>
              <li className="ml-4">Worked closely with designers, product managers, and backend teams to ship scalable, maintainable features.</li>
              <li className="ml-4">Continue to provide ongoing support and improvements to legacy modules when needed.</li>
            </ul>
            <div className='flex gap-2 w-20 sm:gap-3 items-center'>  
              <RailsBlack />
              <JsBlack />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black flex flex-wrap items-center gap-2">
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black shrink-0"></span>
              <span className="font-semibold text-black flex items-center gap-2">Sun Asterisk <img src="/media/sun.png" alt="Sun Asterisk" className=" object-contain w-20" /> </span>
              <span className="text-gray-500 text-xs sm:text-sm font-medium ml-auto">2022 - 2023</span>
            </h2>
            <span className="text-black font-bold text-base sm:text-lg">Web Developer</span>
            <p className="text-gray-500 text-sm sm:text-base border-l-2 border-gray-300 ml-2 sm:ml-3 pl-3 sm:pl-4 leading-relaxed">
              Maintained and improved a school management system for teachers and staff. Implemented new UI screens, fixed bugs, and improved front-end performance. Supported feature releases, QA cycles, and ensured platform stability under high usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}