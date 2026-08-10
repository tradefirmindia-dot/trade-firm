import Link from "next/link";
import { ArrowRight, Calculator, Check, Gauge, ShieldCheck, Target } from "lucide-react";
import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "Advisory Risk Tools",
  description: "Use Trade Firm advisory support tools to plan position risk, quantity and risk-to-reward before considering a market decision.",
  alternates: { canonical: "https://www.tradefirm.in/tools" },
};

export default function ToolsPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="ADVISORY SUPPORT TOOLS"
        title="Make risk measurable"
        accent="before execution."
        text="Focused tools that turn trading inputs into a clearer risk plan and support responsible decisions alongside professional market research."
        primaryLabel="Open Risk Planner"
        primaryHref="/tools/risk-planner"
      >
        <div className="tool-hero-visual">
          <span><Calculator size={26} /></span>
          <small>AVAILABLE NOW</small>
          <h3>Risk Planner</h3>
          <p>Capital • Risk % • Entry • Stop • Quantity</p>
          <div><b>DEFINED RISK</b><strong>POSITION SIZE</strong></div>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first">
        <div className="section-head split-head">
          <div><span>AVAILABLE ADVISORY TOOL</span><h2>Risk Planner</h2></div>
          <p>Connect capital, stop distance and order quantity before considering a trade. See the actual rupee risk and target reference immediately.</p>
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
