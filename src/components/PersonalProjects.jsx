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
  { id: 1, title: 'Created', count: 2, accent: 'bg-sky-500', summary: 'New bookings appear instantly so the team can assign work right away.' },
  { id: 2, title: 'In Progress', count: 2, accent: 'bg-amber-500', summary: 'Status changes sync live, keeping everyone aligned during execution.' },
  { id: 3, title: 'Finished', count: 1, accent: 'bg-emerald-500', summary: 'Completed work updates in real time for accurate shared reporting.' }
]

const bookingProjectScreenshots = [
  {
    title: 'Subscription Management',
    summary: 'Free and Pro plans with business limits and upgrade controls.',
    src: '/media/booking-subscription.png'
  },
  {
    title: 'Team and Profile Settings',
    summary: 'Admin controls for users, roles, and account profile updates.',
    src: '/media/booking-settings.png'
  },
  {
    title: 'Business Workspace Overview',
    summary: 'Business-level details, service tabs, and quick operational stats.',
    src: '/media/booking-overview.png'
  },
  {
    title: 'Real-Time Kanban Booking Board',
    summary: 'Move booking cards across stages with instant updates for all teammates in that business.',
    src: '/media/booking-kanban.png'
  }
]

const bookingProjectLink = 'https://adminer-a6da2q.fly.dev/'
const bookingDemoContactLink = 'mailto:dinndev@gmail.com?subject=Kanban%20Project%20Demo%20Credentials'

function FeatureIcon({ id }) {
  if (id === 'subscription') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18" />
        <path d="M8 14h8" />
      </svg>
    )
  }

  if (id === 'workspace') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="3" y="13" width="8" height="7" rx="1.5" />
        <rect x="13" y="13" width="8" height="7" rx="1.5" />
      </svg>
    )
  }

  if (id === 'team') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="17" cy="9" r="2" />
        <path d="M4.5 18c.8-2.4 2.6-3.6 4.5-3.6s3.7 1.2 4.5 3.6" />
        <path d="M14.5 17.4c.6-1.6 1.9-2.4 3.5-2.4 1.2 0 2.4.5 3.1 1.6" />
      </svg>
    )
  }

  if (id === 'services') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h12" />
        <path d="M8 12h12" />
        <path d="M8 18h12" />
        <circle cx="4.5" cy="6" r="1.2" />
        <circle cx="4.5" cy="12" r="1.2" />
        <circle cx="4.5" cy="18" r="1.2" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="5.5" height="6" rx="1.5" />
      <rect x="9.25" y="4" width="5.5" height="6" rx="1.5" />
      <rect x="15.5" y="4" width="5.5" height="6" rx="1.5" />
      <path d="M5.8 10.2v9.6" />
      <path d="M12 10.2v9.6" />
      <path d="M18.2 10.2v9.6" />
    </svg>
  )
}

export default function PersonalProjects() {
  return (
    <div className="mt-4">
      <div className=" p-4 md:p-8 flex flex-col gap-4 items-center justify-center rounded-2xl"> 
        <h2 className="text-black text-center text-xl sm:2xl md:text-4xl font-bold flex items-center justify-center " >Featured Product Work</h2>
        <p className="text-gray-600 font-bold text-center w-96 text-xl "> Multi-business booking platform and workflow highlights </p>
      </div>
      <div className="card-bg rounded-2xl p-4 md:p-8 flex flex-col gap-6 mt-4">
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide uppercase">New Project</p>
          <h3 className="text-black text-xl sm:text-2xl md:text-3xl font-bold">Multi-Business Booking Workspace</h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-bold max-w-4xl">
            A SaaS platform where companies scale businesses by subscription, assign teams, manage services, and run bookings through a kanban board.
          </p>
          <div className="pt-1 flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={bookingProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-800"
              >
                Open Live Project
              </a>
              <a
                href={bookingDemoContactLink}
                className="inline-flex items-center rounded-full border border-black bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-gray-100"
              >
                Request Demo Access
              </a>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold">
              Live project requires login. Contact me for demo credentials.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-4 md:p-6 flex flex-col gap-4">
            <p className="text-black text-base sm:text-lg font-bold">Core Features</p>
            <div className="grid grid-cols-1 gap-3">
              {bookingWorkspaceFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-gray-200 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <FeatureIcon id={feature.id} />
                    <p className="text-black text-sm sm:text-base font-bold">{feature.title}</p>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 md:p-6 flex flex-col gap-4">
            <p className="text-black text-base sm:text-lg font-bold">Booking Workflow Snapshot</p>
            <div className="grid grid-cols-1 gap-3">
              {bookingKanbanColumns.map((column) => (
                <div key={column.id} className="rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-2.5 w-2.5 rounded-full ${column.accent}`}></span>
                      <p className="text-black text-sm sm:text-base font-bold">{column.title}</p>
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs sm:text-sm text-gray-700 font-semibold">{column.count}</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-2">
                    {column.summary}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-dashed border-gray-300 p-4">
              <p className="text-black text-sm sm:text-base font-bold">Built for service teams</p>
              <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1">
                Includes workspace overview, settings, user management, subscription upgrades, and real-time team collaboration.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookingProjectScreenshots.map((shot) => (
            <div key={shot.title} className="rounded-2xl bg-white p-3 sm:p-4 border border-gray-200">
              <img src={shot.src} alt={shot.title} className="rounded-xl w-full border border-gray-200" />
              <p className="text-black text-sm sm:text-base font-bold mt-3">{shot.title}</p>
              <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-1">{shot.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
