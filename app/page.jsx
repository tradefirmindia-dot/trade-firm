"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, BrainCircuit, CandlestickChart, CheckCircle2,
  ChevronDown, LineChart, Menu, ShieldCheck, X, Activity, Gauge,
  Layers3, MessageCircle, Sparkles, Target, TrendingUp, Zap
} from "lucide-react";

const services = [
  { icon: CandlestickChart, title: "Index Research", text: "NIFTY, BANK NIFTY, FINNIFTY, SENSEX and broader market context." },
  { icon: LineChart, title: "Price Action", text: "Structure, supply-demand, liquidity and confirmation-led analysis." },
  { icon: BarChart3, title: "Options Education", text: "Premium behaviour, volatility, timing and disciplined execution." },
  { icon: BrainCircuit, title: "Trading Psychology", text: "Patience, consistency, process and emotional control." }
];

const faqs = [
  ["Do you guarantee profits?", "No. Markets involve risk and no outcome can be guaranteed. Trade Firm focuses on research, education and disciplined decision making."],
  ["What happens after I submit the form?", "Your enquiry is saved and the Trade Firm team can contact you by phone or WhatsApp, subject to your consent."],
  ["Is this personalised investment advice?", "The website is designed for education and general market research. Personalised advice should only be provided under applicable regulatory permissions."],
  ["Can beginners use Trade Firm content?", "Yes. The platform explains market concepts clearly, from basics to advanced price-action thinking."]
];

function LeadForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "", phone: "", experience: "Beginner",
    interest: "Stock Market Education", consent: false
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
      setForm({ name: "", phone: "", experience: "Beginner", interest: "Stock Market Education", consent: false });
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
        <label>Experience
          <select name="experience" value={form.experience} onChange={change}>
            <option>Beginner</option><option>0–2 Years</option><option>2–5 Years</option><option>5+ Years</option>
          </select>
        </label>
        <label>Interested in
          <select name="interest" value={form.interest} onChange={change}>
            <option>Stock Market Education</option><option>Index Research</option>
            <option>Price Action</option><option>Options Education</option><option>Trading Psychology</option>
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
            <div className="eyebrow"><i /> BUILT FOR SERIOUS MARKET LEARNERS</div>
            <h1>Research with clarity.<br /><span>Trade with discipline.</span></h1>
            <p className="hero-text">Trade Firm combines premium market education, structured index research and risk-first thinking in one modern platform.</p>

            <div className="hero-stats">
              <div><b>10X</b><span>Clarity First</span></div>
              <div><b>4</b><span>Core Services</span></div>
              <div><b>100%</b><span>Risk-Aware</span></div>
            </div>

            <div className="hero-actions">
              <a href="#lead" className="primary-btn">Get Free Consultation <ArrowRight size={18} /></a>
              <a href="#services" className="secondary-btn">Explore Services</a>
            </div>

            <div className="trust-strip">
              <div><CheckCircle2 /><p><b>PRICE ACTION</b><span>Structured market reading</span></p></div>
              <div><ShieldCheck /><p><b>RISK FIRST</b><span>Capital protection mindset</span></p></div>
              <div><BrainCircuit /><p><b>CLEAR PROCESS</b><span>No noise, no shortcuts</span></p></div>
            </div>
            <div className="small-disclosure">No guaranteed returns. Market participation involves risk.</div>
          </div>

          <div className="hero-side reveal delay">
            <div className="form-glow" />
            <div id="lead"><LeadForm /></div>
          </div>
        </section>

        <div className="ticker"><div>
          NIFTY 50 <i /> BANK NIFTY <i /> FINNIFTY <i /> SENSEX <i /> MIDCAP <i /> INDIA VIX <i />
          NIFTY 50 <i /> BANK NIFTY <i /> FINNIFTY <i /> SENSEX <i /> MIDCAP <i /> INDIA VIX <i />
        </div></div>

        <section className="section shell v6-workspace">
          <div className="section-head">
            <span>MARKET WORKSPACE</span>
            <h2>One premium interface for serious market thinking.</h2>
            <p>This visual workspace demonstrates how research, education and lead engagement come together. It does not display live market data.</p>
          </div>

          <div className="workspace-grid">
            <article className="workspace-main">
              <div className="workspace-top">
                <div><small>RESEARCH VIEW</small><h3>Index Structure</h3></div>
                <span>SAMPLE LAYOUT</span>
              </div>
              <div className="workspace-chart">
                <svg viewBox="0 0 760 300" preserveAspectRatio="none">
                  <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#d7b65f" stopOpacity=".34"/><stop offset="100%" stopColor="#d7b65f" stopOpacity="0"/></linearGradient></defs>
                  <path d="M0 235 C70 180 110 240 165 175 S260 155 310 190 S390 110 455 145 S555 80 620 105 S700 40 760 58 L760 300 L0 300Z" fill="url(#area)"/>
                  <path className="chart-path" d="M0 235 C70 180 110 240 165 175 S260 155 310 190 S390 110 455 145 S555 80 620 105 S700 40 760 58" fill="none" stroke="#d7b65f" strokeWidth="4"/>
                </svg>
              </div>
              <div className="workspace-metrics">
                <div><Activity/><b>Context</b><span>Trend and structure</span></div>
                <div><Target/><b>Levels</b><span>Important zones</span></div>
                <div><ShieldCheck/><b>Risk</b><span>Invalidation first</span></div>
              </div>
            </article>

            <div className="workspace-side">
              {[
                [Gauge,"Risk-first process","Build decisions around protection, not excitement."],
                [Layers3,"Multi-index coverage","Structured views across key Indian benchmarks."],
                [Sparkles,"Premium presentation","A clean experience designed to improve trust."],
                [MessageCircle,"Lead-ready system","Forms can connect to Telegram and Google Sheets."]
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
            ["MULTI-INDEX","Research-ready structure"],["MOBILE-FIRST","Responsive premium layout"],
            ["RISK-FIRST","Trust-focused positioning"],["LEAD-CONNECTED","Telegram-ready setup"]
          ].map(([v,l]) => <div key={v}><b>{v}</b><span>{l}</span></div>)}
        </div></section>

        <section className="section shell" id="why">
          <div className="section-head"><span>WHY TRADE FIRM</span><h2>Premium thinking, presented simply.</h2><p>A modern research brand should build trust through clarity, transparency and a repeatable process—not exaggerated promises.</p></div>
          <div className="feature-grid">
            <article className="feature feature-main">
              <div className="feature-visual">
                <img src="/tf-brand-mark.svg" alt="TF mark"/>
                <div className="chart-line"><TrendingUp size={130}/></div>
              </div>
              <small>THE TRADE FIRM STANDARD</small><h3>Research. Education. Discipline.</h3><p>One platform for understanding markets and developing structured thinking.</p>
            </article>
            {[
              ["01","Clear Market Context","Understand trend, levels and market structure before considering a trade."],
              ["02","Risk-Aware Education","Learn why invalidation, position sizing and emotional control matter."],
              ["03","Human Follow-Up","Lead forms connect interested users directly with the Trade Firm team."]
            ].map(i => <article className="feature" key={i[0]}><b>{i[0]}</b><h3>{i[1]}</h3><p>{i[2]}</p></article>)}
          </div>
        </section>

        <section className="section shell" id="services">
          <div className="section-head"><span>WHAT WE COVER</span><h2>Built around the trader’s real journey.</h2></div>
          <div className="service-grid">
            {services.map(({icon:Icon,title,text},index) => <article className="service" key={title}><Icon size={26}/><b>0{index+1}</b><h3>{title}</h3><p>{text}</p><a href="#lead">Enquire now <ArrowRight size={15}/></a></article>)}
          </div>
        </section>

        <section className="section shell process" id="process">
          <div className="process-copy"><span>HOW IT WORKS</span><h2>A simple path from enquiry to clarity.</h2><p>Designed for high conversion without making the website feel aggressive or untrustworthy.</p></div>
          <div className="steps">
            {[
              ["01","Submit Enquiry","Visitor shares name, phone number and learning interest."],
              ["02","Team Follow-Up","The lead is saved and can optionally reach Telegram."],
              ["03","Discovery Call","Understand the user’s experience and educational requirement."]
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

      <footer className="shell">
        <div className="footer-top">
          <div className="footer-brand"><img src="/tf-brand-mark.svg" alt="Trade Firm mark"/><div><strong>TRADE FIRM</strong><p>Market research and trading education with a disciplined, risk-first approach.</p></div></div>
          <div><b>Explore</b><a href="#why">Why Trade Firm</a><a href="#services">Services</a><a href="#process">Process</a></div>
          <div><b>Legal</b><a href="#faq">Risk Disclosure</a><a href="#faq">Privacy</a><a href="#lead">Contact</a></div>
        </div>
        <div className="legal"><b>Risk Disclosure:</b> This website is for education and general market research. It does not promise returns and should not be treated as personalised investment advice. Trading and investing involve risk, including possible loss of capital.</div>
        <div className="copyright">© {new Date().getFullYear()} Trade Firm. All rights reserved.</div>
      </footer>
    </>
  );
}
