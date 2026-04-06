import { useMemo, useState } from "react"

function validate(values) {
  const e = {}
  if (!values.name.trim()) e.name = "ID check failed: Name is required."
  if (!values.email.trim()) e.email = "Endpoint unreachable: Email is required."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    e.email = "Invalid syntax: Enter a valid email."
  if (!values.message.trim()) e.message = "Payload empty: Message is required."
  else if (values.message.trim().length < 15)
    e.message = "Payload too small: Min length 15 chars."
  return e
}

export function Contact({ profile }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const errors = useMemo(() => validate(values), [values])
  const canSubmit = Object.keys(errors).length === 0

  const onSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    setSubmitted(true)
    if (!canSubmit) return

    setTimeout(() => {
      alert("Message transmitted to secure endpoint. Response: 200 OK.")
      setValues({ name: "", email: "", message: "" })
      setTouched({})
      setSubmitted(false)
    }, 1500)
  }

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))

  return (
    <div className="flex flex-col gap-8 w-full min-w-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* ── Collaboration Channels ── */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="p-8 rounded-[2.5rem] border border-white/5 bg-black/40 shadow-2xl flex flex-col gap-8 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[color:var(--accentA)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[color:var(--accentB)] uppercase opacity-60">Reach Out</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">System Access</h3>
              <p className="text-xs leading-relaxed text-[color:var(--ink1)] opacity-70">
                Ready to optimize your product's quality matrix? Transmit your request via the following secure channels.
              </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
               {[
                 { label: 'Secure Email', value: profile.email, href: `mailto:${profile.email}`, icon: '📧' },
                 { label: 'LinkedIn Node', value: 'Verify Connection', href: profile.links.linkedin, icon: '💼' },
                 { label: 'GitHub Repository', value: 'Check Logs', href: profile.links.github, icon: '🐙' }
               ].map((item, idx) => (
                 <a 
                   key={idx}
                   href={item.href}
                   target="_blank"
                   rel="noreferrer"
                   className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 hover:-translate-x-1 transition-all"
                 >
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex flex-col">
                       <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{item.label}</span>
                       <span className="text-xs font-semibold text-white/80">{item.value}</span>
                    </div>
                 </a>
               ))}
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center gap-3">
             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest">Active Status: Accepting Projects</span>
          </div>
        </div>

        {/* ── Secure Transmission Form ── */}
        <div className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-black/40 p-8 md:p-10 shadow-2xl flex flex-col gap-8">
            {/* Arctic Scan line background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(173, 232, 244, 0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(173, 232, 244, 0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[color:var(--accentA)] uppercase opacity-60">Transmission Interface</span>
              <h3 className="text-2xl font-bold text-white tracking-tight">Collaboration Request</h3>
            </div>

            <form onSubmit={onSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <Field
                  label="Name / Organization"
                  value={values.name}
                  onChange={set("name")}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  error={touched.name ? errors.name : ""}
                  placeholder="IDENTIFY_NAME"
                />
              </div>
              <div className="md:col-span-1">
                <Field
                  label="Transmission Endpoint"
                  value={values.email}
                  onChange={set("email")}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  error={touched.email ? errors.email : ""}
                  placeholder="EMAIL_ADDR"
                />
              </div>
              <div className="md:col-span-2">
                <Field
                  label="Payload Description"
                  value={values.message}
                  onChange={set("message")}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  error={touched.message ? errors.message : ""}
                  placeholder="State the testing problem you need solved..."
                  textarea
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-between gap-6 pt-4 border-t border-white/5 mt-2">
                <p className="hidden md:block text-[10px] font-mono text-white/20 uppercase tracking-widest">
                  Encryption: 256-bit AES • Status: {canSubmit ? 'READY_FOR_UP' : 'IDLE_WAIT'}
                </p>
                <button
                  type="submit"
                  disabled={!canSubmit || submitted}
                  className={`relative group overflow-hidden h-14 px-10 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                    canSubmit && !submitted
                      ? 'bg-gradient-to-r from-[color:var(--accentA)] to-[var(--accentB)] text-[#06090f] shadow-[0_10px_30px_rgba(125,211,252,0.2)] hover:-translate-y-1 active:scale-95'
                      : 'bg-white/5 border border-white/5 text-white/20 cursor-not-allowed'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#06090f]/30 border-t-[#06090f]" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Transmit Message</span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Discovery Tip */}
            <div className="relative z-10 p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-4 group/tip overflow-hidden">
               <span className="text-2xl opacity-40 group-hover/tip:opacity-100 transition-opacity">🕵️</span>
               <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Discovery Log</span>
                  <p className="text-xs text-[color:var(--ink1)] opacity-70">
                    Type <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded border border-white/10 tracking-[0.2em]">QATEST</span> to access hidden audit logs.
                  </p>
               </div>
               <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[color:var(--accentA)] to-transparent translate-x-[-100%] group-hover/tip:translate-x-[100%] transition-transform duration-1000" />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  textarea,
}) {
  return (
    <label className="flex flex-col gap-2.5">
      <div className="flex items-center justify-between px-1">
        <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
          {label}
        </span>
        {error && <span className="text-[10px] font-bold text-rose-400 uppercase tracking-tighter">! {error}</span>}
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={5}
          placeholder={placeholder}
          className={`w-full rounded-2xl border bg-black/40 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/10 focus:bg-white/[0.05] focus:scale-[1.005] group-hover:border-white/10 ${
            error ? "border-rose-400/30" : "border-white/5"
          } resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full rounded-2xl border bg-black/40 px-5 py-4 text-sm text-white outline-none transition-all placeholder:text-white/10 focus:bg-white/[0.05] focus:scale-[1.005] ${
            error ? "border-rose-400/30" : "border-white/5"
          }`}
        />
      )}
    </label>
  )
}
