import { NextResponse } from "next/server";
import { CONSENT_VERSION, WAITLIST_ROLES } from "@/lib/consent";

const LOCALES = ["lv", "en"] as const;
// Same shape as the DB-side check; a cheap first line of defence before the RPC.
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const email =
    typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  const role = data.role_interest;
  const locale = data.locale;
  const marketing = data.marketing_consent === true;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 422 });
  }
  if (typeof role !== "string" || !WAITLIST_ROLES.includes(role as never)) {
    return NextResponse.json({ error: "invalid_role" }, { status: 422 });
  }
  if (typeof locale !== "string" || !LOCALES.includes(locale as never)) {
    return NextResponse.json({ error: "invalid_locale" }, { status: 422 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    console.error("waitlist: SUPABASE_URL / SUPABASE_ANON_KEY not configured");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }

  const res = await fetch(`${url}/rest/v1/rpc/join_waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      p_email: email,
      p_role_interest: role,
      p_locale: locale,
      p_marketing_consent: marketing,
      p_consent_text_version: CONSENT_VERSION,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("waitlist: RPC failed", res.status, detail);
    return NextResponse.json({ error: "save_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
