import Link from "next/link";
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
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import LeadForm from "../components/LeadForm";
import MarketTicker from "../components/MarketTicker";
import ResearchConsole from "../components/ResearchConsole";
import { blogPosts } from "../lib/site-content";

const researchCoverage = [
  {
    icon: CandlestickChart,
    title: "Index Advisory & Research",
    text: "Professional market guidance across NIFTY 50, BANK NIFTY, FINNIFTY, MIDCPNIFTY, SENSEX, BANKEX and broader benchmarks.",
    tag: "INDEX ADVISORY",
  },
  {
    icon: BarChart3,
    title: "Options & F&O Advisory",
    text: "Options and futures guidance built around price action, volatility, expiry context, actionable levels and defined risk.",
    tag: "DERIVATIVES ADVISORY",
  },
  {
    icon: LineChart,
    title: "Equity & Futures Advisory",
    text: "Structured views on selected NSE and BSE equities, stock futures, index futures, intraday, swing and positional opportunities.",
    tag: "EQUITY ADVISORY",
  },
  {
    icon: BrainCircuit,
    title: "IPO Research & Market Intelligence",
    text: "Independent business, financial, valuation and risk analysis for IPOs, supported by daily outlooks and event-driven market context.",
    tag: "INVESTMENT RESEARCH",
  },
];

const faqs = [
  [
    "What advisory and research services does Trade Firm offer?",
    "Trade Firm provides stock market advisory and research services across major NSE and BSE indices, options, futures, F&O, selected equities, intraday, swing, positional opportunities and IPOs.",
  ],
  [
    "What can a Trade Firm market view include?",
    "Depending on the chosen service, a market view may include research rationale, market context, actionable levels, entry conditions, invalidation or stop reference, objectives and risk-to-reward context.",
  ],
  [
    "How are research and advisory services different?",
    "Research explains market scenarios, data and rationale for a broader audience. Advisory scope may consider the applicable service agreement and client suitability process. The exact scope is explained before onboarding.",
  ],
  [
    "Do you provide NIFTY and BANK NIFTY advisory?",
    "Trade Firm covers NIFTY, BANK NIFTY and other actively followed Indian indices through structured research, important levels, derivatives context and defined-risk market scenarios.",
  ],
  [
    "Do you provide options trading advisory?",
    "Options coverage considers the underlying market structure, strike and expiry context, premium behaviour, volatility, liquidity and predefined risk. No market view can remove options trading risk.",
  ],
  [
    "What is the 10X THINK framework?",
    "10X THINK is Trade Firm's structured price-action framework. It organises market structure, important zones, confirmation and invalidation into one repeatable decision process.",
  ],
  [
    "Does Trade Firm guarantee returns?",
    "No. Securities-market outcomes cannot be assured or guaranteed. Our professional standard is built on research quality, transparent scenarios, disciplined risk and clear communication.",
  ],
  [
    "How can I understand the right service for me?",
    "Submit an enquiry with your preferred segment and callback time. Our desk will explain the available service scope, process, applicable onboarding requirements and risk framework before you decide.",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><i /> INDIA · STOCK MARKET ADVISORY &amp; RESEARCH</div>
          <h1>Professional research.<br /><span>Responsible advisory.</span></h1>
          <p className="hero-text">
            Trade Firm is a professional Indian stock market advisory and research firm delivering structured market views across indices, options, futures, equities, intraday, swing and IPOs—with clear rationale and defined risk.
          </p>

          <div className="hero-actions">
            <a href="#lead" className="primary-btn">Speak with our advisory desk <ArrowRight size={17} /></a>
            <Link href="/research-services" className="secondary-btn">Explore advisory &amp; research</Link>
          </div>

          <div className="hero-proof">
            <div><strong>08+</strong><span>Years of Indian market experience</span></div>
            <div><strong>NSE + BSE</strong><span>Advisory and research coverage</span></div>
            <div><strong>1:1–1:10</strong><span>Defined risk–reward planning</span></div>
          </div>

          <div className="hero-trust">
            <span><CheckCircle2 size={16} /> Professional research desk</span>
            <span><ShieldCheck size={16} /> Risk-first process</span>
            <span><Clock3 size={16} /> Dedicated market desk</span>
          </div>
        </div>

        <div className="hero-product">
          <ResearchConsole />
          <div id="lead"><LeadForm /></div>
        </div>
      </section>

      <MarketTicker />

      <section className="section shell" id="research">
        <div className="section-head split-head">
          <div><span>THE ADVISORY &amp; RESEARCH DESK</span><h2>Professional market guidance built around decisions.</h2></div>
          <p>Every view follows a consistent sequence: assess market context, identify actionable levels, define invalidation, communicate risk and review the outcome.</p>
        </div>

        <div className="research-grid">
          <article className="research-main-card">
            <div className="card-topline"><span>DAILY ADVISORY PROCESS</span><b>01 / 04</b></div>
            <div className="research-main-copy">
              <div>
                <small>FROM PRE-MARKET TO CLOSE</small>
                <h3>One standard from research to advisory.</h3>
                <p>Pre-market preparation, active-session guidance and closing review stay connected through one clear decision framework.</p>
              </div>
              <div className="research-sequence">
                {["Research context", "Actionable levels", "Risk plan", "Review"].map((item, index) => (
                  <div key={item}><span>0{index + 1}</span><b>{item}</b><Check size={15} /></div>
                ))}
              </div>
            </div>
            <div className="precision-grid" aria-hidden="true"><span /><span /><span /><span /><i /></div>
          </article>

          <article className="research-side-card">
            <FileText size={21} />
            <span>ADVISORY FORMATS</span>
            <h3>Research context. Actionable guidance.</h3>
            <p>Structured advisory formats for indices, options, futures, equities, intraday, swing and investment research.</p>
            <div className="vault-list"><span>Market outlook <b>01</b></span><span>Advisory view <b>02</b></span><span>Closing review <b>03</b></span></div>
          </article>

          <article className="research-side-card accent-card">
            <ShieldCheck size={21} />
            <span>PROFESSIONAL STANDARD</span>
            <h3>Guidance without exaggerated promises.</h3>
            <p>Structured analysis, transparent rationale, defined risk and responsible communication.</p>
          </article>
        </div>
      </section>

      <section className="section method-section" id="tenx">
        <div className="shell method-shell">
          <div className="method-copy">
            <div className="method-badge"><Sparkles size={16} /> PROPRIETARY FRAMEWORK</div>
            <h2>10X THINK</h2>
            <h3>Read structure. Demand confirmation. Define risk.</h3>
            <p>Trade Firm&apos;s focused decision framework for NIFTY and BANK NIFTY advisory uses price action and confluence instead of crowding the chart with unnecessary indicators.</p>
            <a href="#lead">Discuss the advisory process <ArrowRight size={16} /></a>
          </div>

          <div className="method-steps">
            {[
              [Layers3, "01", "Map market structure", "Start with the opening 15-minute range, then connect it with the one-hour structure."],
              [Target, "02", "Identify decision zones", "Frame demand, supply, liquidity and important round-number context."],
              [Activity, "03", "Require confirmation", "Look for alignment across price structure, retracement and prior reference levels."],
              [ShieldCheck, "04", "Communicate invalidation", "Define the risk before execution and keep the advisory process repeatable."],
            ].map(([Icon, number, title, text]) => (
              <article key={number}><span>{number}</span><Icon size={21} /><div><h4>{title}</h4><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="coverage">
        <div className="section-head split-head">
          <div><span>ADVISORY &amp; RESEARCH SERVICES</span><h2>India&apos;s active markets, one professional standard.</h2></div>
          <div className="head-action"><p>Index, derivatives, equity and primary-market services—organised by market, time horizon and defined risk.</p><Link href="/research-services">View all services <ArrowRight size={16} /></Link></div>
        </div>
        <div className="service-grid">
          {researchCoverage.map(({ icon: Icon, title, text, tag }, index) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon size={22} /></div><span>{tag}</span><h3>{title}</h3><p>{text}</p><b>0{index + 1}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="section tools-preview-section">
        <div className="shell tools-preview-grid">
          <div className="tools-preview-copy">
            <div className="eyebrow"><i /> ADVISORY SUPPORT TOOLS</div>
            <h2>Make risk measurable before acting on a market view.</h2>
            <p>Use the Risk Planner to connect capital, risk percentage, entry, stop and quantity before considering a trade decision.</p>
            <Link href="/tools/risk-planner" className="primary-btn">Open Risk Planner <ArrowRight size={17} /></Link>
          </div>
          <div className="tool-preview-card">
            <div className="tool-preview-top"><span><Calculator size={20} /></span><div><small>TOOLS / POSITION SIZING</small><h3>Risk Planner</h3></div><b>LIVE TOOL</b></div>
            <div className="tool-preview-output"><span>Planned risk limit</span><strong>₹1,000</strong></div>
            <div className="tool-preview-metrics"><div><span>Capital</span><b>₹1,00,000</b></div><div><span>Risk</span><b>1.00%</b></div><div><span>Framework</span><b>Defined</b></div></div>
            <p>Enter your order quantity to calculate actual capital at risk, position value, target and a selectable 1:1–1:10 risk–reward reference.</p>
          </div>
        </div>
      </section>

      <section className="section shell process-section" id="process">
        <div className="process-intro"><span>THE TRADE FIRM STANDARD</span><h2>Research first.<br />Trade later.</h2><p>One disciplined process across every market view.</p></div>
        <div className="process-list">
          {[
            ["01", "Read market structure", "Study trend, momentum, liquidity and important institutional zones."],
            ["02", "Build the research scenario", "Define important levels, confirmation, invalidation, objectives and risk before execution."],
            ["03", "Review without emotion", "Document the outcome, identify execution gaps and improve the repeatable process."],
          ].map(([number, title, text]) => (
            <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight size={18} /></article>
          ))}
        </div>
      </section>

      <section className="section insights-section">
        <div className="shell">
          <div className="section-head split-head">
          <div><span>ADVISORY &amp; RESEARCH INSIGHTS</span><h2>Professional insight for informed market decisions.</h2></div>
            <div className="head-action"><p>Detailed insights on advisory processes, price action, options, futures, IPO evaluation and risk management.</p><Link href="/blogs">Explore all insights <ArrowRight size={16} /></Link></div>
          </div>
          <div className="blog-grid">
            {blogPosts.slice(0, 3).map((post, index) => (
              <Link className="blog-card" href={`/blogs/${post.slug}`} key={post.slug}>
                <div className="blog-card-top"><span>{post.category}</span><b>0{index + 1}</b></div>
                <h3>{post.title}</h3><p>{post.excerpt}</p><div className="blog-card-bottom"><small>{post.readTime}</small><ArrowRight size={18} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell about-preview">
        <div className="about-preview-mark"><TrendingUp size={32} /><span>TRADE FIRM</span></div>
        <div><span>ABOUT THE FIRM</span><h2>Built from market experience. Structured for responsible guidance.</h2></div>
        <div><p>Trade Firm is an Indian stock market advisory and research firm focused on indices, derivatives, equities, IPOs and risk-first decision frameworks.</p><Link href="/about-us">Why Trade Firm <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section shell" id="faq">
        <div className="section-head split-head"><div><span>ADVISORY &amp; RESEARCH FAQ</span><h2>Trust starts with clarity.</h2></div><p>Understand the scope, process and risks before the first conversation.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="section shell final-lead">
        <div className="final-copy">
          <div className="eyebrow"><i /> START WITH A CONVERSATION</div>
          <h2>Speak with Trade Firm&apos;s advisory and research desk.</h2>
          <p>Choose your area of interest and preferred callback time. Our team will explain the available service scope, professional process and risk framework.</p>
          <div className="final-assurances"><span><Check size={15} /> Clear service scope</span><span><Check size={15} /> Consent-based follow-up</span><span><Check size={15} /> Responsible risk communication</span></div>
        </div>
        <LeadForm compact />
      </section>
    </main>
  );
}
