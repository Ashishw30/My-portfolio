import { useEffect, useRef } from "react"

function rand(a, b) {
  return a + Math.random() * (b - a)
}

export function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1

    const particles = []
    const max = 72

    const resize = () => {
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      while (particles.length < max) {
        particles.push({
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.8, 2.2),
          vx: rand(-0.12, 0.12),
          vy: rand(-0.06, 0.06),
          a: rand(0.08, 0.22),
        })
      }
    }

    const step = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = w + 20
        if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        if (p.y > h + 20) p.y = -20

        ctx.beginPath()
        ctx.fillStyle = `rgba(114,217,255,${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Connect nearby particles lightly
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08
            ctx.strokeStyle = `rgba(191,243,255,${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      raf = window.requestAnimationFrame(step)
    }

    resize()
    raf = window.requestAnimationFrame(step)

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onVis = () => {
      if (document.hidden) {
        window.cancelAnimationFrame(raf)
      } else {
        raf = window.requestAnimationFrame(step)
      }
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      window.cancelAnimationFrame(raf)
      ro.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  )
}

