import { useEffect } from "react"
import { useScrollLock } from "../../hooks/useScrollLock"

export function Modal({ open, title, children, onClose }) {
  useScrollLock(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-5">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />
      <div className="glass-strong neon-outline relative w-full max-w-3xl rounded-3xl p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white md:text-2xl">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="glass rounded-2xl px-3 py-2 text-sm text-[color:var(--ink1)] transition hover:text-white"
            data-cursor="button"
          >
            Close
          </button>
        </div>
        <div className="mt-5 text-[color:var(--ink1)]">{children}</div>
      </div>
    </div>
  )
}

