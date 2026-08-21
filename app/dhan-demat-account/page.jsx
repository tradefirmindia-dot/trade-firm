import {
  ArrowRight,
  Banknote,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
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
import DhanLeadForm from "../../components/DhanLeadForm";
import styles from "../forex-broker-india/page.module.css";

const referralUrl = "https://join.dhan.co/?invite=IMICH83286";
const pageUrl = "https://www.tradefirm.in/dhan-demat-account";

export const metadata = {
  title: "Open Dhan Demat Account Online | TRADE FIRM",
  description:
    "Open a Dhan Demat and trading account online through the TRADE FIRM referral route. Access Indian stocks, F&O, ETFs, mutual funds and IPOs.",
  keywords: [
    "Dhan Demat account",
    "open Dhan account",
    "Dhan account opening",
    "Dhan referral link",
    "Dhan trading account",
    "Dhan broker India",
    "Dhan trading app",
    "online Demat account India",
    "free Demat account India",
    "stock trading account India",
    "share market account opening",
    "NSE BSE trading account",
    "F&O trading account India",
    "IPO investment account",
    "ETF investment account India",
  ],
  alternates: {
    canonical: pageUrl,
    languages: { "en-IN": pageUrl },
  },
  openGraph: {
    title: "Open Dhan Demat & Trading Account | TRADE FIRM",
    description:
      "A clear account-opening route for Indian traders and investors exploring stocks, F&O, ETFs, mutual funds and IPOs through Dhan.",
    url: pageUrl,
    siteName: "TRADE FIRM",
    locale: "en_IN",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "TRADE FIRM Dhan Demat and trading account access for Indian traders",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Dhan Demat Account Online | TRADE FIRM",
    description: "Dhan account opening, digital KYC guidance and Indian market research access.",
    images: ["/og-image.jpg"],
  },
};

const markets = [
  {
    code: "EQ",
    title: "Stocks & equity delivery",
    copy: "Explore listed Indian equities for delivery, intraday trading and long-term portfolio building through the Dhan platform.",
    icon: LineChart,
  },
  {
    code: "F&O",
    title: "Futures & options",
    copy: "Access index, stock and commodity derivatives with platform tools designed for active Indian market participants.",
    icon: BarChart3,
  },
  {
    code: "IPO",
    title: "IPOs, ETFs & mutual funds",
    copy: "Use one account to explore public issues, exchange-traded funds and direct mutual funds, subject to current platform availability.",
    icon: Coins,
  },
];

const platformMethods = [
  {
    label: "APP",
    title: "Dhan App & Web",
    copy: "Trade and invest through mobile or web with watchlists, charts, portfolio tracking and order-management tools.",
    icon: Smartphone,
  },
  {
    label: "F&O",
    title: "Options Trader",
    copy: "Explore Dhan's dedicated options experience for strategy analysis, option-chain workflows and execution.",
    icon: BarChart3,
  },
  {
    label: "TV",
    title: "TradingView connectivity",
    copy: "Use supported TradingView chart features and Dhan connectivity where available for your account and device.",
    icon: MonitorSmartphone,
  },
];

const researchItems = [
  ["01", "Pre-market structure", "Key NIFTY, BANK NIFTY and market levels mapped before the opening bell."],
  ["02", "Scenario-based research", "Bullish, bearish and neutral possibilities prepared without depending on a single prediction."],
  ["03", "Defined risk process", "Position-risk, invalidation and capital-protection principles before any trading decision."],
  ["04", "Account onboarding", "Practical help with the referral route, digital KYC journey and first platform login."],
];

const selectionChecks = [
  {
    icon: ShieldCheck,
    title: "Broker & regulatory checks",
    copy: "Review the broker's current registrations, exchange memberships, depository details and official disclosures before opening an account.",
  },
  {
    icon: WalletCards,
    title: "Pricing & account charges",
    copy: "Check the latest brokerage, statutory charges, DP charges, margin costs and any product-specific fees on Dhan's official pricing page.",
  },
  {
    icon: SearchCheck,
    title: "Markets & platform fit",
    copy: "Choose the account only after confirming that the required equity, F&O, commodity, ETF, mutual fund or IPO workflow is available.",
  },
  {
    icon: MonitorSmartphone,
    title: "Risk & order controls",
    copy: "Understand order types, margin requirements, stop-loss handling, square-off rules and device access before trading live.",
  },
];

const processSteps = [
  ["01", "Open the secure Dhan referral link", "Start through the account-opening button on this page so the registration journey uses the shared referral route."],
  ["02", "Verify mobile, email & identity", "Complete the requested contact verification and provide the KYC information shown by Dhan."],
  ["03", "Upload documents & complete e-sign", "Submit the required PAN, address, bank and other account documents, then complete the digital e-sign flow."],
  ["04", "Wait for approval & access the platform", "After Dhan approves the account, sign in to the app or web platform and review settings before adding funds or placing an order."],
];

const faqs = [
  [
    "Is TRADE FIRM the stock broker?",
    "No. TRADE FIRM provides Indian market research and account-opening guidance. The Demat account, KYC, funds, holdings and order execution are handled directly by Dhan.",
  ],
  [
    "How do I open a Dhan Demat account through this page?",
    "Select any Open Dhan Account button, continue on the Dhan registration page, verify your mobile and email, submit the requested KYC details and complete e-sign. Account activation remains subject to Dhan approval.",
  ],
  [
    "Which documents may be required for Dhan account opening?",
    "Dhan may request PAN, identity and address proof, bank proof, photograph and signature. Income proof can also be requested for certain trading segments. Follow only the current checklist shown in the official Dhan flow.",
  ],
  [
    "What can I access through a Dhan account?",
    "Dhan currently describes access to products including Indian stocks, futures and options, commodities, ETFs, mutual funds and IPOs. Product and segment activation can depend on eligibility and completed documentation.",
  ],
  [
    "What are the account-opening and brokerage charges?",
    "Dhan currently publishes zero account-opening and AMC charges for eligible individual and HUF accounts, along with product-specific brokerage. Charges can change, so review Dhan's official pricing and tariff before placing an order.",
  ],
  [
    "Can I use Dhan on mobile and desktop?",
    "Dhan provides app and web access and also describes specialised options and charting experiences. Confirm current device compatibility and feature availability on the official platform.",
  ],
  [
    "Does TRADE FIRM receive my trading funds?",
    "No. Never send account-opening money or trading funds to TRADE FIRM. Add funds only through the payment instructions displayed inside your own verified Dhan account.",
  ],
  [
    "Is the account-opening link a referral link?",
    "Yes. The Dhan buttons on this page use a referral link. TRADE FIRM may receive a referral benefit when an eligible user completes the required journey, without taking custody of the user's trading funds or securities.",
  ],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl + "#webpage",
      url: pageUrl,
      name: "Open Dhan Demat Account Online",
      description: "Dhan Demat and trading account opening information, digital KYC guidance and Indian market research access.",
      inLanguage: "en-IN",
      isPartOf: { "@id": "https://www.tradefirm.in/#website" },
      about: { "@id": "https://www.tradefirm.in/#organization" },
      breadcrumb: { "@id": pageUrl + "#breadcrumb" },
    },
    {
      "@type": "Service",
      "@id": pageUrl + "#service",
      name: "Dhan Demat Account Opening Assistance",
      serviceType: "Demat and trading account setup assistance",
      provider: { "@id": "https://www.tradefirm.in/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      audience: { "@type": "Audience", geographicArea: { "@type": "Country", name: "India" } },
      description: "Guided access to the Dhan referral registration route, digital account-opening information and Indian market research workflow.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": pageUrl + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tradefirm.in/" },
        { "@type": "ListItem", position: 2, name: "Dhan Demat Account", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": pageUrl + "#faq",
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
    <a
      className={className}
      href={referralUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      data-analytics-event="dhan_account_open"
    >
      {children} <ArrowRight size={17} />
    </a>
  );
}

export default function DhanDematAccountPage() {
  return (
    <main className={styles.fxPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.fxShell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrow}><i /> TRADE FIRM · INDIAN MARKETS</div>
              <h1>Open a Dhan Demat &amp; <span>trading account.</span></h1>
              <p className={styles.heroText}>
                Start your Dhan account-opening journey through the secure referral route and explore Indian stocks, F&amp;O, ETFs, mutual funds and IPOs with structured TRADE FIRM research.
              </p>
              <div className={styles.heroActions}>
                <ExternalCta>Open Dhan account</ExternalCta>
                <a className={styles.secondaryButton} href="#dhan-enquiry">Get setup assistance</a>
              </div>
              <div className={styles.trustRow}>
                <div><MonitorSmartphone size={20} /><span><strong>App &amp; web</strong><small>Multi-device access</small></span></div>
                <div><LineChart size={20} /><span><strong>Indian markets</strong><small>NSE &amp; BSE access</small></span></div>
                <div><ShieldCheck size={20} /><span><strong>Digital KYC</strong><small>Broker-managed flow</small></span></div>
              </div>
            </div>

            <div className={styles.terminalWrap} aria-label="Dhan Indian market account access preview">
              <div className={styles.terminal}>
                <div className={styles.terminalHead}>
                  <div><span>TRADE FIRM · DHAN ACCESS</span><strong>Indian market coverage</strong></div>
                  <b><i /> MARKET READY</b>
                </div>
                <div className={styles.chartPanel}>
                  <div className={styles.chartGrid} aria-hidden="true" />
                  <div className={styles.chartLabel}><span>RESEARCH WINDOW</span><strong>NSE → BSE</strong></div>
                  <svg viewBox="0 0 620 240" preserveAspectRatio="none" aria-hidden="true">
                    <defs><linearGradient id="dhanArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2e79ff" stopOpacity=".35" /><stop offset="100%" stopColor="#2e79ff" stopOpacity="0" /></linearGradient></defs>
                    <path className={styles.areaPath} d="M0 196 C55 180 72 206 121 173 S205 149 246 160 S316 123 357 131 S435 75 478 101 S550 46 620 40 L620 240 L0 240 Z" />
                    <path className={styles.trendPath} d="M0 196 C55 180 72 206 121 173 S205 149 246 160 S316 123 357 131 S435 75 478 101 S550 46 620 40" />
                    <circle cx="620" cy="40" r="6" />
                  </svg>
                </div>
                <div className={styles.quoteList}>
                  {["NIFTY 50", "BANK NIFTY", "EQUITIES"].map((symbol, index) => (
                    <a href={referralUrl} target="_blank" rel="sponsored noopener noreferrer" key={symbol}>
                      <span>{["N", "B", "E"][index]}</span>
                      <div><strong>{symbol}</strong><small>{["Index", "Banking index", "NSE & BSE"][index]}</small></div>
                      <b>{index === 2 ? "STOCKS" : "INDICES"}</b><ArrowRight size={16} />
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.terminalFoot}>
                <span><CheckCircle2 size={15} /> Secure Dhan registration</span>
                <span><LockKeyhole size={15} /> Broker-managed account</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.signalStrip}>
        <span>DHAN DEMAT ACCOUNT</span><i /><span>STOCK TRADING INDIA</span><i /><span>NIFTY &amp; BANK NIFTY</span><i /><span>F&amp;O · IPO · ETFs</span>
      </div>

      <section className={styles.section} id="dhan-markets">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>ONE INDIAN MARKET ACCOUNT</span><h2>Trade, invest and track through Dhan.</h2></div>
            <p>Explore the market segments relevant to your goals, then confirm activation, charges and risk directly in the official account flow.</p>
          </div>
          <div className={styles.marketGrid}>
            {markets.map(({ code, title, copy, icon: Icon }) => (
              <article className={styles.marketCard} key={title}>
                <div><span>{code}</span><Icon size={21} /></div><h3>{title}</h3><p>{copy}</p>
                <ExternalCta className={styles.cardLink}>Open account access</ExternalCta>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.fundingSection].join(" ")} id="dhan-platforms">
        <div className={styles.fxShell}>
          <div className={styles.fundingPanel}>
            <div className={styles.fundingCopy}>
              <span>DHAN PLATFORMS &amp; TOOLS</span>
              <h2>Built for Indian traders and investors.</h2>
              <p>Choose mobile, web or specialised market workflows based on your trading style. Feature availability, charges and eligibility remain subject to Dhan's current platform terms.</p>
              <ExternalCta>Explore Dhan account</ExternalCta>
            </div>
            <div className={styles.fundingGrid}>
              {platformMethods.map(({ label, title, copy, icon: Icon }) => (
                <article className={styles.fundingCard} key={title}>
                  <div><span>{label}</span><Icon size={20} /></div><small><i /> PLATFORM ACCESS</small><h3>{title}</h3><p>{copy}</p><b>RESEARCH · EXECUTION</b>
                </article>
              ))}
              <div className={styles.fundingSafety}><LockKeyhole size={19} /><p><strong>Account security:</strong> register, complete KYC and add funds only through the official Dhan page or your own verified Dhan account.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.researchSection].join(" ")} id="dhan-research">
        <div className={styles.fxShell}>
          <div className={styles.researchPanel}>
            <div className={styles.researchCopy}>
              <span>TRADE FIRM RESEARCH DESK</span><h2>A structured Indian market process.</h2>
              <p>Use the broker for account access and execution. Use a repeatable research framework to read context, prepare scenarios and define risk before making a decision.</p>
              <ul><li><Check size={15} /> NIFTY &amp; BANK NIFTY context</li><li><Check size={15} /> Scenario-based thinking</li><li><Check size={15} /> Risk before reward</li></ul>
            </div>
            <div className={styles.researchGrid}>
              {researchItems.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.guideSection].join(" ")} id="choose-demat-account">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>DEMAT ACCOUNT CHECKLIST</span><h2>What to review before opening a trading account.</h2></div>
            <p>A professional account decision goes beyond an app interface. Verify the broker, pricing, products and complete order journey.</p>
          </div>
          <div className={styles.guideGrid}>
            {selectionChecks.map(({ icon: Icon, title, copy }) => <article key={title}><Icon size={22} /><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className={styles.topicRow} aria-label="Dhan account and Indian trading topics covered">
            <span>Dhan account opening</span><span>Online Demat account</span><span>Stock trading India</span><span>F&amp;O trading account</span><span>IPO investing</span><span>NSE &amp; BSE access</span>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.guideSection].join(" ")} id="dhan-guides">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}>
            <div><span>DHAN ACCOUNT RESOURCE HUB</span><h2>Detailed guides for every account-opening decision.</h2></div>
            <p>Use the step-by-step resources to prepare documents, understand charges, verify referral attribution and complete onboarding safely.</p>
          </div>
          <div className={styles.guideGrid}>
            <article><SearchCheck size={22} /><h3>Open a Dhan account online</h3><p>Follow registration, verification, KYC, e-sign, approval and first-login checks in the correct order.</p><a className={styles.cardLink} href="/blogs/how-to-open-dhan-demat-account-online">Read account-opening guide <ArrowRight size={15} /></a></article>
            <article><WalletCards size={22} /><h3>Documents &amp; KYC checklist</h3><p>Prepare identity, address, bank, signature and segment-related records before starting the form.</p><a className={styles.cardLink} href="/blogs/dhan-account-opening-documents-kyc-guide">Read KYC guide <ArrowRight size={15} /></a></article>
            <article><Banknote size={22} /><h3>Brokerage &amp; charges</h3><p>Separate account costs, brokerage, statutory levies, DP charges and financing before comparing tariffs.</p><a className={styles.cardLink} href="/blogs/dhan-brokerage-charges-account-opening-guide">Understand Dhan charges <ArrowRight size={15} /></a></article>
            <article><ShieldCheck size={22} /><h3>Referral link explained</h3><p>Understand attribution, current terms, account custody and the security boundaries of a referral route.</p><a className={styles.cardLink} href="/blogs/dhan-referral-link-how-it-works">Read referral guide <ArrowRight size={15} /></a></article>
          </div>
        </div>
      </section>

            <section className={[styles.section, styles.processSection].join(" ")} id="dhan-process">
        <div className={styles.fxShell}>
          <div className={styles.processLayout}>
            <div className={styles.processCopy}><span>ACCOUNT OPENING PROCESS</span><h2>From referral link to platform access.</h2><p>Dhan handles registration, KYC, account approval, funds, securities and execution. TRADE FIRM provides the referral route and setup support.</p><ExternalCta>Start Dhan registration</ExternalCta></div>
            <div className={styles.processList}>{processSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.leadSection].join(" ")} id="dhan-enquiry">
        <div className={styles.fxShell}>
          <div className={styles.leadLayout}>
            <div className={styles.leadCopy}>
              <span>SETUP ASSISTANCE</span><h2>Need help before opening your Dhan account?</h2><p>Tell the desk where you are in the journey. Every completed request is recorded directly in the TRADE FIRM CRM for structured follow-up.</p>
              <div><p><Banknote size={18} /> Account-opening checklist</p><p><MonitorSmartphone size={18} /> App and platform guidance</p><p><Landmark size={18} /> KYC and bank-linking checklist</p></div>
            </div>
            <DhanLeadForm />
          </div>
        </div>
      </section>

      <section className={[styles.section, styles.faqSection].join(" ")} id="dhan-faq">
        <div className={styles.fxShell}>
          <div className={styles.sectionHead}><div><span>DHAN ACCOUNT FAQ</span><h2>Clear answers before you begin.</h2></div><p>Understand the account route, KYC journey, market access, pricing and referral relationship before proceeding.</p></div>
          <div className={styles.faqList}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
          <div className={styles.complianceNote}>
            <ShieldCheck size={22} /><div><strong>Referral and account information</strong><p>The Dhan buttons on this page are referral links. TRADE FIRM may receive a referral benefit. Brokerage services, KYC, funds, securities and execution are provided by Dhan. Review the latest <a href="https://dhan.co/pricing/" target="_blank" rel="noopener noreferrer">official Dhan pricing</a> and regulatory disclosures before opening or using an account.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}
