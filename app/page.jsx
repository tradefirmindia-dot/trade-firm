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
    title: "Index Market Research",
    text: "NIFTY 50, BANK NIFTY, FINNIFTY, MIDCPNIFTY, NIFTY NEXT 50, SENSEX, BANKEX and broader benchmarks.",
    tag: "NSE & BSE INDICES",
  },
  {
    icon: BarChart3,
    title: "Options & F&O Research",
    text: "Index and stock derivatives research built around price action, volatility, expiry context and defined risk.",
    tag: "DERIVATIVES",
  },
  {
    icon: LineChart,
    title: "Stock & Futures Research",
    text: "Selected NSE and BSE equities, stock futures, index futures, intraday, swing and positional opportunities.",
    tag: "EQUITIES & FUTURES",
  },
  {
    icon: BrainCircuit,
    title: "IPO & Market Intelligence",
    text: "Business, financial, valuation and risk research for IPOs, with daily market outlooks and event context.",
    tag: "PRIMARY MARKET",
  },
];

const faqs = [
  [
    "What markets does Trade Firm research?",
    "Trade Firm covers major NSE and BSE indices, options, futures, F&O, selected stocks, intraday, swing and positional opportunities, and IPO research.",
  ],
  [
    "What can a Trade Firm research view include?",
    "Depending on the research format, it may include market context, important levels, entry conditions, invalidation or stop reference, objectives, risk-to-reward context and the research rationale.",
  ],
  [
    "What is the 10X THINK framework?",
    "10X THINK is Trade Firm's structured price-action framework. It organises market structure, important zones, confirmation and defined risk into one repeatable decision process.",
  ],
  [
    "Do you provide daily market research?",
    "Yes. Trade Firm's research formats cover pre-market preparation, live-market observations, index and stock research, closing review and broader weekly context.",
  ],
  [
    "How does Trade Firm approach risk management?",
    "Every research view is structured around market context, decision levels, invalidation, position risk and review so that risk is defined before execution.",
  ],
];

export default function Home() {
  return (
    <main>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><i /> INDIA · EQUITY & DERIVATIVES RESEARCH</div>
          <h1>Research-backed<br /><span>market decisions.</span></h1>
          <p className="hero-text">
            Professional Indian stock-market research and recommendations across major indices, options, futures, F&amp;O, stocks, intraday, swing and IPOs—built around clear levels and defined risk.
          </p>

          <div className="hero-actions">
            <a href="#lead" className="primary-btn">Get research service details <ArrowRight size={17} /></a>
            <Link href="/research-services" className="secondary-btn">Explore research services</Link>
          </div>

          <div className="hero-proof">
            <div><strong>08+</strong><span>Years of market experience</span></div>
            <div><strong>NSE + BSE</strong><span>Index, equity and derivatives coverage</span></div>
            <div><strong>1:1–1:10</strong><span>Flexible risk–reward planning</span></div>
          </div>

          <div className="hero-trust">
            <span><CheckCircle2 size={16} /> Research-first approach</span>
            <span><ShieldCheck size={16} /> Defined-risk process</span>
            <span><Clock3 size={16} /> Indian market hours</span>
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
          <div><span>THE RESEARCH DESK</span><h2>Market research designed around decisions.</h2></div>
          <p>Every view follows a consistent sequence: understand market structure, identify important levels, define invalidation, manage risk and review the outcome.</p>
        </div>

        <div className="research-grid">
          <article className="research-main-card">
            <div className="card-topline"><span>DAILY RESEARCH SYSTEM</span><b>01 / 04</b></div>
            <div className="research-main-copy">
              <div>
                <small>FROM PRE-MARKET TO CLOSE</small>
                <h3>One consistent research language.</h3>
                <p>Pre-market context, active-session observations and closing review stay connected, so the process does not change with the mood of the market.</p>
              </div>
              <div className="research-sequence">
                {["Market context", "Key levels", "Risk plan", "Review"].map((item, index) => (
                  <div key={item}><span>0{index + 1}</span><b>{item}</b><Check size={15} /></div>
                ))}
              </div>
            </div>
            <div className="precision-grid" aria-hidden="true"><span /><span /><span /><span /><i /></div>
          </article>

          <article className="research-side-card">
            <FileText size={21} />
            <span>RESEARCH FORMATS</span>
            <h3>Clear context. Defined levels.</h3>
            <p>Structured formats for indices, options, futures, stocks, intraday, swing and IPO research.</p>
            <div className="vault-list"><span>Market outlook <b>01</b></span><span>Trade research <b>02</b></span><span>Closing review <b>03</b></span></div>
          </article>

          <article className="research-side-card accent-card">
            <ShieldCheck size={21} />
            <span>TRUST STANDARD</span>
            <h3>Research without performance theatre.</h3>
            <p>Structured analysis, verified market context and transparent decision levels.</p>
          </article>
        </div>
      </section>

      <section className="section method-section" id="tenx">
        <div className="shell method-shell">
          <div className="method-copy">
            <div className="method-badge"><Sparkles size={16} /> PROPRIETARY FRAMEWORK</div>
            <h2>10X THINK</h2>
            <h3>See the structure. Question the obvious. Define the risk.</h3>
            <p>A focused decision framework for NIFTY and BANK NIFTY that uses price action and confluence instead of crowding the chart with extra indicators.</p>
            <a href="#lead">Discuss the framework <ArrowRight size={16} /></a>
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

      <section className="section shell" id="coverage">
        <div className="section-head split-head">
          <div><span>RESEARCH SERVICES</span><h2>India&apos;s active markets, one research standard.</h2></div>
          <div className="head-action"><p>Index, derivatives, equity and primary-market research—organised by market, horizon and risk.</p><Link href="/research-services">View every research service <ArrowRight size={16} /></Link></div>
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
            <div className="eyebrow"><i /> TRADE FIRM TOOLS</div>
            <h2>Risk should become a number before it becomes a position.</h2>
            <p>Use the Risk Planner to connect capital, risk percentage, entry, stop and quantity before a market decision.</p>
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
            <div><span>RESEARCH BLOGS</span><h2>Knowledge built around market decisions.</h2></div>
            <div className="head-action"><p>Evergreen research notes on price action, options, futures, IPO evaluation and risk management.</p><Link href="/blogs">Explore all blogs <ArrowRight size={16} /></Link></div>
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
        <div><span>ABOUT THE RESEARCH PLATFORM</span><h2>Built from market experience. Structured for disciplined decisions.</h2></div>
        <div><p>Trade Firm is an Indian stock-market research platform focused on indices, derivatives, equities, IPOs and risk-first decision frameworks.</p><Link href="/about-us">About Trade Firm <ArrowRight size={16} /></Link></div>
      </section>

      <section className="section shell" id="faq">
        <div className="section-head split-head"><div><span>HONEST ANSWERS</span><h2>Trust starts with clarity.</h2></div><p>Clear expectations before the first conversation.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="section shell final-lead">
        <div className="final-copy">
          <div className="eyebrow"><i /> START WITH A CONVERSATION</div>
          <h2>Get Trade Firm research service details.</h2>
          <p>Choose your market segment and preferred callback time. Our team will explain the available research services, process and risk framework.</p>
          <div className="final-assurances"><span><Check size={15} /> No pressure</span><span><Check size={15} /> Consent-based follow-up</span><span><Check size={15} /> Clear research process</span></div>
        </div>
        <LeadForm compact />
      </section>
    </main>
  );
}
