import { useEffect } from "react"

/**
 * Locks page scroll by adding `.modal-open` to <html>.
 * Works on all browsers including iOS Safari.
 * @param {boolean} isLocked - When true, scroll is locked.
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return

    // Save scroll position to restore it (prevents page jump on iOS)
    const scrollY = window.scrollY
    document.documentElement.classList.add("modal-open")
    document.documentElement.style.top = `-${scrollY}px`

    return () => {
      document.documentElement.classList.remove("modal-open")
      document.documentElement.style.top = ""
      // Restore scroll position
      window.scrollTo(0, scrollY)
    }
  }, [isLocked])
}
