export const contentClusters = [
  {
    slug: "advisory-and-provider-selection",
    name: "Advisory & Provider Selection",
    title: "Stock Market Advisory and Research Provider Selection",
    description: "A practical Indian-market library for comparing advisory scope, research quality, communication, verification, fees and risk standards before subscribing.",
    keywords: ["stock market advisory India", "research advisory firm", "market adviser verification"],
    serviceHref: "/stock-market-advisory-india",
    toolHref: "/tools/risk-planner",
    intro: "Choosing a research or advisory provider is a due-diligence decision. This pillar brings together the questions a market participant should ask about identity, applicable service scope, research evidence, official communication, fees, support and risk language before making a commitment.",
    sections: [
      {
        title: "Define the service before comparing providers",
        text: "General research, model recommendations and client-specific advisory do not create the same relationship. Compare providers only after the intended audience, covered instruments, delivery format, monitoring responsibility and onboarding requirements are clear.",
        points: ["Research or advisory scope", "Markets and holding periods", "Update and support format", "Applicable onboarding process"],
      },
      {
        title: "Evaluate evidence instead of promotion",
        text: "A strong process explains how a view is formed, what information is used and what would invalidate the scenario. Promotional screenshots, isolated outcomes and urgency do not provide the same evidence as a documented and reviewable method.",
        points: ["Research rationale", "Alternative scenario", "Invalidation and risk", "Post-view review"],
      },
      {
        title: "Verify official identity and communication",
        text: "Match the provider name, website, phone, email, payment beneficiary and applicable registration information through official sources. Never share broker credentials, PINs, OTPs or remote-device access with a research or advisory provider.",
      },
      {
        title: "Judge fit, not guaranteed outcomes",
        text: "No securities-market service can remove uncertainty. The better comparison is whether the service scope, frequency, decision horizon and risk framework match the participant's needs and ability to monitor the market.",
      },
    ],
  },
  {
    slug: "nifty-bank-nifty-research",
    name: "NIFTY & BANK NIFTY Research",
    title: "NIFTY and BANK NIFTY Research Framework",
    description: "Learn how pre-market context, opening ranges, index breadth, constituents, derivatives and defined risk fit into daily index research.",
    keywords: ["NIFTY research", "BANK NIFTY advisory", "index market analysis India"],
    serviceHref: "/nifty-bank-nifty-advisory",
    toolHref: "/tools/risk-reward-calculator",
    intro: "Daily index research is most useful when it prepares decisions instead of predicting every move. This collection organises previous-session references, gap context, the opening range, first-hour behaviour, index constituents, breadth, volatility and product risk into a repeatable session plan.",
    sections: [
      {
        title: "Build context before the opening bell",
        text: "Previous highs, lows and closes, overnight developments, scheduled events and the expected gap create the initial map. These references are scenarios to test after the open, not automatic entry signals.",
        points: ["Previous-session structure", "Global and event context", "Likely gap condition", "Important decision zones"],
      },
      {
        title: "Let the opening produce new evidence",
        text: "The opening range shows early acceptance, rejection and volatility. Combining it with first-hour structure helps distinguish continuation, reversal and balance without reacting to every candle.",
        points: ["Opening 15-minute range", "First-hour high and low", "Breadth and sector leadership", "Confirmation quality"],
      },
      {
        title: "Read BANK NIFTY through its constituents",
        text: "BANK NIFTY is concentrated in financial companies, so heavyweight banking stocks and sector breadth can influence the index directly. Index price, constituents and event risk should be reviewed together.",
      },
      {
        title: "Connect the index view to instrument risk",
        text: "Futures and options add leverage, expiry, volatility, spread and execution risk. An index direction alone does not define quantity, stop distance or maximum rupee loss.",
      },
    ],
  },
  {
    slug: "options-and-volatility",
    name: "Options & Volatility",
    title: "Options Trading, Premium and Volatility Research",
    description: "A structured options library covering the underlying view, option chain, Greeks, expiry, liquidity, implied volatility and defined-risk decisions.",
    keywords: ["options research India", "options trading advisory", "implied volatility India"],
    serviceHref: "/options-derivatives-research",
    toolHref: "/tools/risk-reward-calculator",
    intro: "An option premium is shaped by more than direction. This pillar connects the underlying market structure with strike, expiry, moneyness, time, implied volatility, liquidity and position risk so product selection remains part of the research rather than an afterthought.",
    sections: [
      {
        title: "Start with the underlying market",
        text: "Define the market scenario, activation condition and invalidation on NIFTY, BANK NIFTY or the selected stock before choosing a contract. Contract selection without an underlying thesis can turn the premium itself into the only signal.",
        points: ["Trend and decision zones", "Activation condition", "Underlying invalidation", "Expected holding period"],
      },
      {
        title: "Choose strike and expiry deliberately",
        text: "Moneyness, time remaining, sensitivity and liquidity affect how a contract responds. The cheapest visible premium is not automatically the most efficient or lowest-risk expression of a view.",
        points: ["Moneyness", "Time to expiry", "Bid-ask spread", "Market depth"],
      },
      {
        title: "Separate direction from volatility",
        text: "A directional view can be broadly correct while an option underperforms because implied volatility contracts or time passes. Scenario planning should consider expansion, contraction and the event calendar.",
      },
      {
        title: "Translate premium movement into rupee risk",
        text: "Entry-to-stop distance, lot size, quantity and realistic slippage determine the planned capital at risk. Margin or buying power does not replace this calculation.",
      },
    ],
  },
  {
    slug: "futures-and-derivatives",
    name: "Futures & Derivatives",
    title: "Futures and Derivatives Research in India",
    description: "Understand futures exposure, margin, leverage, basis, rollover, hedging, liquidity and expiry before expressing a market view.",
    keywords: ["futures trading India", "F&O research", "index futures risk"],
    serviceHref: "/options-derivatives-research",
    toolHref: "/tools/risk-planner",
    intro: "Futures make market exposure efficient, but efficiency is not the same as limited risk. This research pillar explains contract value, margin, basis, expiry, rollover, hedging and position sizing so a futures decision remains connected to both the thesis and the capital boundary.",
    sections: [
      {
        title: "Measure contract exposure first",
        text: "The lot size and futures price determine the notional exposure controlled by a contract. That value can be much larger than the margin blocked, which is why margin should never be treated as maximum loss.",
        points: ["Contract price", "Current lot size", "Notional exposure", "Margin requirement"],
      },
      {
        title: "Understand basis and expiry",
        text: "The difference between futures and spot can reflect financing, dividends, demand and time remaining. Basis can narrow into expiry, and rolling a position introduces a new contract price and spread.",
        points: ["Spot-versus-futures basis", "Days to expiry", "Rollover spread", "Liquidity by contract"],
      },
      {
        title: "Use open interest as context",
        text: "Price and open-interest changes can describe participation, but they do not reveal every participant's motive. Hedging, spreads and multi-leg positions prevent simple labels from becoming certain signals.",
      },
      {
        title: "Plan gaps, slippage and changing margin",
        text: "Overnight events can move futures beyond a planned stop, while volatility can increase margin. Quantity should allow for these uncertainties rather than assuming ideal execution.",
      },
    ],
  },
  {
    slug: "equity-and-swing-research",
    name: "Equity & Swing Research",
    title: "Equity, Intraday and Swing Research Process",
    description: "Connect market regime, sector strength, business evidence, price structure, liquidity, events and holding-period risk for Indian equities.",
    keywords: ["equity research India", "swing trading research", "stock selection process"],
    serviceHref: "/equity-research",
    toolHref: "/tools/risk-planner",
    intro: "Equity decisions need a clock. Intraday research uses session evidence, swing research adds multi-session structure and event risk, while investment-oriented work requires deeper business and valuation analysis. This pillar keeps those horizons distinct while showing where their evidence can support one another.",
    sections: [
      {
        title: "Move from market to sector to stock",
        text: "Broad-market regime and sector leadership provide context before a stock-specific setup is evaluated. Relative strength is more informative when liquidity and a clear comparison benchmark are also considered.",
        points: ["Market regime", "Sector trend", "Stock relative strength", "Volume and liquidity"],
      },
      {
        title: "Match evidence to the holding period",
        text: "An intraday view may prioritise the opening, catalyst and session structure. A swing thesis must account for overnight gaps and scheduled events, while an investment view needs financial and valuation evidence.",
        points: ["Decision horizon", "Relevant timeframe", "Monitoring frequency", "Exit or review condition"],
      },
      {
        title: "Separate business quality from timing",
        text: "A sound company can still be priced aggressively or show weak market structure. Fundamental evidence and technical behaviour answer different questions and should be weighted according to the decision.",
      },
      {
        title: "Size for liquidity and event risk",
        text: "Stops may execute poorly through overnight gaps or thin order books. Quantity should reflect both the planned price risk and the possibility of a worse realised exit.",
      },
    ],
  },
  {
    slug: "ipo-and-fundamental-research",
    name: "IPO & Fundamental Research",
    title: "IPO and Fundamental Research for Indian Markets",
    description: "Review an IPO through its offer document, business model, financial quality, cash flow, issue structure, valuation, peers and material risks.",
    keywords: ["IPO research India", "IPO valuation analysis", "fundamental research India"],
    serviceHref: "/ipo-research",
    toolHref: "/tools/drawdown-recovery-calculator",
    intro: "An IPO story should be tested against the offer document and the economics of the business. This collection organises revenue drivers, margins, cash flow, debt, working capital, fresh issue, offer for sale, promoter holding, peer comparison and valuation into a balanced primary-market process.",
    sections: [
      {
        title: "Read the business before the issue demand",
        text: "Products, customers, geography, concentration, suppliers, competition and industry structure explain how the issuer earns and what could interrupt that process. Subscription headlines do not replace this work.",
        points: ["Revenue model", "Customer and supplier concentration", "Competitive position", "Material business risks"],
      },
      {
        title: "Test profit against cash and the balance sheet",
        text: "Revenue and profit trends should be compared with operating cash flow, debt and working-capital movement. Fast growth that consumes cash can carry a different risk profile from growth funded internally.",
        points: ["Margins", "Operating cash flow", "Debt", "Receivables and inventory"],
      },
      {
        title: "Separate fresh issue from offer for sale",
        text: "Fresh issue proceeds enter the company for disclosed purposes; offer-for-sale proceeds go to selling shareholders. The mix affects dilution, capital availability and the interpretation of the transaction.",
      },
      {
        title: "Compare valuation with genuine peers",
        text: "A peer set should reflect business mix, scale, margins, growth and capital intensity. One headline multiple without those differences can create false precision.",
      },
    ],
  },
  {
    slug: "risk-management-and-position-sizing",
    name: "Risk Management & Position Sizing",
    title: "Trading Risk Management and Position Sizing",
    description: "Use capital risk, stop distance, quantity, correlation, drawdown and risk-reward math to make a market plan measurable before execution.",
    keywords: ["trading risk management", "position sizing calculator India", "risk reward ratio"],
    serviceHref: "/stock-market-research-india",
    toolHref: "/tools/risk-planner",
    intro: "Risk management converts an uncertain market idea into a bounded decision. This pillar connects maximum permitted loss, invalidation, stop distance, quantity, portfolio correlation, reward-to-risk and drawdown so risk can be reviewed in rupees as well as percentages.",
    sections: [
      {
        title: "Set the loss budget before quantity",
        text: "A fixed percentage or rupee risk creates a boundary before the excitement of a setup affects position size. The boundary should reflect financial capacity and the possibility of several losses, not just one trade.",
        points: ["Trading capital", "Risk per setup", "Daily or portfolio limit", "Maximum open risk"],
      },
      {
        title: "Connect invalidation, stop and size",
        text: "The research condition that changes the thesis should inform the stop reference. Entry-to-stop distance then determines how much quantity can fit inside the permitted loss.",
        points: ["Entry", "Invalidation", "Price risk per unit", "Order quantity"],
      },
      {
        title: "Measure combined exposure",
        text: "Several positions in banks, financial indices or related sectors can behave like one concentrated bet. Portfolio risk should consider correlation and shared event exposure rather than adding positions independently.",
      },
      {
        title: "Respect drawdown mathematics",
        text: "A percentage loss requires a larger percentage gain on the reduced capital base to recover. Smaller controlled losses preserve both financial and decision-making capacity.",
      },
    ],
  },
  {
    slug: "market-structure-and-price-action",
    name: "Market Structure & Price Action",
    title: "Market Structure and Price Action Research",
    description: "Study trend, range, support, resistance, demand, supply, volume, multiple timeframes, confirmation and invalidation before planning a trade.",
    keywords: ["market structure trading", "price action India", "support resistance research"],
    serviceHref: "/stock-market-research-india",
    toolHref: "/tools/risk-reward-calculator",
    intro: "Price action is useful when it reduces a chart to decisions. This collection explains how trend, balance, swing points, demand and supply, volume, opening behaviour and multiple timeframes can define a scenario without turning every line or candle into a signal.",
    sections: [
      {
        title: "Classify structure before looking for an entry",
        text: "A market can trend, balance or transition between the two. Higher highs and lows, lower highs and lows, failed extensions and overlapping swings help describe the current condition without claiming certainty.",
        points: ["Trend or range", "Swing sequence", "Momentum and overlap", "Evidence of transition"],
      },
      {
        title: "Treat zones as areas for evidence",
        text: "Support, resistance, demand and supply are areas where behaviour may change. They become more useful when price reaches them with a clear context and then confirms acceptance, rejection or failure.",
        points: ["Zone origin", "Number of prior tests", "Approach quality", "Confirmation and invalidation"],
      },
      {
        title: "Align timeframes without waiting for perfection",
        text: "A higher timeframe can define regime, a middle timeframe can map the setup and a lower timeframe can refine activation. Each timeframe should have one job so analysis does not become contradictory.",
      },
      {
        title: "Use volume as supporting evidence",
        text: "Volume can show participation around a breakout, rejection or range edge, but it should be read with price and liquidity. One high-volume bar does not explain every participant's intention.",
      },
    ],
  },
];

export function getContentCluster(slug) {
  return contentClusters.find((cluster) => cluster.slug === slug);
}

export function getPostClusterSlug(post) {
  if (post.cluster) return post.cluster;

  const text = `${post.category} ${post.title} ${post.slug}`.toLowerCase();
  if (/ipo|offer document|valuation/.test(text)) return "ipo-and-fundamental-research";
  if (/option|volatility|vix|expiry|premium/.test(text)) return "options-and-volatility";
  if (/future|f&o|derivative/.test(text)) return "futures-and-derivatives";
  if (/position siz|risk management|stop-loss|invalidation|drawdown|risk-reward|journal|correlation/.test(text)) return "risk-management-and-position-sizing";
  if (/nifty|bank nifty|index advisory|index research/.test(text)) return "nifty-bank-nifty-research";
  if (/equity|swing|fundamental|stock screen|earnings|intraday vs/.test(text)) return "equity-and-swing-research";
  if (/market structure|price action|support|resistance|opening range|volume/.test(text)) return "market-structure-and-price-action";
  return "advisory-and-provider-selection";
}

export function getPostsForCluster(posts, slug) {
  return posts.filter((post) => getPostClusterSlug(post) === slug);
}
