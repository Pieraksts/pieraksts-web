/**
 * PAY-008. The way back into the Business app from a billing landing page.
 *
 * The backend builds this URL and passes it through the payment provider as a
 * query parameter, because the app's scheme differs between a standalone build
 * and Expo Go and cannot be known here. That makes it untrusted request input
 * echoed onto a public page reached by redirect — the exact shape of an open
 * redirect — so it is allow-listed by scheme before it is ever rendered.
 *
 * This mirrors `isAllowedAppReturnUrl` in the backend's
 * `supabase/functions/_shared/provider-return-url.ts`. Both ends check, because
 * either one alone would be a single point of failure on a page a payment
 * provider can link to.
 */

export const APP_RETURN_QUERY_PARAM = "app_return";

const ALLOWED_APP_SCHEMES = ["pieraksts-business:", "exp:"];

export function resolveAppReturnUrl(
  candidate: string | string[] | undefined
): string | null {
  // A repeated parameter arrives as an array. Taking the first would let a
  // crafted link smuggle a second value past a reader's eye, so it is refused.
  if (typeof candidate !== "string") return null;

  const value = candidate.trim();
  if (!value) return null;

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return null;
  }

  return ALLOWED_APP_SCHEMES.includes(parsed.protocol) ? value : null;
}
