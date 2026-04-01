import Line from './icons/Line'

export default function Hero() {
  const scrollToInventory = () => {
    const inventoryElement = document.getElementById('Inventory')
    if (inventoryElement) {
      inventoryElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="hero" className="krona-one-bold min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-white text-gray-900 font-sans">
      
      {/* BACKGROUND DECOR - Subtle Grid/Dots to match the Canvas feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="z-10 flex flex-col items-center gap-6 max-w-4xl">
        
        {/* TOP TAG - Matching the "SYSTEM_ACTIVE" style */}
        <div className="animate-fade-in-down">
          <div className="bg-slate-900 text-[10px] font-black text-white px-5 py-2 rounded-full flex items-center gap-3 tracking-[0.3em] shadow-2xl">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            ALADIN_PENAGUNDA // SR_DEV
          </div>
        </div>

        {/* MAIN HEADLINE */}
        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 uppercase italic leading-[0.9] animate-fade-in-up">
            Software <br /> 
            <span className="text-blue-600">Engineer</span>
          </h1>
          
          <div className="w-full max-w-xs mt-4 opacity-20 animate-fade-in">
            <Line />
          </div>
        </div>

        {/* DESCRIPTION - Refined width and typography */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-slate-500 max-w-md text-center text-sm md:text-lg leading-relaxed font-medium">
            Building high-performance <span className="text-black font-bold">real-time systems</span> and refining digital products into clean, buttery-smooth experiences.
          </p>
        </div>

        {/* CTA BUTTONS - Matching the "Launch Demo" style */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#Inventory" 
            onClick={(e) => { e.preventDefault(); scrollToInventory(); }} 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-slate-800 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-slate-300"
          >
            View Projects
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a 
            href="mailto:dinndev@gmail.com" 
            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-slate-50 hover:border-slate-900 shadow-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* MOCK METADATA FOOTER - Consistency check */}
        <div className="mt-12 flex gap-8 items-center opacity-30 text-[9px] font-black uppercase tracking-[0.2em] animate-fade-in ">
          <span>Loc: 14.57° N, 121.06° E</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
          <span>Status: Open to Collab</span>
          <div className="w-1 h-1 bg-slate-400 rounded-full" />
          <span>Stack: Ruby On Rails / React - Typescript </span>
        </div>

      </div>
    </div>
  )
}