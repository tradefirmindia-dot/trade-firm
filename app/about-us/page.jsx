import Link from "next/link";
import { ArrowRight, Check, Compass, Eye, Layers3, ShieldCheck, Target, TrendingUp } from "lucide-react";
import PageIntro from "../../components/PageIntro";

export const metadata = {
  title: "About Us",
  description: "Learn about Trade Firm's Indian stock-market research platform, experience, research approach, markets covered and risk-first principles.",
  alternates: { canonical: "https://www.tradefirm.in/about-us" },
};

export default function AboutUsPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="ABOUT TRADE FIRM"
        title="Built from market experience."
        accent="Structured for disciplined decisions."
        text="Trade Firm is an Indian stock-market research platform focused on price action, derivatives, equities, IPO research and clearly defined risk."
      >
        <div className="about-hero-panel">
          <span>TRADE FIRM</span>
          <strong>TRADE • ANALYZE • GROW</strong>
          <div><b>08+</b><p>Years of hands-on Indian market experience</p></div>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first about-story">
        <div className="about-story-mark"><TrendingUp size={33} /><span>RESEARCH<br />FIRST</span></div>
        <div><span>OUR STORY</span><h2>A research platform for people who take market decisions seriously.</h2></div>
        <div>
          <p>Trade Firm was shaped by years of practical experience across Indian indices, options, futures and stocks. The goal is straightforward: replace noise and impulsive claims with structured research, transparent scenarios and visible risk.</p>
          <p>Our research language connects pre-market preparation, active-session context and post-market review. The 10X THINK framework and Risk Planner support the same philosophy—understand structure first and define risk before execution.</p>
        </div>
      </section>

      <section className="section about-principles-section">
        <div className="shell">
          <div className="section-head split-head"><div><span>OUR PRINCIPLES</span><h2>What the Trade Firm standard stands for.</h2></div><p>A premium interface matters, but trust is built through the quality, consistency and limits of the research behind it.</p></div>
          <div className="principles-grid">
            {[
              [Eye, "Clarity over noise", "Research should explain the context, the scenario and the condition that changes the view."],
              [ShieldCheck, "Risk before reward", "The amount at risk and the invalidation level belong in the plan before the objective."],
              [Layers3, "Process over impulse", "A repeatable framework is more useful than reacting emotionally to every price movement."],
              [Compass, "Independent research", "Every view comes from structured analysis, verified market context and documented rationale."],
            ].map(([Icon, title, text]) => <article key={title}><span><Icon size={23} /></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell about-coverage-section">
        <div className="about-coverage-copy"><span>WHAT WE RESEARCH</span><h2>From Indian index derivatives to equity and IPO research.</h2><p>Coverage is organised around the markets followed by active Indian participants, with primary focus on options and intraday traders.</p><Link href="/research-services" className="primary-btn">Explore research services <ArrowRight size={17} /></Link></div>
        <div className="about-coverage-list">
          {[
            ["01", "Indices", "NIFTY 50, BANK NIFTY, FINNIFTY, MIDCPNIFTY, NIFTY NEXT 50, SENSEX, BANKEX and broader benchmarks."],
            ["02", "Derivatives", "Index and stock options, index futures, stock futures and connected F&O market context."],
            ["03", "Equities", "Selected NSE and BSE stocks across intraday, swing and positional research horizons."],
            ["04", "Primary market", "IPO business, financial, valuation, peer and material-risk research."],
          ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}
        </div>
      </section>

      <section className="section about-cta-section">
        <div className="shell about-cta">
          <div><span><Target size={20} /></span><small>START WITH CLARITY</small><h2>Understand the research service before deciding.</h2><p>Share your preferred market segment and callback time. The Trade Firm team will explain the service, research process and risk framework.</p></div>
          <Link href="/#lead" className="primary-btn">Request a call <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
