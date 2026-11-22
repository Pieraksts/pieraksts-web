/**
 * PAY-008, GFT-002, GFT-007. The way back into the app from a landing page that
 * a payment provider redirects to: billing and payouts open the Business app,
 * Gift Card checkout opens the Client App.
 *
 * The backend builds this URL and passes it through the payment provider as a
 * query parameter, because the app's scheme differs between a standalone build
 * and Expo Go and cannot be known here. That makes it untrusted request input
 * echoed onto a public page reached by redirect — the exact shape of an open
 * redirect — so it is allow-listed by scheme before it is ever rendered.
 *
 * The backend's `isAllowedAppReturnUrl` in
 * `supabase/functions/_shared/provider-return-url.ts` makes the same check.
 * Both ends check, because either one alone would be a single point of failure
 * on a page a payment provider can link to. The backend adds `pieraksts:` in
 * the Client purchase ticket (client#558); until then it sends no Client App
 * link, so the Gift Card pages show the manual block.
 */

export const APP_RETURN_QUERY_PARAM = "app_return";

// One list for every landing page. A whole-protocol match, so `pierakstsx:` and
// web URLs never pass.
const ALLOWED_APP_SCHEMES = ["pieraksts-business:", "pieraksts:", "exp:"];

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
