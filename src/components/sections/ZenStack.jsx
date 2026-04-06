export function Stack({ categories }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 text-left items-start reveal group w-full">
        <div className="flex flex-col gap-4">
          <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-5 bg-accent/5 rounded-full text-accent shadow-sm inline-block w-fit">Expertise</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-[1.05]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500">Proficiencies</span>
          </h2>
          <p className="opacity-50 text-text-secondary leading-relaxed text-sm sm:text-base font-medium max-w-xl border-l-2 border-accent/20 pl-5 py-1">
             A detailed overview of core methodologies, testing tools, and high-fidelity auditing skills utilized for enterprise-grade system stability.
          </p>
        </div>
      </div>

      {/* Premium Interaction Styles */}
      <style>{`
        @keyframes prism-shine {
          0% { transform: translateX(-100%) skewX(-25deg); }
          20%, 100% { transform: translateX(300%) skewX(-25deg); }
        }
        .animate-prism-shine {
          animation: prism-shine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {categories?.map((cat, i) => {
          const colors = [
            { primary: '#0EA5E9', secondary: '#22D3EE', primaryAlt: '#0284c7', secondaryAlt: '#38bdf8' }, // Sky
            { primary: '#10B981', secondary: '#34D399', primaryAlt: '#059669', secondaryAlt: '#6ee7b7' }, // Emerald
            { primary: '#8B5CF6', secondary: '#A78BFA', primaryAlt: '#7c3aed', secondaryAlt: '#c4b5fd' }, // Violet
            { primary: '#F59E0B', secondary: '#FBBF24', primaryAlt: '#d97706', secondaryAlt: '#fcd34d' }  // Amber
          ];
          const theme = colors[i % colors.length];
          
          return (
            <div 
              key={i} 
              className="p-7 rounded-[2.5rem] border border-white/40 shadow-sm transition-all duration-700 relative group overflow-hidden hover:-translate-y-1.5 hover:shadow-xl flex flex-col md:flex-row gap-7" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(5px)',
                boxShadow: 'var(--skeuo-outer)'
              }}
            >
               {/* 🌊 Organic Dual-Liquid Flow Effect (Spectral High-Visibility) */}
               <div className="absolute inset-0 z-0">
                  <div className="liquid-layer opacity-40 group-hover:opacity-60 transition-all duration-1000" style={{ background: `linear-gradient(45deg, ${theme.primary}, ${theme.secondary})` }}></div>
                  <div className="liquid-layer-alt opacity-30 group-hover:opacity-50 transition-all duration-1000" style={{ background: `linear-gradient(45deg, ${theme.primaryAlt}, ${theme.secondaryAlt})` }}></div>
               </div>

               {/* Multicolor Spectral Glow (Always-On Ultra) */}
               <div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none z-0" style={{ background: `radial-gradient(circle at center, ${theme.primary}20, transparent 80%)` }}></div>
               <div className="absolute -top-10 -right-10 w-48 h-48 blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none z-0" style={{ backgroundColor: `${theme.primary}30` }}></div>
               
               {/* Left Column: Domain Icon */}
               <div className="flex flex-col items-center justify-center shrink-0 relative z-10">
                  <div 
                    className="h-16 w-16 sm:h-18 sm:w-18 rounded-[1.5rem] bg-white border border-black/5 flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-sm overflow-hidden relative" 
                    style={{ boxShadow: 'var(--skeuo-outer)' }}
                  >
                     {/* Internal Grid Pattern */}
                     <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${theme.primary} 1px, transparent 1px)`, backgroundSize: '8px 8px' }}></div>
                     
                     <div className="relative z-10 transition-colors duration-500" style={{ color: theme.primary }}>
                        {i === 0 ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> : // Shield
                         i === 1 ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg> : // Platform
                         i === 2 ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> : // Zap/Execution
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> // Docs
                        }
                     </div>
                  </div>
               </div>
   
               <div className="flex-1 flex flex-col gap-4 relative z-10">
                  <div className="flex flex-col gap-1">
                     <h4 className="text-lg sm:text-xl font-black tracking-tighter leading-[1.1] text-text-primary group-hover:text-accent transition-colors duration-500 uppercase tracking-widest">
                        {cat.title}
                     </h4>
                  </div>
                  <div className={`grid ${cat.items.length > 4 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-x-6 gap-y-4 border-t border-black/5 pt-4`}>
                    {cat.items.map((item, idx) => {
                      return (
                        <div key={idx} className="flex items-center gap-3 py-0.5 group/item">
                           <div 
                              className="h-1.5 w-1.5 rounded-full group-hover:scale-150 transition-all duration-500 shadow-sm" 
                              style={{ 
                                backgroundColor: theme.primary,
                                boxShadow: `0 0 5px ${theme.primary}50` 
                              }}
                           ></div>
                           <span className="text-[10px] sm:text-[11px] font-bold text-text-primary/60 group-hover:text-text-primary transition-colors leading-tight">{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
               </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
