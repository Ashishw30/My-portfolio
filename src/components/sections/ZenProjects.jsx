import React, { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { useScrollLock } from "../../hooks/useScrollLock"

export function Projects({ items }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const marqueeRef = React.useRef(null);

  // Lock body scroll & Handle Esc key when modal is open
  useScrollLock(!!selectedProject)

  useEffect(() => {
    if (!selectedProject) return
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedProject(null) }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [selectedProject]);

  // 🏎️ Unified Kinetic & Auto-Scroll Engine
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = React.useRef(false); // Using Ref for absolute closure reliability in RAF loop  
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [velocity, setVelocity] = useState(-1.5); // Initial Auto-scroll velocity (negative = left)
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const lastUpdateRef = React.useRef(performance.now());
  const requestRef = React.useRef();

  // Unified Physics Loop (Frame-rate independent)
  const updateScroll = (time) => {
    // 🧠 Performance Optimization: Kill the loop if modal is open to prevent lag
    if (selectedProject) return;

    if (marqueeRef.current) {
        const deltaTime = time - lastUpdateRef.current;
        lastUpdateRef.current = time;
        
        // Target 60fps equivalent step
        const frameFactor = Math.min(deltaTime / 16.666, 3); 
        const AUTO_SPEED = -1.5; 

        // Apply Direct Hover-to-Stop State (Using Refs for zero-latency reading)
        if (isDraggingRef.current) {
            // Dragging Phase
        } else {
            // Snappy Start: Return to cruising speed
            if (velocity !== AUTO_SPEED) setVelocity(AUTO_SPEED);
            marqueeRef.current.scrollLeft -= AUTO_SPEED * frameFactor;
        }

        // Infinite Loop Teleportation
        const maxScroll = marqueeRef.current.scrollWidth / 3;
        if (marqueeRef.current.scrollLeft >= maxScroll * 2) {
            marqueeRef.current.scrollLeft -= maxScroll;
            if (isDraggingRef.current) setStartX(prev => prev + maxScroll);
        } else if (marqueeRef.current.scrollLeft <= maxScroll * 0.5) {
            marqueeRef.current.scrollLeft += maxScroll;
            if (isDraggingRef.current) setStartX(prev => prev - maxScroll);
        }
    }
    requestRef.current = requestAnimationFrame(updateScroll);
  };


  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging, velocity, selectedProject]);

  const handleDragStart = (e) => {
    const pageX = e.pageX || e.touches?.[0].pageX;
    setIsDragging(true);
    isDraggingRef.current = true;
    setStartX(pageX);
    setScrollLeftState(marqueeRef.current ? marqueeRef.current.scrollLeft : 0);
    setLastX(pageX);
    setLastTime(Date.now());
    cancelAnimationFrame(requestRef.current);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return;
    const pageX = e.pageX || e.touches?.[0].pageX;
    e.preventDefault();
    
    // Calculate instantaneous velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    if (deltaTime > 0) {
        const currentVelocity = (pageX - lastX) / deltaTime * 12;
        setVelocity(currentVelocity);
    }
    setLastX(pageX);
    setLastTime(currentTime);

    // Apply direct scroll
    const walk = (pageX - startX); 
    if (marqueeRef.current) {
        marqueeRef.current.scrollLeft = scrollLeftState - walk;
    }
  };


  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {/* Premium Interaction Styles */}
      <style>{`
        @keyframes prism-shine {
          0% { transform: translateX(-100%) skewX(-25deg); }
          20%, 100% { transform: translateX(300%) skewX(-25deg); }
        }
        .animate-prism-shine {
          animation: prism-shine 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>

      {/* Standardized Header (Title then Description) */}
      <div className="flex flex-col gap-6 text-left items-start reveal group w-full px-4 sm:px-0">
        <div className="flex flex-col gap-4">
          <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-5 bg-accent/5 rounded-full text-accent shadow-sm inline-block w-fit">Portfolio</div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-[1.05]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-accent to-violet-500">Case Studies</span>
          </h2>
          <p className="opacity-50 text-text-secondary leading-relaxed text-sm sm:text-base font-medium max-w-xl border-l-2 border-accent/20 pl-5 py-1">
             Select a project to explore its case study, test coverage, and outcomes achieved.
          </p>
        </div>
      </div>


      {/* High-Fidelity Project Grid (Certification Card Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {items.map((project, index) => {
            const palette = [
                { accent: '#3B82F6', light: 'rgba(59, 130, 246, 0.05)', glow: 'rgba(59, 130, 246, 0.4)' }, // Blue
                { accent: '#10B981', light: 'rgba(16, 185, 129, 0.05)', glow: 'rgba(16, 185, 129, 0.4)' }, // Emerald
                { accent: '#EC4899', light: 'rgba(236, 72, 153, 0.05)', glow: 'rgba(236, 72, 153, 0.4)' }, // Pink
                { accent: '#F59E0B', light: 'rgba(245, 158, 11, 0.05)', glow: 'rgba(245, 158, 11, 0.4)' }, // Amber
                { accent: '#8B5CF6', light: 'rgba(139, 92, 246, 0.05)', glow: 'rgba(139, 92, 246, 0.4)' }, // Violet
                { accent: '#EF4444', light: 'rgba(239, 68, 68, 0.05)', glow: 'rgba(239, 68, 68, 0.4)' },  // Red
            ];
            const theme = palette[index % palette.length];

            return (
              <div 
                key={project.title} 
                onClick={() => setSelectedProject({ ...project, theme })}
                className="group relative bg-bg-secondary border border-white/60 rounded-[3rem] p-8 sm:p-10 transition-all duration-700 hover:-translate-y-1.5 flex flex-col md:flex-row gap-8 sm:gap-10 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl"
                style={{ 
                  boxShadow: 'var(--skeuo-outer)',
                  borderColor: `${theme.accent}20`,
                  backgroundColor: theme.light
                }}
              >
                 {/* Luminous Radiant Glow Backdrop */}
                 <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl pointer-events-none -z-10" 
                    style={{ background: `radial-gradient(circle at center, ${theme.accent}15, transparent 70%)` }}
                 ></div>

                 {/* Kinetic Bottom Accent Bar (Expands on Hover) */}
                 <div 
                    className="absolute bottom-0 left-0 h-1.5 bg-accent transition-all duration-700 ease-out w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: theme.accent, boxShadow: `0 0 10px ${theme.glow}` }}
                 ></div>
                 
                {/* Left Column: Branding Logo (Laboratory Frame) */}
                <div className="flex flex-col items-center justify-center shrink-0">
                   <div 
                     className="aspect-square w-28 sm:w-36 shrink-0 rounded-[2.5rem] bg-white border border-black/5 flex items-center justify-center p-5 transition-all duration-700 group-hover:scale-[1.06] shadow-sm relative overflow-hidden" 
                     style={{ boxShadow: 'var(--skeuo-outer)' }}
                   >
                       {/* High-Resolution Grid Texture */}
                       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${theme.accent} 1px, transparent 1px)`, backgroundSize: '10px 10px' }}></div>
                       
                       <img 
                            src={project.image} 
                            alt={project.title} 
                            className="h-full w-full object-contain filter drop-shadow-md relative z-10 transition-transform duration-700 group-hover:scale-110" 
                        />
                   </div>
                </div>
   
                {/* Right Column: Project Executive Summary */}
                <div className="flex-1 flex flex-col gap-4 relative z-10">
                   <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-4">
                         <h4 className="text-xl sm:text-2xl font-black tracking-tighter leading-[1.1] text-text-primary group-hover:text-accent transition-colors duration-500 line-clamp-2">{project.title}</h4>
                         <div className="h-2 w-2 rounded-full mt-2" style={{ backgroundColor: theme.accent, boxShadow: `0 0 10px ${theme.glow}` }}></div>
                      </div>
                      <span className="text-[10px] font-black tracking-[0.2em] text-secondary uppercase opacity-60">{project.tag}</span>
                   </div>
   
                   <p className="text-sm font-medium leading-relaxed text-secondary opacity-70 group-hover:opacity-100 transition-opacity line-clamp-3">
                      {project.summary}
                   </p>
   
                   <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                      <div className="group/btn flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-text-primary group-hover:text-accent transition-all">
                        View Case Study
                        <div className="h-8 w-8 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center group-hover:scale-110 transition-all font-bold" style={{ backgroundColor: theme.accent, color: 'white', borderColor: 'transparent' }}>
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-black/5 flex items-center justify-center text-secondary opacity-20">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                   </div>
                </div>
              </div>
            )
        })}
      </div>



      {/* Hardware Diagnostic Modal */}
      {selectedProject && createPortal(
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 modal-overlay flex items-center justify-center p-4 sm:p-6"
          style={{ zIndex: 99999, fontFamily: '"Outfit", sans-serif' }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            className="modal-content w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col animate-modal-enter"
          >
             {/* Modal Header */}
             <div className="p-6 sm:p-10 border-b border-black/5 flex justify-between items-start bg-bg-secondary relative" style={{ backgroundColor: selectedProject.theme.light }}>
                <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.05] blur-[100px] pointer-events-none" style={{ backgroundColor: selectedProject.theme.accent }}></div>

                <div className="flex flex-col gap-4 relative z-10 w-full pr-16 text-left">
                   <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: selectedProject.theme.accent, boxShadow: `0 0 10px ${selectedProject.theme.glow}` }}></span>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: selectedProject.theme.accent }}>{selectedProject.tag}</span>
                   </div>
                   <h3 className="!text-base sm:!text-lg lg:!text-xl font-black tracking-tight leading-[1.2] text-text-primary break-words max-w-2xl">{selectedProject.title}</h3>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 sm:top-10 sm:right-10 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white shadow-sm border border-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-all z-20 group"
                  aria-label="Close Case File"
                >
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-90 transition-transform"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
             </div>

             <div className="flex-1 overflow-y-auto p-8 sm:p-12 no-scrollbar bg-bg-primary">
                <div className="flex flex-col gap-10 sm:gap-14">
                   
                   {/* Summary / Context Recessed Panel */}
                   <div className="flex flex-col gap-4 bg-bg-secondary p-8 rounded-[2rem] border border-white/50 shadow-inner" style={{ boxShadow: 'var(--skeuo-inner)' }}>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">
                        {selectedProject.caseStudy ? "Project Context:" : "Project Overview:"}
                      </span>
                      <p className="text-base sm:text-lg font-medium leading-relaxed text-secondary border-l-2 pl-4 py-1" style={{ borderColor: `${selectedProject.theme.accent}40` }}>
                        {selectedProject.caseStudy ? selectedProject.caseStudy.context : selectedProject.summary}
                      </p>
                   </div>

                   {/* Project Metadata Details */}
                   {selectedProject.caseStudy && (selectedProject.caseStudy.client || selectedProject.caseStudy.industry) && (
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-black/5">
                        {selectedProject.caseStudy.client && (
                          <div className="flex flex-col gap-1.5">
                             <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Client</span>
                             <span className="text-xs font-bold text-text-primary">{selectedProject.caseStudy.client}</span>
                          </div>
                        )}
                        {selectedProject.caseStudy.industry && (
                          <div className="flex flex-col gap-1.5">
                             <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Industry</span>
                             <span className="text-xs font-bold text-text-primary">{selectedProject.caseStudy.industry}</span>
                          </div>
                        )}
                        {selectedProject.caseStudy.type && (
                          <div className="flex flex-col gap-1.5">
                             <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Project Type</span>
                             <span className="text-xs font-bold text-text-primary">{selectedProject.caseStudy.type}</span>
                          </div>
                        )}
                      </div>
                   )}

                   {/* Key Takeaways Grid */}
                   {selectedProject.caseStudy?.takeaways && (
                     <div className="flex flex-col gap-6">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Key Takeaways:</span>
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {selectedProject.caseStudy.takeaways.map((take, idx) => (
                          <div key={idx} className="flex flex-col gap-2 p-5 bg-white border border-black/5 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
                             <div className="flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: selectedProject.theme.accent }}></div>
                                <span className="text-[8px] font-black uppercase tracking-widest opacity-40">Key Takeaway {idx + 1}</span>
                             </div>
                             <p className="text-xs font-bold text-text-primary leading-tight">{take}</p>
                          </div>
                        ))}
                       </div>
                     </div>
                   )}

                   {selectedProject.caseStudy ? (
                     <>
                       {/* Objective */}
                       {selectedProject.caseStudy.objective && (
                         <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Objective:</span>
                            <p className="text-sm sm:text-base font-medium text-secondary leading-relaxed pl-2 border-l border-black/10">
                              {selectedProject.caseStudy.objective}
                            </p>
                         </div>
                       )}

                       {/* Scope */}
                       {selectedProject.caseStudy.scope && (
                         <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Scope Covered:</span>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {selectedProject.caseStudy.scope.map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                  <span className="h-5 w-5 rounded-md bg-white border border-black/5 flex items-center justify-center shrink-0 mt-0.5 shadow-sm" style={{ color: selectedProject.theme.accent }}>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                                  </span>
                                  <span className="text-sm font-medium text-secondary pt-0.5">{item}</span>
                                </li>
                              ))}
                            </ul>
                         </div>
                       )}

                       {/* Challenges */}
                       {selectedProject.caseStudy.challenges && (
                         <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Testing Challenges:</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {selectedProject.caseStudy.challenges.map((chal, idx) => (
                                <div key={idx} className="bg-bg-secondary border border-white/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                  <h4 className="font-bold text-text-primary text-sm leading-snug">{chal.title}</h4>
                                  {chal.desc && <p className="text-sm text-secondary leading-relaxed opacity-80 mt-2">{chal.desc}</p>}
                                </div>
                              ))}
                            </div>
                         </div>
                       )}
                       
                       {/* QA Solution */}
                       {selectedProject.caseStudy.approach && (
                         <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>QA Solution:</span>
                            <ul className="flex flex-col gap-4">
                              {selectedProject.caseStudy.approach.map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-center bg-bg-secondary p-4 rounded-2xl border border-white/60 shadow-sm">
                                  <span className="font-black text-xl opacity-20 shrink-0" style={{ color: selectedProject.theme.accent }}>{String(idx + 1).padStart(2, '0')}</span>
                                  <span className="text-sm font-medium text-text-primary">{item}</span>
                                </li>
                              ))}
                            </ul>
                         </div>
                       )}

                       {/* Scenarios */}
                       {selectedProject.caseStudy.scenarios && (
                         <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Representative Scenarios:</span>
                            <div className="flex flex-col gap-3">
                              {selectedProject.caseStudy.scenarios.map((scene, idx) => (
                                <div key={idx} className="text-sm font-medium text-secondary border-l-2 pl-4 py-1" style={{ borderColor: `${selectedProject.theme.accent}20` }}>
                                  {scene}
                                </div>
                              ))}
                            </div>
                         </div>
                       )}

                       {/* Result */}
                       {selectedProject.caseStudy.outcomes && (
                         <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Result:</span>
                            <ul className="flex flex-col gap-4">
                              {selectedProject.caseStudy.outcomes.map((item, idx) => (
                                <li key={idx} className="flex gap-3 items-start">
                                  <div className="h-6 w-6 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/20">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                                  </div>
                                  <span className="text-sm font-medium text-text-primary pt-0.5">{item}</span>
                                </li>
                              ))}
                            </ul>
                         </div>
                       )}

                       {/* Conclusion */}
                       {selectedProject.caseStudy.conclusion && (
                         <div className="flex flex-col gap-4 bg-bg-secondary/30 p-8 rounded-[2rem] border border-black/5 italic">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Conclusion:</span>
                            <p className="text-sm sm:text-base font-medium text-secondary leading-relaxed pl-4 border-l-2" style={{ borderColor: `${selectedProject.theme.accent}40` }}>
                              {selectedProject.caseStudy.conclusion}
                            </p>
                         </div>
                       )}

                     </>
                   ) : (
                     <div className="flex flex-col gap-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-text-primary border-b-2 pb-2 w-fit" style={{ borderColor: `${selectedProject.theme.accent}40` }}>Testing Focus:</span>
                        <ul className="flex flex-col gap-6">
                          {selectedProject.bullets?.map((bull, idx) => (
                            <li key={idx} className="flex gap-4 sm:gap-6 items-start group/li">
                              <div className="h-8 w-8 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center shrink-0 mt-0.5 transition-colors" style={{ color: selectedProject.theme.accent }}>
                                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                              </div>
                              <p className="text-sm sm:text-base font-medium text-secondary group-hover/li:text-text-primary transition-colors leading-relaxed pt-1 text-left">{bull}</p>
                            </li>
                          ))}
                        </ul>
                     </div>
                   )}

                   {/* Tech Stack Pills */}
                   <div className="flex flex-col gap-6 pt-10 border-t border-black/5">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Methodology & Tech Stack:</span>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-white border border-black/5 shadow-sm text-[9px] font-black uppercase tracking-[0.1em] text-secondary rounded-xl hover:text-text-primary transition-colors cursor-default">{t}</span>
                        ))}
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
