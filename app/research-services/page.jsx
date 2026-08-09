import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CandlestickChart,
  Check,
  CircleDollarSign,
  Clock3,
  Landmark,
  LineChart,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { broadMarketIndices, majorIndices, researchServices, sectorIndices } from "../../lib/site-content";

export const metadata = {
  title: "Research Services",
  description: "Explore Trade Firm research across Indian indices, options, futures, F&O, equities, intraday, swing, positional markets and IPOs.",
  alternates: { canonical: "https://www.tradefirm.in/research-services" },
};

const icons = [CandlestickChart, BarChart3, LineChart, ScanSearch, BriefcaseBusiness, Clock3, ShieldCheck, Building2, Landmark];

export default function ResearchServicesPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="RESEARCH SERVICES"
        title="Complete Indian market research."
        accent="One disciplined standard."
        text="Structured research and research-backed market recommendations across NSE and BSE indices, options, futures, F&O, equities, intraday, swing, positional opportunities and IPOs."
      >
        <div className="hero-index-panel">
          <span>PRIMARY RESEARCH COVERAGE</span>
          <div>{majorIndices.map((index) => <b key={index}>{index}</b>)}</div>
          <p>Major derivatives, cash-market benchmarks and volatility context.</p>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first">
        <div className="section-head split-head">
          <div><span>OUR RESEARCH COVERAGE</span><h2>Research organised by market, horizon and risk.</h2></div>
          <p>Each service follows a clear process—market context, decision levels, invalidation, risk and review.</p>
        </div>

        <div className="service-detail-grid">
          {researchServices.map((service, index) => {
            const Icon = icons[index];
            return (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-head"><span><Icon size={22} /></span><small>{service.tag}</small><b>{String(index + 1).padStart(2, "0")}</b></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <ul>{service.points.map((point) => <li key={point}><Check size={14} /> {point}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section index-universe-section">
        <div className="shell">
          <div className="section-head split-head">
            <div><span>INDEX UNIVERSE</span><h2>Major, broad-market, sectoral and thematic coverage.</h2></div>
            <p>The research universe prioritises actively followed markets while retaining broader NSE and BSE context.</p>
          </div>

          <div className="index-universe-grid">
            <article className="index-list-card primary-index-list">
              <div><CircleDollarSign size={21} /><span>MAJOR INDICES</span></div>
              <h3>Primary index and volatility research</h3>
              <div className="index-pills">{majorIndices.map((index) => <span key={index}>{index}</span>)}</div>
            </article>
            <article className="index-list-card">
              <div><Landmark size={21} /><span>BROAD MARKET</span></div>
              <h3>Large, mid, small and micro-cap benchmarks</h3>
              <div className="index-pills">{broadMarketIndices.map((index) => <span key={index}>{index}</span>)}</div>
            </article>
            <article className="index-list-card full-index-card">
              <div><BarChart3 size={21} /><span>SECTORAL & THEMATIC</span></div>
              <h3>Industry, sector and theme-level market context</h3>
              <div className="index-pills compact-pills">{sectorIndices.map((index) => <span key={index}>{index}</span>)}</div>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell research-format-section">
        <div className="research-format-copy">
          <span>WHAT A RESEARCH VIEW MAY INCLUDE</span>
          <h2>Clear information before a market decision.</h2>
          <p>The exact format depends on the market and time horizon. The aim is to make the scenario, risk and invalidation understandable before execution.</p>
          <Link className="primary-btn" href="/#lead">Get service details <ArrowRight size={17} /></Link>
        </div>
        <div className="research-format-list">
          {[
            ["01", "Market context", "Trend, structure, volatility, sector strength and important events."],
            ["02", "Decision levels", "Important zones, entry conditions and confirmation references."],
            ["03", "Invalidation & risk", "Stop or invalidation context, position risk and risk-to-reward framework."],
            ["04", "Objectives & review", "Scenario objectives, monitoring conditions and post-market review."],
          ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>
    </main>
  );
}
