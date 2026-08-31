/**
 * Single source of truth for the operator's legal identity.
 *
 * Every legal document interpolates these values, so a change to the entity,
 * address or contact details only has to be made here. Apple requires the
 * developer name and address to appear in the EULA (Minimum Terms, item 8) and
 * requires published contact information for user-generated-content apps
 * (App Store Review Guideline 1.2).
 */
export const COMPANY = {
  legalName: 'SIA "DK GROUP"',
  regNo: "50203547731",
  vatNo: "LV50203547731",
  addressLines: [
    "Ropažu novads, Ropažu pagasts",
    'Zaķumuiža, "Plūmes"',
    "LV-2133",
  ],
  country: { en: "Latvia", lv: "Latvija" },
  supportEmail: "support@pieraksts.app",
  privacyEmail: "support@pieraksts.app",
  phoneSupport: "+371 28338094",
  phoneTechnical: "+371 27303530",
  brand: "Pieraksts",
  domain: "pieraksts.app",
} as const;

/** Registered address on one line, for inline use inside a sentence. */
export const COMPANY_ADDRESS_INLINE = COMPANY.addressLines.join(", ");
