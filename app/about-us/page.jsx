import Link from "next/link";
import { ArrowRight, Check, Compass, Eye, Layers3, Mail, MapPin, Phone, ShieldCheck, Target, TrendingUp } from "lucide-react";
import PageIntro from "../../components/PageIntro";
import { siteIdentity } from "../../lib/site-identity";

export const metadata = {
  title: "About Our Stock Market Advisory & Research Firm",
  description: "Learn about Trade Firm, an Indian stock market advisory and research firm whose market journey began in 2015, built around structured analysis and defined-risk principles.",
  alternates: { canonical: "https://www.tradefirm.in/about-us" },
};

export default function AboutUsPage() {
  return (
    <main className="inner-page">
      <PageIntro
        eyebrow="ABOUT TRADE FIRM"
        title="Market experience, transformed into"
        accent="professional guidance."
        text="Trade Firm’s market journey began in 2015. Today, the firm focuses on price action, derivatives, equities, IPO analysis and clearly communicated risk."
      >
        <div className="about-hero-panel">
          <span>TRADE FIRM</span>
          <strong>TRADE • ANALYZE • GROW</strong>
          <div><b>2015</b><p>The TRADE FIRM market journey began</p></div>
        </div>
      </PageIntro>

      <section className="section shell inner-section-first about-story">
        <div className="about-story-mark"><TrendingUp size={33} /><span>ADVISORY<br />&amp; RESEARCH</span></div>
        <div><span>OUR STORY</span><h2>An advisory and research firm for serious market participants.</h2></div>
        <div>
          <p>The TRADE FIRM market journey began in 2015 with hands-on market study and the development of a disciplined approach to Indian indices, options, futures and equities. Over time, that foundation evolved into a professional research and advisory process. Our purpose is straightforward: replace noise, vague calls and exaggerated claims with structured analysis, transparent scenarios and visible risk.</p>
          <p>Our advisory language connects pre-market preparation, active-session context and post-market review. The 10X THINK framework and Risk Planner support the same philosophy—understand the research rationale, define invalidation and make risk measurable before execution.</p>
        </div>
      </section>

      <section className="section about-principles-section">
        <div className="shell">
          <div className="section-head split-head"><div><span>OUR PROFESSIONAL PRINCIPLES</span><h2>What the Trade Firm standard stands for.</h2></div><p>Trust is built through research quality, responsible guidance, consistent communication and clear limits—not performance theatre.</p></div>
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

      <section className="section shell identity-section">
        <div className="section-head split-head"><div><span>OFFICIAL IDENTITY &amp; CONTACT</span><h2>Know where and how to reach Trade Firm.</h2></div><p>Verify service communication through the official channels published across tradefirm.in.</p></div>
        <div className="identity-grid">
          <article><MapPin size={22} /><small>MAIN BRANCH</small><h3>Thane, Maharashtra</h3></article>
          <article><MapPin size={22} /><small>SECOND BRANCH</small><h3>Navi Mumbai, Maharashtra</h3></article>
          <article><Phone size={22} /><small>OFFICIAL PHONE</small><h3><a href={`tel:${siteIdentity.phoneHref}`}>{siteIdentity.phoneDisplay}</a></h3></article>
          <article><Mail size={22} /><small>OFFICIAL EMAIL</small><h3><a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a></h3></article>
        </div>
        <div className="identity-actions"><Link href="/trust-centre">Open Trust Centre <ArrowRight size={16} /></Link><Link href="/authors/trade-firm-research-desk">Meet the Research Desk <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section shell about-coverage-section">
        <div className="about-coverage-copy">
          <span>WHAT WE ADVISE &amp; RESEARCH</span>
          <h2>From Indian index derivatives to equity and IPO research.</h2>
          <p>Coverage is organised around the markets followed by active Indian participants, with primary focus on options and intraday traders.</p>
          <Link href="/research-services" className="primary-btn">Explore advisory &amp; research <ArrowRight size={17} /></Link>
          <nav className="identity-actions" aria-label="Explore core Trade Firm services">
            <Link href="/stock-market-advisory-india">Stock Market Advisory India <ArrowRight size={16} /></Link>
            <Link href="/ipo-research">IPO Research India <ArrowRight size={16} /></Link>
            <Link href="/blogs/intraday-stock-market-advisory-checklist">Intraday advisory checklist <ArrowRight size={16} /></Link>
          </nav>
        </div>
        <div className="about-coverage-list">
          {[
              ["01", "Index advisory", "Structured views across NIFTY 50, BANK NIFTY, FINNIFTY, MIDCPNIFTY, SENSEX, BANKEX and broader benchmarks."],
              ["02", "Options & futures", "Index and stock options, index futures, stock futures and connected F&O advisory context."],
              ["03", "Equity advisory", "Selected NSE and BSE equities across intraday, swing and positional research horizons."],
              ["04", "Investment research", "IPO business, financial, valuation, peer comparison and material-risk analysis."],
          ].map(([number, title, text]) => <article key={number}><b>{number}</b><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}
        </div>
      </section>

      <section className="section about-cta-section">
        <div className="shell about-cta">
          <div><span><Target size={20} /></span><small>START WITH CLARITY</small><h2>Understand the advisory or research service before deciding.</h2><p>Share your preferred market segment and callback time. The Trade Firm desk will explain the scope, research process, onboarding requirements and risk framework.</p></div>
          <Link href="/#lead" className="primary-btn">Speak with our desk <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
