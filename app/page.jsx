"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Calculator,
  CandlestickChart,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  Gauge,
  Instagram,
  Layers3,
  LineChart,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

const researchCoverage = [
  {
    icon: CandlestickChart,
    title: "Index Market Research",
    text: "Structured views across NIFTY, BANK NIFTY, FINNIFTY, SENSEX and major Indian benchmarks.",
    tag: "MARKET STRUCTURE",
  },
  {
    icon: LineChart,
    title: "Price Action Analysis",
    text: "Trend, support, resistance, liquidity and confirmation translated into a clear decision framework.",
    tag: "PRICE ACTION",
  },
  {
    icon: BarChart3,
    title: "Options Strategy Research",
    text: "Premium behaviour, volatility, timing and defined-risk execution for active market participants.",
    tag: "DERIVATIVES",
  },
  {
    icon: BrainCircuit,
    title: "Risk & Trading Process",
    text: "Capital protection, invalidation, execution discipline and post-market review built into every plan.",
    tag: "RISK FIRST",
  },
];

const faqs = [
  [
    "What markets does Trade Firm cover?",
    "Trade Firm provides professional market research across NIFTY, BANK NIFTY, FINNIFTY, SENSEX and selected high-volume stocks.",
  ],
  [
    "What is the 10X THINK framework?",
    "10X THINK is Trade Firm's structured price-action framework. It organises market structure, important zones, confirmation and defined risk into one repeatable decision process.",
  ],
  [
    "Do you provide daily market research?",
    "Yes. Trade Firm publishes structured pre-market, live-market and closing research formats with key levels, context and risk-focused observations.",
  ],
  [
    "Does Trade Firm guarantee market returns?",
    "No. Markets involve risk and no outcome can be guaranteed. Trade Firm focuses on research quality, process, risk management and disciplined decision-making.",
  ],
];

const fundOptions = [
  "Below ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "Above ₹5,00,000",
];

const segmentOptions = [
  "Option Trading",
  "Futures Trading",
  "Stock Trading",
  "Intraday Trading",
  "Swing Trading",
  "All Segments",
];

function LeadForm({ compact = false }) {
  const initialForm = useMemo(
    () => ({
      name: "",
      phone: "",
      fund: fundOptions[0],
      segment: segmentOptions[0],
      preferredTime: "10:00 AM - 12:00 PM",
      consent: false,
      company: "",
      startedAt: Date.now(),
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("");
    setStatusType("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setStatus("Please enter a valid 10-digit Indian mobile number.");
      setStatusType("error");
      return;
    }

    if (!form.consent) {
      setStatus("Please accept the contact consent checkbox.");
      setStatusType("error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await response.json();

      if (!response.ok) {
        throw new Error(body.error || "Submission failed.");
      }

      setStatus("Request received. The Trade Firm team will contact you shortly.");
      setStatusType("success");
      setForm({ ...initialForm, startedAt: Date.now() });
    } catch (error) {
      setStatus(error.message || "Could not submit right now. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={`lead-card ${compact ? "compact" : ""}`} onSubmit={submit}>
      <input
        className="website-field"
        name="company"
        value={form.company}
        onChange={change}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-heading">
        <div>
          <span className="form-kicker">COMPLIMENTARY DISCOVERY CALL</span>
          <h3>Build your market process.</h3>
          <p>Share your goal. Our team will arrange a focused introductory call.</p>
        </div>
        <div className="form-shield"><ShieldCheck size={20} /></div>
      </div>

      <div className="form-grid">
        <label className="full-field">
          Full name
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Mobile number
          <div className="phone-field">
            <span>+91</span>
            <input
              name="phone"
              inputMode="numeric"
              maxLength="10"
              value={form.phone}
              onChange={change}
              placeholder="10-digit number"
              autoComplete="tel"
              required
            />
          </div>
        </label>

        <label>
          Available fund
          <select name="fund" value={form.fund} onChange={change}>
            {fundOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>

        <label>
          Market segment
          <select name="segment" value={form.segment} onChange={change}>
            {segmentOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>

        <label>
          Preferred callback
          <select name="preferredTime" value={form.preferredTime} onChange={change}>
            <option>10:00 AM - 12:00 PM</option>
            <option>12:00 PM - 03:30 PM</option>
            <option>04:00 PM - 07:00 PM</option>
          </select>
        </label>
      </div>

      <label className="consent">
        <input type="checkbox" name="consent" checked={form.consent} onChange={change} />
        <span>I agree to be contacted by Trade Firm through call or WhatsApp regarding this enquiry.</span>
      </label>

      <button className="submit-btn" disabled={loading}>
        <span>{loading ? "Sending request..." : "Request my free call"}</span>
        <ArrowRight size={18} />
      </button>

      <div className="privacy-line">
        <Check size={13} /> Consent-based follow-up only. No guaranteed-return claims.
      </div>

      {status && <div className={`form-status ${statusType}`}>{status}</div>}
    </form>
  );
}

function ResearchConsole() {
  return (
    <div className="research-console" aria-label="Trade Firm research process preview">
      <div className="console-topbar">
        <div>
          <span className="console-mark"><Activity size={15} /></span>
          <p><strong>TRADE FIRM</strong><small>RESEARCH DESK</small></p>
        </div>
        <span className="process-badge"><i /> PROCESS-LED</span>
      </div>

      <div className="console-title-row">
        <div>
          <small>RESEARCH FORMAT PREVIEW</small>
          <h3>Structure before execution.</h3>
        </div>
        <span>Illustrative</span>
      </div>

      <div className="console-chart">
        <div className="chart-label label-high">Supply context</div>
        <div className="chart-label label-low">Demand context</div>
        <svg viewBox="0 0 760 250" preserveAspectRatio="none" role="img" aria-label="Illustrative market structure line">
          <defs>
            <linearGradient id="blueArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1769ff" stopOpacity=".23" />
              <stop offset="100%" stopColor="#1769ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 202 C65 190 92 126 150 150 S242 210 300 144 S395 78 445 111 S530 170 586 101 S681 52 760 66 L760 250 L0 250Z" fill="url(#blueArea)" />
          <path className="console-line" d="M0 202 C65 190 92 126 150 150 S242 210 300 144 S395 78 445 111 S530 170 586 101 S681 52 760 66" fill="none" stroke="#1769ff" strokeWidth="4" />
        </svg>
      </div>

      <div className="console-metrics">
        <div><Target size={18} /><p><b>Key levels</b><span>Context & zones</span></p></div>
        <div><Gauge size={18} /><p><b>Defined risk</b><span>Invalidation first</span></p></div>
        <div><BrainCircuit size={18} /><p><b>Confirmation</b><span>Process over impulse</span></p></div>
      </div>
    </div>
  );
}

function RiskPlanner() {
  const [capital, setCapital] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entry, setEntry] = useState(100);
  const [stop, setStop] = useState(95);
  const [orderQuantity, setOrderQuantity] = useState("");

  const result = useMemo(() => {
    const safeCapital = Math.max(Number(capital) || 0, 0);
    const safeRisk = Math.min(Math.max(Number(riskPercent) || 0, 0), 100);
    const safeEntry = Math.max(Number(entry) || 0, 0);
    const distance = Math.abs(safeEntry - (Number(stop) || 0));
    const riskAmount = (safeCapital * safeRisk) / 100;
    const suggestedQuantity = distance > 0 ? Math.floor(riskAmount / distance) : 0;
    const hasManualQuantity = String(orderQuantity).trim() !== "";
    const manualQuantity = Math.max(Math.floor(Number(orderQuantity) || 0), 0);
    const activeQuantity = hasManualQuantity ? manualQuantity : suggestedQuantity;
    const actualRisk = activeQuantity * distance;
    const actualRiskPercent = safeCapital > 0 ? (actualRisk / safeCapital) * 100 : 0;

    return {
      riskAmount,
      distance,
      suggestedQuantity,
      activeQuantity,
      hasManualQuantity,
      actualRisk,
      actualRiskPercent,
      positionValue: activeQuantity * safeEntry,
      withinRisk: actualRisk <= riskAmount,
      riskDifference: Math.abs(riskAmount - actualRisk),
      rewardDistance: distance * 3,
    };
  }, [capital, riskPercent, entry, stop, orderQuantity]);

  const currency = (value) => `₹${Math.round(value || 0).toLocaleString("en-IN")}`;

  return (
    <div className="risk-planner">
      <div className="planner-inputs">
        <div className="planner-title">
          <span><Calculator size={18} /></span>
          <div><small>EDUCATIONAL TOOL</small><h3>Risk Planner</h3></div>
        </div>

        <div className="planner-form">
          <label>Trading capital<input type="number" min="0" value={capital} onChange={(event) => setCapital(event.target.value)} /></label>
          <label>Risk per setup (%)<input type="number" min="0" max="100" step="0.25" value={riskPercent} onChange={(event) => setRiskPercent(event.target.value)} /></label>
          <label>Illustrative entry<input type="number" min="0" step="0.05" value={entry} onChange={(event) => setEntry(event.target.value)} /></label>
          <label>Illustrative stop<input type="number" min="0" step="0.05" value={stop} onChange={(event) => setStop(event.target.value)} /></label>
          <label className="quantity-field">
            <span>Order quantity (Qty)</span>
            <div className="quantity-input-row">
              <input
                type="number"
                min="0"
                step="1"
                placeholder={`Auto: ${result.suggestedQuantity.toLocaleString("en-IN")}`}
                value={orderQuantity}
                onChange={(event) => setOrderQuantity(event.target.value)}
              />
              <button type="button" onClick={() => setOrderQuantity(String(result.suggestedQuantity))}>
                Use {result.suggestedQuantity.toLocaleString("en-IN")}
              </button>
            </div>
            <small>Leave blank to use the suggested risk-based quantity automatically.</small>
          </label>
        </div>
      </div>

      <div className="planner-output">
        <span className="output-kicker">DEFINED-RISK OUTPUT</span>
        <div className="output-main">
          <span>Actual risk for {result.activeQuantity.toLocaleString("en-IN")} qty</span>
          <b>{currency(result.actualRisk)}</b>
        </div>
        <div className={`risk-fit ${result.withinRisk ? "risk-fit-ok" : "risk-fit-alert"}`}>
          <CheckCircle2 size={16} />
          <span>
            {result.withinRisk
              ? `${currency(result.riskDifference)} below the planned risk limit`
              : `${currency(result.riskDifference)} above the planned risk limit`}
          </span>
        </div>
        <div className="output-grid">
          <div><span>Price risk</span><b>{currency(result.distance)}</b></div>
          <div><span>Suggested qty</span><b>{result.suggestedQuantity.toLocaleString("en-IN")}</b></div>
          <div><span>Active qty</span><b>{result.activeQuantity.toLocaleString("en-IN")}{result.hasManualQuantity ? " · Manual" : " · Auto"}</b></div>
          <div><span>Planned risk limit</span><b>{currency(result.riskAmount)}</b></div>
          <div><span>Approx. position value</span><b>{currency(result.positionValue)}</b></div>
          <div><span>Capital at risk</span><b>{result.actualRiskPercent.toFixed(2)}%</b></div>
          <div><span>1:3 reward per unit</span><b>{currency(result.rewardDistance)}</b></div>
        </div>
        <p>This calculator demonstrates position-risk mathematics. Position value is not margin required. It is not a trade recommendation or a promise of outcome.</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeMenu() {
      setMenuOpen(false);
    }

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <div className="page-ambient" aria-hidden="true"><i /><i /><i /></div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Trade Firm home">
          <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" />
          <div><strong>TRADE FIRM</strong><span>TRADE • ANALYZE • GROW</span></div>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
          <a href="#tenx" onClick={() => setMenuOpen(false)}>10X THINK</a>
          <a href="#risk" onClick={() => setMenuOpen(false)}>Risk Planner</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#lead" className="nav-cta" onClick={() => setMenuOpen(false)}>Book free call <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><i /> INDIA · RESEARCH & RISK INTELLIGENCE</div>
            <h1>Clarity for every<br /><span>market decision.</span></h1>
            <p className="hero-text">
              Professional Indian market research built around price action, structured levels and disciplined risk—not excitement, noise or unrealistic promises.
            </p>

            <div className="hero-actions">
              <a href="#lead" className="primary-btn">Book a free discovery call <ArrowRight size={17} /></a>
              <a href="#research" className="secondary-btn">Explore the research desk</a>
            </div>

            <div className="hero-proof">
              <div><strong>08+</strong><span>Years of market experience</span></div>
              <div><strong>05</strong><span>Core market segments</span></div>
              <div><strong>1:3</strong><span>Defined framework reference</span></div>
            </div>

            <div className="hero-trust">
              <span><CheckCircle2 size={16} /> Price-action focused</span>
              <span><ShieldCheck size={16} /> Risk-first process</span>
              <span><Clock3 size={16} /> Indian market hours</span>
            </div>
          </div>

          <div className="hero-product">
            <ResearchConsole />
            <div id="lead"><LeadForm /></div>
          </div>
        </section>

        <div className="coverage-rail" aria-label="Research coverage">
          <div className="shell">
            <span>RESEARCH COVERAGE</span><i />
            <b>NIFTY 50</b><i /><b>BANK NIFTY</b><i /><b>FINNIFTY</b><i /><b>SENSEX</b><i /><b>STOCKS</b><i /><b>OPTIONS</b>
          </div>
        </div>

        <section className="section shell" id="research">
          <div className="section-head split-head">
            <div><span>THE RESEARCH DESK</span><h2>A market workspace designed around decisions.</h2></div>
            <p>Every view moves through the same institutional-style sequence: understand structure, define important levels, plan invalidation and review execution.</p>
          </div>

          <div className="research-grid">
            <article className="research-main-card">
              <div className="card-topline"><span>DAILY RESEARCH SYSTEM</span><b>01 / 04</b></div>
              <div className="research-main-copy">
                <div>
                  <small>FROM PRE-MARKET TO CLOSE</small>
                  <h3>One consistent research language.</h3>
                  <p>Pre-market context, live-market observations and closing review stay connected—so the process does not change with the mood of the market.</p>
                </div>
                <div className="research-sequence">
                  {["Market context", "Key zones", "Risk plan", "Review"].map((item, index) => (
                    <div key={item}><span>0{index + 1}</span><b>{item}</b><Check size={15} /></div>
                  ))}
                </div>
              </div>
              <div className="precision-grid" aria-hidden="true"><span /><span /><span /><span /><i /></div>
            </article>

            <article className="research-side-card">
              <FileText size={21} />
              <span>RESEARCH VAULT</span>
              <h3>Organised reports. Clear history.</h3>
              <p>A structured format for pre-market, live-market, closing and weekly research.</p>
              <div className="vault-list"><span>Pre-market outlook <b>01</b></span><span>Index analysis <b>02</b></span><span>Closing review <b>03</b></span></div>
            </article>

            <article className="research-side-card accent-card">
              <ShieldCheck size={21} />
              <span>TRUST STANDARD</span>
              <h3>Research without performance theatre.</h3>
              <p>No fake live P&amp;L, fabricated data or guaranteed-return language.</p>
            </article>
          </div>
        </section>

        <section className="section method-section" id="tenx">
          <div className="shell method-shell">
            <div className="method-copy">
              <div className="method-badge"><Sparkles size={16} /> PROPRIETARY FRAMEWORK</div>
              <h2>10X THINK</h2>
              <h3>See the structure. Question the obvious. Define the risk.</h3>
              <p>A focused decision framework for NIFTY and BANK NIFTY. It uses price action and confluence instead of crowding the chart with extra indicators.</p>
              <a href="#lead">Understand the framework <ArrowRight size={16} /></a>
            </div>

            <div className="method-steps">
              {[
                [Layers3, "01", "Map structure", "Start with the first 15-minute range, then add the one-hour structure."],
                [Target, "02", "Locate the zone", "Frame demand, supply and important round-number context."],
                [Activity, "03", "Demand confluence", "Look for alignment around structure, retracement and prior reference levels."],
                [ShieldCheck, "04", "Define invalidation", "Plan the risk before execution and keep the decision process repeatable."],
              ].map(([Icon, number, title, text]) => (
                <article key={number}><span>{number}</span><Icon size={21} /><div><h4>{title}</h4><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="risk">
          <div className="section-head split-head">
            <div><span>RISK BEFORE REWARD</span><h2>Turn risk discipline into a number.</h2></div>
            <p>The planner makes the relationship between capital, stop distance and position size visible before a decision is made.</p>
          </div>
          <RiskPlanner />
        </section>

        <section className="section shell" id="coverage">
          <div className="section-head">
            <span>RESEARCH COVERAGE</span>
            <h2>Focused intelligence across India&apos;s active markets.</h2>
          </div>
          <div className="service-grid">
            {researchCoverage.map(({ icon: Icon, title, text, tag }, index) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon size={22} /></div>
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>0{index + 1}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell process-section" id="process">
          <div className="process-intro">
            <span>THE TRADE FIRM STANDARD</span>
            <h2>Research first.<br />Trade later.</h2>
            <p>One disciplined process across every market view.</p>
          </div>
          <div className="process-list">
            {[
              ["01", "Read market structure", "Study trend, momentum, liquidity and important institutional zones."],
              ["02", "Build the decision plan", "Define important levels, confirmation, invalidation and risk before execution."],
              ["03", "Review without emotion", "Document the outcome, identify execution gaps and improve the repeatable process."],
            ].map(([number, title, text]) => (
              <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={18} /></article>
            ))}
          </div>
        </section>

        <section className="section shell" id="faq">
          <div className="section-head split-head">
            <div><span>HONEST ANSWERS</span><h2>Trust starts with clarity.</h2></div>
            <p>Clear expectations before the first conversation.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>
            ))}
          </div>
        </section>

        <section className="section shell final-lead">
          <div className="final-copy">
            <div className="eyebrow"><i /> START WITH A CONVERSATION</div>
            <h2>Build a clearer market process.</h2>
            <p>Tell us your market segment and current objective. The Trade Firm team will arrange a focused introductory call.</p>
            <div className="final-assurances"><span><Check size={15} /> No pressure</span><span><Check size={15} /> Consent-based follow-up</span><span><Check size={15} /> Risk-first discussion</span></div>
          </div>
          <LeadForm compact />
        </section>
      </main>

      <div className="mobile-action-bar">
        <a href="#lead"><MessageCircle size={17} /> Free discovery call</a>
      </div>

      <footer className="premium-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/tf-brand-mark.svg" alt="Trade Firm official brand mark" />
            <div><strong>TRADE FIRM</strong><span>TRADE • ANALYZE • GROW</span><p>Professional market research and risk-focused intelligence for serious market participants.</p></div>
          </div>

          <div className="footer-column"><b>Research</b><a href="#research">Research Desk</a><a href="#tenx">10X THINK</a><a href="#risk">Risk Planner</a><a href="#process">Research Process</a></div>
          <div className="footer-column"><b>Coverage</b><span>NIFTY 50</span><span>BANK NIFTY</span><span>FINNIFTY</span><span>SENSEX</span></div>
          <div className="footer-column"><b>Contact</b><a href="mailto:tradefirmindia@gmail.com"><Mail size={16} /> Email</a><a href="https://t.me/TRADE_FIRM" target="_blank" rel="noopener noreferrer"><Send size={16} /> Telegram</a><a href="https://instagram.com/tradefirmindia" target="_blank" rel="noopener noreferrer"><Instagram size={16} /> Instagram</a></div>
        </div>

        <div className="shell footer-bottom">
          <p><b>Risk disclosure:</b> Trade Firm provides educational content and general market research. It does not guarantee returns and should not be treated as personalised investment advice. Trading and investing involve risk, including possible loss of capital.</p>
          <span>© {new Date().getFullYear()} Trade Firm. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
