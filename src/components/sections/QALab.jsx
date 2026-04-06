import { useMemo, useState } from "react"

export function QALab({
  bugTracker,
  apiLab,
  testCases,
  dashboard,
  howITest,
  samples,
  resumeHref,
  components,
}) {
  const tabs = useMemo(
    () => [
      { id: "bugs", label: "Bug Tracker", icon: "bug", desc: "Live defect logging & management" },
      { id: "api", label: "API Lab", icon: "api", desc: "RESTful endpoint & payload testing" },
      { id: "cases", label: "Test Cases", icon: "check", desc: "Structured suite & traceability matrix" },
      { id: "skills", label: "Bug Hunt", icon: "game", desc: "Interactive vulnerability sandbox" },
      { id: "dash", label: "Dashboard", icon: "chart", desc: "Quality KPIs & execution metrics" },
      { id: "process", label: "Methodology", icon: "flow", desc: "Lifecycle & SDLC integration" },
      { id: "samples", label: "Docs", icon: "file", desc: "Templates & downloadable artifacts" },
      { id: "resume", label: "Resume", icon: "doc", desc: "Technical skillset & background" },
    ],
    [],
  )

  const [active, setActive] = useState("bugs")

  const { BugTrackerDemo, ApiLab, TestCaseExplorer, TestMySkills, QADashboard, HowITest, WorkSamples, ResumeSection } =
    components

  return (
    <div className="flex flex-col gap-8 w-full min-w-0">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 min-h-[600px]">
        {/* ── Vertical Navigation ── */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-black/20 border border-white/5 rounded-[2.5rem] p-6 flex flex-col h-full shadow-2xl relative overflow-hidden">
             {/* Arctic Glow background */}
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[color:var(--accentA)]/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex flex-col gap-1.5 mb-8 ml-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">Interactive Environment</span>
                <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">QA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)]">Laboratory</span></h2>
                <p className="text-[12px] text-[color:var(--ink1)] opacity-70 leading-relaxed mt-1 max-w-[240px]">
                  Real-world scenarios showing how I troubleshoot, validate, and secure quality.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {tabs.map((t) => {
                  const on = t.id === active
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      className={`group flex items-start gap-4 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                        on
                          ? "border-[color:var(--accentA)]/40 bg-[color:var(--accentA)]/10 shadow-[0_4px_25px_rgba(173,232,244,0.18)]"
                          : "border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/10"
                      }`}
                      data-cursor="button"
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        on ? "bg-gradient-to-br from-[color:var(--accentA)] to-[color:var(--accentB)] text-[#06090f] scale-110 shadow-lg" : "bg-white/5 text-white/40 group-hover:scale-105"
                      }`}>
                        <Icon name={t.icon} on={on} />
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className={`text-[13px] font-bold tracking-wide transition-colors ${on ? "text-white" : "text-white/60 group-hover:text-white"}`}>
                          {t.label}
                        </span>
                        <span className={`text-[10px] leading-tight transition-opacity ${on ? "opacity-70" : "opacity-30 group-hover:opacity-50"}`}>
                          {t.desc}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── Content Viewport ── */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="relative h-full flex flex-col bg-black/30 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
             {/* Header Bar */}
            <div className="flex items-center justify-between gap-4 border-b border-white/5 px-8 pt-6 pb-5 bg-white/[0.02]">
               <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  <p className="text-[11px] font-bold text-white uppercase tracking-[.25em] opacity-80">
                    {tabs.find((t) => t.id === active)?.label || "VIEWPORT"}
                  </p>
               </div>
               <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-white/5 border border-white/5" />
                  <div className="h-2 w-2 rounded-full bg-white/5 border border-white/5" />
                  <div className="h-2 w-2 rounded-full bg-white/5 border border-white/5" />
               </div>
            </div>

            {/* Dynamic Render Area */}
            <div className="flex-1 p-6 md:p-8 overflow-auto custom-scrollbar flex flex-col items-center justify-start bg-gradient-to-b from-transparent to-black/10">
              <div className="w-full h-full animate-slide-up" key={active}>
                {active === "bugs" && <BugTrackerDemo data={bugTracker} />}
                {active === "api" && <ApiLab data={apiLab} />}
                {active === "cases" && <TestCaseExplorer data={testCases} />}
                {active === "skills" && <TestMySkills />}
                {active === "dash" && <QADashboard data={dashboard} />}
                {active === "process" && <HowITest data={howITest} />}
                {active === "samples" && <WorkSamples data={samples} />}
                {active === "resume" && <ResumeSection href={resumeHref} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Icon({ name, on }) {
  const common = { width: 18, height: 18, fill: "none", stroke: "currentColor", strokeWidth: on ? 2.5 : 2.0 }
  switch (name) {
    case "bug":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 9h6v0a4 4 0 0 1 4 4v1a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-1a4 4 0 0 1 4-4Z" />
          <path d="M10 9V7a2 2 0 0 1 4 0v2" />
          <path d="M4 13h3M17 13h3M12 4v3" />
        </svg>
      )
    case "api":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="10" height="10" x="7" y="7" rx="1.5" />
          <path d="M4 12h3M17 12h3M12 4v3M12 17v3" />
        </svg>
      )
    case "check":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 11l2 2 4-5" />
          <rect width="16" height="16" x="4" y="4" rx="3" />
        </svg>
      )
    case "game":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14h4m-2-2v4" />
          <path d="M6 8h12a3 3 0 0 1 3 3v5a2 2 0 0 1-2 2h-1l-2-3H8l-2 3H5a2 2 0 0 1-2-2v-5a3 3 0 0 1 3-3Z" />
        </svg>
      )
    case "chart":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 20V6" />
          <path d="M8 20v-8" />
          <path d="M12 20V9" />
          <path d="M16 20v-5" />
        </svg>
      )
    case "flow":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="6" height="6" x="3" y="9" rx="1" />
          <rect width="6" height="6" x="15" y="9" rx="1" />
          <path d="M9 12h6" />
        </svg>
      )
    case "file":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 2H7a2 2 0 0 0-2 2v16h14V8z" />
          <path d="M14 2v6h6" />
        </svg>
      )
    case "doc":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="10" height="14" x="7" y="5" rx="1" />
          <path d="M10 9h4M10 12h4M10 15h2" />
        </svg>
      )
    default:
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
