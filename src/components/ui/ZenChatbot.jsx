import { useState, useEffect, useRef } from "react"

// ─── Constants ───
const BTN_SIZE = 56
const DRAG_THRESHOLD = 8 // pixels of movement to count as drag
const EDGE_PADDING = 12
const FOOTER_SAFE_ZONE = 80 // keep button above footer

export function Chatbot({ profile }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef(null)

  // ─── Drag State ───
  const [btnPos, setBtnPos] = useState({ x: window.innerWidth - BTN_SIZE - 24, y: window.innerHeight - BTN_SIZE - FOOTER_SAFE_ZONE - 8 })
  const dragState = useRef({ active: false, startX: 0, startY: 0, originX: 0, originY: 0, moved: false })
  const [isDragging, setIsDragging] = useState(false)

  // ─── Hide chatbot near hero section (mobile) to avoid profile image overlap ───
  const [isNearTop, setIsNearTop] = useState(window.scrollY < 500)

  useEffect(() => {
    const handleScroll = () => setIsNearTop(window.scrollY < 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // ─── Chat panel position: always near button, clamped in viewport ───
  const getPanelPos = () => {
    const panelW = Math.min(window.innerWidth - 32, 360)
    const panelH = Math.min(window.innerHeight - 100, 520)

    let left = btnPos.x + BTN_SIZE / 2 - panelW / 2
    let top = btnPos.y - panelH - 12

    // Clamp horizontally
    left = Math.max(EDGE_PADDING, Math.min(left, window.innerWidth - panelW - EDGE_PADDING))

    // If not enough space above, show below instead
    if (top < EDGE_PADDING) {
      top = btnPos.y + BTN_SIZE + 12
    }

    // Clamp vertically
    top = Math.max(EDGE_PADDING, Math.min(top, window.innerHeight - panelH - EDGE_PADDING))

    return { left, top, width: panelW, height: panelH }
  }

  // ─── Touch Handlers (on button) ───
  const handleTouchStart = (e) => {
    const t = e.touches[0]
    dragState.current = {
      active: true,
      startX: t.clientX,
      startY: t.clientY,
      originX: btnPos.x,
      originY: btnPos.y,
      moved: false
    }
    setIsDragging(false)
  }

  const handleTouchMove = (e) => {
    if (!dragState.current.active) return
    const t = e.touches[0]
    const dx = t.clientX - dragState.current.startX
    const dy = t.clientY - dragState.current.startY
    const dist = Math.sqrt(dx * dx + dy * dy)

    if (dist > DRAG_THRESHOLD) {
      e.preventDefault()
      dragState.current.moved = true
      setIsDragging(true)

      const newX = Math.max(EDGE_PADDING, Math.min(window.innerWidth - BTN_SIZE - EDGE_PADDING, dragState.current.originX + dx))
      const newY = Math.max(EDGE_PADDING, Math.min(window.innerHeight - BTN_SIZE - FOOTER_SAFE_ZONE - EDGE_PADDING, dragState.current.originY + dy))
      setBtnPos({ x: newX, y: newY })
    }
  }

  const handleTouchEnd = () => {
    if (!dragState.current.moved) {
      // It was a tap — toggle chat
      setIsOpen(prev => !prev)
    }
    dragState.current.active = false
    setIsDragging(false)

    // Snap to nearest vertical edge (left or right)
    setBtnPos(prev => {
      const snapX = prev.x < window.innerWidth / 2
        ? EDGE_PADDING
        : window.innerWidth - BTN_SIZE - EDGE_PADDING
      const safeY = Math.min(prev.y, window.innerHeight - BTN_SIZE - FOOTER_SAFE_ZONE - EDGE_PADDING)
      return { x: snapX, y: safeY }
    })
  }

  // ─── Responses ───
  const responses = [
    { keywords: ["contact", "email", "reach", "call", "connect", "message", "cv", "resume"], answer: `You can reach me at ${profile?.email || "ashishwani808@gmail.com"} or connect on LinkedIn at ${profile?.links?.linkedin || "LinkedIn"}.` },
    { keywords: ["skill", "tool", "tech", "stack"], answer: "I specialize in Manual Testing and API Testing using JIRA, Postman, MySQL, and Chrome DevTools." },
    { keywords: ["experience", "work", "history", "career"], answer: "I have over 2.6 years of QA experience working on ISP systems, subscription modules, RBAC validation, and Transport Management Systems." },
    { keywords: ["notice period", "availability", "join"], answer: "I am available to join as per the company's requirement and can discuss the notice period during the hiring process." },
    { keywords: ["project", "portfolio", "case study"], answer: "I have tested RBAC, subscription workflows, wallet systems, and payment gateways. Explore the Portfolio section for detailed case studies." },
    { keywords: ["approach", "process", "strategy", "testing"], answer: "My approach combines exploratory testing with risk-based analysis, practical scenarios, and thorough edge case coverage." },
    { keywords: ["hire", "why", "best", "reason", "value"], answer: "I bring strong attention to detail, structured QA thinking, and complete ownership of product quality to every team I join." },
    { keywords: ["strength", "quality", "good at"], answer: "My strengths are analytical thinking, edge case discovery, clear test case writing, and fast collaboration with developers." },
    { keywords: ["location", "relocate", "remote"], answer: "I am open to remote work and relocation based on the opportunity." },
    { keywords: ["hello", "hi", "hey"], answer: "Hello! I'm here to help you learn about my QA skills, experience, and projects. Ask me anything!" }
  ]

  const handleSend = (text = input) => {
    const msg = (typeof text === 'string' ? text : input).trim()
    if (!msg) return
    setMessages(prev => [...prev, { role: "user", text: msg }])
    setInput("")
    setIsTyping(true)
    setTimeout(() => {
      const found = responses.find(r => r.keywords.some(k => msg.toLowerCase().includes(k)))
      setMessages(prev => [...prev, { role: "ai", text: found?.answer || "I'd be happy to help! Try asking about my skills, experience, projects, or how to contact me." }])
      setIsTyping(false)
    }, 600)
  }

  const quickActions = ["What are your skills?", "Tell me about your experience", "What is your notice period?", "How can I contact you?"]

  const panel = getPanelPos()

  return (
    <>
      {/* ─── Chat Panel (completely independent fixed element) ─── */}
      {isOpen && (
        <div
          className="fixed z-[9999] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border-soft"
          style={{ left: panel.left, top: panel.top, width: panel.width, height: panel.height }}
        >
          {/* Header */}
          <div className="bg-white px-4 py-3 border-b border-border-soft flex justify-between items-center shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
                <img src="/chatbotlogo.png" alt="QA Assistant" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-black leading-none pb-0.5">QA Assistant</h3>
                <span className="text-[10px] text-green-600 font-medium">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 bg-gray-50 flex flex-col gap-3">
            {messages.length === 0 && (
              <p className="text-xs text-center text-black/40 font-medium mt-4">Welcome! How can I help you today?</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${m.role === 'ai' ? 'bg-white border border-gray-100 text-black rounded-tl-sm shadow-sm' : 'bg-black text-white rounded-tr-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-3 py-3 rounded-2xl rounded-tl-sm flex gap-1 shadow-sm">
                  {[0, 0.15, 0.3].map((d, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-black/30 rounded-full animate-bounce" style={{ animationDelay: `${d}s` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-3 pb-2 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
            {quickActions.map(a => (
              <button key={a} onClick={() => handleSend(a)} className="whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-medium text-gray-600 hover:border-black hover:text-black transition-all shadow-sm">
                {a}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex gap-2">
              <input
                type="text" value={input} onChange={e => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-50 rounded-xl px-3 py-2.5 text-[16px] sm:text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/10 border border-gray-100"
              />
              <button type="submit" disabled={!input.trim()} className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-black text-white disabled:opacity-40 hover:bg-gray-800 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-0.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 22-11z" /></svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ─── Draggable Toggle Button (fully independent fixed element) ─── */}
      <button
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        onClick={(e) => {
          // On desktop (no touch), normal click toggle
          if (!('ontouchstart' in window)) setIsOpen(prev => !prev)
        }}
        onContextMenu={e => e.preventDefault()}
        className={`fixed z-[10000] bg-black text-white rounded-full flex items-center justify-center shadow-xl select-none touch-none transition-all duration-300
          ${isDragging ? 'shadow-[0_8px_30px_rgba(0,0,0,0.5)] scale-110' : 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]'}
          ${isNearTop ? 'sm:opacity-100 sm:pointer-events-auto opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}
        `}
        style={{
          left: btnPos.x,
          top: btnPos.y,
          width: BTN_SIZE,
          height: BTN_SIZE,
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'box-shadow 0.2s' : 'box-shadow 0.2s, left 0.3s cubic-bezier(0.34,1.56,0.64,1), top 0.1s'
        }}
        aria-label="Open QA Chatbot"
      >
        {isDragging ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 11V6a2 2 0 00-2-2 2 2 0 00-2 2v1a2 2 0 00-2-2 2 2 0 00-2 2v1a2 2 0 00-2-2 2 2 0 00-2 2v8a6 6 0 006 6h2a6 6 0 006-6v-5a2 2 0 00-2-2 2 2 0 00-2 2z"/></svg>
        ) : (
          <div className="relative">
            <img src="/chatbotlogo.png" alt="Chat" className="w-8 h-8 object-contain" />
            {!isOpen && <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-pulse" />}
          </div>
        )}
      </button>
    </>
  )
}
