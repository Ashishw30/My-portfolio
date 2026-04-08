import React from "react"
import { useScrollLock } from "../../hooks/useScrollLock"

export function ResumePreview({ profile, onClose }) {
  // Lock background scroll while the preview is open
  useScrollLock(true)
  
  // Cache prevention: stabilize the URL with useMemo to prevent unnecessary iframe reloads
  const resumeUrl = React.useMemo(() => {
    const baseHref = profile?.ctas?.secondary?.href || "/Ashish_Wani_Manual_Tester_QA_3Yrs_Exp.pdf";
    return `${baseHref}${baseHref.includes('?') ? '&' : '?'}v=${new Date().getTime()}`;
  }, [profile]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 lg:p-16 overflow-hidden animate-in fade-in duration-500">
      {/* Immersive Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl cursor-pointer" 
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-[1400px] h-full lg:h-[90vh] bg-white rounded-none lg:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-white/10 animate-in zoom-in-95 lg:slide-in-from-bottom-20 duration-700">
        
        {/* Global Toolbar */}
        <div className="sticky top-0 z-40 flex items-center justify-between px-6 lg:px-12 py-6 bg-white border-b border-border-soft/50 shadow-sm">
           <div className="flex items-center gap-4 lg:gap-6 min-w-0">
              <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-black flex items-center justify-center text-white text-xs font-black tracking-tighter flex-shrink-0">AW</div>
              <div className="flex flex-col min-w-0">
                 <h3 className="text-[10px] lg:text-lg font-black uppercase tracking-tight text-black truncate max-w-[130px] sm:max-w-none">
                    Ashish_Wani_Resume
                 </h3>
              </div>
           </div>
           
           <div className="flex items-center gap-3 lg:gap-5">
              <a 
                href={resumeUrl} 
                download
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-lg"
              >
                 Download PDF
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mb-0.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
              </a>

              <button 
                onClick={onClose}
                className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-xl bg-bg-secondary hover:bg-black hover:text-white transition-all shadow-sm"
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
           </div>
        </div>

        {/* Pure Document View Container */}
        <div className="flex-1 overflow-hidden relative group">
            {/* Interactive Document Iframe */}
            <iframe 
              src={resumeUrl}
              className="w-full h-full border-0 animate-in fade-in duration-1000"
              title="Official Resume Document"
            ></iframe>


        </div>

        {/* Mobile Action Footer */}
        <div className="block lg:hidden sticky bottom-0 z-40 p-6 bg-white border-t border-border-soft">
           <a 
              href={resumeUrl} 
              download
              className="flex items-center justify-center gap-4 w-full h-14 rounded-2xl bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-xl"
            >
              Download PDF Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
           </a>
        </div>
      </div>
    </div>
  )
}
