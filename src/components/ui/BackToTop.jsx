import { useEffect, useState } from "react"

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={[
        "fixed right-4 bottom-4 z-50 md:right-6 md:bottom-6",
        "glass neon-outline rounded-2xl px-4 py-3 text-sm font-semibold",
        show ? "" : "hidden",
      ].join(" ")}
      aria-label="Back to top"
      data-cursor="button"
    >
      ↑ Top
    </button>
  )
}

