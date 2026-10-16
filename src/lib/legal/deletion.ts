import { COMPANY, COMPANY_ADDRESS_INLINE } from "./company";
import type { LegalDoc } from "./types";

/**
 * Account deletion instructions.
 *
 * This page is what goes in the "Account Deletion" field in App Store Connect,
 * which is mandatory for any app that supports account creation
 * (App Store Review Guideline 5.1.1(v)). It must describe deletion of the
 * *account*, not merely deactivation, and must be reachable without logging in.
 *
 * Keep the in-app steps in section 2 in sync with the actual app UI — App
 * Review follows them.
 */
export const deletionDoc: LegalDoc = {
  en: `## 1. You can delete your account yourself

Deleting your Pieraksts account takes under a minute and happens entirely inside the app. You do not need to email us, call us, or fill in a form, and we will not ask you why.

Deletion removes the account. It is not a deactivation or a pause.

## 2. How to delete your account in the app

- Open the Pieraksts app and sign in.
- Go to Profile.
- Choose Delete account.
- Read the summary of what will be removed, then confirm.

You will be signed out immediately and the deletion is carried out at once. You will receive a confirmation email.

## 3. What is deleted

- Your profile: name, display name, email, phone number and profile photograph.
- Your login credentials and authentication records.
- Your bookings and your booking history, including any notes attached to them.
- Reviews and ratings you published.
- Photographs you uploaded.
- Your push notification tokens, so notifications stop immediately.
- Your notification and language settings.

If you are a salon owner, deleting your account also deletes your salon. Before the deletion can finish, you must:

- Cancel or complete all upcoming bookings.
- Hide the salon from Pieraksts.
- Cancel the salon subscription, then wait for the paid period to end.
- Remove all other salon members, such as admins and employees.
- Pay any unpaid Boost commission.

The app shows each step that is still open. When the deletion finishes, we erase the salon name, description, logo, gallery, contact details and address. We keep the salon invoices for 5 years (see section 5), with the company name, registration number, VAT number and legal address on them.

## 4. What happens to your upcoming appointments

Any confirmed bookings you hold in the future are cancelled automatically. The salons concerned are told that the booking is cancelled; they are not told why, and they do not receive your deleted personal data.

If you have an appointment in the next 24 hours, please tell the salon directly as well, so they can offer the slot to someone else.

## 5. What we keep, and for how long

A small amount of data survives deletion, because the law requires it or because it no longer identifies you.

- Accounting records for salon subscriptions and invoices — 5 years, as required by the Latvian Accounting Law. We cannot delete these earlier.
- Records of moderation decisions where your account was restricted for a serious breach — 2 years, so that a banned user cannot simply register again.
- Aggregated and anonymised statistics, such as how many bookings were made in a month. These contain nothing that can be traced back to you.
- Backups, until they are overwritten on their normal rotation, which takes up to 30 days.

Everything else is gone from our live systems as soon as you confirm.

## 6. Deletion is permanent

Once you confirm, we cannot restore your account, your booking history, your reviews or your photographs. If you want a copy of your data, request it before you delete: write to ${COMPANY.privacyEmail} and we will send you an export.

If you sign up again later, it will be a new account with nothing carried over.

## 7. Salon subscriptions

Deleting your account does not cancel an App Store subscription. Apple, not us, manages those. Cancel it in your Apple ID Account Settings, under Subscriptions, before or after you delete the account — otherwise it will continue to renew.

If we invoice your salon directly, tell us at ${COMPANY.supportEmail} so we can close the billing arrangement.

## 8. If you cannot use the in-app option

If you have lost access to your account or cannot reach the delete option, write to ${COMPANY.privacyEmail} from the email address on the account, with the subject "Account deletion". We may ask you to confirm your identity so that nobody else can delete your account. We complete the deletion within 30 days and confirm when it is done.

You can make the same request by post to ${COMPANY.legalName}, ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.en}, or by phone on ${COMPANY.phoneSupport}.

## 9. Your other rights

Deletion is one of several rights you have under the GDPR. You can also ask for a copy of your data, have it corrected, or object to how we use it. Our [Privacy Policy](/legal/privacy-policy) explains all of them, and how to complain to the Data State Inspectorate if you are unhappy with our response.

## 10. Contact

- Email: ${COMPANY.privacyEmail}
- Phone: ${COMPANY.phoneSupport}
- Technical: ${COMPANY.phoneTechnical}`,

  lv: `## 1. Kontu vari dzēst pats

Pieraksts konta dzēšana aizņem mazāk par minūti un notiek pilnībā lietotnē. Nav jāraksta e-pasts, jāzvana vai jāaizpilda forma, un mēs neprasīsim iemeslu.

Dzēšana likvidē kontu. Tā nav deaktivizēšana vai pauze.

## 2. Kā dzēst kontu lietotnē

- Atver Pieraksts lietotni un pieslēdzies.
- Dodies uz sadaļu Profils.
- Izvēlies Dzēst kontu.
- Izlasi kopsavilkumu par to, kas tiks dzēsts, un apstiprini.

Tu tiksi nekavējoties izrakstīts, un dzēšana tiek veikta uzreiz. Uz e-pastu saņemsi apstiprinājumu.

## 3. Kas tiek dzēsts

- Tavs profils: vārds, attēlotais vārds, e-pasts, tālruņa numurs un profila fotoattēls.
- Piekļuves dati un autentifikācijas ieraksti.
- Tavi pieraksti un pierakstu vēsture, tostarp tiem pievienotās piezīmes.
- Tavas publicētās atsauksmes un vērtējumi.
- Tavi augšupielādētie fotoattēli.
- Push paziņojumu tokeni, tāpēc paziņojumi pārstāj nākt uzreiz.
- Paziņojumu un valodas iestatījumi.

Ja esi salona īpašnieks, konta dzēšana likvidē arī Tavu salonu. Pirms dzēšana var noslēgties, izdari šo:

- Atcel vai pabeidz visus gaidāmos pierakstus.
- Paslēp salonu no Pieraksts.
- Atcel salona abonementu un nogaidi, līdz beidzas apmaksātais periods.
- Noņem visus pārējos salona dalībniekus, piemēram, administratorus un darbiniekus.
- Nokārto neapmaksāto Boost komisiju, ja tāda ir.

Lietotne parāda katru vēl neizpildīto soli. Kad dzēšana noslēdzas, mēs izdzēšam salona nosaukumu, aprakstu, logotipu, galeriju, kontaktinformāciju un adresi. Salona rēķinus glabājam 5 gadus (skat. 5. sadaļu), un tajos paliek uzņēmuma nosaukums, reģistrācijas numurs, PVN numurs un juridiskā adrese.

## 4. Kas notiek ar gaidāmajiem pierakstiem

Visi apstiprinātie nākotnes pieraksti tiek automātiski atcelti. Attiecīgajiem saloniem tiek paziņots, ka pieraksts ir atcelts; iemesls netiek norādīts, un Tavi dzēstie personas dati tiem netiek nodoti.

Ja pieraksts ir tuvāko 24 stundu laikā, lūdzu, informē salonu arī tieši, lai tas var piedāvāt laiku citam.

## 5. Ko mēs saglabājam un cik ilgi

Neliela daļa datu dzēšanu pārdzīvo — vai nu tāpēc, ka to prasa normatīvie akti, vai tāpēc, ka tie Tevi vairs neidentificē.

- Grāmatvedības ieraksti par salonu abonementiem un rēķiniem — 5 gadus, kā to nosaka Grāmatvedības likums. Ātrāk tos dzēst nevaram.
- Ieraksti par moderācijas lēmumiem, ja konts ticis ierobežots par smagu pārkāpumu — 2 gadus, lai izslēgts lietotājs nevarētu vienkārši reģistrēties no jauna.
- Apkopota un anonimizēta statistika, piemēram, cik pierakstu veikti mēnesī. Tajā nav nekā, ko varētu saistīt ar Tevi.
- Rezerves kopijas, līdz tās tiek pārrakstītas parastajā rotācijā, kas aizņem līdz 30 dienām.

Viss pārējais no mūsu darba sistēmām pazūd uzreiz pēc apstiprināšanas.

## 6. Dzēšana ir neatgriezeniska

Pēc apstiprināšanas mēs nevaram atjaunot ne kontu, ne pierakstu vēsturi, ne atsauksmes, ne fotoattēlus. Ja vēlies savu datu kopiju, pieprasi to pirms dzēšanas: raksti uz ${COMPANY.privacyEmail}, un mēs nosūtīsim eksportu.

Ja vēlāk reģistrēsies atkārtoti, tas būs jauns konts bez iepriekšējiem datiem.

## 7. Salonu abonementi

Konta dzēšana neatceļ App Store abonementu. Tos pārvalda Apple, nevis mēs. Atcel to sava Apple ID konta iestatījumos sadaļā Abonementi — pirms vai pēc konta dzēšanas —, citādi tas turpinās atjaunoties.

Ja izrakstām salonam rēķinu tieši, informē mūs uz ${COMPANY.supportEmail}, lai varam norēķinu kārtību noslēgt.

## 8. Ja nevari izmantot iespēju lietotnē

Ja esi zaudējis piekļuvi kontam vai nevari atrast dzēšanas iespēju, raksti uz ${COMPANY.privacyEmail} no konta e-pasta adreses ar tematu "Konta dzēšana". Mēs varam lūgt apliecināt identitāti, lai kontu nevarētu dzēst kāds cits. Dzēšanu pabeidzam 30 dienu laikā un par to paziņojam.

To pašu pieprasījumu vari nosūtīt pa pastu: ${COMPANY.legalName}, ${COMPANY_ADDRESS_INLINE}, ${COMPANY.country.lv}, vai pa tālruni ${COMPANY.phoneSupport}.

## 9. Citas Tavas tiesības

Dzēšana ir viena no vairākām VDAR paredzētajām tiesībām. Tu vari arī pieprasīt savu datu kopiju, to labošanu vai iebilst pret to izmantošanu. Mūsu [Privātuma politika](/legal/privacy-policy) skaidro visas šīs tiesības un to, kā iesniegt sūdzību Datu valsts inspekcijai, ja neesi apmierināts ar mūsu atbildi.

## 10. Kontakti

- E-pasts: ${COMPANY.privacyEmail}
- Tālrunis: ${COMPANY.phoneSupport}
- Tehniskie jautājumi: ${COMPANY.phoneTechnical}`,
};
