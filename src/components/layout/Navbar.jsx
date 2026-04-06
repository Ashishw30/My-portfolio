import { useEffect, useMemo, useState } from "react"
import { useScrollSpy } from "../../hooks/useScrollSpy"
import { portfolioData } from "../../data/portfolioData"

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Navbar({ items }) {
  const primary = items?.primary ?? []
  const secondary = items?.secondary ?? []
  const all = useMemo(() => [...primary, ...secondary], [primary, secondary])
  const ids = useMemo(() => all.map((i) => i.id), [all])
  const activeId = useScrollSpy(ids)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-5">
        <div
          className={[
            "pointer-events-auto neon-outline rounded-2xl transition-all duration-500",
            "bg-black/35 backdrop-blur-xl",
            "border border-white/10",
            scrolled ? "shadow-[0_25px_70px_rgba(0,0,0,0.55),0_0_60px_rgba(173, 232, 244, 0.12)]" : "",
          ].join(" ")}
        >
          <div className="grid grid-cols-12 items-center gap-2 px-3 py-2 md:px-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToId("home")
              }}
              className="col-span-6 flex items-center gap-4 rounded-2xl px-2 py-2 transition md:col-span-3 group"
              data-cursor="link"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black shadow-inner transition-transform group-hover:scale-110 grid place-items-center">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="relative z-10 drop-shadow-[0_0_8px_rgba(173,232,244,0.4)]">
                  <defs>
                    <linearGradient id="logoGrad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--accentA)" />
                      <stop offset="100%" stopColor="var(--accentB)" />
                    </linearGradient>
                  </defs>
                  {/* Hexagonal Frame */}
                  <path d="M17 2L30 9.5V24.5L17 32L4 24.5V9.5L17 2Z" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                  {/* Stylized Logo Body */}
                  <path 
                    d="M8 22L13.5 7L17 17L20.5 7L26 22" 
                    stroke="url(#logoGrad)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Integrated Checkmark/A-Bar */}
                  <path 
                    d="M11 16H16L19 20" 
                    stroke="var(--accentA)" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="opacity-80"
                  />
                </svg>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accentA)_0%,transparent_70%)] opacity-10" />
              </span>
              <div className="flex flex-col">
                <p className="text-sm font-bold tracking-tight text-white uppercase">{portfolioData.profile.name}</p>
                <div className="flex items-center gap-1.5">
                   <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                   <p className="text-[9px] font-bold text-[color:var(--ink1)] tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">QA ENGINEER</p>
                </div>
              </div>
            </a>

            <nav className="col-span-6 hidden items-center justify-center gap-1 md:col-span-6 md:flex">
              {primary.filter(item => item.id !== 'home' && item.id !== 'contact').map((item) => {
                const isActive = item.id === activeId
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(item.id)
                    }}
                    className={[
                      "group flex items-center gap-2 rounded-xl px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap",
                      isActive
                        ? "bg-white/10 text-white shadow-[0_0_20px_rgba(173, 232, 244, 0.15)] border border-white/10"
                        : "text-white/40 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                    data-cursor="link"
                  >
                    <span className="opacity-60 transition-opacity group-hover:opacity-100 flex items-center"><NavIcon name={item.icon} /></span>
                    <span>{item.label}</span>
                  </a>
                )
              })}
            </nav>

            <div className="col-span-6 flex items-center justify-end gap-2 md:col-span-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId("contact")
                }}
                className="hidden rounded-xl bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[color:var(--bg0)] shadow-[0_5px_20px_rgba(173, 232, 244, 0.3)] transition-all hover:scale-[1.05] active:scale-95 md:inline-flex"
                data-cursor="cta"
              >
                Collaborate
              </a>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="chip inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-[color:var(--ink1)] md:hidden"
                aria-label="Open menu"
                data-cursor="button"
              >
                <span className="text-white/80">
                  <NavIcon name="menu" />
                </span>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="pointer-events-auto fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute left-0 top-0 h-full w-[86vw] max-w-[360px] p-4">
            <div className="glass-strong neon-outline flex h-full flex-col rounded-3xl">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                <p className="text-sm font-semibold text-white">Menu</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="chip rounded-2xl px-3 py-2 text-sm text-[color:var(--ink1)] transition hover:bg-white/10 hover:text-white"
                  data-cursor="button"
                >
                  Close
                </button>
              </div>

              <div className="flex-1 overflow-auto p-3">
                <div className="grid grid-cols-1 gap-2">
                  {all.map((item) => {
                    const isActive = item.id === activeId
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          setOpen(false)
                          scrollToId(item.id)
                        }}
                        className={[
                          "group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition",
                          isActive
                            ? "border-[color:var(--ice1)]/35 bg-white/7 text-white"
                            : "border-white/10 bg-black/15 text-[color:var(--ink1)] hover:bg-white/6 hover:text-white",
                        ].join(" ")}
                        data-cursor="link"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 text-white/85 group-hover:text-white transition-colors">
                          <NavIcon name={item.icon} />
                        </span>
                        <span className="font-semibold">{item.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 p-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToId("contact")
                  }}
                  className="block rounded-2xl bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white"
                  data-cursor="cta"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavIcon({ name }) {
  const common = { width: 18, height: 18, fill: "none", stroke: "currentColor", strokeWidth: 1.8 }
  switch (name) {
    case "home":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20v-9.5Z" />
          <path d="M9.5 21.5v-6h5v6" />
        </svg>
      )
    case "user":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 21a8 8 0 1 0-16 0" />
          <path d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        </svg>
      )
    case "spark":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8Z" />
          <path d="M5 20l.8-2.8L9 16l-3.2-1.2L5 12l-.8 2.8L1 16l3.2 1.2Z" />
        </svg>
      )
    case "grid":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
        </svg>
      )
    case "timeline":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6h.01M6 12h.01M6 18h.01" />
          <path d="M10 6h10M10 12h10M10 18h10" />
        </svg>
      )
    case "mail":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      )
    case "lab":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 2v6l-5.5 9.5A3 3 0 0 0 7.1 22h9.8a3 3 0 0 0 2.6-4.5L14 8V2" />
          <path d="M8.5 14h7" />
        </svg>
      )
    case "menu":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      )
    default:
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 18h.01" />
          <path d="M12 14a4 4 0 1 0-4-4" />
        </svg>
      )
  }
}

