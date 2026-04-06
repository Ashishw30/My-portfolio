import { TiltCard } from "../ui/TiltCard"

export function About({ data, profile }) {
  return (
    <div className="flex flex-col gap-8 w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ── Main Narrative ── */}
        <div className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/40 p-8 md:p-10 shadow-2xl flex flex-col gap-8">
            {/* Arctic Glow */}
            <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[color:var(--accentA)]/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[color:var(--accentB)] uppercase opacity-60">Professional Persona</span>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                {data.heading}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[color:var(--ink1)] opacity-80 max-w-2xl">
                {data.summary}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-1 gap-5">
              {data.highlights.map((h, idx) => (
                <div key={h.id || idx} className="group flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-all hover:bg-white/[0.06] hover:border-white/10">
                   <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl group-hover:scale-110 transition-transform">
                     {idx === 0 ? "🏗️" : idx === 1 ? "⚡" : "🛡️"}
                   </span>
                   <div className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity">
                        {h.text}
                      </p>
                      <span className="text-[10px] font-mono text-[color:var(--accentA)] opacity-50 uppercase tracking-widest">Validated & Documented</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dynamic Profile Card ── */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex-1 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-10 shadow-xl flex flex-col items-center text-center gap-6">
             <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--accentA)] to-[color:var(--accentB)] rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative h-32 w-32 rounded-[2.5rem] border-2 border-white/10 overflow-hidden bg-black flex items-center justify-center">
                  {/* Digital Persona Placeholder */}
                   <span className="text-5xl">👤</span>
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(173,232,244,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(173,232,244,0.02)_1px,transparent_1px)] bg-[size:10px_10px] opacity-30" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-xl bg-emerald-500 border-4 border-[#06090f] flex items-center justify-center shadow-lg">
                   <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </div>
             </div>

             <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-bold text-white tracking-tight">{profile.name}</h4>
                <p className="text-xs font-bold text-[color:var(--accentB)] uppercase tracking-[.2em]">{profile.role}</p>
                <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-[color:var(--ink1)] font-medium bg-white/5 border border-white/5 px-3 py-1 rounded-full">
                  <span className="h-1 w-1 rounded-full bg-[color:var(--accentA)]" />
                  {profile.location}
                </div>
             </div>

             <div className="grid grid-cols-3 gap-3 w-full mt-4">
               {profile.counters.map((c) => (
                 <div key={c.label} className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-lg font-bold text-white">{c.value}<span className="text-xs text-[color:var(--accentB)] font-normal">{c.suffix}</span></span>
                    <span className="text-[8px] font-bold uppercase tracking-tighter opacity-40 text-center leading-none">{c.label}</span>
                 </div>
               ))}
             </div>

             {/* Social Integration */}
             <div className="flex gap-2 w-full mt-2">
                <a href={`mailto:${profile.email}`} className="flex-1 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-sm">📧</a>
                <a href={profile.links.linkedin} className="flex-1 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-sm">💼</a>
                <a href={profile.links.github} className="flex-1 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-sm">🐙</a>
             </div>
          </div>

          <div className="rounded-[2rem] bg-white/[0.02] border border-white/5 px-8 py-5 flex items-center justify-center">
             <p className="text-[10px] font-bold text-white/20 uppercase tracking-[.4em] animate-pulse">Available for high-stakes projects</p>
          </div>
        </div>

      </div>
    </div>
  )
}
