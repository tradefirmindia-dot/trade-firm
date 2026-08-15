"use client";

import { useEffect, useMemo, useState } from "react";

const fallbackItems = [
  { key: "nifty50", name: "NIFTY 50", exchange: "NSE", price: null, changePercent: null },
  { key: "banknifty", name: "BANK NIFTY", exchange: "NSE", price: null, changePercent: null },
  { key: "midcap", name: "MIDCAP SELECT", exchange: "NSE", price: null, changePercent: null },
  { key: "sensex", name: "SENSEX", exchange: "BSE", price: null, changePercent: null },
  { key: "bankex", name: "BANKEX", exchange: "BSE", price: null, changePercent: null },
  { key: "finnifty", name: "FINNIFTY", exchange: "NSE", price: null, changePercent: null },
];

const priceFormatter = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Quote({ quote }) {
  const hasPrice = Number.isFinite(quote.price);
  const changePercent = Number(quote.changePercent);
  const direction = !hasPrice || !Number.isFinite(changePercent)
    ? "pending"
    : changePercent > 0
      ? "positive"
      : changePercent < 0
        ? "negative"
        : "flat";

  return (
    <article className="market-quote" role="listitem">
      <div><span>{quote.name}</span><small>{quote.exchange}</small></div>
      <strong>{hasPrice ? priceFormatter.format(quote.price) : "—"}</strong>
      <b className={direction}>
        {hasPrice && Number.isFinite(changePercent)
          ? `${changePercent > 0 ? "+" : ""}${changePercent.toFixed(2)}%`
          : "Fetching quote"}
      </b>
    </article>
  );
}

export default function MarketTicker() {
  const [items, setItems] = useState(fallbackItems);
  const [feedState, setFeedState] = useState("loading");
  const [generatedAt, setGeneratedAt] = useState(null);

  useEffect(() => {
    let active = true;
    let interval;

    const loadPrices = async () => {
      if (document.hidden) return;
      try {
        const response = await fetch("/api/market-prices", { cache: "no-store" });
        if (!response.ok) throw new Error("Market feed unavailable");
        const data = await response.json();
        if (!active) return;
        if (Array.isArray(data.items) && data.items.length) setItems(data.items);
        setGeneratedAt(data.generatedAt || null);
        setFeedState(data.available > 0 ? "ready" : "waiting");
      } catch {
        if (active) setFeedState("waiting");
      }
    };

    const initialLoad = window.setTimeout(loadPrices, 900);
    interval = window.setInterval(loadPrices, 120000);
    const onVisibilityChange = () => {
      if (!document.hidden) loadPrices();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      active = false;
      window.clearTimeout(initialLoad);
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const feedNote = useMemo(() => {
    if (feedState === "loading") return "Connecting to exchange feeds…";
    if (feedState === "waiting") return "Exchange feed reconnecting automatically";
    if (!generatedAt) return "Exchange feeds · Auto-refresh 2 min";
    const date = new Date(generatedAt);
    if (Number.isNaN(date.getTime())) return "Exchange feeds · Auto-refresh 60 sec";
    return `Updated ${date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} · Auto-refresh 2 min`;
  }, [feedState, generatedAt]);

  return (
    <section className="market-ticker" aria-label="Indian stock market index prices">
      <div className="market-ticker-head shell">
        <div>
          <i />
          <span>MARKET PRICES</span>
        </div>
        <small>{feedNote}</small>
      </div>
      <div className="market-ticker-feed">
        <div className="market-ticker-track" role="list" aria-live="polite">
          <div className="market-ticker-group">
            {items.map((quote) => <Quote quote={quote} key={quote.key} />)}
          </div>
          <div className="market-ticker-group" aria-hidden="true">
            {items.map((quote) => <Quote quote={quote} key={`repeat-${quote.key}`} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
