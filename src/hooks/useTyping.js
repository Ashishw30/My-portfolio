import { useEffect, useMemo, useState } from "react"

export function useTyping(phrases, { typeMs = 42, pauseMs = 900, deleteMs = 24 } = {}) {
  const list = useMemo(() => (phrases ?? []).filter(Boolean), [phrases])
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [text, setText] = useState("")
  const [mode, setMode] = useState("type") // type | pause | delete

  useEffect(() => {
    if (list.length === 0) return
    const full = list[phraseIdx % list.length]

    let t = null

    if (mode === "type") {
      if (text.length < full.length) {
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), typeMs)
      } else {
        t = setTimeout(() => setMode("pause"), typeMs)
      }
    }

    if (mode === "pause") {
      t = setTimeout(() => setMode("delete"), pauseMs)
    }

    if (mode === "delete") {
      if (text.length > 0) {
        t = setTimeout(() => setText((s) => s.slice(0, -1)), deleteMs)
      } else {
        t = setTimeout(() => {
          setPhraseIdx((i) => (i + 1) % list.length)
          setMode("type")
        }, typeMs)
      }
    }

    return () => t && clearTimeout(t)
  }, [list, phraseIdx, text, mode, typeMs, pauseMs, deleteMs])

  return { text, phrase: list[phraseIdx % (list.length || 1)] ?? "" }
}

