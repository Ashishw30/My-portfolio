import React from "react"
import { Logo } from "../ui/Logo"

export function Footer({ data, navItems, onOpenResume }) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: data.profile.links.linkedin,
      icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    },
    {
      name: 'Email',
      url: 'mailto:ashishwani808@gmail.com',
      icon: <svg width="11" height="11" viewBox="0 0 24 24"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7l-9 7-9-7v14H1.5c-.85 0-1.5-.65-1.5-1.5v-15c0-1.15.85-1.75 1.75-1.75l1.25.75L12 11l9-7.5 1.25-.75c.9 0 1.75.6 1.75 1.75z" fill="#EA4335" /><path d="M3 7v14h3V9.5l6 4.67L18 9.5V21h3V7l-9 7-9-7z" fill="#FBBC05" /><path d="M21 7v14h1.5c.85 0 1.5-.65 1.5-1.5v-15c0-1.15-.85-1.75-1.75-1.75L21 7z" fill="#34A853" /><path d="M0 4.5v15C0 20.35.65 21 1.5 21H3V7L0 4.5z" fill="#4285F4" /></svg>
    }
  ]

  return (
    <footer className="relative bg-bg-secondary border-t border-border-soft overflow-hidden">
      {/* Top Kinetic Bar */}
      <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
        <div className="h-full w-[200%] bg-gradient-to-r from-sky-500 via-accent to-emerald-500 animate-prism-shine bg-[length:50%_100%]"></div>
      </div>

      <div className="container mx-auto px-5 py-3 relative z-10">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden sm:flex justify-between items-center gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Logo size={34} className="transition-all active:scale-95" />
            <div className="flex flex-col">
              <span className="text-[13px] font-black text-text-primary uppercase tracking-tighter leading-none">{data.profile.name}</span>
              <span className="text-[8px] font-black text-accent uppercase tracking-[0.15em] mt-1 opacity-60">Manual Tester</span>
            </div>
          </div>

          {/* Center: Nav Links */}
          <div className="flex items-center gap-5">
            {navItems.slice(0, 3).map(item => (
              <a key={item.id} href={`#${item.id}`} className="text-[9px] font-black uppercase tracking-[0.2em] text-text-primary/35 hover:text-accent transition-colors">
                {item.label}
              </a>
            ))}
            <button onClick={onOpenResume} className="text-[9px] font-black uppercase tracking-[0.2em] text-text-primary/35 hover:text-accent transition-colors">Resume</button>
          </div>

          {/* Right: Social + Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                  className="h-7 w-7 rounded-md bg-white border border-black/5 flex items-center justify-center text-text-primary/30 hover:text-white transition-all duration-300 relative overflow-hidden group/soc shadow-sm"
                  style={{ boxShadow: 'var(--skeuo-outer)' }}
                >
                  <div className="absolute inset-0 bg-black translate-y-full group-hover/soc:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10">{s.icon}</div>
                </a>
              ))}
            </div>
            <span className="text-[7.5px] font-bold text-text-primary/25 uppercase tracking-[0.1em]">
              &copy; {new Date().getFullYear()} Ashish Prakash Wani. All rights reserved.
            </span>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex sm:hidden flex-col items-center gap-2.5 py-1">
          {/* Row 1: Logo + Links + Socials all inline */}
          <div className="flex items-center justify-between w-full gap-3">
            {/* Logo only */}
            <Logo size={30} className="transition-all active:scale-95 shrink-0" />

            {/* Nav links */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {navItems.slice(0, 3).map(item => (
                <a key={item.id} href={`#${item.id}`} className="text-[8px] font-black uppercase tracking-[0.15em] text-text-primary/40 hover:text-accent transition-colors">
                  {item.label}
                </a>
              ))}
              <button onClick={onOpenResume} className="text-[8px] font-black uppercase tracking-[0.15em] text-text-primary/40 hover:text-accent transition-colors">Resume</button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1.5 shrink-0">
              {socialLinks.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                  className="h-6 w-6 rounded-md bg-white border border-black/5 flex items-center justify-center text-text-primary/30 hover:text-white transition-all duration-300 relative overflow-hidden group/soc shadow-sm"
                  style={{ boxShadow: 'var(--skeuo-outer)' }}
                >
                  <div className="absolute inset-0 bg-black translate-y-full group-hover/soc:translate-y-0 transition-transform duration-300"></div>
                  <div className="relative z-10">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Row 2: Copyright */}
          <span className="text-[7px] font-bold text-text-primary/25 uppercase tracking-[0.08em] text-center">
            &copy; {new Date().getFullYear()} Ashish Prakash Wani. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}
