import Link from "next/link";
import { ArrowRight, Check, FileText, ShieldCheck } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "Sample Stock Market Research Format",
  description: "Review an illustrative Trade Firm research-report structure covering context, evidence, scenarios, invalidation, risk and post-market review.",
  alternates: { canonical: `${siteIdentity.url}/sample-research-report` },
};

const rows = [
  ["01", "Research question", "Instrument, intended horizon and the decision the note is designed to support."],
  ["02", "Evidence reviewed", "Relevant price structure, volume, liquidity, events, filings or product information."],
  ["03", "Primary scenario", "The evidence, activation condition and market behaviour supporting the view."],
  ["04", "Alternative scenario", "What would support a different outcome or make waiting more appropriate."],
  ["05", "Invalidation and risk", "The condition that changes the view, potential execution risks and permitted rupee risk."],
  ["06", "Review note", "What occurred, whether the process was followed and what new evidence matters."],
];

export default function SampleResearchReportPage() {
  return (
    <main className="inner-page sample-report-page">
      <PageIntro eyebrow="ILLUSTRATIVE RESEARCH FORMAT" title="See how a market view" accent="can be structured." text="This educational sample shows the fields used to organise a research note. It is not a live recommendation, price target or performance claim." primaryLabel="Read our methodology" primaryHref="/research-methodology">
        <div className="sample-hero-card"><FileText size={31} /><span>SAMPLE FORMAT</span><h3>Context → Evidence → Scenario → Risk → Review</h3><p>No live security, price or trade is included.</p></div>
      </PageIntro>

      <section className="section shell inner-section-first sample-report-shell">
        <aside><ShieldCheck size={22} /><div><b>Important</b><p>The template is illustrative. Actual formats depend on the market, product, horizon, available evidence and service scope. Market outcomes cannot be guaranteed.</p></div></aside>
        <div className="sample-report-list">{rows.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div><Check size={17} /></article>)}</div>
        <div className="sample-report-cta"><div><span>RESEARCH TRANSPARENCY</span><h2>Understand the process before the market view.</h2></div><Link href="/contact" className="primary-btn">Speak with our desk <ArrowRight size={17} /></Link></div>
      </section>
    </main>
  );
}
