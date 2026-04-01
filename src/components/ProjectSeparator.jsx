export default function ProjectSeparator() {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center overflow-hidden">
      {/* The Technical Line */}
      <div className="w-full max-w-7xl px-6 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-slate-200 border-t border-dashed border-slate-300" />
        
        {/* Central "Engine" Node */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full animate-pulse" />
          <div className="relative w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl rotate-45 border border-slate-700">
            <div className="-rotate-45 text-[10px] font-black text-blue-400">01</div>
          </div>
        </div>

        <div className="h-[1px] flex-1 bg-slate-200 border-t border-dashed border-slate-300" />
      </div>

      {/* Scrolling Metadata - High Contrast Design */}
      <div className="mt-8 w-full border-y border-slate-100 py-3 bg-slate-50/50 flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-10 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em]">
                Initializing_Project_Inventory
              </span>
              <span className="text-[10px] font-black text-blue-500 tracking-[0.3em]">
                // STABLE_BUILD_V2.4
              </span>
              <div className="w-1 h-1 bg-slate-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Sub-label */}
      <div className="mt-4 flex flex-col items-center gap-1">
        <div className="w-px h-10 bg-gradient-to-b from-slate-900 to-transparent" />
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2">
          Scroll to Explore
        </span>
      </div>
    </div>
  )
}