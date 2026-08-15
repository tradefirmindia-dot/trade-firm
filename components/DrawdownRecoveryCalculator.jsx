"use client";

import { useMemo, useState } from "react";
import { Activity, ShieldCheck } from "lucide-react";

const recoveryTable = [5, 10, 15, 20, 25, 30, 40, 50].map((drawdown) => ({
  drawdown,
  recovery: (drawdown / (100 - drawdown)) * 100,
}));

export default function DrawdownRecoveryCalculator() {
  const [peakCapital, setPeakCapital] = useState(100000);
  const [currentCapital, setCurrentCapital] = useState(80000);

  const result = useMemo(() => {
    const peak = Math.max(Number(peakCapital) || 0, 0);
    const current = Math.min(Math.max(Number(currentCapital) || 0, 0), peak || Infinity);
    const loss = Math.max(peak - current, 0);
    const drawdown = peak > 0 ? (loss / peak) * 100 : 0;
    const recovery = current > 0 ? (loss / current) * 100 : loss > 0 ? Infinity : 0;
    return { peak, current, loss, drawdown, recovery };
  }, [peakCapital, currentCapital]);

  const currency = (value) => `₹${Math.round(value || 0).toLocaleString("en-IN")}`;

  return (
    <div className="drawdown-calculator-grid">
      <div className="drawdown-live-card">
        <div className="planner-title"><span><Activity size={18} /></span><div><small>CAPITAL-RISK TOOL</small><h3>Drawdown Recovery Calculator</h3></div></div>
        <div className="drawdown-inputs">
          <label>Peak capital<input type="number" min="0" step="100" value={peakCapital} onChange={(event) => setPeakCapital(event.target.value)} /></label>
          <label>Current capital<input type="number" min="0" step="100" value={currentCapital} onChange={(event) => setCurrentCapital(event.target.value)} /></label>
        </div>
        <div className="drawdown-main-output"><span>Gain required to return to the peak</span><strong>{Number.isFinite(result.recovery) ? `${result.recovery.toFixed(2)}%` : "Not finite"}</strong><p>Recovery is measured from the smaller current-capital base.</p></div>
        <div className="output-grid">
          <div><span>Capital decline</span><b>{currency(result.loss)}</b></div>
          <div><span>Drawdown</span><b>{result.drawdown.toFixed(2)}%</b></div>
          <div><span>Current capital</span><b>{currency(result.current)}</b></div>
          <div><span>Recovery amount</span><b>{currency(result.loss)}</b></div>
        </div>
        <p className="calculator-note"><ShieldCheck size={15} /> This is arithmetic, not a return forecast. A required recovery percentage does not imply that recovery will occur.</p>
      </div>

      <div className="drawdown-table-card">
        <span>REFERENCE TABLE</span>
        <h3>Loss and recovery are not symmetrical.</h3>
        <div className="drawdown-table" role="table" aria-label="Drawdown and recovery reference">
          <div role="row"><b role="columnheader">Drawdown</b><b role="columnheader">Gain to recover</b></div>
          {recoveryTable.map((row) => <div role="row" key={row.drawdown}><span role="cell">−{row.drawdown}%</span><strong role="cell">+{row.recovery.toFixed(2)}%</strong></div>)}
        </div>
      </div>
    </div>
  );
}
