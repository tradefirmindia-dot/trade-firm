import { Check, ShieldCheck } from "lucide-react";
import PageIntro from "../../../components/PageIntro";
import RiskRewardCalculator from "../../../components/RiskRewardCalculator";
import { siteIdentity } from "../../../lib/site-identity";

export const metadata = {
  title: "Risk Reward Ratio Calculator for Trading",
  description: "Calculate cost-adjusted trading risk, potential reward, reward-to-risk ratio and break-even win rate from entry, stop, target and quantity.",
  keywords: ["risk reward calculator", "trading risk reward ratio", "break even win rate calculator"],
  alternates: { canonical: `${siteIdentity.url}/tools/risk-reward-calculator` },
};

export default function RiskRewardCalculatorPage() {
  const url = `${siteIdentity.url}/tools/risk-reward-calculator`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "TRADE FIRM Risk–Reward Calculator",
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any web browser",
        isAccessibleForFree: true,
        description: "A cost-adjusted calculator for planned trading risk, reward-to-risk ratio and break-even win rate.",
        provider: { "@id": `${siteIdentity.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${siteIdentity.url}/tools` },
          { "@type": "ListItem", position: 3, name: "Risk–Reward Calculator", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro eyebrow="ADVISORY TOOLS / RISK–REWARD" title="Measure reward against" accent="the full planned risk." text="Enter the exact entry, stop, target, quantity and your own cost estimate to see a cost-adjusted reward-to-risk ratio and mathematical break-even win rate." primaryLabel="Speak with advisory desk" />
      <section className="section shell inner-section-first risk-tool-section"><RiskRewardCalculator /></section>
      <section className="section shell how-to-grid">
        <div className="section-head"><span>HOW TO READ THE OUTPUT</span><h2>A strong-looking ratio still needs a valid market thesis.</h2></div>
        <div>{[
          ["01", "Use a structural stop", "The stop should reflect thesis invalidation, not a number selected only to improve the ratio."],
          ["02", "Use a realistic target", "Potential reward should come from market structure and the intended holding period."],
          ["03", "Include execution costs", "Spread, slippage, brokerage and taxes reduce realised reward and can increase loss."],
          ["04", "Review realised results", "The planned ratio does not show target probability; track average realised gains and losses."],
        ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}</div>
      </section>
      <section className="shell tool-disclosure"><ShieldCheck size={22} /><div><h3>Calculation scope</h3><p>The output is educational decision math. It does not estimate the probability of success and cannot include every charge, gap, liquidity condition or execution outcome.</p></div></section>
    </main>
  );
}
