import { useEffect } from "react"

export function useParallaxVar(cssVarName = "--parallaxY", strength = 0.12) {
  useEffect(() => {
    const root = document.documentElement
    const onScroll = () => {
      const y = window.scrollY || 0
      root.style.setProperty(cssVarName, `${y * strength}px`)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [cssVarName, strength])
}

