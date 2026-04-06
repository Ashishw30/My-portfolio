import { useMemo, useState } from "react"
import { TiltCard } from "../ui/TiltCard"
import { Modal } from "../ui/Modal"

const statusStyles = {
  Open: "bg-red-500/10 text-red-300 border-red-500/20",
  "In Progress": "bg-amber-500/10 text-amber-300 border-amber-500/20",
  Closed: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
}

const severityStyles = {
  High: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
  Medium: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  Low: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
}

export function BugTrackerDemo({ data }) {
  const [q, setQ] = useState("")
  const [status, setStatus] = useState("All")
  const [severity, setSeverity] = useState("All")
  const [module, setModule] = useState("All")
  const [openId, setOpenId] = useState(null)

  const issues = data?.issues ?? []

  const issue = useMemo(
    () => issues.find((i) => i.id === openId) ?? null,
    [issues, openId],
  )

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return issues.filter((i) => {
      if (status !== "All" && i.status !== status) return false
      if (severity !== "All" && i.severity !== severity) return false
      if (module !== "All" && i.module !== module) return false
      if (!query) return true
      return (
        i.id.toLowerCase().includes(query) ||
        i.summary.toLowerCase().includes(query) ||
        i.module.toLowerCase().includes(query)
      )
    })
  }, [issues, q, status, severity, module])

  return (
    <>
      <div className="flex flex-col gap-6 w-full min-w-0">
        {/* ── Filter Bar ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-black/20 p-4 rounded-2xl border border-white/5">
          <div className="lg:col-span-1">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Key or summary..."
              className="mt-1 w-full rounded-xl border border-white/5 bg-black/20 px-3 py-2 text-xs text-white outline-none focus:border-[color:var(--accentA)]/30"
            />
          </div>
          <Select label="Status" value={status} onChange={setStatus} options={["All", ...(data?.statuses ?? [])]} />
          <Select label="Severity" value={severity} onChange={setSeverity} options={["All", ...(data?.severities ?? [])]} />
          <Select label="Module" value={module} onChange={setModule} options={["All", ...(data?.modules ?? [])]} />
        </div>

        {/* ── List View ── */}
        <div className="rounded-2xl border border-white/5 bg-black/40 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 bg-white/5">
            <div className="flex items-center gap-3">
               <p className="text-xs font-bold text-white uppercase tracking-wider">Issue Log</p>
               <span className="text-[10px] opacity-40 font-mono">{filtered.length} matching</span>
            </div>
            <p className="text-[10px] text-[color:var(--ink1)] italic hidden sm:block">Click for full steps</p>
          </div>

          <div className="divide-y divide-white/[0.03] overflow-auto max-h-[400px] custom-scrollbar">
            {filtered.map((i) => (
              <button
                key={i.id}
                type="button"
                onClick={() => setOpenId(i.id)}
                className="w-full px-4 py-3.5 text-left transition hover:bg-white/[0.03] group flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                data-cursor="cta"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold font-mono text-[color:var(--accentA)] shrink-0">{i.id}</span>
                    <h5 className="text-[13px] font-medium text-white truncate group-hover:text-[color:var(--accentB)] transition-colors">{i.summary}</h5>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3 text-[10px] text-[color:var(--ink1)]">
                    <span className="opacity-60">{i.module}</span>
                    <span className="h-0.5 w-0.5 rounded-full bg-white/20" />
                    <span>{i.updated}</span>
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Tag className={statusStyles[i.status]}>{i.status}</Tag>
                  <Tag className={severityStyles[i.severity]}>{i.severity}</Tag>
                </div>
              </button>
            ))}

            {filtered.length === 0 && (
              <div className="px-6 py-12 text-center text-sm text-[color:var(--ink1)] bg-white/[0.01]">
                No issues match your current filters.
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal open={!!issue} title={issue?.id ?? ""} onClose={() => setOpenId(null)}>
        {issue && (
          <div className="space-y-5 animate-slide-up">
            <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
              <Tag className={statusStyles[issue.status]}>{issue.status}</Tag>
              <Tag className={severityStyles[issue.severity]}>{issue.severity}</Tag>
              <span className="rounded-xl border border-white/5 bg-white/5 px-3 py-1 text-[11px] text-white/60">{issue.module}</span>
            </div>

            <h3 className="text-lg font-semibold text-white leading-snug">{issue.summary}</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase">Steps to Reproduce</p>
                <ol className="mt-3 space-y-2.5">
                  {issue.steps.map((s, idx) => (
                    <li key={s} className="flex gap-3 text-[13px] text-[color:var(--ink1)] leading-relaxed">
                      <span className="shrink-0 font-bold font-mono text-[color:var(--accentB)] opacity-60">0{idx + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase">Expectation</p>
                  <p className="mt-2 text-[13px] text-[color:var(--ink1)] leading-relaxed">{issue.expected}</p>
                </div>
                <div className="rounded-2xl border border-[color:var(--accentA)]/20 bg-black/30 p-4">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase">Actual Result</p>
                  <p className="mt-2 text-[13px] text-white/90 leading-relaxed font-medium">{issue.actual}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase mb-2 opacity-50">Evidence Note</p>
              <div className="bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-[11px] text-[color:var(--accentB)]">
                {issue.evidence.value}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}

function Tag({ className = "", children }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-xl border px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight",
        className,
      ].join(" ")}
    >
      {children}
    </span>
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
