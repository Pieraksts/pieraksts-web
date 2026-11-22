import assert from "node:assert/strict";
import test from "node:test";

import { resolveAppReturnUrl } from "./app-return.ts";

test("the Client App scheme opens the Client App", () => {
  assert.equal(
    resolveAppReturnUrl("pieraksts://gift-cards?outcome=return"),
    "pieraksts://gift-cards?outcome=return"
  );
});

test("the Business app and Expo Go schemes still open their app", () => {
  assert.equal(
    resolveAppReturnUrl("pieraksts-business://payouts?outcome=refresh"),
    "pieraksts-business://payouts?outcome=refresh"
  );
  assert.equal(
    resolveAppReturnUrl("exp://192.168.1.5:8081/--/payouts"),
    "exp://192.168.1.5:8081/--/payouts"
  );
});

test("a value is trimmed before the check", () => {
  assert.equal(resolveAppReturnUrl("  pieraksts://x  "), "pieraksts://x");
});

test("a scheme that only starts with an allowed scheme is refused", () => {
  assert.equal(resolveAppReturnUrl("pieraksts-businessx://x"), null);
  assert.equal(resolveAppReturnUrl("pierakstsx://x"), null);
  assert.equal(resolveAppReturnUrl("expx://x"), null);
});

test("web and script targets are refused", () => {
  assert.equal(resolveAppReturnUrl("//evil.example/pieraksts://x"), null);
  assert.equal(resolveAppReturnUrl("https://evil.example/?pieraksts://x"), null);
  assert.equal(resolveAppReturnUrl("javascript:alert(1)//pieraksts://"), null);
  assert.equal(resolveAppReturnUrl("intent://x#Intent;scheme=pieraksts;end"), null);
  assert.equal(resolveAppReturnUrl("data:text/html,pieraksts://x"), null);
});

test("a missing, blank, repeated or unparsable value is refused", () => {
  assert.equal(resolveAppReturnUrl(undefined), null);
  assert.equal(resolveAppReturnUrl("   "), null);
  assert.equal(resolveAppReturnUrl(["pieraksts://x", "https://evil.example"]), null);
  assert.equal(resolveAppReturnUrl("pieraksts"), null);
  assert.equal(resolveAppReturnUrl("piera ksts://x"), null);
});
