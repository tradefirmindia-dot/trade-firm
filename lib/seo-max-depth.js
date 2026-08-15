function depth(firstTitle, firstParagraphs, firstBullets, secondTitle, secondParagraphs, secondBullets) {
  return [
    { title: firstTitle, paragraphs: firstParagraphs, bullets: firstBullets },
    { title: secondTitle, paragraphs: secondParagraphs, bullets: secondBullets },
  ];
}

export const seoMaxDepth = {
  "stock-market-advisory-fees-value-checklist": depth(
    "Build a like-for-like comparison sheet",
    [
      "Create one row for each provider and one column for every deliverable, limitation and commercial term. Use only information supplied through the official website, agreement or written support channel. Blank cells expose questions that a headline package name can hide.",
      "Add the time you must personally spend monitoring messages and executing updates. A service that requires continuous attention carries an operating cost even when that cost does not appear on the invoice.",
    ],
    ["Official scope document", "Sample communication format", "Total fee and duration", "Monitoring requirement"],
    "Review value after a fixed observation period",
    [
      "Before starting, decide how the service will be reviewed: clarity, timeliness, risk completeness, support and adherence to the stated process. Do not judge value only from whether the market happened to favour the first few views.",
      "If the delivery repeatedly differs from the written scope, preserve examples and use the official support or grievance route. Renewal should be a fresh decision based on fit and process—not an automatic response to urgency.",
    ],
    ["Was every view understandable?", "Were losses and changes communicated?", "Did the frequency match the scope?", "Was support available as stated?"],
  ),
  "questions-before-joining-stock-market-advisory": depth(
    "Turn verbal answers into a written record",
    [
      "A sales call can clarify the service, but material answers should also appear in the agreement, official email or published page. Written confirmation reduces ambiguity about instruments, delivery frequency, fees, cancellation and who is responsible for execution.",
      "If the representative avoids a direct question, substitutes a profit screenshot or pressures immediate payment, pause the decision. A professional onboarding process should allow enough time to read the terms and risk disclosure.",
    ],
    ["Save the service description", "Keep the invoice", "Record official support details", "Retain applicable disclosures"],
    "Match each answer to your own constraints",
    [
      "A technically complete service can still be a poor match. Compare its market hours, holding periods, expected monitoring and potential loss with your available time, product knowledge and financial capacity.",
      "Write down the conditions that would make you decline the service before the conversation. Predefined boundaries make it easier to resist urgency, extra packages or a product you did not originally intend to use.",
    ],
    ["Available monitoring time", "Permitted capital risk", "Instrument understanding", "Preferred decision horizon"],
  ),
  "how-to-evaluate-advisory-track-record": depth(
    "Reconstruct one sample from original messages",
    [
      "Select a continuous period rather than the provider's best examples. Place each original message and update in timestamp order, then apply the stated entry, stop, objective and quantity rules without hindsight. This reveals whether the published result could have been followed in real time.",
      "Mark views that never triggered, changed after entry or lacked an exit update. These are part of process evaluation even when they do not appear in a promotional total.",
    ],
    ["Original timestamp", "Executable price range", "Every update", "Defined closing rule"],
    "Check whether the measurement answers your question",
    [
      "Points, percentage return on premium, return on blocked margin and return on total capital are different measures. Ask which denominator is used and whether leverage stays consistent across the period.",
      "A useful record also shows dispersion. Two periods can have the same final return while one experiences a much larger drawdown or depends on one exceptional trade. Evaluate the path, not only the endpoint.",
    ],
    ["Capital denominator", "Leverage assumption", "Maximum drawdown", "Contribution of largest outcome"],
  ),
  "telegram-stock-market-advisory-safety": depth(
    "Create a two-channel verification habit",
    [
      "When a Telegram administrator announces a new username, payment account or urgent instruction, verify it through a second official channel such as the website phone or email. Do not use contact details supplied inside the suspicious message as the verification source.",
      "Review the public website whenever a channel is replaced or frozen. A legitimate business should update the link it controls and keep the official identity consistent across important pages.",
    ],
    ["Website-to-channel link", "Second-channel confirmation", "Consistent payment beneficiary", "Saved support contact"],
    "Preserve evidence without forwarding sensitive data",
    [
      "Keep screenshots, usernames, message links and transaction references if you encounter impersonation, but redact account numbers and personal information before sharing evidence for support. Forwarding a scam message to other groups can unintentionally spread its link.",
      "Report impersonation through the platform and notify the genuine provider through its published route. If money or credentials were exposed, contact the relevant financial service immediately rather than waiting for a channel administrator.",
    ],
    ["Screenshot and timestamp", "Exact username", "Official incident report", "Immediate credential protection"],
  ),
  "support-resistance-demand-supply-zones": depth(
    "Score the quality of a zone before price arrives",
    [
      "Record the zone origin, the market condition in which it formed, the strength of the departure and how many later tests occurred. This preparation prevents a level from becoming important only because the live chart is approaching it.",
      "Compare the available space to the next opposing area with the stop distance required by the setup. A visually clear zone can still offer poor reward relative to the planned risk.",
    ],
    ["Formation context", "Departure quality", "Number and quality of tests", "Space to opposing structure"],
    "Review behaviour, not whether the line was perfect",
    [
      "After the session, ask whether price accepted, rejected or balanced around the area and which confirmation would have improved the decision. Moving the zone after every wick makes the method impossible to evaluate.",
      "Record failed zones as useful information. A decisive failure can show that the prior balance changed, but any continuation idea still needs a fresh activation and risk plan.",
    ],
    ["Approach into the zone", "Observed response", "Planned invalidation", "Post-failure structure"],
  ),
  "opening-range-breakout-failure": depth(
    "Build an opening-range worksheet",
    [
      "Before the open, write three possibilities: acceptance above, acceptance below and rotation inside the range. Add the previous-session references and scheduled event time so the opening move is interpreted within a larger map.",
      "Once the selected opening interval ends, record its width, relative volume and breadth. If the range is unusually wide, calculate whether the required stop still fits the permitted loss before considering a breakout.",
    ],
    ["Fixed opening interval", "Range width", "Nearby prior levels", "Breadth and event context"],
    "Audit false breaks without hindsight",
    [
      "A failed breakout should be defined by observable behaviour, such as a return into the range and inability to regain the edge. A single wick beyond the boundary is not automatically failure or confirmation.",
      "Compare the entry you could realistically obtain with the planned stop and next objective. A correct directional interpretation can still be a poor trade if the confirmation arrives after most of the available movement.",
    ],
    ["Acceptance rule", "Failure rule", "Executable entry", "Remaining reward-to-risk"],
  ),
  "multi-timeframe-market-structure": depth(
    "Write a timeframe hierarchy",
    [
      "For each strategy, document the regime, setup and activation timeframes before market hours. State which timeframe owns the invalidation. This prevents a lower chart from taking control only when the position becomes uncomfortable.",
      "Use the same hierarchy for historical review. If a timeframe repeatedly adds no new decision information, remove it rather than treating more charts as more confirmation.",
    ],
    ["Regime chart", "Setup chart", "Activation chart", "Invalidation owner"],
    "Resolve conflicts with explicit conditions",
    [
      "When timeframes disagree, describe the conflict in plain language: for example, a short-term rally inside a larger decline. Then state what structure change would promote the lower-timeframe move into a broader reversal thesis.",
      "If no condition can resolve the conflict within the intended holding period, waiting is a valid decision. Analysis becomes useful when it defines action and non-action, not when it explains every visible movement.",
    ],
    ["Current higher-timeframe regime", "Lower-timeframe counter-move", "Required structural change", "No-trade condition"],
  ),
  "volume-price-action-confirmation": depth(
    "Normalise volume for the instrument and session",
    [
      "Compare current activity with recent observations from the same time of day and similar event conditions. Raw volume is naturally highest in some opening and closing periods, so an unadjusted average can exaggerate or hide participation.",
      "For derivatives, distinguish contract volume from activity in the underlying. A liquid underlying does not guarantee a tight spread in every option strike or futures expiry.",
    ],
    ["Same-time comparison", "Instrument liquidity", "Underlying versus derivative", "Scheduled-event effect"],
    "Classify price response after the volume event",
    [
      "Record whether price expanded, stalled, rejected or returned to the prior range after unusual activity. The response over the next structure often matters more than the colour of the high-volume candle.",
      "Use the observation to update probability, not to remove the risk limit. Unexpected participation can fail, and a stop remains necessary when the thesis condition changes.",
    ],
    ["Range expansion", "Follow-through", "Absorption or rejection", "Updated invalidation"],
  ),
  "nifty-pre-market-analysis-checklist": depth(
    "Convert overnight information into conditional scenarios",
    [
      "List each relevant overnight or scheduled development, then state which NIFTY price behaviour would show that the market is accepting it. News without a price condition can pull analysis toward a story that participants have already discounted.",
      "Limit the final map to levels that change the decision. Too many references create a reason for every move after it happens and make real-time communication slower.",
    ],
    ["Event and time", "Expected volatility effect", "Acceptance condition", "Invalidation condition"],
    "Use a consistent post-market scorecard",
    [
      "After the close, compare prepared scenarios with the actual opening range, breadth and session structure. Score whether the map was useful even if no position was taken; avoiding an unclear session can be a successful use of research.",
      "Separate an analysis error from an execution error. A valid scenario entered without confirmation requires a different improvement from a well-executed view that ended in a controlled loss.",
    ],
    ["Scenario activated", "Confirmation quality", "Execution adherence", "Research update needed"],
  ),
  "bank-nifty-constituent-analysis": depth(
    "Build a compact constituent dashboard",
    [
      "Track the largest current constituent group, its direction, location relative to key levels and sector breadth. Use official index information when exact composition matters because weights and constituents can be rebalanced.",
      "Avoid interpreting every stock equally. Weighting means a strong move in a large constituent can matter more to the index than several small moves in lower-weight members.",
    ],
    ["Current index facts", "Heavyweight structure", "Advance-decline breadth", "Sector-relative strength"],
    "Identify agreement and concentration",
    [
      "Classify a BANK NIFTY move as broad participation, heavyweight-led movement or internal disagreement. Each condition can continue, but it changes the evidence required before increasing confidence.",
      "During results or policy events, mark the affected banks separately. One stock-specific gap can distort the index and its options even when the rest of the sector remains stable.",
    ],
    ["Breadth classification", "Largest contributor", "Event-exposed constituents", "Index invalidation"],
  ),
  "gap-up-gap-down-index-plan": depth(
    "Measure the opening location objectively",
    [
      "Calculate the gap from the previous close and locate the open relative to the prior range and larger structure. A small gap inside balance and a large gap beyond a multi-session extreme should not use the same expectations.",
      "Mark the distance to the nearest prior reference and estimate the stop needed after confirmation. If most potential reward is already consumed at the open, the best continuation decision may be to wait.",
    ],
    ["Gap size", "Prior-range location", "Nearest opposing level", "Required stop distance"],
    "Review gap behaviour by category",
    [
      "Keep separate records for accepted gaps, rejected gaps and balanced sessions. Over time, this shows which context and confirmation rules are useful for the instruments you actually follow.",
      "Do not turn a tendency into certainty. Sample size, changing volatility and scheduled events affect outcomes, so each new session still needs its own invalidation and quantity decision.",
    ],
    ["Gap category", "Opening-range response", "Time to confirmation", "Realised execution quality"],
  ),
  "index-breadth-market-leadership": depth(
    "Create a breadth snapshot with a fixed timestamp",
    [
      "Compare breadth at consistent moments such as after the opening range and near the first hour. Intraday breadth can change quickly, and comparing different timestamps can create a false divergence.",
      "Record broad-market, sector and heavyweight measures side by side. This separates a narrow index contribution from genuine participation across the market.",
    ],
    ["Timestamp", "Advance-decline balance", "Sector participation", "Heavyweight contribution"],
    "Use breadth to adjust, not dictate, the plan",
    [
      "Aligned breadth may support continuation and weak breadth may justify lower confidence or smaller risk. Neither condition supplies an entry by itself; price still needs to activate the scenario.",
      "When breadth and price diverge, define the price condition that would confirm the warning. Divergence without confirmation can persist long enough to make an early reversal expensive.",
    ],
    ["Price scenario", "Breadth agreement", "Confirmation threshold", "Risk adjustment"],
  ),
  "option-greeks-practical-risk-guide": depth(
    "Run a small scenario grid before choosing the contract",
    [
      "Record the current premium and Greeks, then compare several underlying moves, time intervals and volatility changes. The goal is not an exact forecast; it is to identify which input can dominate the position and where the thesis is most fragile.",
      "Repeat the exercise for two nearby strikes or expiries. A contract with a lower premium may carry greater time sensitivity, weaker liquidity or a different response to the underlying.",
    ],
    ["Underlying up and down", "One session of time", "Volatility expansion and contraction", "Alternative strike or expiry"],
    "Review realised sensitivity after the position",
    [
      "Compare the actual premium change with the underlying, time and implied-volatility movement. Differences from a simple delta estimate do not necessarily mean the model failed; several inputs changed together.",
      "Use review to improve contract selection rather than to retrofit a prediction. Greeks are most valuable when they reveal exposure before entry and explain risk after the event.",
    ],
    ["Entry Greeks", "Underlying movement", "Volatility change", "Spread and realised exit"],
  ),
  "theta-decay-options-holding-period": depth(
    "Create a time budget for the thesis",
    [
      "Estimate when the expected catalyst or price move should occur and compare that window with days remaining to expiry. A contract can expire after the event and still provide too little room if the thesis develops slowly.",
      "Define a review date before the final expiry risk becomes dominant. If the underlying remains inactive, reassessing or exiting may preserve more premium than waiting for the original stop alone.",
    ],
    ["Expected catalyst date", "Days to expiry", "Maximum holding period", "Time-based review condition"],
    "Separate overnight, weekend and event effects",
    [
      "Modelled time passes continuously, while observed premiums also respond to the market's changing volatility expectations. Weekend or holiday assumptions should be checked through actual contract behaviour rather than a fixed daily-decay rule.",
      "After the trade, record how much premium change came with underlying movement and how much occurred while price was stable. This builds product awareness without claiming a perfect decomposition.",
    ],
    ["Calendar time", "Trading sessions", "Event premium", "Observed volatility change"],
  ),
  "implied-volatility-crush-event-risk": depth(
    "Compare implied movement with the event scenario",
    [
      "Use available option prices to understand how much movement appears to be priced, while recognising that calculation methods and market inputs differ. Then ask whether the thesis requires a move larger, faster or more directional than that expectation.",
      "Test the option under a smaller-than-expected move and lower post-event volatility. This adverse scenario often reveals risk that a directional target alone misses.",
    ],
    ["Expected-move estimate", "Directional thesis", "Post-event volatility", "Time remaining"],
    "Design the event-risk decision before the announcement",
    [
      "Set maximum loss, quantity and whether the position will be held through the release while the market is still orderly. Waiting until the event begins can make spreads wider and decisions more emotional.",
      "Review both the underlying and premium after the event. A correct price direction with a poor premium outcome is useful evidence about contract selection and volatility exposure.",
    ],
    ["Hold or exit decision", "Maximum rupee risk", "Gap allowance", "Post-event review"],
  ),
  "options-liquidity-bid-ask-spread": depth(
    "Measure execution quality before increasing quantity",
    [
      "Record the spread, visible depth and expected price impact for the exact quantity. Divide the spread by premium to compare contracts with different price levels; the same rupee spread can represent very different percentage costs.",
      "Check both entry and likely exit conditions. A contract may appear liquid near the market but become thin after the underlying moves and the strike becomes far from active trading.",
    ],
    ["Spread in rupees", "Spread as premium percentage", "Depth near the order", "Exit-liquidity scenario"],
    "Include slippage in the risk and review",
    [
      "Add a realistic execution allowance to the entry-to-stop calculation before deciding quantity. If expected slippage consumes a large share of the planned risk, the contract or order size may not fit the strategy.",
      "After exit, compare intended and realised fills. Repeated slippage is a measurable cost that should change contract selection, order type or maximum quantity.",
    ],
    ["Planned fill", "Realised fill", "Total price impact", "Required size adjustment"],
  ),
  "weekly-vs-monthly-options-expiry": depth(
    "Compare contracts through the same scenario",
    [
      "For a weekly and monthly option, record premium, spread, moneyness and days remaining, then apply the same underlying activation and invalidation. This exposes the trade-off between upfront premium, time and sensitivity.",
      "Use the exact exchange contract specifications and current liquidity. Expiry schedules and available products can change, so old assumptions should not control a live decision.",
    ],
    ["Current contract specification", "Premium and spread", "Days remaining", "Scenario-specific stop"],
    "Choose the risk you can explain",
    [
      "A shorter contract may demand faster timing, while a longer contract can carry more vega and capital exposure. Select the contract whose main risks match the research horizon and can be monitored consistently.",
      "Review contract choice separately from directional accuracy. If the underlying thesis worked but the selected expiry did not, the lesson belongs to product selection rather than market direction.",
    ],
    ["Thesis duration", "Dominant option sensitivity", "Liquidity", "Maximum rupee loss"],
  ),
  "futures-margin-leverage-risk-india": depth(
    "Stress-test the futures position",
    [
      "Calculate planned loss at the stop, then test larger adverse moves and a higher margin requirement. A stress test does not predict the worst outcome; it checks whether the account can absorb conditions that are worse than the base plan.",
      "Include all correlated futures and cash positions. Available funds can fall quickly when several exposures respond to the same market event.",
    ],
    ["Base stop loss", "Adverse gap scenario", "Higher margin requirement", "Combined portfolio exposure"],
    "Monitor the contract through its full life",
    [
      "Track expiry, liquidity migration, settlement rules and broker notices. A position suitable in the active near-month contract can become harder to manage as volume moves to the next expiry.",
      "If margin changes or capital falls, recalculate leverage instead of assuming the entry-day relationship still applies. Risk management is continuous while the contract remains open.",
    ],
    ["Days to expiry", "Current liquidity", "Updated account capital", "Revised leverage"],
  ),
  "futures-rollover-open-interest-context": depth(
    "Create a rollover comparison table",
    [
      "For the expiring and next contract, record price, volume, open interest, spread and basis at the same timestamp. This avoids comparing stale values and shows where executable liquidity is moving.",
      "Review the change across several sessions rather than one snapshot. Expiry-related activity can be concentrated, and one day's ratio may not represent the full rollover process.",
    ],
    ["Matched timestamp", "Both contract prices", "Volume and open interest", "Rollover spread"],
    "Test alternative explanations",
    [
      "Before assigning a bullish or bearish label, ask whether hedging, calendar spreads, arbitrage or index rebalancing could produce similar data. Public information rarely identifies the entire position behind open interest.",
      "Use price acceptance and invalidation for the trade decision. Rollover data can increase or reduce confidence, but it should not override a failed market structure.",
    ],
    ["Directional explanation", "Hedge explanation", "Spread explanation", "Price confirmation"],
  ),
  "hedging-cash-portfolio-index-futures": depth(
    "Estimate a transparent hedge ratio",
    [
      "Document portfolio value, estimated beta, futures contract value and the percentage of market exposure intended to be reduced. Round contract quantity carefully because exchange lot sizes can make an exact ratio impossible.",
      "Run the estimate under a change in portfolio value and index price. A hedge that begins near the target ratio can drift as the cash holdings and futures move differently.",
    ],
    ["Portfolio value", "Estimated beta", "Contract notional value", "Desired hedge percentage"],
    "Define success and exit before hedging",
    [
      "A hedge can lose while the portfolio gains and still have served its purpose. Define the risk window, acceptable residual exposure and condition for removing or reducing the hedge before evaluating it.",
      "Track dividends, basis, rollover cost and transaction charges. These can create performance differences even when the broad index relationship behaves as expected.",
    ],
    ["Hedge objective", "Start and end condition", "Residual risk", "Carry and transaction cost"],
  ),
  "futures-basis-cost-of-carry": depth(
    "Use synchronised data",
    [
      "Spot and futures can move quickly, so basis should use prices captured at the same time. Delayed cash data compared with a live futures quote can produce a difference that looks meaningful but is only a timestamp error.",
      "For a stock future, consider expected dividends and corporate actions during the contract period. For an index, verify the relevant product and settlement details through official exchange material.",
    ],
    ["Matched timestamps", "Correct contract", "Days to expiry", "Known distributions or actions"],
    "Track basis as a series, not one number",
    [
      "Observe how basis behaves across normal sessions, events and the approach to expiry. A series provides context for whether the current relationship is unusual for that instrument and period.",
      "Keep directional research separate. Basis can change because spot moves, futures move or both, and a premium or discount does not supply a complete market thesis.",
    ],
    ["Historical comparison window", "Event context", "Convergence path", "Separate price scenario"],
  ),
  "stock-screening-quality-growth-valuation": depth(
    "Make the screen reproducible",
    [
      "Write the data source, date, universe and exact rule for each filter. Reproducibility prevents thresholds from being changed after seeing which familiar companies pass and makes later performance review meaningful.",
      "Handle missing and negative values explicitly. A screen that silently removes companies with unavailable data can introduce a bias that is not visible in the final shortlist.",
    ],
    ["Defined stock universe", "Data date and source", "Exact thresholds", "Missing-data rule"],
    "Perform a red-flag review after screening",
    [
      "For every candidate, read recent filings and examine auditor notes, pledging where relevant, related-party transactions, dilution, contingent liabilities and unusual working-capital changes. A numerical screen cannot interpret every governance or accounting risk.",
      "Document why the company remains on the list and what evidence would remove it. The shortlist should evolve when new information appears, not only at a fixed rebalance date.",
    ],
    ["Latest exchange filings", "Cash-flow quality", "Governance and dilution", "Removal condition"],
  ),
  "earnings-results-equity-research-checklist": depth(
    "Build a results bridge",
    [
      "Start from the prior comparable period and explain how volume, price, product mix, costs, currency and one-off items changed revenue and operating profit. A bridge turns a percentage change into the business drivers behind it.",
      "Compare management guidance with the previous guidance and actual delivery. Repeated changes in definitions or key metrics deserve as much attention as the latest forecast.",
    ],
    ["Volume and pricing", "Product or segment mix", "Cost drivers", "Guidance versus delivery"],
    "Update valuation and thesis conditions",
    [
      "Refresh forward assumptions only after identifying which result changes are temporary and which may persist. A one-quarter margin move should not automatically become a permanent valuation input.",
      "Record the evidence that improved, weakened or left the thesis unchanged. Then separate that business conclusion from the market's short-term reaction and the entry decision.",
    ],
    ["Revised assumptions", "Temporary versus structural", "Valuation sensitivity", "Updated thesis invalidation"],
  ),
  "sector-relative-strength-stock-selection": depth(
    "Rank leadership with a stable method",
    [
      "Use the same lookback, benchmark and rebasing method across sectors. Record both absolute trend and relative performance because an outperforming sector can still be declining in absolute terms.",
      "Check how much of the result comes from a few constituents. Equal-weight observations or member breadth can prevent a concentrated index move from being mistaken for broad sector leadership.",
    ],
    ["Consistent lookback", "Relevant benchmark", "Absolute trend", "Member breadth"],
    "Move from sector to executable stock",
    [
      "Within a leading sector, compare stock structure, liquidity, event calendar and distance from invalidation. The strongest recent performer may offer less usable reward if it is extended far from support.",
      "Document why the selected stock is preferable to its peers and which sector condition would weaken the choice. Relative strength should create a research priority, not an automatic order.",
    ],
    ["Stock-versus-sector strength", "Liquidity", "Entry location", "Sector invalidation"],
  ),
  "swing-trading-gap-risk-position-sizing": depth(
    "Build an overnight-risk calendar",
    [
      "For every open position, list company results, corporate actions, regulatory dates and major sector events across the expected holding window. Add global events when they can affect the stock or market before the next domestic open.",
      "Review the calendar again each evening because companies can announce material information after market hours. The absence of a scheduled event does not remove unexpected-news risk.",
    ],
    ["Company event", "Sector event", "Market event", "Next review time"],
    "Set portfolio-level gap capacity",
    [
      "Estimate a gap loss for each position and group correlated holdings. Compare the combined scenario with the maximum portfolio loss you can tolerate without changing the rest of the plan.",
      "If the combined risk is too large, reduce quantity, remove overlapping positions or avoid holding through a known event. A stop order cannot solve exposure that is oversized before the market closes.",
    ],
    ["Per-position gap estimate", "Correlated exposure", "Portfolio loss boundary", "Required reduction"],
  ),
  "red-herring-prospectus-ipo-guide": depth(
    "Create an evidence index while reading",
    [
      "Record the page or section for every important claim about market share, customers, capacity, financial performance and risk. An evidence index makes it easier to return to the disclosure and prevents the final view from depending on promotional summaries.",
      "Separate issuer statements, audited information and third-party industry reports. Each source has a different purpose and limitation inside the offer document.",
    ],
    ["Claim and source", "Document section", "Reporting period", "Material limitation"],
    "Write a balanced pre-valuation summary",
    [
      "Before looking at the offer multiple, summarise business quality, financial durability, governance questions, issue use and the three risks most likely to change the thesis. This reduces the chance that valuation excitement controls the whole review.",
      "After adding valuation, write upside and downside scenarios with explicit assumptions. Neither scenario is a forecast; both show which evidence matters after listing.",
    ],
    ["Business strengths", "Financial concerns", "Governance and issue structure", "Upside and downside assumptions"],
  ),
  "ipo-fresh-issue-vs-offer-for-sale": depth(
    "Reconcile the post-issue share count",
    [
      "Use the prospectus capital-structure tables to identify existing shares, new shares and the post-issue total. Then calculate ownership changes and valuation using the correct diluted share base where appropriate.",
      "Do not confuse face value, issue price and market capitalisation. They answer different questions and cannot be compared as though they are the same measure.",
    ],
    ["Existing shares", "Fresh shares", "Post-issue total", "Post-issue ownership"],
    "Test whether proceeds address the stated need",
    [
      "Compare the fresh capital allocation with debt, capital expenditure or working-capital requirements disclosed elsewhere in the document. A broad general-corporate-purpose amount may need closer attention because its final use is less specific.",
      "For the OFS, review seller history and remaining ownership without assigning motive that is not disclosed. The transaction context matters, but it should be combined with business and valuation evidence.",
    ],
    ["Purpose and amount", "Implementation timeline", "Funding gap after issue", "Seller holding after OFS"],
  ),
  "ipo-cash-flow-working-capital-review": depth(
    "Build a multi-period cash conversion table",
    [
      "Compare revenue, operating profit, profit after tax, cash from operations, receivables, inventory and payables for every disclosed period. Convert balances into days only with a consistent formula and note when seasonality limits the comparison.",
      "Identify whether working-capital pressure is growing faster than sales and whether customer or supplier concentration can explain the movement.",
    ],
    ["Operating cash versus profit", "Receivable days", "Inventory days", "Payable days"],
    "Stress-test the funding requirement",
    [
      "Estimate how slower collections, higher inventory or weaker margins could change the need for capital. Compare that scenario with fresh-issue proceeds, available borrowing and the company's historical ability to generate cash.",
      "A stress test is not a forecast. It shows whether the business and issue structure have room if the assumptions in the base plan are not achieved.",
    ],
    ["Base working-capital need", "Slower collection scenario", "Available funding", "Residual liquidity risk"],
  ),
  "ipo-listing-gains-vs-long-term-investing": depth(
    "Write two separate decision documents",
    [
      "For a listing decision, record allocation, likely liquidity, maximum capital at risk and the rule for exiting if the opening differs from expectations. For a long-term thesis, record business, valuation, review frequency and fundamental invalidation.",
      "Never allow one document to inherit the other automatically. If the listing plan fails, a long-term holding should begin only after a fresh analysis and deliberate position-size decision.",
    ],
    ["Listing thesis", "Listing-risk boundary", "Long-term thesis", "Fundamental review condition"],
    "Evaluate post-listing evidence",
    [
      "After listing, monitor results, disclosures, shareholding, use of proceeds and valuation relative to new public information. The offer document becomes a baseline, while ongoing exchange filings become the current evidence.",
      "Price discovery can remain volatile when the public float is limited or early expectations were extreme. Separate liquidity-driven movement from a change in business value.",
    ],
    ["Quarterly results", "Use-of-proceeds update", "Material announcements", "Valuation after new evidence"],
  ),
  "trading-drawdown-recovery-math": depth(
    "Build a drawdown ladder before it is needed",
    [
      "Define capital levels that trigger normal risk, reduced risk, a temporary pause and a full strategy review. The thresholds should be based on the strategy's tested variability and personal financial boundary, not selected during an emotional losing streak.",
      "State what evidence is required to move back up the ladder. One winning trade should not automatically restore full size after a deeper process problem.",
    ],
    ["Normal-risk zone", "Reduced-risk zone", "Pause threshold", "Restart evidence"],
    "Diagnose drawdown by source",
    [
      "Separate normal losing outcomes from rule violations, excessive correlation, slippage, product changes and market-regime mismatch. Different causes need different responses; reducing size alone does not repair an invalid process.",
      "Track drawdown in rupees, percentage and number of risk units. Multiple views make it easier to compare periods when capital or position size has changed.",
    ],
    ["Strategy variance", "Execution error", "Concentration", "Market-regime change"],
  ),
  "risk-reward-ratio-required-win-rate": depth(
    "Calculate expectancy from realised outcomes",
    [
      "For a consistent sample, multiply win rate by average realised gain and subtract loss rate multiplied by average realised loss. Include charges and classify scratch or partial outcomes consistently.",
      "Compare planned and realised ratios. Early exits, slippage, gaps and missed targets can make the strategy's actual payoff very different from the ratio displayed before entry.",
    ],
    ["Win rate", "Average realised gain", "Average realised loss", "Net cost per decision"],
    "Test sensitivity instead of relying on one average",
    [
      "Recalculate expectancy with a slightly lower win rate, smaller average gain and larger average loss. If a small change removes the edge, the process may be fragile or the sample may be too small.",
      "Use the result to define review questions, not to guarantee future profitability. Market conditions, execution and behaviour can change after the historical sample.",
    ],
    ["Base case", "Lower win-rate case", "Higher-loss case", "Minimum acceptable sample"],
  ),
  "trading-journal-process-review": depth(
    "Use structured tags instead of only free text",
    [
      "Tag market regime, setup type, instrument, time of day, event context and rule adherence. Standard fields make patterns searchable and reduce the chance that every outcome receives a different explanation.",
      "Keep a short narrative for information the tags cannot capture, such as hesitation, platform problems or a material change in the market thesis.",
    ],
    ["Regime tag", "Setup tag", "Execution tag", "Rule-adherence score"],
    "Turn review into one controlled experiment",
    [
      "At each review interval, identify the highest-cost repeatable error and choose one specific change. Define how long the revised rule will be observed before judging it, unless a safety limit requires an earlier stop.",
      "Preserve the original data when changing a rule. Overwriting old classifications can make the new process appear better through hindsight rather than genuine improvement.",
    ],
    ["Priority error", "Single rule change", "Observation period", "Success and stop criteria"],
  ),
  "correlation-risk-multiple-positions": depth(
    "Build an exposure map",
    [
      "List every open position, direction, rupee risk, broad index, sector and known event. Add derivatives according to their underlying exposure rather than treating each contract symbol as a separate asset.",
      "Group positions that can lose from the same scenario, such as a financial-sector decline or volatility contraction. The map should show where diversification is real and where it is only a larger list of symbols.",
    ],
    ["Position and direction", "Maximum planned loss", "Common market driver", "Shared event window"],
    "Set concentration limits before adding the next trade",
    [
      "Define maximum total open risk and smaller limits for one sector, factor or event. A new setup must fit both its individual limit and the remaining portfolio capacity.",
      "Recalculate after price movement, partial exits or a change in stop. Correlation and open risk are dynamic, so the entry-day map cannot be assumed to remain accurate.",
    ],
    ["Portfolio risk limit", "Cluster risk limit", "Remaining risk capacity", "Next review trigger"],
  ),
};
