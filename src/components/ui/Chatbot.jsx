import { useEffect, useMemo, useRef, useState } from "react"

function matchIntent(intents, text) {
  const q = text.toLowerCase()
  for (const i of intents) {
    if (i.match.some((m) => q.includes(String(m).toLowerCase()))) return i.answer
  }
  return "I can help with: testing approach, API testing, JIRA defects, and resume."
}

/* ── Animated Robot SVG Logo ── */
function RobotIcon({ size = 28, animated = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? "robot-icon" : ""}
      aria-hidden="true"
    >
      {/* Antenna */}
      <line x1="32" y1="6" x2="32" y2="14" stroke="url(#grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="5" r="2.5" fill="url(#grad)" className={animated ? "antenna-blink" : ""} />

      {/* Head */}
      <rect x="14" y="14" width="36" height="26" rx="6" fill="url(#headGrad)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

      {/* Eyes */}
      <circle cx="25" cy="26" r="4" fill="rgba(0,0,0,0.5)" />
      <circle cx="25" cy="26" r="2.5" fill="url(#grad)" className={animated ? "eye-blink" : ""} />
      <circle cx="39" cy="26" r="4" fill="rgba(0,0,0,0.5)" />
      <circle cx="39" cy="26" r="2.5" fill="url(#grad)" className={animated ? "eye-blink" : ""} />

      {/* Mouth */}
      <rect x="22" y="33" width="20" height="4" rx="2" fill="rgba(0,0,0,0.4)" />
      <rect
        x="22"
        y="33"
        width="20"
        height="4"
        rx="2"
        fill="url(#grad)"
        opacity="0.6"
        className={animated ? "mouth-scan" : ""}
        style={{ transformOrigin: "22px 35px" }}
      />

      {/* Neck */}
      <rect x="28" y="40" width="8" height="5" rx="2" fill="rgba(255,255,255,0.12)" />

      {/* Body */}
      <rect x="10" y="45" width="44" height="14" rx="5" fill="url(#bodyGrad)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Chest indicator */}
      <circle cx="32" cy="52" r="3.5" fill="rgba(0,0,0,0.4)" />
      <circle cx="32" cy="52" r="2" fill="url(#grad)" className={animated ? "antenna-blink" : ""} />

      {/* Gradient defs */}
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accentA)" />
          <stop offset="100%" stopColor="var(--accentB)" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(30,20,60,0.95)" />
          <stop offset="100%" stopColor="rgba(10,10,30,0.98)" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(25,15,55,0.95)" />
          <stop offset="100%" stopColor="rgba(8,8,22,0.98)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Chatbot({ data }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState(() => [
    { from: "bot", text: data.greeting },
  ])
  const bottomRef = useRef(null)

  const quick = useMemo(() => data.quickActions ?? [], [data.quickActions])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const send = (text) => {
    const t = String(text ?? "").trim()
    if (!t) return
    setMessages((m) => [...m, { from: "user", text: t }])
    setTyping(true)
    const ans = matchIntent(data.intents ?? [], t)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: "bot", text: ans }])
    }, 800)
  }

  return (
    <>
      {/* Chatbot animations */}
      <style>{`
        @keyframes eye-blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes antenna-ping {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        @keyframes mouth-scan {
          0% { clip-path: inset(0 100% 0 0); }
          50% { clip-path: inset(0 0 0 0); }
          100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes robot-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes chat-pop {
          from { opacity: 0; transform: scale(0.85) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes typing-dot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes panel-slide-up {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .robot-icon { animation: robot-bob 3s ease-in-out infinite; }
        .eye-blink  { animation: eye-blink 4s ease-in-out infinite; }
        .antenna-blink { animation: antenna-ping 2s ease-in-out infinite; }
        .mouth-scan { animation: mouth-scan 3s ease-in-out infinite; }
        .chat-msg   { animation: chat-pop 0.25s cubic-bezier(0.16,1,0.3,1) both; }
        .chat-panel { animation: panel-slide-up 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .dot1 { animation: typing-dot 1.2s 0.0s infinite; }
        .dot2 { animation: typing-dot 1.2s 0.2s infinite; }
        .dot3 { animation: typing-dot 1.2s 0.4s infinite; }
      `}</style>

      <div className="fixed bottom-5 right-5 z-50">
        {!open ? (
          /* ── Trigger Button ── */
          <button
            type="button"
            id="chatbot-open-btn"
            onClick={() => setOpen(true)}
            className="group relative flex items-center gap-3 glass-strong neon-outline rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(139,92,246,0.35)]"
            data-cursor="cta"
            aria-label="Open QA Chat"
          >
            <span className="relative flex items-center justify-center">
              {/* Glowing ring behind robot */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] opacity-30 blur-md animate-pulse-glow" />
              <RobotIcon size={28} animated />
            </span>
            <span>QA Chat</span>
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] shadow-[0_0_8px_rgba(34,211,238,0.7)] antenna-blink" />
          </button>
        ) : (
          /* ── Chat Panel ── */
          <div
            className="chat-panel glass-strong neon-outline w-[340px] max-w-[88vw] rounded-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.7)]"
            role="dialog"
            aria-label="QA Chatbot"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 bg-gradient-to-r from-[var(--accentA)]/10 to-[var(--accentB)]/10">
              <span className="relative flex items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] opacity-25 blur-sm animate-pulse-glow" />
                <RobotIcon size={32} animated />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white leading-tight">QA Assistant</p>
                <p className="text-xs text-[color:var(--accentB)] flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] antenna-blink" />
                  Online
                </p>
              </div>
              <button
                type="button"
                id="chatbot-close-btn"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-white/7 px-3 py-2 text-xs font-semibold text-[color:var(--ink1)] transition hover:bg-white/12 hover:text-white"
                data-cursor="button"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="max-h-[300px] space-y-3 overflow-auto px-4 py-4 scroll-smooth">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={[
                    "chat-msg flex gap-2 items-end",
                    m.from === "user" ? "flex-row-reverse" : "",
                  ].join(" ")}
                >
                  {/* Avatar */}
                  {m.from === "bot" && (
                    <span className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-gradient-to-br from-[var(--accentA)]/30 to-[var(--accentB)]/30 border border-white/10">
                      <RobotIcon size={16} />
                    </span>
                  )}
                  <div
                    className={[
                      "max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                      m.from === "bot"
                        ? "bg-black/30 text-[color:var(--ink1)] rounded-bl-sm"
                        : "bg-gradient-to-r from-[var(--accentA)]/80 to-[var(--accentB)]/80 text-white rounded-br-sm shadow-[0_4px_20px_rgba(139,92,246,0.3)]",
                    ].join(" ")}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="chat-msg flex gap-2 items-end">
                  <span className="shrink-0 flex items-center justify-center h-7 w-7 rounded-full bg-gradient-to-br from-[var(--accentA)]/30 to-[var(--accentB)]/30 border border-white/10">
                    <RobotIcon size={16} />
                  </span>
                  <div className="bg-black/30 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
                    <span className="dot1 inline-block h-2 w-2 rounded-full bg-[color:var(--accentB)]" />
                    <span className="dot2 inline-block h-2 w-2 rounded-full bg-[color:var(--accentB)]" />
                    <span className="dot3 inline-block h-2 w-2 rounded-full bg-[color:var(--accentB)]" />
                  </div>
                </div>
              )}

              {/* Quick actions */}
              {messages.length < 3 && quick.length > 0 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quick.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => send(q)}
                      className="rounded-2xl border border-[var(--accentB)]/25 bg-[var(--accentB)]/8 px-3 py-2 text-xs text-[color:var(--ink1)] transition-all hover:border-[var(--accentB)]/50 hover:bg-[var(--accentB)]/15 hover:text-white hover:-translate-y-0.5"
                      data-cursor="link"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
                setInput("")
              }}
              className="flex gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about QA…"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white outline-none transition focus:border-[color:var(--accentB)]/40 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] placeholder:text-white/30"
              />
              <button
                type="submit"
                id="chatbot-send-btn"
                disabled={!input.trim()}
                className="rounded-2xl bg-gradient-to-r from-[var(--accentA)] to-[var(--accentB)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] disabled:opacity-40 disabled:cursor-not-allowed"
                data-cursor="button"
              >
                ↑
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}
