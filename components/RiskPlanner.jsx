"use client";

import { useMemo, useState } from "react";
import { Calculator, CheckCircle2 } from "lucide-react";

export default function RiskPlanner() {
  const [capital, setCapital] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entry, setEntry] = useState(100);
  const [stop, setStop] = useState(95);
  const [rewardRatio, setRewardRatio] = useState(3);
  const [orderQuantity, setOrderQuantity] = useState("");

  const result = useMemo(() => {
    const safeCapital = Math.max(Number(capital) || 0, 0);
    const safeRisk = Math.min(Math.max(Number(riskPercent) || 0, 0), 100);
    const safeEntry = Math.max(Number(entry) || 0, 0);
    const safeStop = Math.max(Number(stop) || 0, 0);
    const safeRewardRatio = Math.min(Math.max(Number(rewardRatio) || 1, 1), 10);
    const distance = Math.abs(safeEntry - safeStop);
    const riskAmount = (safeCapital * safeRisk) / 100;
    const hasQuantity = String(orderQuantity).trim() !== "" && Number(orderQuantity) > 0;
    const activeQuantity = hasQuantity ? Math.max(Math.floor(Number(orderQuantity) || 0), 0) : 0;
    const actualRisk = activeQuantity * distance;
    const actualRiskPercent = safeCapital > 0 ? (actualRisk / safeCapital) * 100 : 0;

    const rewardDistance = distance * safeRewardRatio;
    const direction = safeEntry >= safeStop ? "Long" : "Short";
    const targetPrice = direction === "Long"
      ? safeEntry + rewardDistance
      : Math.max(safeEntry - rewardDistance, 0);

    return {
      riskAmount,
      distance,
      activeQuantity,
      hasQuantity,
      actualRisk,
      actualRiskPercent,
      positionValue: activeQuantity * safeEntry,
      withinRisk: actualRisk <= riskAmount,
      riskDifference: Math.abs(riskAmount - actualRisk),
      rewardRatio: safeRewardRatio,
      rewardDistance,
      direction,
      targetPrice,
    };
  }, [capital, riskPercent, entry, stop, rewardRatio, orderQuantity]);

  const currency = (value) => `₹${Math.round(value || 0).toLocaleString("en-IN")}`;

  return (
    <div className="risk-planner">
      <div className="planner-inputs">
        <div className="planner-title"><span><Calculator size={18} /></span><div><small>RISK MANAGEMENT TOOL</small><h3>Risk Planner</h3></div></div>
        <div className="planner-form">
          <label>Trading capital<input type="number" min="0" value={capital} onChange={(event) => setCapital(event.target.value)} /></label>
          <label>Risk per setup (%)<input type="number" min="0" max="100" step="0.25" value={riskPercent} onChange={(event) => setRiskPercent(event.target.value)} /></label>
          <label>Entry Price<input type="number" min="0" step="0.05" value={entry} onChange={(event) => setEntry(event.target.value)} /></label>
          <label>Stop Loss<input type="number" min="0" step="0.05" value={stop} onChange={(event) => setStop(event.target.value)} /></label>
          <label>
            Risk–reward ratio
            <select value={rewardRatio} onChange={(event) => setRewardRatio(event.target.value)}>
              {Array.from({ length: 10 }, (_, index) => index + 1).map((ratio) => <option value={ratio} key={ratio}>1:{ratio}</option>)}
            </select>
          </label>
          <label>Trade Direction<input value={result.direction} readOnly aria-label="Trade direction" /></label>
          <label className="quantity-field">
            <span>Order quantity (Qty)</span>
            <input type="number" min="1" step="1" placeholder="Enter quantity" value={orderQuantity} onChange={(event) => setOrderQuantity(event.target.value)} />
            <small>Enter the exact quantity you plan to trade.</small>
          </label>
        </div>
      </div>

      <div className="planner-output">
        <span className="output-kicker">DEFINED-RISK OUTPUT</span>
        <div className="output-main">
          <span>{result.hasQuantity ? `Actual risk for ${result.activeQuantity.toLocaleString("en-IN")} Qty` : "Enter Qty to calculate actual risk"}</span>
          <b>{result.hasQuantity ? currency(result.actualRisk) : "—"}</b>
        </div>
        {result.hasQuantity && (
          <div className={`risk-fit ${result.withinRisk ? "risk-fit-ok" : "risk-fit-alert"}`}>
            <CheckCircle2 size={16} />
            <span>{result.withinRisk ? `${currency(result.riskDifference)} below the planned risk limit` : `${currency(result.riskDifference)} above the planned risk limit`}</span>
          </div>
        )}
        <div className="output-grid">
          <div><span>Price risk</span><b>{currency(result.distance)}</b></div>
          <div><span>Order Qty</span><b>{result.hasQuantity ? result.activeQuantity.toLocaleString("en-IN") : "—"}</b></div>
          <div><span>Planned risk limit</span><b>{currency(result.riskAmount)}</b></div>
          <div><span>Approx. position value</span><b>{result.hasQuantity ? currency(result.positionValue) : "—"}</b></div>
          <div><span>Capital at risk</span><b>{result.hasQuantity ? `${result.actualRiskPercent.toFixed(2)}%` : "—"}</b></div>
          <div><span>Selected ratio</span><b>1:{result.rewardRatio}</b></div>
          <div><span>Reward per unit</span><b>{currency(result.rewardDistance)}</b></div>
          <div><span>Target Price</span><b>{currency(result.targetPrice)}</b></div>
          <div><span>Trade Direction</span><b>{result.direction}</b></div>
        </div>
        <p>Position value is not margin required. Review applicable charges, slippage, liquidity and broker margin before execution.</p>
      </div>
    </div>
  );
}
