import RailsBlack from './icons/RailsBlack'
import JsBlack from './icons/JsBlack'

export default function Timeline() {
  return (
    <div className="w-full krona-one-bold bg-white py-20 px-4 font-sans ">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        
        {/* HEADER SECTION - Matching the Hero style */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-slate-900 text-[9px] font-black text-white px-4 py-1.5 rounded-full flex items-center gap-2 tracking-[0.2em] mb-2 shadow-lg">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            WORK_HISTORY.LOG
          </div>
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase italic">
            Experience Timeline
          </h1>
          <p className="text-slate-500 max-w-lg text-sm lg:text-lg leading-relaxed">
            Professional journey building <span className="text-black font-bold">scalable systems</span> and <span className="text-black font-bold">real-time interfaces</span>.
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full relative">
          {/* VERTICAL DASHED LINE - The "Engine" aesthetic */}
          <div className="absolute left-[15px] top-4 bottom-4 border-l border-dashed border-slate-300 hidden sm:block" />

          {/* Timeline Item 1: Really Good Software */}
          <div className="relative flex flex-col gap-4 pl-0 sm:pl-12 group">
            {/* Dot Indicator */}
            <div className="absolute left-0 top-2 w-8 h-8 bg-black rounded-xl hidden sm:flex items-center justify-center z-10 ring-8 ring-white">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            <div className="bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-10 shadow-sm hover:shadow-md transition-shadow ring-8 ring-slate-50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Really Good Software <span className="text-slate-400 text-xs font-medium lowercase ml-2">(Former Tonic)</span>
                  </h2>
                  <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-md">
                    Software Developer
                  </span>
                </div>
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  2022 — 2025 DEC
                </div>
              </div>

              <ul className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-black font-black mt-1">→</span>
                  Built multi-tenant hiring platforms with E-Signature workflows and real-time scheduling.
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-black mt-1">→</span>
                  Modernized front-end architectures using TailwindCSS for high-performance React apps.
                </li>
                <li className="flex gap-3">
                  <span className="text-black font-black mt-1">→</span>
                  Collaborated on scalable features across cross-functional product teams.
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-dashed border-slate-200 flex items-center justify-between">
                <div className="flex gap-4 items-center grayscale hover:grayscale-0 transition-all">
                  <RailsBlack className="w-6 h-6" />
                  <JsBlack className="w-6 h-6" />
                </div>
                <div className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">
                  STACK_RESOURCES
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Item 2: Sun Asterisk */}
          <div className="relative flex flex-col gap-4 pl-0 sm:pl-12 group">
             <div className="absolute left-0 top-2 w-8 h-8 bg-slate-200 rounded-xl hidden sm:flex items-center justify-center z-10 ring-8 ring-white">
              <div className="w-2 h-2 bg-slate-400 rounded-full" />
            </div>

            <div className="bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-10 shadow-sm ring-8 ring-slate-50/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                    Sun Asterisk 
                    <img src="/media/sun.png" alt="Sun*" className="h-4 object-contain opacity-70" />
                  </h2>
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest bg-slate-100 px-2 py-1 rounded-md">
                    Web Developer
                  </span>
                </div>
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                  2022 MAY — OCT
                </div>
              </div>

              <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-4 border-slate-100 pl-6 italic">
                Maintained school management systems, optimizing UI performance and stabilizing legacy JS modules during critical QA cycles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}