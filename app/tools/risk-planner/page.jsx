import { Check, ShieldCheck } from "lucide-react";
import PageIntro from "../../../components/PageIntro";
import RiskPlanner from "../../../components/RiskPlanner";
import { siteIdentity } from "../../../lib/site-identity";

export const metadata = {
  title: "Trading Risk Planner for Advisory Decisions",
  description: "Calculate planned rupee risk, stop-distance risk, actual order risk, target price and position value with Trade Firm's advisory Risk Planner.",
  alternates: { canonical: "https://www.tradefirm.in/tools/risk-planner" },
};

export default function RiskPlannerPage() {
  const url = `${siteIdentity.url}/tools/risk-planner`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "TRADE FIRM Trading Risk Planner",
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any web browser",
        isAccessibleForFree: true,
        description: "A position-sizing and rupee-risk calculator using capital, risk percentage, entry, stop and order quantity.",
        provider: { "@id": `${siteIdentity.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteIdentity.url },
          { "@type": "ListItem", position: 2, name: "Tools", item: `${siteIdentity.url}/tools` },
          { "@type": "ListItem", position: 3, name: "Risk Planner", item: url },
        ],
      },
    ],
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="ADVISORY TOOLS / RISK PLANNER"
        title="Check your trade risk"
        accent="before placing the order."
        text="Enter trading capital, planned risk, Entry Price, Stop Loss, Qty and a Risk–Reward ratio from 1:1 to 1:10. The planner makes the actual rupee risk and target reference visible instantly."
        primaryLabel="Speak with advisory desk"
      />

      <section className="section shell inner-section-first risk-tool-section">
        <RiskPlanner />
      </section>

      <section className="section shell how-to-grid">
        <div className="section-head"><span>HOW TO USE IT</span><h2>Set the inputs. See the risk instantly.</h2></div>
        <div>
          {[
            ["01", "Enter trading capital", "Use the capital allocated to the trading plan—not an unrelated account value."],
            ["02", "Choose planned risk", "Set the maximum percentage intended for this trade setup."],
            ["03", "Add entry and stop", "The difference becomes price risk per unit."],
            ["04", "Enter order quantity", "Use the exact quantity planned for the order and review the actual rupee risk."],
          ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}
        </div>
      </section>

      <section className="shell tool-disclosure">
        <ShieldCheck size={22} />
        <div><h3>Calculation scope</h3><p>Position value is not the margin required by an exchange or broker. Charges, slippage, gaps, liquidity and changing margin requirements are not included, so review the final order values with your broker platform before execution.</p></div>
      </section>
    </main>
  );
}
