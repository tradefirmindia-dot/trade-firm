import { NextResponse } from "next/server";

const allowedFunds = new Set([
  "Below ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "Above ₹5,00,000",
]);

const allowedSegments = new Set([
  "Option Trading",
  "Futures Trading",
  "Stock Trading",
  "Intraday Trading",
  "Swing Trading",
  "All Segments",
]);

const allowedTimes = new Set([
  "10:00 AM - 12:00 PM",
  "12:00 PM - 03:30 PM",
  "04:00 PM - 07:00 PM",
]);

const crmSegment = {
  "Option Trading": "Options",
  "Futures Trading": "Futures",
  "Stock Trading": "Equity",
  "Intraday Trading": "Intraday",
  "Swing Trading": "Swing",
  "All Segments": "All Segments",
};

function clean(value, maxLength = 120) {
  return String(value || "").trim().slice(0, maxLength);
}

function isRateLimited(request) {
  const forwarded = request.headers.get("x-forwarded-for") || "unknown";
  const ip = forwarded.split(",")[0].trim();
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;

  if (!globalThis.tradeFirmLeadRequests) {
    globalThis.tradeFirmLeadRequests = new Map();
  }

  const recent = (globalThis.tradeFirmLeadRequests.get(ip) || []).filter(
    (timestamp) => now - timestamp < windowMs
  );

  if (recent.length >= 5) {
    globalThis.tradeFirmLeadRequests.set(ip, recent);
    return true;
  }

  recent.push(now);
  globalThis.tradeFirmLeadRequests.set(ip, recent);
  return false;
}

async function syncLeadToCrm({ name, phone, fund, segment, preferredTime, indiaTime }) {
  const supabaseUrl = clean(
    process.env.CRM_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
    300
  ).replace(/\/$/, "");
  const serviceRoleKey = clean(
    process.env.CRM_SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY,
    1000
  );

  if (!supabaseUrl || !serviceRoleKey) {
    return { configured: false, stored: false, duplicate: false };
  }

  const headers = {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
  };

  const leadEndpoint = `${supabaseUrl}/rest/v1/leads`;
  const existingResponse = await fetch(
    `${leadEndpoint}?select=id,notes&phone=eq.${encodeURIComponent(phone)}&limit=1`,
    { headers, cache: "no-store" }
  );

  if (!existingResponse.ok) {
    throw new Error("CRM lookup failed.");
  }

  const existingLeads = await existingResponse.json();
  const detailLine = `Website enquiry · Fund: ${fund} · Preferred callback: ${preferredTime} · ${indiaTime}`;

  if (existingLeads[0]?.id) {
    const existing = existingLeads[0];
    const updateResponse = await fetch(
      `${leadEndpoint}?id=eq.${encodeURIComponent(existing.id)}`,
      {
        method: "PATCH",
        headers: { ...headers, Prefer: "return=minimal" },
        body: JSON.stringify({
          notes: [existing.notes, detailLine].filter(Boolean).join("\n"),
          consent_recorded: true,
          updated_at: new Date().toISOString(),
        }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error("CRM update failed.");
    }

    return { configured: true, stored: true, duplicate: true };
  }

  const insertResponse = await fetch(leadEndpoint, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify({
      name,
      phone,
      capital: 0,
      segment: crmSegment[segment] || segment,
      status: "Not Contacted",
      source: "Website",
      notes: detailLine,
      consent_recorded: true,
    }),
  });

  if (!insertResponse.ok) {
    throw new Error("CRM insert failed.");
  }

  return { configured: true, stored: true, duplicate: false };
}

async function notifyTelegram({ name, phone, fund, segment, preferredTime, indiaTime }) {
  const token = clean(process.env.TELEGRAM_BOT_TOKEN, 300);
  const chatId = clean(process.env.TELEGRAM_CHAT_ID, 120);

  if (!token || !chatId) {
    return { configured: false, sent: false };
  }

  const message = [
    "🔔 NEW TRADE FIRM WEBSITE LEAD",
    "",
    `👤 Name: ${name}`,
    `📞 Phone: +91 ${phone}`,
    `💰 Fund: ${fund}`,
    `📊 Segment: ${segment}`,
    `🕒 Preferred callback: ${preferredTime}`,
    `📅 Submitted: ${indiaTime}`,
    "✅ Contact consent recorded",
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });
  const result = await response.json();

  if (!response.ok || !result.ok) {
    throw new Error("Telegram notification failed.");
  }

  return { configured: true, sent: true };
}

export async function POST(request) {
  try {
    if (isRateLimited(request)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again after a few minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = clean(body.name, 80);
    const phone = clean(body.phone, 10);
    const fund = clean(body.fund, 60);
    const segment = clean(body.segment, 60);
    const preferredTime = clean(body.preferredTime, 60);
    const honeypot = clean(body.company, 100);
    const startedAt = Number(body.startedAt || 0);

    if (honeypot || (startedAt && Date.now() - startedAt < 1500)) {
      return NextResponse.json({ ok: true });
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid Indian mobile number." }, { status: 400 });
    }

    if (!allowedFunds.has(fund) || !allowedSegments.has(segment) || !allowedTimes.has(preferredTime)) {
      return NextResponse.json({ error: "Please select valid enquiry details." }, { status: 400 });
    }

    if (body.consent !== true) {
      return NextResponse.json({ error: "Contact consent is required." }, { status: 400 });
    }

    const indiaTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date());

    let crm = { configured: false, stored: false, duplicate: false };
    let telegram = { configured: false, sent: false };

    try {
      crm = await syncLeadToCrm({ name, phone, fund, segment, preferredTime, indiaTime });
    } catch (error) {
      console.error("CRM lead sync error:", error.message);
    }

    try {
      telegram = await notifyTelegram({ name, phone, fund, segment, preferredTime, indiaTime });
    } catch (error) {
      console.error("Telegram lead notification error:", error.message);
    }

    if (!crm.stored && !telegram.sent) {
      const configured = crm.configured || telegram.configured;
      return NextResponse.json(
        {
          error: configured
            ? "We could not save your request right now. Please try again."
            : "The enquiry service is not configured yet.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      syncedToCrm: crm.stored,
      telegramNotified: telegram.sent,
      existingLeadUpdated: crm.duplicate,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Could not submit your request. Please try again." },
      { status: 500 }
    );
  }
}
