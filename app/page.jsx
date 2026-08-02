"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, BrainCircuit, CandlestickChart, CheckCircle2,
  ChevronDown, LineChart, Menu, ShieldCheck, X, Activity, Gauge,
  Layers3, MessageCircle, Sparkles, Target, TrendingUp, Zap
} from "lucide-react";

const services = [
  {
    icon: CandlestickChart,
    title: "Index Market Research",
    text: "Structured research across NIFTY, BANK NIFTY, FINNIFTY, SENSEX and major Indian benchmarks."
  },
  {
    icon: LineChart,
    title: "Price Action Analysis",
    text: "Professional analysis of trend, structure, support, resistance, liquidity and confirmation."
  },
  {
    icon: BarChart3,
    title: "Options Strategy Research",
    text: "Research focused on premium behaviour, volatility, timing, risk and disciplined options execution."
  },
  {
    icon: BrainCircuit,
    title: "Trading Strategy & Risk",
    text: "Decision frameworks built around capital protection, execution discipline and market psychology."
  }
];

const faqs = [
  [
    "What markets does Trade Firm cover?",
    "Trade Firm provides professional market research across NIFTY, BANK NIFTY, FINNIFTY, SENSEX and selected high-volume stocks."
  ],
  [
    "What research methodology do you use?",
    "Our research is based on price action, market structure, trend analysis, support and resistance, liquidity concepts and disciplined risk management."
  ],
  [
    "Do you provide daily market research?",
    "Yes. We publish structured pre-market and post-market research, key trading levels and market outlook reports."
  ],
  [
    "Who can benefit from Trade Firm research?",
    "Our research is designed for beginners, active traders and experienced market participants who value a disciplined and structured approach."
  ]
];

function LeadForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    fund: "Below ₹50,000",
    segment: "Option Trading",
    consent: false
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setStatus("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (!form.consent) {
      setStatus("Please accept the consent checkbox.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Submission failed");
      setStatus("Thank you. Trade Firm will contact you shortly.");
      setForm({
  name: "",
  phone: "",
  fund: "Below ₹50,000",
  segment: "Option Trading",
  consent: false
});
    } catch {
      setStatus("Could not submit right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`lead-card ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="form-kicker">FREE DISCOVERY CALL</div>
      <h3>Talk to the Trade Firm team.</h3>
      <p className="form-copy">Share your details and preferred market-learning goal.</p>

      <label>Full name
        <input name="name" value={form.name} onChange={change} placeholder="Enter your name" required />
      </label>

      <label>Mobile number
        <div className="phone-field">
          <span>+91</span>
          <input name="phone" inputMode="numeric" maxLength="10" value={form.phone} onChange={change} placeholder="10-digit number" required />
        </div>
      </label>

      <div className="form-grid">
        <label>
  Fund
  <select
    name="fund"
    value={form.fund}
    onChange={change}
  >
    <option>Below ₹50,000</option>
    <option>₹50,000 - ₹1,00,000</option>
    <option>₹1,00,000 - ₹3,00,000</option>
    <option>₹3,00,000 - ₹5,00,000</option>
    <option>Above ₹5,00,000</option>
  </select>
</label>

<label>
  Segments
  <select
    name="segment"
    value={form.segment}
    onChange={change}
  >
    <option>Option Trading</option>
    <option>Futures Trading</option>
    <option>Stock Trading</option>
    <option>Intraday Trading</option>
    <option>Swing Trading</option>
    <option>All Segments</option>
  </select>
</label>
</div>
      <label className="consent">
        <input type="checkbox" name="consent" checked={form.consent} onChange={change} />
        <span>I agree to be contacted by Trade Firm through call or WhatsApp regarding this enquiry.</span>
      </label>

      <button className="submit-btn" disabled={loading}>
        <span>{loading ? "Submitting..." : "Request a Callback"}</span>
        <ArrowRight size={18} />
      </button>

      <small className="privacy">Your information is used only for this enquiry and follow-up.</small>
      {status && <div className="form-status">{status}</div>}
    </form>
  );
}

function AnimatedBackdrop() {
  const bars = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    left: `${1 + i * 3.6}%`,
    height: 45 + ((i * 31) % 145),
    delay: `${(i % 9) * .18}s`
  })), []);

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid-bg" />
      <div className="light-orb orb-a" />
      <div className="light-orb orb-b" />
      <div className="candles">
        {bars.map((b, i) => <i key={i} style={b} />)}
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 650);
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", close);
    };
  }, []);

  return (
    <>
      <div className={`site-loader ${loaded ? "hide" : ""}`}>
        <img src="/tf-brand-mark.svg" alt="" />
        <span>TRADE FIRM</span>
        <small>Preparing your market workspace</small>
      </div>

      <AnimatedBackdrop />

      <header className="site-header">
        <a className="brand" href="#home">
          <img src="/tf-brand-mark.svg" alt="Trade Firm brand mark" />
          <div><strong>TRADE FIRM</strong><span>TRADE • ANALYZE • GROW</span></div>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <a href="#why">Why Trade Firm</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#lead" className="nav-cta">Get a Callback</a>
        </nav>
      </header>

      <main>
        <section className="hero shell" id="home">
  <div className="hero-copy reveal">
    <div className="eyebrow">
      <i /> INDIA&apos;S PREMIUM STOCK MARKET RESEARCH FIRM
    </div>

    <h1>
      Professional Market Research.
      <br />
      <span>Smarter Trading Decisions.</span>
    </h1>

    <p className="hero-text">
      Trade Firm delivers professional market research, price action analysis,
      options strategy and disciplined risk management for serious participants
      in India&apos;s financial markets.
    </p>

    <div className="hero-stats">
      <div>
        <b>8+</b>
        <span>Years of Market Experience</span>
      </div>

      <div>
        <b>5+</b>
        <span>Research Coverage</span>
      </div>

      <div>
        <b>100%</b>
        <span>Risk Management Focus</span>
      </div>
    </div>

    <div className="hero-actions">
      <a href="#lead" className="primary-btn">
        Book Strategy Consultation
      </a>

      <a href="#services" className="secondary-btn">
        Explore Research
      </a>
    </div>

    <div className="trust-strip">
      <div>
        <CheckCircle2 />
        <p>
          <b>PRICE ACTION</b>
          <span>Institutional market structure analysis.</span>
        </p>
      </div>

      <div>
        <ShieldCheck />
        <p>
          <b>RISK FIRST</b>
          <span>Professional capital preservation framework.</span>
        </p>
      </div>

      <div>
        <BrainCircuit />
        <p>
          <b>CLEAR PROCESS</b>
          <span>Research-driven execution with disciplined planning.</span>
        </p>
      </div>
    </div>

    <div className="small-disclosure">
      Professional research. Transparent process. No unrealistic promises.
    </div>
  </div>

  <div className="hero-side reveal delay">
    <div className="form-glow" />
    <div id="lead">
      <LeadForm />
    </div>
  </div>
</section>

        <div className="ticker"><div>
          NIFTY 50 <i /> BANK NIFTY <i /> FINNIFTY <i /> SENSEX <i /> MIDCAP <i /> INDIA VIX <i />
          NIFTY 50 <i /> BANK NIFTY <i /> FINNIFTY <i /> SENSEX <i /> MIDCAP <i /> INDIA VIX <i />
        </div></div>

        <section className="section shell v6-workspace">
  <div className="section-head">
    <span>PROFESSIONAL MARKET RESEARCH</span>
    <h2>Institutional-style analysis for informed trading decisions.</h2>
    <p>
      Trade Firm provides structured market research across NIFTY, BANK NIFTY,
      FINNIFTY, SENSEX and other key market segments. Every research view is
      built around price action, market structure and disciplined risk management.
    </p>
  </div>

          <div className="workspace-grid">
            <article className="workspace-main">
              <div className="workspace-top">
               <small>MARKET RESEARCH</small>
<h3>Institutional Analysis</h3>
<span>PROFESSIONAL VIEW</span>
              </div>
              <div className="workspace-chart">
                <svg viewBox="0 0 760 300" preserveAspectRatio="none">
                  <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#d7b65f" stopOpacity=".34"/><stop offset="100%" stopColor="#d7b65f" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0 235 C70 180 110 240 165 175 S260 155 310 190 S390 110 455 145 S555 80 620 105 S700 40 760 58 L760 300 L0 300Z" fill="url(#area)"/>
                  <path className="chart-path" d="M0 235 C70 180 110 240 165 175 S260 155 310 190 S390 110 455 145 S555 80 620 105 S700 40 760 58" fill="none" stroke="#d7b65f" strokeWidth="4"/>
                </svg>
              </div>
              <div className="workspace-metrics">
                <div>
  <Activity />
  <b>Market Structure</b>
  <span>Trend, momentum and institutional context</span>
</div>

<div>
  <Target />
  <b>Key Trading Levels</b>
  <span>Support, resistance and high-probability zones</span>
</div>

<div>
  <ShieldCheck />
  <b>Risk Management</b>
  <span>Defined invalidation and capital protection</span>
</div>
              </div>
            </article>

            <div className="workspace-side">
              {[
                [Gauge,"Risk-first process","Build decisions around protection, not excitement."],
                [Layers3,"Multi-index coverage","Structured views across key Indian benchmarks."],
                [Sparkles, "Institutional Reports", "Professional research reports with structured market analysis and actionable insights."],
                [MessageCircle, "Daily Market Outlook", "Pre-market and post-market reports covering trend, key levels and trading opportunities."],
              ].map(([Icon,title,copy]) => (
                <article className="workspace-mini" key={title}>
                  <Icon size={23}/><div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-band"><div className="shell proof-grid">
         {[
  [
    "INDEX RESEARCH",
    "Professional analysis across NIFTY, BANK NIFTY, FINNIFTY and SENSEX"
  ],
  [
    "PRICE ACTION",
    "Market structure, liquidity and high-probability trading zones"
  ],
  [
    "RISK MANAGEMENT",
    "Defined stop-loss, capital protection and disciplined execution"
  ],
  [
    "DAILY MARKET OUTLOOK",
    "Research-driven market preparation before every trading session"
  ]
].map(([v, l]) => (
  <div key={v}>
    <b>{v}</b>
    <span>{l}</span>
  </div>
))}
        </div></section>

        <section className="section shell" id="why">
  <div className="section-head">
    <span>WHY TRADE FIRM</span>
    <h2>Research built for serious market decisions.</h2>
    <p>
      Trade Firm combines professional market analysis, structured price action
      research and disciplined risk management to help traders approach the
      market with greater clarity and confidence.
    </p>
  </div>

  <div className="feature-grid">
    <article className="feature feature-main">
      <div className="feature-visual">
        <img src="/tf-brand-mark.svg" alt="Trade Firm research mark" />
        <div className="chart-line">
          <TrendingUp size={130} />
        </div>
      </div>

      <small>THE TRADE FIRM RESEARCH STANDARD</small>
      <h3>Analysis. Strategy. Risk Management.</h3>
      <p>
        A professional research framework focused on market structure,
        actionable levels and disciplined execution.
      </p>
    </article>

    {[
      [
        "01",
        "Professional Market Research",
        "Structured analysis across major Indian indices, market segments and trading opportunities."
      ],
      [
        "02",
        "Price Action Expertise",
        "Research based on trend, market structure, support, resistance and confirmation."
      ],
      [
        "03",
        "Risk-First Approach",
        "Every market view is built around defined invalidation and capital protection."
      ]
    ].map(i => (
      <article className="feature" key={i[0]}>
        <b>{i[0]}</b>
        <h3>{i[1]}</h3>
        <p>{i[2]}</p>
      </article>
    ))}
  </div>
</section>

        <section className="section shell" id="services">
          <div className="section-head">
  <span>OUR RESEARCH COVERAGE</span>
  <h2>Comprehensive analysis across India's financial markets.</h2>
  <p>
    Our research framework covers major indices, derivatives, price action,
    market structure and risk management to support disciplined trading
    decisions.
  </p>
</div>
          <div className="service-grid">
            {services.map(({icon:Icon,title,text},index) => <article className="service" key={title}><Icon size={26}/><b>0{index+1}</b><h3>{title}</h3><p>{text}</p><a href="#lead">Enquire now <ArrowRight size={15}/></a></article>)}
          </div>
        </section>

        <section className="section shell process" id="process">
          <div className="process-copy"><span>OUR RESEARCH PROCESS</span><h2>Our disciplined research methodology.</h2><p>Every market report follows a structured process combining trend analysis, price action and disciplined risk management.</p></div>
          <div className="steps">
            {[
              ["01","Market Structure Analysis","We study trend, momentum, liquidity and important institutional zones."],
              ["02","Trade Planning","Key levels, entry logic, stop-loss and risk are defined before execution."],
              ["03","Execution & Review","Only disciplined setups are considered, followed by performance review and improvement."],
            ].map(i => <div className="step" key={i[0]}><b>{i[0]}</b><h3>{i[1]}</h3><p>{i[2]}</p></div>)}
          </div>
        </section>

        <section className="section shell">
          <div className="statement">
            <Zap size={34}/>
            <small>OUR APPROACH</small>
            <h2>We do not sell certainty.<br/>We build decision-making.</h2>
            <p>Markets cannot be controlled. Process, risk and discipline can.</p>
            <a href="#lead">Speak with Trade Firm <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="section shell" id="faq">
          <div className="section-head"><span>FREQUENTLY ASKED QUESTIONS</span><h2>Trust starts with honest answers.</h2></div>
          <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</div>
        </section>

        <section className="section shell final-lead">
          <div className="final-copy"><span>START A CONVERSATION</span><h2>Ready to build a more disciplined market process?</h2><p>Send your enquiry and the Trade Firm team can contact you.</p></div>
          <LeadForm compact/>
        </section>
      </main>

      <a className="floating-contact" href="#lead" aria-label="Request a callback">
        <MessageCircle size={21}/><span>Callback</span>
      </a>

      <footer className="shell premium-footer">
  <div className="footer-top">
    <div className="footer-brand">
      <img src="/tf-brand-mark.svg" alt="Trade Firm mark" />

      <div>
        <strong>TRADE FIRM</strong>
        <p>
          Professional market research, price action analysis and
          risk-focused trading intelligence for serious market participants.
        </p>
      </div>
    </div>

    <div className="footer-column">
      <b>Research</b>
      <a href="#services">Index Market Research</a>
      <a href="#services">Price Action Analysis</a>
      <a href="#services">Options Strategy Research</a>
      <a href="#process">Research Process</a>
    </div>

    <div className="footer-column">
      <b>Markets Covered</b>
      <span>NIFTY 50</span>
      <span>BANK NIFTY</span>
      <span>FINNIFTY</span>
      <span>SENSEX</span>
    </div>

    <div className="footer-column">
      <b>Company</b>
      <a href="#why">Why Trade Firm</a>
      <a href="#faq">FAQ</a>
      <a href="#lead">Contact</a>
      <a href="#lead">Book Consultation</a>
    </div>
  </div>

  <div className="footer-divider" />

  <div className="footer-column">
  <b>Contact</b>

  <a href="mailto:tradefirmindia@gmail.com">
    📧 tradefirmindia@gmail.com
  </a>

  <a
    href="https://t.me/TRADE_FIRM"
    target="_blank"
    rel="noopener noreferrer"
  >
    ✈ @TRADE_FIRM
  </a>

  <a
    href="https://instagram.com/tradefirmindia"
    target="_blank"
    rel="noopener noreferrer"
  >
    📷 @tradefirmindia
  </a>
</div>

  <div className="legal">
    <b>Risk Disclosure:</b> Trade Firm provides educational content and
    general market research. It does not guarantee returns and should not
    be treated as personalised investment advice. Trading and investing
    involve risk, including possible loss of capital.
  </div>

  <div className="copyright">
    © {new Date().getFullYear()} Trade Firm. All rights reserved.
  </div>
</footer>
    </>
  );
}
