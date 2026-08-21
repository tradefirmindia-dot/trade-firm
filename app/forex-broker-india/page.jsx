import {
  ArrowRight,
  Banknote,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Coins,
  Landmark,
  LineChart,
  LockKeyhole,
  MonitorSmartphone,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";
import FxLeadForm from "../../components/FxLeadForm";
import styles from "./page.module.css";

const referralUrl = "https://dashboard.zuperior.com/login?referralCode=IB2155X1";
const pageUrl = "https://www.tradefirm.in/forex-broker-india";

export const metadata = {
  title: "Forex Broker India: MT5, UPI & Bank Transfer",
  description:
    "Open an MT5 forex trading account with guided setup for Indian traders. Explore forex, XAU/USD, indices, UPI, bank transfer and crypto funding.",
  keywords: [
    "forex broker India",
    "forex trading India",
    "forex broker for Indian traders",
    "forex trading app India",
    "MT5 broker India",
    "MetaTrader 5 India",
    "forex account opening India",
    "forex trading for beginners",
    "UPI forex deposit",
    "forex broker with bank transfer India",
    "forex withdrawal to Indian bank account",
    "crypto deposit forex broker",
    "gold trading XAUUSD",
    "EUR USD trading",
    "GBP USD trading",
    "forex market hours India",
  ],
  alternates: {
    canonical: pageUrl,
    languages: { "en-IN": pageUrl },
  },
  openGraph: {
    title: "Forex Broker Access for Indian Traders | TRADE FIRM FX",
    description: "MT5 account setup, forex and gold market research, and information on UPI, Indian bank transfer and crypto funding routes.",
    url: pageUrl,
    siteName: "TRADE FIRM",
    locale: "en_IN",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "TRADE FIRM FX forex broker and MT5 account guidance for Indian traders",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Broker India: MT5, UPI & Bank Transfer",
    description: "Guided MT5 account access and global-markets research for Indian traders.",
    images: ["/og-image.jpg"],
  },
};

const markets = [
  { code: "FX", title: "Forex currency pairs", copy: "Session-led context for EUR/USD, GBP/USD and other major currency pairs available on the platform.", icon: LineChart },
  { code: "AU", title: "Gold / XAUUSD", copy: "Macro-aware gold research mapped around volatility, news, liquidity and key technical zones.", icon: Coins },
  { code: "IX", title: "Global indices", copy: "Structured coverage of selected global index CFDs, subject to account and jurisdiction availability.", icon: BarChart3 },
];

const fundingMethods = [
  { label: "UPI", title: "UPI deposit & withdrawal", copy: "Eligible verified Indian accounts can use the UPI instructions displayed inside the broker cashier.", icon: Smartphone },
  { label: "INR", title: "Indian bank transfer", copy: "Deposit and withdrawal details are shown inside the account, together with current limits and processing information.", icon: Landmark },
  { label: "USDT", title: "Supported crypto routes", copy: "Available crypto deposit and withdrawal networks can be selected from the broker funding area.", icon: CircleDollarSign },
];

const researchItems = [
  ["01", "Session market map", "Key sessions, levels and scheduled catalysts before the market gets noisy."],
  ["02", "Scenario-based context", "A structured way to prepare alternatives instead of depending on predictions."],
  ["03", "Risk framework", "Invalidation and position-risk principles designed around capital preservation."],
  ["04", "MT5 onboarding", "Practical account, installation and login guidance for the trading platform."],
];

const selectionChecks = [
  { icon: ShieldCheck, title: "Authorisation & eligibility", copy: "Confirm whether the broker, instrument and payment route are available for your country and account before funding." },
  { icon: WalletCards, title: "Deposits & withdrawals", copy: "Check supported UPI, bank transfer or crypto methods, currencies, limits, fees and processing times inside the verified account." },
  { icon: SearchCheck, title: "Trading costs", copy: "Review spreads, commissions, swaps, conversion charges and withdrawal conditions—not only the headline minimum deposit." },
  { icon: MonitorSmartphone, title: "Platform & risk tools", copy: "Assess MT5 stability, order controls, stop-loss features, instrument specifications and mobile access." },
];

const processSteps = [
  ["01", "Create your broker account", "Open the secure registration link, select India and complete your account profile."],
  ["02", "Complete broker verification", "Submit the KYC documents requested by the platform and wait for account approval."],
  ["03", "Review the cashier methods", "Choose an available UPI, Indian bank transfer or supported crypto route inside your verified account."],
  ["04", "Access MT5 & research", "Use the issued credentials to sign in to MT5 and follow the TRADE FIRM research workflow."],
];

const faqs = [
  ["Is TRADE FIRM the forex broker?", "No. TRADE FIRM provides research and guided account-setup assistance. Brokerage, KYC, deposits, withdrawals and trade execution are handled directly by the broker platform."],
  ["How do I open an MT5 forex trading account in India?", "Use the Open MT5 Account button on this page, complete the broker registration and KYC flow, then use the account credentials issued by the platform to sign in to MetaTrader 5."],
  ["Does the broker offer UPI deposit and withdrawal for Indian traders?", "UPI is currently displayed for eligible verified Indian accounts, along with Indian bank transfer and supported crypto routes. Exact methods, limits and processing times depend on the broker account and current terms."],
  ["Can I withdraw forex funds to an Indian bank account?", "Where bank transfer withdrawal is enabled, use only the beneficiary and transaction instructions shown inside your verified account. Availability and settlement times can change by account."],
  ["Can I trade gold or XAU/USD on MT5?", "The platform can provide access to XAU/USD and selected metals where available for the account. Always check the contract size, spread, margin requirement and trading hours before placing an order."],
  ["What are forex market hours in India?", "The global forex market generally operates across weekday sessions from Asia through London and New York. Exact instrument schedules, holidays and maintenance windows are shown in MT5 by the broker."],
  ["How should I compare the best forex broker for my needs?", "Compare authorisation and eligibility, platform reliability, spreads and commissions, withdrawal terms, customer support, instrument availability and risk controls. The right choice depends on your location, experience and objectives."],
  ["Is forex trading legal in India?", "Indian residents must follow FEMA and RBI requirements and should verify authorised electronic trading platforms and permitted products. This page is informational and is not legal advice; check the current RBI guidance before proceeding."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Forex Broker India: MT5, UPI & Bank Transfer",
      description: "Forex broker account access, MT5 onboarding, global market research and account-funding information for Indian traders.",
      datePublished: "2026-08-21",
      dateModified: "2026-08-21",
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://www.tradefirm.in/#website" },
      about: { "@id": "https://www.tradefirm.in/#organization" },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "TRADE FIRM FX Research and MT5 Account Assistance",
      serviceType: "Forex market research and MT5 broker account setup assistance",
      provider: { "@id": "https://www.tradefirm.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      audience: { "@type": "Audience", geographicArea: { "@type": "Country", name: "India" } },
      description: "Guided access to a broker registration route, MT5 onboarding, forex and gold research, and information about account-level funding methods.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tradefirm.in/" },
        { "@type": "ListItem", position: 2, name: "Forex Broker India", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

function ExternalCta({ children, className = styles.primaryButton }) {
  return (
    <a className={className} href={referralUrl} target="_blank" rel="sponsored noopener noreferrer" data-analytics-event="fx_account_open">
      {children} <ArrowRight size={17} />
    </a>
  );
}

export default function ForexBrokerIndiaPage() {
  return (
    <main className={styles.fxPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.fxShell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><i /> TRADE FIRM FX · INDIA</div>
              <h1>Forex broker access for <span>Indian traders.</span></h1>
              <p className={styles.heroText}>
                Open an MT5 forex trading account through the secure broker route and explore forex, gold and global indices with structured TRADE FIRM research and guided setup.
              </p>
              <div className={styles.heroActions}>
                <ExternalCta>Open live MT5 account</ExternalCta>
                <a className={styles.secondaryButton} href="#fx-enquiry">Get setup assistance</a>
              </div>
              <div className={styles.trustRow}>
                <div><MonitorSmartphone size={20} /><span><strong>MT5 access</strong><small>Desktop & mobile</small></span></div>
                <div><LineChart size={20} /><span><strong>Research first</strong><small>Context & structure</small></span></div>
                <div><ShieldCheck size={20} /><span><strong>Risk focused</strong><small>No return promises</small></span></div>
              </div>
            </div>

            <div className={styles.terminalWrap} aria-label="MT5 forex market access preview">
              <div className={styles.terminal}>
                <div className={styles.terminalHead}>
                  <div><span>TRADE FIRM FX · MT5</span><strong>Global market coverage</strong></div>
                  <b><i /> DESK ACTIVE</b>
                </div>
                <div className={styles.chartPanel}>
                  <div className={styles.chartGrid} aria-hidden="true" />
                  <div className={styles.chartLabel}><span>RESEARCH WINDOW</span><strong>London → New York</strong></div>
                  <svg viewBox="0 0 620 240" preserveAspectRatio="none" aria-hidden="true">
                    <defs><linearGradient id="fxArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2e79ff" stopOpacity=".35" /><stop offset="100%" stopColor="#2e79ff" stopOpacity="0" /></linearGradient></defs>
                    <path className={styles.areaPath} d="M0 196 C55 180 72 206 121 173 S205 149 246 160 S316 123 357 131 S435 75 478 101 S550 46 620 40 L620 240 L0 240 Z" />
                    <path className={styles.trendPath} d="M0 196 C55 180 72 206 121 173 S205 149 246 160 S316 123 357 131 S435 75 478 101 S550 46 620 40" />
                    <circle cx="620" cy="40" r="6" />
                  </svg>
                </div>
                <div className={styles.quoteList}>
                  {["XAU / USD", "EUR / USD", "GBP / USD"].map((symbol, index) => (
                    <a href={referralUrl} target="_blank" rel="sponsored noopener noreferrer" key={symbol}>
                      <span>{["G", "E", "P"][index]}</span>
                      <div><strong>{symbol}</strong><small>{["Gold", "Euro", "Pound"][index]}</small></div>
                      <b>{index === 0 ? "METALS" : "FOREX"}</b><ArrowRight size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.terminalFoot}>
                <span><CheckCircle2 size={15} /> Secure broker registration</span>
                <span><LockKeyhole size={15} /> Account-level funding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.signalStrip}>
        <span>FOREX TRADING INDIA</span><i /><span>METATRADER 5</span><i /><span>GOLD · XAUUSD</span><i /><span>UPI & BANK TRANSFER</span>
      </div>

      <section className={styles.section} id="fx-markets">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>GLOBAL MARKET ACCESS</span><h2>Forex, gold and indices on one MT5 platform.</h2></div>
            <p>Focused coverage helps you understand the session, prepare a scenario and define risk before any execution decision.</p>
          </div>
          <div className={styles.marketGrid}>
            {markets.map(({ code, title, copy, icon: Icon }) => (
              <article className={styles.marketCard} key={title}>
                <div><span>{code}</span><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p>
                <ExternalCta className={styles.cardLink}>Explore account access</ExternalCta>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fundingSection}`} id="fx-funding">
        <div className={styles.fxShell}>
          <div className={styles.fundingPanel}>
            <div className={styles.fundingCopy}>
              <span>FUNDING OPTIONS FOR INDIAN ACCOUNTS</span>
              <h2>UPI, Indian bank transfer and crypto funding.</h2>
              <p>After broker verification, eligible Indian accounts can currently see UPI, bank transfer and supported crypto routes for deposits and withdrawals. Availability, limits, fees and processing times are account-dependent.</p>
              <ExternalCta>Check available methods</ExternalCta>
            </div>
            <div className={styles.fundingGrid}>
              {fundingMethods.map(({ label, title, copy, icon: Icon }) => (
                <article className={styles.fundingCard} key={title}>
                  <div><span>{label}</span><Icon size={20} /></div><small><i /> ACCOUNT BASED</small><h3>{title}</h3><p>{copy}</p><b>DEPOSIT · WITHDRAWAL</b>
                </article>
              ))}
              <div className={styles.fundingSafety}><LockKeyhole size={19} /><p><strong>Secure funding check:</strong> follow payment instructions shown only inside your own verified broker account.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.researchSection}`} id="fx-research">
        <div className={styles.fxShell}>
          <div className={styles.researchPanel}>
            <div className={styles.researchCopy}>
              <span>TRADE FIRM RESEARCH DESK</span><h2>A market process traders can actually follow.</h2>
              <p>The objective is not another prediction. It is a repeatable workflow for reading context, preparing scenarios and deciding where risk no longer makes sense.</p>
              <ul><li><Check size={15} /> Clean session preparation</li><li><Check size={15} /> Scenario-based thinking</li><li><Check size={15} /> Risk before reward</li></ul>
            </div>
            <div className={styles.researchGrid}>
              {researchItems.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.guideSection}`} id="choose-forex-broker">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>FOREX BROKER CHECKLIST</span><h2>How Indian traders should evaluate a forex broker.</h2></div>
            <p>A professional comparison goes beyond a trading app or welcome offer. Verify the full account journey before deciding.</p>
          </div>
          <div className={styles.guideGrid}>
            {selectionChecks.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={22} /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className={styles.topicRow} aria-label="Forex trading topics covered">
            <span>Forex trading for beginners</span><span>MT5 broker India</span><span>XAUUSD trading</span><span>Forex market hours</span><span>UPI forex deposit</span><span>Bank withdrawal</span>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.guideSection].join(" ")} id="fx-guides">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>FOREX &amp; MT5 RESOURCE HUB</span><h2>Verification guides before registration or funding.</h2></div>
            <p>Understand the account entity, Indian regulatory checks, MT5 specifications, payment routes and XAUUSD risk before proceeding.</p>
          </div>
          <div className={styles.guideGrid}>
            <article><MonitorSmartphone size={22} /><h3>Open an MT5 account</h3><p>Separate the MT5 software from the broker account and follow a verification-first registration process.</p><a className={styles.cardLink} href="/blogs/how-to-open-mt5-forex-account-india">Read MT5 account guide <ArrowRight size={15} /></a></article>
            <article><SearchCheck size={22} /><h3>Forex broker checklist</h3><p>Review authorisation, legal entity, products, costs, execution, support and the complete withdrawal path.</p><a className={styles.cardLink} href="/blogs/forex-broker-india-verification-checklist">Read broker checklist <ArrowRight size={15} /></a></article>
            <article><WalletCards size={22} /><h3>UPI &amp; bank-transfer safety</h3><p>Payment convenience is not regulatory proof. Verify the beneficiary, currency, fees and withdrawal route.</p><a className={styles.cardLink} href="/blogs/upi-bank-transfer-forex-account-india">Read funding guide <ArrowRight size={15} /></a></article>
            <article><Coins size={22} /><h3>MT5 gold &amp; XAUUSD risk</h3><p>Inspect contract size, tick value, margin, spread, sessions and holding cost before selecting quantity.</p><a className={styles.cardLink} href="/blogs/mt5-forex-gold-xauusd-guide-india">Read XAUUSD guide <ArrowRight size={15} /></a></article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.processSection}`} id="fx-process">
        <div className={styles.fxShell}>
          <div className={styles.processLayout}>
            <div className={styles.processCopy}><span>ACCOUNT OPENING PROCESS</span><h2>From registration to MT5, clearly mapped.</h2><p>The account, KYC, funding and execution remain inside the broker platform, while TRADE FIRM supports the setup and research workflow.</p><ExternalCta>Start account setup</ExternalCta></div>
            <div className={styles.processList}>{processSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.leadSection}`} id="fx-enquiry">
        <div className={styles.fxShell}>
          <div className={styles.leadLayout}>
            <div className={styles.leadCopy}>
              <span>SETUP ASSISTANCE</span><h2>Need help before opening your forex account?</h2><p>Tell the desk where you are in the journey. Every completed request is recorded directly in TRADE FIRM CRM for structured follow-up.</p>
              <div><p><Banknote size={18} /> Account-opening checklist</p><p><MonitorSmartphone size={18} /> MT5 installation & login guidance</p><p><Clock3 size={18} /> Your preferred callback window</p></div>
            </div>
            <FxLeadForm />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`} id="fx-faq">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}><div><span>FOREX TRADING FAQ</span><h2>Clear answers before you begin.</h2></div><p>Understand the platform, funding route, market access and risk before opening an account.</p></div>
          <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
          <div className={styles.complianceNote}>
            <ShieldCheck size={22} /><div><strong>Important information for Indian residents</strong><p>Leveraged forex and CFD products carry substantial risk. Verify broker authorisation, permitted products and payment routes for your jurisdiction. Review the <a href="https://www.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=3347" target="_blank" rel="noopener noreferrer">RBI forex transaction FAQ</a> and seek independent professional advice where required.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
