import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { QADashboard } from "./QADashboard"
import { HowITest } from "./HowITest"
import { useScrollLock } from "../../hooks/useScrollLock"

export function QualityLab({ demos, dashboard, howITest }) {
  const [activeTab, setActiveTab] = useState("QA Methodology")

  const tabs = [
    { id: "QA Methodology", icon: "flow" },
    { id: "Sample Test Cases", icon: "case" },
    { id: "API Simulator", icon: "api" },
    { id: "Execution Dashboard", icon: "chart" },
    { id: "Bug Tracker", icon: "bug" }
  ]

  return (
    <div className="flex flex-col gap-8 sm:gap-16">
      {/* ═══ ENHANCED SECTION HEADER ═══ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center reveal">
        {/* Left: Title + Stats */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-5 bg-accent/5 rounded-full text-accent shadow-sm inline-block w-fit">Execution Suite</div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-[1.05]">
              QA <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500">Testing & Methodology</span>
            </h2>
            <p className="opacity-50 text-text-secondary leading-relaxed text-sm sm:text-base font-medium max-w-xl border-l-2 border-accent/20 pl-5 py-1">
              An interactive, high-fidelity environment for protocol verification, API contract audits, and systematic quality intelligence.
            </p>
          </div>
        </div>



        {/* Right: Decorative Radial Diagram */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative h-[220px]">
          {/* Outer ring */}
          <div className="absolute w-[180px] h-[180px] rounded-full border border-accent/10 animate-[spin_20s_linear_infinite] animate-float">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(9,132,227,0.8)]"></div>
          </div>
          {/* Mid ring */}
          <div className="absolute w-[130px] h-[130px] rounded-full border border-violet-400/20 animate-[spin_12s_linear_infinite_reverse] stagger-2 animate-float">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]"></div>
          </div>
          {/* Inner ring */}
          <div className="absolute w-[80px] h-[80px] rounded-full border border-emerald-400/30 animate-[spin_8s_linear_infinite] stagger-4 animate-float">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
          </div>
          {/* Center core */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-bg-secondary border border-white/60 flex items-center justify-center shadow-lg" style={{ boxShadow: 'var(--skeuo-outer)' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" strokeWidth="2.5" /></svg>
          </div>
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-accent/5 blur-[60px] rounded-full pointer-events-none"></div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar px-4 sm:px-0">
        <div className="flex items-center gap-1 bg-white/80 backdrop-blur-2xl border border-border-soft shadow-md p-1.5 rounded-2xl min-w-max">
          {tabs.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all duration-300 whitespace-nowrap ${isActive
                    ? 'text-white bg-[#1a1a1a] shadow-xl'
                    : 'text-text-primary/35 hover:text-text-primary/70 hover:bg-black/5'
                  }`}
              >
                {/* Active bar */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent transition-all duration-500 ${isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />

                {/* Subtle backglow on hover */}
                {!isActive && (
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-xl rounded-xl transition-opacity"></div>
                )}

                {/* Icon */}
                <span className={`transition-all duration-300 ${isActive ? 'text-white' : 'opacity-40 group-hover:opacity-80'}`}>
                  {tab.icon === 'bug' && (
                    <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                      <rect x="4" y="8" width="56" height="36" rx="3" stroke="url(#bugGrad)" strokeWidth="3" />
                      <path d="M22 56H42M32 44V56" stroke="url(#bugGrad)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="36" cy="24" r="16" fill="white" stroke="url(#bugGrad)" strokeWidth="3" />
                      <path d="M36 18V22M32 20H40" stroke="url(#bugGrad)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M31 24h10M36 24v6M30 20l2 2M42 20l-2 2M30 28l2-2M42 28l-2 2" stroke="url(#bugGrad)" strokeWidth="2" strokeLinecap="round" />
                      <path d="M48 36L58 46" stroke="url(#bugGrad)" strokeWidth="4" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="bugGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00D2FF" />
                          <stop offset="1" stopColor="#2962FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {tab.icon === 'api' && (
                    <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                      <path d="M12 40C5.373 40 0 34.627 0 28C0 21.373 5.373 16 12 16C12 7.163 19.163 0 28 0C35.536 0 41.839 5.2 43.5 12.213C45.242 11.442 47.318 11 49.5 11C57.508 11 64 17.492 64 25.5C64 33.508 57.508 40 49.5 40H12Z" stroke="url(#apiGrad)" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M16 40V52M24 40V60M32 40V48M40 40V60M48 40V52M56 40V48" stroke="url(#apiGrad)" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="10" cy="52" r="4" stroke="url(#apiGrad)" strokeWidth="2" />
                      <circle cx="24" cy="60" r="4" stroke="url(#apiGrad)" strokeWidth="2" />
                      <circle cx="32" cy="48" r="4" stroke="url(#apiGrad)" strokeWidth="2" />
                      <circle cx="40" cy="62" r="4" stroke="url(#apiGrad)" strokeWidth="2" fill="white" />
                      <circle cx="56" cy="48" r="4" stroke="url(#apiGrad)" strokeWidth="2" />
                      <defs>
                        <linearGradient id="apiGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#2962FF" />
                          <stop offset="1" stopColor="#00E5FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {tab.icon === 'case' && (
                    <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                      <path d="M14 54L10 16L14 8h36l4 8l-4 38H14Z" stroke="url(#caseGrad)" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M26 4H38V12H26V4Z" fill="url(#caseGrad)" stroke="url(#caseGrad)" strokeWidth="2" />
                      <circle cx="24" cy="22" r="3" fill="url(#caseGrad)" />
                      <circle cx="24" cy="32" r="3" fill="url(#caseGrad)" />
                      <circle cx="24" cy="42" r="3" fill="url(#caseGrad)" />
                      <path d="M32 22H46M32 32H46M32 42H46" stroke="url(#caseGrad)" strokeWidth="3" strokeLinecap="round" />
                      <path d="M54 20L54 44L58 50L54 56" stroke="url(#caseGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 28L4 36L12 56L22 46" stroke="url(#caseGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="caseGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#31CAB1" />
                          <stop offset="1" stopColor="#3199CA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {tab.icon === 'chart' && (
                    <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
                      <path d="M4 4V56C4 58.209 5.791 60 8 60H60" stroke="url(#chartGrad)" strokeWidth="4" strokeLinecap="round" />
                      <rect x="12" y="44" width="10" height="12" rx="2" fill="url(#chartGrad)" />
                      <rect x="26" y="28" width="10" height="28" rx="2" fill="url(#chartGrad)" />
                      <rect x="40" y="38" width="10" height="18" rx="2" fill="url(#chartGrad)" />
                      <rect x="54" y="16" width="10" height="40" rx="2" fill="url(#chartGrad)" />
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00E5FF" />
                          <stop offset="1" stopColor="#3F51B5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                  {tab.icon === 'flow' && (
                    <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                      <circle cx="16" cy="16" r="10" stroke="url(#flowGrad)" strokeWidth="3" strokeDasharray="4 4" />
                      <path d="M16 10L16 22M10 16L22 16" stroke="url(#flowGrad)" strokeWidth="3" />
                      <path d="M26 16H38M48 32H20M30 48H44" stroke="url(#flowGrad)" strokeWidth="3" strokeLinecap="round" />
                      <rect x="42" y="10" width="12" height="12" rx="2" stroke="url(#flowGrad)" strokeWidth="3" />
                      <rect x="10" y="26" width="12" height="12" rx="2" stroke="url(#flowGrad)" strokeWidth="3" />
                      <circle cx="50" cy="46" r="10" stroke="url(#flowGrad)" strokeWidth="3" />
                      <path d="M46 46L49 49L55 43" stroke="url(#flowGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="flowGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00C2FF" />
                          <stop offset="1" stopColor="#9D00FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </span>

                {/* Label — wraps below icon on mobile, beside icon on desktop */}
                <span className="whitespace-nowrap leading-none">{tab.id}</span>
              </button>
            )
          })}
        </div>
      </div>


      {/* Lab Screen Container */}
      <div className="relative group px-4 sm:px-0">
        <div className="absolute -inset-2 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-[2rem] sm:rounded-[3rem] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms]"></div>

        <div className="relative border-2 border-border-soft rounded-2xl sm:rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-x-auto no-scrollbar">
          <div className="w-full min-w-0 p-4 sm:p-8 lg:p-12 animate-reveal">
            {activeTab === "Bug Tracker" && <BugTrackerDemo issues={demos.bugTracker.issues} />}
            {activeTab === "API Simulator" && <ApiSimulator endpoints={demos.apiLab.endpoints} />}
            {activeTab === "Sample Test Cases" && <TestCaseExplorer cases={demos.testCases.rows} />}
            {activeTab === "Execution Dashboard" && <QADashboard data={dashboard} />}
            {activeTab === "QA Methodology" && <HowITest data={howITest} />}
          </div>
        </div>
      </div>
    </div>
  )
}

function BugTrackerDemo({ issues }) {
  const [selectedIssue, setSelectedIssue] = useState(null)

  // ── MODAL UX HANDLERS ──
  useScrollLock(!!selectedIssue)

  useEffect(() => {
    if (!selectedIssue) return
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedIssue(null) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedIssue])

  const getStatusStyle = (s) => {
    if (s === 'Open') return 'status-open'
    if (s === 'In Progress') return 'status-progress'
    return 'status-closed'
  }

  return (
    <div className="flex flex-col gap-10 w-full min-w-0 relative">
      {/* ── HEADER ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-[22px] sm:text-4xl font-black tracking-tighter text-text-primary leading-none">Defect Sample</h3>
        </div>
        <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 px-4 py-2 rounded-xl self-start sm:self-auto">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="text-[9px] font-black text-rose-500 uppercase tracking-widest leading-none">Critical Bugs [04]</span>
        </div>
      </div>

      {/* ── MOBILE VIEW: Cards ── */}
      <div className="flex flex-col gap-6 sm:hidden">
        {issues.map((issue, idx) => (
          <div
            key={issue.id}
            onClick={() => setSelectedIssue(issue)}
            className={`bg-white border-2 border-border-soft rounded-2xl p-6 flex flex-col gap-5 shadow-sm animate-card-reveal stagger-${(idx % 5) + 1} cursor-pointer hover:border-accent/30`}
            style={{ boxShadow: 'var(--skeuo-outer)' }}
          >
            <div className="flex items-center justify-between border-b border-border-soft pb-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-[8px] font-black opacity-30 uppercase tracking-widest">ID</span>
                <span className="font-black text-accent text-[13px] tracking-tight">{issue.id}</span>
              </div>
              <span className={`jira-badge ${getStatusStyle(issue.status)}`}>{issue.status}</span>
            </div>
            <p className="text-[14px] font-black text-text-primary leading-snug">{issue.summary}</p>
            <div className="flex items-center justify-between pt-4 border-t border-border-soft">
              <div className="flex flex-col gap-1 text-[8px] font-black uppercase tracking-widest text-text-primary/30">
                <span>MOD: {issue.module}</span>
                <span>SEV: {issue.severity}</span>
              </div>
              <button className="h-8 w-8 rounded-lg bg-bg-secondary flex items-center justify-center text-accent"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
            </div>
          </div>
        ))}
      </div>

      {/* ── DESKTOP VIEW: Full Jira-Style Table ── */}
      <div className="hidden sm:block rounded-[2.5rem] border-2 border-border-soft overflow-hidden bg-white/40 p-1" style={{ boxShadow: 'var(--skeuo-outer)' }}>
        <div className="overflow-x-auto no-scrollbar scroll-smooth rounded-[2rem]">
          <table className="w-full border-collapse bg-white min-w-[1000px]">
            <thead>
              <tr className="text-left bg-bg-secondary/40 uppercase tracking-[0.2em] font-black text-[9px] text-text-primary/60">
                <th className="px-6 py-6 border-b border-border-soft">ID</th>
                <th className="px-6 py-6 border-b border-border-soft">Title</th>
                <th className="px-6 py-6 border-b border-border-soft">Module</th>
                <th className="px-6 py-6 border-b border-border-soft text-center">Sev</th>
                <th className="px-6 py-6 border-b border-border-soft text-center">Pri</th>
                <th className="px-6 py-6 border-b border-border-soft text-center">Status</th>
                <th className="px-6 py-6 border-b border-border-soft">Env</th>
                <th className="px-6 py-6 border-b border-border-soft text-center">View</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {issues.map((issue, idx) => (
                <tr
                  key={issue.id}
                  className={`group transition-all hover:bg-accent/[0.03] border-b border-border-soft last:border-0 font-medium animate-card-reveal stagger-${(idx % 5) + 1}`}
                >
                  <td className="px-6 py-7 font-black text-accent">{issue.id}</td>
                  <td className="px-6 py-7 font-black text-text-primary max-w-[300px] truncate">{issue.summary}</td>
                  <td className="px-6 py-7 text-[11px] font-bold opacity-60 italic">{issue.module}</td>
                  <td className="px-6 py-7 text-center">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border ${issue.severity === 'High' ? 'bg-rose-50 text-rose-500 border-rose-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                      {issue.severity}
                    </span>
                  </td>
                  <td className="px-6 py-7 text-center font-black text-[10px] text-accent/60">{issue.priority}</td>
                  <td className="px-6 py-7 text-center">
                    <span className={`jira-badge ${getStatusStyle(issue.status)}`}>{issue.status}</span>
                  </td>
                  <td className="px-6 py-7 text-[10px] font-mono opacity-40 font-black">{issue.environment}</td>
                  <td className="px-6 py-7 text-center">
                    <button
                      onClick={() => setSelectedIssue(issue)}
                      className="h-8 w-8 rounded-lg hover:bg-bg-secondary flex items-center justify-center text-accent transition-all hover:scale-110 active:scale-95"
                      aria-label="View Defect Details"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── BUG DETAILS MODAL ── */}
      {selectedIssue && createPortal(
        <div
          onClick={() => setSelectedIssue(null)}
          className="fixed inset-0 modal-overlay flex items-center justify-center p-6"
          style={{ zIndex: 99999 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-content w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)] border-0"
          >
            {/* Modal Header: Brushed Metal Skeuomorphic */}
            <div className="skeuo-modal-header px-8 sm:px-10 py-8 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="bg-accent/10 text-accent text-[10px] font-black px-2.5 py-1 rounded-md border border-accent/20 tracking-widest">{selectedIssue.id}</span>
                  <div className={`h-1.5 w-1.5 rounded-full animate-pulse shadow-sm ${selectedIssue.status === 'Open' ? 'bg-rose-500 shadow-rose-500/50' : selectedIssue.status === 'Closed' ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-amber-500 shadow-amber-500/50'}`}></div>
                  <span className={`jira-badge ${getStatusStyle(selectedIssue.status)}`}>{selectedIssue.status}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-black tracking-tighter text-text-primary leading-tight">{selectedIssue.summary}</h4>
              </div>
              <button
                onClick={() => setSelectedIssue(null)}
                className="h-12 w-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center font-black hover:bg-rose-500 hover:text-white transition-all transform hover:rotate-90 active:scale-90"
                aria-label="Close Modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 overflow-y-auto no-scrollbar bg-white/50">
              <div className="flex flex-col gap-10">
                {/* Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { l: "Module", v: selectedIssue.module, i: "cube" },
                    { l: "Severity", v: selectedIssue.severity, c: selectedIssue.severity === 'High' ? 'text-rose-500' : 'text-amber-500', i: "alert" },
                    { l: "Risk Level", v: selectedIssue.priority, c: 'text-accent', i: "shield" },
                    { l: "Current Status", v: <span className={`jira-badge ${getStatusStyle(selectedIssue.status)}`}>{selectedIssue.status}</span>, i: "activity" }
                  ].map(f => (
                    <div key={f.l} className="property-card flex flex-col gap-3 group">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-black opacity-30 uppercase tracking-widest leading-none">{f.l}</span>
                      </div>
                      <span className={`text-[15px] font-black tracking-tight ${f.c || 'text-text-primary'}`}>{f.v}</span>
                    </div>
                  ))}
                </div>

                {/* Technical Environment */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] pl-1">Environment</span>
                  <div className="env-tag flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    <span className="tracking-wide">LOG_ENTRY_SRC: {selectedIssue.environment}</span>
                  </div>
                </div>

                {/* Main Content Area: Reproduction Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-12 flex flex-col gap-8 bg-bg-secondary p-8 sm:p-10 rounded-3xl border border-border-soft shadow-inner relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 italic font-black text-6xl pointer-events-none uppercase">Defect_Report</div>

                    <div className="flex flex-col gap-4 relative">
                      <div className="flex items-center gap-3 pb-2 border-b border-black/5">
                        <span className="h-4 w-4 bg-accent/20 rounded-md flex items-center justify-center text-accent text-[10px] font-black">01</span>
                        <span className="font-black text-xs uppercase tracking-widest text-text-primary/60">Execution Steps</span>
                      </div>
                      <ul className="flex flex-col gap-3.5 pl-1">
                        {selectedIssue.steps.map((s, i) => (
                          <li key={i} className="flex gap-4 text-sm sm:text-base font-medium text-text-primary/80 leading-relaxed">
                            <span className="text-accent/40 font-black shrink-0 font-mono tracking-tighter">[{String(i + 1).padStart(2, '0')}]</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-black/5">
                      <div className="flex flex-col gap-3 p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                          <span className="text-[11px] font-black text-emerald-600 uppercase tracking-widest">Expected Result</span>
                        </div>
                        <p className="text-sm font-bold text-emerald-900/70 leading-relaxed pl-3.5">{selectedIssue.expected}</p>
                      </div>
                      <div className="flex flex-col gap-3 p-5 bg-rose-500/5 rounded-2xl border border-rose-500/10">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></div>
                          <span className="text-[11px] font-black text-rose-600 uppercase tracking-widest">Actual Result</span>
                        </div>
                        <p className="text-sm font-bold text-rose-900/70 leading-relaxed pl-3.5">{selectedIssue.actual}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Meta: Attachments */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pt-4 border-t border-black/5">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-black opacity-30 uppercase tracking-widest pl-1">Bug Evidence</span>
                    <div className="group flex items-center gap-4 p-4 bg-white border-2 border-dashed border-border-soft rounded-2xl hover:border-accent/40 hover:bg-accent/[0.02] transition-all cursor-pointer">
                      <div className="h-12 w-12 bg-bg-secondary rounded-xl flex items-center justify-center text-text-primary/20 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black text-text-primary/70">DEFECT_SNAPSHOT_LOG.png</span>
                        <span className="text-[9px] font-bold opacity-30 uppercase">Image/PNG • 1.2 MB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

function ApiSimulator({ endpoints }) {
  const [selected, setSelected] = useState(endpoints[0])
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [responseTime, setResponseTime] = useState(null)

  const methodColors = {
    GET: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', led: 'led-green' },
    POST: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', led: 'led-blue' },
    PUT: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', led: 'led-amber' },
    DELETE: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20', led: 'led-red' },
  }

  const simulate = () => {
    setLoading(true)
    setResponse(null)
    setResponseTime(null)
    // eslint-disable-next-line react-hooks/purity
    const start = Date.now()
    // eslint-disable-next-line react-hooks/purity
    const delay = 800 + Math.random() * 800
    setTimeout(() => {
      setResultInternal(selected.response, start)
    }, delay)
  }

  const setResultInternal = (res, start) => {
    setResponse(res)
    setResponseTime(Math.round(Date.now() - start))
    setLoading(false)
  }

  const handleCopy = () => {
    if (response?.json) {
      navigator.clipboard.writeText(JSON.stringify(response.json, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const mc = methodColors[selected.method] || methodColors.GET
  const statusCode = response?.status || null

  return (
    <div className="skeuo-unit p-4 sm:p-8 flex flex-col gap-6 w-full min-w-0 overflow-x-auto no-scrollbar">
      {/* Device Header / Brand Plate */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-black/5 pb-4">
        <div className="flex flex-col min-w-0">
          <div className="engraved-text text-[10px] sm:text-[12px] font-black uppercase tracking-[0.4em] truncate">API Simulator Interface</div>
        </div>

        {/* Status LEDs Cluster */}
        <div className="flex items-center gap-5 sm:gap-6 engraved-plate px-5 sm:px-7 py-3 shrink-0 relative overflow-hidden">
          {/* Subtle metal texture or light highlight on the plate */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className={`skeuo-led led-green animate-flicker ${!loading && statusCode && statusCode < 400 ? 'on' : ''}`}></div>
            <span className="text-[7px] font-black engraved-text uppercase">Pass</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className={`skeuo-led led-red animate-flicker ${!loading && statusCode && statusCode >= 400 ? 'on' : ''}`}></div>
            <span className="text-[7px] font-black engraved-text uppercase">Fail</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className={`skeuo-led led-amber animate-flicker ${loading ? 'on' : ''}`}></div>
            <span className="text-[7px] font-black engraved-text uppercase">Busy</span>
          </div>
          <div className="w-px h-6 bg-black/10 mx-1"></div>
          <div className="flex flex-col items-center gap-1.5 relative z-10">
            <div className={`skeuo-led led-blue on led-pulse animate-flicker`}></div>
            <span className="text-[7px] font-black engraved-text uppercase">Power</span>
          </div>

          {/* Miniature screws/rivets on the plate */}
          <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-black/20"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-black/20"></div>
          <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-black/20"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-black/20"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ── LEFT: Physical Switches (Endpoint Picker) ── */}
        <div className="lg:col-span-5 flex flex-col gap-4 min-w-0">
          <div className="engraved-text text-[10px] font-black uppercase tracking-widest pl-1">Endpoint Selectors</div>
          <div className="flex flex-col gap-3">
            {endpoints.map(ep => {
              const emc = methodColors[ep.method] || methodColors.GET
              const isSelected = selected.id === ep.id
              return (
                <button
                  key={ep.id}
                  onClick={() => { setSelected(ep); setResponse(null); setResponseTime(null) }}
                  className={`skeuo-button p-4 text-left group relative ${isSelected ? 'active' : ''} min-w-0 overflow-hidden`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`h-2 w-2 rounded-full shrink-0 ${isSelected ? emc.led + ' on' : 'bg-black/10'}`}></div>
                      <span className={`text-[12px] font-black tracking-tight truncate ${isSelected ? 'text-text-primary' : 'text-text-primary/40'}`}>
                        {ep.name}
                      </span>
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-widest opacity-30 shrink-0`}>{ep.method}</span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-black/5">
            <button
              onClick={simulate}
              disabled={loading}
              className={`skeuo-button w-full py-4 text-center font-black text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${loading ? 'active opacity-60' : 'hover:text-accent'}`}
            >
              {loading ? "Processing..." : "Execute Request"}
            </button>
          </div>
        </div>

        {/* ── RIGHT: LCD Terminal ── */}
        <div className="lg:col-span-7 flex flex-col gap-3 min-w-0">
          <div className="flex justify-between items-end px-1 gap-2">
            <div className="engraved-text text-[9px] sm:text-[10px] font-black uppercase tracking-widest truncate">Diagnostic Output</div>
            <div className="bg-black text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded text-emerald-400/60 shadow-inner shrink-0">
              BUFFER_READY_0x4F8
            </div>
          </div>

          <div className="skeuo-screen flex flex-col h-[400px] min-w-0 animate-scan">
            {/* Screen Header */}
            <div className="bg-white/5 px-3 sm:px-4 py-2 flex items-center justify-between border-b border-white/10 z-10 gap-2 min-w-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 overflow-hidden">
                <span className={`text-[9px] font-mono font-black shrink-0 ${mc.text}`}>
                  {selected.method}
                </span>
                <span className="text-[9px] font-mono text-white/40 truncate">
                  /api/v2/{selected.name?.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {responseTime && <span className="text-[8px] font-mono text-emerald-400">{responseTime}ms</span>}
                {statusCode && (
                  <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${statusCode < 300 ? 'bg-emerald-500/20 text-emerald-500' : 'bg-rose-500/20 text-rose-500'}`}>
                    {statusCode}
                  </span>
                )}
              </div>
            </div>

            {/* Screen Content */}
            <div className="p-4 sm:p-6 overflow-y-auto no-scrollbar flex flex-col gap-6 min-w-0">
              {/* Request */}
              <div className="flex flex-col gap-2 min-w-0">
                <span className="text-[7px] font-black uppercase tracking-[0.4em] text-white/20">REQUEST_DATA</span>
                <div className="font-mono text-[10px] text-white/60 leading-relaxed pl-2 border-l border-white/5 whitespace-pre-wrap break-all">
                  {JSON.stringify(selected.requestBody || { method: selected.method, auth: 'Bearer •••' }, null, 2)}
                </div>
              </div>

              {/* Response */}
              <div className="flex flex-col gap-3 border-t border-white/5 pt-4 min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-[7px] font-black uppercase tracking-[0.4em] ${loading ? 'text-amber-400 animate-pulse' : 'text-emerald-400/50'} truncate`}>
                    {loading ? "EXCHANGE_IN_PROGRESS..." : "RESPONSE_PAYLOAD"}
                  </span>
                  {response && !loading && (
                    <button onClick={handleCopy} className="text-[8px] font-black uppercase text-white/30 hover:text-white transition-colors shrink-0">
                      {copied ? "[ COPIED ]" : "[ COPY ]"}
                    </button>
                  )}
                </div>

                {loading ? (
                  <div className="flex flex-col gap-2 py-2">
                    {[70, 40, 60].map((w, i) => (
                      <div key={i} className="h-1 bg-white/5 rounded-full" style={{ width: `${w}%` }}></div>
                    ))}
                  </div>
                ) : response ? (
                  <div className="font-mono text-[10px] text-emerald-400 leading-relaxed pl-2 border-l border-emerald-400/20 whitespace-pre-wrap break-all">
                    {JSON.stringify(response.json, null, 2)}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 opacity-10">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    <span className="text-[8px] font-black uppercase tracking-widest mt-2">Ready for command...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Subtle Screen Reflection Glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TestCaseExplorer({ cases }) {
  const passed = cases.filter(tc => tc.status === 'Pass').length
  const failed = cases.filter(tc => tc.status === 'Fail').length
  const passRate = Math.round((passed / cases.length) * 100)

  const moduleColors = {
    Bookings:      { main: '#3b82f6', rgb: '59,130,246' },
    Subscriptions: { main: '#8b5cf6', rgb: '139,92,246' },
    Discovery:     { main: '#10b981', rgb: '16,185,129' },
    Auth:          { main: '#f59e0b', rgb: '245,158,11' },
    Payments:      { main: '#ec4899', rgb: '236,72,153' },
    Logistics:     { main: '#ef4444', rgb: '239,68,68'  },
    default:       { main: '#0984E3', rgb: '9,132,227'  },
  }

  const priorityLabel = {
    P0: { label: '⚡ Critical', bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100' },
    P1: { label: '🔶 High',     bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
    P2: { label: '📘 Medium',   bg: 'bg-sky-50',   text: 'text-sky-600',   border: 'border-sky-100'   },
  }

  return (
    <div className="flex flex-col gap-6 sm:gap-10 w-full min-w-0">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl sm:text-3xl font-black tracking-tighter text-text-primary leading-tight">Sample Test Cases</h3>
          <p className="text-[10px] text-secondary/50 font-medium">Enterprise Scale Application · Manual QA Execution</p>
        </div>

        {/* Live stats */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-emerald-50 border border-emerald-100 rounded-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-[8px] sm:text-[9px] font-black text-emerald-600 uppercase tracking-widest">{passed} Passed</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-rose-50 border border-rose-100 rounded-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
            <span className="text-[8px] sm:text-[9px] font-black text-rose-500 uppercase tracking-widest">{failed} Failed</span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-bg-secondary border border-white/60 rounded-xl" style={{ boxShadow: 'var(--skeuo-outer)' }}>
            <span className="text-[8px] sm:text-[9px] font-black text-text-primary uppercase tracking-widest">{passRate}% Pass Rate</span>
          </div>
        </div>
      </div>

      {/* Cards Grid — 3 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cases.map((tc) => {
          const mc = moduleColors[tc.module] || moduleColors.default
          const pr = priorityLabel[tc.priority] || priorityLabel.P2
          const isPassed = tc.status === 'Pass'

          return (
            <div
              key={tc.id}
              className="group relative rounded-2xl sm:rounded-3xl border-2 bg-white overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: `${mc.main}20`,
                boxShadow: 'var(--skeuo-outer)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 40px -10px rgba(${mc.rgb},0.2), var(--skeuo-outer)`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'var(--skeuo-outer)'}
            >
              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${mc.main}, transparent)` }} />

              {/* Ambient glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `rgba(${mc.rgb},0.15)` }} />

              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1 relative z-10">

                {/* Top row: ID + Status badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black font-mono uppercase tracking-widest" style={{ color: mc.main }}>{tc.id}</span>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/25">{tc.module} Module</span>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest shrink-0 ${isPassed ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-500 border border-rose-100'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${isPassed ? 'bg-emerald-500' : 'bg-rose-500 animate-pulse'}`}></span>
                    {tc.status}
                  </div>
                </div>

                {/* Priority pill */}
                <div className={`self-start flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${pr.bg} ${pr.text} ${pr.border}`}>
                  {pr.label}
                </div>

                {/* Title */}
                <h4
                  className="text-sm font-black leading-snug tracking-tight transition-colors duration-300 group-hover:text-[var(--mc)]"
                  style={{ '--mc': mc.main }}
                >
                  {tc.title}
                </h4>

                {/* Precondition & Test Data */}
                {(tc.precondition || tc.testData) && (
                  <div className="flex flex-col gap-2 p-3 rounded-xl bg-black/[0.02] border border-black/5">
                    {tc.precondition && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30">Precondition</span>
                        <p className="text-[10px] font-medium text-secondary/80 leading-relaxed">{tc.precondition}</p>
                      </div>
                    )}
                    {tc.testData && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30">Test Data</span>
                        <p className="text-[10px] font-medium text-secondary/80 leading-relaxed font-mono">{tc.testData}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Steps */}
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-black/30">Steps</span>
                  {tc.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div
                        className="h-5 w-5 rounded-lg flex items-center justify-center text-[8px] font-black shrink-0 mt-0.5"
                        style={{ background: `rgba(${mc.rgb},0.1)`, color: mc.main }}
                      >
                        {idx + 1}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-medium text-secondary/70 leading-relaxed flex-1">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Expected & Actual Result */}
                <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-black/5">
                  {/* Expected */}
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-emerald-600 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-500 inline-block" />
                      Expected Result
                    </span>
                    <p className="text-[10px] sm:text-[11px] font-medium text-emerald-900/70 leading-relaxed">{tc.expected}</p>
                  </div>

                  {/* Actual */}
                  <div className={`flex flex-col gap-1 p-3 rounded-xl border ${isPassed ? 'bg-sky-50/60 border-sky-100' : 'bg-rose-50/60 border-rose-100'}`}>
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] flex items-center gap-1.5 ${isPassed ? 'text-sky-600' : 'text-rose-600'}`}>
                      <span className={`h-1 w-1 rounded-full inline-block ${isPassed ? 'bg-sky-500' : 'bg-rose-500 animate-pulse'}`} />
                      Actual Result
                    </span>
                    <p className={`text-[10px] sm:text-[11px] font-medium leading-relaxed ${isPassed ? 'text-sky-900/70' : 'text-rose-900/70'}`}>
                      {tc.actual}
                    </p>
                  </div>
                </div>

     
             </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

