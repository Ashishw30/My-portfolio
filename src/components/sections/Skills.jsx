import { useReveal } from "../../hooks/useReveal"

export function Skills({ data }) {
  const { ref, revealed } = useReveal({ threshold: 0.16 })

  return (
    <div ref={ref} className="flex flex-col gap-8 w-full min-w-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {data.categories.map((cat, idx) => (
          <div
            key={cat.title}
            className={`lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/40 p-8 shadow-2xl transition-all hover:bg-white/[0.04] hover:border-[color:var(--accentA)]/20 animate-slide-up`}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Arctic Glow background */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--accentA)]/5 blur-3xl transition-all group-hover:bg-[color:var(--accentA)]/10" />
            
            <div className="relative z-10 flex flex-col gap-6">
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl group-hover:scale-110 transition-transform">
                  {idx === 0 ? "🎯" : idx === 1 ? "🛠️" : "📡"}
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">Domain</span>
                  <h4 className="text-xl font-bold text-white tracking-tight">{cat.title}</h4>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="flex flex-col gap-5">
                {cat.items.map((s) => (
                  <div key={s.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                      <span className="text-white/60 group-hover:text-white transition-colors">{s.name}</span>
                      <span className="text-[color:var(--accentA)] font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/[0.02]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)] shadow-[0_0_15px_rgba(173,232,244,0.4)] transition-all duration-1000 ease-out"
                        style={{ width: revealed ? `${s.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Notable Tools / Context */}
              <div className="mt-2 pt-6 border-t border-white/5">
                <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.slice(0, 3).map((item) => (
                    <span key={item.name} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/40 uppercase group-hover:text-white/60 transition-colors">
                      {item.name.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Tooling Ribbon */}
      <div className="mt-4 rounded-[2rem] bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 p-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <p className="text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase">Trusted Ecosystem</p>
        {["JIRA", "Confluence", "Postman", "Selenium", "BrowserStack", "GitHub"].map(tool => (
          <span key={tool} className="text-xs font-bold text-white/40 grayscale hover:grayscale-0 hover:text-white transition-all cursor-default">
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}
