import { TiltCard } from "../ui/TiltCard"

export function WorkSamples({ data }) {
  const downloads = data?.downloads ?? []
  
  return (
    <div className="flex flex-col gap-8 w-full min-w-0">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* ── Downloads Section ── */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 ml-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Templates & Artifacts</h4>
            <p className="text-[10px] text-[color:var(--ink1)] opacity-60">Open-source documentation samples</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {downloads.map((d) => (
              <a
                key={d.href}
                href={d.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-black/40 px-5 py-4 transition-all hover:bg-white/[0.04] hover:border-[color:var(--accentA)]/30 hover:-translate-y-1 shadow-lg"
                data-cursor="link"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg group-hover:scale-110 transition-transform">
                    📄
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white group-hover:text-[color:var(--accentB)] transition-colors">{d.label}</span>
                    <span className="text-[10px] opacity-40 font-mono">PDF DOCUMENT • 1.2 MB</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[color:var(--accentA)] opacity-0 group-hover:opacity-100 transition-all translate-x-1 group-hover:translate-x-0 tracking-widest uppercase">
                  Open →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Methodology Info ── */}
        <div className="lg:col-span-7">
          <div className="relative h-full overflow-hidden rounded-3xl border border-white/5 bg-black/20 p-6 md:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[color:var(--accentA)]/5 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">
                  Standardization
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">Artifact Integrity</h3>
                <p className="max-w-md text-[13px] leading-relaxed text-[color:var(--ink1)] opacity-70">
                  My documentation adheres to IEEE 829 standards but adapted for agile velocity. Every report ensures clear traceability from requirement to result.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Item 
                  title="Bug Reports" 
                  icon="🏷️" 
                  desc="Includes reproduction steps, logs, and impact analysis for fast fixing." 
                />
                <Item 
                  title="Test Cases" 
                  icon="📋" 
                  desc="Structured with clear entry/exit criteria and verifiable outcomes." 
                />
                <Item 
                  title="API Specs" 
                  icon="🔌" 
                  desc="Postman/Insomnia exports with pre-request scripts and data tests." 
                />
                <Item 
                  title="SQA Notes" 
                  icon="✍️" 
                  desc="Risk-based checklists and exploratory testing session logs." 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Item({ title, desc, icon }) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.05]">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-base grayscale group-hover:grayscale-0 transition-all">{icon}</span>
        <h5 className="text-[11px] font-bold text-white uppercase tracking-wide opacity-80">{title}</h5>
      </div>
      <p className="text-[11px] leading-relaxed text-[color:var(--ink1)] opacity-60 group-hover:opacity-80 transition-opacity">
        {desc}
      </p>
    </div>
  )
}
