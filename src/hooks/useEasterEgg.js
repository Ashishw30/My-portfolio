import { useEffect, useState } from "react"

export function useEasterEgg(secretCode) {
  const [unlocked, setUnlocked] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const code = (secretCode ?? []).map((c) => String(c).toLowerCase())
    if (code.length === 0) return

    const onKey = (e) => {
      const k = String(e.key || "").toLowerCase()
      const expected = code[progress]
      if (!expected) return

      if (k === expected) {
        const next = progress + 1
        if (next >= code.length) {
          setUnlocked(true)
          setProgress(0)
        } else {
          setProgress(next)
        }
      } else {
        setProgress(k === code[0] ? 1 : 0)
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [progress, secretCode])

  return { unlocked, setUnlocked }
}

