import React, { useMemo, useEffect, useRef, useState } from "react"
import { portfolioData } from "./data/portfolioData"
import { useScrollSpy } from "./hooks/useScrollSpy"

/* ================= ZEN COMPONENTS ================= */
import { Hero } from "./components/sections/ZenHero"
import { Manifesto } from "./components/sections/ZenManifesto"
import { Stack } from "./components/sections/ZenStack"
import { Projects } from "./components/sections/ZenProjects"
import { Experience } from "./components/sections/ZenExperience"
import { QualityLab } from "./components/sections/ZenQualityLab"
import { Certificates } from "./components/sections/ZenCertificates"
import { Contact } from "./components/sections/ZenContact"
import { Footer } from "./components/layout/ZenFooter"
import { Chatbot } from "./components/ui/ZenChatbot"
import { ResumePreview } from "./components/ui/ZenResumePreview"
import { Logo } from "./components/ui/Logo"

export default function App() {
  const cursorRef = useRef(null)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollY = useRef(0)
  const navItems = useMemo(() => [
    { id: "home", label: "Home", color: "#3B82F6", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg> },
    { id: "about", label: "Persona", color: "#10B981", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
    { id: "skills", label: "Expertise", color: "#F59E0B", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
    { id: "projects", label: "Portfolio", color: "#6366F1", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg> },
    { id: "qa-lab", label: "Execution Suite", color: "#EF4444", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 17l6-6-6-6M12 19h8"/></svg> },
    { id: "experience", label: "History", color: "#8B5CF6", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
    { id: "certificates", label: "Certificates", color: "#06B6D4", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 2.5L22 3l-11 5L12 15z"/></svg> },
    { id: "contact", label: "Collaborate", color: "#EC4899", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
  ], [])

  const sectionIds = useMemo(() => navItems.map(item => item.id), [navItems])
  const activeSectionId = useScrollSpy(sectionIds)

  const [scrollProgress, setScrollProgress] = useState(0);

  // 🖱️ Custom Cursor & Page Progress Logic
  useEffect(() => {
    const cursor = cursorRef.current
    const onMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      if (window.innerWidth < 768) {
         if (winScroll > lastScrollY.current && winScroll > 120) {
            setIsHeaderVisible(false);
         } else {
            setIsHeaderVisible(true);
         }
      } else {
         setIsHeaderVisible(true);
      }
      lastScrollY.current = winScroll;
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          } else {
            entry.target.classList.remove("active")
          }
        })
      },
      { threshold: 0.05 }
    )

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))

    // 🕊️ Luxurious Smooth Scroll Engine (Native Implementation)
    // We apply it only if the user moves the wheel or touches, to create a damped feel.
    // In this premium portfolio, we use CSS scroll-behavior: smooth for most cases, 
    // but we can add a 'scroll-snap-type' for a more deliberate 'manual' feel.

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className={`relative overflow-x-hidden min-h-screen ${menuOpen ? 'h-screen overflow-hidden' : ''}`}>


      {/* 🌿 Global Enhancements */}
      <div className="grain-overlay" />
      <div ref={cursorRef} className="cursor-follow" />


      {/* 🌿 Mobile Menu Overlay (Refined Soft Grey Theme) */}
      <div className={`fixed inset-0 z-[2000] bg-[#e1e5e8] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Deep Animated Background Orbs (Subtle Grey Mix) */}
        <div className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-400/10 blur-[120px] rounded-full animate-orb-drift opacity-40"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-slate-400/10 blur-[100px] rounded-full animate-orb-drift-delayed opacity-30"></div>
        </div>

        {/* Vertical "PORTFOLIO" Side Label (Centered Fancy Version) */}
        <div className={`absolute right-0 top-0 h-full flex flex-col items-center justify-center gap-8 pr-4 transition-all duration-1000 delay-300 ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <div className="w-px flex-grow bg-gradient-to-b from-transparent to-slate-300/40 opacity-40"></div>
          <span
            className="text-[16px] font-black tracking-[1.4em] text-slate-400 uppercase opacity-25 pointer-events-none"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Portfolio
          </span>
          <div className="w-px flex-grow bg-gradient-to-t from-transparent to-slate-300/40 opacity-40"></div>
        </div>

        <div className="flex flex-col h-full p-10 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <div className={`flex items-center gap-4 transition-all duration-500 delay-300 ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Logo size={46} className="rounded-2xl border border-black/5 p-1 bg-white shadow-sm" />
              <div className="flex flex-col">
                <span className="text-[14px] font-black text-text-primary uppercase tracking-tighter leading-none">Ashish Wani</span>
                <span className="text-[8px] font-black text-accent uppercase tracking-[0.15em] mt-1.5 opacity-60">Manual Tester</span>
              </div>
            </div>
            <button 
              onClick={() => setMenuOpen(false)}
              className={`h-11 w-11 flex items-center justify-center rounded-2xl bg-white border border-black/5 text-text-primary hover:bg-accent hover:text-white transition-all duration-700 shadow-sm ${menuOpen ? 'rotate-0 scale-100' : 'rotate-180 scale-50'}`}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className={`h-[1px] bg-black/5 w-full mb-6 transition-all duration-1000 delay-400 ${menuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <nav className="flex flex-col gap-0.5 justify-center flex-1">
            {navItems.map((item, i) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`relative py-2 rounded-2xl group transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
                  style={{ transitionDelay: `${(i + 1) * 60}ms` }}
                >
                  <div className="absolute inset-0 -mx-4 rounded-xl bg-white transition-all duration-500 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 shadow-sm border border-black/5"></div>
                  
                  <div className="relative flex items-center gap-5">
                    <div className="relative h-9 w-9 shrink-0 flex items-center justify-center">
                        {/* 🌟 3D Spectral Halo */}
                        <div 
                          className="absolute inset-0 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        {/* 🧊 Glass-Morphic Container */}
                        <div 
                          className="absolute inset-0 rounded-xl border border-white/60 bg-white/40 backdrop-blur-[2px] shadow-sm group-hover:scale-110 transition-transform duration-500"
                          style={{ borderColor: `${item.color}40` }}
                        ></div>
                        {/* 🎨 Colorful 3D Icon */}
                        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: item.color }}>
                           {React.cloneElement(item.icon, { width: 18, height: 18, strokeWidth: 3 })}
                        </div>
                     </div>
                     <span className="text-lg font-black tracking-tighter text-text-primary group-hover:text-accent transition-colors duration-300">
                       {item.label}
                     </span>
                     <div className="ml-auto opacity-0 -translate-x-2 text-accent group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                     </div>
                  </div>
                </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 🌿 Navbar */}
      <nav className={`navbar w-full flex justify-center fixed top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-[1000] ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
        <div className="container w-full px-6 flex justify-between items-center h-full">
           <div className="flex items-center gap-3">
              <Logo size={38} className="transition-all active:scale-90" />
              <div className="flex flex-col">
                 <span className="text-[14px] font-black tracking-tighter uppercase leading-none">{portfolioData.profile.name}</span>
                 <span className="text-[8px] font-black text-accent uppercase tracking-[0.15em] mt-1.5 opacity-60 leading-none">Manual Tester</span>
              </div>
           </div>
        
        <div className="hidden md:flex items-center gap-5">
          {navItems.filter(i => i.id !== 'contact').map(item => {
            const isActive = activeSectionId === item.id
            return (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`group relative text-[11px] font-black tracking-[0.05em] uppercase transition-all duration-300 pb-1 ${isActive ? 'text-accent' : 'text-text-primary/40 hover:text-text-primary'}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-500 ease-quint ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn btn-primary px-5 py-2 text-[10px] font-bold tracking-widest uppercase md:inline-flex hidden transition-all hover:scale-105 active:scale-95 opacity-80 hover:opacity-100" style={{boxShadow: '0 4px 12px rgba(0,0,0,0.12)'}}>
            Collaborate
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-bg-secondary border border-border-soft hover:bg-black hover:text-white transition-all group"
          >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:scale-110 transition-transform"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        </div>
      </nav>

      <main>
        <Hero 
          data={portfolioData.profile} 
          onOpenResume={() => setResumeOpen(true)}
        />
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>
        
        <section id="about" className="section container reveal">
          <Manifesto data={portfolioData.about} />
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="skills" className="section bg-secondary reveal">
          <div className="container">
            <Stack categories={portfolioData.skills.categories} />
          </div>
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="projects" className="section container reveal">
            <Projects items={portfolioData.projects} />
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="qa-lab" className="section bg-secondary reveal">
          <div className="container">
             <QualityLab 
                demos={portfolioData.demos} 
                dashboard={portfolioData.dashboard} 
                howITest={portfolioData.howITest}
             />
          </div>
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="experience" className="section container reveal">
          <Experience history={portfolioData.experience} />
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="certificates" className="section bg-secondary reveal">
           <div className="container">
              <Certificates items={portfolioData.certificates} />
           </div>
        </section>
        <div className="h-[2px] bg-black max-w-7xl mx-auto"></div>

        <section id="contact" className="section bg-primary reveal">
           <div className="container">
              <Contact profile={portfolioData.profile} />
           </div>
        </section>
      </main>

      <Chatbot profile={portfolioData.profile} />

      <Footer 
        data={portfolioData} 
        navItems={navItems} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {resumeOpen && (
        <ResumePreview 
          profile={portfolioData.profile} 
          history={portfolioData.experience}
          onClose={() => setResumeOpen(false)} 
        />
      )}
    </div>
  )
}
