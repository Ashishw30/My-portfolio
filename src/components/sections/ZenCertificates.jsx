import React, { useState } from "react"
import { createPortal } from "react-dom"
import { useScrollLock } from "../../hooks/useScrollLock"

export function Certificates({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock body scroll & Handle Esc key when modal is open
  useScrollLock(!!selectedImage)

  React.useEffect(() => {
    if (!selectedImage) return
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedImage]);

  return (
    <div className="flex flex-col gap-8 sm:gap-12 relative">
      <div className="flex flex-col gap-6 text-left items-start reveal group w-full">
        <div className="flex flex-col gap-4">
          <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-5 bg-accent/5 rounded-full text-accent shadow-sm inline-block w-fit">Certifications</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-[1.05]">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500">Certifications</span>
          </h2>
          <p className="opacity-50 text-text-secondary leading-relaxed text-sm sm:text-base font-medium max-w-xl border-l-2 border-accent/20 pl-5 py-1">
             Official credentials and technical certifications from recognized institutions validating core competencies in QA and testing methodologies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {items.map((cert, index) => {
           const colors = [
             { accent: '#10B981', light: 'rgba(16, 185, 129, 0.05)', glow: 'rgba(16, 185, 129, 0.4)' }, // Emerald
             { accent: '#0EA5E9', light: 'rgba(14, 165, 233, 0.05)', glow: 'rgba(14, 165, 233, 0.4)' }, // Sky
           ];
           const theme = colors[index % colors.length];

           return (
             <div 
               key={cert.id} 
               className={`group relative bg-bg-secondary border border-white/60 rounded-[3rem] p-8 sm:p-10 transition-all duration-700 reveal reveal-delay-${(index % 2) + 1} hover:-translate-y-2 flex flex-col md:flex-row gap-8 sm:gap-10 overflow-hidden`}
               style={{ 
                 boxShadow: 'var(--skeuo-outer)',
                 borderColor: `${theme.accent}30`,
                 backgroundColor: theme.light 
               }}
             >
                {/* Ambient Glow */}
                <div className="absolute -top-20 -right-20 w-80 h-80 opacity-0 blur-[100px] rounded-full group-hover:opacity-[0.15] transition-opacity duration-1000 pointer-events-none" style={{ backgroundColor: theme.accent }}></div>
                
               {/* Left Column: Icon/Badge Area */}
               <div className="flex flex-col items-center justify-center gap-6 relative z-10 shrink-0">
                  <div 
                    className="h-24 w-24 rounded-[2rem] bg-white border border-black/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 text-black/50 group-hover:text-black" 
                    style={{ boxShadow: 'var(--skeuo-outer)', '--icon-color': theme.accent }}
                  >
                    {cert.icon === 'verified' ? (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-colors duration-500" style={{ stroke: 'var(--icon-color)' }}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4" strokeWidth="3"/>
                      </svg>
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-colors duration-500" style={{ stroke: 'var(--icon-color)' }}>
                        <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="2"/>
                        <path d="M6 8h.01M10 8h.01M14 8h.01M6 12h12M6 16h12" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
               </div>
  
               {/* Right Column: Content Area */}
               <div className="flex-1 flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col gap-3">
                     <div className="flex flex-wrap sm:flex-nowrap justify-between items-start gap-4">
                        <h4 className="text-2xl font-black tracking-tighter leading-[1.1] text-text-primary group-hover:text-accent transition-colors duration-500">{cert.title}</h4>
                        <span className="text-[10px] font-black tracking-widest px-3 py-1.5 bg-white border border-black/5 rounded-full shadow-sm whitespace-nowrap" style={{ color: theme.accent }}>{cert.date}</span>
                     </div>
                     <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em]">{cert.issuer}</span>
                  </div>
  
                  <div className="flex flex-col gap-3">
                     <p className="text-sm font-medium leading-relaxed text-secondary opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                        {cert.description}
                     </p>
                  </div>
  
                  <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                     <button 
                      onClick={() => setSelectedImage(cert.image || "/ashish-profile.jpg.png")}
                      className="group/btn flex items-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-text-primary hover:text-accent transition-all cursor-pointer"
                     >
                       View Certificate &rarr;
                       <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center group-hover/btn:scale-110 transition-all" style={{ backgroundColor: theme.accent, color: 'white', borderColor: 'transparent' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                       </div>
                     </button>
                     <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-500/20">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                     </div>
                  </div>
               </div>
            </div>
          )
       })}
     </div>

      {/* Centered Minimalist Lightbox Overlay */}
      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl animate-fade-in cursor-zoom-out flex flex-col items-center justify-center p-4 sm:p-8"
          style={{ zIndex: 99999 }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Dedicated Top Action Bar (Prevents Overlap) */}
          <div className="w-full max-w-5xl flex justify-end mb-4 sm:mb-6 shrink-0 relative z-[100]">
            <button 
               className="h-10 w-10 sm:h-14 sm:w-14 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 active:scale-95 flex items-center justify-center transition-all group pointer-events-auto backdrop-blur-2xl shadow-2xl"
               onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
               }}
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Pure Image Focus (Safely Bounded) */}
          <img 
            src={selectedImage} 
            alt="Official Certification Document" 
            className="w-full max-h-[75vh] sm:max-h-[85vh] object-contain max-w-5xl rounded-xl sm:rounded-2xl animate-modal-enter drop-shadow-[0_40px_100px_rgba(0,0,0,0.8)] cursor-zoom-out shrink-0 relative z-[50]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
   </div>
 )
}
