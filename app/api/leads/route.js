import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const experience = String(body.experience || "").trim();
    const interest = String(body.interest || "").trim();

    if (!name) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "Invalid Indian mobile number." },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { error: "Consent is required." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram environment variables are missing.");

      return NextResponse.json(
        { error: "Telegram notification is not configured." },
        { status: 500 }
      );
    }

    const indiaTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date());

    const message = [
      "🔔 NEW TRADE FIRM LEAD",
      "",
      `👤 Name: ${name}`,
      `📞 Phone: +91 ${phone}`,
      `📈 Experience: ${experience || "Not provided"}`,
      `🎯 Interest: ${interest || "Not provided"}`,
      `🕒 Time: ${indiaTime}`
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      }
    );

    const telegramResult = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramResult.ok) {
      console.error("Telegram API error:", telegramResult);

      return NextResponse.json(
        { error: "Could not send Telegram notification." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Lead submitted successfully."
    });
  } catch (error) {
    console.error("Lead submission error:", error);

    return NextResponse.json(
      { error: "Could not submit lead." },
      { status: 500 }
    );
  }
}