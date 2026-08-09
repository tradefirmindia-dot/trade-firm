export const majorIndices = [
  "NIFTY 50",
  "NIFTY BANK",
  "NIFTY FINANCIAL SERVICES",
  "NIFTY MIDCAP SELECT",
  "NIFTY NEXT 50",
  "BSE SENSEX",
  "BSE BANKEX",
  "INDIA VIX",
];

export const broadMarketIndices = [
  "NIFTY 100",
  "NIFTY 200",
  "NIFTY 500",
  "NIFTY TOTAL MARKET",
  "NIFTY LARGEMIDCAP 250",
  "NIFTY MIDCAP 50",
  "NIFTY MIDCAP 100",
  "NIFTY MIDCAP 150",
  "NIFTY SMALLCAP 50",
  "NIFTY SMALLCAP 100",
  "NIFTY SMALLCAP 250",
  "NIFTY MICROCAP 250",
  "BSE 100",
  "BSE 200",
  "BSE 500",
  "BSE SENSEX 50",
  "BSE SENSEX NEXT 50",
  "BSE MIDCAP",
  "BSE SMALLCAP",
];

export const sectorIndices = [
  "NIFTY AUTO",
  "NIFTY BANK",
  "NIFTY FINANCIAL SERVICES",
  "NIFTY FMCG",
  "NIFTY IT",
  "NIFTY MEDIA",
  "NIFTY METAL",
  "NIFTY PHARMA",
  "NIFTY PSU BANK",
  "NIFTY PRIVATE BANK",
  "NIFTY REALTY",
  "NIFTY HEALTHCARE",
  "NIFTY CONSUMER DURABLES",
  "NIFTY OIL & GAS",
  "NIFTY INDIA DEFENCE",
  "NIFTY COMMODITIES",
  "NIFTY CPSE",
  "NIFTY ENERGY",
  "NIFTY INFRASTRUCTURE",
  "NIFTY INDIA CONSUMPTION",
  "NIFTY CAPITAL MARKETS",
  "NIFTY EV & NEW AGE AUTOMOTIVE",
  "BSE AUTO",
  "BSE CAPITAL GOODS",
  "BSE CONSUMER DURABLES",
  "BSE ENERGY",
  "BSE FMCG",
  "BSE FINANCIAL SERVICES",
  "BSE HEALTHCARE",
  "BSE INDUSTRIALS",
  "BSE IT",
  "BSE METAL",
  "BSE OIL & GAS",
  "BSE POWER",
  "BSE PSU BANK",
  "BSE REALTY",
  "BSE TECK",
];

export const researchServices = [
  {
    tag: "INDICES",
    title: "Index Market Research",
    text: "Structured research across major NSE and BSE indices, broader-market benchmarks, sectoral indices and volatility context.",
    points: ["Market structure", "Important price levels", "Trend and volatility context"],
  },
  {
    tag: "OPTIONS",
    title: "Options Trading Research",
    text: "Index and stock-options research built around price action, premium behaviour, volatility, timing and defined risk.",
    points: ["Calls, puts and spreads", "Expiry and option-chain context", "Defined-risk execution"],
  },
  {
    tag: "FUTURES",
    title: "Futures Market Research",
    text: "Research across index futures and eligible stock futures using trend, momentum, structure and open-interest context.",
    points: ["Index futures", "Stock futures", "Support, resistance and invalidation"],
  },
  {
    tag: "DERIVATIVES",
    title: "Futures & Options Research",
    text: "A connected F&O view covering derivatives structure, price action, expiry behaviour and risk-managed opportunities.",
    points: ["Index derivatives", "Stock derivatives", "Risk-to-reward framework"],
  },
  {
    tag: "EQUITIES",
    title: "Stock Market Research",
    text: "Research on selected NSE and BSE-listed companies using technical structure, volume, sector strength and business developments.",
    points: ["Large, mid and small-cap stocks", "Technical and price-action research", "Results and event context"],
  },
  {
    tag: "ACTIVE MARKETS",
    title: "Intraday Trading Research",
    text: "Session-focused research for active traders, with important levels, market direction and structured intraday scenarios.",
    points: ["Opening-range context", "Breakout and reversal structure", "Session risk plan"],
  },
  {
    tag: "MULTI-SESSION",
    title: "Swing & Positional Research",
    text: "Research for opportunities that may develop over multiple sessions using trend, sector performance and defined risk.",
    points: ["Swing opportunities", "Positional structure", "Review and invalidation levels"],
  },
  {
    tag: "PRIMARY MARKET",
    title: "IPO Research",
    text: "Independent IPO research covering the business, financials, valuation, peer comparison, offer structure and material risks.",
    points: ["Business and financial review", "Valuation and peer comparison", "Opportunity and risk assessment"],
  },
  {
    tag: "DAILY DESK",
    title: "Market Outlook & Review",
    text: "Pre-market preparation, live-market observations, sector watch and post-market review in one consistent research language.",
    points: ["Pre-market outlook", "Live-market context", "Closing and weekly review"],
  },
];

export const blogPosts = [
  {
    slug: "market-structure-before-a-trade",
    category: "PRICE ACTION",
    title: "Read Market Structure Before Planning a Trade",
    excerpt: "A practical framework for identifying trend, important zones, confirmation and invalidation before execution.",
    readTime: "6 min read",
    intro:
      "Market structure is the map behind every disciplined trade plan. It helps separate a meaningful opportunity from random price movement before capital is placed at risk.",
    sections: [
      {
        title: "Start with direction, not prediction",
        paragraphs: [
          "Begin by asking whether price is forming higher highs and higher lows, lower highs and lower lows, or moving inside a range. This simple classification creates context without forcing a forecast.",
          "A good research view describes what the market is doing now and what would need to change before the view becomes invalid.",
        ],
      },
      {
        title: "Mark the levels that can change the decision",
        paragraphs: [
          "Previous highs and lows, opening ranges, demand and supply zones, round numbers and prior closing references can become decision areas. A level matters when it changes the risk or the scenario—not because the chart has many lines.",
        ],
        bullets: ["Context level", "Confirmation trigger", "Invalidation level", "Planned objective"],
      },
      {
        title: "Let confirmation complete the plan",
        paragraphs: [
          "Reaching a level is not always enough. Price behaviour, rejection, acceptance and momentum around that level can provide the confirmation needed to act with defined risk.",
          "The final plan should state the condition for entry, the point that proves the idea wrong and the maximum capital that can be risked.",
        ],
      },
    ],
  },
  {
    slug: "position-sizing-risk-into-quantity",
    category: "RISK MANAGEMENT",
    title: "Position Sizing: Turn Planned Risk into Quantity",
    excerpt: "Understand how capital, risk percentage and stop distance work together to determine a disciplined position size.",
    readTime: "5 min read",
    intro:
      "Position sizing converts a trading idea into a measurable risk decision. The quantity should come from the risk plan—not from excitement, conviction or available buying power.",
    sections: [
      {
        title: "Define the maximum planned risk",
        paragraphs: [
          "If trading capital is ₹1,00,000 and planned risk is 1%, the maximum planned loss for the setup is ₹1,000. This amount becomes the risk limit before entry and stop prices are considered.",
        ],
      },
      {
        title: "Measure price risk",
        paragraphs: [
          "Price risk is the absolute difference between the planned entry and stop. An entry at ₹100 with a stop at ₹95 creates ₹5 of risk per unit.",
          "Entering the intended order quantity then shows the actual rupee risk for that trade, before costs, liquidity and product-specific margin are considered.",
        ],
      },
      {
        title: "Use the calculator as a planning aid",
        paragraphs: [
          "The Trade Firm Risk Planner makes this relationship visible and shows how the entered quantity changes actual capital at risk before execution.",
        ],
      },
    ],
  },
  {
    slug: "options-premium-volatility-context",
    category: "OPTIONS",
    title: "Options Premium Needs More Than a Directional View",
    excerpt: "Why direction, volatility, time decay, liquidity and strike selection must be considered together in options research.",
    readTime: "7 min read",
    intro:
      "An options trade can have the correct directional view and still produce a poor outcome. Premium is influenced by more than the movement of the underlying index or stock.",
    sections: [
      {
        title: "Direction is only one input",
        paragraphs: [
          "Option premium responds to movement in the underlying, implied volatility, time remaining to expiry and the option's strike position. These variables can change at the same time.",
          "Research should therefore connect the market view with the product selected to express that view.",
        ],
      },
      {
        title: "Time and volatility change the risk",
        paragraphs: [
          "Near expiry, time decay can become faster. Around major events, implied volatility can expand before the event and contract afterwards. Both situations can materially affect premium behaviour.",
        ],
        bullets: ["Underlying market structure", "Expiry and time remaining", "Implied-volatility context", "Liquidity and bid-ask spread"],
      },
      {
        title: "Defined risk stays central",
        paragraphs: [
          "A structured options plan defines the scenario, premium risk, invalidation and exit conditions before execution. No options structure removes market risk entirely.",
        ],
      },
    ],
  },
  {
    slug: "futures-trading-risk-checklist",
    category: "FUTURES",
    title: "A Risk Checklist for Index and Stock Futures",
    excerpt: "A concise pre-trade checklist covering contract exposure, volatility, liquidity, stop distance and event risk.",
    readTime: "5 min read",
    intro:
      "Futures provide direct exposure and leverage, which makes a clear risk framework essential. A small market move can create a meaningful change in account equity.",
    sections: [
      {
        title: "Understand the contract exposure",
        paragraphs: [
          "Check the current lot size, contract value, expiry and margin before planning the trade. Margin is not the same as maximum risk, and requirements may change with market conditions.",
        ],
      },
      {
        title: "Build the scenario before execution",
        paragraphs: [
          "Define the market structure, entry condition, stop distance and maximum rupee risk. Also note major scheduled events that can cause gaps or rapid volatility.",
        ],
        bullets: ["Contract and lot size", "Liquidity and spread", "Entry and invalidation", "Maximum rupee risk", "Event and overnight-gap risk"],
      },
      {
        title: "Review the trade as a process",
        paragraphs: [
          "After the position is closed, compare the execution with the original plan. Process review is more useful than judging quality only by profit or loss.",
        ],
      },
    ],
  },
  {
    slug: "ipo-research-checklist",
    category: "IPO RESEARCH",
    title: "What to Review Before Evaluating an IPO",
    excerpt: "A research checklist covering business quality, financials, valuation, use of proceeds, risks and peer comparison.",
    readTime: "6 min read",
    intro:
      "An IPO is more than a listing-day event. A sound research process studies the company, the offer and the price being asked before forming a view.",
    sections: [
      {
        title: "Understand the business",
        paragraphs: [
          "Review how the company earns revenue, its competitive position, customer concentration, industry conditions and the durability of its business model.",
        ],
      },
      {
        title: "Read the offer, not only the headlines",
        paragraphs: [
          "Separate fresh issue proceeds from an offer for sale. Examine how funds will be used, promoter holdings after the issue and material risks disclosed in the offer documents.",
        ],
        bullets: ["Revenue and profit quality", "Cash flow and debt", "Valuation versus listed peers", "Use of proceeds", "Material business risks"],
      },
      {
        title: "Evaluate listing scenarios",
        paragraphs: [
          "Demand indicators and market sentiment can change quickly. IPO research should examine both opportunity and downside scenarios across allotment, listing and post-listing price behaviour.",
        ],
      },
    ],
  },
  {
    slug: "intraday-vs-swing-research",
    category: "TRADING PROCESS",
    title: "Intraday and Swing Research Need Different Clocks",
    excerpt: "See how time horizon changes market context, level selection, risk, monitoring and review.",
    readTime: "5 min read",
    intro:
      "Intraday and swing opportunities may start from the same chart, but they operate on different time horizons. The research plan must match the intended holding period.",
    sections: [
      {
        title: "Intraday research focuses on the session",
        paragraphs: [
          "Opening behaviour, the first range, session liquidity, intraday momentum and scheduled events matter more when the position is expected to close within the same trading day.",
        ],
      },
      {
        title: "Swing research needs broader context",
        paragraphs: [
          "Daily and multi-session structure, sector strength, earnings events and overnight gaps become more important when a position may remain open for several sessions.",
        ],
      },
      {
        title: "Match risk to the holding period",
        paragraphs: [
          "A stop appropriate for an intraday setup may be too close for a swing idea. The position size, monitoring plan and invalidation should all be derived from the chosen horizon.",
        ],
        bullets: ["Time horizon", "Relevant structure", "Event exposure", "Stop distance", "Position size"],
      },
    ],
  },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
