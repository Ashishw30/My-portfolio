export function Experience({ items }) {
  return (
    <div className="relative w-full max-w-5xl">
      {/* ── Timeline Rail ── */}
      <div
        className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[color:var(--accentA)] via-white/10 to-transparent ml-2 md:ml-4"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-10">
        {items.map((exp, idx) => (
          <div key={`${exp.company}-${exp.period}`} className="relative pl-10 md:pl-16">
            {/* ── Timeline Node ── */}
             <div className="absolute left-0 top-6 ml-2 md:ml-4 translate-x-[-50%]">
                <div className="h-4 w-4 rounded-full bg-[color:var(--bg0)] border-2 border-[color:var(--accentA)] shadow-[0_0_15px_rgba(173,232,244,0.6)] z-10 relative" />
                <div className="absolute inset-0 h-4 w-4 rounded-full bg-[color:var(--accentA)] animate-ping opacity-30" />
             </div>

            {/* ── Experience Card ── */}
            <div 
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 p-6 md:p-8 shadow-2xl transition-all hover:bg-white/[0.04] hover:border-[color:var(--accentA)]/20 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Context Label */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">Full-Stack Quality</span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="text-[9px] font-mono text-[color:var(--ink1)] opacity-40 uppercase">{exp.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <p className="text-sm font-semibold text-[color:var(--accentA)] opacity-80">{exp.company}</p>
                </div>
                
                <div className="shrink-0 rounded-xl bg-white/5 border border-white/5 px-4 py-2 text-[10px] font-bold font-mono tracking-widest text-white/50 group-hover:text-white transition-colors">
                  {exp.period}
                </div>
              </div>

              {/* Achievements with Custom Markers */}
              <ul className="flex flex-col gap-4">
                {exp.achievements.map((a, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-4 group/item">
                    <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full border border-[color:var(--accentA)]/40 bg-[color:var(--accentA)]/10 group-hover/item:scale-125 transition-transform" />
                    <span className="text-[14px] leading-relaxed text-[color:var(--ink1)] opacity-70 group-hover/item:opacity-100 transition-opacity">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/[0.03] border border-white/5 px-3 py-1.5 text-[10px] font-bold text-white/40 uppercase tracking-widest group-hover:border-white/10 group-hover:text-white/60 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Background Accent */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--accentA)]/5 blur-3xl pointer-events-none group-hover:bg-[color:var(--accentA)]/10 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
