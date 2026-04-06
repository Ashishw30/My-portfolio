import { useEffect, useMemo, useState } from "react"

export function useScrollSpy(sectionIds, options = {}) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    if (ids.length === 0) return

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: options.rootMargin ?? "-80px 0px -60% 0px",
        threshold: options.threshold ?? [0, 0.1, 0.2, 0.5, 0.8, 1],
      },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids, options.rootMargin, options.threshold])

  return activeId
}

