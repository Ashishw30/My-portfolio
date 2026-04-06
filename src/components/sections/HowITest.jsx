import { useState } from "react"

export function HowITest({ data }) {
  const [active, setActive] = useState(0)
  const steps = data?.steps ?? []

  const stepColors = [
    { main: "#3b82f6", rgb: "59,130,246",  label: "Analysis"  },
    { main: "#10b981", rgb: "16,185,129",  label: "Planning"  },
    { main: "#8b5cf6", rgb: "139,92,246",  label: "Design"    },
    { main: "#f59e0b", rgb: "245,158,11",  label: "Execution" },
    { main: "#f43f5e", rgb: "244,63,94",   label: "Reporting" },
  ]

  const deliverables = [
    ["Requirement Schema", "Risk Assessment", "Impact Matrix"],
    ["Test Plan", "Strategy Doc", "Resource Matrix"],
    ["Test Case Suite", "Data Sets", "Mock Endpoints"],
    ["Defect Reports", "Execution Logs", "Retest Results"],
    ["Final RTM", "Sign-off Doc", "Project Retrospective"],
  ]

  const methodologies = [
    ["Static Analysis", "Checklist Design", "Edge Case Discovery"],
    ["Prioritization", "Coverage Analysis", "Environment Setup"],
    ["Step Structuring", "Negative Paths", "Assertion Logic"],
    ["Contract Testing", "Regressions", "Security Checks"],
    ["Stability Analysis", "Trend Tracking", "Metrics Sync"],
  ]

  const c = stepColors[active % stepColors.length]

  return (
    <div className="flex flex-col gap-6 sm:gap-10 w-full min-w-0">

      {/* ══ STEPPER ══ */}
      <div className="relative">
        {/* Track — desktop only */}
        <div className="absolute top-[22px] left-[4%] right-[4%] h-[2px] bg-black/5 rounded-full hidden sm:block" />
        <div
          className="absolute top-[22px] left-[4%] h-[2px] rounded-full transition-all duration-700 hidden sm:block"
          style={{
            width: `${(active / Math.max(steps.length - 1, 1)) * 92}%`,
            background: `linear-gradient(to right, ${stepColors[0].main}, ${c.main})`,
            boxShadow: `0 0 12px rgba(${c.rgb},0.4)`,
          }}
        />
        {/* Step nodes */}
        <div className="flex justify-between gap-1 overflow-x-auto no-scrollbar">
          {steps.map((s, idx) => {
            const sc = stepColors[idx % stepColors.length]
            const isActive = idx === active
            const isDone   = idx < active
            return (
              <button
                key={s.title}
                onClick={() => setActive(idx)}
                className="relative z-20 flex flex-col items-center gap-2 sm:gap-3 focus:outline-none flex-1"
              >
                {/* Node */}
                <div
                  className={`h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-xl sm:rounded-2xl border-2 transition-all duration-500 relative overflow-hidden ${
                    isActive ? "scale-110 shadow-xl" : isDone ? "opacity-75" : "opacity-30 hover:opacity-70 hover:scale-105"
                  }`}
                  style={{
                    borderColor: isActive || isDone ? sc.main : "rgba(0,0,0,0.08)",
                    background: isActive ? sc.main : "white",
                    boxShadow: isActive ? `0 8px 20px -4px rgba(${sc.rgb},0.5)` : "none",
                  }}
                >
                  {isActive && <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />}
                  <span className="text-[9px] sm:text-xs font-black font-mono" style={{ color: isActive ? "white" : sc.main }}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                {/* Label */}
                <span
                  className="text-[7px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 text-center leading-tight"
                  style={{ color: isActive ? sc.main : "rgba(0,0,0,0.3)" }}
                >
                  {s.title}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ══ CONTENT CARD ══ */}
      <div
        key={active}
        className="relative rounded-2xl sm:rounded-[2.5rem] border-2 overflow-hidden transition-all duration-500"
        style={{ borderColor: `${c.main}25`, boxShadow: `var(--skeuo-outer), 0 0 50px -20px rgba(${c.rgb},0.15)` }}
      >
        {/* Top accent bar */}
        <div className="h-1 sm:h-1.5 w-full" style={{ background: `linear-gradient(to right, ${c.main}, transparent)` }} />

        {/* Ambient glow */}
        <div className="absolute -top-16 -left-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-[60px] pointer-events-none -z-0" style={{ background: `rgba(${c.rgb},0.07)` }} />

        <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12">

          {/* ── LEFT: Phase Identity ── */}
          <div
            className="lg:col-span-4 p-5 sm:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 border-b lg:border-b-0 lg:border-r"
            style={{ background: `rgba(${c.rgb},0.04)`, borderColor: `${c.main}15` }}
          >
            {/* Phase label */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-px w-5 sm:w-6 rounded-full" style={{ background: c.main }} />
              <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.4em]" style={{ color: c.main }}>
                Phase {String(active + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Big phase title */}
            <div className="flex flex-col gap-1 sm:gap-2">
              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none"
                style={{ color: c.main, textShadow: `0 0 40px rgba(${c.rgb},0.25)` }}
              >
                {steps[active]?.title}
              </h3>
              <div className="h-1 w-10 sm:w-14 rounded-full" style={{ background: `linear-gradient(to right, ${c.main}, transparent)` }} />
            </div>

            {/* Description */}
            <p
              className="text-xs sm:text-sm leading-relaxed font-medium text-secondary/80 border-l-[3px] pl-4 sm:pl-5 py-1"
              style={{ borderLeftColor: `${c.main}50` }}
            >
              {steps[active]?.desc}
            </p>

            {/* Progress */}
            <div className="mt-auto flex flex-col gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t" style={{ borderColor: `${c.main}20` }}>
              <div className="flex justify-between items-center">
                <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.3em] opacity-40">Progress</span>
                <span className="text-[9px] sm:text-[10px] font-black" style={{ color: c.main }}>{active + 1} / {steps.length}</span>
              </div>
              <div className="h-1 sm:h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${((active + 1) / steps.length) * 100}%`, background: c.main, boxShadow: `0 0 6px rgba(${c.rgb},0.5)` }}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: Deliverables + Methodologies ── */}
          <div className="lg:col-span-8 p-5 sm:p-8 lg:p-10 bg-white flex flex-col gap-6 sm:gap-8">

            {/* Deliverables */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ background: `rgba(${c.rgb},0.12)` }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={c.main} strokeWidth="3">
                    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] sm:tracking-[0.35em] opacity-50">Phase Deliverables</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {deliverables[active].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                    style={{ borderColor: `${c.main}20`, background: `rgba(${c.rgb},0.04)` }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: c.main, boxShadow: `0 0 5px rgba(${c.rgb},0.6)` }} />
                    <span className="text-[10px] sm:text-[11px] font-black text-text-primary/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-black/5" />

            {/* Methodologies */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-lg sm:rounded-xl flex items-center justify-center" style={{ background: `rgba(${c.rgb},0.12)` }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={c.main} strokeWidth="3">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] sm:tracking-[0.35em] opacity-50">Methodologies Applied</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {methodologies[active].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-bg-secondary border border-black/5 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                    style={{ boxShadow: 'var(--skeuo-inner)' }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={c.main} strokeWidth="3" className="shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    <span className="text-[10px] sm:text-[11px] font-black text-text-primary/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 sm:gap-3 mt-auto pt-4 sm:pt-5 border-t border-black/5">
              <button
                onClick={() => setActive(p => Math.max(0, p - 1))}
                disabled={active === 0}
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest border-2 border-black/8 bg-white text-text-primary/40 disabled:opacity-20 hover:border-black/20 hover:text-text-primary/60 transition-all"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActive(p => Math.min(steps.length - 1, p + 1))}
                disabled={active === steps.length - 1}
                className="flex-1 sm:flex-none px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white transition-all disabled:opacity-20 hover:-translate-y-0.5"
                style={{ background: c.main, boxShadow: `0 4px 14px -4px rgba(${c.rgb},0.5)` }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
