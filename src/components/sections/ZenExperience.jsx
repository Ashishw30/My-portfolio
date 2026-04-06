export function Experience({ history }) {
  return (
    <div className="flex flex-col gap-8 sm:gap-12">
      <div className="flex flex-col gap-6 text-left items-start reveal group w-full">
        <div className="flex flex-col gap-4">
          <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-5 bg-accent/5 rounded-full text-accent shadow-sm inline-block w-fit">Career History</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-[1.05]">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500">Career Journey</span>
          </h2>
          <p className="opacity-50 text-text-secondary leading-relaxed text-sm sm:text-base font-medium max-w-xl border-l-2 border-accent/20 pl-5 py-1">
             A documented history of professional roles, responsibilities, and key achievements delivered within diverse technical environments.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 sm:gap-12 relative w-full pt-2">
        {/* Simple & Elegant Timeline Conduit: Animates on Scroll */}
        <div className="absolute left-4 sm:left-[5.5rem] top-0 bottom-0 w-px bg-border-soft hidden sm:block origin-top scale-y-0 transition-transform duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) [.active&]:scale-y-100 reveal"></div>

        {history.map((job, i) => {
          const isCurrent = job.period.toUpperCase().includes("PRESENT");
          
          return (
            <div 
              key={i} 
              className={`group relative transition-all duration-700 reveal reveal-delay-${(i % 3) + 1}`}
            >
               {/* Minimalist Timeline Dot */}
               <div className={`absolute left-4 sm:left-[5.5rem] top-2 -translate-x-1/2 h-3.5 w-3.5 rounded-full border-2 border-white z-20 hidden sm:block shadow-sm transition-all duration-500 group-hover:scale-125 ${isCurrent ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`}></div>

               <div className="relative pl-0 sm:pl-32 lg:pl-52">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* WHERE & WHAT: Company and Product Context */}
                    <div className="flex-none lg:w-[30%] flex flex-col gap-5">
                       <div className="flex items-center gap-4 sm:gap-5">
                          {job.logo && (
                            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-center overflow-hidden shrink-0 group-hover:border-accent/30 transition-all duration-500">
                               <img src={job.logo} alt={job.company} className="h-full w-full object-contain filter group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          )}
                          <div className="flex flex-col gap-2">
                             <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] font-mono ${isCurrent ? 'text-emerald-500' : 'text-red-500'}`}>
                                {job.period}
                             </span>
                             <h3 className="text-xl sm:text-2xl font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors leading-[1.1]">
                                {job.company}
                             </h3>
                          </div>
                       </div>

                       <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                             <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-30">Target_Product:</span>
                             <div className="w-fit px-4 py-2 rounded-xl bg-accent/5 border border-accent/10 text-accent text-[11px] font-black uppercase tracking-widest">
                                {job.product || "Digital Platform"}
                             </div>
                          </div>
                          <div className="flex items-center gap-2 opacity-50">
                             <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                             <span className="text-[9px] font-black uppercase tracking-[0.2em] text-text-primary">{job.location}</span>
                          </div>
                       </div>
                    </div>

                    {/* DO: Impact & Execution Ledger */}
                    <div className="flex-1 flex flex-col gap-5">
                       <div className="flex flex-col gap-4">
                          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500 border-b border-border-soft pb-2 w-fit">Key_Accomplishments:</span>
                          <ul className="flex flex-col gap-3 pl-6 list-disc marker:text-accent">
                            {job.achievements.map((ach, idx) => (
                              <li 
                                key={idx} 
                                className={`text-[13.5px] sm:text-[14.5px] font-medium leading-relaxed text-secondary hover:text-text-primary transition-colors text-left reveal reveal-delay-${(idx % 4) + 1} pl-1`}
                              >
                                {ach}
                              </li>
                            ))}
                          </ul>
                       </div>

                       <div className="flex flex-wrap gap-2 pt-4 border-t border-border-soft/50">
                          {job.stack.map(s => (
                            <span 
                              key={s} 
                              className="px-3 py-1.5 bg-bg-secondary text-[9px] font-black uppercase tracking-wider text-text-primary/40 rounded-lg hover:text-accent border border-border-soft/30 hover:bg-white transition-all cursor-default"
                            >
                              {s}
                            </span>
                          ))}
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
