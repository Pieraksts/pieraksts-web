"use client";

import { useId, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { WAITLIST_ROLES, type WaitlistRole } from "@/lib/consent";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm({
  defaultRole = "client",
}: {
  defaultRole?: WaitlistRole;
}) {
  const t = useTranslations("waitlist");
  const locale = useLocale();
  const fieldId = useId();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState<WaitlistRole>(defaultRole);
  const [marketing, setMarketing] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!EMAIL_RE.test(email.trim())) {
      setError(t("errorEmail"));
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          role_interest: role,
          locale,
          marketing_consent: marketing,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setError(data.error === "invalid_email" ? t("errorEmail") : t("errorGeneric"));
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError(t("errorGeneric"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle2 className="size-10 text-brand" />
        <p className="font-display text-lg font-bold text-foreground">
          {t("successTitle")}
        </p>
        <p className="text-sm text-ink-muted">{t("successBody")}</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${fieldId}-email`}
          className="text-sm font-medium text-foreground"
        >
          {t("emailLabel")}
        </label>
        <input
          id={`${fieldId}-email`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("emailPlaceholder")}
          aria-invalid={!!error}
          className="h-11 rounded-xl border border-border bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-ink-soft focus-visible:border-foreground focus-visible:ring-3 focus-visible:ring-ring/30"
        />
      </div>

      <fieldset className="flex flex-col gap-1.5">
        <legend className="mb-1 text-sm font-medium text-foreground">
          {t("roleLabel")}
        </legend>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {WAITLIST_ROLES.map((r) => {
            const labelKey =
              r === "client"
                ? "roleClient"
                : r === "salon_owner"
                  ? "roleOwner"
                  : "roleBoth";
            const active = role === r;
            return (
              <label
                key={r}
                className={cn(
                  "flex cursor-pointer items-center justify-center rounded-xl border px-3 py-2.5 text-center text-xs font-medium transition-colors",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-foreground hover:bg-warm-strong"
                )}
              >
                <input
                  type="radio"
                  name="role_interest"
                  value={r}
                  checked={active}
                  onChange={() => setRole(r)}
                  className="sr-only"
                />
                {t(labelKey)}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-2.5 text-sm text-ink-muted">
        <input
          type="checkbox"
          checked={marketing}
          onChange={(e) => setMarketing(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 rounded border-border accent-brand"
        />
        <span>{t("marketingLabel")}</span>
      </label>

      <p className="text-xs leading-relaxed text-ink-soft">
        {t.rich("consentNote", {
          privacy: (chunks) => (
            <Link
              href="/legal/privacy-policy"
              target="_blank"
              className="underline underline-offset-2 hover:text-foreground"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>

      {error ? (
        <p role="alert" className="text-sm font-medium text-brand-strong">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-strong disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
