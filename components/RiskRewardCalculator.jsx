"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2 } from "lucide-react";

export default function RiskRewardCalculator() {
  const [entry, setEntry] = useState(100);
  const [stop, setStop] = useState(95);
  const [target, setTarget] = useState(115);
  const [quantity, setQuantity] = useState(100);
  const [estimatedCosts, setEstimatedCosts] = useState(50);

  const result = useMemo(() => {
    const safeEntry = Math.max(Number(entry) || 0, 0);
    const safeStop = Math.max(Number(stop) || 0, 0);
    const safeTarget = Math.max(Number(target) || 0, 0);
    const safeQuantity = Math.max(Math.floor(Number(quantity) || 0), 0);
    const safeCosts = Math.max(Number(estimatedCosts) || 0, 0);
    const direction = safeStop <= safeEntry ? "Long" : "Short";
    const riskPerUnit = Math.abs(safeEntry - safeStop);
    const rewardPerUnit = direction === "Long"
      ? Math.max(safeTarget - safeEntry, 0)
      : Math.max(safeEntry - safeTarget, 0);
    const grossRisk = riskPerUnit * safeQuantity;
    const grossReward = rewardPerUnit * safeQuantity;
    const totalRisk = grossRisk + safeCosts;
    const netReward = Math.max(grossReward - safeCosts, 0);
    const ratio = totalRisk > 0 ? netReward / totalRisk : 0;
    const breakEvenWinRate = netReward + totalRisk > 0 ? (totalRisk / (netReward + totalRisk)) * 100 : 0;

    return { direction, riskPerUnit, rewardPerUnit, grossRisk, grossReward, totalRisk, netReward, ratio, breakEvenWinRate };
  }, [entry, stop, target, quantity, estimatedCosts]);

  const currency = (value) => `₹${Math.round(value || 0).toLocaleString("en-IN")}`;

  return (
    <div className="risk-planner seo-calculator">
      <div className="planner-inputs">
        <div className="planner-title"><span><Calculator size={18} /></span><div><small>DECISION-MATH TOOL</small><h3>Risk–Reward Calculator</h3></div></div>
        <div className="planner-form">
          <label>Entry price<input type="number" min="0" step="0.05" value={entry} onChange={(event) => setEntry(event.target.value)} /></label>
          <label>Stop-loss reference<input type="number" min="0" step="0.05" value={stop} onChange={(event) => setStop(event.target.value)} /></label>
          <label>Target price<input type="number" min="0" step="0.05" value={target} onChange={(event) => setTarget(event.target.value)} /></label>
          <label>Order quantity<input type="number" min="0" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} /></label>
          <label className="full-field">Estimated round-trip costs<input type="number" min="0" step="1" value={estimatedCosts} onChange={(event) => setEstimatedCosts(event.target.value)} /><small>Enter your own estimate for brokerage, taxes, spread and slippage.</small></label>
          <label>Trade direction<input value={result.direction} readOnly aria-label="Calculated trade direction" /></label>
        </div>
      </div>

      <div className="planner-output">
        <span className="output-kicker">COST-ADJUSTED OUTPUT</span>
        <div className="output-main"><span>Estimated reward for each ₹1 at risk</span><b>₹{result.ratio.toFixed(2)}</b></div>
        <div className={`risk-fit ${result.ratio >= 1 ? "risk-fit-ok" : "risk-fit-alert"}`}>
          <CheckCircle2 size={16} />
          <span>{result.ratio >= 1 ? "Estimated net reward is at least equal to total planned risk" : "Estimated net reward is below total planned risk"}</span>
        </div>
        <div className="output-grid">
          <div><span>Risk per unit</span><b>{currency(result.riskPerUnit)}</b></div>
          <div><span>Reward per unit</span><b>{currency(result.rewardPerUnit)}</b></div>
          <div><span>Gross price risk</span><b>{currency(result.grossRisk)}</b></div>
          <div><span>Gross potential reward</span><b>{currency(result.grossReward)}</b></div>
          <div><span>Total risk incl. costs</span><b>{currency(result.totalRisk)}</b></div>
          <div><span>Net reward after costs</span><b>{currency(result.netReward)}</b></div>
          <div><span>Reward : risk</span><b>{result.ratio.toFixed(2)} : 1</b></div>
          <div><span>Break-even win rate</span><b>{result.breakEvenWinRate.toFixed(2)}%</b></div>
          <div><span>Direction</span><b>{result.direction}</b></div>
        </div>
        <p>This calculator uses your estimates and does not predict target probability or guarantee stop execution. Actual charges, spread, slippage and gaps can differ.</p>
      </div>
    </div>
  );
}
