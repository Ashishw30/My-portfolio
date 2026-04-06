import { useMemo, useState } from "react"

export function TestCaseExplorer({ data }) {
  const [module, setModule] = useState("All")
  const [priority, setPriority] = useState("All")
  const [status, setStatus] = useState("All")
  const [openId, setOpenId] = useState(null)

  const testCases = data?.rows ?? []

  const rows = useMemo(() => {
    return testCases.filter((r) => {
      if (module !== "All" && r.module !== module) return false
      if (priority !== "All" && r.priority !== priority) return false
      if (status !== "All" && r.status !== status) return false
      return true
    })
  }, [testCases, module, priority, status])

  return (
    <div className="flex flex-col gap-6 w-full min-w-0 relative">
      <div className="absolute top-[-100px] right-[2%] w-64 h-64 opacity-5 pointer-events-none hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none">
          <path d="M14 54L10 16L14 8h36l4 8l-4 38H14Z" stroke="url(#caseGradLarge)" strokeWidth="3" strokeLinejoin="round"/>
          <path d="M26 4H38V12H26V4Z" fill="url(#caseGradLarge)" stroke="url(#caseGradLarge)" strokeWidth="2"/>
          <circle cx="24" cy="22" r="3" fill="url(#caseGradLarge)"/>
          <circle cx="24" cy="32" r="3" fill="url(#caseGradLarge)"/>
          <circle cx="24" cy="42" r="3" fill="url(#caseGradLarge)"/>
          <path d="M32 22H46M32 32H46M32 42H46" stroke="url(#caseGradLarge)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M54 20L54 44L58 50L54 56" stroke="url(#caseGradLarge)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 28L4 36L12 56L22 46" stroke="url(#caseGradLarge)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="caseGradLarge" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#31CAB1" />
              <stop offset="1" stopColor="#3199CA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* ── Filter Bar ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
        <div className="lg:col-span-1">
          <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">Search Module</label>
          <input
            placeholder="Search..."
            className="mt-1 w-full rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-xs text-white outline-none focus:border-[color:var(--accentA)]/30"
          />
        </div>
        <Select label="Module" value={module} onChange={setModule} options={["All", ...(data?.modules ?? [])]} />
        <Select label="Priority" value={priority} onChange={setPriority} options={["All", ...(data?.priorities ?? [])]} />
        <Select label="Status" value={status} onChange={setStatus} options={["All", ...(data?.statuses ?? [])]} />
      </div>

      {/* ── Table View ── */}
      <div className="rounded-2xl border border-white/5 bg-black/40 overflow-hidden shadow-xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 bg-white/5">
           <div className="flex items-center gap-3">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Test Suite</p>
              <span className="text-[10px] opacity-40 font-mono">{rows.length} test cases</span>
           </div>
           <p className="text-[10px] text-[color:var(--ink1)] italic hidden sm:block">Filter by priority or status</p>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px] text-left text-xs border-collapse">
            <thead>
              <tr className="bg-white/[0.02]">
                <th className="px-5 py-4 font-bold border-b border-white/5 opacity-50 uppercase tracking-widest">ID</th>
                <th className="px-5 py-4 font-bold border-b border-white/5 opacity-50 uppercase tracking-widest">Title</th>
                <th className="px-5 py-4 font-bold border-b border-white/5 opacity-50 uppercase tracking-widest">Module</th>
                <th className="px-5 py-4 font-bold border-b border-white/5 opacity-50 uppercase tracking-widest text-center">Priority</th>
                <th className="px-5 py-4 font-bold border-b border-white/5 opacity-50 uppercase tracking-widest text-center">Status</th>
                <th className="px-5 py-4 font-bold border-b border-white/5 text-right uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {rows.map((r) => {
                const expanded = openId === r.id
                return (
                  <React.Fragment key={r.id}>
                    <tr className={`group transition-colors ${expanded ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}>
                      <td className="px-5 py-4 font-mono font-bold text-[color:var(--accentA)]">{r.id}</td>
                      <td className="px-5 py-4 font-medium text-white max-w-xs">{r.title}</td>
                      <td className="px-5 py-4 opacity-60">{r.module}</td>
                      <td className="px-5 py-4 text-center">
                        <Badge priority={r.priority}>{r.priority}</Badge>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <StatusBadge status={r.status}>{r.status}</StatusBadge>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <button
                          onClick={() => setOpenId(expanded ? null : r.id)}
                          className={`rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase transition-all ${
                            expanded 
                              ? "bg-white/10 text-white" 
                              : "bg-[color:var(--accentA)]/10 text-[color:var(--accentA)] hover:bg-[color:var(--accentA)]/20"
                          }`}
                        >
                          {expanded ? "Close" : "Steps"}
                        </button>
                      </td>
                    </tr>
                    {expanded && (
                      <tr className="bg-white/[0.03] animate-slide-up">
                        <td colSpan={6} className="px-5 py-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-black/30 rounded-2xl border border-white/5 p-4">
                              <h5 className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase mb-3 px-1">Execution Steps</h5>
                              <ol className="space-y-3">
                                {r.steps.map((s, idx) => (
                                  <li key={idx} className="flex gap-3 text-[12px] text-[color:var(--ink1)] leading-relaxed">
                                    <span className="shrink-0 font-bold font-mono text-[color:var(--accentB)] opacity-60">0{idx + 1}</span>
                                    <span>{s}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                            <div className="flex flex-col gap-4">
                              <div className="bg-black/30 rounded-2xl border border-white/5 p-4 flex-1">
                                <h5 className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase mb-2 px-1">Pass Criteria</h5>
                                <p className="text-[12px] text-[color:var(--ink1)] leading-relaxed italic">{r.expected}</p>
                              </div>
                              {r.actual && (
                                <div className="bg-[color:var(--accentA)]/5 rounded-2xl border border-[color:var(--accentA)]/20 p-4">
                                  <h5 className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase mb-2 px-1">Last Logged Actual</h5>
                                  <p className="text-[12px] text-white/80 leading-relaxed">{r.actual}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })}

              {rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-xs opacity-40 italic">
                    No cases match the selected combination of filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Select({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-xs text-white outline-none focus:border-[color:var(--accentA)]/30 transition-all font-medium"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#0c1018]">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] opacity-40">▼</span>
      </div>
    </div>
  )
}

function Badge({ children, priority }) {
  const styles = {
    P0: "border-red-500/30 text-red-300 bg-red-500/10",
    P1: "border-amber-500/30 text-amber-300 bg-amber-500/10",
    P2: "border-sky-500/30 text-sky-300 bg-sky-500/10",
    default: "border-white/10 text-white/60 bg-white/5"
  }
  const cls = styles[priority] || styles.default
  return (
    <span className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[9px] font-bold uppercase transition-all ${cls}`}>
      {children}
    </span>
  )
}

function StatusBadge({ children, status }) {
  const styles = {
    Pass: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
    Fail: "border-rose-500/30 text-rose-300 bg-rose-500/10",
    Blocked: "border-orange-500/30 text-orange-300 bg-orange-500/10",
    default: "border-white/10 text-white/60 bg-white/5"
  }
  const cls = styles[status] || styles.default
  return (
    <span className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight ${cls}`}>
       {status === "Pass" && <span className="mr-1 h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />}
       {children}
    </span>
  )
}

import React from "react"
