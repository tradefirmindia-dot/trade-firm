import { Check, ShieldCheck } from "lucide-react";
import DrawdownRecoveryCalculator from "../../../components/DrawdownRecoveryCalculator";
import PageIntro from "../../../components/PageIntro";
import { siteIdentity } from "../../../lib/site-identity";

export const metadata = {
  title: "Trading Drawdown Recovery Calculator",
  description: "Calculate capital drawdown and the larger percentage gain required to recover from a reduced capital base with TRADE FIRM's free tool.",
  keywords: ["drawdown recovery calculator", "trading loss recovery percentage", "capital drawdown math"],
  alternates: { canonical: `${siteIdentity.url}/tools/drawdown-recovery-calculator` },
};

export default function DrawdownRecoveryCalculatorPage() {
  const url = `${siteIdentity.url}/tools/drawdown-recovery-calculator`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "TRADE FIRM Drawdown Recovery Calculator",
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any web browser",
        isAccessibleForFree: true,
        description: "A calculator explaining capital drawdown and the percentage gain needed to return to the prior peak.",
        provider: { "@id": `${siteIdentity.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${siteIdentity.url}/tools` },
          { "@type": "ListItem", position: 3, name: "Drawdown Recovery Calculator", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow="ADVISORY TOOLS / DRAWDOWN" title="See why losses and" accent="recovery are not equal." text="Enter peak and current capital to calculate drawdown and the percentage gain required to return to the previous peak from a smaller base." primaryLabel="Open the Risk Planner" primaryHref="/tools/risk-planner" />
      <section className="section shell inner-section-first risk-tool-section"><DrawdownRecoveryCalculator /></section>
      <section className="section shell how-to-grid">
        <div className="section-head"><span>USE THE MATH RESPONSIBLY</span><h2>Protect capital before planning recovery.</h2></div>
        <div>{[
          ["01", "Measure from the peak", "Drawdown compares current capital with the highest relevant capital level."],
          ["02", "Respect the smaller base", "After a loss, the same rupee gain is a larger percentage of remaining capital."],
          ["03", "Review the cause", "Separate normal strategy variance from execution errors, concentration or a changed market regime."],
          ["04", "Avoid recovery chasing", "Increasing size after a loss can deepen drawdown instead of repairing it."],
        ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}</div>
      </section>
      <section className="shell tool-disclosure"><ShieldCheck size={22} /><div><h3>Calculation scope</h3><p>This tool describes arithmetic only. It does not forecast returns, estimate recovery time or recommend increasing risk after a loss.</p></div></section>
    </main>
  );
}
