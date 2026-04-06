import { useState } from "react"
import { Modal } from "../ui/Modal"

export function ResumeSection({ href }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6 w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* ── CTA Card ── */}
        <div className="lg:col-span-5">
          <div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-6 md:p-8 flex flex-col h-full shadow-2xl">
            {/* Arctic Glow */}
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[color:var(--accentA)]/10 blur-3xl transition-all group-hover:bg-[color:var(--accentA)]/20" />
            
            <div className="relative z-10 flex flex-col h-full gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">
                  Documentation
                </span>
                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                  Professional <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)]">Summary</span>
                </h3>
                <p className="mt-2 text-sm text-[color:var(--ink1)] opacity-70 leading-relaxed max-w-xs">
                  A comprehensive overview of my testing expertise, tools, and technical leadership.
                </p>
              </div>

              <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => setOpen(true)}
                  className="flex-1 rounded-xl bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)] px-6 py-3.5 text-xs font-bold text-[#06090f] shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                  data-cursor="cta"
                >
                  👁️ LIVE PREVIEW
                </button>
                <a
                  href={href}
                  className="flex-1 rounded-xl bg-white/5 border border-white/5 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2"
                  data-cursor="button"
                >
                  📥 DOWNLOAD PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats/Points Card ── */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 h-full">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 shadow-inner">
               <h5 className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase mb-4 px-1">Core Competencies</h5>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                 <Feature emoji="🔬" text="Functional & API Validation" />
                 <Feature emoji="🏗️" text="Defect Lifecycle Management" />
                 <Feature emoji="🛡️" text="RBAC & Security Hardening" />
                 <Feature emoji="💨" text="Regression & Smoke Suites" />
                 <Feature emoji="📊" text="DWH/SQL Integrity Testing" />
                 <Feature emoji="🧩" text="Integration & E2E Flows" />
               </ul>
            </div>
            
            <div className="rounded-2xl border border-white/5 bg-black/20 p-5 flex items-center justify-center">
               <p className="text-[11px] text-[color:var(--ink1)] opacity-40 italic text-center leading-relaxed">
                 "Quality is not an act, it is a habit. <br className="hidden sm:block" /> I strive to bring engineering excellence to every module I touch."
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      <Modal open={open} title="Resume Preview" onClose={() => setOpen(false)}>
        <div className="rounded-2xl border border-white/5 bg-black/40 p-2 overflow-hidden">
          <iframe
            title="Resume"
            src={href}
            className="h-[75vh] w-full rounded-xl bg-white/5"
          />
        </div>
      </Modal>
    </div>
  )
}

function Feature({ emoji, text }) {
  return (
    <li className="flex items-center gap-3 group">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-sm group-hover:scale-110 transition-transform">
        {emoji}
      </span>
      <span className="text-[13px] text-[color:var(--ink1)] opacity-80 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {text}
      </span>
    </li>
  )
}
