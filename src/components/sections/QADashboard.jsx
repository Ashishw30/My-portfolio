import React, { useState, useEffect } from "react";

// Attractive Colorful Card: Clean Data-Only Design
const ChartCard = ({ title, renderChart, colSpan = "col-span-1", cardColor = "bg-white", textColor = "text-text-primary", accentColor = "bg-accent" }) => {
  const [hoverData, setHoverData] = useState({ active: false, label: "", value: "" });

  return (
    <div 
      className={`${colSpan} ${cardColor} border-2 border-black/10 p-6 sm:p-9 rounded-[2.5rem] transition-all duration-700 hover:shadow-2xl hover:translate-y-[-6px] hover:border-black/20 relative group/card flex flex-col w-full min-w-0 overflow-hidden shadow-sm`}
      onMouseLeave={() => setHoverData({ active: false, label: "", value: "" })}
    >
      {/* ── CARD HEADER ── */}
      <div className="flex justify-between items-center h-12 mb-6 relative z-10 overflow-hidden">
        <h4 className={`text-[10px] sm:text-[11px] font-black ${textColor} uppercase tracking-[0.25em] opacity-40 truncate pr-3 flex-1`}>{title}</h4>
        {hoverData.active && (
          <div className="flex flex-col items-end animate-in fade-in slide-in-from-right-4 duration-500 shrink-0 min-w-fit">
            <span className={`text-[9px] font-black ${textColor} opacity-50 uppercase tracking-widest`}>{hoverData.label}</span>
            <span className={`text-base sm:text-lg font-black ${textColor} tracking-tighter leading-none`}>{hoverData.value}</span>
          </div>
        )}
      </div>
      
      {/* ── CHART SLOT ── */}
      <div className="flex-1 flex justify-center items-center py-2 min-h-[140px] sm:min-h-[170px] cursor-crosshair overflow-hidden relative z-10 group-hover/card:scale-105 transition-transform duration-700">
        {renderChart((e, label, value) => setHoverData({ active: !!(label || value), label: label || "", value: value || "" }))}
      </div>

      <div className={`absolute -bottom-10 -right-10 h-32 w-32 rounded-full opacity-20 blur-3xl ${accentColor}`} />
    </div>
  );
};

export function QADashboard({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { setIsLoaded(true); }, []);

  if (!data || !data.charts) return null;
  const { project, reliabilityScore, insight, charts } = data;

  const S_COLORS = { rose: "#F43F5E", blue: "#3B82F6", emerald: "#10B981", amber: "#F59E0B", violet: "#8B5CF6", slate: "#64748B", cyan: "#06B6D4", indigo: "#6366F1" };

  // 1. Donut
  const renderDonut = (dataset, totalValue, centerValue, colorSet) => (onHover) => {
    let cumulative = 0; const circ = 2 * Math.PI * 70;
    const labels = dataset.labels || dataset.categories || [];
    return (
      <div className="relative flex items-center justify-center" onMouseLeave={() => onHover(null, "", "")}>
        <svg viewBox="0 0 200 200" className="w-[120px] sm:w-[170px] transform -rotate-90 overflow-visible drop-shadow-xl" onMouseLeave={(e) => { e.stopPropagation(); onHover(null, "", ""); }}>
          {dataset.series.map((val, i) => {
            const p = (val / totalValue) * 100;
            const dash = `${(p / 100) * circ} ${circ}`;
            const off = -circ * (cumulative / totalValue); cumulative += val;
            return <circle key={i} cx="100" cy="100" r={70} fill="none" stroke={colorSet[i % colorSet.length]} strokeWidth="12" strokeDasharray={dash} strokeDashoffset={off} className="transition-all duration-700 opacity-90 hover:opacity-100 cursor-pointer" onMouseEnter={() => onHover(null, labels[i] || "Data", `${val}${p < 100 ? ` (${p.toFixed(0)}%)` : ''}`)} />;
          })}
        </svg>
        <div className="absolute text-center flex flex-col justify-center pointer-events-none transition-all group-hover:scale-110"><span className="text-3xl font-black text-text-primary tracking-tighter leading-none">{centerValue}</span></div>
      </div>
    );
  };

  // 2. Bars
  const renderBars = (dataset, colors) => (onHover) => {
    const maxVal = Math.max(...dataset.series, 1) * 1.35;
    const cats = dataset.categories || dataset.labels || [];
    return (
      <div className="w-full flex items-end gap-3 sm:gap-4 h-[150px] px-1 group/v" onMouseLeave={() => onHover(null, "", "")}>
        {dataset.series.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full overflow-hidden" onMouseEnter={() => onHover(null, cats[i] || "Node", val)}>
             <div className="w-full h-full bg-black/[0.05] rounded-full relative flex items-end justify-center border border-black/[0.03]">
                <div className="w-full rounded-full transition-all duration-[1200ms] origin-bottom shadow-lg group-hover/v:scale-x-110" style={{ height: `${(val / maxVal) * 100}%`, backgroundColor: colors[i % colors.length] }} />
             </div>
             <span className="text-[8px] font-black opacity-30 uppercase tracking-widest leading-none truncate w-full text-center">{cats[i] || "-"}</span>
          </div>
        ))}
      </div>
    );
  };

  // 3. List
  const renderList = (dataset, color) => (onHover) => {
    const total = dataset.series.reduce((a,b)=>a+b, 0);
    const cats = dataset.categories || dataset.labels || [];
    return (
      <div className="w-full flex flex-col gap-5 py-2 px-1" onMouseLeave={() => onHover(null, "", "")}>
        {dataset.series.map((val, i) => (
          <div key={i} className="flex items-center gap-4 group/l" onMouseEnter={() => onHover(null, cats[i] || "Task", `${val} Units`)}>
            <div className="flex-1 h-2.5 bg-black/[0.05] rounded-full overflow-hidden border border-black/[0.02]">
               <div className="h-full transition-all duration-1000 shadow-sm" style={{ width: `${(val / total) * 100}%`, backgroundColor: color }} />
            </div>
            <div className="flex flex-col items-end min-w-[50px] shrink-0">
               <span className="text-[10px] font-black text-text-primary leading-none">{val}</span>
               <span className="text-[7px] font-bold opacity-30 uppercase tracking-tighter leading-none">{cats[i] || "-"}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // 4. Trend
  const renderTrend = (dataset, color) => (onHover) => {
    const maxVal = Math.max(...dataset.series, 1) * 1.35;
    const w = 400; const h = 100;
    const cats = dataset.categories || dataset.labels || [];
    const pts = dataset.series.map((v, i) => ({ x: (i / (dataset.series.length - 1)) * w, y: h- (v / maxVal) * h }));
    const lineD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    return (
      <div className="w-full py-4 overflow-visible px-2" onMouseLeave={() => onHover(null, "", "")}>
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto overflow-visible" preserveAspectRatio="none" onMouseLeave={(e) => { e.stopPropagation(); onHover(null, "", ""); }}>
          <path d={lineD} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 translate-y-[-1px]" />
          {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="6" fill="white" stroke={color} strokeWidth="4" className="cursor-pointer hover:r-9 transition-all drop-shadow-md" onMouseEnter={() => onHover(null, cats[i] || "Week", dataset.series[i])} />)}
        </svg>
      </div>
    );
  };

  // 5. Ring
  const renderRing = (dataset, color) => (onHover) => {
    const val = dataset.series[0]; const circ = 2 * Math.PI * 70;
    return (
      <div className="relative flex items-center justify-center p-4" onMouseEnter={() => onHover(null, "Coverage Status", `${val}%`)}>
        <svg viewBox="0 0 200 200" className="w-[120px] sm:w-[160px] transform -rotate-90 overflow-visible drop-shadow-2xl">
          <circle cx="100" cy="100" r={70} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="10" />
          <circle cx="100" cy="100" r={70} fill="none" stroke={color} strokeWidth="10" strokeDasharray={circ} strokeDashoffset={circ * (1 - val / 100)} strokeLinecap="round" className="transition-all duration-1000" />
        </svg>
        <span className="absolute text-4xl font-black text-text-primary tracking-tighter italic transition-all group-hover:scale-110">{val}%</span>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-8 sm:gap-10 w-full max-w-7xl mx-auto py-10 px-4 transition-all duration-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'} overflow-hidden min-h-screen`}>
      
      {/* ── HEADER ── */}
      <div className="flex flex-col gap-8 border-b-2 border-black/10 pb-10 w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col min-w-0 flex-1">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-tight truncate">{project}</h3>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-2 shrink-0">
             <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tighter">{reliabilityScore}</span>
                <span className="text-[10px] font-black text-emerald-600/40 uppercase tracking-widest">Stability Index</span>
             </div>
             <div className="bg-emerald-600 text-white px-6 py-2 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] cursor-default shadow-md">
                <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest leading-none">SIGN-OFF FINALIZED</span>
             </div>
          </div>
        </div>
        
        {insight && (
          <div className="bg-white/50 border border-black/5 p-6 rounded-[2rem] flex flex-col gap-2 relative overflow-hidden group/insight shadow-sm">
             <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 opacity-50" />
             <span className="text-[9px] font-black text-text-primary/30 uppercase tracking-[0.3em]">Operational Insight</span>
             <p className="text-sm sm:text-base font-medium text-text-primary/70 leading-relaxed max-w-4xl">{insight}</p>
          </div>
        )}
      </div>

      {/* ── 8 UNIQUE DARK BORDER CARDS GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 w-full mb-10">
        <ChartCard title="Execution Summary" cardColor="bg-blue-50/70" accentColor="bg-blue-500" renderChart={renderDonut(charts.executionSummary, charts.executionSummary.series.reduce((a,b)=>a+b,0), "92%", [S_COLORS.emerald, S_COLORS.rose, S_COLORS.amber, S_COLORS.slate])} />
        <ChartCard title="Defect Severity density" cardColor="bg-rose-50/70" accentColor="bg-rose-500" renderChart={renderBars(charts.defectSeverity, [S_COLORS.rose, S_COLORS.amber, S_COLORS.emerald, S_COLORS.slate])} />
        <ChartCard title="Logic Verification depth" cardColor="bg-emerald-50/70" accentColor="bg-emerald-500" renderChart={renderRing(charts.requirementCoverage, S_COLORS.emerald)} />
        <ChartCard title="Platform Mix Matrix" cardColor="bg-violet-50/70" accentColor="bg-violet-500" renderChart={renderDonut(charts.platformCoverage, charts.platformCoverage.series.reduce((a,b)=>a+b,0), "4V", [S_COLORS.blue, S_COLORS.violet, S_COLORS.rose, S_COLORS.emerald])} />
        <ChartCard title="Defect Lifecycle Trace Visualization" colSpan="sm:col-span-2" cardColor="bg-amber-50/70" accentColor="bg-amber-500" renderChart={renderList(charts.defectLifecycle, S_COLORS.amber)} />
        <ChartCard title="Module Health Review Report" colSpan="sm:col-span-2" cardColor="bg-indigo-50/70" accentColor="bg-indigo-500" renderChart={renderBars(charts.moduleDefects, [S_COLORS.indigo, S_COLORS.blue, S_COLORS.cyan])} />
        <ChartCard title="Manual Regression Velocity trend" colSpan="sm:col-span-2" cardColor="bg-cyan-50/70" accentColor="bg-cyan-500" renderChart={renderTrend(charts.defectTrend, S_COLORS.cyan)} />
        <ChartCard title="Case Priority goal Weight Weights" colSpan="sm:col-span-2" cardColor="bg-slate-50/70" accentColor="bg-slate-500" renderChart={renderBars(charts.executionByPriority, [S_COLORS.slate, S_COLORS.blue, S_COLORS.indigo])} />
      </div>
    </div>
  );
}
