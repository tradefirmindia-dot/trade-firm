const NSE_INDICES_URL = "https://www.nseindia.com/api/allIndices";
const BSE_INDICES_URL = "https://api.bseindia.com/BseIndiaAPI/api/IndexMovers/w";
const MONEYCONTROL_SENSEX_URL = "https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BSEN";
const GOOGLE_BANKEX_URL = "https://www.google.com/finance/quote/BSE-BANK:INDEXBOM?hl=en";
const FEED_TIMEOUT_MS = 3500;

const QUOTE_ORDER = [
  { key: "nifty50", name: "NIFTY 50", exchange: "NSE" },
  { key: "banknifty", name: "BANK NIFTY", exchange: "NSE" },
  { key: "midcap", name: "MIDCAP SELECT", exchange: "NSE" },
  { key: "sensex", name: "SENSEX", exchange: "BSE" },
  { key: "bankex", name: "BANKEX", exchange: "BSE" },
  { key: "finnifty", name: "FINNIFTY", exchange: "NSE" },
];

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function toNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(String(value).replaceAll(",", ""));
  return Number.isFinite(parsed) ? parsed : null;
}

async function fetchJson(url, headers, cacheOptions = { next: { revalidate: 60 } }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FEED_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers,
      ...cacheOptions,
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`Market feed returned ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchText(url, headers) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FEED_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 },
      signal: controller.signal,
    });

    if (!response.ok) throw new Error(`Market fallback returned ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseGoogleBankex(html) {
  if (!html) return null;
  const match = html.match(/\["BSE-BANK","INDEXBOM"\],"S\\u0026P BSE BANKEX",1,null,\[(-?[\d.]+),(-?[\d.]+),(-?[\d.]+)/);
  if (!match) return null;

  return {
    price: match[1],
    change: match[2],
    changePercent: match[3],
  };
}

async function fetchBseIndices() {
  const headers = {
    Accept: "application/json,text/plain,*/*",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/127 Safari/537.36",
    Origin: "https://www.bseindia.com",
    Referer: "https://www.bseindia.com/",
  };

  try {
    return await fetchJson(`${BSE_INDICES_URL}?ddlindex=18&flag=1&source=trade-firm`, headers);
  } catch {
    return fetchJson(BSE_INDICES_URL, headers);
  }
}

function normaliseQuote(config, raw, fields) {
  if (!raw) return { ...config, price: null, change: null, changePercent: null, asOf: null };

  return {
    ...config,
    price: toNumber(raw[fields.price]),
    change: toNumber(raw[fields.change]),
    changePercent: toNumber(raw[fields.changePercent]),
    asOf: raw[fields.asOf] || null,
  };
}

export async function GET() {
  const [nseResult, bseResult, sensexFallbackResult, bankexFallbackResult] = await Promise.allSettled([
    fetchJson(NSE_INDICES_URL, {
      Accept: "application/json,text/plain,*/*",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/127 Safari/537.36",
      Referer: "https://www.nseindia.com/market-data/live-equity-market",
    }),
    fetchBseIndices(),
    fetchJson(MONEYCONTROL_SENSEX_URL, {
      Accept: "application/json,text/plain,*/*",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/127 Safari/537.36",
      Referer: "https://www.moneycontrol.com/indian-indices/sensex-4.html",
    }),
    fetchText(GOOGLE_BANKEX_URL, {
      Accept: "text/html,application/xhtml+xml",
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/127 Safari/537.36",
    }),
  ]);

  const quotes = new Map();

  if (nseResult.status === "fulfilled") {
    const rows = Array.isArray(nseResult.value?.data) ? nseResult.value.data : [];
    const nseConfig = [
      ["nifty50", "NIFTY 50"],
      ["banknifty", "NIFTY BANK"],
      ["midcap", "NIFTY MIDCAP SELECT"],
      ["finnifty", "NIFTY FINANCIAL SERVICES"],
    ];

    for (const [key, indexName] of nseConfig) {
      const config = QUOTE_ORDER.find((item) => item.key === key);
      const row = rows.find((item) => item.index === indexName);
      quotes.set(key, normaliseQuote(config, row, {
        price: "last",
        change: "variation",
        changePercent: "percentChange",
        asOf: "previousDay",
      }));
    }
  }

  if (bseResult.status === "fulfilled") {
    const rows = [
      ...(Array.isArray(bseResult.value?.Table) ? bseResult.value.Table : []),
      ...(Array.isArray(bseResult.value?.Table1) ? bseResult.value.Table1 : []),
    ];
    const bseConfig = [
      ["sensex", "BSE SENSEX"],
      ["bankex", "BSE BANKEX"],
    ];

    for (const [key, indexName] of bseConfig) {
      const config = QUOTE_ORDER.find((item) => item.key === key);
      const row = rows.find((item) => String(item.indexName || "").toUpperCase() === indexName);
      quotes.set(key, normaliseQuote(config, row, {
        price: "LTP",
        change: "change",
        changePercent: "PERCENTCHG",
        asOf: "DT_TM",
      }));
    }
  }

  if (!quotes.get("sensex")?.price && sensexFallbackResult.status === "fulfilled") {
    const config = QUOTE_ORDER.find((item) => item.key === "sensex");
    quotes.set("sensex", normaliseQuote(config, sensexFallbackResult.value?.data, {
      price: "pricecurrent",
      change: "pricechange",
      changePercent: "pricepercentchange",
      asOf: "lastupd",
    }));
  }

  if (!quotes.get("bankex")?.price && bankexFallbackResult.status === "fulfilled") {
    const config = QUOTE_ORDER.find((item) => item.key === "bankex");
    quotes.set("bankex", normaliseQuote(config, parseGoogleBankex(bankexFallbackResult.value), {
      price: "price",
      change: "change",
      changePercent: "changePercent",
      asOf: "asOf",
    }));
  }

  const items = QUOTE_ORDER.map((config) => quotes.get(config.key) || {
    ...config,
    price: null,
    change: null,
    changePercent: null,
    asOf: null,
  });

  return Response.json(
    {
      items,
      available: items.filter((item) => item.price !== null).length,
      generatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=600",
      },
    },
  );
}
