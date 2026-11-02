import { NextResponse } from "next/server";

const FIELDS = [
  "firstName", "lastName", "email", "whatsapp", "country",
  "age", "service", "frequency", "commitment", "height", "weight", "consent",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.company) return NextResponse.json({ success: true }); // spam trap

    const data: Record<string, string> = {};
    for (const k of FIELDS) data[k] = String(body[k] ?? "").trim().slice(0, 500);

    if (!data.firstName || !data.lastName || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ success: false, error: "Please check your name and email." }, { status: 400 });
    }

    const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!url) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL is missing");
      return NextResponse.json({ success: false, error: "Server not set up" }, { status: 500 });
    }

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        secret: process.env.GOOGLE_SHEETS_SECRET ?? "",
        submittedAt: new Date().toISOString(),
      }),
      redirect: "follow",
    });

    const out = await res.json().catch(() => null);
    if (!res.ok || out?.result !== "success") {
      console.error("Sheets webhook failed", res.status, out?.error);
      return NextResponse.json({ success: false, error: "Could not save your application." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save application:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}