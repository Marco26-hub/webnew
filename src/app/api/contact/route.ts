import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Validates server-side and, if a Resend API key is
 * configured, sends the enquiry by email. Set these env vars on Vercel to
 * actually receive messages:
 *   RESEND_API_KEY     — your Resend key (https://resend.com)
 *   CONTACT_TO_EMAIL   — where enquiries should land
 *   CONTACT_FROM_EMAIL — verified sender, e.g. "Aether <hello@yourdomain.com>"
 * Without a key it logs the submission and still returns ok, so the form
 * works in development / before email is wired up.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const reason = String(body.reason ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Aether <onboarding@resend.dev>";

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `New enquiry — ${name}${company ? ` (${company})` : ""}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || "—"}`,
            `Reason: ${reason || "—"}`,
            `Budget: ${budget || "—"}`,
            "",
            message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("[contact] Resend error", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("[contact] Resend exception", err);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } else {
    console.log("[contact] (email not configured) submission:", {
      name,
      email,
      company,
      reason,
      budget,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
