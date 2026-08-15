import { seoMaxDepth } from "./seo-max-depth.js";

const published = "2026-08-15";

function guide(details) {
  const sections = [...details.sections, ...(seoMaxDepth[details.slug] || [])];
  const words = [details.title, details.excerpt, details.intro, ...sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets || [])])]
    .join(" ")
    .trim()
    .split(/\s+/)
    .length;

  return {
    published,
    updated: published,
    ...details,
    sections,
    readTime: `${Math.max(3, Math.ceil(words / 200))} min read`,
  };
}

export const seoMaxPosts = [
  guide({
    slug: "stock-market-advisory-fees-value-checklist",
    cluster: "advisory-and-provider-selection",
    category: "ADVISORY GUIDE",
    title: "Stock Market Advisory Fees: A Value and Scope Checklist",
    excerpt: "Compare an advisory fee with service scope, research depth, delivery frequency, support, risk communication and total terms—not with return promises.",
    readTime: "8 min read",
    intro: "The price of a stock market advisory service is meaningful only when the deliverables and responsibilities are clear. A lower fee can be poor value when the scope is vague, while a higher fee is not justified merely by aggressive claims. The comparison should begin with what the participant receives and how the process manages uncertainty.",
    sections: [
      {
        title: "List the complete deliverables",
        paragraphs: ["Record the covered markets, intended holding periods, research or advisory format, expected frequency, update process and support channel. A package described only as premium or unlimited is difficult to compare because the actual work remains undefined.", "Ask whether onboarding, research notes, live updates, review and complaint support are included or handled separately."],
        bullets: ["Covered instruments", "Delivery frequency", "Update and exit process", "Support availability"],
      },
      {
        title: "Compare process depth, not call quantity",
        paragraphs: ["A large number of messages does not automatically create more value. Each actionable view should have a rationale, activation condition, invalidation and risk context that the user can understand and review.", "A smaller number of selective, complete views may be more useful than continuous signals that leave the participant to guess quantity and risk."],
      },
      {
        title: "Read every commercial term",
        paragraphs: ["Confirm fee duration, applicable taxes, renewal, pause or cancellation rules, and the official payment beneficiary before paying. Preserve the service description, invoice and important communication.", "Do not use an expected market return to justify the fee because securities-market outcomes cannot be assured."],
        bullets: ["Total payable amount", "Service period", "Renewal terms", "Cancellation and grievance route"],
      },
      {
        title: "Decide whether the service fits your operating reality",
        paragraphs: ["An intraday service has little value for someone who cannot monitor the session. A derivatives service can be unsuitable when the participant does not understand leverage or cannot tolerate rapid losses. Value depends on fit as much as content."],
      },
    ],
  }),
  guide({
    slug: "questions-before-joining-stock-market-advisory",
    cluster: "advisory-and-provider-selection",
    category: "ADVISORY CHECKLIST",
    title: "15 Questions to Ask Before Joining a Stock Market Advisory Service",
    excerpt: "Use these questions to understand identity, scope, research method, risk, communication, fees, support and official channels before subscribing.",
    readTime: "9 min read",
    intro: "A short conversation before subscription can prevent a long list of misunderstandings later. The best questions reveal who provides the service, how a market view is created, what the client must do and how losses, changes and complaints are handled.",
    sections: [
      {
        title: "Questions about identity and service scope",
        paragraphs: ["Ask for the provider's exact name, official website and contact channels, the applicable service category, and the markets and horizons covered. Verify relevant registration information through the official source where it applies.", "Also ask who the intended audience is and whether any suitability or onboarding process is required."],
        bullets: ["Who is the service provider?", "Is this research or advisory?", "Which instruments are covered?", "Who is the intended user?"],
      },
      {
        title: "Questions about the research format",
        paragraphs: ["Ask what a typical view contains: rationale, market context, entry condition, invalidation, risk, objective and updates. Request a representative educational sample that shows the format without relying on selective profit claims."],
        bullets: ["Which evidence is reviewed?", "How is uncertainty stated?", "When is a view updated?", "How is the outcome reviewed?"],
      },
      {
        title: "Questions about money and risk",
        paragraphs: ["Understand the full fee, taxes, duration, cancellation terms and official payment account. Ask how position sizing and maximum loss are communicated and whether the service ever uses guaranteed-return language.", "The provider should not need broker passwords, trading PINs, OTPs or remote access to deliver research."],
      },
      {
        title: "Questions about support and records",
        paragraphs: ["Confirm response hours, official messaging channels, escalation path and grievance route. Keep the answers with the invoice and service terms so the arrangement can be evaluated against what was actually promised."],
      },
    ],
  }),
  guide({
    slug: "how-to-evaluate-advisory-track-record",
    cluster: "advisory-and-provider-selection",
    category: "DUE DILIGENCE",
    title: "How to Evaluate an Advisory Track Record Without Being Misled",
    excerpt: "Look beyond winning screenshots by checking completeness, timestamps, losses, risk, sample size, consistency and the rules behind any reported record.",
    readTime: "8 min read",
    intro: "Track-record claims can appear precise while leaving out the information needed to interpret them. A responsible evaluation asks whether every view is included, whether entries were actionable at the time and how risk, costs, losses and open positions are treated.",
    sections: [
      {
        title: "Demand a complete and defined sample",
        paragraphs: ["The evaluation period, covered strategy, instrument, entry rule, exit rule and position size must be stated. A collection of selected successful outcomes is marketing material, not a complete record.", "Check whether cancelled, untriggered, losing and partially closed views appear under the same rules."],
        bullets: ["Fixed evaluation period", "All qualifying views", "Consistent entry and exit rules", "Open and closed positions separated"],
      },
      {
        title: "Separate price movement from executable outcome",
        paragraphs: ["A chart may later touch a target even when the published entry was unavailable, the stop had already triggered or the instrument lacked liquidity. Timestamps and contemporaneous updates matter.", "Brokerage, taxes, spread and slippage can also make an executable result different from a headline point calculation."],
      },
      {
        title: "Measure risk alongside reward",
        paragraphs: ["Win rate alone says little without average gain, average loss, maximum adverse movement, drawdown and position-sizing rules. A high win rate can still hide occasional losses that dominate the record."],
        bullets: ["Average risk per view", "Average gain and loss", "Largest loss or drawdown", "Exposure and correlation"],
      },
      {
        title: "Use process evidence for the final decision",
        paragraphs: ["Historical outcomes cannot guarantee future performance. Give more weight to a transparent, repeatable and risk-aware process than to a polished number without verifiable context."],
      },
    ],
  }),
  guide({
    slug: "telegram-stock-market-advisory-safety",
    cluster: "advisory-and-provider-selection",
    category: "INVESTOR SAFETY",
    title: "Telegram Stock Market Advisory: An Official-Channel Safety Guide",
    excerpt: "Verify channel identity, links, payment details, message history and support routes before relying on any Telegram market channel.",
    readTime: "8 min read",
    intro: "Telegram can deliver research quickly, but copied names, fake administrators and forwarded screenshots make identity verification essential. A channel should be treated as a delivery route—not as proof that the sender is genuine or that a claim is reliable.",
    sections: [
      {
        title: "Reach Telegram from the official website",
        paragraphs: ["Use the channel link published on the provider's official website instead of searching by a similar display name. Usernames can differ by one character, and profile images can be copied.", "Save the official URL and confirm material changes through the published phone or email."],
        bullets: ["Exact username", "Website-linked channel", "Published support contact", "Consistent business identity"],
      },
      {
        title: "Treat direct messages with caution",
        paragraphs: ["A person claiming to be an administrator may contact members privately. Verify the account through the official channel and never accept a new payment destination or urgent instruction solely through a direct message."],
      },
      {
        title: "Protect brokerage and personal information",
        paragraphs: ["Do not share passwords, trading PINs, OTPs, API secrets or remote-device access. A research or advisory channel does not need these credentials to publish a market view.", "Avoid sending unnecessary identity or financial documents through informal chat."],
        bullets: ["No broker password", "No OTP or PIN", "No remote access", "No unverified payment account"],
      },
      {
        title: "Evaluate every message as market communication",
        paragraphs: ["An entry and optimistic target are incomplete without rationale, invalidation and risk. Fast delivery does not remove the need to understand the product, position size and possibility of loss."],
      },
    ],
  }),
  guide({
    slug: "support-resistance-demand-supply-zones",
    cluster: "market-structure-and-price-action",
    category: "PRICE ACTION",
    title: "Support, Resistance, Demand and Supply Zones Explained",
    excerpt: "Understand what price zones represent, how repeated tests change context and why confirmation and invalidation matter more than a perfect line.",
    readTime: "8 min read",
    intro: "Support, resistance, demand and supply describe areas where market behaviour may change. They are not guaranteed turning points. Their usefulness comes from context, the way price approaches the area and the evidence produced when the area is tested.",
    sections: [
      {
        title: "Think in areas rather than exact prices",
        paragraphs: ["Orders and decisions are distributed across prices, so a narrow zone often represents behaviour better than one perfect line. The zone should still be precise enough to define what observation would support or reject the thesis.", "Wider zones increase stop distance and can reduce the quantity that fits a risk limit."],
      },
      {
        title: "Study how the zone was formed",
        paragraphs: ["A fast departure, visible rejection, prior consolidation or high participation can help explain why an area matters. Old zones should be re-evaluated after major new information or repeated trading through the same prices."],
        bullets: ["Origin of the move", "Time spent at the area", "Quality of departure", "Subsequent market structure"],
      },
      {
        title: "Repeated tests can change the balance",
        paragraphs: ["A zone can attract another response, but repeated tests may also consume available orders. Count is not a rule by itself; observe whether reactions are becoming stronger, weaker or simply producing balance."],
      },
      {
        title: "Define confirmation and failure in advance",
        paragraphs: ["Decide whether the plan needs rejection, acceptance, a structure break or volume evidence. Also state the condition that invalidates the idea so the zone does not become a reason to hold indefinitely."],
      },
    ],
  }),
  guide({
    slug: "opening-range-breakout-failure",
    cluster: "market-structure-and-price-action",
    category: "OPENING RANGE",
    title: "Opening-Range Breakout and Failure: A Research Framework",
    excerpt: "Use gap context, range width, participation, acceptance and failure to evaluate an opening-range move without chasing the first breakout.",
    readTime: "7 min read",
    intro: "The opening range compresses early information about overnight positioning, liquidity and the first response to price. A break can begin a trend, fail into a reversal or produce a false move inside a balanced session, so the surrounding evidence matters.",
    sections: [
      {
        title: "Define the range consistently",
        paragraphs: ["Choose a fixed interval, such as the first 15 minutes, and apply the same definition during review. Changing the range after seeing the outcome makes the process difficult to test.", "Record the range width relative to recent session volatility because an unusually wide range changes stop and reward potential."],
      },
      {
        title: "Add the gap and higher-timeframe context",
        paragraphs: ["A breakout that moves with a larger trend and accepted gap has different context from a breakout directly into a major prior-session level. Map those references before the open."],
        bullets: ["Gap acceptance or rejection", "Previous high, low and close", "Higher-timeframe trend", "Scheduled event risk"],
      },
      {
        title: "Look for acceptance, not only a price touch",
        paragraphs: ["Continuation beyond the range, orderly pullbacks, participation and supportive breadth can strengthen the scenario. Immediate return into the range may indicate failed acceptance rather than a valid continuation."],
      },
      {
        title: "Plan failure as a separate scenario",
        paragraphs: ["A failed breakout can become a reversal idea only when its own confirmation and risk are defined. Do not automatically reverse every stopped position; some failures simply return to balance."],
      },
    ],
  }),
  guide({
    slug: "multi-timeframe-market-structure",
    cluster: "market-structure-and-price-action",
    category: "MARKET STRUCTURE",
    title: "Multi-Timeframe Market Structure Without Analysis Paralysis",
    excerpt: "Give each timeframe one job—regime, setup and activation—to prevent conflicting charts from delaying every decision.",
    readTime: "7 min read",
    intro: "Multiple timeframes can improve context or create endless contradiction. A practical method assigns a specific decision to each chart and uses the intended holding period to decide which evidence deserves the most weight.",
    sections: [
      {
        title: "Start from the intended holding period",
        paragraphs: ["The primary chart should match the period over which the thesis is expected to develop. A one-hour swing structure should not be abandoned because of every one-minute fluctuation, while an intraday plan should not ignore session timing."],
      },
      {
        title: "Give three timeframes separate roles",
        paragraphs: ["Use the higher timeframe to classify regime and major zones, the middle timeframe to describe the setup, and the lower timeframe to refine activation and invalidation. More charts are useful only when they answer a new question."],
        bullets: ["Regime timeframe", "Setup timeframe", "Activation timeframe", "Review timeframe"],
      },
      {
        title: "Define which conflict matters",
        paragraphs: ["A lower-timeframe rally inside a higher-timeframe downtrend may be a pullback rather than a full reversal. State the level or structure change required before the higher-timeframe thesis is reconsidered."],
      },
      {
        title: "Review decisions on the same clock",
        paragraphs: ["Measure the result against the timeframe and conditions used to create the plan. Switching to a longer chart only after a stop is threatened changes the risk rather than improving the analysis."],
      },
    ],
  }),
  guide({
    slug: "volume-price-action-confirmation",
    cluster: "market-structure-and-price-action",
    category: "PRICE & VOLUME",
    title: "How Volume Can Confirm—or Contradict—Price Action",
    excerpt: "Read volume relative to time, liquidity, location and price response instead of treating one high-volume bar as a universal signal.",
    readTime: "7 min read",
    intro: "Volume shows activity, not the full intention of every participant. It becomes useful when compared with normal activity for the instrument and interpreted at a meaningful price location such as a breakout, range edge or rejection zone.",
    sections: [
      {
        title: "Compare like with like",
        paragraphs: ["Opening volume is naturally different from midday volume, and highly liquid index constituents behave differently from thin stocks. Compare activity with a relevant historical window and the same part of the session."],
      },
      {
        title: "Read price response with participation",
        paragraphs: ["High volume with sustained progress can support acceptance, while high volume with little price progress can indicate two-sided absorption or uncertainty. The next structure often provides more information than the volume spike alone."],
        bullets: ["Price location", "Relative volume", "Range expansion", "Follow-through or rejection"],
      },
      {
        title: "Treat low-volume moves carefully",
        paragraphs: ["A low-volume breakout may lack participation, but volume norms differ by instrument and session. Thin liquidity can also create large price movement without broad commitment."],
      },
      {
        title: "Keep confirmation tied to invalidation",
        paragraphs: ["Volume can support a thesis but cannot remove the stop or quantity decision. If price breaks the condition that defined the view, a prior volume observation should not become a reason to ignore invalidation."],
      },
    ],
  }),
  guide({
    slug: "nifty-pre-market-analysis-checklist",
    cluster: "nifty-bank-nifty-research",
    category: "NIFTY RESEARCH",
    title: "NIFTY Pre-Market Analysis: A Repeatable Checklist",
    excerpt: "Prepare previous-session levels, gap scenarios, events, breadth references and no-trade conditions before the NIFTY opening.",
    readTime: "8 min read",
    intro: "Pre-market analysis should reduce decisions rather than produce a confident prediction before new price discovery begins. A short, repeatable checklist prepares the levels and conditions that will be tested after the opening bell.",
    sections: [
      {
        title: "Summarise the previous session",
        paragraphs: ["Record the high, low, close, value area or balance, and whether the session trended or rotated. Note where NIFTY closed relative to important multi-session structure."],
        bullets: ["Previous high, low and close", "Session type", "Major swing points", "Unfinished breakout or rejection"],
      },
      {
        title: "Map the gap without assuming its outcome",
        paragraphs: ["Overnight index futures, global markets and events can suggest a gap, but the cash-market open decides whether that gap is accepted or rejected. Prepare both possibilities and the area where no action is preferred."],
      },
      {
        title: "List scheduled information and sector context",
        paragraphs: ["Policy decisions, economic releases, large-company results and global events can change volatility. Sector leadership and index breadth help show whether the move is broad or concentrated."],
        bullets: ["Event time", "Heavyweight results", "Sector leadership", "Volatility context"],
      },
      {
        title: "Wait for opening evidence",
        paragraphs: ["Use the opening range and first-hour structure to confirm or reject the prepared scenarios. A plan is complete when it explains what not to do as clearly as what would activate a view."],
      },
    ],
  }),
  guide({
    slug: "bank-nifty-constituent-analysis",
    cluster: "nifty-bank-nifty-research",
    category: "BANK NIFTY",
    title: "BANK NIFTY Constituent Analysis for Better Index Context",
    excerpt: "Use heavyweight bank behaviour, sector breadth, relative strength and event exposure to understand what is driving BANK NIFTY.",
    readTime: "7 min read",
    intro: "BANK NIFTY is not an isolated price series. Its movement reflects the weighted behaviour of major banking companies, so constituent analysis can reveal whether an index move has broad participation or depends on a small number of heavyweights.",
    sections: [
      {
        title: "Know concentration without memorising stale weights",
        paragraphs: ["Index composition and weights can change. Verify current information through the exchange or index provider when exact figures matter, and use the largest current constituents as context rather than permanent assumptions."],
      },
      {
        title: "Separate heavyweight movement from breadth",
        paragraphs: ["The index can rise while many banking stocks remain weak if one or two large constituents advance strongly. Compare advancing and declining constituents, relative strength and the location of each major stock within its own structure."],
        bullets: ["Heavyweight direction", "Sector breadth", "Relative strength", "Individual event risk"],
      },
      {
        title: "Watch sector-specific events",
        paragraphs: ["Policy rates, liquidity conditions, regulation, credit trends and large-bank results can affect the group. The event calendar should be considered before using normal intraday assumptions."],
      },
      {
        title: "Use constituents as confirmation, not certainty",
        paragraphs: ["Aligned banks can strengthen an index scenario, but correlation can change and option premiums add their own risk. Keep the BANK NIFTY invalidation and position size visible."],
      },
    ],
  }),
  guide({
    slug: "gap-up-gap-down-index-plan",
    cluster: "nifty-bank-nifty-research",
    category: "INDEX RESEARCH",
    title: "Gap-Up and Gap-Down Sessions: An Index Research Plan",
    excerpt: "Classify the gap, map nearby references and wait for acceptance or rejection before deciding whether continuation, reversal or balance is active.",
    readTime: "7 min read",
    intro: "A gap changes the relationship between today's opening and yesterday's trading range. It can signal new information, trapped positioning or temporary overnight imbalance, but the opening response decides which interpretation remains useful.",
    sections: [
      {
        title: "Classify where the market opens",
        paragraphs: ["Note whether price opens inside the prior range, outside it, or beyond a multi-session reference. The distance to the previous high, low and close helps define which levels may influence early behaviour."],
        bullets: ["Inside-range gap", "Outside-range gap", "Breakaway context", "Nearby higher-timeframe zone"],
      },
      {
        title: "Observe acceptance and rejection",
        paragraphs: ["Sustained trade away from the prior range can support acceptance, while a quick move back through the opening and into old value can show rejection. Define the observation period before the session instead of changing it after the move."],
      },
      {
        title: "Adjust for wider early volatility",
        paragraphs: ["Large gaps can create wider stops, faster option repricing and poor entries after the first move. Reducing quantity or waiting for structure may preserve the risk limit better than chasing."],
      },
      {
        title: "Keep a balance scenario",
        paragraphs: ["Not every gap continues or fully fills. Price can rotate between new and old references, making no trade or smaller risk the appropriate response until structure improves."],
      },
    ],
  }),
  guide({
    slug: "index-breadth-market-leadership",
    cluster: "nifty-bank-nifty-research",
    category: "MARKET BREADTH",
    title: "Index Breadth and Market Leadership: What the Headline Index Can Hide",
    excerpt: "Compare advancing stocks, sectors and heavyweight contributions to decide whether an index move is broad, narrow or internally mixed.",
    readTime: "7 min read",
    intro: "A market-cap-weighted index can move because a small number of large constituents dominate the calculation. Breadth and sector leadership provide a second view of participation and can expose strength or weakness hidden by the headline level.",
    sections: [
      {
        title: "Measure participation at more than one level",
        paragraphs: ["Review advancing and declining constituents, the number of sectors participating and the behaviour of broader indices. One measure can be noisy, so agreement across several views is more informative."],
        bullets: ["Advance-decline balance", "Sector participation", "Equal-weight or broad-market context", "New highs and lows"],
      },
      {
        title: "Identify the actual leaders",
        paragraphs: ["A strong index with weak breadth may depend on a few heavyweights. That does not automatically predict reversal, but it changes the confidence and risk attached to broad-market conclusions."],
      },
      {
        title: "Watch divergence as a condition, not a signal",
        paragraphs: ["Breadth can weaken before price changes direction, but divergence can persist. Require price confirmation instead of entering solely because internal measures disagree with the index."],
      },
      {
        title: "Match breadth to the instrument traded",
        paragraphs: ["Sector breadth may matter more for a sector index, while heavyweight contribution can matter more for a concentrated index. Use the evidence that can reasonably affect the selected market."],
      },
    ],
  }),
  guide({
    slug: "option-greeks-practical-risk-guide",
    cluster: "options-and-volatility",
    category: "OPTIONS EDUCATION",
    title: "Option Greeks: A Practical Risk Guide for Market Decisions",
    excerpt: "Use delta, gamma, theta and vega to describe option sensitivity without treating model estimates as fixed promises.",
    readTime: "9 min read",
    intro: "Option Greeks describe how a model estimates premium sensitivity to changes in the underlying, time and volatility. They help organise risk, but they change with market conditions and do not predict the future premium with certainty.",
    sections: [
      {
        title: "Delta connects premium and underlying movement",
        paragraphs: ["Delta estimates how much an option premium may change for a small move in the underlying, with other inputs held constant. It also changes as price, time and volatility change, especially near expiry."],
      },
      {
        title: "Gamma explains changing delta",
        paragraphs: ["Gamma estimates the change in delta for a move in the underlying. High gamma can make near-expiry at-the-money options respond quickly, which increases both opportunity and position-management difficulty."],
        bullets: ["Underlying level", "Moneyness", "Time remaining", "Position quantity"],
      },
      {
        title: "Theta and vega add a second decision clock",
        paragraphs: ["Theta describes modelled time decay, while vega describes sensitivity to implied volatility. A directional view can be broadly right yet produce a poor option outcome if time decay or volatility contraction dominates."],
      },
      {
        title: "Translate sensitivities into scenario risk",
        paragraphs: ["Greeks are estimates, not stop levels. Combine them with liquidity, spread, underlying invalidation and maximum rupee loss before deciding strike, expiry and quantity."],
      },
    ],
  }),
  guide({
    slug: "theta-decay-options-holding-period",
    cluster: "options-and-volatility",
    category: "OPTIONS RISK",
    title: "Theta Decay and the Options Holding Period",
    excerpt: "Understand why time decay is not linear and how expiry, moneyness, volatility and market movement affect an option-holding decision.",
    readTime: "7 min read",
    intro: "An option has a limited life, so time remaining is part of the instrument. Theta is commonly used to describe modelled time decay, but actual premium change also reflects the underlying, implied volatility, liquidity and the passage of non-trading time.",
    sections: [
      {
        title: "Time decay does not act alone",
        paragraphs: ["The underlying can move enough to offset time decay, and implied volatility can expand or contract at the same time. Looking at theta without those inputs creates false precision."],
      },
      {
        title: "Expiry changes sensitivity",
        paragraphs: ["As expiry approaches, remaining time becomes scarce and some options can lose extrinsic value quickly. Near-the-money contracts may also become more sensitive to small underlying moves."],
        bullets: ["Days to expiry", "Moneyness", "Event calendar", "Implied volatility"],
      },
      {
        title: "Match contract life to the thesis",
        paragraphs: ["A multi-session scenario needs enough time for the expected move to develop. Selecting a very short-dated contract because the premium is cheaper can make timing risk dominate the original thesis."],
      },
      {
        title: "Plan the exit before decay accelerates",
        paragraphs: ["Define the underlying invalidation, premium-risk boundary and maximum holding period. Reassess after events or when the thesis takes longer than expected instead of assuming time will remain neutral."],
      },
    ],
  }),
  guide({
    slug: "implied-volatility-crush-event-risk",
    cluster: "options-and-volatility",
    category: "VOLATILITY",
    title: "Implied Volatility Crush: Why Event Options Can Lose After the News",
    excerpt: "Learn how uncertainty can be priced before an event and why premium may contract after information becomes known—even when price moves.",
    readTime: "8 min read",
    intro: "Before a scheduled event, option premiums may reflect greater expected movement. After the information is released, uncertainty can fall and implied volatility can contract. This change can reduce premium even if the underlying moves in the anticipated direction.",
    sections: [
      {
        title: "Separate expected movement from direction",
        paragraphs: ["Implied volatility relates to the magnitude of expected movement embedded in pricing, not a guaranteed up or down forecast. The market can price a large move and receive a smaller one."],
      },
      {
        title: "Understand what changes after the event",
        paragraphs: ["Results, policy decisions and major announcements resolve part of the uncertainty. With less unknown information, option buyers may face lower implied volatility and continued time decay."],
        bullets: ["Pre-event volatility", "Actual underlying move", "Post-event volatility", "Time remaining"],
      },
      {
        title: "Test more than one premium scenario",
        paragraphs: ["Estimate how the option might behave if the underlying moves less than expected, moves in the chosen direction with lower volatility, or gaps against the thesis. Scenario ranges are more useful than one target premium."],
      },
      {
        title: "Keep event risk small enough to survive",
        paragraphs: ["Gaps and rapid repricing can bypass planned exits. Quantity should be based on a loss that remains manageable even when execution is worse than the ideal plan."],
      },
    ],
  }),
  guide({
    slug: "options-liquidity-bid-ask-spread",
    cluster: "options-and-volatility",
    category: "OPTIONS EXECUTION",
    title: "Options Liquidity and Bid-Ask Spread: The Hidden Trading Cost",
    excerpt: "Evaluate volume, open interest, market depth, spread and order size before assuming the displayed option premium is executable.",
    readTime: "7 min read",
    intro: "An option's last traded price may not be available for the quantity a participant wants to buy or sell. The bid-ask spread and available market depth affect entry, exit, stop execution and the real reward-to-risk relationship.",
    sections: [
      {
        title: "Read bid and ask, not only last price",
        paragraphs: ["The last trade can be old or unusually small. The current bid shows where buyers are willing to act and the ask shows where sellers are offering, while depth shows the visible quantity at several prices."],
      },
      {
        title: "Convert spread into rupee impact",
        paragraphs: ["A wide spread multiplied by lot size and quantity can consume a meaningful part of the planned reward. Include likely entry and exit slippage when sizing the position."],
        bullets: ["Absolute spread", "Spread as a percentage of premium", "Visible depth", "Planned quantity"],
      },
      {
        title: "Expect liquidity to change",
        paragraphs: ["Liquidity can improve near active strikes and deteriorate during fast markets, far strikes or certain expiries. An instrument that was liquid at entry may be harder to exit after conditions change."],
      },
      {
        title: "Use order choice carefully",
        paragraphs: ["Limit orders can control price but may not execute; market orders prioritise execution but can create slippage. The decision depends on urgency, depth and the risk of remaining in the position."],
      },
    ],
  }),
  guide({
    slug: "weekly-vs-monthly-options-expiry",
    cluster: "options-and-volatility",
    category: "OPTIONS EXPIRY",
    title: "Weekly vs Monthly Options: Match Expiry to the Research Horizon",
    excerpt: "Compare time remaining, liquidity, event exposure, sensitivity and thesis duration before selecting an options expiry.",
    readTime: "7 min read",
    intro: "Expiry selection determines how much time an options thesis has to develop and how strongly premium may react to time and volatility. Weekly and monthly contracts can express the same directional view with different risks.",
    sections: [
      {
        title: "Begin with the expected holding period",
        paragraphs: ["An intraday plan and a multi-week thesis should not automatically use the same expiry. The contract should leave enough time for the scenario while maintaining acceptable liquidity and cost."],
      },
      {
        title: "Compare time sensitivity",
        paragraphs: ["Shorter-dated options can react rapidly near the strike and lose remaining time value quickly. Longer-dated contracts may carry more premium but give the thesis more time and can have different volatility exposure."],
        bullets: ["Time to expiry", "Moneyness", "Theta and gamma context", "Implied volatility"],
      },
      {
        title: "Check the event calendar",
        paragraphs: ["An expiry that crosses results, policy announcements or other events can include additional volatility risk. Avoid assuming a later expiry is automatically safer."],
      },
      {
        title: "Recalculate risk for the chosen contract",
        paragraphs: ["Different premiums and stop distances change quantity. Select expiry first, then measure entry-to-stop risk and spread for the exact contract rather than copying size from another expiry."],
      },
    ],
  }),
  guide({
    slug: "futures-margin-leverage-risk-india",
    cluster: "futures-and-derivatives",
    category: "FUTURES RISK",
    title: "Futures Margin and Leverage: Measure the Exposure Behind the Deposit",
    excerpt: "Understand why broker margin is not maximum loss and how contract value, stop distance, gaps and changing requirements affect futures risk.",
    readTime: "8 min read",
    intro: "Futures margin is collateral required to hold leveraged exposure. It is not the price of the contract and does not cap the loss. A responsible plan measures the full notional exposure and the rupee effect of price movement before deciding quantity.",
    sections: [
      {
        title: "Calculate notional exposure",
        paragraphs: ["Multiply the futures price by the current lot size and number of contracts. Compare this value with the trading capital to see the effective exposure controlled by the position."],
        bullets: ["Futures price", "Exchange lot size", "Number of contracts", "Total notional value"],
      },
      {
        title: "Separate margin from planned loss",
        paragraphs: ["The broker may block only part of the notional value, but a move in the contract affects the full quantity. The entry-to-stop distance multiplied by quantity provides an initial planned-loss estimate."],
      },
      {
        title: "Allow for gaps and margin changes",
        paragraphs: ["Overnight or event-driven gaps can produce an exit beyond the planned stop. Volatility can also change exchange or broker margin requirements, creating additional funding pressure."],
      },
      {
        title: "Size from capital risk",
        paragraphs: ["Choose the maximum rupee loss first and calculate whether one contract fits. If the smallest contract exceeds the risk limit, the instrument may not fit the account or scenario."],
      },
    ],
  }),
  guide({
    slug: "futures-rollover-open-interest-context",
    cluster: "futures-and-derivatives",
    category: "FUTURES RESEARCH",
    title: "Futures Rollover and Open Interest: Context, Not a Standalone Signal",
    excerpt: "Use price, open interest, basis, expiry liquidity and rollover spread together without assigning a certain motive to every futures position.",
    readTime: "7 min read",
    intro: "Open interest counts outstanding contracts, while rollover describes shifting exposure from an expiring contract to a later one. Both can add context, but neither identifies every participant's direction, hedge or strategy.",
    sections: [
      {
        title: "Read price and open interest together",
        paragraphs: ["Price and open-interest combinations are often labelled as long or short build-up, but those labels simplify a market where every contract has both a buyer and seller. Use them as descriptions of participation, not proof of intent."],
      },
      {
        title: "Compare the expiring and next contract",
        paragraphs: ["Review volume, depth and basis in both expiries. The spread between contracts affects the cost or credit of carrying the exposure forward."],
        bullets: ["Current-expiry liquidity", "Next-expiry liquidity", "Rollover spread", "Spot-futures basis"],
      },
      {
        title: "Account for hedges and spreads",
        paragraphs: ["Institutions and traders may use futures against cash portfolios, options or another expiry. Public open-interest data cannot reveal the complete portfolio behind the contract."],
      },
      {
        title: "Keep the price thesis primary",
        paragraphs: ["Rollover information can support market context, but activation, invalidation and position risk should still come from a defined research plan."],
      },
    ],
  }),
  guide({
    slug: "hedging-cash-portfolio-index-futures",
    cluster: "futures-and-derivatives",
    category: "PORTFOLIO RISK",
    title: "Hedging a Cash Portfolio With Index Futures: Key Research Questions",
    excerpt: "Consider portfolio beta, hedge ratio, basis, expiry, mismatch and rebalancing before treating an index future as a precise portfolio hedge.",
    readTime: "8 min read",
    intro: "Index futures can reduce part of a portfolio's market exposure, but a hedge is rarely perfect. The portfolio may not move like the index, futures basis can change and the required contract quantity may need rebalancing over time.",
    sections: [
      {
        title: "Define the risk being hedged",
        paragraphs: ["Decide whether the aim is to reduce broad-market beta, protect an event window or manage a temporary concern. A general desire to avoid loss is too vague to determine instrument, size and duration."],
      },
      {
        title: "Estimate portfolio-index sensitivity",
        paragraphs: ["A portfolio concentrated in one sector may not track a broad index closely. Historical beta and correlation can inform the estimate, but relationships can change during stress."],
        bullets: ["Portfolio market value", "Index contract value", "Estimated beta", "Desired hedge percentage"],
      },
      {
        title: "Include basis and expiry mechanics",
        paragraphs: ["The futures contract may trade above or below spot, and its basis can change before convergence into expiry. Rolling the hedge introduces a new contract and transaction costs."],
      },
      {
        title: "Monitor mismatch and side effects",
        paragraphs: ["If the portfolio rises while the hedge loses, that can be the intended trade-off rather than failure. Review whether the hedge still matches portfolio value, composition and the original risk window."],
      },
    ],
  }),
  guide({
    slug: "futures-basis-cost-of-carry",
    cluster: "futures-and-derivatives",
    category: "DERIVATIVES BASICS",
    title: "Futures Basis and Cost of Carry in Plain Language",
    excerpt: "Understand the spot-futures difference, why it changes and why premium or discount alone does not predict the next market direction.",
    readTime: "7 min read",
    intro: "Basis is the difference between a futures price and the related spot price. Financing, dividends, time to expiry, supply and demand, and market conditions can influence it. The basis normally converges toward zero as a cash-settled contract approaches expiry, subject to market mechanics.",
    sections: [
      {
        title: "Calculate and label the basis",
        paragraphs: ["Subtract spot from futures using comparable timestamps. A positive result is commonly described as a futures premium and a negative result as a discount, but data timing and liquidity should be checked."],
      },
      {
        title: "Understand carrying inputs",
        paragraphs: ["Financing and expected distributions can affect a theoretical fair relationship. Actual market pricing can differ because participants have different constraints and demand for exposure."],
        bullets: ["Interest or financing", "Expected dividends", "Time remaining", "Market demand and liquidity"],
      },
      {
        title: "Watch convergence and rollover",
        paragraphs: ["As expiry approaches, the current contract's price aligns with settlement mechanics. Moving to a later expiry resets the basis and may create a rollover debit or credit."],
      },
      {
        title: "Do not turn premium into a direction forecast",
        paragraphs: ["A premium can exist in both rising and falling markets. Use basis as one part of derivatives context and keep price structure and risk as separate decisions."],
      },
    ],
  }),
  guide({
    slug: "stock-screening-quality-growth-valuation",
    cluster: "equity-and-swing-research",
    category: "EQUITY RESEARCH",
    title: "Stock Screening: Balance Quality, Growth, Valuation and Liquidity",
    excerpt: "Build a research shortlist with transparent filters while avoiding the false certainty of one ratio or a mechanically optimised screen.",
    readTime: "8 min read",
    intro: "A stock screen narrows a large market into candidates for deeper work. It does not replace company research. Useful filters reflect the decision horizon and combine business quality, financial trend, valuation, liquidity and risk instead of depending on a single attractive number.",
    sections: [
      {
        title: "Define the purpose of the screen",
        paragraphs: ["A liquid intraday universe, a multi-session momentum list and a long-term quality shortlist need different filters. State the intended use before selecting metrics."],
      },
      {
        title: "Combine complementary evidence",
        paragraphs: ["Revenue growth without cash flow, high returns with excessive leverage, or a low valuation during structural decline can mislead. Use a small group of measures that test different parts of the business."],
        bullets: ["Revenue and profit trend", "Cash conversion", "Debt and return ratios", "Valuation context"],
      },
      {
        title: "Add market behaviour and liquidity",
        paragraphs: ["Price trend, relative strength, volume and spread help identify whether a security can be traded at the intended size. A fundamentally interesting company may still have poor execution quality."],
      },
      {
        title: "Investigate every shortlisted company",
        paragraphs: ["Read current filings, results, material announcements and risks. Screening data can be stale, restated or distorted by one-off items, so the shortlist is the beginning of research."],
      },
    ],
  }),
  guide({
    slug: "earnings-results-equity-research-checklist",
    cluster: "equity-and-swing-research",
    category: "RESULTS RESEARCH",
    title: "Quarterly Earnings Results: An Equity Research Checklist",
    excerpt: "Review revenue, margins, cash flow, working capital, guidance, segment performance and market expectations instead of reacting to headline profit.",
    readTime: "9 min read",
    intro: "Quarterly results are a snapshot of business performance and expectations. A headline profit beat or miss can hide changes in revenue quality, margins, working capital, one-off items and forward guidance, so the review should be consistent across periods.",
    sections: [
      {
        title: "Reconcile the headline numbers",
        paragraphs: ["Compare revenue, operating profit, margins and profit after tax with the prior period, the year-ago period and reasonable expectations. Identify exceptional items, tax effects and accounting changes before drawing a conclusion."],
        bullets: ["Revenue growth", "Operating margin", "Profit quality", "Exceptional items"],
      },
      {
        title: "Look below the consolidated total",
        paragraphs: ["Segment growth, geography, product mix and customer concentration can explain whether the result is broad or dependent on one area. Management commentary should be compared with reported evidence."],
      },
      {
        title: "Track cash and the balance sheet",
        paragraphs: ["Receivables, inventory, debt and operating cash flow can reveal pressure that profit alone misses. For seasonal companies, use an appropriate multi-quarter or annual comparison."],
      },
      {
        title: "Separate business result from stock reaction",
        paragraphs: ["Price reflects expectations as well as reported facts. A good result can produce a weak reaction when expectations were higher, and a poor result can rally if the market feared worse. Define the investment or trading horizon before interpreting the move."],
      },
    ],
  }),
  guide({
    slug: "sector-relative-strength-stock-selection",
    cluster: "equity-and-swing-research",
    category: "SECTOR RESEARCH",
    title: "Sector Relative Strength for Indian Stock Selection",
    excerpt: "Compare sector and stock performance with the right benchmark, time horizon, breadth and liquidity before selecting a trade candidate.",
    readTime: "7 min read",
    intro: "Relative strength asks whether a sector or stock is outperforming a relevant benchmark over a chosen period. It can help find leadership, but the conclusion depends on the comparison window and must be supported by structure, breadth and risk.",
    sections: [
      {
        title: "Choose a relevant comparison",
        paragraphs: ["Compare a bank with a financial-sector index and the broad market, or a technology stock with its sector and the benchmark. An unrelated benchmark can make the result hard to interpret."],
      },
      {
        title: "Use more than one time window",
        paragraphs: ["Short-term outperformance may be a rebound inside a longer decline. Review a window that matches the intended holding period and one broader window for regime context."],
        bullets: ["Broad-market comparison", "Sector comparison", "Matching decision horizon", "Higher-timeframe context"],
      },
      {
        title: "Check sector breadth",
        paragraphs: ["A sector index can be driven by a few large constituents. Compare how many members participate and whether the shortlisted stock has adequate liquidity and volume."],
      },
      {
        title: "Wait for a tradeable structure",
        paragraphs: ["Leadership does not define entry, invalidation or quantity. Use relative strength to prioritise research, then apply a separate price and risk plan."],
      },
    ],
  }),
  guide({
    slug: "swing-trading-gap-risk-position-sizing",
    cluster: "equity-and-swing-research",
    category: "SWING RISK",
    title: "Swing Trading Gap Risk: Position Sizing Beyond the Stop",
    excerpt: "Account for earnings, overnight news, liquidity and exits beyond the planned stop when sizing a multi-session equity position.",
    readTime: "7 min read",
    intro: "A swing position remains open while the market is closed, so a stop order cannot guarantee the intended exit price. Results, corporate announcements and global developments can create a gap beyond the planned invalidation.",
    sections: [
      {
        title: "Map known events before entry",
        paragraphs: ["Check result dates, corporate actions, regulatory decisions and major industry events across the expected holding period. A position should not discover a known event only after the market closes."],
      },
      {
        title: "Estimate a worse-than-stop scenario",
        paragraphs: ["The entry-to-stop distance remains useful, but add a gap allowance based on instrument behaviour and event risk. This is an estimate, not a cap, because extreme moves can be larger."],
        bullets: ["Planned stop risk", "Gap allowance", "Liquidity and spread", "Maximum rupee loss"],
      },
      {
        title: "Reduce quantity when uncertainty rises",
        paragraphs: ["A wider risk estimate means fewer shares can fit inside the same capital boundary. Increasing the stop without reducing quantity changes the account risk."],
      },
      {
        title: "Review correlation across swing positions",
        paragraphs: ["Several stocks from the same sector can gap together after one event. Measure the portfolio's combined exposure instead of treating each stop as independent."],
      },
    ],
  }),
  guide({
    slug: "red-herring-prospectus-ipo-guide",
    cluster: "ipo-and-fundamental-research",
    category: "IPO RESEARCH",
    title: "How to Read a Red Herring Prospectus for IPO Research",
    excerpt: "Navigate the offer document through business, risks, financials, issue structure, litigation, use of proceeds and peer valuation.",
    readTime: "10 min read",
    intro: "A red herring prospectus contains the issuer's detailed public disclosure for an offering. It is long because the business, offer structure and risks cannot be reduced responsibly to one headline. A structured reading order makes the document more manageable.",
    sections: [
      {
        title: "Start with the offer and business summary",
        paragraphs: ["Identify the fresh issue and offer-for-sale components, proposed use of proceeds, promoter holding and the core products, customers and markets. This creates a map before deeper reading."],
        bullets: ["Issue size and mix", "Use of proceeds", "Business model", "Promoter and selling shareholders"],
      },
      {
        title: "Read risk factors with the business model",
        paragraphs: ["Risk factors can be extensive, so group them into customer, supplier, regulatory, financial, litigation, industry and execution themes. Focus on risks that could materially alter revenue, margins, cash or ownership."],
      },
      {
        title: "Reconcile financial statements and KPIs",
        paragraphs: ["Review revenue, profit, margins, cash flow, debt and working capital across the disclosed period. Compare alternative performance measures with audited statements and read the notes for one-off items."],
      },
      {
        title: "Test valuation and governance context",
        paragraphs: ["Compare genuine peers, related-party transactions, outstanding litigation, promoter history and dilution. Demand and grey-market discussion should not replace this evidence."],
      },
    ],
  }),
  guide({
    slug: "ipo-fresh-issue-vs-offer-for-sale",
    cluster: "ipo-and-fundamental-research",
    category: "IPO BASICS",
    title: "Fresh Issue vs Offer for Sale in an IPO",
    excerpt: "Understand where IPO proceeds go, how dilution works and what the issue mix can reveal about company funding and shareholder exits.",
    readTime: "7 min read",
    intro: "An IPO can issue new shares, allow existing shareholders to sell, or combine both. The distinction matters because only fresh-issue proceeds enter the company, while offer-for-sale proceeds go to the selling shareholders.",
    sections: [
      {
        title: "Follow the money",
        paragraphs: ["Read the stated use of fresh proceeds, such as debt repayment, capacity, working capital or general corporate purposes. Test whether the amount and timing fit the company's disclosed strategy."],
      },
      {
        title: "Understand dilution",
        paragraphs: ["New shares increase the number of outstanding shares and change ownership percentages. Review the pre- and post-issue capital structure rather than comparing only the face value or offer price."],
        bullets: ["Pre-issue shares", "Fresh shares issued", "Post-issue shares", "Promoter holding after issue"],
      },
      {
        title: "Read the OFS seller details",
        paragraphs: ["Identify which promoters, investors or other shareholders are selling and how much they retain. An exit is not automatically negative, but the context and post-issue alignment deserve review."],
      },
      {
        title: "Evaluate the combined transaction",
        paragraphs: ["The issue mix should be considered with business quality, cash needs, valuation and risks. Neither a large fresh issue nor a large OFS produces a standalone investment conclusion."],
      },
    ],
  }),
  guide({
    slug: "ipo-cash-flow-working-capital-review",
    cluster: "ipo-and-fundamental-research",
    category: "IPO FINANCIALS",
    title: "IPO Cash Flow and Working Capital: What Profit Can Miss",
    excerpt: "Compare reported earnings with operating cash, receivables, inventory, supplier credit and funding needs before evaluating an IPO.",
    readTime: "8 min read",
    intro: "A company can report accounting profit while cash remains tied up in receivables or inventory. For a growing issuer, working-capital requirements can determine whether expansion creates cash, needs continuous funding or increases balance-sheet pressure.",
    sections: [
      {
        title: "Reconcile profit and operating cash flow",
        paragraphs: ["Compare profit after tax with cash generated from operations across several periods. One year can be distorted by timing, so look for persistent gaps and read the reconciliation."],
      },
      {
        title: "Track the operating cycle",
        paragraphs: ["Receivable days, inventory days and payable days help describe how long cash remains inside the operating process. Industry norms and seasonality matter when interpreting them."],
        bullets: ["Receivables", "Inventory", "Payables", "Cash conversion cycle"],
      },
      {
        title: "Connect growth with funding",
        paragraphs: ["Fast sales growth can require more inventory and customer credit. Review whether operating cash, debt or IPO proceeds are expected to fund this need and how sensitive the plan is to slower collections."],
      },
      {
        title: "Read use of proceeds and risk together",
        paragraphs: ["A working-capital allocation can support growth, but it should be assessed with concentration, bargaining power and historical cash conversion. Capital raised does not remove the underlying operating risk."],
      },
    ],
  }),
  guide({
    slug: "ipo-listing-gains-vs-long-term-investing",
    cluster: "ipo-and-fundamental-research",
    category: "IPO DECISIONS",
    title: "IPO Listing Gains vs Long-Term Investing: Two Different Decisions",
    excerpt: "Separate short-term demand and listing liquidity from business quality, valuation and long-term execution before defining an IPO strategy.",
    readTime: "7 min read",
    intro: "A listing-day decision and a long-term investment decision use different evidence and risk horizons. Subscription levels and short-term demand may influence the opening, while the long-term outcome depends more on business performance, valuation and execution.",
    sections: [
      {
        title: "Define the intended decision before applying",
        paragraphs: ["State whether the aim is a listing-day opportunity, a monitored post-listing position or a long-term holding. Without a defined horizon, an unsuccessful listing trade can quietly become an unplanned investment."],
      },
      {
        title: "Treat demand indicators as unstable",
        paragraphs: ["Subscription and informal market discussion can change and may not translate into executable listing gains. Allocation probability, market conditions and opening liquidity also affect the actual outcome."],
      },
      {
        title: "Use business evidence for long-term work",
        paragraphs: ["Revenue quality, margins, cash flow, debt, governance, competitive position and valuation should drive a longer thesis. The offer price is only the starting reference after listing."],
        bullets: ["Business quality", "Financial durability", "Valuation", "Post-listing disclosures"],
      },
      {
        title: "Plan downside for each horizon",
        paragraphs: ["Listing volatility can be extreme, while long-term risk can emerge through business results. Define position size, review conditions and the evidence that would change the decision."],
      },
    ],
  }),
  guide({
    slug: "trading-drawdown-recovery-math",
    cluster: "risk-management-and-position-sizing",
    category: "RISK MANAGEMENT",
    title: "Trading Drawdown Recovery: The Mathematics Every Plan Should Respect",
    excerpt: "See why a percentage loss needs a larger percentage gain to recover and how smaller risk preserves capital and decision capacity.",
    readTime: "7 min read",
    intro: "Drawdown measures the decline from a capital peak. Because recovery begins from a smaller base, the percentage gain required to return to the peak is larger than the percentage loss. This asymmetry is one reason risk control matters before return targets.",
    sections: [
      {
        title: "Calculate the recovery requirement",
        paragraphs: ["If peak capital is reduced by a loss, divide the lost amount by the remaining capital to find the gain required to recover. For example, a 20% drawdown leaves 80% of the peak and requires a 25% gain on that smaller base."],
      },
      {
        title: "Understand compounding losses",
        paragraphs: ["Repeated percentage losses apply to changing capital. Large risk per trade can accelerate drawdown and make the required recovery increasingly demanding."],
        bullets: ["Peak capital", "Current capital", "Drawdown percentage", "Required recovery percentage"],
      },
      {
        title: "Use layered risk limits",
        paragraphs: ["A plan can include risk per setup, daily loss, maximum simultaneous risk and a drawdown level that triggers reduced size or a review. These limits address different ways loss can accumulate."],
      },
      {
        title: "Review the cause before chasing recovery",
        paragraphs: ["Increasing size after a loss can compound both financial and behavioural risk. Review whether the drawdown came from normal strategy variance, execution errors, concentration or a changed market regime before resuming normal risk."],
      },
    ],
  }),
  guide({
    slug: "risk-reward-ratio-required-win-rate",
    cluster: "risk-management-and-position-sizing",
    category: "RISK & REWARD",
    title: "Risk-Reward Ratio and Required Win Rate: Use Both Together",
    excerpt: "Connect average gain, average loss, win rate, costs and execution instead of judging a strategy from one planned target ratio.",
    readTime: "8 min read",
    intro: "A planned reward-to-risk ratio compares potential reward with planned loss, while win rate measures how often a defined process wins. Neither number proves profitability by itself. The relationship must be tested with realised outcomes and costs.",
    sections: [
      {
        title: "Calculate the planned ratio",
        paragraphs: ["For a long setup, price risk is entry minus stop and potential reward is target minus entry. Divide reward by risk, then confirm that spread, slippage and charges do not materially change the relationship."],
      },
      {
        title: "Estimate the break-even win rate",
        paragraphs: ["Ignoring costs, a 1:1 reward-to-risk relationship needs a win rate above 50% to create a positive average outcome, while a 1:2 relationship has a lower mathematical break-even rate. Realised losses and gains rarely match the plan perfectly."],
        bullets: ["Average realised gain", "Average realised loss", "Win rate", "Trading costs"],
      },
      {
        title: "Watch for unrealistic targets",
        paragraphs: ["A distant target may create an attractive ratio on paper but have a low probability of being reached within the chosen horizon. Reward should come from market structure, not from selecting a number to make the ratio look better."],
      },
      {
        title: "Measure expectancy across a useful sample",
        paragraphs: ["Track the average result per decision over a consistent set of rules. A small sample or selective record can make win rate and payoff appear more stable than they are."],
      },
    ],
  }),
  guide({
    slug: "trading-journal-process-review",
    cluster: "risk-management-and-position-sizing",
    category: "DECISION REVIEW",
    title: "A Trading Journal That Reviews Process, Not Just Profit",
    excerpt: "Record thesis, context, risk, execution, emotions and rule adherence so review can separate market uncertainty from preventable errors.",
    readTime: "8 min read",
    intro: "A useful journal is a decision record, not a scrapbook of winning charts. It preserves what was known before execution and compares the action with the plan, allowing a controlled loss to be distinguished from a preventable process failure.",
    sections: [
      {
        title: "Capture the pre-trade thesis",
        paragraphs: ["Record the market condition, evidence, activation, invalidation, intended horizon and why the instrument was selected. Screenshots should show the information available at the time rather than only the final outcome."],
        bullets: ["Market regime", "Setup and confirmation", "Entry and invalidation", "Planned quantity and risk"],
      },
      {
        title: "Record execution separately",
        paragraphs: ["Note actual fill, spread, slippage, changes to quantity and whether the exit followed the plan. This separates research quality from order execution."],
      },
      {
        title: "Score rule adherence",
        paragraphs: ["A binary or simple scale can track whether the decision followed defined rules. Profit should not convert a rule violation into a good process, and a normal stopped trade should not automatically be labelled a mistake."],
      },
      {
        title: "Review patterns at fixed intervals",
        paragraphs: ["Look for repeated errors, market regimes, time-of-day effects and concentration only after enough observations exist. Change one rule at a time so the effect can be understood."],
      },
    ],
  }),
  guide({
    slug: "correlation-risk-multiple-positions",
    cluster: "risk-management-and-position-sizing",
    category: "PORTFOLIO RISK",
    title: "Correlation Risk: When Multiple Positions Become One Large Trade",
    excerpt: "Identify shared index, sector, factor and event exposure before adding individual position risks as though they were independent.",
    readTime: "7 min read",
    intro: "A portfolio can hold several symbols and still depend on one market outcome. Banks, financial indices, lenders and rate-sensitive companies may move together during an event, making the combined loss larger than each separate stop suggests.",
    sections: [
      {
        title: "Map the common drivers",
        paragraphs: ["Group positions by index weight, sector, business exposure, currency, commodity or scheduled event. The same security can belong to more than one risk group."],
        bullets: ["Broad-market beta", "Sector exposure", "Shared event", "Similar strategy or timeframe"],
      },
      {
        title: "Do not treat historical correlation as fixed",
        paragraphs: ["Relationships can strengthen during stress and weaken during normal markets. Historical correlation is context, not a guarantee of diversification."],
      },
      {
        title: "Calculate total open risk",
        paragraphs: ["Add the planned rupee loss of all positions, then examine how much belongs to the same driver. A portfolio limit can require reduced size even when each individual trade fits its own risk rule."],
      },
      {
        title: "Review hedges for mismatch",
        paragraphs: ["An index hedge may reduce broad exposure without protecting company-specific or sector-specific risk. Define what the hedge is expected to offset and what remains unhedged."],
      },
    ],
  }),
];
