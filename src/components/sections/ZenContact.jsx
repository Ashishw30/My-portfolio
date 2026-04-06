import React, { useState } from "react"

export function Contact({ profile }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.target;
    
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mvzvgvbo";
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      
      if (response.ok) {
        form.reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative">
      {/* Left Column: Communications Hub */}
      <div className="lg:col-span-6 flex flex-col gap-6 relative z-20">
        <div className="flex flex-col gap-4 text-left items-start reveal group w-full">
          <div className="text-eyebrow uppercase tracking-[0.3em] font-black text-[9px] py-1.5 px-4 bg-accent/5 rounded-full text-accent shadow-sm inline-block mb-1">Get In Touch</div>
          <h2 className="max-w-xl text-4xl lg:text-5xl font-black tracking-tighter">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-accent to-sky-400">Connect</span>.
          </h2>
          <p className="max-w-md opacity-70 text-secondary leading-relaxed text-sm md:text-base border-l-2 border-accent/20 pl-6 py-1 font-medium mt-1">
             Looking for an expert to elevate your QA strategy? Establish a direct connection here to discuss collaboration and system audits.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          {/* Email Hardware Module */}
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer" className="group relative bg-bg-secondary border border-white/60 rounded-[2rem] p-5 sm:p-6 flex items-center gap-6 transition-all duration-500 hover:-translate-y-1 overflow-hidden reveal reveal-delay-1" style={{ boxShadow: 'var(--skeuo-outer)', zIndex: 30 }}>
            {/* Spectral Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-[#EA4335]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-45 pointer-events-none blur-3xl"></div>
            
            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-black/5 transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:-rotate-3 relative z-10" style={{ boxShadow: 'var(--skeuo-outer)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7l-9 7-9-7v14H1.5c-.85 0-1.5-.65-1.5-1.5v-15c0-1.15.85-1.75 1.75-1.75l1.25.75L12 11l9-7.5 1.25-.75c.9 0 1.75.6 1.75 1.75z" fill="#EA4335" />
                <path d="M3 7v14h3V9.5l6 4.67L18 9.5V21h3V7l-9 7-9-7z" fill="#FBBC05" />
                <path d="M21 7v14h1.5c.85 0 1.5-.65 1.5-1.5v-15c0-1.15-.85-1.75-1.75-1.75L21 7z" fill="#34A853" />
                <path d="M0 4.5v15C0 20.35.65 21 1.5 21H3V7L0 4.5z" fill="#4285F4" />
              </svg>
            </div>
            
            <div className="flex flex-col relative z-10 overflow-hidden">
              <div className="flex items-center gap-2 mb-1.5 bg-white/50 w-fit px-2.5 py-1 rounded-full border border-black/5">
                 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
                 <span className="text-[7.5px] font-black uppercase tracking-widest text-emerald-600">Direct: Email</span>
              </div>
              <span className="text-sm sm:text-base font-black tracking-tight text-text-primary group-hover:text-[#EA4335] transition-colors truncate">{profile.email}</span>
            </div>
          </a>

          {/* LinkedIn Hardware Module */}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="group relative bg-bg-secondary border border-white/60 rounded-[2rem] p-5 sm:p-6 flex items-center gap-6 transition-all duration-500 hover:-translate-y-1 overflow-hidden reveal reveal-delay-2" style={{ boxShadow: 'var(--skeuo-outer)' }}>
            {/* Spectral Hover Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-[#0077b5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-45 pointer-events-none blur-3xl"></div>
            
            <div className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 flex items-center justify-center rounded-2xl bg-white border border-black/5 transition-all duration-500 shadow-sm group-hover:scale-110 group-hover:rotate-3 relative z-10" style={{ boxShadow: 'var(--skeuo-outer)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            
            <div className="flex flex-col relative z-10 overflow-hidden">
              <div className="flex items-center gap-2 mb-1.5 bg-white/50 w-fit px-2.5 py-1 rounded-full border border-black/5">
                 <span className="h-1.5 w-1.5 rounded-full bg-[#0077b5] shadow-[0_0_8px_rgba(0,119,181,0.5)]"></span>
                 <span className="text-[7.5px] font-black uppercase tracking-widest text-[#0077b5]">Network: LinkedIn</span>
              </div>
              <span className="text-sm sm:text-base font-black tracking-tight text-text-primary group-hover:text-[#0077b5] transition-colors truncate">Connect on LinkedIn</span>
            </div>
          </a>
        </div>
      </div>

      {/* Minimalist Contact Hardware Module */}
      {/* Minimalist Contact Hardware Module */}
      <div 
        className="lg:col-span-6 bg-bg-secondary border border-white/60 p-6 sm:p-8 relative flex flex-col gap-6 rounded-[2rem] reveal shadow-sm overflow-hidden"
        style={{ boxShadow: 'var(--skeuo-outer)' }}
      >
        {/* Soft Multicolor Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-sky-400/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-400/15 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[30%] w-48 h-48 bg-amber-400/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

        <div className="border-b border-black/5 pb-3 relative z-10">
           <h3 className="text-lg sm:text-xl font-black tracking-tighter uppercase">Send a Message</h3>
        </div>

        <form 
          className="flex flex-col gap-4" 
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name: Minimalist Input */}
            <div className="group/input flex flex-col gap-1.5 relative">
              <label className="text-[8px] font-black uppercase tracking-[0.25em] text-text-primary ml-1 opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-accent transition-all duration-300">
                 Full Name
              </label>
              <div className="relative rounded-2xl transition-all duration-500 bg-bg-primary overflow-hidden" style={{ boxShadow: 'var(--skeuo-inner)' }}>
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary/20 group-focus-within/input:text-accent transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                  <input required name="name" type="text" className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-[16px] sm:text-[12px] font-bold text-text-primary placeholder-text-primary/5 transition-all" placeholder="Enter Name" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within/input:w-full bg-accent transition-all duration-700 z-10"></div>
              </div>
            </div>

            {/* Email: Minimalist Input */}
            <div className="group/input flex flex-col gap-1.5 relative">
              <label className="text-[8px] font-black uppercase tracking-[0.25em] text-text-primary ml-1 opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-accent transition-all duration-300">
                 Email Address
              </label>
              <div className="relative rounded-2xl transition-all duration-500 bg-bg-primary overflow-hidden" style={{ boxShadow: 'var(--skeuo-inner)' }}>
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary/20 group-focus-within/input:text-accent transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <input required name="email" type="email" className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-[16px] sm:text-[12px] font-bold text-text-primary placeholder-text-primary/5 transition-all" placeholder="Enter Email" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within/input:w-full bg-accent transition-all duration-700 z-10"></div>
              </div>
            </div>
          </div>

          {/* Transmission Topic */}
          <div className="group/input flex flex-col gap-1.5 relative">
            <label className="text-[8px] font-black uppercase tracking-[0.25em] text-text-primary ml-1 opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-accent transition-all duration-300">
                Subject
              </label>
            <div className="relative rounded-2xl transition-all duration-500 bg-bg-primary overflow-hidden" style={{ boxShadow: 'var(--skeuo-inner)' }}>
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-primary/20 group-focus-within/input:text-accent transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                </div>
                <input required name="subject" type="text" className="w-full pl-10 pr-4 py-2.5 bg-transparent outline-none text-[16px] sm:text-[12px] font-bold text-text-primary placeholder-text-primary/5 transition-all" placeholder="Subject" />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within/input:w-full bg-accent transition-all duration-700 z-10"></div>
            </div>
          </div>

          {/* Payload Area */}
          <div className="group/input flex flex-col gap-1.5 relative">
            <label className="text-[8px] font-black uppercase tracking-[0.25em] text-text-primary ml-1 opacity-30 group-focus-within/input:opacity-100 group-focus-within/input:text-accent transition-all duration-300">
                Message
              </label>
            <div className="relative rounded-2xl transition-all duration-500 bg-bg-primary overflow-hidden" style={{ boxShadow: 'var(--skeuo-inner)' }}>
                <div className="absolute left-3.5 top-4 text-text-primary/20 group-focus-within/input:text-accent transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <textarea required name="message" rows="3" className="w-full pl-10 pr-4 pt-3.5 pb-2.5 bg-transparent outline-none text-[16px] sm:text-[12px] font-bold text-text-primary placeholder-text-primary/5 transition-all resize-none custom-scrollbar" placeholder="How can I help you?"></textarea>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-focus-within/input:w-full bg-accent transition-all duration-700 z-10"></div>
            </div>
          </div>

          {/* Refined Hardware Submit Switch */}
          <button type="submit" disabled={status === "submitting"} className="mt-2 w-full h-12 sm:h-14 rounded-2xl bg-black text-white font-black uppercase tracking-[0.3em] text-[9px] hover:shadow-[0_15px_30px_-10px_rgba(9,132,227,0.3)] active:scale-[0.98] transition-all group flex items-center justify-center relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
            {/* Prism Animation layer */}
            <div className={`absolute inset-0 bg-gradient-to-r ${status === 'success' ? 'from-emerald-500 via-emerald-400 to-emerald-500 opacity-100' : 'from-[#0984E3] via-[#00CEC9] to-[#0984E3] opacity-0 group-hover:opacity-100 group-hover:animate-prism-shine'} transition-opacity duration-700 bg-[length:200%_100%]`}></div>
            <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${status === 'success' ? 'opacity-0' : 'group-hover:opacity-0'}`}></div>
            
            <div className="flex items-center gap-3.5 relative z-10 pointer-events-none">
               <span className="relative group-hover:-translate-x-0.5 transition-transform duration-500 uppercase">
                 {status === "submitting" ? "Transmitting..." : status === "success" ? "Message Sent!" : status === "error" ? "Transmission Failed" : "Send Message"}
               </span>
               <div className={`h-8 w-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 shadow-sm ${status === 'success' ? 'bg-white/20 text-white rotate-0' : 'group-hover:bg-white/20 group-hover:text-white group-hover:rotate-45'}`}>
                  {status === "success" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 2L11 13m11-11L15 22l-4-9-9-4 22-11z"/></svg>
                  )}
               </div>
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}
