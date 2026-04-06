import { useMemo, useState, useEffect } from "react"

const BUGS = [
  {
    id: "bug-1",
    title: "Null-Safety Leak",
    description: "Password field accepts spaces-only (should be blocked)",
    hint: "Try typing only spaces in password.",
    type: "Validation"
  },
  {
    id: "bug-2",
    title: "Regex Edge Case",
    description: "Email validation allows 'a@b' (missing top-level domain)",
    hint: "Try 'a@b' as an email and watch it pass.",
    type: "Data Integrity"
  },
  {
    id: "bug-3",
    title: "Race Condition",
    description: "Submit button remains active during async 'processing'",
    hint: "Click login multiple times quickly while it's loading.",
    type: "Concurreny"
  },
]

export function TestMySkills() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [toasts, setToasts] = useState([])
  const [found, setFound] = useState({})

  const emailIsValid = useMemo(() => {
    return email.trim() !== "" && /^[^\s@]+@[^\s@]+$/.test(email.trim())
  }, [email])

  const passwordIsValid = useMemo(() => {
    return password.length >= 6
  }, [password])

  const canSubmit = email.length > 0 && password.length > 0

  const pushToast = (msg, type = "info") => {
    const id = `${Date.now()}-${Math.random()}`
    setToasts((t) => [{ id, msg, type }, ...t].slice(0, 3))
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000)
  }

  const submit = async () => {
    if (loading && !found["bug-3"]) {
      pushToast("🚀 RACE CONDITION DETECTED!", "warn")
    }
    if (loading) return
    
    setLoading(true)
    pushToast("📡 Initiating auth handshake...", "info")
    
    await new Promise((r) => setTimeout(r, 1200))
    
    setLoading(false)
    pushToast("✅ Demo server rejected credentials", "error")
  }

  const toggleFound = (id) =>
    setFound((f) => ({ ...f, [id]: !f[id] }))

  const foundCount = Object.values(found).filter(Boolean).length

  return (
    <div className="flex flex-col gap-6 w-full min-w-0">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8">
        {/* ── Sandbox Form ── */}
        <div className="xl:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-black/40 p-6 md:p-8 flex flex-col gap-6 shadow-2xl h-full">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[color:var(--accentB)] uppercase opacity-60">Sandbox Environment</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">Vulnerability Lab</h3>
              <p className="max-w-md text-xs leading-relaxed text-[color:var(--ink1)] opacity-70">
                This form has 3 intentional QA flaws. Interact as a professional tester would.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">Test Email</label>
                <div className="relative group">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className={`w-full rounded-xl border px-4 py-3 text-xs bg-white/5 outline-none transition-all font-mono ${
                      email && !emailIsValid ? "border-rose-500/30 ring-1 ring-rose-500/10" : "border-white/5 focus:border-[color:var(--accentA)]/30"
                    }`}
                  />
                  {email && (
                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold ${emailIsValid ? "text-emerald-400" : "text-rose-400"}`}>
                      {emailIsValid ? "PASS" : "FAIL"}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">Test Password</label>
                <div className="relative group">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password..."
                    className={`w-full rounded-xl border px-4 py-3 text-xs bg-white/5 outline-none transition-all font-mono ${
                      password && !passwordIsValid ? "border-rose-500/30 ring-1 ring-rose-500/10" : "border-white/5 focus:border-[color:var(--accentA)]/30"
                    }`}
                  />
                  {password && (
                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold ${passwordIsValid ? "text-emerald-400" : "text-rose-400"}`}>
                      {passwordIsValid ? "PASS" : "FAIL"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 py-2 mt-auto">
              <button
                onClick={submit}
                className={`relative flex items-center justify-center gap-3 rounded-xl px-8 py-3 text-xs font-bold transition-all ${
                   loading 
                    ? "bg-white/10 text-white cursor-wait" 
                    : "bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)] text-[#06090f] shadow-lg hover:scale-[1.02] active:scale-95"
                }`}
              >
                {loading && <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/20 border-t-white" />}
                {loading ? "PROCESSING..." : "EXECUTE LOGIN"}
              </button>
              <span className="text-[10px] italic opacity-40 text-center sm:text-left leading-relaxed">
                Hint: Check button state during execution Phase.
              </span>
            </div>

            {/* In-tab Toasts */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-none">
              {toasts.map((t) => (
                <div
                  key={t.id}
                  className={`rounded-lg border px-3 py-2 text-[10px] font-bold shadow-2xl animate-slide-up ${
                    t.type === "warn" ? "bg-amber-500/10 border-amber-500/20 text-amber-300" :
                    t.type === "error" ? "bg-rose-500/10 border-rose-500/20 text-rose-300" :
                    "bg-sky-500/10 border-sky-500/20 text-sky-300"
                  }`}
                >
                  {t.msg}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Reporter Side ── */}
        <div className="xl:col-span-5 flex flex-col gap-4">
          <div className="bg-black/20 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl h-full">
            <div className="flex flex-col gap-1">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Bug Discovery Log</h4>
              <p className="text-[10px] text-[color:var(--ink1)] opacity-60">Log identified vulnerabilities here</p>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-auto custom-scrollbar">
              {BUGS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => toggleFound(b.id)}
                  className={`group flex flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                    found[b.id]
                      ? "border-[color:var(--accentA)] bg-[color:var(--accentA)]/10"
                      : "border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[9px] font-bold uppercase tracking-widest opacity-40 font-mono text-white/50">{b.type}</span>
                    <span className={`h-4 w-4 rounded-md border flex items-center justify-center transition-all ${
                      found[b.id] ? "bg-[color:var(--accentB)] border-[color:var(--accentB)]" : "bg-white/5 border-white/10"
                    }`}>
                      {found[b.id] && <span className="text-[8px] text-[#06090f] font-bold">✓</span>}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs font-bold transition-colors ${found[b.id] ? "text-white" : "text-white/60"}`}>{b.title}</span>
                    <p className="mt-1 text-[10px] text-[color:var(--ink1)] font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity italic">
                      {b.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Score Card */}
            <div className="mt-auto bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-[.15em] text-white opacity-40 uppercase">Tester Quotient</span>
                <span className="text-2xl font-bold text-white tracking-tight">{foundCount} <span className="text-sm opacity-20">/ {BUGS.length}</span></span>
              </div>
              <div className="flex flex-col items-end">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
                  <span className="text-lg">{foundCount === 3 ? "🏆" : foundCount > 0 ? "🕵️" : "🔭"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
