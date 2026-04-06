export function Hero({ data }) {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden flex items-center justify-center">
      {/* ── Background Infrastructure ── */}
      <div className="absolute inset-0 z-0">
        {/* Arctic Gradients */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(1200px 800px at 20% 20%, rgba(173,232,244,0.1), transparent 70%), radial-gradient(1000px 700px at 80% 80%, rgba(144,224,239,0.05), transparent 70%)",
          }}
        />
        {/* Subtle Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(173,232,244,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(173,232,244,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Eyebrow Status */}
          <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.03] border border-white/5 px-4 py-1.5 animate-slide-up">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
              System Status: High Availability
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--accentA)] via-[color:var(--accentB)] to-[color:var(--accentA)] bg-[size:200%_auto] animate-text-shimmer text-glow">Unbreakable</span> <br className="hidden md:block" /> Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--ink1)] opacity-70 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I am <span className="text-white font-semibold">{data.name}</span>, a {data.role.toLowerCase()}. I specialize in risk-distilled testing that protects your users and your bottom line.
            </p>
          </div>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row items-center gap-4 reveal active">
            <a
              href={data.ctas.primary.href}
              className="btn-neon relative group overflow-hidden px-10 py-4 text-sm font-bold shadow-[0_10px_40px_rgba(173,232,244,0.4)] transition-all"
              data-cursor="cta"
            >
              <span className="relative z-10">{data.ctas.primary.label}</span>
            </a>
            <a
              href={data.ctas.secondary.href}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-10 py-4 text-sm font-bold text-white transition-all hover:bg-white/[0.08] hover:border-white/10"
              data-cursor="button"
            >
              {data.ctas.secondary.label}
            </a>
          </div>

          {/* KPI Dashboard Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {data.counters.map((c, idx) => (
              <div
                key={c.label}
                className="group relative overflow-hidden bg-black/20 border border-white/5 rounded-[2rem] p-6 text-left transition-all hover:bg-white/[0.04] hover:border-[color:var(--accentA)]/30 hover:-translate-y-2"
              >
                 <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-[color:var(--accentA)]/5 blur-xl group-hover:bg-[color:var(--accentA)]/10 transition-colors" />
                 <p className="text-4xl font-bold text-white tracking-tighter">
                  {c.value}<span className="text-[color:var(--accentB)]">{c.suffix}</span>
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[color:var(--ink1)] opacity-60 group-hover:opacity-100 transition-opacity">
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          {/* Secondary Principle */}
          <div className="w-full max-w-5xl mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="rounded-[2.5rem] bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
               <div className="flex flex-col gap-2 text-left">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">Focus Strategy</span>
                  <p className="text-sm text-[color:var(--ink1)] italic opacity-90 leading-relaxed max-w-lg">
                    "I build quality by isolating high-risk entry points, validating complex permission matrices, and securing data integrity across the entire stack."
                  </p>
               </div>
               <div className="flex shrink-0 gap-3">
                  {["Postman", "SQL", "JIRA", "Selenium"].map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      {tool}
                    </span>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
