import { useReveal } from "../../hooks/useReveal"

export function Section({ id, eyebrow, title, children }) {
  const [revealRef, isVisible] = useReveal()

  return (
    <section 
      id={id} 
      ref={revealRef}
      className={`scroll-mt-28 py-16 md:py-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div>
          {(eyebrow || title) && (
            <header className="mb-8 md:mb-10">
              {eyebrow && (
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[color:var(--ink1)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="mt-3 text-balance text-2xl font-semibold md:text-4xl text-glow">
                  <span className="text-grad">{title}</span>
                </h2>
              )}
              <div className="mt-4 h-px w-16 rounded-full bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] opacity-60" />
            </header>
          )}

          {children}
        </div>
      </div>
    </section>
  )
}

