import { useMemo, useState, useEffect } from "react"

function pretty(obj) {
  if (obj === undefined) return ""
  try {
    return JSON.stringify(obj, null, 2)
  } catch {
    return String(obj)
  }
}

function highlightJson(jsonText) {
  if (!jsonText) return ""
  const esc = jsonText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
  return esc.replace(
    /("(?:\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(?:\s*:)?|\btrue\b|\bfalse\b|\bnull\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (m) => {
      let cls = "opacity-80"
      if (/^"/.test(m)) cls = /:$/.test(m) ? "json-key" : "json-str"
      else if (/true|false/.test(m)) cls = "json-bool"
      else if (/null/.test(m)) cls = "json-null"
      else cls = "json-num"
      return `<span class="${cls}">${m}</span>`
    },
  )
}

const METHOD_COLORS = {
  GET:    { text: "#ADE8F4", bg: "rgba(173, 232, 244, 0.12)", border: "rgba(173, 232, 244, 0.2)" },
  POST:   { text: "#86efac", bg: "rgba(134,239,172,0.1)", border: "rgba(134,239,172,0.2)" },
  PUT:    { text: "#fde68a", bg: "rgba(253,230,138,0.1)", border: "rgba(253,230,138,0.2)" },
  PATCH:  { text: "#fb923c", bg: "rgba(251,146,60,0.1)",  border: "rgba(251,146,60,0.2)" },
  DELETE: { text: "#f87171", bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.2)" },
}

function MethodBadge({ method }) {
  const c = METHOD_COLORS[method] ?? METHOD_COLORS.GET
  return (
    <span
      className="inline-block rounded-lg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border"
      style={{ background: c.bg, color: c.text, borderColor: c.border }}
    >
      {method}
    </span>
  )
}

export function ApiLab({ data }) {
  const endpoints = data?.endpoints ?? []
  const methods = data?.methods ?? ["GET", "POST", "PUT", "PATCH", "DELETE"]
  
  const [selectedId, setSelectedId] = useState(endpoints[0]?.id ?? "")
  const endpoint = useMemo(
    () => endpoints.find((e) => e.id === selectedId) ?? endpoints[0],
    [endpoints, selectedId],
  )

  const [method, setMethod] = useState("GET")
  const [url, setUrl]       = useState("")
  const [body, setBody]     = useState("{}")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  // Sync state with selected endpoint
  useEffect(() => {
    if (endpoint) {
      setMethod(endpoint.method ?? "GET")
      setUrl(endpoint.url ?? "")
      setBody(pretty(endpoint.requestBody ?? {}))
      setResult(endpoint.response ?? null)
    }
  }, [endpoint])

  const send = () => {
    setLoading(true)
    const delay = Math.max(500, Math.floor(Math.random() * 1000) + 200)
    setTimeout(() => {
      setResult({
        status: endpoint?.response?.status ?? 200,
        timeMs: delay,
        json: endpoint?.response?.json ?? { message: "Success" }
      })
      setLoading(false)
    }, delay)
  }

  const jsonHtml = useMemo(() => highlightJson(pretty(result?.json ?? {})), [result])

  return (
    <div className="flex flex-col gap-6 w-full min-w-0">
      {/* ── Collection Tabs ── */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--accentA)] uppercase">Collections</h4>
        <div className="flex flex-wrap gap-2">
          {endpoints.map((ep) => (
            <button
              key={ep.id}
              onClick={() => setSelectedId(ep.id)}
              className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs transition-all ${
                selectedId === ep.id
                  ? "border-[color:var(--accentA)] bg-[color:var(--accentA)]/10 text-white shadow-[0_0_15px_rgba(173, 232, 244, 0.22)]"
                  : "border-white/5 bg-white/5 text-[color:var(--ink1)] hover:bg-white/10 hover:text-white"
              }`}
            >
              <MethodBadge method={ep.method} />
              <span className="font-medium whitespace-nowrap">{ep.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Main Workspace ── */}
      <div className="flex flex-col gap-4">
        {/* URL Bar */}
        <div className="group flex flex-col gap-2 sm:flex-row sm:items-center p-1.5 rounded-2xl bg-black/40 border border-white/5 focus-within:border-[color:var(--accentA)]/30 transition-all shadow-inner">
          <div className="relative shrink-0 sm:w-32">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full appearance-none rounded-xl bg-white/5 border border-white/5 px-3 py-2 text-xs font-bold uppercase tracking-widest outline-none focus:bg-white/10"
              style={{ color: METHOD_COLORS[method]?.text ?? "#fff" }}
            >
              {methods.map(m => <option key={m} value={m} className="bg-[#080c12]">{m}</option>)}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] opacity-50">▼</span>
          </div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full min-w-0 rounded-xl bg-transparent px-3 py-2 font-mono text-xs text-white outline-none placeholder:opacity-20"
            placeholder="https://api.example.com/v1/..."
          />
          <button
            onClick={send}
            disabled={loading}
            className="shrink-0 rounded-xl bg-gradient-to-r from-[color:var(--accentA)] to-[color:var(--accentB)] px-6 py-2 text-xs font-bold text-[color:var(--bg0)] shadow-lg transition-all hover:scale-[1.02] hover:shadow-[color:var(--accentA)]/30 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "..." : "SEND"}
          </button>
        </div>

        {/* Panes */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* Editor */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase ml-1">Payload</label>
            <div className="relative rounded-2xl border border-white/5 bg-black/40 overflow-hidden">
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full h-64 resize-none bg-transparent p-4 font-mono text-[11px] leading-relaxed text-[color:var(--accentB)] outline-none focus:bg-white/[0.02]"
                spellCheck={false}
              />
              <div className="absolute top-2 right-2 text-[10px] font-mono opacity-20 pointer-events-none uppercase">JSON</div>
            </div>
          </div>

          {/* Response */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <label className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--ink1)] uppercase">Response</label>
              {result && (
                <div className="flex gap-3 text-[10px] font-mono">
                  <span className={result.status < 400 ? "text-emerald-400" : "text-rose-400"}>STATUS: {result.status}</span>
                  <span className="opacity-40">TIME: {result.timeMs}ms</span>
                </div>
              )}
            </div>
            <div className="relative rounded-2xl border border-white/5 bg-black/60 overflow-hidden h-64">
              {loading ? (
                <div className="flex h-full items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-[color:var(--accentA)]/20 border-t-[color:var(--accentA)]" />
                </div>
              ) : (
                <pre
                  className="w-full h-full overflow-auto p-4 font-mono text-[11px] leading-relaxed custom-scrollbar"
                  dangerouslySetInnerHTML={{ __html: jsonHtml }}
                />
              )}
              {!result && !loading && (
                <div className="flex h-full items-center justify-center text-[11px] opacity-20 italic">No request sent yet</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      {endpoint?.description && (
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-[11px] leading-relaxed text-[color:var(--ink1)] border-l-2 border-l-[color:var(--accentA)]/40">
           <span className="text-white font-semibold">INFO:</span> {endpoint.description}
        </div>
      )}
    </div>
  )
}
