import { Activity, BrainCircuit, Gauge, Target } from "lucide-react";

export default function ResearchConsole() {
  return (
    <div className="research-console" aria-label="Trade Firm research process preview">
      <div className="console-topbar">
        <div><span className="console-mark"><Activity size={15} /></span><p><strong>TRADE FIRM</strong><small>ADVISORY &amp; RESEARCH DESK</small></p></div>
        <span className="process-badge"><i /> RISK-LED</span>
      </div>
      <div className="console-title-row"><div><small>ADVISORY FORMAT PREVIEW</small><h3>Context before every decision.</h3></div><span>Desk preview</span></div>
      <div className="console-chart">
        <div className="chart-label label-high">Supply context</div><div className="chart-label label-low">Demand context</div>
        <svg viewBox="0 0 760 250" preserveAspectRatio="none" role="img" aria-label="Market structure example line">
          <defs><linearGradient id="blueArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#1769ff" stopOpacity=".23" /><stop offset="100%" stopColor="#1769ff" stopOpacity="0" /></linearGradient></defs>
          <path d="M0 202 C65 190 92 126 150 150 S242 210 300 144 S395 78 445 111 S530 170 586 101 S681 52 760 66 L760 250 L0 250Z" fill="url(#blueArea)" />
          <path className="console-line" d="M0 202 C65 190 92 126 150 150 S242 210 300 144 S395 78 445 111 S530 170 586 101 S681 52 760 66" fill="none" stroke="#1769ff" strokeWidth="4" />
        </svg>
      </div>
      <div className="console-metrics">
        <div><Target size={18} /><p><b>Actionable levels</b><span>Context &amp; zones</span></p></div>
        <div><Gauge size={18} /><p><b>Defined risk</b><span>Invalidation first</span></p></div>
        <div><BrainCircuit size={18} /><p><b>Research rationale</b><span>Process over impulse</span></p></div>
      </div>
    </div>
  );
}
