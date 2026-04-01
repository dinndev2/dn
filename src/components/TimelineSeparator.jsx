export default function TimelineSeparator() {
  return (
    <div className="w-full bg-white pt-24 pb-12 flex flex-col items-center overflow-hidden">
      {/* Access Header */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
          Archive_Sequence_Access
          <div className="w-1 h-1 bg-slate-300 rounded-full" />
        </div>
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-slate-900" />
      </div>

      {/* The Technical Badge */}
      <div className="relative group">
        <div className="absolute inset-0 bg-slate-900 blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
        <div className="relative px-8 py-4 bg-white border-2 border-slate-900 rounded-2xl flex items-center gap-4 shadow-xl">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">
              Chronological
            </span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
              Data_Set
            </span>
          </div>
          <div className="h-6 w-px bg-slate-200" />
          <div className="text-xl font-black italic text-slate-900 tracking-tighter">
            2022 — 2026
          </div>
        </div>
      </div>

      {/* Connection to Timeline component */}
      <div className="mt-8 flex flex-col items-center">
        <div className="w-px h-16 bg-slate-900 border-l border-dashed border-slate-400" />
        <div className="w-2 h-2 bg-slate-900 rounded-full ring-4 ring-slate-100" />
      </div>
    </div>
  )
}