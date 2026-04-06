export function Projects({ items }) {
  return (
    <div className="flex flex-col gap-10 w-full min-w-0">
      {items.map((p, index) => (
        <article
          key={p.title}
          className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/40 shadow-2xl transition-all hover:bg-white/[0.04] hover:border-[color:var(--accentA)]/30 animate-slide-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Arctic Background Accent */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[color:var(--accentA)]/5 blur-[100px] pointer-events-none group-hover:bg-[color:var(--accentA)]/10 transition-colors" />
          
          <div className="relative z-10 p-8 md:p-10 flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[color:var(--accentA)]/10 border border-[color:var(--accentA)]/20 text-[9px] font-bold text-[color:var(--accentA)] uppercase tracking-widest">
                    {p.tag}
                  </span>
                  <div className="flex gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-[color:var(--ink1)] opacity-70 max-w-2xl">
                  {p.summary}
                </p>
              </div>

              <div className="shrink-0 flex flex-col gap-3 items-end">
                <a
                  href="#contact"
                  className="rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                  data-cursor="cta"
                >
                  Request Case Study
                </a>
                <span className="text-[9px] font-mono text-white/20 uppercase">Reference: QA-PRJ-{1000 + index}</span>
              </div>
            </div>

            {/* Methodology & Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.bullets.map((b, bIdx) => (
                <div
                  key={bIdx}
                  className="relative group/bullet overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04] hover:border-white/10"
                >
                  <div className="relative z-10 flex items-start gap-4">
                     <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full border border-[color:var(--accentA)]/40 bg-[color:var(--accentA)]/10 group-hover/bullet:scale-125 group-hover/bullet:bg-[color:var(--accentA)] transition-all" />
                     <p className="text-[13px] leading-relaxed text-[color:var(--ink1)] opacity-80 group-hover/bullet:opacity-100 transition-opacity">
                       {b}
                     </p>
                  </div>
                  {/* Subtle inner grid lines for 'blueprint' feel */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(173, 232, 244, 0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(173, 232, 244, 0.04)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover/bullet:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Footer / Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
               <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-bold text-white/20 uppercase">Business Context</span>
                     <span className="text-[10px] font-bold text-white/60">Risk Management</span>
                  </div>
                  <div className="flex flex-col gap-1">
                     <span className="text-[9px] font-bold text-white/20 uppercase">Outcome</span>
                     <span className="text-[10px] font-bold text-emerald-400">Zero Critical Escapes</span>
                  </div>
               </div>
               <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">🧪</span>
               </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
