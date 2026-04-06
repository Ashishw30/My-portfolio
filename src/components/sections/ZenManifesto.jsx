import React from "react"

export function Manifesto({ data }) {
   if (!data || !data.capabilities) return null;

   return (
      <div className="flex flex-col gap-10">
         <div className="flex flex-col gap-6 text-left items-start reveal group">
            <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] bg-accent/5 py-1 px-4 rounded-full text-accent shadow-sm inline-block">Persona</div>
            <h2 className="text-glow max-w-3xl leading-[1.25] tracking-tight text-2xl sm:text-4xl">
               A Systematic Approach to Quality, Reliability, and <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">User Trust</span>.
            </h2>
         </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start reveal">
          
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-[1.1]">
                Systematic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500">Verification</span> <br/>
                Intelligence.
              </h2>
              <p className="text-sm font-medium leading-relaxed opacity-60 text-text-primary px-3 max-w-[280px] group-hover:opacity-100 transition-opacity">
                My testing approach is driven by curiosity, precision, and a deep sense of product responsibility.
              </p>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-bg-secondary border border-white/50" style={{ boxShadow: 'var(--skeuo-outer)' }}>
              <div className="flex items-center gap-4 mb-4">
                 <div className="h-10 w-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-accent">Strategic_Value</span>
              </div>
              <p className="text-sm font-bold opacity-80 leading-relaxed italic">
                 "I think like a user, admin, and attacker to deliver production-ready software with confidence."
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.capabilities?.map((cap, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[2.5rem] border border-white/20 shadow-sm transition-all duration-1000 relative group overflow-hidden hover:-translate-y-2" 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: 'var(--skeuo-outer)'
                }}
              >
                 {/* 🌊 Organic Dual-Liquid Flow Effect (Spectral High-Visibility) */}
                 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[inherit]">
                    <div 
                       className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-40 group-hover:opacity-60 transition-all duration-1000 rounded-[40%]" 
                       style={{ 
                          background: `linear-gradient(45deg, ${cap.primary}, ${cap.secondary})`,
                          animation: 'liquid-move 15s linear infinite, liquid-morph 10s ease-in-out infinite alternate'
                       }}
                    ></div>
                    <div 
                       className="absolute top-[55%] left-[45%] w-[180%] h-[180%] -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-all duration-1000 rounded-[35%]" 
                       style={{ 
                          background: `linear-gradient(45deg, ${cap.primaryAlt}, ${cap.secondaryAlt})`,
                          animation: 'liquid-move 20s linear infinite reverse, liquid-morph 14s ease-in-out infinite alternate-reverse'
                       }}
                    ></div>
                 </div>
  
                 {/* Multicolor Spectral Glow (Always-On Ultra) */}
                 <div className="absolute inset-0 opacity-30 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none z-0" style={{ backgroundImage: `radial-gradient(circle at 30% 30%, ${cap.primary}, transparent 70%)` }}></div>
                 <div className="absolute -top-32 -right-32 w-80 h-80 blur-[120px] opacity-20 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none z-0" style={{ backgroundColor: cap.primary }}></div>
                 
                 <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-[18px] sm:text-[22px] font-black mb-3 text-text-primary group-hover:text-accent transition-colors duration-500 leading-tight tracking-tighter">
                        {cap.title}
                    </h3>
                    <div className="h-[3px] w-12 rounded-full mb-8 opacity-60" style={{ background: `linear-gradient(90deg, ${cap.primary}, transparent)` }}></div>
                    
                    <div className={`grid ${cap.items?.length > 5 ? 'grid-cols-2' : 'grid-cols-1'} gap-x-6 gap-y-3`}>
                        {cap.items?.map((point, idx) => (
                           <div key={idx} className="flex gap-3 items-center group/point">
                              <div className="h-1 w-1 rounded-full shrink-0 group-hover/point:scale-[2] transition-transform" style={{ backgroundColor: cap.primary }}></div>
                              <span className="text-[10px] sm:text-[11px] font-bold text-text-primary/70 group-hover:text-text-primary transition-all leading-none">{point}</span>
                           </div>
                        ))}
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
   )
}
