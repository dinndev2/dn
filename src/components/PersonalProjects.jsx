import React, { useState, useEffect } from 'react'

const bookingWorkspaceFeatures = [
  {
    id: 'subscription',
    title: 'Subscription-based scaling',
    description: 'Start with one business on Free, then unlock more businesses and support with Pro.'
  },
  {
    id: 'workspace',
    title: 'Multi-business workspace',
    description: 'Manage multiple business profiles in one account, each with its own operations.'
  },
  {
    id: 'team',
    title: 'Team and role management',
    description: 'Invite members, assign roles, and control access for clean team ownership.'
  },
  {
    id: 'services',
    title: 'Service and booking operations',
    description: 'Create services, manage bookings, and keep customer schedules in one workflow.'
  },
  {
    id: 'kanban',
    title: 'Kanban booking pipeline',
    description: 'Move bookings across stages with live updates visible to all teammates in the same business.'
  }
]

const bookingKanbanColumns = [
  { id: 1, title: 'Created', count: 2, accent: '#0ea5e9', summary: 'New bookings appear instantly so the team can assign work right away.' },
  { id: 2, title: 'In Progress', count: 2, accent: '#f59e0b', summary: 'Status changes sync live, keeping everyone aligned during execution.' },
  { id: 3, title: 'Finished', count: 1, accent: '#10b981', summary: 'Completed work updates in real time for accurate shared reporting.' }
]

const bookingProjectScreenshots = [
  {
    title: 'Subscription Management',
    summary: 'Free and Pro plans with business limits.',
    src: '/media/booking-subscription.png'
  },
  {
    title: 'Team and Profile Settings',
    summary: 'Admin controls for users and roles.',
    src: '/media/booking-settings.png'
  },
  {
    title: 'Business Overview',
    summary: 'Operational stats and service tabs.',
    src: '/media/booking-overview.png'
  },
  {
    title: 'Real-Time Kanban Board',
    summary: 'Instant updates for all teammates.',
    src: '/media/booking-kanban.png'
  }
]

const bookingProjectLink = 'https://adminer-a6da2q.fly.dev/'
const bookingDemoContactLink = 'mailto:dinndev@gmail.com?subject=Kanban%20Project%20Demo%20Credentials'

function FeatureIcon({ id, color = "currentColor" }) {
  const props = { className: "h-5 w-5", stroke: color, fill: "none", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };
  
  if (id === 'subscription') return (
    <svg {...props} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18" /><path d="M8 14h8" /></svg>
  )
  if (id === 'workspace') return (
    <svg {...props} viewBox="0 0 24 24"><rect x="3" y="4" width="8" height="7" rx="1.5" /><rect x="13" y="4" width="8" height="7" rx="1.5" /><rect x="3" y="13" width="8" height="7" rx="1.5" /><rect x="13" y="13" width="8" height="7" rx="1.5" /></svg>
  )
  if (id === 'team') return (
    <svg {...props} viewBox="0 0 24 24"><circle cx="9" cy="8" r="2.5" /><circle cx="17" cy="9" r="2" /><path d="M4.5 18c.8-2.4 2.6-3.6 4.5-3.6s3.7 1.2 4.5 3.6" /><path d="M14.5 17.4c.6-1.6 1.9-2.4 3.5-2.4 1.2 0 2.4.5 3.1 1.6" /></svg>
  )
  if (id === 'services') return (
    <svg {...props} viewBox="0 0 24 24"><path d="M8 6h12" /><path d="M8 12h12" /><path d="M8 18h12" /><circle cx="4.5" cy="6" r="1.2" /><circle cx="4.5" cy="12" r="1.2" /><circle cx="4.5" cy="18" r="1.2" /></svg>
  )
  return (
    <svg {...props} viewBox="0 0 24 24"><rect x="3" y="4" width="5.5" height="6" rx="1.5" /><rect x="9.25" y="4" width="5.5" height="6" rx="1.5" /><rect x="15.5" y="4" width="5.5" height="6" rx="1.5" /><path d="M5.8 10.2v9.6" /><path d="M12 10.2v9.6" /><path d="M18.2 10.2v9.6" /></svg>
  )
}

export default function PersonalProjects() {
  const [selectedImg, setSelectedImg] = useState(null)

  // Accessibility: Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImg(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <section id="Inventory" className="w-full bg-white py-24 px-4 font-sans relative krona-one-regular">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col mb-16 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-[10px] font-black text-white px-4 py-1.5 rounded-full flex items-center gap-2 tracking-[0.2em] shadow-lg">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              PRODUCT_SPEC // 02
            </div>
            <div className="h-px flex-1 bg-slate-100 border-t border-dashed border-slate-300" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-[0.9]">
            Multi-Business <br /> 
            <span className="text-slate-300 font-medium">Booking Workspace</span>
          </h2>
        </div>

        {/* MAIN ENGINE CARD */}
        <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-6 lg:p-14 shadow-sm relative overflow-hidden ring-8 ring-slate-50/50 mb-12">
          {/* Version Tag */}
          <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-black px-10 py-3 rotate-45 translate-x-10 translate-y-4 uppercase tracking-widest z-20">
            SaaS_STABLE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
            
            {/* LEFT SIDE: CORE INFO */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <span className="text-[11px] font-black text-blue-600 uppercase tracking-[0.4em]">
                  System_Overview
                </span>
                <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                  A multi-tenant SaaS engine designed to scale <span className="text-slate-900 font-bold">business operations</span> through granular subscription logic and real-time state management.
                </p>
              </div>

              {/* ACTION CLUSTER */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4">
                  {/* Primary Button: Redirects to mailto with a specific "Wake Request" subject. 
                    We change the text to 'Request Private Access' to manage expectations.
                  */}
                  <a 
                    href={`mailto:dinndev@gmail.com?subject=Portfolio: Request to spin up Live Demo (${selectedImg?.title || 'Booking Workspace'})`}
                    className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-3 shadow-xl shadow-slate-300"
                  >
                    Request Private Access
                    <svg className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </a>

                  {/* Secondary Button: Credentials request */}
                  <a 
                    href={bookingDemoContactLink} 
                    className="bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    Get Demo Login
                  </a>
                </div>

                {/* Technical Status Note */}
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 italic px-1">
                  <div className="flex items-center gap-1.5 bg-amber-50 text-amber-600 px-2 py-1 rounded-md border border-amber-100">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                    ENVIRONMENT: ON-DEMAND
                  </div>
                  <span className="opacity-60">Hibernated to optimize cloud costs. Ready to deploy on request.</span>
                </div>
              </div>

              {/* TECHNICAL SPEC STRIP */}
              <div className="grid grid-cols-2 gap-6 pt-10 border-t border-dashed border-slate-200">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Logic_Stack</p>
                  <p className="text-sm font-bold text-slate-900 mt-2">Ruby on Rails / Turbo - Stimulus </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Persistence</p>
                  <p className="text-sm font-bold text-slate-900 mt-2">PostgreSQL</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: BENTO FEATURE GRID */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] border border-slate-200 p-8 shadow-inner relative overflow-hidden">
               <div className="absolute top-4 right-8 text-[9px] font-black text-slate-200 tracking-[0.3em]">ENGINE_SPECIFICATIONS</div>
               
               <div className="flex flex-col gap-3">
                 {bookingWorkspaceFeatures.map((feature) => (
                    <div key={feature.id} className="group flex items-start gap-5 p-5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                       <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-blue-600 transition-colors">
                          <FeatureIcon id={feature.id} color="white" />
                       </div>
                       <div>
                          <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-tight">{feature.title}</h4>
                          <p className="text-[12px] text-slate-500 font-medium mt-1.5 leading-relaxed">{feature.description}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* SCREENSHOT GALLERY WITH ZOOM */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Visual_Evidence_Log</span>
            <div className="h-px flex-1 bg-slate-100 border-t border-dashed border-slate-200" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingProjectScreenshots.map((shot) => (
              <div 
                key={shot.title} 
                onClick={() => setSelectedImg(shot)}
                className="group relative bg-white border border-slate-200 rounded-[2rem] p-4 hover:border-slate-900 transition-all shadow-sm ring-4 ring-transparent hover:ring-slate-50 cursor-zoom-in"
              >
                <div className="aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-5 border border-slate-100 relative">
                   <img 
                      src={shot.src} 
                      alt={shot.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest bg-slate-900/80 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">Expand Preview</span>
                   </div>
                </div>
                <h5 className="text-[12px] font-black text-slate-900 uppercase tracking-tight px-1">{shot.title}</h5>
                <p className="text-[10px] text-slate-500 font-semibold mt-2 px-1 leading-tight">{shot.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 transition-all duration-300"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.96)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedImg(null)}
        >
          {/* Close UI */}
          <div className="absolute top-8 right-8 flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden md:block">Press ESC to exit</span>
            <button className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="max-w-6xl w-full max-h-full flex flex-col items-center gap-8" onClick={e => e.stopPropagation()}>
            <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-200">
               <img 
                 src={selectedImg.src} 
                 alt={selectedImg.title} 
                 className="w-full h-auto max-h-[75vh] object-contain bg-white"
               />
            </div>
            
            <div className="flex flex-col items-center text-center gap-3">
               <div className="h-8 w-px bg-slate-200" />
               <h3 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{selectedImg.title}</h3>
               <p className="text-slate-500 font-medium text-sm tracking-wide max-w-lg">{selectedImg.summary}</p>
               <div className="mt-2 text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Verified_System_Output</div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}