import { NextResponse } from "next/server";

const COACHING_FIELDS = [
  "firstName", "lastName", "email", "whatsapp", "country",
  "age", "service", "frequency", "commitment", "height", "weight", "consent",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot Spam Trap (silently ignore bots)
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    const isHyroxLead = body.type === "HYROX Lead Magnet";
    const payload: Record<string, any> = {};

    if (isHyroxLead) {
      // Clean and sanitize Lead Magnet submission
      payload.type = "HYROX Lead Magnet";
      payload.firstName = String(body.firstName ?? "").trim().slice(0, 500);
      payload.lastName = String(body.lastName ?? "").trim().slice(0, 500);
      payload.email = String(body.email ?? "").trim().slice(0, 500);

      if (!payload.firstName || !payload.email || !/^\S+@\S+\.\S+$/.test(payload.email)) {
        return NextResponse.json({ success: false, error: "Please enter a valid name and email address." }, { status: 400 });
      }
    } else {
      // Clean and sanitize standard Coaching Application submission
      for (const k of COACHING_FIELDS) {
        payload[k] = String(body[k] ?? "").trim().slice(0, 500);
      }

      if (!payload.firstName || !payload.lastName || !/^\S+@\S+\.\S+$/.test(payload.email)) {
        return NextResponse.json({ success: false, error: "Please check your name and email." }, { status: 400 });
      }
    }

    // 2. Webhook verification
    const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!url) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is missing");
      return NextResponse.json({ success: false, error: "Server not set up" }, { status: 500 });
    }

    // 3. Forward to Apps Script
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        secret: process.env.GOOGLE_SHEETS_SECRET ?? "",
        submittedAt: new Date().toISOString(),
      }),
      redirect: "follow",
    });

    const out = await res.json().catch(() => null);
    if (!res.ok || out?.result !== "success") {
      console.error("Sheets webhook failed", res.status, out?.error);
      return NextResponse.json({ success: false, error: "Could not save your submission." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save submission:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}