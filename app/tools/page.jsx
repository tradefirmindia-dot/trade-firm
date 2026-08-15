import Link from "next/link";
import { Activity, ArrowRight, Calculator, Check, Gauge, Scale, ShieldCheck, Target } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "Free Trading Risk Calculators & Advisory Tools",
  description: "Use three free TRADE FIRM tools for position sizing, cost-adjusted risk-reward and drawdown-recovery math before a market decision.",
  alternates: { canonical: "https://www.tradefirm.in/tools" },
};

export default function ToolsPage() {
  const tools = [
    { Icon: Calculator, label: "POSITION SIZING", title: "Risk Planner", text: "Connect capital, risk percentage, entry, stop and exact order quantity to planned and actual rupee risk.", href: "/tools/risk-planner" },
    { Icon: Scale, label: "DECISION MATH", title: "Risk–Reward Calculator", text: "Calculate cost-adjusted risk, potential reward, reward-to-risk ratio and mathematical break-even win rate.", href: "/tools/risk-reward-calculator" },
    { Icon: Activity, label: "CAPITAL RISK", title: "Drawdown Recovery Calculator", text: "See the capital drawdown and larger percentage gain required to return to the previous peak.", href: "/tools/drawdown-recovery-calculator" },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${siteIdentity.url}/tools`,
    name: "TRADE FIRM Trading Risk Calculators",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({ "@type": "ListItem", position: index + 1, name: tool.title, url: `${siteIdentity.url}${tool.href}` })),
    },
  };

  return (
    <main className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageIntro
        eyebrow="ADVISORY SUPPORT TOOLS"
        title="Make risk measurable"
        accent="before execution."
        text="Three focused calculators turn position, payoff and drawdown inputs into a clearer risk plan alongside professional market research."
        primaryLabel="Explore all calculators"
        primaryHref="#calculators"
      >
        <div className="tool-hero-visual">
          <span><Calculator size={26} /></span>
          <small>3 FREE TOOLS</small>
          <h3>Risk Decision Suite</h3>
          <p>Position size • Risk–reward • Drawdown</p>
          <div><b>DEFINED RISK</b><strong>DECISION MATH</strong></div>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first" id="calculators">
        <div className="section-head split-head">
          <div><span>FREE ADVISORY TOOLS</span><h2>Three calculators. Three different risk questions.</h2></div>
          <p>Use the tool that matches the current decision, then verify the final values, costs and order details with your broker platform.</p>
        </div>

        <article className="featured-tool-card">
          <div className="featured-tool-copy">
            <div className="service-icon"><Calculator size={23} /></div>
            <span>POSITION SIZING & RISK</span>
            <h3>Plan the rupee risk—not only the market direction.</h3>
            <p>The calculator shows planned risk, actual risk for your entered Qty, approximate position value, target price and a selectable 1:1–1:10 reward reference.</p>
            <ul>
              {["Manual order quantity", "Actual rupee risk", "Actual capital-at-risk percentage", "Mobile-friendly calculation"].map((item) => <li key={item}><Check size={15} /> {item}</li>)}
            </ul>
            <Link href="/tools/risk-planner" className="primary-btn">Use Risk Planner <ArrowRight size={17} /></Link>
          </div>
          <div className="featured-tool-output">
            <div><span><Gauge size={18} /> PLANNED RISK</span><strong>₹1,000</strong></div>
            <section><article><span>Price risk</span><b>₹5</b></article><article><span>Order Qty</span><b>Your input</b></article><article><span>Risk limit</span><b>1.00%</b></article><article><span>RR selection</span><b>1:1–1:10</b></article></section>
            <p><ShieldCheck size={15} /> Clear defined-risk output</p>
          </div>
        </article>

        <div className="tool-card-grid">
          {tools.slice(1).map(({ Icon, label, title, text, href }) => (
            <Link className="cluster-card tool-suite-card" href={href} key={href}>
              <div><span><Icon size={20} /></span><b>FREE</b></div>
              <small>{label}</small><h2>{title}</h2><p>{text}</p>
              <strong>Open calculator <ArrowRight size={16} /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section tools-principles-section">
        <div className="shell tool-principles">
          {[
            [Target, "Start with invalidation", "The stop distance changes the quantity that can fit inside a fixed risk limit."],
            [Gauge, "Test quantity before entry", "Enter any proposed quantity and review its actual risk before placing a market order."],
            [ShieldCheck, "Keep the boundary visible", "A calculator supports planning; it cannot remove execution, liquidity or market risk."],
          ].map(([Icon, title, text]) => <article key={title}><Icon size={22} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
    </main>
  );
}
