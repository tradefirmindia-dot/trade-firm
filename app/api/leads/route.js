import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();

    if (!name) return NextResponse.json({ error: "Name is required." }, { status: 400 });
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid Indian mobile number." }, { status: 400 });
    }
    if (!body.consent) return NextResponse.json({ error: "Consent is required." }, { status: 400 });

    const lead = {
      id: crypto.randomUUID(),
      name,
      phone,
      experience: String(body.experience || ""),
      interest: String(body.interest || ""),
      createdAt: new Date().toISOString()
    };

    const file = path.join(process.cwd(), "data", "leads.json");
    let leads = [];
    try {
      leads = JSON.parse(await fs.readFile(file, "utf8"));
      if (!Array.isArray(leads)) leads = [];
    } catch {
      leads = [];
    }

    leads.unshift(lead);
    await fs.writeFile(file, JSON.stringify(leads, null, 2), "utf8");

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      const text = [
        "📥 New Trade Firm Lead",
        `Name: ${lead.name}`,
        `Phone: +91 ${lead.phone}`,
        `Experience: ${lead.experience}`,
        `Interested in: ${lead.interest}`,
        `Time: ${lead.createdAt}`
      ].join("\n");

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text })
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not save lead." }, { status: 500 });
  }
}
